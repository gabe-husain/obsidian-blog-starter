import { Metadata } from 'next'
import { getPost, getAllPosts } from '@/lib/content'
import { MDContent } from '@/components/MDContent'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.frontmatter.title}</h1>
      <MDContent content={post.content} />
    </article>
  )
}