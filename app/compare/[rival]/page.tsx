import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cards, Hero, Page, Prose } from '@/components/blocks';
import { CompareTable } from '@/components/compare';
import { APP_URL } from '@/content/site';
import { RIVALS, VS } from '@/content/compare';

// Content doc §3.14–3.15: one template for each head-to-head page.
export const dynamicParams = false;
export const generateStaticParams = () => VS.map((v) => ({ rival: v.slug }));

type P = { params: Promise<{ rival: string }> };
const find = (slug: string) => VS.find((v) => v.slug === slug);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const v = find((await params).rival);
  return v ? { title: { absolute: v.seoTitle }, description: v.desc, alternates: { canonical: `/compare/${v.slug}/` } } : {};
}

export default async function Vs({ params }: P) {
  const v = find((await params).rival);
  if (!v) notFound();
  const rival = RIVALS.find((r) => r.slug === v.slug)!;
  return (
    <Page
      faq={{ h: `Questions about ${v.rival} and Crack The Campus`, items: v.faq }}
      band={{ h: 'Try a proctored mock and decide for yourself', p: 'The free plan has no time limit and includes 5 CTC assessments.', cta: ['Start practising free', APP_URL], link: ['All comparisons', '/compare/'] }}>
      <Hero crumb={[['Home', '/'], ['Compare', '/compare/'], [v.rival]]} h1={`Crack The Campus vs ${v.rival}`} sub={v.sub} cta={['Try Crack The Campus free', APP_URL]} />

      <Cards h="The short version" cols={2} items={[{ t: v.rival, b: v.short[0] }, { t: 'Crack The Campus', b: v.short[1], href: '/mock-tests/', link: 'See mock tests' }]} />

      <CompareTable rivals={[rival]} h="Feature comparison" />

      <Cards h="Who should choose which" cols={2} items={v.who.map(([t, b]) => ({ t, b }))} />

      {v.together && <Prose alt h="Read there, practise here"><p>{v.together}</p></Prose>}
    </Page>
  );
}
