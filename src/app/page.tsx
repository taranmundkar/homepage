'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Target, Play, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const services = [
  {
    icon: <Target className="w-12 h-12 text-blue-500 mb-4" />,
    title: "AI-Powered Lead Generation",
    description: "Target and attract high-quality leads tailored to your real estate niche.",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-green-500 mb-4" />,
    title: "Automated Sales Conversations",
    description: "Engage leads 24/7 with AI-driven chat that nurtures and qualifies prospects.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-purple-500 mb-4" />,
    title: "Smart Appointment Booking",
    description: "Fill your calendar with qualified appointments, hands-free.",
  },
]

const howItWorks = [
  "We analyze your target market and create a custom AI-driven marketing strategy.",
  "Our system generates and nurtures leads through multi-channel campaigns.",
  "AI-powered chatbots engage with leads, qualifying them and scheduling appointments.",
  "You receive a steady stream of qualified appointments, ready for you to close.",
]

const clients = [
  {
    title: "Success Story: Sarah Johnson",
    description: "How Sarah increased her closings by 300% in 6 months",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Client Spotlight: Michael Chen",
    description: "Michael's journey to becoming a top-producing agent",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">TTM Media</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {['Services', 'How It Works', 'Our Clients', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Login</Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">Book Your Call</Button>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                {...fadeInUp}
              >
                Revolutionize Your Real Estate Business with AI
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Harness the power of cutting-edge AI to transform leads into closings faster than ever before.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600">
                  Start Your AI-Powered Journey
                </Button>
              </motion.div>
              <motion.p
                className="text-sm text-gray-500 mt-4"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                Join the ranks of top-performing agents using TTM Media's AI solutions
              </motion.p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our AI-Powered Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
            <div className="max-w-3xl mx-auto">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start mb-8"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-clients" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <Image
                    src={client.image}
                    alt={client.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{client.title}</h3>
                  <p className="text-gray-600 mb-4">{client.description}</p>
                  <Button variant="outline" className="text-blue-500 hover:bg-blue-50">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Skyrocket Your Real Estate Success?</h2>
            <p className="text-xl mb-8">Don't let another day pass with missed opportunities. Claim your free strategy call now!</p>
            <Button size="lg" className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
              Book Your Free Strategy Call
            </Button>
            <p className="text-sm mt-4 text-blue-100">Limited slots available - Reserve yours before they're gone!</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
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
              <p className="text-gray-400">Empowering real estate agents with AI-driven marketing solutions.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Services', 'How It Works', 'Our Clients', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: taranmundkar@ttmunlimited.com</p>
              <p className="text-gray-400">Phone: (307) 323-4221</p>
              <div className="mt-4 flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TTM Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}