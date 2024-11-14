import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function TermsAndConditions() {
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
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
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
              <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using TTM Media's website and services, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
              <p>
                The content, features, and functionality of our website and services are owned by TTM Media and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
              <p>
                TTM Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which TTM Media is established, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
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