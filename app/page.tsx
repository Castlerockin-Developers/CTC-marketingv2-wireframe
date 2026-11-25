import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StickyCta, Countdown } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { ArrowLink, Band, Btn, Checks, Composite, DashWin, Head, Icon, Micro, PracticeWin, ProctorWin, Proof, Shot, Quotes, ScoreCard, Sec } from '@/components/ui';
import { APP_URL, COMPANIES, FAQ_HOME } from '@/content/site';
import { CONTEST, PARTNER_COLLEGES, STATS, STUDENT_QUOTES } from '@/content/dummy';

export const metadata = {
  title: { absolute: 'Crack The Campus — placement prep for Infosys, Wipro, Capgemini and more' },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <section className="hero">
          <div className="wrap hero-grid" data-enter>
            <div data-hide-sticky>
              <span className="eyebrow">For engineering students in India</span>
              <h1 className="display">Get placement-ready for Infosys, Wipro, Capgemini and more.</h1>
              <p className="lead">Company-wise aptitude and coding practice, proctored mock tests in our desktop app, and a CTC Score from 0 to 10 that shows how ready you are.</p>
              <div className="cta-row"><Btn href={APP_URL}>Start practising free</Btn><a className="btn btn-g" href="#how-it-works">See how it works</a></div>
              <Micro>Free forever plan. No credit card.</Micro>
              <p className="quiet">Placement officer or HOD? <Link href="/colleges/">See Crack The Campus for colleges</Link></p>
            </div>
            <div><Composite /></div>
          </div>
        </section>

        <Sec className="raised" style={{ padding: '56px 0' }}>
          <Proof label="Trusted by engineering students and colleges across India"
            stats={[[STATS.students, 'students practising'], [STATS.colleges, 'partner colleges'], [STATS.drives, 'proctored assessment drives'], [STATS.contestants, 'contest participants']]}
            logos={PARTNER_COLLEGES} />
        </Sec>

        <Sec id="companies">
          <div className="split r57" style={{ alignItems: 'start' }}>
            <div>
              <Head h="Which company are you preparing for?" p="Each company page shows the test pattern, a free 10-question sample and full mock tests." />
              <ul className="tracks">
                <li><Link href={APP_URL}><Icon name="sigma" /><span><b>Aptitude</b>Quant, reasoning and verbal, topic by topic</span></Link></li>
                <li><Link href="/courses/python/"><Icon name="code" /><span><b>Coding</b>Python, Java, C, C++ and JavaScript</span></Link></li>
                <li><Link href={APP_URL}><Icon name="monitor" /><span><b>Proctored mock tests</b>Full timed tests in the desktop app</span></Link></li>
              </ul>
            </div>
            <ul className="co-list">
              {COMPANIES.map((c) => (
                <li key={c.slug}><Link href={`/prep/${c.slug}/`}><span>{c.name}</span><small>Pattern, sample and mocks</small><Icon name="arrow" /></Link></li>
              ))}
            </ul>
          </div>
        </Sec>

        <Sec className="light" id="how-it-works">
          <Head h="How Crack The Campus works" p="Practise anywhere, prove it under real test conditions, and watch one number move." />
          <ol className="steps" style={{ listStyle: 'none' }}>
            <li className="step"><div className="step-ui"><PracticeWin label="Web app, Python course" tags={['Python', 'Loops']} q="What does range(2, 10, 3) produce?" opts={['2, 5, 8', '2, 4, 6, 8', '3, 6, 9']} sel={0} /></div><p className="sn" /><h3 className="h3s">Learn and practise on the web.</h3><p className="body-sm">Take courses, drill topics and work through company prep in your browser, any time.</p></li>
            <li className="step"><div className="step-ui"><ProctorWin /></div><p className="sn" /><h3 className="h3s">Take proctored tests in the desktop app.</h3><p className="body-sm">Sit timed, AI-proctored tests on Windows, macOS or Linux, so the real test feels familiar.</p></li>
            <li className="step"><div className="step-ui"><ScoreCard /></div><p className="sn" /><h3 className="h3s">Get your CTC Score.</h3><p className="body-sm">One score from 0 to 10, built from your skills, your practice and your proctored results.</p></li>
          </ol>
        </Sec>

        <Sec className="raised" id="ctc-score">
          <div className="split r75">
            <div>
              <span className="eyebrow">The CTC Score</span>
              <h2 className="h2" style={{ margin: '12px 0 20px' }}>One number that shows how placement-ready you are</h2>
              <p className="lead">Your CTC Score runs from 0 to 10. It combines what you learn, how regularly you practise and how you perform in proctored tests. Instead of telling a recruiter you’re ready, you can show them.</p>
              <ul className="checks" style={{ marginTop: 28 }}>
                {[['Skills', 'courses and company prep you’ve completed'], ['Practice', 'mock tests and drills, and how consistently you do them'], ['Proctored performance', 'verified results from the desktop app']].map(([b, t]) => (
                  <li key={b}><Icon name="checkc" /><span><b style={{ color: 'var(--tx)' }}>{b}:</b> {t}</span></li>
                ))}
              </ul>
              <div className="cta-row" style={{ marginTop: 32 }}><Btn kind="s" href={APP_URL}>Get my CTC Score</Btn><ArrowLink href="/guides/">How the score is calculated</ArrowLink></div>
            </div>
            <div><ScoreCard big /></div>
          </div>
        </Sec>

        <Sec>
          <div className="contest">
            <div>
              <span className="eyebrow" style={{ color: 'var(--act-h)' }}><span className="dot" style={{ display: 'inline-block', marginRight: 10, verticalAlign: 'middle' }} />Next monthly contest: registration open</span>
              <h2 className="h2" style={{ margin: '12px 0 10px' }}>Code Nova 3</h2>
              <p className="body-sm" style={{ color: 'var(--body)' }}>{CONTEST.date}, {CONTEST.time} IST, {CONTEST.duration}. Runs in the Crack The Campus desktop app.</p>
              <div style={{ margin: '24px 0 28px' }}><Countdown iso={CONTEST.iso} label="Countdown to Code Nova 3" /></div>
              <div className="cta-row"><Btn href="/contests/code-nova-3/">Register free</Btn><ArrowLink href="/contests/code-nova-3/#results">Last contest results</ArrowLink></div>
            </div>
            <div className="card">
              <h3 className="h3s" style={{ marginBottom: 16 }}>Prizes</h3>
              <ul className="prize">
                {[['Elite tier', 'Premium tech hardware or course scholarships', 'trophy', 'gold'], ['Growth tier', 'Exclusive access to premium hiring events', 'spark', ''], ['Participation', 'Recognition in your CTC Score profile', 'star', '']].map(([b, t, ic, c]) => (
                  <li key={b}><span className={`ic ${c}`} style={{ margin: 0, width: 40, height: 40 }}><Icon name={ic} /></span><span><b>{b}</b>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </Sec>

        <Sec className="raised">
          <Head h="Students who prepared with Crack The Campus" />
          <Quotes items={STUDENT_QUOTES.slice(0, 3)} />
          <div style={{ marginTop: 8 }}><ArrowLink href="/about/#stories">Read more student stories</ArrowLink></div>
        </Sec>

        <Sec>
          <div className="split r57 rev m-img-last">
            <Shot alt="College admin dashboard showing placement readiness by department"><DashWin /></Shot>
            <div>
              <span className="eyebrow">For colleges</span>
              <h2 className="h2" style={{ margin: '12px 0 16px' }}>Run placement-grade assessments on your campus</h2>
              <p className="lead">Proctored internal exams, readiness dashboards and your own curriculum in one admin suite for placement officers and HODs.</p>
              <Checks style={{ margin: '24px 0 32px' }} items={['AI-proctored internal exams', 'Readiness reports by batch and department', 'Upload your syllabus to the curriculum vault']} />
              <Btn kind="s" href="/colleges/#demo">Book a college demo</Btn>
            </div>
          </div>
        </Sec>

        <Sec className="light">
          <Head h="Start free. Upgrade when you’re ready." center />
          <div className="cols c2" style={{ maxWidth: 920, margin: '0 auto' }}>
            <div className="card pad-lg"><span className="badge b-n">Free</span><h3 className="h3" style={{ margin: '14px 0 8px' }}>₹0, forever</h3><p>1 AI resume, 5 CTC assessments, practice assessments, limited AI help and limited contests.</p><div style={{ marginTop: 24 }}><Btn kind="s" className="btn-blk" href={APP_URL}>Start free</Btn></div></div>
            <div className="card pad-lg" style={{ border: '2px solid var(--act)' }}><span className="badge b-v">Pro</span><h3 className="h3" style={{ margin: '14px 0 8px' }}>From ₹3,499 for 6 months</h3><p>23 CTC assessments a month, advanced courses, full contest access and detailed analytics.</p><div style={{ marginTop: 24 }}><ArrowLink href="/pricing/">Compare all plans</ArrowLink></div></div>
          </div>
        </Sec>

        <FaqSec h="Questions students ask" items={FAQ_HOME} link={['Contact support', '/contact/']} />
        <Band h="Your next placement test is closer than you think." p="Start with a free account. Practise company tests, take a proctored mock and see your CTC Score."
          cta={<Btn href={APP_URL}>Start practising free</Btn>} cta2={<Link href="/contact/">Talk to us</Link>} micro="Free forever plan. No credit card." />
      </Main>
      <Footer />
      <StickyCta title="Free forever plan" sub="No credit card" cta="Start practising free" href={APP_URL} />
    </>
  );
}
