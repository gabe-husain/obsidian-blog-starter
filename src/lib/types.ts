export interface Frontmatter {
  title: string
  description?: string
  date: string
  tags?: string[]
}

export interface Post {
  slug: string
  content: string
  frontmatter: Frontmatter
}

export interface ProcessedContent {
  content: string
  frontmatter: Frontmatter
}