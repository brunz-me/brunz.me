import { notFound } from 'next/navigation'
import { getGuide, getAllGuideIds } from '@/lib/guides'
import MDXContent from '@/components/MDXContent'
import DownloadButton from './DownloadButton'
import LockStatus from './LockStatus'
import './guide.css'

export function generateStaticParams() {
  return getAllGuideIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const guide = getGuide(id)
  if (!guide) return { title: 'Not Found' }

  return {
    title: guide.title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const guide = getGuide(id)

  if (!guide) {
    notFound()
  }

  return (
    <div className="guide-page font-mono antialiased">
      <div className="guide-page-inner max-w-[680px] mx-auto px-6 py-12 sm:py-16">
        {/* Download button */}
        <div className="no-print flex justify-end mb-8">
          <DownloadButton />
        </div>

        {/* Header */}
        <header className="mb-6 flex items-center gap-4">
          <img
            src="/avatar-web.webp"
            alt="Daniel Brunsdon"
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h1 className="text-[15px] font-semibold leading-snug tracking-tight">
              Daniel Brunsdon
            </h1>
            <p className="text-[13px] text-neutral-400 mt-1">
              Guest Guide &middot; {guide.property}
            </p>
          </div>
        </header>

        <hr className="border-neutral-200 mb-6" />

        {/* Entry & Access — withheld until 2 days before move-in */}
        <div className="entry-card">
          <div className="entry-head">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 flex-shrink-0">
              <rect x="4" y="11" width="16" height="10" rx="2"></rect>
              <path d="M8 11V7a4 4 0 0 1 8 0v4"></path>
            </svg>
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-neutral-500">
              Entry &amp; Access Codes
            </h2>
          </div>
          <p>
            Gate, mailroom, lockbox, and front-door codes appear here automatically two
            days before move-in, so they&rsquo;re not sitting in an old email or message
            thread for months beforehand.
          </p>
          <LockStatus />
          <p className="entry-fallback">
            If it&rsquo;s within a day or two of move-in and this still looks locked, call
            or text Daniel at (720) 284-9476.
          </p>
        </div>

        {/* Guide content */}
        <div className="guide-content text-[13px] leading-relaxed font-sans">
          <MDXContent source={guide.content} />
        </div>
      </div>
    </div>
  )
}
