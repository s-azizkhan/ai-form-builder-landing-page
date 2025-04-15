export default function RoadmapTimeline() {
  const timelineItems = [
    {
      period: "Q1 2025",
      title: "MVP Launch",
      description: "Basic AI forms, chatbot UI",
      color: "pink",
    },
    {
      period: "Q2 2025",
      title: "Integrations",
      description: "Zapier, HubSpot, and more",
      color: "purple",
    },
    {
      period: "Q4 2025",
      title: "Enterprise Compliance",
      description: "GDPR, HIPAA compliance",
      color: "cyan",
    },
    {
      period: "2026",
      title: "Scale & Expand",
      description: "API access, 100K users",
      color: "blue",
    },
  ]

  return (
    <div className="relative">
      {/* Horizontal line for desktop */}
      <div className="hidden md:block absolute top-full left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transform -translate-y-1/2"></div>

      {/* Vertical line for mobile */}
      <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="relative">
            {/* Desktop dot */}
            <div className="hidden md:block absolute top-full left-1/2 w-6 h-6 bg-black border-2 border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`absolute inset-1 bg-${item.color}-500 rounded-full animate-pulse`}></div>
            </div>

            {/* Mobile dot */}
            <div className="md:hidden absolute top-8 left-8 w-6 h-6 bg-black border-2 border-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`absolute inset-1 bg-${item.color}-500 rounded-full animate-pulse`}></div>
            </div>

            <div
              className={`md:mt-8 ml-16 md:ml-0 p-4 bg-gray-900/60 border border-gray-800 rounded-lg relative ${index % 2 === 0 ? "md:mt-0 md:mb-16" : "md:mt-16 md:mb-0"}`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${item.color}-500 rounded-t-lg opacity-50`}></div>
              <div className="mb-2 inline-block px-3 py-1 text-xs font-bold bg-black text-white border border-gray-800 rounded-full">
                {item.period}
              </div>
              <h3 className={`text-xl font-bold mb-2 text-${item.color}-400 retro-text`}>{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>

              {/* Pixelated corner accent */}
              <div className={`absolute bottom-0 right-0 w-3 h-3 bg-${item.color}-500`}></div>
              <div className={`absolute bottom-3 right-0 w-1.5 h-1.5 bg-${item.color}-500`}></div>
              <div className={`absolute bottom-0 right-3 w-1.5 h-1.5 bg-${item.color}-500`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
