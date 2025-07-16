"use client"

import GlassmorphismCard from "@/components/common/GlassmorphismCard"
import RegisterForm from "@/components/auth/RegisterForm"
import { useLanguage } from "@/lib/i18n"

export default function RegisterPage() {
  const { t } = useLanguage()
  return (
    <div className="flex items-center justify-center min-h-screen bg-deep-space text-foreground p-4">
      <GlassmorphismCard className="w-full max-w-md p-8 text-center">
        <h1 className="text-4xl font-heading text-electric-blue mb-8">{t("register")}</h1>
        <RegisterForm />
      </GlassmorphismCard>
    </div>
  )
}
