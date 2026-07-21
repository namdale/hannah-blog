import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://blog.hannahbeauty.co.nz/sitemap.xml",
  };
}
