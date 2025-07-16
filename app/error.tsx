"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deep-space text-foreground text-center px-4">
      <h2 className="text-3xl font-semibold text-burning-orange mb-4 font-heading">Something went wrong!</h2>
      <p className="text-lg text-muted-foreground mb-6">A cosmic anomaly has occurred. Please try again.</p>
      <Button
        className="bg-burning-orange text-deep-space hover:bg-metallic-gold transition-colors duration-300 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-burning-orange/50"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Retry Mission
      </Button>
    </div>
  )
}
