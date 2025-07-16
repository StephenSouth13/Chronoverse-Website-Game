"use client"

import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DiscIcon as Discord, X, Youtube, Twitch, Instagram } from "lucide-react"
import { mockFAQs } from "@/lib/data"

export default function CommunityPage() {
  const { lang, t } = useLanguage()

  const socialMediaIcons = [
    { href: "https://discord.gg/your-discord-invite", icon: Discord, label: "Discord" }, // Placeholder
    { href: "https://x.com/your-game-twitter", icon: X, label: "X/Twitter" }, // Placeholder
    { href: "https://youtube.com/your-game-youtube", icon: Youtube, label: "YouTube" }, // Placeholder
    { href: "https://twitch.tv/your-game-twitch", icon: Twitch, label: "Twitch" }, // Placeholder
    { href: "https://instagram.com/your-game-instagram", icon: Instagram, label: "Instagram" }, // Placeholder
  ]

  return (
    <div className="min-h-screen bg-deep-space text-foreground pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <h1 className="text-5xl md:text-6xl font-heading text-center text-nebula-purple mb-12">{t("community")}</h1>
      </ScrollAnimationWrapper>

      {/* Banner */}
      <ScrollAnimationWrapper delay={0.2}>
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-16 shadow-xl">
          <img
            src="/placeholder.svg?height=450&width=800" // Placeholder banner image
            alt="ChronoVerse Community Banner"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space to-transparent flex items-end justify-center p-8">
            <h2 className="text-4xl md:text-5xl font-heading text-white text-shadow-lg">{t("connectWithExplorers")}</h2>
          </div>
        </div>
      </ScrollAnimationWrapper>

      {/* Discord CTA */}
      <section id="discord" className="mb-16 text-center">
        <ScrollAnimationWrapper delay={0.3}>
          <GlassmorphismCard className="p-8 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-heading text-electric-blue mb-6">{t("joinDiscord")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{t("discordDescription")}</p>
            <a href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer">
              <Button className="bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-8 py-3 text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-electric-blue/50 animate-glow flex items-center">
                <Discord className="h-6 w-6 mr-2" /> {t("joinNow")}
              </Button>
            </a>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>

      {/* Social Media Channels */}
      <section id="social" className="mb-16 text-center">
        <ScrollAnimationWrapper delay={0.4}>
          <h2 className="text-3xl md:text-4xl font-heading text-metallic-gold mb-10">{t("socialMedia")}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialMediaIcons.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 flex flex-col items-center group"
              >
                <item.icon className="h-12 w-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg font-semibold group-hover:text-metallic-gold">{item.label}</span>
              </a>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-16">
        <ScrollAnimationWrapper delay={0.5}>
          <h2 className="text-3xl md:text-4xl font-heading text-burning-orange text-center mb-10">{t("faq")}</h2>
          <GlassmorphismCard className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {mockFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-glass-border">
                  <AccordionTrigger className="text-lg font-semibold text-electric-blue hover:text-metallic-gold transition-colors duration-300">
                    {lang === "vi" ? faq.question : faq.question_en}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base py-4">
                    {lang === "vi" ? faq.answer : faq.answer_en}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </section>
    </div>
  )
}
