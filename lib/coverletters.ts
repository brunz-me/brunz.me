import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const coverLettersDirectory = path.join(process.cwd(), 'content', 'coverletters')

export interface CoverLetterMeta {
  id: string
  title: string
  role: string
  company: string
  date: string
}

export interface CoverLetter extends CoverLetterMeta {
  content: string
}

export function getCoverLetter(id: string): CoverLetter | null {
  const filePath = path.join(coverLettersDirectory, `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title || id,
    role: data.role || '',
    company: data.company || '',
    date: data.date || '',
    content,
  }
}

export function getAllCoverLetterIds(): string[] {
  if (!fs.existsSync(coverLettersDirectory)) {
    return []
  }

  return fs
    .readdirSync(coverLettersDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
