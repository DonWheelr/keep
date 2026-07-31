import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/nav-links";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: new URL(link.href, siteUrl).toString(),
  }));
}
