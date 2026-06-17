import { MetadataRoute } from 'next'
import { getAllWorkSlugs } from '@/lib/work'
import { getAllPlaySlugs } from '@/lib/play'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://brunz.me'

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/music`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const workPages: MetadataRoute.Sitemap = getAllWorkSlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const playPages: MetadataRoute.Sitemap = getAllPlaySlugs().map((slug) => ({
    url: `${base}/play/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...workPages, ...playPages]
}
