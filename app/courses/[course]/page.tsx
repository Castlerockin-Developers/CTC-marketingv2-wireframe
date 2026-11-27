import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cards, Hero, Page } from '@/components/blocks';
import { Chips, Head, Icon, PracticeWin, Sec } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { APP_URL, SITE_URL } from '@/content/site';
import { COURSE_LIST, COURSES } from '@/content/courses';

// Course detail template for the content doc's §4.16–4.20 (Python keeps its own richer page).
export const dynamicParams = false;
export const generateStaticParams = () => COURSES.map((c) => ({ course: c.slug }));

type P = { params: Promise<{ course: string }> };
const find = (slug: string) => COURSES.find((c) => c.slug === slug);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const c = find((await params).course);
  return c ? { title: { absolute: c.seoTitle }, description: c.desc, alternates: { canonical: `/courses/${c.slug}/` } } : {};
}

export default async function CoursePage({ params }: P) {
  const c = find((await params).course);
  if (!c) notFound();
  const h1 = c.slug === 'aptitude-reasoning' ? c.name + ' course' : `${c.name} for placements`;
  return (
    <Page
      schema={{ '@context': 'https://schema.org', '@type': 'Course', name: h1, description: c.desc, url: `${SITE_URL}/courses/${c.slug}/`,
        provider: { '@type': 'Organization', name: 'Crack The Campus', sameAs: SITE_URL }, educationalLevel: 'Beginner',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', category: 'Free' } }}
      faq={{ h: `${c.name} course FAQs`, items: c.faq }}
      band={{ h: `Start ${c.name} today`, p: 'Short lessons, practice after every module and placement-style problems at the end.', cta: ['Start this course free', APP_URL], link: ['All courses', '/courses/'] }}
      sticky={[h1, 'First modules free', 'Start free', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Courses', '/courses/'], [c.name]]} eyebrow="CTC Skill Track" h1={h1} sub={c.sub}
        chips={<Chips items={['Beginner', 'Practice after every module', 'First modules free']} />}
        cta={['Start this course free', APP_URL]} link={['Practise what you learn', '#practice']}
        visual={<PracticeWin label={c.sample.label} tags={c.sample.tags} q={c.sample.q} opts={c.sample.opts} sel={0} />} />

      <Sec>
        <Head h="What you’ll be able to do" />
        <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
          {c.able.map((t) => (
            <div className={`${card()} flex items-start gap-4`} key={t}><span className={`${tw.ic} ${tw.icGold} !m-0`}><Icon name="check" /></span><p className="!text-[16px] !leading-[26px] !text-ink">{t}</p></div>
          ))}
        </div>
      </Sec>

      <Sec className={tw.light}>
        <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
          <div className={tw.callout}><h3 className={tw.h4}>Who it’s for</h3><p className={tw.sm}>{c.who}</p></div>
          <div className={tw.callout}><h3 className={tw.h4}>{c.objection[0]}</h3><p className={tw.sm}>{c.objection[1]}</p></div>
        </div>
      </Sec>

      <Cards id="practice" h="Practise what you learn" items={c.practice.map((p) => ({ ...p, icon: 'code' }))} />

      <Cards alt h="Related courses" cols={4} items={COURSE_LIST.filter((o) => o.slug !== c.slug).slice(0, 4).map((o) => ({ t: o.name, b: o.line, href: `/courses/${o.slug}/`, link: `See ${o.name}` }))} />
    </Page>
  );
}
