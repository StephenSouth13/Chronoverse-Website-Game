import type React from "react"
import type { Metadata } from "next"
import { inter, orbitron } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { LanguageProvider } from "@/lib/i18n"
import ChronoBot from "@/components/chatbot/ChronoBot"
import CursorManager from "@/components/common/CursorManager"
import { Toaster } from "@/components/ui/toaster"
import ParticleBackground from "@/components/common/ParticleBackground"
import { AuthProvider } from "@/lib/auth" // Import AuthProvider

export const metadata: Metadata = {
  title: "ChronoVerse - Khám Phá Vũ Trụ",
  description: "Website chính thức của ChronoVerse – game 3D giáo dục nhập vai khám phá vũ trụ.",
  keywords: ["ChronoVerse", "game", "3D", "giáo dục", "nhập vai", "vũ trụ", "sci-fi"],
  openGraph: {
    title: "ChronoVerse - Khám Phá Vũ Trụ",
    description: "Website chính thức của ChronoVerse – game 3D giáo dục nhập vai khám phá vũ trụ.",
    url: "https://chronoverse.com", // Placeholder
    siteName: "ChronoVerse",
    images: [
      {
        url: "/placeholder.svg?height=1200&width=630", // Placeholder image
        width: 1200,
        height: 630,
        alt: "ChronoVerse Game",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChronoVerse - Khám Phá Vũ Trụ",
    description: "Website chính thức của ChronoVerse – game 3D giáo dục nhập vai khám phá vũ trụ.",
    images: ["/placeholder.svg?height=1200&width=630"], // Placeholder image
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-deep-space text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AuthProvider>
              {" "}
              {/* Wrap with AuthProvider */}
              <ParticleBackground />
              <Header />
              <main className="min-h-screen relative z-10">{children}</main>
              <Footer />
              <ChronoBot />
              <CursorManager />
              <Toaster />
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
