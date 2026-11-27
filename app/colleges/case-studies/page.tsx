import { Hero, Page } from '@/components/blocks';
import { Head, Sec } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { COLLEGE_STICKY, collegeBand, collegeCrumb, DEMO } from '@/content/colleges';
import { TPO_QUOTE } from '@/content/dummy';

// Content doc §4.26 Case studies. Publish a college's story only with its written permission.
// shortcut: shows the sample TPO story from content/dummy.ts; swap for approved case studies before launch.
export const metadata = {
  title: { absolute: 'College Case Studies: Placement Readiness Results | CTC' },
  description: 'How colleges use Crack The Campus for proctored assessments, training and readiness tracking. Real results from placement cells.',
  alternates: { canonical: '/colleges/case-studies/' },
};

export default function CaseStudies() {
  const college = TPO_QUOTE.meta.split(', ').slice(1).join(', ');
  return (
    <Page sticky={COLLEGE_STICKY} band={collegeBand('Want to see what’s possible for your college?')}>
      <Hero crumb={collegeCrumb('Case studies')} eyebrow="For colleges" h1="College case studies"
        sub="How placement cells use Crack The Campus, in their own words." cta={['Book a demo', DEMO]} />

      <Sec>
        <Head h={college} p="Proctored internal tests and readiness tracking" />
        <figure className={`${card({ lg: true })} max-w-[880px]`} data-reveal="">
          <div className="flex flex-wrap gap-2">{TPO_QUOTE.metrics.map((m) => <span key={m} className={`${tw.badge} ${tw.bV}`}>{m}</span>)}</div>
          <blockquote className="mt-6 font-head text-[24px] font-bold leading-[34px] tracking-[-.01em] text-ink">“{TPO_QUOTE.text}”</blockquote>
          <figcaption className="mt-5 text-[15px] text-body"><b className="font-medium text-ink">{TPO_QUOTE.name}</b> · {TPO_QUOTE.meta}</figcaption>
        </figure>
      </Sec>
    </Page>
  );
}
