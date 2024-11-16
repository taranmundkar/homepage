import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function TermsAndConditions() {
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
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-lg mb-6">
              Please read these Terms and Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;) carefully before using the TTM Media website (the &quot;Service&quot;) operated by TTM Media (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p className="mb-6">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            <p className="mb-6">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Accounts</h2>
            <p className="mb-6">
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-6">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="mb-6">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
            <p className="mb-6">
              The Service and its original content, features and functionality are and will remain the exclusive property of TTM Media and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of TTM Media.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Links To Other Web Sites</h2>
            <p className="mb-6">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by TTM Media.
            </p>
            <p className="mb-6">
              TTM Media has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that TTM Media shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p className="mb-6">
              We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Termination</h2>
            <p className="mb-6">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-6">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation Of Liability</h2>
            <p className="mb-6">
              In no event shall TTM Media, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Disclaimer</h2>
            <p className="mb-6">
              Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
            <p className="mb-6">
              These Terms shall be governed and construed in accordance with the laws of United States, without regard to its conflict of law provisions.
            </p>
            <p className="mb-6">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes</h2>
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-6">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
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