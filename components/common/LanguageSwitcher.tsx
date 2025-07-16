"use client"

import { useLanguage } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  const toggleLanguage = () => {
    setLang(lang === "vi" ? "en" : "vi")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-electric-blue hover:text-metallic-gold transition-colors duration-300"
    >
      {lang === "vi" ? "EN" : "VN"}
    </Button>
  )
}
