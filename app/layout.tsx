import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Daniel Brunsdon — brunz.me',
    template: '%s — brunz.me',
  },
  description: 'Product leader and AI transformation operator. Built $0→$1M ARR, scaled developer platforms to 5.9M users, building production AI agents.',
  openGraph: {
    title: 'Daniel Brunsdon — brunz.me',
    description: 'Product leader and AI transformation operator. Built $0→$1M ARR, scaled developer platforms to 5.9M users, building production AI agents.',
    type: 'website',
    url: 'https://brunz.me',
    images: [{ url: '/avatar-full.webp' }],
  },
  twitter: {
    card: 'summary',
    site: '@brunz_____',
    creator: '@brunz_____',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
