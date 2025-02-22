import Link from 'next/link'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ← Back to posts
        </Link>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}