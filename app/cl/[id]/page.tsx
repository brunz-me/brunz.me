import { notFound } from 'next/navigation'
import { getCoverLetter, getAllCoverLetterIds } from '@/lib/coverletters'
import MDXContent from '@/components/MDXContent'
import DownloadButton from './DownloadButton'
import './coverletter.css'

export function generateStaticParams() {
  return getAllCoverLetterIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const letter = getCoverLetter(id)
  if (!letter) return { title: 'Not Found' }

  return {
    title: letter.title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function CoverLetterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const letter = getCoverLetter(id)

  if (!letter) {
    notFound()
  }

  return (
    <div className="coverletter-page font-mono antialiased">
      <div className="coverletter-page-inner max-w-[680px] mx-auto px-6 py-12 sm:py-16">
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
              Denver, CO &middot;{' '}
              <a href="https://linkedin.com/in/danbrunsdon" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition-colors">linkedin.com/in/danbrunsdon</a>
              {' '}&middot;{' '}
              <a href="https://x.com/brunz_____" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition-colors">@brunz_____</a>
            </p>
          </div>
        </header>

        <hr className="border-neutral-200 mb-6" />

        {/* Cover letter content */}
        <div className="coverletter-content text-[13px] leading-relaxed font-sans">
          <MDXContent source={letter.content} />
        </div>
      </div>
    </div>
  )
}
