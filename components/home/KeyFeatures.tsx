"use client"

import { mockKeyFeatures } from "@/lib/data"
import { useLanguage } from "@/lib/i18n"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import * as LucideIcons from "lucide-react"

export default function KeyFeatures() {
  const { lang, t } = useLanguage()

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <h2 className="text-4xl md:text-5xl font-heading text-center text-metallic-gold mb-12">{t("keyFeatures")}</h2>
      </ScrollAnimationWrapper>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockKeyFeatures.map((feature, index) => {
          const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons]
          return (
            <ScrollAnimationWrapper key={index} delay={index * 0.1}>
              <GlassmorphismCard className="flex flex-col items-center text-center p-6 hover:shadow-electric-blue/30 hover:scale-105 transition-all duration-300">
                {IconComponent && <IconComponent className="h-16 w-16 text-electric-blue mb-4 animate-pulse" />}
                <h3 className="text-2xl font-heading text-nebula-purple mb-2">
                  {lang === "vi" ? feature.title : feature.title_en}
                </h3>
                <p className="text-muted-foreground">{lang === "vi" ? feature.description : feature.description_en}</p>
              </GlassmorphismCard>
            </ScrollAnimationWrapper>
          )
        })}
      </div>
    </section>
  )
}
