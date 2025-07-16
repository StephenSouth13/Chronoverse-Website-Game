import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
}

export default function GlassmorphismCard({ children, className }: GlassmorphismCardProps) {
  return <div className={cn("glassmorphism rounded-lg p-6 shadow-lg", className)}>{children}</div>
}
