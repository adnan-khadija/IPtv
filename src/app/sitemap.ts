import { MetadataRoute } from 'next';

const BASE_URL = 'https://tvsuisse.ch';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = ['fr', 'de', 'en'];
  const subPages = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/refund', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const page of subPages) {
      entries.push({
        url: `${BASE_URL}/${lang}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: lang === 'fr' ? page.priority : Math.round(page.priority * 0.9 * 10) / 10,
      });
    }
  }

  return entries;
}
