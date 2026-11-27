import type { MetadataRoute } from 'next';
import { COMPANIES, POST_SLUG, SITE_URL } from '@/content/site';
import { COURSE_LIST } from '@/content/courses';
import { VS } from '@/content/compare';
import { POSTS } from '@/content/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // every indexable page; thank-you pages are noindex and stay out
  const paths = ['/', '/students/', '/prep/', ...COMPANIES.map((c) => `/prep/${c.slug}/`), '/prep/capgemini/game-based-aptitude/', '/prep/capgemini/pseudocode/', '/prep/game-based-aptitude/',
    '/mock-tests/', '/ctc-score/', '/aptitude/', '/coding/', '/resume-builder/', '/courses/', ...COURSE_LIST.map((c) => `/courses/${c.slug}/`),
    '/contests/', '/contests/code-nova-3/', '/pricing/', '/download/',
    '/colleges/', '/colleges/proctored-exams/', '/colleges/placement-training/', '/colleges/readiness-analytics/', '/colleges/demo/', '/colleges/case-studies/',
    '/about/', '/contact/', '/faq/', '/compare/', ...VS.map((v) => `/compare/${v.slug}/`), '/docs/', '/guides/', `/guides/${POST_SLUG}/`, ...POSTS.map((p) => `/guides/${p.slug}/`), '/privacy/', '/terms/', '/refund-policy/'];
  return paths.map((p) => ({ url: SITE_URL + p, lastModified: new Date('2026-11-26') }));
}
