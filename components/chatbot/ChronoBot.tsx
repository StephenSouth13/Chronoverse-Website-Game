"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/i18n"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChatMessage {
  id: string
  sender: "user" | "bot"
  text: string
}

export default function ChronoBot() {
  const { t, lang } = useLanguage()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Initial greeting from ChronoBot
    if (isOpen && messages.length === 0) {
      const initialMessage: ChatMessage = {
        id: "bot-greeting",
        sender: "bot",
        text: t("chronoBotGreeting"),
      }
      setMessages([initialMessage])
    }
  }, [isOpen, messages.length, t])

  const getContextualPrompt = (userMessage: string) => {
    let context = ""
    if (pathname.includes("/about")) {
      context =
        'The user is currently on the "About Game" page. Focus on game lore, story, gameplay mechanics, educational goals, chapters, multiplayer features, and underlying technology.'
    } else if (pathname.includes("/play")) {
      context =
        'The user is currently on the "Play Game" page. Focus on game controls, system requirements, how to play, and troubleshooting.'
    } else if (pathname.includes("/news")) {
      context =
        'The user is currently on the "News & Updates" page. Focus on recent updates, patch notes, devlogs, and events.'
    } else if (pathname.includes("/community")) {
      context =
        'The user is currently on the "Community" page. Focus on how to join Discord, social media channels, and FAQs.'
    } else if (pathname === "/") {
      context =
        "The user is on the homepage. Provide a general overview of ChronoVerse, its key features, and what makes it unique."
    }

    const longInfo =
      lang === "vi"
        ? `Quách Thành Long là người sáng tạo ra game ChronoVerse. Bạn có thể tìm hiểu thêm về anh ấy tại website quachthanhlong.com.`
        : `Quach Thanh Long is the creator of the ChronoVerse game. You can learn more about him at quachthanhlong.com.`

    const gameInfo =
      lang === "vi"
        ? `
    ChronoVerse là một game 3D giáo dục nhập vai khám phá vũ trụ.
    Thể loại: RPG, giáo dục, khoa học viễn tưởng.
    Mục tiêu giáo dục: Học về thiên văn, vật lý, sinh học vũ trụ.
    Cốt truyện: Học viên ChronoVerse khám phá thiên hà, giải mã bí ẩn vũ trụ.
    Gameplay: Khám phá, giải đố, xây dựng.
    Chương game: Sao Thủy (Năng lượng & Bức xạ), Sao Kim (Khí quyển & Hiệu ứng nhà kính), Sao Hỏa (Địa chất & Khả năng sống), Trạm Thời Gian (Vật lý lượng tử & Du hành thời gian), Vùng Tối (Vật chất tối & Năng lượng tối).
    Multiplayer: Co-op, vai trò Phi công, Kỹ sư, Nhà khoa học.
    Công nghệ: Unity Engine, Photon Fusion, WebGL, AI.
    Yêu cầu hệ thống: CPU i5-8400/Ryzen 5 2600, GPU GTX 1060/RX 580, RAM 8GB, Windows 10/macOS 10.15+, trình duyệt WebGL 2.0.
    Cộng đồng: Discord, X/Twitter, YouTube, Twitch, Instagram.
  `
        : `
    ChronoVerse is a 3D educational RPG game exploring the universe.
    Genre: RPG, educational, sci-fi.
    Educational goal: Learn about astronomy, physics, astrobiology.
    Story: ChronoVerse cadets explore galaxies, unravel cosmic mysteries.
    Gameplay: Exploration, puzzles, building.
    Game chapters: Mercury (Energy & Radiation), Venus (Atmosphere & Greenhouse Effect), Mars (Geology & Habitability), Time Station (Quantum Physics & Time Travel), Dark Zone (Dark Matter & Dark Energy).
    Multiplayer: Co-op, roles: Pilot, Engineer, Scientist.
    Technology: Unity Engine, Photon Fusion, WebGL, AI.
    System requirements: CPU i5-8400/Ryzen 5 2600, GPU GTX 1060/RX 580, RAM 8GB, Windows 10/macOS 10.15+, WebGL 2.0 browser.
    Community: Discord, X/Twitter, YouTube, Twitch, Instagram.
  `

    return `
    You are ChronoBot, an AI assistant for the ChronoVerse game website.
    Your primary goal is to provide accurate and helpful information about the ChronoVerse game.
    The game is a 3D educational RPG exploring the universe.
    Here is detailed information about the game:
    ${gameInfo}
    If asked about Quach Thanh Long, provide this information: "${longInfo}"
    Current user context: ${context}
    Answer in ${lang === "vi" ? "Vietnamese" : "English"}.
    User's question: ${userMessage}
  `
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() === "") return

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: inputMessage,
    }
    setMessages((prev) => [...prev, newUserMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const prompt = getContextualPrompt(newUserMessage.text)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      const botMessage: ChatMessage = {
        id: Date.now().toString() + "-bot",
        sender: "bot",
        text: data.response,
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error fetching AI response:", error)
      const errorMessage: ChatMessage = {
        id: Date.now().toString() + "-error",
        sender: "bot",
        text:
          lang === "vi"
            ? "Xin lỗi, tôi không thể xử lý yêu cầu của bạn lúc này. Vui lòng thử lại sau."
            : "Sorry, I cannot process your request at the moment. Please try again later.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-electric-blue text-deep-space rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 z-50 animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open ChronoBot chat"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 100, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[70vh] glassmorphism rounded-lg shadow-2xl flex flex-col z-50 border border-glass-border"
          >
            <div className="flex items-center justify-between p-4 border-b border-glass-border">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="ChronoBot Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h3 className="text-xl font-heading text-electric-blue">ChronoBot</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-electric-blue"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close chat</span>
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-nebula-purple text-white rounded-br-none"
                        : "bg-gray-700 text-white rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-700 text-white rounded-bl-none flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin mr-2" /> {t("chronoBotTyping")}
                  </div>
                </div>
              )}
            </ScrollArea>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-glass-border flex items-center">
              <Input
                type="text"
                placeholder={t("sendMessage")}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue mr-2"
              />
              <Button type="submit" size="icon" className="bg-electric-blue text-deep-space hover:bg-metallic-gold">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
