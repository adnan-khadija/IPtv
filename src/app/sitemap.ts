import { MetadataRoute } from "next";

const BASE_URL = "https://tvsuisse.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  // Pages publiques bilingues (sans login/signup/checkout/dashboard supprimés)
  const publicRoutes = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/contact", priority: 0.8, freq: "monthly" as const },
    { path: "/terms", priority: 0.4, freq: "monthly" as const },
    { path: "/privacy", priority: 0.4, freq: "monthly" as const },
    { path: "/refund", priority: 0.4, freq: "monthly" as const },
  ];

  const langs = ["fr", "en"];
  const entries: MetadataRoute.Sitemap = [];

  // Root redirect
  entries.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  });

  // Bilingue
  for (const lang of langs) {
    for (const route of publicRoutes) {
      entries.push({
        url: `${BASE_URL}/${lang}${route.path}`,
        lastModified: now,
        changeFrequency: route.freq,
        priority: lang === "fr" ? route.priority : route.priority * 0.9,
      });
    }
  }

  return entries;
}
