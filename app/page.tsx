"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, BookOpenText } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Particle effect component
const ParticleEffect = () => {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    const createParticle = () => {
      const particle = document.createElement("div")
      particle.classList.add("particle")
      const size = Math.random() * 3 + 1 // 1 to 4px
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDuration = `${Math.random() * 10 + 5}s` // 5 to 15s
      particle.style.setProperty("--x", `${(Math.random() - 0.5) * 200}px`) // -100 to 100px
      particle.style.setProperty("--y", `${(Math.random() - 0.5) * 200}px`) // -100 to 100px
      container.appendChild(particle)

      // Remove particle after animation
      particle.addEventListener("animationend", () => {
        particle.remove()
      })
    }

    const interval = setInterval(createParticle, 500) // Create a new particle every 0.5s

    return () => clearInterval(interval)
  }, [])

  return <div ref={particlesRef} className="particle-container"></div>
}

export default function HomePage() {
  const { t } = useTranslation()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) // Adjust for desired parallax effect

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-chrono-dark-bg flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 z-0">
          {/* Placeholder for video trailer */}
          <video
            className="w-full h-full object-cover"
            src="https://assets.mixkit.co/videos/preview/mixkit-space-travel-through-a-galaxy-4000-large.mp4" // Example video
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        </div>
        <ParticleEffect /> {/* Particle effects */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-chrono-electric-blue mb-4 drop-shadow-lg font-geist-mono"
            variants={fadeInVariants}
          >
            ChronoVerse
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-chrono-light-gray max-w-3xl mb-8"
            variants={fadeInVariants}
          >
            {t("slogan")}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInVariants}>
            <Button
              asChild
              className="px-8 py-3 text-lg bg-chrono-electric-blue text-chrono-dark-bg hover:bg-chrono-electric-blue/90 shadow-lg shadow-chrono-electric-blue/50 animate-pulse-glow"
            >
              <Link href="/play">{t("play_now")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 text-lg border-chrono-electric-blue text-chrono-electric-blue hover:bg-chrono-electric-blue/10 hover:text-chrono-electric-blue bg-transparent"
            >
              <Link href="/about">{t("discover_universe")}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Brief Introduction */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-chrono-dark-bg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          {t("brief_intro_title")}
        </motion.h2>
        <motion.p
          className="text-lg text-chrono-light-gray text-center max-w-4xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          {t("brief_intro_text")}
        </motion.p>

        <motion.h3
          className="text-2xl md:text-3xl font-bold text-center text-chrono-electric-blue mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          {t("key_features_title")}
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="delay-100"
          >
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray hover:border-chrono-electric-blue transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-chrono-electric-blue mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-semibold text-chrono-electric-blue">
                  {t("feature_education")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Explore diverse scientific fields and gain knowledge through interactive gameplay.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="delay-200"
          >
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray hover:border-chrono-electric-blue transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-chrono-nebula-purple mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-semibold text-chrono-nebula-purple">
                  {t("feature_multiplayer")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Team up with friends to tackle challenges and explore the cosmos together.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            className="delay-300"
          >
            <Card className="bg-chrono-deep-blue border-chrono-gray text-chrono-light-gray hover:border-chrono-electric-blue transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center text-center">
                <BookOpenText className="h-12 w-12 text-chrono-metallic-gold mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-semibold text-chrono-metallic-gold">{t("feature_story")}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Immerse yourself in a rich narrative filled with cosmic mysteries and ancient secrets.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-chrono-dark-bg">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-chrono-electric-blue mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          Gallery
        </motion.h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[1, 2, 3, 4].map((i) => (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card className="bg-chrono-deep-blue border-chrono-gray">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image
                        src={`/placeholder.svg?height=400&width=800&text=Screenshot%20${i}`}
                        alt={`Game Screenshot ${i}`}
                        width={800}
                        height={400}
                        className="rounded-md object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-chrono-electric-blue hover:bg-chrono-electric-blue/10" />
          <CarouselNext className="text-chrono-electric-blue hover:bg-chrono-electric-blue/10" />
        </Carousel>
      </section>

      {/* Community Call to Action */}
      <section className="bg-chrono-deep-blue py-16 md:py-24 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-chrono-electric-blue mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariants}
        >
          {t("join_community")}
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: {
              staggerChildren: 0.1,
            },
          }}
        >
          <motion.div variants={fadeInVariants}>
            <Button
              asChild
              className="px-8 py-3 text-lg bg-chrono-nebula-purple text-chrono-dark-bg hover:bg-chrono-nebula-purple/90 shadow-lg shadow-chrono-nebula-purple/50 animate-pulse-glow"
            >
              <Link href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=Discord"
                  alt="Discord Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Discord
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 text-lg border-chrono-metallic-gold text-chrono-metallic-gold hover:bg-chrono-metallic-gold/10 hover:text-chrono-metallic-gold bg-transparent"
            >
              <Link href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=X"
                  alt="X/Twitter Icon"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                X / Twitter
              </Link>
            </Button>
          </motion.div>
          {/* Add more social media buttons */}
        </motion.div>
      </section>
    </main>
  )
}
