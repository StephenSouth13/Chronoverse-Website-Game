"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { type Message, useChat } from "ai/react"
import { Bot, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { usePathname } from "next/navigation"

export function ChronoBot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
    onFinish: (message) => {
      // Optional: Add a welcome message if it's the first message
      if (messages.length === 0 && message.role === "assistant") {
        // This might not be the best place for a welcome message,
        // better to handle it in the API route or on initial load.
      }
    },
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { t, i18n } = useTranslation()
  const pathname = usePathname()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Set initial welcome message when chat opens or language changes
    if (isOpen && messages.length === 0) {
      setMessages([{ id: "welcome", role: "assistant", content: t("chat_welcome") }])
    }
  }, [isOpen, i18n.language]) // Re-run when language changes

  const handleChatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Pass current path and language as headers or body to the API
    handleSubmit(e, {
      data: {
        currentPath: pathname,
        language: i18n.language,
      },
    })
  }

  return (
    <>
      {/* Floating Icon */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 z-[100] rounded-full h-14 w-14 bg-chrono-electric-blue text-chrono-dark-bg shadow-lg animate-pulse-glow hover:bg-chrono-electric-blue/90"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        <span className="sr-only">Toggle ChronoBot Chat</span>
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[99] w-full max-w-sm md:max-w-md h-[70vh] bg-chrono-deep-blue border border-chrono-gray rounded-lg shadow-xl flex flex-col frosted-glass">
          <div className="flex items-center justify-between p-4 border-b border-chrono-gray">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="ChronoBot" />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg text-chrono-electric-blue">ChronoBot</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-chrono-light-gray hover:text-chrono-electric-blue"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close chat</span>
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4 space-y-4">
            {messages.map((m: Message) => (
              <div
                key={m.id}
                className={cn("flex items-start gap-3", m.role === "user" ? "justify-end" : "justify-start")}
              >
                {m.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="ChronoBot" />
                    <AvatarFallback>CB</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm",
                    m.role === "user"
                      ? "bg-chrono-electric-blue text-chrono-dark-bg rounded-br-none"
                      : "bg-chrono-gray text-chrono-light-gray rounded-bl-none",
                  )}
                >
                  {m.content}
                </div>
                {m.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="ChronoBot" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%] rounded-lg p-3 text-sm bg-chrono-gray text-chrono-light-gray rounded-bl-none flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("typing_indicator")}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </ScrollArea>

          <form onSubmit={handleChatSubmit} className="p-4 border-t border-chrono-gray flex items-center gap-2">
            <Input
              className="flex-1 bg-chrono-gray border-chrono-gray text-chrono-light-gray placeholder:text-chrono-light-gray/70 focus-visible:ring-chrono-electric-blue"
              placeholder={t("chat_ai_placeholder")}
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
              className="bg-chrono-electric-blue text-chrono-dark-bg hover:bg-chrono-electric-blue/90"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">{t("send")}</span>
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
