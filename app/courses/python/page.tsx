import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Faq, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { Btn, Card, Chips, Crumb, Head, PracticeWin, Icon, JsonLd, Quotes, Sec } from '@/components/ui';
import { APP_URL, SITE_URL } from '@/content/site';
import { COURSE, LEARNER_QUOTES } from '@/content/dummy';

export const metadata = {
  title: 'Python for placements: course from basics to coding rounds',
  description: `Learn Python from the basics to placement coding problems, with practice after every module. First ${COURSE.freeModules} modules free.`,
  alternates: { canonical: '/courses/python/' },
};

const free = <span className="badge b-ok mod-tag">Free</span>;
const pro = <span className="badge b-v mod-tag">Pro</span>;
const mod = (n: string, title: string, meta: string) => <span className="mt"><span>Module {n}: {title}</span><small>{meta}</small></span>;

export default function Course() {
  return (
    <>
      <Header sub={{ title: 'Python for placements', cta: 'Start this course free', chip: `Beginner, ${COURSE.modules} modules` }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Course', name: 'Python for placements', description: metadata.description, url: `${SITE_URL}/courses/python/`,
        provider: { '@type': 'Organization', name: 'Crack The Campus', sameAs: SITE_URL }, educationalLevel: 'Beginner',
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT40M' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', category: 'Free' } }} />
      <Main>
        <section className="hero compact">
          <div className="wrap hero-grid g75" data-enter>
            <div data-hide-sticky>
              <Crumb items={[['Home', '/'], ['Courses', '/courses/python/'], ['Python']]} />
              <span className="eyebrow">CTC Skill Track</span>
              <h1 className="h1">Python for placements</h1>
              <p className="lead">Python is easy to read and quick to write, which makes it a good choice for timed coding rounds. Go from basics to placement problems with practice after every module.</p>
              <Chips items={['Beginner', COURSE.duration, `${COURSE.modules} modules`, 'Certificate included']} />
              <div className="cta-row"><Btn href={APP_URL}>Start this course free</Btn><a className="btn btn-g" href="#lesson1">Preview lesson 1</a></div>
            </div>
            <div className="card pad-lg" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="ui-frame flat-frame" role="img" aria-label="Python lesson showing a for loop example"><PracticeWin label="Python course, lesson 4: for loops" tags={['Python', 'Loops']} q="for i in range(1, 6, 2): print(i). What prints?" opts={['1 3 5', '1 2 3 4 5', '2 4 6']} sel={0} /></div>
              <div style={{ padding: '20px 24px' }}>
                <p className="cap" style={{ fontWeight: 600 }}>What’s included</p>
                <div className="row" style={{ justifyContent: 'space-between', marginTop: 10 }}>
                  <span><span className="badge b-ok">Free</span> <span className="body-sm" style={{ marginLeft: 6 }}>First {COURSE.freeModules} modules</span></span>
                  <span><span className="badge b-v">Pro</span> <span className="body-sm" style={{ marginLeft: 6 }}>Full course</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Sec className="raised">
          <Head h="What you’ll be able to do" />
          <div className="cols c2">
            {['Write clean Python using variables, loops, functions, lists and dictionaries', 'Solve string and array problems common in coding rounds', 'Read and fix errors quickly under time pressure', 'Use Python confidently in timed CTC mocks'].map((t) => (
              <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }} key={t}><span className="ic gold" style={{ margin: 0 }}><Icon name="check" /></span><p style={{ fontSize: 16, lineHeight: '26px', color: 'var(--tx)' }}>{t}</p></div>
            ))}
          </div>
        </Sec>

        <Sec style={{ paddingTop: 64, paddingBottom: 0 }}>
          <div className="cols c2">
            <div className="callout"><h3 className="h4">Who it’s for</h3><p className="body-sm">Complete beginners, and students who know another language and want a faster one for coding rounds.</p></div>
            <div className="callout"><h3 className="h4">“Do companies accept Python?”</h3><p className="body-sm">Infosys, Wipro, Capgemini, HCL and LTIMindtree all allow Python in their online coding assessments.</p></div>
          </div>
        </Sec>

        <Sec>
          <div className="faq-wrap">
            <div><Head h="Course modules" /><p className="body-sm">The first {COURSE.freeModules} modules are free. The full course comes with Pro.</p></div>
            <Faq items={[
              [mod('1', 'Python basics', '6 lessons, 1 h 20 min'), 'Variables, input and output. Numbers and strings. Conditions. Practice set and module test.', <span className="badge b-ok mod-tag" key="f">Free preview</span>],
              [mod('2', 'Loops and functions', '7 lessons, 1 h 45 min'), 'for and while loops. Writing functions. Scope. Practice set and module test.', free],
              [mod('3', 'Lists, tuples and dictionaries', '8 lessons, 2 h'), 'Indexing and slicing. Comprehensions. Dictionary patterns. Practice set and module test.', pro],
              [mod('4', 'Strings for coding rounds', '6 lessons, 1 h 30 min'), 'Palindromes, anagrams, frequency counts, two pointers. Practice set and module test.', pro],
              [mod('8', 'Placement problem set', '40 problems, auto-graded'), 'Placement-style problems in the CTC pattern.', pro],
            ]} />
          </div>
        </Sec>

        <Sec className="raised" id="lesson1">
          <div className="split r75">
            <figure className="ph" style={{ aspectRatio: '16/9' }} role="img" aria-label={`Python for placements, lesson 1: ${COURSE.lesson1}`}>
              <a className="play" href={APP_URL} aria-label="Watch lesson 1 free in the app"><Icon name="play" /></a>
            </figure>
            <div>
              <h2 className="h2">Watch lesson 1 free</h2>
              <p className="lead" style={{ margin: '16px 0 28px' }}>{COURSE.lesson1}, {COURSE.lesson1Len}. See how examples and practice fit together.</p>
              <a className="btn btn-s" href={APP_URL}><Icon name="play" />Watch lesson 1 free</a>
            </div>
          </div>
        </Sec>

        <Sec>
          <Head h="Practise what you learn" />
          <div className="cols c3">
            <Card icon="code" title="Python practice set" href={APP_URL} link="Open practice">60 problems, auto-graded</Card>
            <Card icon="monitor" title="Coding mock test" href={APP_URL} link="See mock test">Proctored, 60 minutes, in the desktop app</Card>
            <Card icon="building" title="Company prep" href="/prep/infosys/" link="Browse companies">Infosys, Wipro and Capgemini</Card>
          </div>
        </Sec>

        <Sec className="raised"><Head h="What learners say" /><Quotes items={LEARNER_QUOTES} /></Sec>

        <FaqSec h="Python course FAQs" intro={false} items={[
          ['Is Python good for placement coding rounds?', 'Yes. It’s concise, so you spend less time typing and more time solving.'],
          ['Do I need coding experience?', 'No. The course starts from zero.'],
          ['How long will it take?', `About ${COURSE.duration} at 30–40 minutes a day.`],
          ['Is Python enough for product companies?', 'It’s enough to solve problems; you’ll still need data-structure practice for harder rounds.'],
          ['How much is free?', `The first ${COURSE.freeModules} modules.`],
        ]} />

        <Sec>
          <Head h="Related courses" />
          <div className="cols c5 hscroll">
            {[['Java', 'Object-oriented foundations many companies ask about.'], ['C++', 'Speed and the standard library for competitive-style problems.'], ['C programming', 'The basics behind pointers, memory and output questions.'], ['JavaScript', 'For web roles and front-end interviews.'], ['Aptitude and logical reasoning', 'Every topic in placement aptitude rounds.']].map(([h, p]) => (
              <article className="card card-i" key={h}><span className="badge b-n" style={{ alignSelf: 'flex-start', marginBottom: 12 }}>Beginner</span><h3 className="h4">{h}</h3><p style={{ marginTop: 6 }}>{p}</p><a className="arrow-link stretch" href={APP_URL}>Start in the app<Icon name="arrow" /></a></article>
            ))}
          </div>
        </Sec>
      </Main>
      <Footer />
      <StickyCta title="Python for placements" sub="First modules free" cta="Start free" href={APP_URL} />
    </>
  );
}
