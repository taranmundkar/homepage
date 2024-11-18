'use client'

import React from 'react'
import { Calendar, MessageCircle, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main navigation">
          <Link href="/" className="flex items-center" aria-label="TTM Media home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-600">TTM Media</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#success-stories" className="text-sm text-gray-800 hover:text-blue-600">Success Stories</Link>
            <Link href="#protocols" className="text-sm text-gray-800 hover:text-blue-600">Evergreen Protocols</Link>
            <Link href="#how-it-works" className="text-sm text-gray-800 hover:text-blue-600">Magic Revealed</Link>
            <Link href="#contact" className="text-sm text-gray-800 hover:text-blue-600">Join the A-Team</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="https://app.gohighlevel.com/?fp_ref=rev01" passHref>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 text-xs px-2 py-1 sm:px-3 sm:py-2">LOGIN</Button>
            </Link>
            <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-xs px-2 py-1 sm:px-3 sm:py-2">Claim Your Protocol</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Unleash Your Inner Real Estate Legend with Evergreen AI Protocols!
              </h1>
              <p className="text-lg sm:text-xl text-gray-800 mb-8">
                Revolutionize cold calls, conquer lead generation challenges, and close deals faster than ever before!
              </p>
              <div>
                <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                    Activate Your Evergreen AI Protocols Now!
                  </Button>
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-4">
                Warning: May cause extreme success and uncontrollable laughter at your competition
              </p>
            </div>
          </div>
        </section>

        <section id="protocols" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Your Evergreen AI Protocols Await!</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "Lead Generation Lightning",
                  description: "Electrify your pipeline with high-voltage leads that'll make your sales meter go off the charts!"
                },
                {
                  icon: <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "24/7 Charm-o-Matic Chatbot",
                  description: "Your tireless wingman that schmoozes leads while you snooze. It's like having a clone, but better!"
                },
                {
                  icon: <Calendar className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "Time-Bending Calendar Filler",
                  description: "Watch in awe as your schedule magically fills with hot, qualified appointments. It's not time travel, it's TTM!"
                }
              ].map((protocol, index) => (
                <div key={protocol.title} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  {protocol.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{protocol.title}</h3>
                  <p className="text-gray-700">{protocol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">How We Turn You Into A Real Estate Legend</h2>
            <div className="max-w-3xl mx-auto mb-16">
              {[
                "We analyze your market faster than you can say 'sold above asking price'",
                "Our AI protocols work 24/7 to flood your pipeline with grade-A leads",
                "Smart chatbots charm your leads, leaving them begging for a meeting with you",
                "You swoop in like a real estate legend, ready to close deals and take names"
              ].map((step, index) => (
                <div key={step} className="flex items-start mb-8">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="success-stories" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-600">Real Estate Legends In The Making</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Secrets Of Success In Real Estate</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6">Harry Hooi&apos;s journey from oil and gas to top Calgary realtor</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/Y_HnhJApK1s"
                    title="Harry Hooi Real Estate Success Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">The Path To Real Estate Excellence</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6">Rion Powell: Transforming your real estate career with AI and innovation</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/YlWJ63UTbac"
                    title="Rion Powell: Real Estate Innovation and Success"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="witness-magic" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Witness The Magic In Action!</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-600">Our Vision</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/flXOHljIx4Y"
                    title="TTM Media Vision"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  Discover how we&apos;re revolutionizing real estate with AI
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-600">Our Process</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LinoT_eKRnM"
                    title="TTM Media Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  See how our AI supercharges your real estate business
                </p>
              </div>
            </div>
            <p className="text-center mt-8 text-base sm:text-lg text-gray-700 font-semibold">
              Warning: These videos contain scenes of extreme real estate success. Viewer discretion is advised.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready To Join The Real Estate Elite?</h2>
            <p className="text-lg sm:text-xl mb-8">Don&apos;t let another lead slip through your fingers! Grab your protocol and let&apos;s make real estate history!</p>
            <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                Book Your Legend Training Now!
              </Button>
            </Link>
            <p className="text-base sm:text-lg mt-6 font-semibold">Hurry! Protocols are going fast, and your competition is eyeing them!</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
                  alt="TTM Media Robot Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mr-2"
                />
                <span className="text-2xl font-bold">TTM Media</span>
              </div>
              <p>Turning ordinary agents into extraordinary real estate legends!</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Legend HQ</h4>
              <ul>
                <li><Link href="#success-stories" className="hover:text-blue-400">Success Stories</Link></li>
                <li><Link href="#protocols" className="hover:text-blue-400">Evergreen Protocols</Link></li>
                <li><Link href="#how-it-works" className="hover:text-blue-400">Magic Revealed</Link></li>
                <li><Link href="#contact" className="hover:text-blue-400">Join the A-Team</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: taranmundkar@ttmunlimited.com</p>
              <p>Legend Hotline: (307) 323-4221</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy-policy">
                <Button variant="link" className="text-white hover:text-blue-400">Privacy Policy</Button>
              </Link>
              <Link href="/terms-and-conditions">
                <Button variant="link" className="text-white hover:text-blue-400">Terms and Conditions</Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}