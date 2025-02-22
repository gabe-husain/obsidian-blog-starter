import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import type { ProcessedContent } from './types'

export async function processContent(content: string): Promise<ProcessedContent> {
  // Extract frontmatter
  const { data: frontmatter, content: markdownContent } = matter(content)

  // Process markdown content
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdownContent)

  return {
    content: processedContent.toString(),
    frontmatter: {
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags,
    },
  }
}