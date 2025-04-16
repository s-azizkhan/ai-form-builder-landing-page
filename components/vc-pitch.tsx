"use client"
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function VcPitchSection() {
    return (<>
        <section className="px-4 py-12 md:py-16 bg-gradient-to-b from-black to-purple-950/10 relative">
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-pink-600 rounded-full filter blur-[80px] opacity-30"></div>

            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                    The Future of Forms
                </h2>
                <div className="bg-gradient-to-r p-[1px] from-pink-500 via-purple-500 to-cyan-500 rounded-xl mb-10">
                    <div className="bg-black p-6 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Market Opportunity</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="mr-2 mt-1 h-2 w-2 bg-pink-500"></div>
                                        <p className="text-gray-300 text-sm">
                                            $1.5B form builder market
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-2 mt-1 h-2 w-2 bg-purple-500"></div>
                                        <p className="text-gray-300 text-sm">
                                            Growing at 8% CAGR
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="mr-2 mt-1 h-2 w-2 bg-cyan-500"></div>
                                        <p className="text-gray-300 text-sm">
                                            Conversational UX boosts conversions 30%
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-white">Our Vision</h3>
                                <p className="text-gray-300 text-sm">
                                    Redefining data collection with AI and human-like UX. Targeting 100,000+ users by 2026.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        onClick={() => {
                            // mail
                            window.location.href = "mailto:saktazizkhan1@gmail.com?subject=AI Form Builder Investment Request"

                        }}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 text-base font-semibold rounded-xl">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact for Investment
                    </Button>
                </div>
            </div>
        </section>
    </>)
}