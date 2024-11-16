import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttm-media-robot-logo-DU1R42hfIbNOGG9wESDZ0GUppNJofo.svg"
              alt="TTM Media Robot Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-blue-600">TTM Media</span>
          </Link>
          <Link href="/" passHref>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-lg mb-6">
              TTM Media (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection and Use</h2>
            <p className="mb-6">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address, and phone number (&quot;Personal Information&quot;).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Log Data</h2>
            <p className="mb-6">
              We collect information that your browser sends whenever you visit our Service (&quot;Log Data&quot;). This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
            <p className="mb-6">
              Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer&apos;s hard drive. We use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Service Providers</h2>
            <p className="mb-6">
              We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Security</h2>
            <p className="mb-6">
              The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">Email: taranmundkar@ttmunlimited.com</li>
              <li>Phone: (307) 323-4221</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TTM Media. All rights reserved. No capes included.</p>
        </div>
      </footer>
    </div>
  )
}