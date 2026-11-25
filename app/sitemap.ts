import type { MetadataRoute } from 'next';
import { COMPANIES, POST_SLUG, SITE_URL } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/colleges/', '/pricing/', '/courses/python/', '/contests/code-nova-3/', '/about/', '/contact/', '/guides/', `/guides/${POST_SLUG}/`, '/privacy/', '/terms/', '/refund-policy/', ...COMPANIES.map((c) => `/prep/${c.slug}/`)];
  return paths.map((p) => ({ url: SITE_URL + p, lastModified: new Date('2026-11-24') }));
}
