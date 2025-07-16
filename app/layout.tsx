import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { ChronoBot } from "@/components/chrono-bot"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "ChronoVerse - Explore the Universe",
  description: "Embark on an epic journey through the cosmos, where knowledge is your greatest weapon.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <I18nextProvider i18n={i18n}>
            <Header />
            {children}
            <ChronoBot />
          </I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
