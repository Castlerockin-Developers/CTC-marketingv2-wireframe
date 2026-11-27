import { Cards, Hero, Page, Steps } from '@/components/blocks';
import { Head, Icon, Sec, ProctorWin } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { APP_URL } from '@/content/site';

// Content doc §3.4 Mock tests. The catalogue lists the tests named in the doc; counts and durations come from the app.
export const metadata = {
  title: { absolute: 'Free Placement Mock Tests (Proctored) | Crack The Campus' },
  description: 'Take free aptitude, coding and company mock tests. Proctored mode in our desktop app gives you a verified CTC Score.',
  alternates: { canonical: '/mock-tests/' },
};

const TESTS: [name: string, topic: string, proctored: boolean][] = [
  ['Capgemini Cognitive Challenges', 'Capgemini · game-based aptitude', true],
  ['Capgemini Motion Challenges', 'Capgemini · game-based aptitude', true],
  ['Grid Challenge Practice', 'Game-based aptitude', false],
  ['Code Nova practice set', 'Coding', false],
];

export default function MockTests() {
  return (
    <Page
      faq={{ h: 'Mock test questions', items: [
        ['Are the mock tests really free?', 'Yes. The free plan includes 5 CTC assessments and access to practice assessments. Pro plans include 23 or 25 CTC assessments a month.'],
        ['What is a proctored mock test?', 'It is a timed test taken under monitoring, so you can’t switch windows or get outside help. It trains you for the same conditions many companies use online.'],
        ['What do I need for proctored mode?', 'A laptop or PC with Windows, macOS or Linux, a webcam, a microphone and a stable internet connection.'],
        ['How close are your mocks to real company tests?', 'Company mocks follow each company’s reported pattern: sections, question types and timing. Exact questions in real tests are confidential and change every year.'],
      ] }}
      band={{ h: 'Take your first proctored mock this week', p: 'Practise in your browser, then sit a full mock in the desktop app and see your CTC Score.', cta: ['Start a free mock test', APP_URL], link: ['Download the desktop app', '/download/'], micro: '5 CTC assessments free · No credit card' }}
      sticky={['5 CTC assessments free', 'No credit card', 'Start a mock', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Mock tests']]} h1="Free placement mock tests"
        sub="Practise under a timer in your browser, then take proctored mocks in the desktop app to see how you’d really perform."
        cta={['Start a free mock test', APP_URL]} link={['How proctored mode works', '#proctored']} micro="5 CTC assessments free · No credit card"
        visual={<ProctorWin />} />

      <Sec>
        <Head h="Popular mock tests" p="Company tests, aptitude and coding. Proctored tests count towards your CTC Score; practice tests don’t." />
        <div className={`${tw.cols} ${tw.c4}`} data-reveal="kids">
          {TESTS.map(([n, topic, proc]) => (
            <article key={n} className={`${card({ i: true })} ${proc ? '!border-tint2' : ''}`}>
              <div className="flex items-center justify-between gap-3">
                <span className={`${tw.badge} ${proc ? tw.bV : tw.bN}`}>{proc ? 'Proctored' : 'Practice'}</span>
                <span className="font-mono text-[12px] uppercase tracking-[.06em] text-muted">{proc ? 'Desktop app' : 'Browser'}</span>
              </div>
              <h3 className={`${tw.h3s} mt-6`}>{n}</h3>
              <p className="mt-2 !text-[15px] !text-muted">{topic}</p>
              <p className={`mb-8 mt-1 !text-[14px] ${proc ? 'font-medium !text-act' : '!text-muted'}`}>{proc ? 'Counts towards your CTC Score' : 'Not scored'}</p>
              <a className={`${tw.stretch} mt-auto inline-flex items-center gap-1.5 border-t border-line pt-4 text-[15px] font-medium !text-ink !no-underline`} href={APP_URL}>Start test<Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </Sec>

      <Cards alt h="Practice mode and proctored mode" cols={2} items={[
        { t: 'Practice mode (browser)', icon: 'book', b: 'Timed questions with instant explanations. Pause, retry and learn as you go. Good for building speed on one topic.' },
        { t: 'Proctored mode (desktop app)', icon: 'shield', b: 'Full-length tests with AI monitoring and a locked screen, like many company online tests. Results count towards your CTC Score.', href: '/download/', link: 'Download the desktop app' },
      ]} />

      <Steps id="proctored" h="How proctored mode works" items={[
        ['Install the app', 'On Windows, macOS or Linux.'],
        ['Run the system check', 'Camera, microphone and internet.'],
        ['Start your test', 'The app locks other windows and monitors the session.'],
        ['Get your result', 'A section-wise breakdown and an updated CTC Score.'],
      ]} />
    </Page>
  );
}
