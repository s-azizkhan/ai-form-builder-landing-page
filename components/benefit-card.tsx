import type { ReactNode } from "react"

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>

      <div className="relative bg-gray-900/60 border border-gray-800 p-6 rounded-lg hover:bg-gray-900/80 transition-all duration-300">
        <div className="mb-4 p-3 bg-gray-800 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white retro-text">{title}</h3>
        <p className="text-gray-400">{description}</p>

        {/* Pixelated corner accent */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500"></div>
        <div className="absolute bottom-4 right-0 w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-500"></div>
        <div className="absolute bottom-0 right-4 w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-500"></div>
      </div>
    </div>
  )
}
