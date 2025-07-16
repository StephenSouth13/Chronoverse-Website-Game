"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { loginAction } from "@/actions/auth"
import { toast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/lib/auth"

export default function LoginForm() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()

  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
  })

  useEffect(() => {
    if (state.success) {
      toast({
        title: t("loginSuccessTitle"),
        description: t("loginSuccessDescription"),
        variant: "default",
      })
      login("testuser") // Simulate login in client-side context
      router.push("/") // Redirect to home or dashboard
    } else if (state.message) {
      toast({
        title: t("loginErrorTitle"),
        description: t("loginErrorDescription"),
        variant: "destructive",
      })
    }
  }, [state, t, router, login])

  useEffect(() => {
    if (searchParams.get("register") === "success") {
      toast({
        title: t("registerSuccessTitle"),
        description: t("registerSuccessDescription"),
        variant: "default",
      })
    }
  }, [searchParams, t])

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
      <Button
        type="submit"
        className="w-full bg-electric-blue text-deep-space hover:bg-metallic-gold transition-all duration-300 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-electric-blue/50 flex items-center justify-center"
        disabled={isPending}
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {t("loginButton")}
      </Button>
      <p className="text-center text-muted-foreground text-sm mt-4">
        {t("noAccount")}{" "}
        <Link href="/register" className="text-electric-blue hover:underline">
          {t("register")}
        </Link>
      </p>
    </form>
  )
}
