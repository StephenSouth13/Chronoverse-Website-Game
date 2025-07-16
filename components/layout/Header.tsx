"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, LogIn, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/common/ThemeToggle"
import LanguageSwitcher from "@/components/common/LanguageSwitcher"
import { useLanguage } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useAuth } from "@/lib/auth" // Import useAuth

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
  const { user, logout } = useAuth() // Use auth context

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/play", label: t("playGame") },
    { href: "/about", label: t("aboutGame") },
    { href: "/news", label: t("news") },
    { href: "/community", label: t("community") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glassmorphism shadow-lg py-2" : "py-4 bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl font-heading text-electric-blue hover:text-metallic-gold transition-colors duration-300 relative group"
        >
          ChronoVerse
          <span className="absolute inset-0 bg-gradient-to-r from-electric-blue to-nebula-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay blur-sm"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-foreground hover:text-electric-blue relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-electric-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          {user ? (
            <>
              <span className="text-metallic-gold flex items-center">
                <User className="h-5 w-5 mr-1" /> {user.username}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-electric-blue hover:text-metallic-gold transition-colors duration-300"
              >
                <LogOut className="h-5 w-5 mr-1" /> {t("logout")}
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-electric-blue hover:text-metallic-gold transition-colors duration-300"
              >
                <LogIn className="h-5 w-5 mr-1" /> {t("login")}
              </Button>
            </Link>
          )}
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-electric-blue hover:text-metallic-gold"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism absolute top-full left-0 w-full py-4 shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl text-foreground hover:text-electric-blue transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <span className="text-metallic-gold flex items-center text-xl">
                    <User className="h-6 w-6 mr-2" /> {user.username}
                  </span>
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-electric-blue hover:text-metallic-gold transition-colors duration-300 text-xl"
                  >
                    <LogOut className="h-6 w-6 mr-2" /> {t("logout")}
                  </Button>
                </>
              ) : (
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-electric-blue hover:text-metallic-gold transition-colors duration-300 text-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <LogIn className="h-6 w-6 mr-2" /> {t("login")}
                  </Button>
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
