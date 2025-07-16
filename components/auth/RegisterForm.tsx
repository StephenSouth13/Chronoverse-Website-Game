"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { registerAction } from "@/actions/auth"
import { toast } from "@/hooks/use-toast"
import { useEffect } from "react"

export default function RegisterForm() {
  const { t } = useLanguage()
  const [state, formAction, isPending] = useActionState(registerAction, {
    success: false,
    message: "",
  })

  useEffect(() => {
    if (state.success) {
      toast({
        title: t("registerSuccessTitle"),
        description: t("registerSuccessDescription"),
        variant: "default",
      })
    } else if (state.message) {
      toast({
        title: t("registerErrorTitle"),
        description:
          state.message === "Passwords do not match." ? t("passwordsMismatch") : t("registerErrorDescription"),
        variant: "destructive",
      })
    }
  }, [state, t])

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="username" className="text-metallic-gold">
          {t("username")}
        </Label>
        <Input
          id="username"
          name="username"
          type="text"
          required
          className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue mt-1"
        />
      </div>
      <div>
        <Label htmlFor="password" className="text-metallic-gold">
          {t("password")}
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue mt-1"
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="text-metallic-gold">
          {t("confirmPassword")}
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          className="glassmorphism border-glass-border text-foreground placeholder:text-muted-foreground focus:ring-electric-blue focus:border-electric-blue mt-1"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-electric-blue/50 flex items-center justify-center"
        disabled={isPending}
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t("registerButton")}
      </Button>
      <p className="text-center text-muted-foreground text-sm mt-4">
        {t("alreadyAccount")}{" "}
        <Link href="/login" className="text-electric-blue hover:underline">
          {t("login")}
        </Link>
      </p>
    </form>
  )
}
