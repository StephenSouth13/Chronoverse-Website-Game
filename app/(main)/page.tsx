"use client"

import HeroSection from "@/components/home/HeroSection"
import KeyFeatures from "@/components/home/KeyFeatures"
import GallerySection from "@/components/home/GallerySection"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("HomePage")

  return (
    <div className="relative overflow-hidden">
      <HeroSection />

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <ScrollAnimationWrapper>
          <div className="container mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading text-electric-blue mb-6">{t("slogan")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{t("chronoVerseDescription")}</p>
          </div>
        </ScrollAnimationWrapper>

        <KeyFeatures />
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-16">
        <GallerySection />
      </section>

      {/* Add more sections as needed */}
    </div>
  )
}
