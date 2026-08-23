import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const guidesDirectory = path.join(process.cwd(), 'content', 'guides')

export interface GuideMeta {
  id: string
  title: string
  property: string
  date: string
}

export interface Guide extends GuideMeta {
  content: string
}

export function getGuide(id: string): Guide | null {
  const filePath = path.join(guidesDirectory, `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title || id,
    property: data.property || '',
    date: data.date || '',
    content,
  }
}

export function getAllGuideIds(): string[] {
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }

  return fs
    .readdirSync(guidesDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
