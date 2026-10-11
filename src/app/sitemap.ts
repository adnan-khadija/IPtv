import { MetadataRoute } from 'next';

// Required by output: "export" — these routes are emitted as static files.
export const dynamic = "force-static";

const BASE_URL = 'https://tvsuisse.ch';

// Static dates — only update these when page content actually changes.
// Using a fixed date avoids Google re-crawling unchanged pages on every build.
const DATES = {
  home:     new Date('2026-10-11'),
  channels: new Date('2026-10-11'),
  contact:  new Date('2026-10-01'),
  legal:    new Date('2026-09-01'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: DATES.home,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/channels/`,
      lastModified: DATES.channels,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: DATES.contact,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terms/`,
      lastModified: DATES.legal,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: DATES.legal,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund/`,
      lastModified: DATES.legal,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
