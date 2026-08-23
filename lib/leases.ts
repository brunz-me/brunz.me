import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const leasesDirectory = path.join(process.cwd(), 'content', 'leases')

export interface LeaseMeta {
  id: string
  title: string
  property: string
  tenant: string
  date: string
}

export interface Lease extends LeaseMeta {
  content: string
}

export function getLease(id: string): Lease | null {
  const filePath = path.join(leasesDirectory, `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title || id,
    property: data.property || '',
    tenant: data.tenant || '',
    date: data.date || '',
    content,
  }
}

export function getAllLeaseIds(): string[] {
  if (!fs.existsSync(leasesDirectory)) {
    return []
  }

  return fs
    .readdirSync(leasesDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
