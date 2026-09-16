import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into out/ — this is what the Dockerfile serves
  // with nginx, and what any plain web host can take by upload.
  output: "export",

  // Writes /fr/index.html rather than /fr.html, so Apache, nginx and cPanel
  // all resolve the URLs without extra rewrite rules.
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // NOTE: next.config redirects() and server-side redirect() are not supported
  // by output: "export". The root "/" -> "/fr" hop is done in src/app/page.tsx.
};

export default nextConfig;
