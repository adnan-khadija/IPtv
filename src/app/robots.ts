import { MetadataRoute } from 'next';

// Required by output: "export" — these routes are emitted as static files.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://tvsuisse.ch/sitemap.xml',
  };
}
