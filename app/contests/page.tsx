import Link from 'next/link';
import { Cards, Page, PageBanner, Steps, Table } from '@/components/blocks';
import { Countdown } from '@/components/interactive';
import { Crumb, Head, Sec } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { CONTEST } from '@/content/dummy';

// Content doc §3.8 Contests hub. Only Code Nova 3 has a confirmed date, so it is the one bookable contest.
export const metadata = {
  title: { absolute: 'Monthly Coding Contests for College Students | CTC' },
  description: 'Free monthly coding contests for engineering students. Compete, climb the leaderboard and win rewards.',
  alternates: { canonical: '/contests/' },
};

export default function Contests() {
  return (
    <Page
      faq={{ h: 'Contest questions', items: [
        ['Are contests free?', 'Yes, registration is free.'],
        ['Who can take part?', `${CONTEST.eligibility}.`],
        ['Do I need the desktop app?', 'Yes. Contests run in the desktop app with AI proctoring so results are fair.'],
        ['Which programming languages can I use?', `${CONTEST.languages}.`],
        ['How are winners chosen?', 'By score. Results are reviewed for malpractice before they’re published.'],
      ] }}
      band={{ h: 'The next contest is open', p: `Code Nova 3 runs on ${CONTEST.date}. Registration is free.`, cta: ['Register free', '/contests/code-nova-3/'], link: ['Download the app', '/download/'] }}
      sticky={['Code Nova 3', 'Free to enter', 'Register free', '/contests/code-nova-3/']}>
      <PageBanner art="/images/art/campus.webp" pos="50% 80%" eyebrow="Contests" h1="Monthly coding contests for college students"
        sub="Every month, test your skills against students from other colleges in a proctored contest. Top performers win rewards, and every finisher earns recognition on their CTC Score profile."
        cta={['Register for Code Nova 3', '/contests/code-nova-3/']} link={['Past results', '#results']} crumb={<Crumb items={[['Home', '/'], ['Contests']]} />} />

      <Sec>
        <Head h="Upcoming contests" />
        <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
          <article className={`${card({ lg: true, i: true })} gap-4`}>
            <span className={`${tw.badge} ${tw.bOk} self-start`}>Open for registration</span>
            <h3 className={tw.h3}>Code Nova 3</h3>
            <p>{CONTEST.date}, {CONTEST.time} IST · {CONTEST.duration} · {CONTEST.format}</p>
            <Countdown iso={CONTEST.iso} label="Countdown to Code Nova 3" />
            <Link className={`${tw.stretch} pt-2 font-medium`} href="/contests/code-nova-3/">Register →</Link>
          </article>
          <article className={`${card({ lg: true })} gap-4 !bg-alt`}>
            <span className={`${tw.badge} ${tw.bN} self-start`}>Coming next</span>
            <h3 className={tw.h3}>Code Nova 4 and Code Pulse 2</h3>
            <p>Dates are announced on this page and in our weekly email once registration opens.</p>
          </article>
        </div>
      </Sec>

      <Cards alt h="What you can win" items={[
        { t: 'Elite tier', icon: 'trophy', b: `${CONTEST.eliteRanks}: premium tech hardware or course scholarships.` },
        { t: 'Growth tier', icon: 'spark', b: `${CONTEST.growthRanks}: exclusive access to premium hiring events.` },
        { t: 'Participation', icon: 'star', b: 'Recognition for every participant on your CTC Score profile.' },
      ]} p="Full terms are on each contest page." />

      <Steps h="How contests work" items={[
        ['Register free', 'With your Crack The Campus account.'],
        ['Install and check', 'Install the desktop app and run the system check.'],
        ['Compete', 'Log in at the start time and solve the problems under proctoring.'],
        ['See your rank', 'On the leaderboard when results are published.'],
      ]} />

      <Table id="results" alt h="Past contest results" p={`${CONTEST.lastName}, top 3. Names are masked.`} head={['Rank', 'Participant', 'College', 'Points']} rows={CONTEST.lastResults} />
    </Page>
  );
}
