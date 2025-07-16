"use client"

import Link from "next/link"
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
import { useLanguage } from "@/lib/i18n"
import ScrollAnimationWrapper from "@/components/common/ScrollAnimationWrapper"

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    {
      title: t("aboutGame"),
      links: [
        { href: "/about#story", label: t("storyAndSetting") },
        { href: "/about#gameplay", label: t("coreGameplayLoop") },
        { href: "/about#education", label: t("educationalGoals") },
      ],
    },
    {
      title: t("news"),
      links: [
        { href: "/news?type=devlog", label: t("devlog") },
        { href: "/news?type=patchNotes", label: t("patchNotes") },
        { href: "/news?type=event", label: t("event") },
      ],
    },
    {
      title: t("community"),
      links: [
        { href: "/community#discord", label: "Discord" },
        { href: "/community#social", label: t("socialMedia") },
        { href: "/community#faq", label: t("faq") },
      ],
    },
    {
      title: t("contact"),
      links: [
        { href: "/contact", label: t("contact") }, // Link to the new contact page
        { href: "mailto:stephensouth1307@gmail.com", label: "Email" },
        { href: "tel:+84979137018", label: t("phone") },
      ],
    },
  ]

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
    <footer className="bg-deep-space text-foreground py-12 border-t border-glass-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {quickLinks.map((section, index) => (
            <ScrollAnimationWrapper key={section.title} delay={index * 0.1}>
              <div>
                <h3 className="text-xl font-heading text-electric-blue mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-metallic-gold transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}

          <ScrollAnimationWrapper delay={0.4}>
            <div>
              <h3 className="text-xl font-heading text-electric-blue mb-4">{t("getInTouch")}</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-nebula-purple" />
                  <a
                    href="mailto:stephensouth1307@gmail.com"
                    className="hover:text-metallic-gold transition-colors duration-300"
                  >
                    stephensouth1307@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-nebula-purple" />
                  <a href="tel:+84979137018" className="hover:text-metallic-gold transition-colors duration-300">
                    0979 137 018
                  </a>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-nebula-purple" />
                  Ho Chi Minh City, Vietnam
                </li>
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-glass-border pt-8">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {socialMediaIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                aria-label={item.label}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {personalSocialIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-metallic-gold transition-colors duration-300"
                aria-label={item.label}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Quách Thành Long. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
