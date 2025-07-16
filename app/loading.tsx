export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-deep-space text-electric-blue">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-t-4 border-electric-blue animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-4 border-nebula-purple animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border-4 border-t-4 border-metallic-gold animate-spin-slower"></div>
      </div>
      <p className="text-xl font-heading animate-pulse">Loading ChronoVerse...</p>
    </div>
  )
}
