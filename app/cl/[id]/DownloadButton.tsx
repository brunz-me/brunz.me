'use client'

export default function DownloadButton() {
  return (
    <button
      className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors border border-neutral-200 hover:border-neutral-300 rounded px-3 py-1.5 cursor-pointer bg-transparent font-mono no-print"
      onClick={() => window.print()}
    >
      Download PDF
    </button>
  )
}
