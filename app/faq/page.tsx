import Link from 'next/link';
import { Page } from '@/components/blocks';
import { Faq } from '@/components/interactive';
import { Crumb, JsonLd, Sec } from '@/components/ui';
import { tw } from '@/components/tw';
import { SUPPORT, type Faq as FaqT } from '@/content/site';

// Content doc §3.12 FAQ: one page, grouped by topic, with a single FAQPage schema for all questions.
export const metadata = {
  title: { absolute: 'Crack The Campus FAQ: Plans, Tests & CTC Score' },
  description: 'Answers about the free plan, mock tests, the desktop app, the CTC Score, payments, contests and Crack The Campus for colleges.',
  alternates: { canonical: '/faq/' },
};

const GROUPS: [id: string, title: string, items: FaqT[], more: [string, string]][] = [
  ['getting-started', 'Getting started', [
    ['What is Crack The Campus?', 'An Indian placement preparation platform for engineering students, with company-wise practice, proctored mock tests, courses, contests, an AI resume builder and a readiness score called the CTC Score.'],
    ['Do I need to pay to start?', 'No. Create a free account with your name and email; no card needed.'],
    ['Which branches can use it?', 'All engineering branches and MCA. Aptitude and company tests apply to everyone.'],
  ], ['For students', '/students/']],
  ['tests', 'Tests & app', [
    ['What’s the difference between practice and proctored tests?', 'Practice tests run in your browser with explanations. Proctored tests run in the desktop app under monitoring and count towards your CTC Score.'],
    ['Which devices are supported?', 'Practice works in any modern browser. Proctored tests need Windows, macOS or Linux with a webcam and microphone.'],
    ['Do you share real questions from company tests?', 'No. We build practice questions on each company’s reported pattern; real test questions are confidential.'],
  ], ['Download the app', '/download/']],
  ['ctc-score', 'CTC Score', [
    ['What does my score measure?', 'Readiness for placement tests, from 0 to 10, based on skills, practice and proctored performance.'],
    ['Is it related to salary CTC?', 'No, the name is a coincidence of initials.'],
  ], ['About the CTC Score', '/ctc-score/']],
  ['billing', 'Billing', [
    ['How much do plans cost?', 'Free is ₹0. Pro is ₹3,499 for 6 months or ₹5,499 for 12 months. Pro + Placement is ₹7,499 for 6 months or ₹9,999 for 12 months. Taxes as applicable.'],
    ['How do I pay?', 'UPI, cards or net banking.'],
    ['Can I get a refund?', 'See our Refund & cancellation policy.'],
  ], ['Refund & cancellation policy', '/refund-policy/']],
  ['contests', 'Contests', [
    ['How often are contests held?', 'Every month. Upcoming dates are on the contests page.'],
    ['What can I win?', 'Elite-tier winners can win premium tech hardware or course scholarships; Growth-tier winners get access to premium hiring events; every participant gets recognition on their profile.'],
  ], ['See contests', '/contests/']],
  ['colleges', 'Colleges', [
    ['Can our college run its own exams on Crack The Campus?', 'Yes. Upload your internal tests and run them in the proctored desktop app.'],
    ['How is college pricing calculated?', 'Per student per year, based on cohort size, integrations and support. Book a demo for a quote.'],
  ], ['Book a demo', '/colleges/demo/']],
];

export default function FaqPage() {
  return (
    <Page band={{ h: 'Still have a question?', p: `Write to ${SUPPORT} and we’ll get back to you.`, cta: ['Contact support', '/contact/'], link: ['Help docs', '/docs/'] }}>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: GROUPS.flatMap(([, , items]) => items).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />
      <section className="bg-alt pb-14 pt-10">
        <div className={tw.wrap}>
          <Crumb items={[['Home', '/'], ['FAQ']]} />
          <h1 className={tw.h1}>Frequently asked questions</h1>
          <p className={`${tw.lead} mt-5 max-w-[640px]`}>Quick answers about plans, tests, the app and your CTC Score. Can’t find yours? Email <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>.</p>
          <nav aria-label="FAQ topics" className="mt-8 flex flex-wrap gap-2">
            {GROUPS.map(([id, t]) => <a key={id} href={`#${id}`} className={`${tw.chip} !no-underline hover:border-ink`}>{t}</a>)}
          </nav>
        </div>
      </section>
      {GROUPS.map(([id, title, items, more], k) => (
        <Sec key={id} id={id} className={k % 2 ? tw.light : ''}>
          <div className={tw.faqWrap}>
            <div><h2 className={tw.h2}>{title}</h2><Link className="mt-3 inline-block font-medium" href={more[1]}>{more[0]} →</Link></div>
            <Faq items={items} />
          </div>
        </Sec>
      ))}
    </Page>
  );
}
