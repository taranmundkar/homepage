import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
                alt="TTM Media Robot Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <span className="ml-2 text-2xl font-bold text-blue-600">TTM Media</span>
            </a>
          </Link>
          <div className="flex space-x-4">
            <Link href="https://app.gohighlevel.com/?fp_ref=rev01" passHref>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">LOGIN</Button>
            </Link>
            <Link href="https://api.leadconnectorhq.com/widget/booking/jHKbF5pW1m1cQVxMpjPz" passHref>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Claim Your Superpower</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <Link href="/">
              <a className="flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </a>
            </Link>
          </div>
          
          <div className="space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
              <p>
                TTM Media (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, request a demo, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: taranmundkar@ttmunlimited.com<br />
                Phone: (307) 323-4221
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
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
            <div className="w-full md:w-1/2">
              <h4 className="text-lg font-semibold mb-4">Bat-Signal Us</h4>
              <p>Email: taranmundkar@ttmunlimited.com</p>
              <p>Superhero Hotline: (307) 323-4221</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
            <div className="mt-4">
              <Link href="/privacy-policy">
                <a className="text-blue-400 hover:text-blue-300 mr-4">Privacy Policy</a>
              </Link>
              <Link href="/terms-and-conditions">
                <a className="text-blue-400 hover:text-blue-300">Terms and Conditions</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}