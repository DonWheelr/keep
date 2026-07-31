import type { MetadataRoute } from "next";
import { navLinks } from "@/lib/nav-links";
import { siteUrl } from "@/lib/site-url";

// Pages reachable via in-page links but not part of top navigation, so they
// aren't covered by the navLinks-derived list below.
const additionalRoutes = ["/docs/merlin"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navLinks.map((link) => ({
      url: new URL(link.href, siteUrl).toString(),
    })),
    ...additionalRoutes.map((path) => ({
      url: new URL(path, siteUrl).toString(),
    })),
  ];
}
