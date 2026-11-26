import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Faq, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { ARROW, Btn, Card, Chips, Crumb, Head, PracticeWin, Icon, JsonLd, PH, Quotes, Sec, Shot } from '@/components/ui';
import { btn, card, heroGrid, split, tw } from '@/components/tw';
import { APP_URL, SITE_URL } from '@/content/site';
import { COURSE, LEARNER_QUOTES } from '@/content/dummy';

export const metadata = {
  title: 'Python for placements: course from basics to coding rounds',
  description: `Learn Python from the basics to placement coding problems, with practice after every module. First ${COURSE.freeModules} modules free.`,
  alternates: { canonical: '/courses/python/' },
};

const free = <span className={`${tw.badge} ${tw.bOk} ml-auto flex-none`}>Free</span>;
const pro = <span className={`${tw.badge} ${tw.bV} ml-auto flex-none`}>Pro</span>;
const mod = (n: string, title: string, meta: string) => <span className="flex flex-col gap-0.5"><span>Module {n}: {title}</span><small className="font-body font-normal text-[14px] leading-5 text-tx3">{meta}</small></span>;
const CARD_LINK = `${ARROW} ${tw.stretch} mt-auto pt-3`;

export default function Course() {
  return (
    <>
      <Header sub={{ title: 'Python for placements', cta: 'Start this course free', chip: `Beginner, ${COURSE.modules} modules` }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Course', name: 'Python for placements', description: metadata.description, url: `${SITE_URL}/courses/python/`,
        provider: { '@type': 'Organization', name: 'Crack The Campus', sameAs: SITE_URL }, educationalLevel: 'Beginner',
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT40M' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', category: 'Free' } }} />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`}>
          <div className={`${tw.wrap} ${tw.heroWrap} ${heroGrid('75')} ${tw.enter}`}>
            <div data-hide-sticky>
              <Crumb items={[['Home', '/'], ['Courses', '/courses/python/'], ['Python']]} />
              <span className={tw.eyebrow}>CTC Skill Track</span>
              <h1 className={`${tw.h1} ${tw.heroH1}`}>Python for placements</h1>
              <p className={`${tw.lead} ${tw.heroLead}`}>Python is easy to read and quick to write, which makes it a good choice for timed coding rounds. Go from basics to placement problems with practice after every module.</p>
              <Chips items={['Beginner', COURSE.duration, `${COURSE.modules} modules`, 'Certificate included']} />
              <div className={`${tw.ctaRow} ${tw.heroCta}`}><Btn href={APP_URL}>Start this course free</Btn><a className={btn('g')} data-btn="g" href="#lesson1">Preview lesson 1</a></div>
            </div>
            <div className={card({ lg: true })} style={{ padding: 0, overflow: 'hidden' }}>
              <Shot className="!border-0 !rounded-none" alt="Python lesson showing a for loop example"><PracticeWin label="Python course, lesson 4: for loops" tags={['Python', 'Loops']} q="for i in range(1, 6, 2): print(i). What prints?" opts={['1 3 5', '1 2 3 4 5', '2 4 6']} sel={0} /></Shot>
              <div style={{ padding: '20px 24px' }}>
                <p className={tw.cap} style={{ fontWeight: 600 }}>What’s included</p>
                <div className={tw.row} style={{ justifyContent: 'space-between', marginTop: 10 }}>
                  <span><span className={`${tw.badge} ${tw.bOk}`}>Free</span> <span className={tw.sm} style={{ marginLeft: 6 }}>First {COURSE.freeModules} modules</span></span>
                  <span><span className={`${tw.badge} ${tw.bV}`}>Pro</span> <span className={tw.sm} style={{ marginLeft: 6 }}>Full course</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Sec className={tw.light}>
          <Head h="What you’ll be able to do" />
          <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
            {['Write clean Python using variables, loops, functions, lists and dictionaries', 'Solve string and array problems common in coding rounds', 'Read and fix errors quickly under time pressure', 'Use Python confidently in timed CTC mocks'].map((t) => (
              <div className={card()} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }} key={t}><span className={`${tw.ic} ${tw.icGold}`} style={{ margin: 0 }}><Icon name="check" /></span><p style={{ fontSize: 16, lineHeight: '26px', color: 'var(--tx)' }}>{t}</p></div>
            ))}
          </div>
        </Sec>

        <Sec style={{ paddingTop: 64, paddingBottom: 0 }}>
          <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
            <div className={tw.callout}><h3 className={tw.h4}>Who it’s for</h3><p className={tw.sm}>Complete beginners, and students who know another language and want a faster one for coding rounds.</p></div>
            <div className={tw.callout}><h3 className={tw.h4}>“Do companies accept Python?”</h3><p className={tw.sm}>Infosys, Wipro, Capgemini, HCL and LTIMindtree all allow Python in their online coding assessments.</p></div>
          </div>
        </Sec>

        <Sec>
          <div className={tw.faqWrap}>
            <div><Head h="Course modules" /><p className={tw.sm}>The first {COURSE.freeModules} modules are free. The full course comes with Pro.</p></div>
            <Faq items={[
              [mod('1', 'Python basics', '6 lessons, 1 h 20 min'), 'Variables, input and output. Numbers and strings. Conditions. Practice set and module test.', <span className="badge b-ok mod-tag" key="f">Free preview</span>],
              [mod('2', 'Loops and functions', '7 lessons, 1 h 45 min'), 'for and while loops. Writing functions. Scope. Practice set and module test.', free],
              [mod('3', 'Lists, tuples and dictionaries', '8 lessons, 2 h'), 'Indexing and slicing. Comprehensions. Dictionary patterns. Practice set and module test.', pro],
              [mod('4', 'Strings for coding rounds', '6 lessons, 1 h 30 min'), 'Palindromes, anagrams, frequency counts, two pointers. Practice set and module test.', pro],
              [mod('8', 'Placement problem set', '40 problems, auto-graded'), 'Placement-style problems in the CTC pattern.', pro],
            ]} />
          </div>
        </Sec>

        <Sec className={tw.light} id="lesson1">
          <div className={split('75')} data-reveal="split">
            <figure className={PH} style={{ aspectRatio: '16/9' }} role="img" aria-label={`Python for placements, lesson 1: ${COURSE.lesson1}`}>
              <a className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[72px] h-[72px] rounded-full bg-l400 text-l950 flex items-center justify-center cursor-pointer shadow-[0_8px_30px_rgba(162,148,249,.6)] transition-transform duration-fast hover:scale-[1.06] [&_svg]:w-7 [&_svg]:h-7 [&_svg]:ml-[3px]" href={APP_URL} aria-label="Watch lesson 1 free in the app"><Icon name="play" /></a>
            </figure>
            <div>
              <h2 className={tw.h2}>Watch lesson 1 free</h2>
              <p className={tw.lead} style={{ margin: '16px 0 28px' }}>{COURSE.lesson1}, {COURSE.lesson1Len}. See how examples and practice fit together.</p>
              <a className={`${btn('s')}`} data-btn="s" href={APP_URL}><Icon name="play" />Watch lesson 1 free</a>
            </div>
          </div>
        </Sec>

        <Sec>
          <Head h="Practise what you learn" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            <Card icon="code" title="Python practice set" href={APP_URL} link="Open practice">60 problems, auto-graded</Card>
            <Card icon="monitor" title="Coding mock test" href={APP_URL} link="See mock test">Proctored, 60 minutes, in the desktop app</Card>
            <Card icon="building" title="Company prep" href="/prep/infosys/" link="Browse companies">Infosys, Wipro and Capgemini</Card>
          </div>
        </Sec>

        <Sec className={tw.light}><Head h="What learners say" /><Quotes items={LEARNER_QUOTES} /></Sec>

        <FaqSec h="Python course FAQs" intro={false} items={[
          ['Is Python good for placement coding rounds?', 'Yes. It’s concise, so you spend less time typing and more time solving.'],
          ['Do I need coding experience?', 'No. The course starts from zero.'],
          ['How long will it take?', `About ${COURSE.duration} at 30–40 minutes a day.`],
          ['Is Python enough for product companies?', 'It’s enough to solve problems; you’ll still need data-structure practice for harder rounds.'],
          ['How much is free?', `The first ${COURSE.freeModules} modules.`],
        ]} />

        <Sec>
          <Head h="Related courses" />
          <div className={`${tw.cols} ${tw.c5} ${tw.hscroll}`} data-reveal="kids">
            {[['Java', 'Object-oriented foundations many companies ask about.'], ['C++', 'Speed and the standard library for competitive-style problems.'], ['C programming', 'The basics behind pointers, memory and output questions.'], ['JavaScript', 'For web roles and front-end interviews.'], ['Aptitude and logical reasoning', 'Every topic in placement aptitude rounds.']].map(([h, p]) => (
              <article className={card({ i: true })} key={h}><span className={`${tw.badge} ${tw.bN}`} style={{ alignSelf: 'flex-start', marginBottom: 12 }}>Beginner</span><h3 className={tw.h4}>{h}</h3><p style={{ marginTop: 6 }}>{p}</p><a className={CARD_LINK} href={APP_URL}>Start in the app<Icon name="arrow" /></a></article>
            ))}
          </div>
        </Sec>
      </Main>
      <Footer />
      <StickyCta title="Python for placements" sub="First modules free" cta="Start free" href={APP_URL} />
    </>
  );
}
