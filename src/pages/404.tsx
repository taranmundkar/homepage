import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Custom404() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
          <p className="text-xl mb-8">It seems you&apos;ve ventured into uncharted territory.</p>
          <Image
            src="/404-illustration.svg"
            alt="404 Illustration"
            width={300}
            height={300}
            className="mx-auto mb-8"
          />
          <Link href="/" passHref>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Return to Home Base
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
        </div>
      </footer>
    </div>
  )
}