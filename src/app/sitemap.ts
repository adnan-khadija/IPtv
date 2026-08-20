import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://streamvault.tv";

  const routes = [
    "",
    "/contact",
    "/login",
    "/signup",
    "/dashboard",
    "/checkout",
    "/terms",
    "/privacy",
    "/refund",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
