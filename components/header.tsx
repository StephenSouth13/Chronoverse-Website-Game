"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "react-i18next"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
  const { setTheme, theme } = useTheme()
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    const currentPathWithoutLocale = pathname.replace(/^\/(en|vn)/, "")
    router.push(`/${lng}${currentPathWithoutLocale}`)
  }

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/play", label: t("play_game") },
    { href: "/about", label: t("about_game") },
    { href: "/news", label: t("news_updates") },
    { href: "/community", label: t("community") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-chrono-gray bg-chrono-deep-blue/80 frosted-glass">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-chrono-electric-blue">
          <Image src="/placeholder.svg?height=24&width=24" alt="ChronoVerse Logo" width={24} height={24} />
          ChronoVerse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-chrono-electric-blue ${
                pathname.includes(link.href) && link.href !== "/"
                  ? "text-chrono-electric-blue"
                  : pathname === "/" && link.href === "/"
                    ? "text-chrono-electric-blue"
                    : "text-chrono-light-gray"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-chrono-light-gray hover:text-chrono-electric-blue">
                {i18n.language.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-chrono-deep-blue border-chrono-gray">
              <DropdownMenuItem
                onClick={() => changeLanguage("en")}
                className="text-chrono-light-gray hover:bg-chrono-gray hover:text-chrono-electric-blue"
              >
                EN
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => changeLanguage("vn")}
                className="text-chrono-light-gray hover:bg-chrono-gray hover:text-chrono-electric-blue"
              >
                VN
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-chrono-light-gray hover:text-chrono-electric-blue"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Navigation Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-chrono-light-gray hover:text-chrono-electric-blue">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-chrono-dark-bg border-chrono-gray p-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-chrono-electric-blue ${
                      pathname.includes(link.href) && link.href !== "/"
                        ? "text-chrono-electric-blue"
                        : pathname === "/" && link.href === "/"
                          ? "text-chrono-electric-blue"
                          : "text-chrono-light-gray"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
