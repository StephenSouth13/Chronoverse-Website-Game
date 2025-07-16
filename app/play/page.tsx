"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Maximize, Volume2, VolumeX, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PlayGamePage() {
  const { t } = useTranslation()
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingMessage, setLoadingMessage] = useState(t("loading_galaxy"))
  const [isGameLoaded, setIsGameLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true) // Assuming game starts muted
  const [isFullScreen, setIsFullScreen] = useState(false)

  const loadingMessages = [
    t("loading_galaxy"),
    t("preparing_journey"),
    t("initializing_ai"),
    "Calibrating warp drives...",
    "Engaging stellar cartography...",
    "Synchronizing quantum entanglement...",
  ]

  useEffect(() => {
    if (loadingProgress < 100) {
      const timer = setTimeout(() => {
        setLoadingProgress((prev) => prev + Math.random() * 10 + 5) // Simulate loading
        setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)])
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsGameLoaded(true)
    }
  }, [loadingProgress, t]) // Removed loadingMessages from dependencies

  const handleFullscreen = () => {
    const gameContainer = document.getElementById("game-container")
    if (gameContainer) {
      if (!document.fullscreenElement) {
        gameContainer.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`)
        })
        setIsFullScreen(true)
      } else {
        document.exitFullscreen()
        setIsFullScreen(false)
      }
    }
  }

  const handleExitGame = () => {
    alert("Game exited. In a real scenario, this would unload the WebGL build or redirect.")
    // In a real scenario, you might unload the Unity WebGL build or redirect
    setIsGameLoaded(false)
    setLoadingProgress(0)
    setLoadingMessage(t("loading_galaxy"))
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-chrono-dark-bg text-chrono-light-gray p-4">
      {!isGameLoaded ? (
        <motion.div
          className="flex flex-col items-center gap-6 p-8 bg-chrono-deep-blue border border-chrono-gray rounded-lg shadow-lg max-w-md w-full frosted-glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-chrono-electric-blue">{t("loading_game")}</h1>
          <div className="relative w-full h-2 bg-chrono-gray rounded-full overflow-hidden">
            <Progress value={loadingProgress} className="w-full h-full bg-chrono-electric-blue" />
          </div>
          <p className="text-sm text-chrono-light-gray/80">{loadingMessage}</p>
          <p className="text-xs text-chrono-light-gray/60 mt-2">
            {t("did_you_know")} "The universe is estimated to be 13.8 billion years old."
          </p>
        </motion.div>
      ) : (
        <div
          id="game-container"
          className={`relative w-full h-[calc(100vh-8rem)] bg-black rounded-lg overflow-hidden border border-chrono-electric-blue shadow-lg ${isFullScreen ? "fixed inset-0 z-50 rounded-none" : ""}`}
        >
          {/* Placeholder for Unity WebGL Game */}
          <iframe
            src="/placeholder.html" // This would be your Unity WebGL build's index.html
            title="ChronoVerse Game"
            className="w-full h-full border-none"
            allowFullScreen
            // sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-fullscreen" // Important for WebGL
          ></iframe>

          {/* Game Controls */}
          <div className={`absolute top-4 right-4 flex gap-2 z-10 ${isFullScreen ? "fixed top-4 right-4" : ""}`}>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMuted(!isMuted)}
              className="bg-chrono-deep-blue border-chrono-gray text-chrono-electric-blue hover:bg-chrono-gray/50 frosted-glass"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              <span className="sr-only">{t("volume")}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleFullscreen}
              className="bg-chrono-deep-blue border-chrono-gray text-chrono-electric-blue hover:bg-chrono-gray/50 frosted-glass"
            >
              <Maximize className="h-5 w-5" />
              <span className="sr-only">{t("full_screen")}</span>
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={handleExitGame}
              className="bg-chrono-burnt-orange text-chrono-dark-bg hover:bg-chrono-burnt-orange/90 frosted-glass"
            >
              <XCircle className="h-5 w-5" />
              <span className="sr-only">{t("exit_game")}</span>
            </Button>
          </div>

          {/* System Requirements */}
          <div
            className={`absolute bottom-4 left-4 p-4 bg-chrono-deep-blue border border-chrono-gray rounded-lg text-sm frosted-glass ${isFullScreen ? "hidden" : ""}`}
          >
            <h3 className="font-semibold text-chrono-electric-blue mb-2">{t("system_requirements")}</h3>
            <p className="text-chrono-light-gray">
              {t("recommended_config")} {"CPU: i5+, GPU: GTX 1060+, RAM: 8GB+"}
            </p>
            <p className="text-chrono-light-gray">
              {t("browser_support")} {"Chrome, Firefox, Edge (latest versions)"}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
