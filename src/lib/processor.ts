import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkWikiLink from 'remark-wiki-link'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import type { ProcessedContent } from './types'

export async function processContent(content: string): Promise<ProcessedContent> {
  // Extract frontmatter
  const { data: frontmatter, content: markdownContent } = matter(content)

  // Process markdown content
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkWikiLink, {
      pageResolver: (name: string) => {
        // Handle piped links by extracting the actual page name
        const pageName = name.split('|')[0]
        return [pageName.replace(/\s+/g, '-').toLowerCase()]
      },
      hrefTemplate: (permalink: string) => `/posts/${permalink}`,
      aliasDivider: '|' // Support Obsidian's pipe syntax
    })
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