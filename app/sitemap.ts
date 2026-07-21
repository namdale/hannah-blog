import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE = "https://blog.hannahbeauty.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${BASE}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));
  return [{ url: BASE, lastModified: new Date() }, ...posts];
}
