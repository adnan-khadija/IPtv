import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/fr/", "/en/"],
        disallow: [
          "/dashboard/",
          "/checkout/",
          "/login/",
          "/signup/",
          "/api/",
          "/_next/",
        ],
      },
      {
        // Autoriser Googlebot explicitement sur les pages principales
        userAgent: "Googlebot",
        allow: ["/fr/", "/en/", "/fr/contact", "/en/contact"],
        disallow: ["/dashboard/", "/api/"],
      },
    ],
    sitemap: "https://tvsuisse.ch/sitemap.xml",
    host: "https://tvsuisse.ch",
  };
}
