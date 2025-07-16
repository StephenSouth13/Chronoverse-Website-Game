"use client"

import type React from "react"

import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"
import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import { useLanguage } from "@/lib/i18n"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Twitch,
  Instagram,
  DiscIcon as Discord,
} from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast" // Assuming use-toast is available

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real application, you would send formData to your backend here
    console.log("Form submitted:", formData)

    toast({
      title: t("contactFormSuccessTitle"),
      description: t("contactFormSuccessDescription"),
      variant: "default",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const socialMediaIcons = [
    { href: "https://discord.gg/your-discord-invite", icon: Discord, label: "Discord" }, // Placeholder
    { href: "https://x.com/your-game-twitter", icon: Twitter, label: "X/Twitter" }, // Placeholder
    { href: "https://youtube.com/your-game-youtube", icon: Youtube, label: "YouTube" }, // Placeholder
    { href: "https://twitch.tv/your-game-twitch", icon: Twitch, label: "Twitch" }, // Placeholder
    { href: "https://instagram.com/your-game-instagram", icon: Instagram, label: "Instagram" }, // Placeholder
  ]

  const personalSocialIcons = [
    { href: "https://github.com/quachthanhlong", icon: Github, label: "GitHub" }, // Placeholder
    { href: "https://linkedin.com/in/quachthanhlong", icon: Linkedin, label: "LinkedIn" }, // Placeholder
    { href: "https://x.com/quachthanhlong", icon: Twitter, label: "X/Twitter" }, // Placeholder
  ]

  return (
    <div className="min-h-screen bg-deep-space text-foreground pt-24 pb-12 px-4 md:px-8 lg:px-16">
      <ScrollAnimationWrapper>
        <h1 className="text-5xl md:text-6xl font-heading text-center text-electric-blue mb-12">{t("contact")}</h1>
      </ScrollAnimationWrapper>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ScrollAnimationWrapper delay={0.2}>
          <GlassmorphismCard className="p-8">
            <h2 className="text-3xl font-heading text-metallic-gold mb-6">{t("sendUsAMessage")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("yourName")}
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("yourEmail")}
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("yourMessage")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-electric-blue/50"
              >
                {isSubmitting ? t("sending") : t("sendMessageButton")}
              </Button>
            </form>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>

        {/* Contact Info & Social Media */}
        <ScrollAnimationWrapper delay={0.3}>
          <GlassmorphismCard className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-heading text-nebula-purple mb-6">{t("getInTouch")}</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg text-muted-foreground">
                  <Mail className="h-6 w-6 mr-3 text-electric-blue" />
                  <a
                    href="mailto:stephensouth1307@gmail.com"
                    className="hover:text-metallic-gold transition-colors duration-300"
                  >
                    stephensouth1307@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-lg text-muted-foreground">
                  <Phone className="h-6 w-6 mr-3 text-electric-blue" />
                  <a href="tel:+84979137018" className="hover:text-metallic-gold transition-colors duration-300">
                    0979 137 018
                  </a>
                </li>
                <li className="flex items-center text-lg text-muted-foreground">
                  <MapPin className="h-6 w-6 mr-3 text-electric-blue" />
                  Ho Chi Minh City, Vietnam
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading text-metallic-gold mb-6">{t("followUs")}</h3>
              <div className="flex flex-wrap gap-6 mb-8">
                {socialMediaIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 flex flex-col items-center group"
                    aria-label={item.label}
                  >
                    <item.icon className="h-8 w-8 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover:text-metallic-gold">{item.label}</span>
                  </a>
                ))}
              </div>

              <h3 className="text-2xl font-heading text-burning-orange mb-6">{t("connectWithCreator")}</h3>
              <div className="flex flex-wrap gap-6">
                {personalSocialIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-metallic-gold transition-colors duration-300 flex flex-col items-center group"
                    aria-label={item.label}
                  >
                    <item.icon className="h-8 w-8 mb-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm group-hover:text-metallic-gold">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </GlassmorphismCard>
        </ScrollAnimationWrapper>
      </div>
    </div>
  )
}
