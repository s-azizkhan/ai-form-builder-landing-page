import type { ReactNode } from "react"

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="group relative">
      {/* Subtle glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition duration-500"></div>

      <div className="relative bg-black/70 border border-gray-700 p-6 rounded-xl hover:bg-black/80 transition-all duration-300">
        <div className="mb-4 p-2 bg-gray-900/50 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 text-base">{description}</p>

        {/* Pixelated corner accent */}
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-br from-pink-500 to-purple-500"></div>
        <div className="absolute bottom-4 right-0 w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-500"></div>
        <div className="absolute bottom-0 right-4 w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-500"></div>
      </div>
    </div>
  )
}