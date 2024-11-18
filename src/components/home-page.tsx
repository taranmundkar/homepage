'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const capitalizeEveryWord = (str: string) => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export default function HomePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="bg-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center" aria-label="Main Navigation">
          <Link href="/" className="flex items-center" aria-label="TTM Media Home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-blue-600">TTM MEDIA</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#services" className="text-sm text-gray-800 hover:text-blue-600">{capitalizeEveryWord('superpowers')}</Link>
            <Link href="#how-it-works" className="text-sm text-gray-800 hover:text-blue-600">{capitalizeEveryWord('magic revealed')}</Link>
            <Link href="#our-clients" className="text-sm text-gray-800 hover:text-blue-600">{capitalizeEveryWord('success stories')}</Link>
            <Link href="#contact" className="text-sm text-gray-800 hover:text-blue-600">{capitalizeEveryWord('join the a-team')}</Link>
          </div>
          <div className="flex space-x-2">
            <Link href="https://app.gohighlevel.com/?fp_ref=rev01" passHref>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 text-xs px-3 py-2">{capitalizeEveryWord('login')}</Button>
            </Link>
            <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-xs px-3 py-2">{capitalizeEveryWord('claim your superpower')}</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                {...fadeInUp}
              >
                {capitalizeEveryWord('Unleash Your Inner Real Estate Superhero')}
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-gray-800 mb-8"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Zap away cold calls, leap over lead generation hurdles, and close deals faster than a speeding bullet!
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                    {capitalizeEveryWord('Let's Accelera Your Business Today')}
                  </Button>
                </Link>
              </motion.div>
              <motion.p
                className="text-xs sm:text-sm text-gray-700 mt-4"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">{capitalizeEveryWord('Your AI Superpowers Await!')}</h2>
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
                  description: "Your tireless wingman that schmoozes leads while you snooze. it's like having a clone, but better!"
                },
                {
                  icon: <Calendar className="w-12 h-12 text-blue-600 mb-4" />,
                  title: "Time-Bending Calendar Filler",
                  description: "Watch in awe as your schedule magically fills with hot, qualified appointments. it's not time travel, it's TTM!"
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{capitalizeEveryWord(service.title)}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">{capitalizeEveryWord('How We Turn You Into A Real Estate Superhero')}</h2>
            <div className="max-w-3xl mx-auto mb-16">
              {[
                "We analyze your market faster than you can say 'sold above asking price'",
                "Our AI minions work 24/7 to flood your pipeline with grade-A leads",
                "Smart chatbots charm your leads, leaving them begging for a meeting with you",
                "You swoop in like a real estate superhero, ready to close deals and take names"
              ].map((step, index) => (
                <motion.div 
                  key={step}
                  className="flex items-start mb-8"
                  {...fadeInUp}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-clients" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-600">{capitalizeEveryWord('Real Estate Legends In The Making')}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl"
                {...fadeInUp}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{capitalizeEveryWord('Secrets Of Success In Real Estate')}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6">{capitalizeEveryWord('Harry Hooi's Journey From Oil And Gas To Top Calgary Realtor')}</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/Y_HnhJApK1s"
                    title="Harry Hooi Real Estate Success Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-lg shadow-xl"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{capitalizeEveryWord('The Path To Real Estate Excellence')}</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6">{capitalizeEveryWord('Rion Powell: Transforming Your Real Estate Career With AI And Innovation')}</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src="https://www.youtube.com/embed/YlWJ63UTbac"
                    title="Rion Powell: Real Estate Innovation and Success"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="witness-magic" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">{capitalizeEveryWord('Witness The Magic In Action!')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-600">{capitalizeEveryWord('Our Vision')}</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/flXOHljIx4Y"
                    title="TTM Media Vision"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  {capitalizeEveryWord('Discover How We're Revolutionizing Real Estate With AI')}
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-blue-600">{capitalizeEveryWord('Our Process')}</h3>
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LinoT_eKRnM"
                    title="TTM Media Process"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-sm text-gray-700">
                  {capitalizeEveryWord('See How Our AI Supercharges Your Real Estate Business')}
                </p>
              </motion.div>
            </div>
            <p className="text-center mt-8 text-base sm:text-lg text-gray-700 font-semibold">
              Warning: These videos contain scenes of extreme real estate success. viewer discretion is advised.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{capitalizeEveryWord('Ready To Join The Real Estate Elite?')}</h2>
            <p className="text-lg sm:text-xl mb-8">Don't let another lead slip through your fingers! grab your cape and let's make real estate history!</p>
            <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
                {capitalizeEveryWord('Book Your Superhero Training Now!')}
              </Button>
            </Link>
            <p className="text-base sm:text-lg mt-6 font-semibold">Hurry! Superpowers are going fast, and your competition is eyeing them!</p>
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
                <span className="text-2xl font-bold">TTM MEDIA</span>
              </div>
              <p>{capitalizeEveryWord('Turning Ordinary Agents Into Extraordinary Real Estate Superheroes!')}</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">SUPERHERO HQ</h4>
              <ul>
                <li><Link href="#services" className="hover:text-blue-400">{capitalizeEveryWord('Superpowers')}</Link></li>
                <li><Link href="#how-it-works" className="hover:text-blue-400">{capitalizeEveryWord('Magic Revealed')}</Link></li>
                <li><Link href="#our-clients" className="hover:text-blue-400">{capitalizeEveryWord('Success Stories')}</Link></li>
                <li><Link href="#contact" className="hover:text-blue-400">{capitalizeEveryWord('Join The A-Team')}</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Bat-Signal Us</h4>
              <p>{'Email: taranmundkar@ttmunlimited.com'}</p>
              <p>{capitalizeEveryWord('Superhero Hotline: (307) 323-4221')}</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {currentYear} {capitalizeEveryWord('TTM Media. All Rights Reserved. No Capes Included.')}</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy-policy">
                <Button variant="link" className="text-white hover:text-blue-400">{capitalizeEveryWord('Privacy Policy')}</Button>
              </Link>
              <Link href="/terms-and-conditions">
                <Button variant="link" className="text-white hover:text-blue-400">{capitalizeEveryWord('Terms And Conditions')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}