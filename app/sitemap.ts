import type { MetadataRoute } from "next";
import { clubs } from "@/data/clubs";

const base = "https://clubr.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/clubs",
    "/guide",
    "/community",
    "/your-path",
    "/links",
    "/saved",
    "/compare",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/clubs" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/clubs" ? 0.9 : 0.7,
  }));

  const clubRoutes: MetadataRoute.Sitemap = clubs.map((c) => ({
    url: `${base}/clubs/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...clubRoutes];
}
