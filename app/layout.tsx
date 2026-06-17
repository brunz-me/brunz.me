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
  description: 'Developer, builder, and music obsessive based in Denver.',
  openGraph: {
    title: 'Daniel Brunsdon — brunz.me',
    description: 'Developer, builder, and music obsessive based in Denver.',
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
