import { cache } from 'react'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import { processContent } from './processor'
import type { Post } from './types'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export const getAllPosts = cache(async (): Promise<Post[]> => {
  const files = await readdir(CONTENT_DIR)
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async (file) => {
        const content = await readFile(
          path.join(CONTENT_DIR, file),
          'utf8'
        )
        const { content: processedContent, frontmatter } = await processContent(content)
        return {
          slug: file.replace('.md', ''),
          content: processedContent,
          frontmatter
        }
      })
  )
  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
})

export const getPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    const content = await readFile(
      path.join(CONTENT_DIR, `${slug}.md`),
      'utf8'
    )
    const { content: processedContent, frontmatter } = await processContent(content)
    return {
      slug,
      content: processedContent,
      frontmatter
    }
  } catch {
    return null
  }
})