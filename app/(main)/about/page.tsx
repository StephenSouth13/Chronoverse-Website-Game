"use client"

import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import { useLanguage } from "@/lib/i18n"
import { mockChapters } from "@/lib/data"
import * as LucideIcons from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react"
import type { Chapter } from "@/lib/types"

export default function AboutPage() {
  const { lang, t } = useLanguage()
  const [isChapterModalOpen, setIsChapterModalOpen] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)

  const openChapterModal = (chapter: Chapter) => {
    setSelectedChapter(chapter)
    setIsChapterModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-deep-space text-foreground pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <h1 className="text-5xl md:text-6xl font-heading text-center text-electric-blue mb-12">
          {t("exploreChronoVerse")}
        </h1>
      </ScrollAnimationWrapper>

      {/* Hero Banner */}
      <ScrollAnimationWrapper delay={0.2}>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-16 shadow-xl">
          <Image
            src="/placeholder.svg?height=540&width=960" // Placeholder banner image
            alt="ChronoVerse Banner"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent flex items-end justify-center p-8">
            <h2 className="text-4xl md:text-5xl font-heading text-white text-shadow-lg">{t("journeyInfinite")}</h2>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Story & Setting */}
      <section id="story" className="mb-16">
        <ScrollAnimationWrapper delay={0.3}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl md:text-4xl font-heading text-metallic-gold mb-6">{t("storyAndSetting")}</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>{t("storyIntro")}</p>
              <p>{t("storyDetail")}</p>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Gameplay Core Loop */}
      <section id="gameplay" className="mb-16">
        <ScrollAnimationWrapper delay={0.4}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl md:text-4xl font-heading text-electric-blue mb-6">{t("coreGameplayLoop")}</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>{t("gameplayIntro")}</p>
              <p>{t("gameplayDetail")}</p>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Educational Goals */}
      <section id="education" className="mb-16">
        <ScrollAnimationWrapper delay={0.5}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl md:text-4xl font-heading text-nebula-purple mb-6">{t("educationalGoals")}</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>{t("educationIntro")}</p>
              <p>{t("educationDetail")}</p>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Chapter Structure */}
      <section id="chapters" className="mb-16">
        <ScrollAnimationWrapper delay={0.6}>
          <h2 className="text-3xl md:text-4xl font-heading text-metallic-gold text-center mb-10">
            {t("chapterStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockChapters.map((chapter, index) => {
              const IconComponent = LucideIcons[chapter.icon as keyof typeof LucideIcons]
              return (
                <GlassmorphismCard
                  key={chapter.id}
                  className="p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-metallic-gold/30 hover:scale-105 transition-all duration-300"
                  onClick={() => openChapterModal(chapter)}
                >
                  {IconComponent && <IconComponent className="h-12 w-12 text-burning-orange mb-4" />}
                  <h3 className="text-2xl font-heading text-electric-blue mb-2">
                    {lang === "vi" ? chapter.name : chapter.name_en}
                  </h3>
                  <p className="text-md text-muted-foreground">{lang === "vi" ? chapter.theme : chapter.theme_en}</p>
                </GlassmorphismCard>
              )
            })}
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Multiplayer Features */}
      <section id="multiplayer" className="mb-16">
        <ScrollAnimationWrapper delay={0.7}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl md:text-4xl font-heading text-burning-orange mb-6">{t("multiplayerFeatures")}</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>{t("multiplayerIntro")}</p>
              <p>{t("multiplayerDetail")}</p>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Underlying Technology */}
      <section id="tech" className="mb-16">
        <ScrollAnimationWrapper delay={0.8}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl md:text-4xl font-heading text-electric-blue mb-6">{t("underlyingTechnology")}</h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>{t("techIntro")}</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Unity Engine:</strong> {t("techUnity")}
                </li>
                <li>
                  <strong>Photon Fusion:</strong> {t("techPhoton")}
                </li>
                <li>
                  <strong>WebGL:</strong> {t("techWebGL")}
                </li>
                <li>
                  <strong>AI & Machine Learning:</strong> {t("techAI")}
                </li>
              </ul>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Chapter Detail Modal */}
      <Dialog open={isChapterModalOpen} onOpenChange={setIsChapterModalOpen}>
        <DialogContent className="max-w-3xl glassmorphism p-6 border-glass-border">
          {selectedChapter && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading text-electric-blue">
                  {lang === "vi" ? selectedChapter.name : selectedChapter.name_en}
                </DialogTitle>
                <DialogDescription className="text-lg text-nebula-purple">
                  {lang === "vi" ? selectedChapter.theme : selectedChapter.theme_en}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                <Image
                  src={selectedChapter.image || "/placeholder.svg"}
                  alt={lang === "vi" ? selectedChapter.name : selectedChapter.name_en}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover"
                />
                <p className="text-muted-foreground">
                  {lang === "vi" ? selectedChapter.description : selectedChapter.description_en}
                </p>
                <p className="text-sm text-gray-500 italic">{t("chapterInfoUpdate")}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
