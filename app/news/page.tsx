"use client"

import { Button } from "@/components/ui/button"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dummy data for news articles
const newsArticles = [
  {
    id: "1",
    title: "ChronoVerse Alpha 1.0 Released!",
    description:
      "We are thrilled to announce the release of ChronoVerse Alpha 1.0, featuring the Mercury and Venus chapters.",
    date: "2025-07-15",
    type: "Devlog",
    image: "/placeholder.svg?height=200&width=300&text=Alpha%20Release",
    content: "Full markdown content for Alpha 1.0 release...",
  },
  {
    id: "2",
    title: "New Multiplayer Features Coming Soon",
    description: "Get ready for exciting new cooperative missions and community events in the next update!",
    date: "2025-07-10",
    type: "Patch Notes",
    image: "/placeholder.svg?height=200&width=300&text=Multiplayer",
    content: "Full markdown content for multiplayer features...",
  },
  {
    id: "3",
    title: "Community Spotlight: Fan Art Contest",
    description: "Showcase your creativity and win exclusive in-game rewards in our first fan art contest.",
    date: "2025-07-01",
    type: "Event",
    image: "/placeholder.svg?height=200&width=300&text=Fan%20Art",
    content: "Full markdown content for fan art contest...",
  },
  {
    id: "4",
    title: "Behind the Scenes: Designing the ChronoBot AI",
    description: "A deep dive into the development process of our intelligent in-game assistant, ChronoBot.",
    date: "2025-06-25",
    type: "Devlog",
    image: "/placeholder.svg?height=200&width=300&text=ChronoBot%20AI",
    content: "Full markdown content for ChronoBot AI design...",
  },
]

export default function NewsPage() {
  const { t } = useTranslation()

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <main className="flex-1 bg-chrono-dark-bg text-chrono-light-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-chrono-electric-blue mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("news_updates")}
        </motion.h1>

        {/* Filter/Search (Placeholder) */}
        <motion.div
          className="mb-12 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          <input
            type="text"
            placeholder="Search news..."
            className="w-full max-w-md p-3 rounded-lg bg-chrono-deep-blue border border-chrono-gray text-chrono-light-gray placeholder:text-chrono-light-gray/70 focus:outline-none focus:ring-2 focus:ring-chrono-electric-blue"
          />
          {/* Add filter dropdowns for type */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className={`delay-${index * 100}`} // Stagger animation
            >
              <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray hover:border-chrono-electric-blue transition-all duration-300 group">
                <Link href={`/news/${article.id}`}>
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="bg-chrono-gray text-chrono-electric-blue">
                        {article.type}
                      </Badge>
                      <span className="text-sm text-chrono-light-gray/70">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-chrono-electric-blue group-hover:text-chrono-electric-blue/90">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-chrono-light-gray/80">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="link"
                      className="text-chrono-electric-blue hover:text-chrono-electric-blue/80 p-0 h-auto"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Devlog (Placeholder) */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-8">Video Devlogs</h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden border border-chrono-gray shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder YouTube video
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
