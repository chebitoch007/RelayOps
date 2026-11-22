import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${SITE.url}${path}`, lastModified: now, changeFrequency, priority,
  });
  return [
    page("", 1),
    page("/solutions", 0.9),
    ...SERVICES.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    page("/work", 0.7),
    page("/demo-projects", 0.7),
    page("/about", 0.6),
  ];
}
