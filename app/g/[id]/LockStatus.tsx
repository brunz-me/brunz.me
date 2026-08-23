'use client'

import { useSyncExternalStore } from 'react'

// Sept 7, 2026, midnight America/Denver (2 days before the Sept 9 move-in). Denver is UTC-6 in September.
const REVEAL_UTC = new Date('2026-09-07T06:00:00Z').getTime()

function computeLabel() {
  const diff = REVEAL_UTC - Date.now()
  if (diff <= 0) {
    return "These should be unlocked now — reach out if you can't see them."
  }
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return days === 1
    ? 'Unlocks in 1 day (September 7, 2026)'
    : `Unlocks in ${days} days (September 7, 2026)`
}

// Recheck hourly — the label only changes at day granularity, so this is cheap.
function subscribe(callback: () => void) {
  const interval = setInterval(callback, 60 * 60 * 1000)
  return () => clearInterval(interval)
}

function getServerSnapshot() {
  return 'Loading…'
}

export default function LockStatus() {
  const label = useSyncExternalStore(subscribe, computeLabel, getServerSnapshot)

  return (
    <div className="text-[12px] font-semibold tracking-wide text-neutral-600 tabular-nums">
      {label}
    </div>
  )
}
