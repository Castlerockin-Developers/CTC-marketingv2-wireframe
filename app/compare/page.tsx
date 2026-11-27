import Link from 'next/link';
import { Hero, Page } from '@/components/blocks';
import { CompareTable } from '@/components/compare';
import { Head, Icon, Sec } from '@/components/ui';
import { tw } from '@/components/tw';
import { APP_URL } from '@/content/site';
import { RIVALS } from '@/content/compare';

// Content doc §3.13 Compare platforms.
export const metadata = {
  title: { absolute: 'Best Placement Preparation Websites Compared (2026)' },
  description: 'An honest comparison of placement prep platforms by mock tests, company coverage, proctoring and price.',
  alternates: { canonical: '/compare/' },
};

export default function Compare() {
  return (
    <Page
      faq={{ h: 'Comparison questions', items: [
        ['Which is the best website for placement preparation?', 'The best one is the one that matches your next test. For company tests under real conditions, practise proctored mocks; for reading up on patterns, use guides; for coding depth, use a dedicated coding site.'],
        ['Is free placement practice enough?', 'Free practice builds basics. Timed, proctored mocks close the gap between knowing answers and performing on test day.'],
        ['Can I use more than one platform?', 'Yes. Many students read guides on one site and practise mocks on another.'],
        ['What’s the best app for placement preparation?', 'For proctored tests you need a laptop app, because phones can’t run a locked, monitored test. Crack The Campus runs on Windows, macOS and Linux.'],
      ] }}
      band={{ h: 'Try a proctored mock and decide for yourself', p: 'The free plan has no time limit and includes 5 CTC assessments.', cta: ['Try Crack The Campus free', APP_URL], link: ['See pricing', '/pricing/'] }}>
      <Hero crumb={[['Home', '/'], ['Compare']]} h1="Placement preparation platforms compared"
        sub="There’s no single best site for everyone. Here’s how the main options differ, so you can pick what fits your drive and budget."
        cta={['Try Crack The Campus free', APP_URL]} />

      <Sec>
        <div className="grid grid-cols-[4fr_8fr] items-start gap-16 t:gap-10 m:grid-cols-1 m:gap-6">
          <h2 className={tw.h2}>What we looked at</h2>
          <ol className="grid list-none grid-cols-2 gap-x-10 border-t border-line-2 m:grid-cols-1" data-reveal="kids">
            {['Company-pattern mock tests', 'Proctored test conditions', 'Aptitude and coding depth', 'Readiness tracking', 'Free access', 'Paid plan price', 'Support for colleges'].map((t, k) => <li key={t} className="flex items-baseline gap-4 border-b border-line py-4 text-[17px] text-ink"><span className="font-mono text-[12.5px] text-act">{String(k + 1).padStart(2, '0')}</span>{t}</li>)}
          </ol>
        </div>
      </Sec>

      <CompareTable rivals={RIVALS} />

      <Sec>
        <Head h="Which one should you use?" />
        <div className="grid grid-cols-[6fr_5fr_5fr] gap-4 t:grid-cols-1" data-reveal="kids">
          <article className="relative flex flex-col overflow-hidden rounded-[24px] bg-act p-9 text-white m:p-7">
            <p className="font-mono text-[12px] uppercase tracking-[.08em] text-white/70">Choose Crack The Campus if…</p>
            <p className="mt-4 font-head text-[24px] font-bold leading-[32px] tracking-[-.01em]">you want to practise company tests in real test conditions and see your readiness as one number.</p>
            <Link href="/mock-tests/" className="mt-8 inline-flex min-h-12 items-center gap-2 self-start rounded-full bg-white px-6 font-medium !text-ink !no-underline transition-colors hover:bg-alt">See mock tests<Icon name="arrow" /></Link>
          </article>
          {[['Use a large article library if…', 'you mainly want to read about patterns and past questions.'], ['Combine them if…', 'you have time. Many students read guides elsewhere and practise timed, proctored mocks with us.']].map(([t, b]) => (
            <article key={t} className="flex flex-col rounded-[24px] border border-line bg-white p-9 m:p-7">
              <p className="font-mono text-[12px] uppercase tracking-[.08em] text-muted">{t}</p>
              <p className="mt-4 text-[19px] leading-[30px] text-ink">{b}</p>
            </article>
          ))}
        </div>
      </Sec>

      <Sec className={tw.light}>
        <Head h="Head-to-head comparisons" />
        <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
          {[['PrepInsta', '/compare/prepinsta/'], ['FACE Prep', '/compare/face-prep/']].map(([n, href]) => (
            <Link key={n} href={href} className="group flex items-end justify-between gap-6 rounded-[24px] border border-line bg-white p-9 !no-underline transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-line-2 hover:shadow-2 m:p-7">
              <span className="font-head text-[32px] font-extrabold leading-[38px] tracking-[-.02em] text-ink m:text-[26px] m:leading-8">Crack The Campus <span className="block text-muted">vs {n}</span></span>
              <span className="flex flex-none items-center gap-2 font-medium text-act">Read the comparison<span className="transition-transform group-hover:translate-x-1"><Icon name="arrow" /></span></span>
            </Link>
          ))}
        </div>
      </Sec>
    </Page>
  );
}
