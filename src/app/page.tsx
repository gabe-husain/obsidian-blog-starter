import { getAllPosts } from "@/lib/content";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Digital Garden</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-black/10 dark:border-white/10 pb-8">
              <h2 className="text-2xl font-semibold mb-2">
                <a href={`/posts/${post.slug}`} className="hover:underline">
                  {post.frontmatter.title}
                </a>
              </h2>
              {post.frontmatter.date && (
                <time className="text-sm text-black/60 dark:text-white/60 font-[family-name:var(--font-geist-mono)]">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
