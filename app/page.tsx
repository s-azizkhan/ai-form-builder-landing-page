import Link from "next/link"
import { Mail, Zap, Clock, Filter, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"
import BenefitCard from "@/components/benefit-card"
import RoadmapTimeline from "@/components/roadmap-timeline"
import FooterSection from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Retro grid background */}
      <div className="fixed inset-0 z-0 bg-[url('/grid-bg.png')] opacity-20"></div>

      {/* VHS scanlines effect */}
      <div className="fixed inset-0 z-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-1 mb-6 border border-pink-500 rounded-full bg-black/50 text-pink-400 text-xs tracking-widest uppercase">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 retro-text tracking-tight">
              Forms Built by AI,
              <br />
              Loved by Humans
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
              Create forms in minutes, collect data with chatbot-style conversations
            </p>

            <div className="max-w-md mx-auto mb-8">
              <WaitlistForm />
            </div>

            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative px-6 py-3 bg-black rounded-xl leading-none">
                <span className="text-gray-400">
                  <span className="text-pink-400">200+</span> early adopters already joined
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-black to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center retro-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Why Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-pink-400" />}
                title="AI-Powered Creation"
                description="AI creates complex forms from simple text in less than 2 minutes"
              />
              <BenefitCard
                icon={<Clock className="h-8 w-8 text-cyan-400" />}
                title="Boost Completion Rates"
                description="Chatbot UI boosts completion rates by 30% over traditional forms"
              />
              <BenefitCard
                icon={<Filter className="h-8 w-8 text-purple-400" />}
                title="Custom Rules"
                description="Age, gender, and other custom rules for any use case"
              />
              <BenefitCard
                icon={<Share2 className="h-8 w-8 text-blue-400" />}
                title="Easy Sharing"
                description="Short URLs with built-in analytics for easy sharing"
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="px-4 py-16 md:py-24 bg-black relative">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center retro-text text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Our Roadmap
            </h2>

            <RoadmapTimeline />
          </div>
        </section>

        {/* VC Pitch Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-black to-purple-950/20 relative">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-600 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center retro-text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              The Future of Forms
            </h2>

            <div className="bg-gradient-to-r p-[1px] from-pink-500 via-purple-500 to-cyan-500 rounded-xl mb-16">
              <div className="bg-black p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Market Opportunity</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 bg-pink-500"></div>
                        <p className="text-gray-300">
                          Form builder market valued at <span className="text-pink-400 font-bold">$1.5B</span>
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 bg-purple-500"></div>
                        <p className="text-gray-300">
                          <span className="text-purple-400 font-bold">8% CAGR</span> with AI acceleration
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 bg-cyan-500"></div>
                        <p className="text-gray-300">
                          Conversational UX increases conversion by <span className="text-cyan-400 font-bold">30%</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                    <p className="text-gray-300 mb-4">
                      We're the Typeform killer with AI + conversational UX. Our platform revolutionizes data collection
                      by combining artificial intelligence with human-centered design.
                    </p>
                    <p className="text-gray-300">
                      By 2026, we aim to reach <span className="text-pink-400 font-bold">100,000+</span> users and
                      become the industry standard for intelligent form creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-6 rounded-xl text-lg font-bold">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us for Investment Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Footer with waitlist repeat */}
       <FooterSection />
      </main>
    </div>
  )
}
