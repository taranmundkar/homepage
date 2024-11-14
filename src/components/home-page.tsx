'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Play, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header section (unchanged) */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        {/* ... (header content remains the same) ... */}
      </header>

      <main className="pt-20">
        {/* Hero section (unchanged) */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          {/* ... (hero content remains the same) ... */}
        </section>

        {/* Services section (unchanged) */}
        <section id="services" className="py-20">
          {/* ... (services content remains the same) ... */}
        </section>

        {/* How it works section (unchanged) */}
        <section id="how-it-works" className="bg-gray-50 py-20">
          {/* ... (how it works content remains the same) ... */}
        </section>

        {/* Updated Witness the Magic section */}
        <section id="witness-magic" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Witness the Magic in Action!</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* VSL Video */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">Our Vision</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YOUR_VSL_VIDEO_ID"
                    title="TTM Media VSL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  Discover how we&apos;re revolutionizing real estate with AI
                </p>
              </motion.div>

              {/* Process Video */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">Our Process</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YOUR_PROCESS_VIDEO_ID"
                    title="TTM Media Process"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  See how our AI supercharges your real estate business
                </p>
              </motion.div>
            </div>
            <p className="text-center mt-8 text-lg text-gray-700 font-semibold">
              Warning: These videos contain scenes of extreme real estate success. Viewer discretion is advised.
            </p>
          </div>
        </section>

        {/* Our clients section (unchanged) */}
        <section id="our-clients" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
          {/* ... (our clients content remains the same) ... */}
        </section>

        {/* Contact section (unchanged) */}
        <section id="contact" className="bg-blue-600 text-white py-20">
          {/* ... (contact content remains the same) ... */}
        </section>
      </main>

      {/* Footer (unchanged) */}
      <footer className="bg-gray-800 text-white py-10">
        {/* ... (footer content remains the same) ... */}
      </footer>
    </div>
  )
}