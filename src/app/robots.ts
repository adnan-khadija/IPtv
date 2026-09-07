import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/fr/", "/en/"],
        disallow: ["/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/fr/", "/en/", "/fr/contact", "/en/contact"],
      },
    ],
    sitemap: "https://tvsuisse.ch/sitemap.xml",
    host: "https://tvsuisse.ch",
  };
}
