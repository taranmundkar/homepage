'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle, Target, Play, Zap, Rocket, Trophy } from 'lucide-react'
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
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main navigation">
          <a href="/" className="flex items-center" aria-label="TTM Media home">
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
            <a href="#services" className="text-gray-600 hover:text-blue-600">Superpowers</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">Magic Revealed</a>
            <a href="#our-clients" className="text-gray-600 hover:text-blue-600">Success Stories</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Join the A-Team</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">VIP Access</Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Claim Your Superpower</Button>
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
                Unleash Your Inner Real Estate Superhero with AI Superpowers!
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Zap away cold calls, leap over lead generation hurdles, and close deals faster than a speeding bullet!
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3">
                  Activate Your AI Superpowers Now!
                </Button>
              </motion.div>
              <motion.p
                className="text-sm text-gray-500 mt-4"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                Warning: May cause extreme success and uncontrollable laughter at your competition
              </motion.p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Your AI Superpowers Await!</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">How We Turn You Into a Real Estate Rockstar</h2>
            <div className="max-w-3xl mx-auto mb-16">
              {[
                "We analyze your market faster than you can say 'sold above asking price'",
                "Our AI minions work 24/7 to flood your pipeline with grade-A leads",
                "Smart chatbots charm your leads, leaving them begging for a meeting with you",
                "You swoop in like a real estate superhero, ready to close deals and take names"
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
              <h3 className="text-2xl font-bold text-center mb-6">Witness the Magic in Action!</h3>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-blue-600" />
                </div>
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/ttm-media-process.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Warning: This video contains scenes of extreme real estate success. Viewer discretion is advised.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="our-clients" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Estate Legends in the Making</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sarah 'The Closer' Johnson",
                  description: "From stressed-out agent to unstoppable selling machine in 6 months flat!"
                },
                {
                  title: "Michael 'The Lead Magnet' Chen",
                  description: "How Michael went from cold calls to hot deals with the power of AI"
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
                      poster={`/client-thumbnail-${index + 1}.jpg`}
                    >
                      <source src={`/client-video-${index + 1}.mp4`} type="video/mp4" />
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
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Real Estate Elite?</h2>
            <p className="text-xl mb-8">Don't let another lead slip through your fingers! Grab your cape and let's make real estate history!</p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Book Your Superhero Training Now!
            </Button>
            <p className="text-sm mt-4">Hurry! Superpowers are going fast, and your competition is eyeing them!</p>
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
              <p>Turning ordinary agents into extraordinary real estate superheroes!</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Superhero HQ</h4>
              <ul>
                <li><a href="#services" className="hover:text-blue-400">Superpowers</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400">Magic Revealed</a></li>
                <li><a href="#our-clients" className="hover:text-blue-400">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Join the A-Team</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Bat-Signal Us</h4>
              <p>Email: taranmundkar@ttmunlimited.com</p>
              <p>Superhero Hotline: (307) 323-4221</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}