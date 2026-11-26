import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MockForm, StickyCta, type FieldDef } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { card, FORM_CARD, FORM_NOTE, FSUB, heroGrid, split, tw } from '@/components/tw';
import { ArrowLink, Band, Btn, Checks, CHECKS2, QM, QUOTE, QUOTE_CAP, QUOTE_WHO, DashWin, Head, Icon, PracticeWin, ProctorWin, Proof, Sec, Shot, Timeline, VaultWin } from '@/components/ui';
import { COLLEGE_INCLUDES } from '@/content/site';
import { PARTNER_COLLEGES, REPLY_TIME, STATS, TPO_QUOTE } from '@/content/dummy';

export const metadata = {
  title: 'Placement management and assessment software for colleges',
  description: 'Run placement-grade proctored exams and see every student’s readiness in one dashboard. Built for placement officers, HODs and faculty.',
  alternates: { canonical: '/colleges/' },
};

// cro: 5 required fields; role is optional context for routing.
const FIELDS: FieldDef[] = [
  { name: 'name', label: 'Full name', ph: 'Your full name…', req: 'text', err: 'Please enter your name.', ac: 'name' },
  { name: 'email', label: 'Work email', type: 'email', ph: 'name@college.edu.in', help: 'Use your official college email if you have one', req: 'email', err: 'Enter a valid email address.' },
  { name: 'phone', label: 'Phone number', type: 'tel', ph: '98765 43210', help: 'For demo scheduling only', req: 'phone', err: 'Enter a 10-digit mobile number.' },
  { name: 'college', label: 'College name', ph: 'Start typing your college…', req: 'text', err: 'Please tell us your college.', ac: 'organization' },
  { name: 'students', label: 'Number of students', type: 'select', ph: 'Select range', help: 'Students who would use it this year', req: 'text', err: 'Please choose a range.', options: ['Under 500', '500–1,500', '1,500–5,000', 'Over 5,000'] },
  { name: 'role', label: 'Your role', type: 'select', ph: 'Select', optional: true, options: ['TPO', 'HOD', 'Principal', 'Faculty', 'Other'] },
];

export default function Colleges() {
  return (
    <>
      <Header />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`}>
          <div className={`${tw.wrap} ${tw.heroWrap} ${heroGrid()} ${tw.enter}`}>
            <div>
              <span className={tw.eyebrow}>For colleges and placement cells</span>
              <h1 className={`${tw.h1} ${tw.heroH1}`}>Placement management and assessments for colleges</h1>
              <p className={`${tw.lead} ${tw.heroLead}`}>Run placement-grade proctored exams and see every student’s readiness in one dashboard. Built for placement officers, HODs and faculty.</p>
              <div className={`${tw.ctaRow} ${tw.heroCta} !hidden m:!flex`} data-hide-sticky=""><Btn blk href="#demo">Book a 20-minute demo</Btn></div>
              <div className={`${tw.ctaRow} ${tw.heroCta}`}><ArrowLink href="#demo">Ask for a sample readiness report</ArrowLink></div>
              <Checks className={tw.dOnly} style={{ marginTop: 28 }} items={['Proctored internal exams in a secure desktop app', 'Readiness by student, batch and department', 'Curriculum-linked practice with a 24/7 AI tutor']} />
              <div className={tw.mOnly} style={{ marginTop: 32 }}><Shot alt="Admin dashboard showing placement readiness by department"><DashWin /></Shot></div>
            </div>
            <div id="demo" data-hide-sticky="">
              <MockForm className={FORM_CARD} fields={FIELDS} submit="Book my demo"
                note={<p className={FORM_NOTE}><Icon name="lock" />We reply within {REPLY_TIME}. No spam.</p>}
                success={{ title: 'Demo request received', body: `Thanks, {name}. We’ll contact you within ${REPLY_TIME} to confirm a time.` }}>
                <h2 className={tw.h3s}>Book a 20-minute demo</h2>
                <p className={FSUB}>See the admin suite with your own use case.</p>
              </MockForm>
            </div>
          </div>
        </section>

        <Sec className={tw.light} style={{ padding: '56px 0' }}>
          <Proof label="Colleges running placements on Crack The Campus" logos={PARTNER_COLLEGES}
            stats={[[STATS.colleges, 'partner colleges'], [STATS.drives, 'proctored drives run'], [STATS.studentsAssessed, 'students assessed'], [STATS.caseMetric, 'more first-round clears (case study)']]} />
        </Sec>

        <Sec>
          <Head h="Built for the people who own placement results" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['Placement officers (TPOs)', 'Track readiness across batches and run drive-style assessments.', 'target'], ['HODs and faculty', 'See department progress and set practice that matches your syllabus.', 'users'], ['Principals and management', 'Get clear reports for reviews and accreditation conversations.', 'chart']].map(([h, p, ic]) => (
              <div className={card()} key={h}><span className={tw.ic}><Icon name={ic} /></span><h3 className={tw.h3s}>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec className={tw.light} id="suite">
          <Head h="One admin suite for your placement programme" />
          <div style={{ display: 'grid', gap: 72 }}>
            {[
              ['Proctored assessments', 'Host your internal tests in the proctored desktop app, with AI monitoring and screen lock, and a pre-built question library for aptitude, coding and technical rounds.', 'Assessment builder and live proctoring view', 'shield'],
              ['Placement training (CRT)', 'Aptitude, coding and company-pattern tracks for every batch, with no extra trainers to schedule.', 'Batch-wise training plan with company tracks', 'layers'],
              ['Readiness analytics', 'Readiness by student, batch and department, with downloadable reports.', 'Readiness dashboard by department', 'chart'],
              ['Curriculum vault and AI tutor', 'Upload syllabus, notes, PDFs, videos and slide decks. Students get 24/7 AI help based on your content.', 'Curriculum vault upload screen', 'book'],
            ].map(([h, p, alt, ic], k) => (
              <div className={`${split()} ${k % 2 ? tw.rev : ''} ${tw.imgLast}`} data-reveal="split" key={h}>
                <Shot alt={alt}>{ic === 'shield' ? <ProctorWin /> : ic === 'layers' ? <PracticeWin label="Batch training, Capgemini track" tags={['Game-based', 'Pseudocode', 'English']} q="Batch 2026 CSE: week 6 of 10. Next drill, pseudocode tracing (30 min)." opts={['Assign to all sections', 'Assign to CSE-A only', 'Schedule for Monday']} sel={0} /> : ic === 'chart' ? <DashWin /> : <VaultWin />}</Shot>
                <div><span className={tw.ic}><Icon name={ic} /></span><h3 className={tw.h3}>{h}</h3><p className={tw.lead} style={{ marginTop: 12 }}>{p}</p></div>
              </div>
            ))}
          </div>
        </Sec>

        <Sec>
          <div className={`${split()}`} data-reveal="split" style={{ alignItems: 'start' }}>
            <div><h2 className={tw.h2}>Admin features</h2><p className={tw.lead} style={{ marginTop: 16 }}>Everything a placement cell needs to run assessments across departments.</p></div>
            <Checks items={['Unlimited admin accounts for faculty, HODs and placement officers', 'Centralised dashboard across departments', 'Multi-department white-label branding', 'Batch management', 'Downloadable individual and batch reports']} />
          </div>
        </Sec>

        <Sec className={tw.light}>
          <Head h="Integrity and student data" p="The questions your IT team and principal will ask." />
          <div className={`${tw.cols} ${tw.c4} ${tw.m2}`} data-reveal="kids">
            {[['What is recorded', 'Webcam snapshots, screen focus events and tab switches during proctored tests only.', 'camera'], ['Where it’s stored', 'Encrypted servers in India (AWS Mumbai region).', 'server'], ['How long it’s kept', 'Proctoring media for 90 days; scores for the length of your licence.', 'hourglass'], ['Who can see it', 'Your TPO and HODs, plus Crack The Campus support on request.', 'eye']].map(([h, p, ic]) => (
              <div className={card()} key={h}><span className={tw.ic}><Icon name={ic} /></span><h3 className={tw.h4}>{h}</h3><p style={{ marginTop: 6 }}>{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec>
          <Head h="From pilot to full rollout" />
          <Timeline items={[
            { t: 'Pilot', p: 'One batch or department, set up with your placement cell.', tag: 'Weeks 1–2' },
            { t: 'Faculty workshop', p: 'Train faculty and HODs on assessments and reports.', tag: 'Week 3' },
            { t: 'Full launch', p: 'All batches, scheduled assessments, monthly readiness reviews.', tag: 'Week 4+' },
            { t: 'Ongoing', p: 'Dedicated account manager and priority support.' },
          ]} />
        </Sec>

        <Sec className={tw.light} id="case-study">
          <figure className={`${card({ lg: true })} ${QUOTE}`} style={{ maxWidth: 960, margin: '0 auto' }}>
            <span className={QM}><Icon name="quote" /></span>
            <blockquote className="m-0 text-tx font-head text-[28px] leading-[38px] font-bold tracking-[-.01em] m:text-[22px] m:leading-[30px]">“{TPO_QUOTE.text}”</blockquote>
            <div className={tw.row} style={{ gap: 12 }}>{TPO_QUOTE.metrics.map((m) => <span className={`${tw.badge} ${tw.bGold}`} key={m}>{m}</span>)}</div>
            <figcaption className={QUOTE_CAP}><span><b className={QUOTE_WHO}>{TPO_QUOTE.name}</b><span className="text-[14px] text-tx3">{TPO_QUOTE.meta}</span></span></figcaption>
          </figure>
        </Sec>

        <Sec>
          <div className={`${split()}`} data-reveal="split" style={{ alignItems: 'start' }}>
            <div>
              <span className={tw.eyebrow}>Pricing</span>
              <h2 className={tw.h2} style={{ margin: '12px 0 16px' }}>Pricing: per-student annual licence</h2>
              <p className={tw.lead}>Scoped to cohort size, integrations, proctoring policy, training and support tier. Invoicing and custom terms available.</p>
              <div style={{ marginTop: 28 }}><Btn kind="s" href="#demo">Get a quote</Btn></div>
            </div>
            <div className={card({ lg: true })}><h3 className={tw.h4} style={{ marginBottom: 16 }}>Every licence includes</h3><Checks className={CHECKS2} items={COLLEGE_INCLUDES} /></div>
          </div>
        </Sec>

        <FaqSec h="Questions from placement cells" intro={false} items={[
          ['What is placement management software for colleges?', 'Software that helps a placement cell prepare, assess and track students for hiring. Crack The Campus focuses on readiness: proctored assessments, training tracks and analytics.'],
          ['Can we run our own internal exams?', 'Yes. Upload your tests and run them in the proctored desktop app.'],
          ['Which devices do our labs need?', 'Windows, macOS or Linux machines with webcams and a stable connection: 4 GB RAM and a recent Chrome or Edge.'],
          ['Do students need separate accounts?', 'Yes. You bulk-upload a CSV or share an invite link; students verify with their college email.'],
          ['Do you support SSO?', 'SSO is scoped as part of the institutional licence. Google Workspace and Microsoft 365 are supported.'],
          ['How long does rollout take?', 'A pilot can start within 7 days; full rollout typically takes 4 weeks.'],
          ['Is student data shared with anyone?', 'No. Student data is never sold or shared with recruiters without the student’s consent.'],
        ]} />
        <Band h="See your students’ readiness before the next drive." p="A 20-minute demo with your own use case. No commitment." cta={<Btn href="#demo">Book a demo</Btn>} cta2={<Link href="/contact/">Talk to our team</Link>} />
      </Main>
      <Footer />
      <StickyCta title="20-minute demo" sub="Free, no commitment" cta="Book a demo" href="#demo" />
    </>
  );
}
