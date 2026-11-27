import Link from 'next/link';
import { Hero, Page, Prose, Split, Steps } from '@/components/blocks';
import { Btn, Head, Icon, PracticeWin, Sec, DashWin } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { APP_URL } from '@/content/site';

// Content doc §4.11 Aptitude practice. Topic quizzes live in the web app, so topic links go there.
export const metadata = {
  title: { absolute: 'Aptitude Test for Placement: Practice & Mock Tests | CTC' },
  description: 'Topic-wise quant, reasoning and verbal practice for campus placements, plus timed aptitude mock tests.',
  alternates: { canonical: '/aptitude/' },
};

const TOPICS: [string, string[]][] = [
  ['Quantitative aptitude', ['Percentages', 'Profit and loss', 'Ratio and proportion', 'Time and work', 'Time, speed and distance', 'Number systems', 'Averages', 'Simple and compound interest', 'Permutations and probability', 'Data interpretation']],
  ['Logical reasoning', ['Series', 'Coding-decoding', 'Blood relations', 'Directions', 'Seating arrangements', 'Syllogisms', 'Puzzles']],
  ['Verbal ability', ['Grammar and sentence correction', 'Vocabulary', 'Reading comprehension', 'Para jumbles']],
];

export default function Aptitude() {
  return (
    <Page
      faq={{ h: 'Aptitude FAQs', items: [
        ['Which aptitude topics are most important for placements?', 'Percentages, ratios, time and work, time-speed-distance, number systems and data interpretation in quant; series, arrangements and puzzles in reasoning; and grammar and reading in verbal.'],
        ['How can I improve my aptitude speed?', 'Practise daily in short timed sets, learn shortcuts for common question types and skip questions that take more than a minute on the first pass.'],
        ['How long does aptitude preparation take?', 'Four to six weeks of daily practice is enough for most students to clear mass-recruiter aptitude rounds.'],
        ['Are aptitude questions the same for every company?', 'The topics overlap a lot; difficulty, timing and section mix vary. That’s why we offer company-pattern mocks.'],
        ['Is aptitude practice free?', 'Notes and topic quizzes are free. Full mocks use your plan’s assessments.'],
        ['Do non-CS students need aptitude?', 'Yes. Aptitude rounds are the same across branches.'],
      ] }}
      band={{ h: 'Find your weak topics in one sitting', p: 'Take a full aptitude mock, then fix one topic a day.', cta: ['Take a free aptitude mock', APP_URL], link: ['Aptitude & Reasoning course', '/courses/aptitude-reasoning/'] }}
      sticky={['Aptitude practice', 'Topic quizzes free', 'Start', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Aptitude']]} h1="Aptitude practice for placements"
        sub="Almost every campus drive starts with an aptitude round. Practise the topics companies test most, learn the shortcuts, then prove your speed in timed mocks."
        cta={['Take a free aptitude mock', APP_URL]} link={['Browse topics', '#topics']}
        visual={<PracticeWin label="Web app, aptitude" tags={['Quant', 'Time and work']} q="A can finish a job in 12 days and B in 18 days. Together, how many days?" opts={['7.2 days', '7.5 days', '8 days']} sel={0} />} />

      <Prose h="What placement aptitude tests check">
        <p>Aptitude rounds check how quickly and accurately you handle numbers, logic and English under time pressure. They’re usually the first filter in a drive, so they decide who gets to the interview.</p>
        <p>Every branch faces them, which makes aptitude the best place for any student to start.</p>
      </Prose>

      <Sec className={tw.light} id="topics">
        <Head h="Practise by topic" p="Every topic has short notes with shortcuts and a timed 10-question quiz." />
        <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
          {TOPICS.map(([g, ts]) => (
            <article key={g} className={`${card({ lg: true })} flex flex-col`}>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                <h3 className={tw.h3s}>{g}</h3>
                <span className="font-mono text-[12.5px] uppercase tracking-[.06em] text-muted">{ts.length} topics</span>
              </div>
              <ul className="mb-8 list-none">
                {ts.map((t) => <li key={t}><a href={APP_URL} className="group flex items-center justify-between border-b border-line py-2.5 text-[15.5px] !text-body !no-underline hover:!text-act">{t}<span className="text-line-2 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-act"><Icon name="arrow" /></span></a></li>)}
              </ul>
              <Btn kind="s" href={APP_URL} className="mt-auto self-start">Practise {g.toLowerCase()}</Btn>
            </article>
          ))}
        </div>
      </Sec>

      <Split h="How aptitude practice works here" bullets={[
        'Short concept notes with shortcuts for every topic',
        'Timed 10-question quizzes with explanations',
        'Full aptitude mocks in company patterns',
        'Topic-wise accuracy and speed tracking',
        <>The <Link href="/courses/aptitude-reasoning/">Aptitude & Logical Reasoning course</Link> for structured learning</>,
      ]} visual={<DashWin title="Your aptitude, by topic" label="Topic tracker" unit="accuracy" rows={[['Percentages', 84], ['Time and work', 62], ['Series', 78], ['Seating arrangements', 51], ['Reading comprehension', 70]]} />} />

      <Steps alt h="How to prepare for an aptitude test for placement" items={[
        ['Find weak topics', 'Take one full aptitude mock.'],
        ['One topic a day', 'Notes first, then a timed quiz.'],
        ['Mix it up', 'Mixed-topic timed sets after the first two weeks.'],
        ['Mock weekly', 'A company-pattern mock every week.'],
      ]} />

      <Prose h="“I’m bad at maths.”">
        <p>Placement aptitude uses school-level maths. What feels hard is the time limit, and that improves quickly with short daily practice and a few reliable shortcuts.</p>
      </Prose>
    </Page>
  );
}
