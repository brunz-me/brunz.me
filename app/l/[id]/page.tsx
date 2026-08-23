import { notFound } from 'next/navigation'
import { getLease, getAllLeaseIds } from '@/lib/leases'
import MDXContent from '@/components/MDXContent'
import DownloadButton from './DownloadButton'
import './lease.css'

export function generateStaticParams() {
  return getAllLeaseIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lease = getLease(id)
  if (!lease) return { title: 'Not Found' }

  return {
    title: lease.title,
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function LeasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lease = getLease(id)

  if (!lease) {
    notFound()
  }

  return (
    <div className="lease-page font-mono antialiased">
      <div className="lease-page-inner max-w-[680px] mx-auto px-6 py-12 sm:py-16">
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
              Landlord &middot; {lease.property}
            </p>
          </div>
        </header>

        <hr className="border-neutral-200 mb-6" />

        {/* Lease content */}
        <div className="lease-content text-[13px] leading-relaxed font-sans">
          <MDXContent source={lease.content} />
        </div>
      </div>
    </div>
  )
}
