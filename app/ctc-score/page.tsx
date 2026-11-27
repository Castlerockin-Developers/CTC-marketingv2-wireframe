import { Cards, Hero, Page, Prose, Steps } from '@/components/blocks';
import { Head, ScoreCard, Sec } from '@/components/ui';
import { tw } from '@/components/tw';
import { APP_URL } from '@/content/site';

// Content doc §3.5 CTC Score. Score bands are the doc's proposal ("confirm with the product team").
export const metadata = {
  title: { absolute: 'CTC Score: Your Placement Readiness Score (0–10)' },
  description: 'The CTC Score shows how placement-ready you are, from 0 to 10, based on skills, practice and proctored tests. Not salary CTC.',
  alternates: { canonical: '/ctc-score/' },
};

const BANDS: [band: string, range: string, means: string, next: string, shade: string][] = [
  ['Getting started', '0–3.9', 'You’re building basics.', 'Focus on aptitude topics and one language.', 'bg-tint2'],
  ['Building', '4–5.9', 'You can clear some sections reliably.', 'Add company-pattern practice and timed sets.', 'bg-lav'],
  ['Ready', '6–7.9', 'You’re close to clearing most mass-recruiter tests.', 'Take full proctored mocks weekly.', 'bg-[#7C67EC]'],
  ['Strong', '8–10', 'You’re performing consistently under test conditions.', 'Keep your score current and target harder roles.', 'bg-act'],
];

export default function CtcScore() {
  return (
    <Page
      schema={{ '@context': 'https://schema.org', '@type': 'DefinedTerm', name: 'CTC Score', description: 'A placement readiness score from 0 to 10 on Crack The Campus, based on skills, practice and proctored test results. Not the “cost to company” salary figure.' }}
      faq={{ h: 'CTC Score questions', items: [
        ['Is the CTC Score the same as CTC salary?', 'No. In job offers, CTC means “cost to company”, your total yearly package. The CTC Score is a readiness score from 0 to 10 on Crack The Campus.'],
        ['Do recruiters accept the CTC Score?', 'The score helps you and your placement cell see readiness. Companies still run their own tests.'],
        ['Can I get a CTC Score on the free plan?', 'Yes. The free plan includes 5 CTC assessments, enough to get your first score.'],
        ['Why does proctored performance matter more?', 'Monitored results show what you can do without outside help, so they’re the most reliable signal of readiness.'],
      ] }}
      band={{ h: 'See where you stand today', p: 'Take a proctored mock in the desktop app and get your first CTC Score.', cta: ['Get my CTC Score', APP_URL], link: ['Take a proctored mock', '/mock-tests/'] }}
      sticky={['Your CTC Score', 'Free on every plan', 'Get my score', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['CTC Score']]} h1="What is the CTC Score?"
        sub="The CTC Score is your placement readiness score on Crack The Campus, from 0 to 10. It is not the “cost to company” salary figure. It measures how ready you are to clear a hiring test."
        cta={['Get my CTC Score', APP_URL]} visual={<ScoreCard big />} />

      <Cards alt h="What goes into your score" items={[
        { t: 'Skills', icon: 'book', b: 'Courses and company prep you’ve completed, mapped from your web app profile.' },
        { t: 'Practice', icon: 'clock', b: 'How many mock tests and drills you take, and how consistently you practise.' },
        { t: 'Proctored performance', icon: 'shield', b: 'Your results in proctored tests in the desktop app. These carry the most trust because they’re monitored.' },
      ]} />

      <Sec>
        <Head h="What your score means" />
        {/* the bar is drawn to scale: each column sits under its own stretch of 0–10 */}
        <div className="grid grid-cols-[4fr_2fr_2fr_2fr] gap-x-2 m:grid-cols-1 m:gap-y-6" data-reveal="kids">
          {BANDS.map(([band, range, means, next, shade]) => (
            <div key={band} className="m:grid m:grid-cols-[8px_1fr] m:gap-x-4">
              <div className={`h-3 rounded-full m:h-auto ${shade}`} />
              <div className="pt-6 pr-6 m:pt-0">
                <p className="font-mono text-[13px] font-medium tracking-[.04em] text-muted">{range}</p>
                <h3 className={`${tw.h3s} mt-1`}>{band}</h3>
                <p className="mt-3 min-h-[78px] text-[16px] leading-[26px] text-body m:min-h-0">{means}</p>
                <p className="mt-4 border-t border-line pt-4 text-[15px] leading-6 text-ink"><span className="mb-1 block font-mono text-[11.5px] uppercase tracking-[.08em] text-muted">Next</span>{next}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <Steps alt h="How to raise your CTC Score" items={[
        ['Practise daily', 'A little every day beats once a week.'],
        ['Finish one track', 'Complete one course or company prep track end to end.'],
        ['Mock weekly', 'Take at least one proctored mock a week in the desktop app.'],
        ['Review mistakes', 'Go through every wrong answer before your next attempt.'],
      ]} />

      <Prose h="Who can see your score">
        <p>Your score is private: only you can see it, unless you share your profile link with a recruiter or your placement cell.</p>
        <p>A CTC Score is a practice and readiness signal. It does not replace a company’s own selection process.</p>
      </Prose>
    </Page>
  );
}
