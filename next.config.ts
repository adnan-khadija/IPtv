import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into out/ — this is what the Dockerfile serves
  // with nginx, and what any plain web host can take by upload.
  output: "export",

  // Writes index.html in each folder so Apache, nginx and cPanel
  // resolve the URLs without extra rewrite rules.
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // NOTE: next.config redirects() and server-side redirect() are not supported
  // by output: "export".
};

export default nextConfig;
