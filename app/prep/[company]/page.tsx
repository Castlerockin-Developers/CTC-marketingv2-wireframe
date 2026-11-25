import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SampleQuiz from '@/components/SampleQuiz';
import { Faq, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { Band, Btn, Card, Checks, Chips, Crumb, Head, JsonLd, Micro, Note, Quotes, Sec, DashWin, PracticeWin, Shot } from '@/components/ui';
import { APP_URL, COMPANIES, SITE_URL } from '@/content/site';
import { INFOSYS, INFOSYS_QUOTES } from '@/content/dummy';

export const dynamicParams = false;
export const generateStaticParams = () => COMPANIES.map((c) => ({ company: c.slug }));

type P = { params: Promise<{ company: string }> };
const find = (slug: string) => COMPANIES.find((c) => c.slug === slug);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const c = find((await params).company);
  if (!c) return {};
  return {
    title: `${c.name} placement preparation: pattern, syllabus and free sample test`,
    description: `Practise ${c.name}’s campus hiring rounds: a free 10-question sample now, full proctored mocks in the desktop app.`,
    alternates: { canonical: `/prep/${c.slug}/` },
  };
}

export default async function CompanyPrep({ params }: P) {
  const c = find((await params).company);
  if (!c) notFound();
  const name = c.name;
  const isInfosys = c.slug === 'infosys';
  const others = COMPANIES.filter((x) => x.slug !== c.slug).slice(0, 4);
  // shortcut: only Infosys has researched pattern data; other companies reuse the template copy until the Prep Deck data is wired in.
  const pattern: [string, string][] = [
    ['Rounds', isInfosys ? INFOSYS.rounds : '3: online test, technical interview, HR interview'],
    ['Test sections', isInfosys ? INFOSYS.sections : 'Aptitude, reasoning, verbal ability and coding'],
    ['Total duration', isInfosys ? INFOSYS.duration : '90 minutes (online test)'],
    ['Negative marking', isInfosys ? INFOSYS.negative : 'No'],
    ['Last checked', INFOSYS.updated],
  ];

  return (
    <>
      <Header />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
        { '@type': 'ListItem', position: 2, name: 'Company prep', item: SITE_URL + '/prep/infosys/' },
        { '@type': 'ListItem', position: 3, name, item: `${SITE_URL}/prep/${c.slug}/` },
      ] }} />
      <Main>
        <section className="hero compact">
          <div className="wrap hero-grid g75" data-enter>
            <div data-hide-sticky>
              <Crumb items={[['Home', '/'], ['Company prep', '/prep/infosys/'], [name]]} />
              <span className="eyebrow">Company prep, updated {INFOSYS.updated}</span>
              <h1 className="h1">{name} placement preparation</h1>
              <p className="lead">Practise the rounds {name} uses in campus hiring: a free 10-question sample now, full proctored mocks in the desktop app.</p>
              <Chips items={[`${INFOSYS.practiceSets} practice sets`, `${INFOSYS.mocks} full mocks`, ...(isInfosys ? ['SE, SP and DSE tracks'] : [])]} />
              <div className="cta-row"><Btn href="#sample">Take the free {name} sample test</Btn><a className="btn btn-g" href="#syllabus">See the syllabus</a></div>
              <Micro>No sign-up needed to start the sample</Micro>
            </div>
            <Shot alt={`${name}-style reasoning question in a timed sample test`}><PracticeWin label={`${name} sample test, 18:42 left`} tags={['Reasoning', 'Quant', 'Verbal']} q="If CODE is written as DPEF, how is NOVA written?" opts={['OPWB', 'OPWA', 'MNUZ']} sel={0} /></Shot>
          </div>
        </section>

        {isInfosys && (
          <Sec className="raised">
            <Head h="Which Infosys role are you preparing for?" p="Infosys hires freshers into different tracks: the Systems Engineer (SE) role and coding-heavy tracks such as Specialist Programmer (SP) and Digital Specialist Engineer (DSE). The online test is the same starting point, but coding difficulty rises for SP and DSE." />
            <div className="track">
              {[['SE', 'Systems Engineer', 'Focus on reasoning, maths and verbal, plus basic coding.'], ['SP / DSE', 'Specialist Programmer, Digital Specialist Engineer', 'Add advanced coding problems and timed coding mocks.']].map(([t, s, d], k) => (
                <label className="card card-i" style={{ cursor: 'pointer', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }} key={t}>
                  <input type="radio" name="track" defaultChecked={k === 0} style={{ width: 20, height: 20, accentColor: 'var(--act)', marginTop: 6, flex: 'none' }} />
                  <span><span className="h3s" style={{ display: 'block' }}>{t}</span><span className="cap" style={{ display: 'block', margin: '2px 0 8px' }}>{s}</span><span className="body-sm">{d}</span></span>
                </label>
              ))}
            </div>
          </Sec>
        )}

        <Sec className="light">
          <Head h={`${name} hiring pattern at a glance`} />
          <div className="tablebox"><table className="dtable"><caption className="sr">{name} hiring pattern</caption>
            <tbody>{pattern.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table></div>
        </Sec>

        <Sec>
          <div className="split r57" id="sample">
            <div>
              <span className="eyebrow">Free sample test</span>
              <h2 className="h2" style={{ margin: '12px 0 16px' }}>Try 10 {name}-style questions now</h2>
              <p className="lead">See your score and section breakdown at the end. Create a free account only if you want to save the result and go on to full mocks.</p>
              <Checks style={{ marginTop: 24 }} items={['10 questions', `${INFOSYS.minutes} minutes`, 'Instant result with explanations']} />
            </div>
            <SampleQuiz company={name} minutes={INFOSYS.minutes} />
          </div>
        </Sec>

        <Sec className="raised">
          <div className="split rev m-img-last">
            <Shot alt={`${name} prep dashboard showing section-wise progress`}><DashWin label="Web app, company prep" title={`${name} prep, section-wise progress`} unit="done" rows={[['Quant', 72], ['Reasoning', 58], ['Verbal', 81], ['Pseudocode', 44], ['Coding', 35]]} /></Shot>
            <div>
              <h2 className="h2" style={{ marginBottom: 24 }}>What you get in full {name} prep</h2>
              <Checks items={['Topic-wise practice for every section', `${INFOSYS.mocks} full-length proctored mocks in the desktop app`, ...(isInfosys ? ['Separate coding sets for SP and DSE'] : ['Previous hiring patterns and difficulty levels']), 'Section-wise analytics and your CTC Score']} />
              <div style={{ marginTop: 32 }}><Btn kind="s" href={APP_URL}>Start {name} prep free</Btn></div>
              <Note>The sample is free for everyone. Section drills and mocks use your plan’s CTC assessments (5 on Free, 23 or 25 a month on Pro plans).</Note>
            </div>
          </div>
        </Sec>

        <Sec>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <Head h={`How to prepare for the ${name} exam`} />
              <ol className="numlist">
                {['Take the free sample to find your weakest section.', 'Spend two weeks on that section with daily timed drills.', isInfosys ? 'Practise coding at your track’s level: basic for SE, advanced for SP and DSE.' : 'Practise coding at the level the role asks for.', 'Take a full proctored mock every week until test day.'].map((s) => <li key={s}><span>{s}</span></li>)}
              </ol>
            </div>
            <aside className="callout" style={{ marginTop: 8 }}>
              <h3 className="h4">“{name} questions are all over the internet. Why pay?”</h3>
              <p className="body-sm">Free question lists help you learn topics. They don’t give you timed, proctored practice or a clear readiness signal. That’s what full prep adds, and you can try it free first.</p>
            </aside>
          </div>
        </Sec>

        <Sec className="light" id="syllabus">
          <div className="faq-wrap">
            <div><Head h={`${name} syllabus by round`} /><p className="body-sm">Open a round to see the topics covered in practice.</p></div>
            <Faq items={[
              ['Round 1: online test', 'Logical reasoning (12 sets), mathematical ability (14 sets), verbal ability (8 sets), pseudocode (6 sets), puzzle solving (4 sets).'],
              ['Round 2: technical interview', 'Your projects, OOP concepts, DBMS basics, one coding problem live, and core subjects for your branch.'],
              ['Round 3: HR interview', 'Tell me about yourself, relocation and shifts, why this company, a challenge you handled.'],
            ]} />
          </div>
        </Sec>

        {isInfosys && (
          <Sec className="raised">
            <Head h="Students placed at Infosys after CTC prep" />
            <Quotes items={INFOSYS_QUOTES} />
          </Sec>
        )}

        <Sec>
          <Head h="Prepare for other companies" />
          <div className="cols c4 hscroll">
            {others.map((o) => <Card key={o.slug} icon="building" title={o.name} href={`/prep/${o.slug}/`} link={`Start ${o.name} prep`}>Hiring pattern, free sample, full mocks</Card>)}
          </div>
        </Sec>

        <FaqSec h={`${name} prep FAQs`} intro={false} items={[
          [`What is the ${name} exam pattern for 2026?`, `The online test usually covers reasoning, maths, verbal ability and coding-related sections, followed by interviews. See the table above for our latest checked pattern.`],
          ...(isInfosys ? [['What is the difference between Infosys SE, SP and DSE?', 'SE is the main fresher role; SP and DSE are higher tracks with harder coding rounds and higher packages.'] as [string, string]] : []),
          [`Is the ${name} sample test free?`, 'Yes. 10 questions with explanations, and no sign-up to start.'],
          [`How long should I prepare for ${name}?`, 'Most students need 3–6 weeks of steady practice, depending on their starting level.'],
          [`Is there negative marking in the ${name} test?`, `Not in the current season, as of ${INFOSYS.updated}.`],
          [`Do I need the desktop app for ${name} mocks?`, 'Practice works in the browser. Full proctored mocks run in the desktop app.'],
        ]} />
        <Band h={`Start with 10 free ${name} questions.`} cta={<Btn href="#sample">Take the free sample test</Btn>} cta2={<Link href={APP_URL}>Start {name} prep free</Link>} />
      </Main>
      <Footer disclaim={`Crack The Campus is not affiliated with ${name}. We name companies only to describe the tests we help students practise for.`} />
      <StickyCta title={`Free ${name} sample`} sub="10 questions" cta="Start test" href="#sample" />
    </>
  );
}
