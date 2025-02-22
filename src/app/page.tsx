import { getAllPosts } from "@/lib/content";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 font-mono">
      <main className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">🧠 My External Brain</h1>
          <p className="text-black/70 dark:text-white/70">
            This is my personal wiki/knowledge base built using Next.js and organized 
            following Zettelkasten principles. It's messy, it's evolving, and that's exactly how it should be.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-4 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
              <h2 className="text-xl font-medium mb-2">
                <a href={`/posts/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {post.frontmatter.title}
                </a>
              </h2>
              
              <div className="flex gap-3 text-sm text-black/60 dark:text-white/60">
                {post.frontmatter.date && (
                  <time className="font-mono">
                    {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                )}
                {post.frontmatter.tags && (
                  <div className="flex gap-2">
                    {post.frontmatter.tags.map((tag) => (
                      <span key={tag} className="opacity-60">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}