import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TTM Media - AI-Powered Real Estate Marketing Solutions',
  description: 'TTM Media offers cutting-edge AI marketing solutions for real estate agents. Boost lead generation and close deals faster with our innovative tools.',
  keywords: 'real estate marketing, AI marketing, lead generation, real estate technology',
  openGraph: {
    title: 'TTM Media - AI-Powered Real Estate Marketing Solutions',
    description: 'Revolutionize your real estate business with TTM Media\'s AI-driven marketing tools.',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TTM Media - AI-Powered Real Estate Marketing Solutions',
    description: 'Revolutionize your real estate business with TTM Media\'s AI-driven marketing tools.',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}