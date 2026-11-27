import Link from 'next/link';
import { Cards, Hero, Page, Prose, Split, Steps } from '@/components/blocks';
import { DashWin } from '@/components/ui';
import { APP_URL, NOT_AFFILIATED } from '@/content/site';

// Content doc §4.2. Lives under [company] (Capgemini only) so /prep/capgemini keeps its own page.
export const dynamicParams = false;
export const generateStaticParams = () => [{ company: 'capgemini' }];

export const metadata = {
  title: { absolute: 'Capgemini Game-Based Aptitude Practice (Free) | CTC' },
  description: 'Play Capgemini-style cognitive, motion and grid challenges online. Timed practice with scores, free to start.',
  alternates: { canonical: '/prep/capgemini/game-based-aptitude/' },
};

export default function CapgeminiGames() {
  return (
    <Page disclaim={NOT_AFFILIATED}
      faq={{ h: 'Game-based aptitude FAQs', items: [
        ['What games are in the Capgemini game-based aptitude test?', 'The exact set can change between drives. Our practice covers the cognitive, motion and grid-style challenges commonly reported.'],
        ['How long should I practise each day?', '15–20 minutes a day for two to three weeks is enough for most students to get comfortable.'],
        ['Is the game round hard?', 'It feels hard because it’s new. Once you’ve played each game a few times, most students find it manageable.'],
        ['Can I play the proctored version on my phone?', 'No. The proctored version needs the desktop app on a laptop or PC.'],
      ] }}
      band={{ h: 'Play your first challenge now', p: 'Learn the rules and the pacing before the real round.', cta: ['Play a free challenge', APP_URL], link: ['Full Capgemini prep', '/prep/capgemini/'] }}
      sticky={['Capgemini games', 'Free to start', 'Play now', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Company prep', '/prep/'], ['Capgemini', '/prep/capgemini/'], ['Game-based aptitude']]} h1="Capgemini game-based aptitude practice"
        sub="Don’t meet the game round for the first time on test day. Play Capgemini-style challenges here, under a timer, and watch your speed improve."
        cta={['Play a free challenge', APP_URL]} link={['How the games work', '#what']} micro="Free to start · Proctored version in the desktop app"
        visual={<DashWin title="Your game round, by challenge" label="Game practice" unit="best level" rows={[['Cognitive Challenges', 70], ['Motion Challenges', 55], ['Grid Challenge', 82]]} />} />

      <Prose id="what" h="What is the Capgemini game-based aptitude test?">
        <p>Instead of reading a reasoning question and picking an option, you play a series of short games. Each one measures a thinking skill, such as memory, attention, pattern spotting or quick number sense, and usually gets harder as you succeed.</p>
        <p>Because the format is unfamiliar, practice makes a big difference to both speed and confidence.</p>
      </Prose>

      <Cards alt h="Challenges you can practise" items={[
        { t: 'Cognitive Challenges', icon: 'spark', b: 'Memory, attention and quick thinking.', href: APP_URL, link: 'Play now' },
        { t: 'Motion Challenges', icon: 'layers', b: 'Planning moves and spatial reasoning.', href: APP_URL, link: 'Play now' },
        { t: 'Grid Challenge', icon: 'grid', b: 'Logical deduction on a grid.', href: APP_URL, link: 'Play now' },
      ]} p={<>Facing game rounds at other recruiters too? See <Link href="/prep/game-based-aptitude/">game-based aptitude tests</Link>.</>} />

      <Split h="Why practise the games" bullets={[
        'Learn each game’s rules before test day',
        'Build speed with timed levels',
        'See your accuracy and level reached after every attempt',
        'Practise the proctored version so the real round feels familiar',
      ]} link={['See plans', '/pricing/']} p="Practice plays are free. Proctored full rounds use CTC assessments from your plan, and their results feed your CTC Score."
        visual={<DashWin title="Grid Challenge, last 7 days" label="Level history" unit="level" rows={[['Mon', 40], ['Wed', 55], ['Fri', 68], ['Sun', 82]]} />} />

      <Steps alt h="A 15-minute daily routine" items={[
        ['Warm up', 'One game you’re good at.'],
        ['Weakest game', 'Spend 10 minutes on it.'],
        ['Timed attempt', 'Finish with one timed attempt and note your level.'],
        ['Weekly full round', 'Play the full set in the desktop app’s proctored mode.'],
      ]} />

      <Prose h="Can you practise for a game-based test?">
        <p>Yes. The skills themselves grow slowly, but knowing the rules, controls and pacing removes the surprise and saves precious seconds.</p>
      </Prose>
    </Page>
  );
}
