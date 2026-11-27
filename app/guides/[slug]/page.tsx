import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Article } from '@/components/Article';
import { POSTS } from '@/content/guides';

// Guide articles from content/guides.tsx (the first guide keeps its own page at its own path).
export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

type P = { params: Promise<{ slug: string }> };
const find = (slug: string) => POSTS.find((p) => p.slug === slug);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const p = find((await params).slug);
  return p ? { title: { absolute: p.seoTitle }, description: p.desc, alternates: { canonical: `/guides/${p.slug}/` }, openGraph: { type: 'article', title: p.title, description: p.desc } } : {};
}

export default async function Guide({ params }: P) {
  const p = find((await params).slug);
  if (!p) notFound();
  const { body, ...rest } = p;
  return <Article {...rest}>{body}</Article>;
}
