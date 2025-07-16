"use client"

import { useCustomCursor } from "@/hooks/use-custom-cursor"

export default function CursorManager() {
  useCustomCursor()
  return null // This component doesn't render anything visible
}
