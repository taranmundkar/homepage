import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
          <Link href="/" passHref>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        {/* Add your terms and conditions content here */}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
        </div>
      </footer>
    </div>
  )
}