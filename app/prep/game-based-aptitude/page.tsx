import Link from 'next/link';
import { Cards, Hero, Page, Prose, Steps } from '@/components/blocks';
import { DashWin } from '@/components/ui';
import { APP_URL, NOT_AFFILIATED } from '@/content/site';

// Content doc §4.4 Game-based aptitude tests (all companies). Only Capgemini is named: the doc says to list
// other recruiters only once it's confirmed they currently use game rounds.
export const metadata = {
  title: { absolute: 'Game-Based Aptitude Test Practice for Freshers | CTC' },
  description: 'Practise game-based aptitude tests used in campus hiring. Learn the game types and play timed challenges, free to start.',
  alternates: { canonical: '/prep/game-based-aptitude/' },
};

export default function GameBased() {
  return (
    <Page disclaim={NOT_AFFILIATED}
      faq={{ h: 'Game-based test FAQs', items: [
        ['Can you prepare for a game-based aptitude test?', 'Yes. You can learn the rules and pacing, which removes surprises and improves speed.'],
        ['Are game-based tests harder than MCQ tests?', 'Not necessarily; they feel harder because they’re unfamiliar.'],
        ['Do I need gaming experience?', 'No. The games are simple; they reward focus, not gaming skill.'],
      ] }}
      band={{ h: 'Play a challenge before your next drive', p: 'Learn one game a day until the rules feel automatic.', cta: ['Play a free challenge', APP_URL], link: ['Capgemini game practice', '/prep/capgemini/game-based-aptitude/'] }}
      sticky={['Game-based aptitude', 'Free to start', 'Play now', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Company prep', '/prep/'], ['Game-based aptitude']]} h1="Game-based aptitude test practice"
        sub="More recruiters now use short games instead of reasoning MCQs. Learn how they work and practise them before your next drive."
        cta={['Play a free challenge', APP_URL]} link={['Which companies use games?', '#companies']}
        visual={<DashWin title="Skills, from your last session" label="Game practice" unit="score" rows={[['Memory', 74], ['Attention', 66], ['Pattern recognition', 81], ['Planning', 58], ['Number sense', 70]]} />} />

      <Prose h="What is a game-based aptitude test?">
        <p>It’s an online assessment made of short, interactive tasks. Each task measures a skill such as memory, attention, planning or number sense, and adapts to how well you do.</p>
        <p>Because there are no options to eliminate, the only way to get comfortable is to play.</p>
      </Prose>

      <Prose id="companies" alt h="Which companies use game-based tests?">
        <p>Capgemini is the best-known example in Indian campus hiring. <Link href="/prep/capgemini/game-based-aptitude/">Practise the Capgemini game round →</Link></p>
      </Prose>

      <Cards h="Skills these games measure" items={[
        { t: 'Memory', icon: 'layers', b: 'Holding and recalling sequences under time pressure.' },
        { t: 'Attention and focus', icon: 'eye', b: 'Staying accurate as the game speeds up.' },
        { t: 'Pattern recognition', icon: 'grid', b: 'Spotting the rule behind shapes and sequences.' },
        { t: 'Planning and problem solving', icon: 'target', b: 'Thinking a few moves ahead.' },
        { t: 'Numerical agility', icon: 'sigma', b: 'Quick, accurate number sense.' },
      ]} />

      <Steps alt h="How to practise" items={[
        ['One game a day', 'Learn its rules first.'],
        ['Repeat', 'Until the rules feel automatic.'],
        ['Add the timer', 'Timed attempts build speed.'],
        ['Weekly full round', 'A proctored round in the desktop app; results feed your CTC Score.'],
      ]} />

      <Prose h="“Games can’t measure aptitude.”">
        <p>Whatever you think of the format, it’s in the test, and familiarity with it is a real advantage.</p>
      </Prose>
    </Page>
  );
}
