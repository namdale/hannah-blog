import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="border-b border-ink/10 py-16 text-center sm:py-24">
        <p className="text-xs uppercase tracking-widest2 text-primary">
          From the Academy
        </p>
        <h1 className="mt-4 font-display text-4xl uppercase leading-tight tracking-wide sm:text-6xl">
          Hannah Beauty
          <br />
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-light tracking-wide text-muted">
          Guides, education and permanent makeup insights from our studio in Mt
          Eden, Auckland.
        </p>
      </section>

      {/* Post grid */}
      <section className="grid gap-x-8 gap-y-16 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/${post.slug}`}>
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                {post.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-6xl text-ink/10">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-6 text-xs uppercase tracking-widest2 text-primary">
                {post.category}
              </p>
              <h2 className="mt-2 text-lg font-medium uppercase leading-snug tracking-wider2">
                {post.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed tracking-wide text-muted">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-light text-muted">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs uppercase tracking-wider2 underline underline-offset-4 group-hover:text-primary">
                  Read more
                </span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
