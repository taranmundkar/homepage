'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

declare global {
  interface Window {
    Fillout?: {
      initializeAll: () => void
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function FreeResource() {
  const [isFormLoaded, setIsFormLoaded] = useState(false)

  useEffect(() => {
    const loadForm = () => {
      if (typeof window !== 'undefined' && window.Fillout) {
        window.Fillout.initializeAll()
        setIsFormLoaded(true)
      } else {
        setTimeout(loadForm, 500) // Retry after 500ms if Fillout is not available
      }
    }

    loadForm()
  }, [])

  return (
    <>
      <Script 
        src="https://server.fillout.com/embed/v1/" 
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
                alt="TTM Media Robot Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-blue-600">TTM MEDIA</span>
            </Link>
            <Link href="/" legacyBehavior>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                Back to Home
              </Button>
            </Link>
          </nav>
        </header>

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="text-xl md:text-2xl text-gray-600 mb-4 italic font-light">
                Struggling to Attract Qualified Leads? Here&apos;s Your Lead Generation Cheat Sheet
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-8 leading-tight">
                Revealing 5 Trending Facebook Ad Templates Top Real Estate Agents Are Using Right Now To Steal Leads From Competition
              </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                className="order-2 md:order-1"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What You&apos;ll Find Inside This Little Report:
                </h2>
                <ul className="space-y-4">
                  {[
                    "Discover high-converting ad scripts designed to attract only serious buyers so you don&apos;t waste even a single second on unqualified leads",
                    "Just plug and play these ready-to-use templates; You don&apos;t need to be an expert marketer to drive crazy results",
                    "Whether you&apos;re running small or large campaigns, these templates are tailored for real estate agents at every stage",
                    "Each ad is crafted with irresistible offers that leave your leads with no option but to contact you",
                    "In this step-by-step playbook, you&apos;ll get everything—pre-written headlines, body copy, and CTAs—all for FREE"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                className="order-1 md:order-2"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm%20image-o47Bx9mWjDWwLARu8GHY0ilk4Xnq3N.png"
                  alt="5 Powerful Real Estate Ad Templates"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-xl mx-auto"
                  priority
                />
              </motion.div>
            </div>

            <motion.div 
              className="max-w-3xl mx-auto"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
                Get Instant Access to This Exclusive Guide Now For FREE
              </h2>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                {isFormLoaded ? (
                  <div 
                    style={{width:'100%',height:'500px'}} 
                    data-fillout-id="jRBuYrUirWus" 
                    data-fillout-embed-type="standard" 
                    data-fillout-inherit-parameters 
                    data-fillout-dynamic-resize
                  ></div>
                ) : (
                  <div className="h-[500px] flex items-center justify-center">
                    <p className="text-gray-600">Loading form...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} TTM Media. All Rights Reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy-policy" className="text-sm hover:text-blue-400">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-sm hover:text-blue-400">Terms and Conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}