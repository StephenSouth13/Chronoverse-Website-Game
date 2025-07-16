import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deep-space text-foreground text-center px-4">
      <h1 className="text-9xl font-bold text-electric-blue mb-4 font-heading">404</h1>
      <h2 className="text-3xl font-semibold text-nebula-purple mb-6">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        The cosmic path you&apos;ve chosen leads to an uncharted sector.
      </p>
      <Link href="/">
        <Button className="bg-electric-blue text-deep-space hover:bg-metallic-gold transition-colors duration-300 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-electric-blue/50">
          Return to Home Galaxy
        </Button>
      </Link>
    </div>
  )
}
