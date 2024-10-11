"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart, Calendar, MessageCircle, Target, Users, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-blue-600">TTM Media</span>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a>
            <a href="#our-clients" className="text-gray-600 hover:text-blue-600">Our Clients</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">Login</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Book Your Call</Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                {...fadeInUp}
              >
                Turn Leads into Closings Faster with Cutting-Edge AI Marketing Solutions
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Boost your lead generation, automate sales conversations, and fill your calendar with qualified appointments.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3">
                  Book Your Free Strategy Call Now
                </Button>
              </motion.div>
              <motion.p
                className="text-sm text-gray-500 mt-4"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                Discover how to 10x your real estate business in just 60 minutes
              </motion.p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "AI-Powered Lead Generation",
                  description: "Target and attract high-quality leads tailored to your real estate niche."
                },
                {
                  icon: <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "Automated Sales Conversations",
                  description: "Engage leads 24/7 with AI-driven chat that nurtures and qualifies prospects."
                },
                {
                  icon: <Calendar className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "Smart Appointment Booking",
                  description: "Fill your calendar with qualified appointments, hands-free."
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-3xl mx-auto mb-16">
              {[
                "We analyze your target market and create a custom AI-driven marketing strategy.",
                "Our system generates and nurtures leads through multi-channel campaigns.",
                "AI-powered chatbots engage with leads, qualifying them and scheduling appointments.",
                "You receive a steady stream of qualified appointments, ready for you to close."
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start mb-8"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="max-w-4xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-center mb-6">See Our Process in Action</h3>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-blue-600" />
                </div>
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg?height=480&width=640"
                >
                  <source src="/path-to-your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Watch this short video to see how TTM Media can transform your real estate marketing strategy.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="our-clients" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Success Story: Sarah Johnson",
                  description: "How Sarah increased her closings by 300% in 6 months"
                },
                {
                  title: "Client Spotlight: Michael Chen",
                  description: "Michael's journey to becoming a top-producing agent"
                }
              ].map((client, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
                  <p className="text-gray-600 mb-4">{client.description}</p>
                  <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-blue-600" />
                    </div>
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster="/placeholder.svg?height=240&width=320"
                    >
                      <source src={`/path-to-client-video-${index + 1}.mp4`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Skyrocket Your Real Estate Success?</h2>
            <p className="text-xl mb-8">Don't let another day pass with missed opportunities. Claim your free strategy call now!</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Your Free Strategy Call
            </Button>
            <p className="text-sm mt-4">Limited slots available - Reserve yours before they're gone!</p>
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
              <p>Empowering real estate agents with AI-driven marketing solutions.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
                <li><a href="#our-clients" className="hover:text-blue-400">Our Clients</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: taranmundkar@ttmunlimited.com</p>
              <p>Phone: (307) 323-4221</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 TTM Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}