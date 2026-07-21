import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

const MAIN = "https://www.hannahbeauty.co.nz";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.cover ? { images: [post.cover] } : {}),
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4">
      {/* Post header */}
      <header className="border-b border-ink/10 py-16 text-center">
        <p className="text-xs uppercase tracking-widest2 text-primary">
          {post.category}
        </p>
        <h1 className="mt-4 font-display text-3xl uppercase leading-tight tracking-wide sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-sm font-light text-muted">
          {formatDate(post.date)}
        </p>
      </header>

      {post.cover && (
        <div className="mt-12 aspect-[16/9] overflow-hidden bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover grayscale"
          />
        </div>
      )}

      {/* Body */}
      <div className="prose prose-hannah mt-12 font-light leading-relaxed tracking-wide">
        <MDXRemote source={post.content} />
      </div>

      {/* Booking CTA — the conversion point for the Instagram DM funnel */}
      <section className="mt-16 bg-primary px-6 py-12 text-center text-white">
        <p className="font-display text-xl uppercase tracking-wider2 sm:text-2xl">
          Ready to take the next step?
        </p>
        <p className="mx-auto mt-3 max-w-md font-light tracking-wide">
          Book a free consultation with Hannah Beauty in Mt Eden, Auckland — for
          treatments or academy courses.
        </p>
        <a
          href={`${MAIN}/#book`}
          className="mt-6 inline-block border border-white bg-white px-8 py-3 text-sm uppercase tracking-wider2 text-primary transition hover:bg-transparent hover:text-white"
        >
          Book now
        </a>
      </section>

      <div className="py-12 text-center">
        <Link
          href="/"
          className="text-xs uppercase tracking-wider2 underline underline-offset-4 hover:text-primary"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
