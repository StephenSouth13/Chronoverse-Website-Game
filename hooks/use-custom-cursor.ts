"use client"

import { useEffect, useRef } from "react"
import { toast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/i18n"

export function useCustomCursor() {
  const { t } = useLanguage()
  const lastRightClickTime = useRef(0)
  const doubleClickThreshold = 300 // milliseconds

  useEffect(() => {
    const body = document.body
    const customCursorClass = "custom-spaceship-cursor"

    // Set initial custom cursor
    body.classList.add(customCursorClass)

    const handleContextMenu = (event: MouseEvent) => {
      const currentTime = Date.now()
      if (currentTime - lastRightClickTime.current < doubleClickThreshold) {
        event.preventDefault() // Prevent default context menu on double right-click

        const isCustomActive = body.classList.toggle(customCursorClass)

        if (isCustomActive) {
          toast({
            title: t("cursorChangedTitle"),
            description: t("cursorChangedDescription"),
            duration: 2000,
          })
        } else {
          toast({
            title: t("cursorResetTitle"),
            description: t("cursorResetDescription"),
            duration: 2000,
          })
        }
        lastRightClickTime.current = 0 // Reset for next sequence
      } else {
        lastRightClickTime.current = currentTime
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      // Clean up: ensure cursor is reset when component unmounts
      body.classList.remove(customCursorClass)
    }
  }, [t]) // Add t to dependency array
}
