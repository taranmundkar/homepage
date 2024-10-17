'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart, Calendar, MessageCircle, Target, Users, Play, X } from 'lucide-react'
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
    icon: <Target className="w-12 h-12 text-primary mb-4" />,
    title: "AI-Powered Lead Generation",
    description: "Target and attract high-quality leads tailored to your real estate niche.",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-primary mb-4" />,
    title: "Automated Sales Conversations",
    description: "Engage leads 24/7 with AI-driven chat that nurtures and qualifies prospects.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-primary mb-4" />,
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
  },
  {
    title: "Client Spotlight: Michael Chen",
    description: "Michael's journey to becoming a top-producing agent",
  },
]

export default function HomePage() {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    console.log('toggleIframe called, current state:', showIframe);
    setShowIframe(!showIframe);
  };

  return (
    <div className="bg-background">
      <header className="bg-background shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-primary">TTM Media</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#services" className="text-muted-foreground hover:text-primary">
              Services
            </Link>
            <Link href="#how-it-works" className="text-muted-foreground hover:text-primary">
              How It Works
            </Link>
            <Link href="#our-clients" className="text-muted-foreground hover:text-primary">
              Our Clients
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://app.ttmunlimited.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                Login
              </Button>
            </Link>
            <Button>Book Your Call</Button>
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
                className="text-xl text-muted-foreground mb-8"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Boost your lead generation, automate sales conversations, and fill your calendar with qualified appointments.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" className="px-8 py-3">
                  Book Your Free Strategy Call Now
                </Button>
              </motion.div>
              <motion.p
                className="text-sm text-muted-foreground mt-4"
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
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-lg text-center"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-3xl mx-auto mb-16">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start mb-8"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="max-w-4xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-center mb-6">See Our Process in Action</h3>
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary" />
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
              <p className="text-center mt-4 text-muted-foreground">
                Watch this short video to see how TTM Media can transform your real estate marketing strategy.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="our-clients" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-lg"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
                  <p className="text-muted-foreground mb-4">{client.description}</p>
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary" />
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

        <section id="contact" className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Skyrocket Your Real Estate Success?</h2>
            <p className="text-xl mb-8">Don't let another day pass with missed opportunities. Claim your free strategy call now!</p>
            <Button variant="secondary" size="lg" className="px-8 py-3">
              Book Your Free Strategy Call
            </Button>
            <p className="text-sm mt-4">Limited slots available - Reserve yours before they're gone!</p>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-10">
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
                <li>
                  <Link href="#services" className="hover:text-primary">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-primary">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#our-clients" className="hover:text-primary">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: taranmundkar@ttmunlimited.com</p>
              <p>Phone: (307) 323-4221</p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2024 TTM Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-3/4 relative">
            <Button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white"
              onClick={() => {
                console.log('Close button clicked');
                toggleIframe();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
            <iframe
              src="https://app.gohighlevel.com"
              className="w-full h-full rounded-lg"
              title="GoHighLevel App"
            />
          </div>
        </div>
      )}
    </div>
  )
}