"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Twitter, Youtube, Facebook, Twitch, Instagram, InstagramIcon as Tiktok } from "lucide-react"

// Dummy FAQ data
const faqData = [
  {
    question: "What is ChronoVerse?",
    answer:
      "ChronoVerse is a 3D educational RPG where you explore the universe, learn about science, and uncover cosmic mysteries. It blends immersive gameplay with real-world knowledge.",
  },
  {
    question: "How can I play ChronoVerse?",
    answer:
      "You can play ChronoVerse directly in your browser via our WebGL client on the /play page. Ensure your browser is up-to-date and you meet the system requirements.",
  },
  {
    question: "Is ChronoVerse free to play?",
    answer:
      "ChronoVerse will offer a free-to-play experience with optional in-game purchases for cosmetics and expansions. More details will be announced soon.",
  },
  {
    question: "How can I report a bug or provide feedback?",
    answer:
      "The best way to report bugs or provide feedback is through our official Discord server in the #bug-reports or #feedback channels.",
  },
  {
    question: "Will ChronoVerse be available on other platforms?",
    answer:
      "Currently, ChronoVerse is planned for web browser (WebGL). We are exploring options for other platforms in the future.",
  },
]

export default function CommunityPage() {
  const { t } = useTranslation()

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <main className="flex-1 bg-chrono-dark-bg text-chrono-light-gray py-16 md:py-24">
      {/* Community Banner */}
      <section
        className="relative h-[30vh] md:h-[40vh] w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url(/placeholder.svg?height=400&width=1500&text=Community%20Banner)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl font-bold text-chrono-electric-blue drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("community")}
        </motion.h1>
      </section>

      <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Discord CTA */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-8">{t("join_discord")}</h2>
          <Button
            asChild
            className="px-10 py-4 text-xl bg-chrono-nebula-purple text-chrono-dark-bg hover:bg-chrono-nebula-purple/90 shadow-lg shadow-chrono-nebula-purple/50 animate-pulse-glow"
          >
            <Link href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
              <Image
                src="/placeholder.svg?height=32&width=32&text=Discord"
                alt="Discord Icon"
                width={32}
                height={32}
                className="mr-3"
              />
              Discord Server
            </Link>
          </Button>
        </motion.section>

        {/* Social Media Hub */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-8">Social Media Hub</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="https://twitter.com/your-twitter-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Twitter className="h-12 w-12" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://youtube.com/your-youtube-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Youtube className="h-12 w-12" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://facebook.com/your-facebook-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Facebook className="h-12 w-12" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitch.tv/your-twitch-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Twitch className="h-12 w-12" />
              <span className="sr-only">Twitch</span>
            </Link>
            <Link
              href="https://tiktok.com/@your-tiktok-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Tiktok className="h-12 w-12" />
              <span className="sr-only">TikTok</span>
            </Link>
            <Link
              href="https://instagram.com/your-instagram-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chrono-light-gray hover:text-chrono-electric-blue transition-colors"
            >
              <Instagram className="h-12 w-12" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-8">{t("faq")}</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-chrono-gray">
                <AccordionTrigger className="text-lg text-chrono-electric-blue hover:no-underline hover:text-chrono-electric-blue/90">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-chrono-light-gray text-base">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

        {/* Fan Art / Streamer Showcase (Optional) */}
        {/* <motion.section
        className="mt-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-8">Fan Art & Streamer Showcase</h2>
        <p className="text-lg text-chrono-light-gray mb-8">
          Check out amazing creations from our community and streams from our top players!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-chrono-deep-blue rounded-lg flex items-center justify-center text-chrono-light-gray/50">
            Fan Art Gallery Placeholder
          </div>
          <div className="aspect-video bg-chrono-deep-blue rounded-lg flex items-center justify-center text-chrono-light-gray/50">
            Streamer Embed Placeholder
          </div>
        </div>
      </motion.section> */}
      </div>
    </main>
  )
}
