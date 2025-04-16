import { Mail, Zap, Clock, Filter, Share2, HelpCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"
import BenefitCard from "@/components/benefit-card"
import RoadmapTimeline from "@/components/roadmap-timeline"
import FooterSection from "@/components/footer"
import VcPitchSection from "@/components/vc-pitch"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Retro grid background */}
      <div className="fixed inset-0 z-0 bg-[url('/grid-bg.png')] opacity-20"></div>

      {/* VHS scanlines effect */}
      <div className="fixed inset-0 z-0 bg-[url('/scanlines.png')] opacity-10 pointer-events-none"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 pt-20 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-black to-gray-950">
          {/* Background Effects */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-700 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-700 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>

          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-6 border border-pink-400 rounded-full bg-black/80 text-pink-300 text-sm font-medium tracking-wider capitalize shadow-sm hover:bg-black/90 transition">
              <span className="mr-2">🚀</span> Beta Launching Soon ⌛
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 tracking-tight leading-tight">
              Forms That Feel Alive
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Create AI-powered forms in seconds. Collect data with engaging, human-like chatbot conversations.
            </p>

            {/* CTA */}
            <div className="max-w-md mx-auto mb-8">
              <WaitlistForm />
            </div>

            {/* Social Proof */}
            <div className="inline-flex items-center space-x-2">
              <span className="text-base text-gray-300">Trusted by</span>
              <span className="text-base text-pink-300 font-semibold">
                {`19+`}
                </span>
              <span className="text-base text-gray-300">early adopters</span>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-10 md:py-14 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
              How this work? 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-black/60 border border-gray-700 rounded-xl hover:bg-black/70 transition">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">1. Define Your Needs</h3>
                <p className="text-gray-200 text-base">
                  {`Input what data to collect (e.g., "name, email, age > 21"). AI builds your form instantly.`}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="font-semibold">Example:</span> Type "Collect name, email, and phone for event signup, age over 18" → Form ready in seconds.
                </p>
              </div>
              <div className="p-8 bg-black/60 border border-gray-700 rounded-xl hover:bg-black/70 transition">
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">2. Set Smart Rules</h3>
                <p className="text-gray-200 text-base">
                  Add validations like age or gender limits with a simple, intuitive interface.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="font-semibold">Example:</span> {`Set "Reject if age < 21" or "Show dietary preferences if guest count > 1".`}
                </p>
              </div>
              <div className="p-8 bg-black/60 border border-gray-700 rounded-xl hover:bg-black/70 transition">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">3. Share & Engage</h3>
                <p className="text-gray-200 text-base">
                  Share a short URL. Our chatbot gathers responses in a human-like conversation.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <span className="font-semibold">Example:</span> Share form.ai/xyz123; chatbot asks, "Hi! What's your name?" then "Great, and your email?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-4 py-12 md:py-16 bg-gradient-to-t from-black to-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
              Why We're Different?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-pink-300" />}
                title="Instant AI Forms"
                description="Generate complex forms from text in under a minute."
              />
              <BenefitCard
                icon={<Clock className="h-8 w-8 text-cyan-300" />}
                title="Boosted Engagement"
                description="Chatbot UI drives 35% higher completion rates."
              />
              <BenefitCard
                icon={<Filter className="h-8 w-8 text-purple-300" />}
                title="Smart Validation"
                description="Set precise rules for age, gender, or custom logic."
              />
              <BenefitCard
                icon={<Share2 className="h-8 w-8 text-blue-300" />}
                title="Effortless Sharing"
                description="Trackable short URLs with live response analytics."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-black to-purple-950/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-black/50 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">What makes this different from other form builders?</h3>
                <p className="text-gray-300 text-sm">
                  Our AI creates forms from simple text prompts, and our chatbot-style interface makes data collection engaging and human-like.
                </p>
              </div>
              <div className="p-4 bg-black/50 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">Can I set custom rules?</h3>
                <p className="text-gray-300 text-sm">
                  Yes, you can add validations like age, gender, or any custom logic to fit your needs.
                </p>
              </div>
              <div className="p-4 bg-black/50 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">Is it secure?</h3>
                <p className="text-gray-300 text-sm">
                  We prioritize security with encryption and compliance for GDPR, CCPA, and HIPAA.
                </p>
              </div>
              <div className="p-4 bg-black/50 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-white">When will it launch?</h3>
                <p className="text-gray-300 text-sm">
                  Our beta is planned for Q2 2025. Join the waitlist to get early access!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="px-4 py-12 md:py-16 bg-black relative">
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-600 rounded-full filter blur-[80px] opacity-30"></div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
              Our Roadmap
            </h2>
            <RoadmapTimeline />
          </div>
        </section>

        {/* VC Pitch Section */}
        <VcPitchSection />

        {/* Footer with waitlist repeat */}
        <FooterSection />
      </main>
    </div>
  )
}