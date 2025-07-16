"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Fullscreen, Minimize, Volume2, VolumeX } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"

export default function PlayGamePage() {
  const { t } = useLanguage()
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)
  const [isGameLoaded, setIsGameLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Assuming game starts muted
  const [isFullscreen, setIsFullscreen] = useState(false)

  const loadingMessages = [t("loadingGalaxy"), t("preparingJourney"), t("initializingAI")]

  const didYouKnowFacts = [
    "Did you know? The observable universe is estimated to be 93 billion light-years in diameter.",
    "Did you know? A light-year is the distance light travels in one Earth year, about 9.46 trillion kilometers.",
    "Did you know? The Sun is a yellow dwarf star, and it accounts for 99.86% of the mass in our solar system.",
    "Did you know? There are more stars in the universe than grains of sand on all the beaches on Earth.",
  ]

  useEffect(() => {
    if (!isGameLoaded) {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsGameLoaded(true)
            return 100
          }
          return prev + Math.random() * 10 // Simulate loading
        })
      }, 500)

      const messageInterval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length)
      }, 3000) // Change message every 3 seconds

      return () => {
        clearInterval(interval)
        clearInterval(messageInterval)
      }
    }
  }, [isGameLoaded, loadingMessages.length])

  const toggleFullscreen = () => {
    const elem = document.getElementById("game-container")
    if (elem) {
      if (!isFullscreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if ((elem as any).mozRequestFullScreen) {
          /* Firefox */
          ;(elem as any).mozRequestFullScreen()
        } else if ((elem as any).webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          ;(elem as any).webkitRequestFullscreen()
        } else if ((elem as any).msRequestFullscreen) {
          /* IE/Edge */
          ;(elem as any).msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if ((document as any).mozCancelFullScreen) {
          /* Firefox */
          ;(document as any).mozCancelFullScreen()
        } else if ((document as any).webkitExitFullscreen) {
          /* Chrome, Safari and Opera */
          ;(document as any).webkitExitFullscreen()
        } else if ((document as any).msExitFullscreen) {
          /* IE/Edge */
          ;(document as any).msExitFullscreen()
        }
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("msfullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("msfullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-deep-space text-foreground flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-heading text-electric-blue mb-8 mt-20 md:mt-24">{t("playGame")}</h1>

      <AnimatePresence mode="wait">
        {!isGameLoaded ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full max-w-2xl glassmorphism p-8 rounded-lg shadow-lg"
          >
            <div className="relative w-32 h-32 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-t-4 border-electric-blue animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-t-4 border-nebula-purple animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-4 border-t-4 border-metallic-gold animate-spin-slower"></div>
            </div>
            <h2 className="text-2xl font-heading text-metallic-gold mb-4">ChronoVerse</h2>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
              <motion.div
                className="bg-electric-blue h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
            <p className="text-lg text-nebula-purple font-heading mb-2">
              {loadingMessages[loadingMessageIndex]} ({Math.round(loadingProgress)}%)
            </p>
            <motion.p
              key={loadingMessageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-sm text-muted-foreground mt-4 italic"
            >
              {t("didYouKnow?")} {didYouKnowFacts[Math.floor(Math.random() * didYouKnowFacts.length)]}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl aspect-video bg-black rounded-lg shadow-2xl overflow-hidden relative"
            id="game-container"
          >
            {/* Unity WebGL Game Frame */}
            <iframe
              src="https://play.unity.com/mg/other/your-webgl-game-url" // TODO: Replace with your actual Unity WebGL game URL
              title="ChronoVerse Game"
              className="w-full h-full border-0"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-fullscreen"
            ></iframe>

            {/* Game Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                className="glassmorphism text-electric-blue hover:text-metallic-gold border-electric-blue hover:border-metallic-gold"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                <span className="sr-only">Toggle Mute</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFullscreen}
                className="glassmorphism text-electric-blue hover:text-metallic-gold border-electric-blue hover:border-metallic-gold bg-transparent"
              >
                {isFullscreen ? <Minimize className="h-5 w-5" /> : <Fullscreen className="h-5 w-5" />}
                <span className="sr-only">Toggle Fullscreen</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollAnimationWrapper delay={isGameLoaded ? 0.5 : 0}>
        <GlassmorphismCard className="mt-12 p-6 w-full max-w-2xl text-center">
          <h3 className="text-2xl font-heading text-metallic-gold mb-4">{t("systemRequirements")}</h3>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>
              <strong>{t("cpu")}:</strong> Intel Core i5-8400 / AMD Ryzen 5 2600 or equivalent
            </p>
            <p>
              <strong>{t("gpu")}:</strong> NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 or equivalent
            </p>
            <p>
              <strong>{t("ram")}:</strong> 8 GB
            </p>
            <p>
              <strong>{t("os")}:</strong> Windows 10 (64-bit) or macOS 10.15+
            </p>
            <p>
              <strong>{t("browser")}:</strong> Latest Chrome, Firefox, Edge, or Safari with WebGL 2.0 support.
            </p>
            <p className="text-xs italic text-nebula-purple">{t("systemRequirementsNote")}</p>
          </div>
        </GlassmorphismCard>
      </ScrollAnimationWrapper>
    </div>
  )
}
