import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero — matches the main site's Academy page */}
      <section className="py-16 text-center sm:py-20">
        <div className="animate-fade-up">
          <Image
            src="/logo.png"
            alt="Hannah Beauty"
            width={70}
            height={101}
            className="mx-auto"
            priority
          />
        </div>
        <h1
          className="mt-8 animate-fade-up text-3xl font-extrabold uppercase tracking-wider2 sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hannah Beauty Blog
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl animate-fade-up font-light tracking-wider2 text-muted"
          style={{ animationDelay: "0.2s" }}
        >
          Guides, education and permanent makeup insights from our studio in Mt
          Eden, Auckland.
        </p>
      </section>

      {/* Post grid — course-card style: image with uppercase label below */}
      <section className="grid gap-x-10 gap-y-16 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={post.slug}
            className="group animate-fade-up"
            style={{ animationDelay: `${0.25 + i * 0.1}s` }}
          >
            <Link
              href={`/${post.slug}`}
              className="block transition-transform duration-300 ease-out group-hover:-translate-y-1.5 active:scale-[0.98]"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-surface shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
                {post.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={56}
                      height={81}
                      className="opacity-20"
                    />
                  </div>
                )}
              </div>
              <p className="mt-6 text-center text-xs uppercase tracking-widest2 text-primary">
                {post.category}
              </p>
              <h2 className="mt-2 text-center text-xl font-semibold uppercase tracking-wider2 transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                {post.title.split(" — ")[0]}
              </h2>
              <p className="mx-auto mt-3 line-clamp-2 max-w-sm text-center text-sm font-light leading-relaxed tracking-wide text-muted">
                {post.excerpt}
              </p>
              <p className="mt-4 text-center text-xs font-light text-muted">
                {formatDate(post.date)}
              </p>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
