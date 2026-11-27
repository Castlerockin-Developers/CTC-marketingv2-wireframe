import Link from 'next/link';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SampleQuiz from '@/components/SampleQuiz';
import { StickyCta, Countdown } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { CHECK_LI, CHECKS, DashWin, Icon, PracticeWin, ProctorWin, ScoreCard } from '@/components/ui';
import { BrandLogo } from '@/components/Logo';
import { CompanySwap, FeatureTabs, JourneyBar } from '@/components/home';
import { tw } from '@/components/tw';
import { Art, GLASS, GLOW, H2, Pill, Scorecard, TextLink } from '@/components/brand';
import { APP_URL, COMPANIES, DOWNLOAD_URL, FAQ_HOME, NOT_AFFILIATED } from '@/content/site';
import { CONTEST, INFOSYS, PARTNER_COLLEGES, STATS, STUDENT_QUOTES } from '@/content/dummy';

// Copy follows "Crack The Campus — Website Content (Revamp)" §3.1 (Home); one filled button per screen, the rest are text links.
export const metadata = {
  title: { absolute: 'Placement Preparation Platform | Crack The Campus' },
  description: 'A placement preparation platform for engineering students in India: company-wise practice, proctored mock tests and a CTC Score.',
  alternates: { canonical: '/' },
};

function ChapterHead({ n, title, sub, art, cta }: { n: string; title: string; sub: string; art: string; cta: [string, string] }) {
  return (
    <>
      <Art src={art} className="flex min-h-[460px] flex-col justify-between p-12 m:min-h-[360px] m:p-6">
        <div>
          <p className="font-mono text-[13px] font-medium text-white [text-shadow:0_1px_10px_rgba(0,10,40,.6)]">Step {n}</p>
          <h2 data-blur className="mt-3 max-w-[640px] font-head text-h1 font-bold tracking-[-.02em] text-white [text-shadow:0_2px_24px_rgba(0,10,40,.25)]">{title}</h2>
        </div>
        <p className="max-w-[560px] text-[17px] leading-7 text-white/90">{sub}</p>
      </Art>
      <div className="mt-6 pl-12 m:pl-0"><Pill href={cta[1]}>{cta[0]}</Pill></div>
    </>
  );
}

function Feature({ h, p, link, children }: { h: string; p: string; link?: [string, string]; children: ReactNode }) {
  return (
    <div className="mt-28 m:mt-20">
      <h3 data-blur className="font-head text-[34px] font-bold leading-[42px] tracking-[-.02em] text-ink m:text-[26px] m:leading-[32px]">{h}</h3>
      <p className="mt-4 max-w-[720px] text-body">{p}</p>
      {link && <TextLink href={link[1]} className="mt-4">{link[0]}</TextLink>}
      <div className="mt-10">{children}</div>
    </div>
  );
}


// "Pick your goal" (doc §3.1 section 4).
const GOALS: [string, string, string][] = [
  ['Company prep', 'Patterns and mocks for 7 recruiters', '/prep/'],
  ['Aptitude', 'Quant, reasoning and verbal, topic by topic', '/aptitude/'],
  ['Coding', 'Python, Java, C, C++ and JavaScript', '/coding/'],
  ['Proctored mock tests', 'Full timed tests in the desktop app', '/mock-tests/'],
];

// "Why students choose Crack The Campus" (doc §3.1 section 6), set against what free practice sites usually give.
// [what you get, free sites' verdict, free sites in a few words, what Crack The Campus gives]
const WHY: [string, 'yes' | 'part' | 'no', string, string][] = [
  ['Practice questions with explanations', 'yes', 'Yes', 'Topic by topic, every answer explained'],
  ['Practice that matches real tests', 'part', 'Rarely company-specific', 'Company patterns, incl. Capgemini’s game rounds you can play'],
  ['Test conditions, not just questions', 'no', 'No timer or proctoring', 'Proctored mocks: timer, camera checks, locked screen'],
  ['One number that shows progress', 'no', 'No readiness signal', 'CTC Score from 0 to 10, week by week'],
  ['Free to start, fair to upgrade', 'yes', 'Free', 'Free forever plan; Pro from ₹3,499 for 6 months'],
];
const VERDICT = { yes: ['check', 'bg-black/[.06] text-muted'], part: ['minus', 'bg-black/[.06] text-muted'], no: ['x', 'bg-[#FDECEA] text-[#B42318]'] } as const;

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        {/* 1 ---------- hero: painted campus, one filled button ---------- */}
        <section className="px-4 pt-2 m:px-2" data-hide-sticky>
          <Art src="/images/art/campus.webp" pos="50% 100%" eager className="flex min-h-[min(88vh,860px)] items-start justify-center m:min-h-[680px]"
            shade="bg-[linear-gradient(180deg,rgba(10,24,70,.5)_0%,rgba(10,24,70,.34)_55%,rgba(10,24,70,0)_85%)]">
            <div className="max-w-[920px] px-6 pt-[104px] text-center text-white m:pt-14">
              <p className="text-[15px] font-medium text-white/85">For engineering students in India</p>
              <h1 data-blur className="mt-5 text-balance font-head text-display font-bold tracking-[-.02em] text-white [text-shadow:0_2px_30px_rgba(0,20,80,.25)]">Get placement-ready for Infosys, Wipro, Capgemini and more</h1>
              <p className="mx-auto mt-6 max-w-[640px] text-lead text-white/90 [text-shadow:0_1px_16px_rgba(0,20,80,.35)]">Company-wise aptitude and coding practice, proctored mock tests in our desktop app, and a CTC Score from 0 to 10 that shows how ready you are.</p>
              <div className="mt-9 flex items-center justify-center gap-6 m:flex-col m:gap-3">
                <Pill href={APP_URL} kind="white">Start practising free</Pill>
                <TextLink href="#how-it-works" dark className="rounded-full bg-[rgba(10,24,70,.32)] px-4 backdrop-blur-md">See how it works</TextLink>
              </div>
              <p className="mt-4 inline-block rounded-full bg-[rgba(10,24,70,.32)] px-3.5 py-1 text-[14px] font-medium text-white backdrop-blur-md">Free forever plan · No credit card</p>
            </div>
          </Art>
        </section>

        {/* 2 ---------- trust bar (placeholder numbers: content/dummy.ts) ---------- */}
        <section className="py-16 m:py-12">
          <div className={tw.wrap}>
            <p className="text-center text-[14px] font-medium text-muted">Trusted by engineering students and colleges across India</p>
            <dl className="mt-8 grid grid-cols-4 divide-x divide-line t:grid-cols-2 t:divide-x-0 t:gap-y-8">
              {[[STATS.students, 'students practising'], [STATS.colleges, 'partner colleges'], [STATS.drives, 'proctored assessment drives'], [STATS.contestants, 'contest participants']].map(([b, s]) => (
                <div key={s} className="flex flex-col-reverse text-center"><dt className="mt-1 text-[15px] text-muted">{s}</dt><dd className="m-0 font-head text-[40px] font-bold leading-none tracking-[-.02em] text-ink m:text-[32px]">{b}</dd></div>
              ))}
            </dl>
            <p className="mt-8 text-center text-[13px] text-muted">{PARTNER_COLLEGES.join(' · ')}</p>
          </div>
        </section>

        {/* 3 ---------- companies: rolling logo grid ---------- */}
        <section className="pb-24 pt-8 m:pb-16" id="companies">
          <div className={tw.wrap}>
            <h2 data-blur className="mx-auto max-w-[640px] text-center font-head text-[30px] font-bold leading-[38px] tracking-[-.02em] text-ink m:text-[24px] m:leading-8">Company-wise prep for the drives on your calendar</h2>
            <div className="mx-auto mt-12 max-w-[920px]"><CompanySwap items={COMPANIES} /></div>
            <p className="mt-8 text-center text-[15px] text-muted">Each company page has the test pattern, a free 10-question sample and full mock tests. <Link href="/contact/">Request a company</Link></p>
          </div>
        </section>

        {/* 4 ---------- two audiences (students' card carries "Pick your goal") ---------- */}
        <section className="py-sec">
          <div className={tw.wrap}>
            <h2 data-blur className={`mx-auto max-w-[720px] text-center ${H2}`}>For students, and for the colleges that train them</h2>
            <div className="mt-14 grid grid-cols-2 gap-6 m:grid-cols-1">
              <div className={`relative flex min-h-[620px] flex-col overflow-hidden p-10 m:min-h-0 m:p-6 ${GLOW}`} data-reveal="">
                <p className="text-[15px] font-medium text-muted">For students · What are you preparing for?</p>
                <ul className="mt-5 list-none divide-y divide-black/[.06]">
                  {GOALS.map(([t, d, href]) => (
                    <li key={t}><Link href={href} className="group flex items-center justify-between gap-4 py-3.5 !no-underline">
                      <span><b className="block font-head text-[19px] font-bold text-ink">{t}</b><span className="text-[14px] text-body">{d}</span></span>
                      <span className="text-act transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link></li>
                  ))}
                </ul>
                <div className="mt-auto translate-y-10 pt-10 drop-shadow-[0_24px_48px_rgba(29,29,31,.14)] m:translate-y-6"><PracticeWin /></div>
              </div>
              <div className="relative flex min-h-[620px] flex-col overflow-hidden rounded-[24px] [background:radial-gradient(70%_80%_at_80%_0%,rgba(91,68,227,.45),transparent_70%),#0B0B0F] p-10 m:min-h-0 m:p-6" data-reveal="">
                <p className="text-[15px] font-medium text-white/60">For placement officers and HODs</p>
                <h3 className="mt-3 max-w-[420px] font-head text-[30px] font-bold leading-[38px] tracking-[-.02em] text-white">Run placement-grade assessments on your campus</h3>
                <p className="mt-3 max-w-[440px] text-white/65">Proctored internal exams, readiness dashboards and your own curriculum in one admin suite.</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"><Pill href="/colleges/#demo" kind="white">Book a 20-minute demo</Pill><TextLink href="/colleges/" dark>See the admin suite</TextLink></div>
                <div className="mt-auto translate-y-10 pt-10 m:translate-y-6"><DashWin /></div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 ---------- try before sign-up ---------- */}
        <section className="bg-alt py-sec">
          <div className={`${tw.wrap} grid grid-cols-[5fr_6fr] items-center gap-16 m:grid-cols-1 m:gap-10`}>
            <div>
              <h2 data-blur className={H2}>Try a real-pattern question now</h2>
              <p className="mt-5 max-w-[480px] text-body">Every company page has a free sample, so you can look around before you sign up. This one follows the Infosys pattern: {INFOSYS.practiceSets} practice sets and {INFOSYS.mocks} full mocks sit behind it.</p>
              <TextLink href="/prep/infosys/" className="mt-5">See the full Infosys prep</TextLink>
            </div>
            <div data-reveal=""><SampleQuiz company="Infosys" minutes={INFOSYS.minutes} /></div>
          </div>
        </section>

        {/* 6 ---------- how it works: three painted chapters, a sticky journey bar ---------- */}
        <div id="how-it-works" className="relative scroll-mt-20 pb-sec">
          <JourneyBar items={[['Learn and practise', 'practise'], ['Prove it under test conditions', 'prove'], ['Get your CTC Score', 'ctc-score']]} />
          <div className={tw.wrap}>
            <section id="practise" className="scroll-mt-36 pt-24">
              <ChapterHead n="01" art="/images/art/rooftop.webp" title="Practise like it’s the real test" sub="Take courses, drill topics and work through company prep in your browser, any time." cta={['Start practising free', APP_URL]} />
              <Feature h="Practice that matches real tests" p="Company prep follows the patterns recruiters use, including Capgemini’s game-based challenges you can actually play." link={['See company prep', '/prep/']}>
                <FeatureTabs tabs={[
                  { title: 'Company patterns', body: 'Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft, each with a free sample and full mocks.', visual: <PracticeWin /> },
                  { title: 'Aptitude, topic by topic', body: 'Quant, logical reasoning and verbal ability, with timed quizzes.', visual: <PracticeWin label="Web app, aptitude" tags={['Reasoning']} q="If APPLE is written as ELPPA, how is MANGO written?" opts={['OGNAM', 'ONGAM', 'OGMAN']} sel={0} /> },
                  { title: 'Coding in five languages', body: 'Placement-style problems in Python, Java, C, C++ and JavaScript.', visual: <PracticeWin label="Web app, Python course" tags={['Python', 'Loops']} q="What does range(2, 10, 3) produce?" opts={['2, 5, 8', '2, 4, 6, 8', '3, 6, 9']} sel={0} /> },
                ]} />
              </Feature>
              <Scorecard q={STUDENT_QUOTES[0]} />
            </section>

            <section id="prove" className="scroll-mt-36 pt-sec">
              <ChapterHead n="02" art="/images/art/lake.webp" title="Sit the test before the test" sub="Sit timed, AI-proctored tests on Windows, macOS or Linux, so the real test feels familiar." cta={['Get the desktop app', DOWNLOAD_URL]} />
              <Feature h="Test conditions, not just questions" p="Proctored mocks in the desktop app train you for timers, camera checks and locked screens.">
                <FeatureTabs tabs={[
                  { title: 'Proctored mock tests', body: 'Full timed mocks with AI monitoring in a secure window.', visual: <ProctorWin /> },
                  { title: 'Monthly coding contests', body: `Code Nova 3 runs on ${CONTEST.date}, free to enter.`, visual: (
                    <div className="rounded-[16px] border border-line bg-white p-7">
                      <p className="text-[13px] font-medium text-act">Registration open</p>
                      <p className="mt-1 font-head text-[28px] font-bold tracking-[-.02em] text-ink">Code Nova 3</p>
                      <p className="mt-1 text-[14px] text-muted">{CONTEST.date}, {CONTEST.time} IST, {CONTEST.duration}</p>
                    </div>
                  ) },
                  { title: 'Results you can act on', body: 'See accuracy and timing by section after every mock.', visual: <DashWin title="Your last mock, by section" label="Mock test report" unit="accuracy" rows={[['Quant', 72], ['Reasoning', 81], ['Verbal', 64], ['Pseudocode', 58], ['Coding', 70]]} /> },
                ]} />
              </Feature>
              <Scorecard q={STUDENT_QUOTES[1]} />
            </section>

            <section id="ctc-score" className="scroll-mt-36 pt-sec">
              <ChapterHead n="03" art="/images/art/campus.webp" title="Know when you’re ready" sub="Your CTC Score runs from 0 to 10. Instead of telling a recruiter you’re ready, you can show them." cta={['Get my CTC Score', APP_URL]} />
              <div className="mt-28 grid grid-cols-[6fr_5fr] items-center gap-14 m:mt-20 m:grid-cols-1 m:gap-10">
                <div>
                  <h3 data-blur className="font-head text-[34px] font-bold leading-[42px] tracking-[-.02em] text-ink m:text-[26px] m:leading-[32px]">One number that shows how placement-ready you are</h3>
                  <ul className={`${CHECKS} mt-8`}>
                    {[['Skills', 'courses and company prep you’ve completed'], ['Practice', 'mock tests and drills, and how consistently you do them'], ['Proctored performance', 'verified results from the desktop app']].map(([b, t]) => (
                      <li className={CHECK_LI} key={b}><Icon name="checkc" /><span><b className="font-medium text-ink">{b}:</b> {t}</span></li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[15px] text-muted">It is a readiness score, not your salary “CTC”. Only you can see it unless you share your profile.</p>
                  <TextLink href="/ctc-score/" className="mt-3">How the score is calculated</TextLink>
                </div>
                <div className={`p-10 m:p-5 ${GLOW}`} data-reveal=""><div className="drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]"><ScoreCard big /></div></div>
              </div>
              <Scorecard q={STUDENT_QUOTES[2]} />
            </section>
          </div>
        </div>

        {/* 7 ---------- why students choose us: two cards, ours lifted ---------- */}
        <section className="bg-alt py-sec">
          <div className={tw.wrap}>
            <div className="mx-auto max-w-[700px] text-center">
              <h2 data-blur className={H2}>Why students choose Crack The Campus</h2>
              <p className="mt-5 text-body">Free sites give you questions. Crack The Campus adds company-pattern mocks, proctored test conditions and a score that tracks your readiness over time.</p>
            </div>
            <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-[5fr_7fr] items-center gap-6 m:grid-cols-1" data-reveal="">
              <div className="rounded-[24px] border border-line bg-white/60 p-8 m:order-2 m:p-6">
                <p className="font-head text-[20px] font-bold text-muted">Free practice sites</p>
                <p className="mt-1 text-[14px] text-muted">Good for questions. That’s about it.</p>
                <ul className="mt-6 list-none">
                  {WHY.map(([what, v, free]) => (
                    <li key={what} className="flex min-h-[72px] items-center gap-4 border-t border-line py-3">
                      <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${VERDICT[v][1]} [&_svg]:h-4 [&_svg]:w-4`}><Icon name={VERDICT[v][0]} /></span>
                      <span><span className="block text-[15px] text-body">{what}</span><span className="text-[13px] text-muted">{free}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] bg-[linear-gradient(135deg,#5B44E3,#A294F9_45%,#9FD3FF)] p-[2px] shadow-[0_30px_80px_rgba(91,68,227,.22)]">
                <div className="rounded-[26px] bg-white p-9 m:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <BrandLogo className="!h-8" />
                    <span className="rounded-full bg-tint px-3 py-1 text-[13px] font-medium text-act">Built for placement tests</span>
                  </div>
                  <ul className="mt-6 list-none">
                    {WHY.map(([what, , , ctc]) => (
                      <li key={what} className="flex min-h-[72px] items-center gap-4 border-t border-line py-3">
                        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-act text-white [&_svg]:h-4 [&_svg]:w-4"><Icon name="check" /></span>
                        <span><span className="block text-[16px] font-medium text-ink">{what}</span><span className="text-[14px] text-body">{ctc}</span></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2"><Pill href={APP_URL}>Start practising free</Pill><span className="text-[14px] text-muted">Free forever plan · No credit card</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 ---------- student stories: glass over painted art (placeholder quotes) ---------- */}
        <section className="px-4 pt-4 m:px-2">
          <Art src="/images/art/lake.webp" shade="bg-[rgba(6,12,36,.62)]" className="py-sec">
            <div className={tw.wrap}>
              <h2 data-blur className="mx-auto max-w-[760px] text-center font-head text-h2 font-bold tracking-[-.02em] text-white">Students who prepared with Crack The Campus</h2>
              <div className="mt-14 grid grid-cols-3 gap-5 m:grid-cols-1" data-reveal="">
                {STUDENT_QUOTES.slice(3, 6).map((q) => (
                  <figure key={q.name} className={`${GLASS} flex flex-col`}>
                    <blockquote className="m-0 font-head text-[20px] font-bold leading-[30px] tracking-[-.01em]">“{q.text}”</blockquote>
                    <figcaption className="mt-auto pt-8 text-[15px] text-white/70"><b className="block font-medium text-white">{q.name}</b>{q.meta}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-10 text-center"><TextLink href="/about/#stories" dark>Read more student stories</TextLink></div>
            </div>
          </Art>
        </section>

        {/* 9 ---------- next contest: the exam-hall moment ---------- */}
        <section className="py-sec">
          <div className={tw.wrap}>
            <div className="relative overflow-hidden rounded-[32px] bg-[#0B0B0F] p-16 text-white m:rounded-[20px] m:p-7" data-reveal="">
              <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:48px_48px] [mask-image:radial-gradient(70%_80%_at_70%_40%,#000,transparent)]" />
              <div className="relative grid grid-cols-[7fr_5fr] items-center gap-12 m:grid-cols-1 m:gap-8">
                <div>
                  <p className="flex items-center gap-2.5 text-[14px] font-medium text-lav"><span className="h-2 w-2 rounded-full bg-lav shadow-[0_0_0_4px_rgba(162,148,249,.25)]" />Next monthly contest · Registration open</p>
                  <h2 className="mt-4 font-head text-display font-bold tracking-[-.02em] text-white">Code Nova 3</h2>
                  <p className="mt-3 font-mono text-[15px] text-white/70">{CONTEST.date} · {CONTEST.time} IST · {CONTEST.duration} · in the desktop app</p>
                  <div className="mt-8"><Countdown iso={CONTEST.iso} label="Countdown to Code Nova 3" /></div>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <Pill href="/contests/code-nova-3/" kind="white">Register free</Pill>
                    <TextLink href="/contests/code-nova-3/#results" dark>Last contest results</TextLink>
                  </div>
                </div>
                <ul className="list-none rounded-[24px] border border-white/10 bg-white/[.04] p-8 m:p-6">
                  <li className="font-head text-[20px] font-bold">Prizes</li>
                  {[['Elite tier', 'Premium tech hardware or course scholarships'], ['Growth tier', 'Exclusive access to premium hiring events'], ['Participation', 'Recognition in your CTC Score profile']].map(([b, t]) => (
                    <li key={b} className="mt-5 border-t border-white/10 pt-5 text-[15px] text-white/65"><b className="block font-medium text-white">{b}</b>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10 ---------- for colleges: a dark section so the second audience reads at a glance ---------- */}
        <section className="py-sec">
          <div className={tw.wrap}>
            <div className="relative grid grid-cols-[5fr_6fr] items-center gap-16 overflow-hidden rounded-[32px] bg-ink px-16 py-20 text-white t:px-10 m:grid-cols-1 m:gap-10 m:rounded-[24px] m:px-6 m:py-12">
              <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,68,227,.45),transparent_65%)]" />
              <div className="relative">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[12.5px] font-medium uppercase tracking-[.08em] text-white"><Icon name="building" />For colleges</p>
                <h2 data-blur className="mt-6 font-head text-h2 font-bold tracking-[-.015em] text-white">See every student’s readiness before the next drive</h2>
                <p className="mt-5 text-[18px] leading-[30px] text-white/75">Proctored internal exams, readiness dashboards and your own curriculum in one admin suite for placement officers and HODs.</p>
                <ul className={`${CHECKS} mt-7 text-white/90 [&_svg]:!text-lav`}>
                  {['AI-proctored internal exams', 'Readiness reports by batch and department', 'Upload your syllabus to the curriculum vault'].map((t) => <li className={CHECK_LI} key={t}><Icon name="checkc" /><span>{t}</span></li>)}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-6"><Pill href="/colleges/#demo">Book a 20-minute demo</Pill><TextLink href="/colleges/" dark>See the admin suite</TextLink></div>
              </div>
              <div className="relative rounded-[24px] bg-white/[.06] p-8 ring-1 ring-white/10 m:p-4" data-reveal=""><div className="drop-shadow-[0_30px_60px_rgba(0,0,0,.45)]"><DashWin /></div></div>
            </div>
          </div>
        </section>

        {/* 11 ---------- pricing teaser ---------- */}
        <section className="py-sec">
          <div className={tw.wrap}>
            <h2 data-blur className={`mx-auto max-w-[640px] text-center ${H2}`}>Start free. Upgrade when you’re ready.</h2>
            <div className="mx-auto mt-14 grid max-w-[920px] grid-cols-2 gap-6 m:grid-cols-1" data-reveal="">
              <div className="flex flex-col rounded-[24px] bg-alt p-10 m:p-7">
                <p className="text-[15px] font-medium text-muted">Free</p>
                <p className="mt-2 font-head text-[40px] font-bold tracking-[-.02em] text-ink">₹0, forever</p>
                <p className="mt-3 text-body">1 AI resume, 5 CTC assessments, practice assessments, limited AI help and limited contests.</p>
                <Pill href={APP_URL} className="mt-8 self-start">Start free</Pill>
              </div>
              <div className="flex flex-col rounded-[24px] bg-ink p-10 text-white m:p-7">
                <p className="text-[15px] font-medium text-lav">Pro</p>
                <p className="mt-2 font-head text-[40px] font-bold tracking-[-.02em]">From ₹3,499 <span className="text-[18px] text-white/60">for 6 months</span></p>
                <p className="mt-3 text-white/70">23 CTC assessments a month, advanced courses, full contest access and detailed analytics. Pro + Placement from ₹7,499.</p>
                <TextLink href="/pricing/" dark className="mt-6 self-start">Compare all plans</TextLink>
              </div>
            </div>
          </div>
        </section>

        <FaqSec h="Questions students ask" items={FAQ_HOME} link={['Contact support', '/contact/']} />

        {/* 12 ---------- closing: painted dusk, one clear action ---------- */}
        <section className="px-4 py-4 m:px-2" data-hide-sticky>
          <Art src="/images/art/rooftop.webp" pos="50% 40%" className="flex min-h-[560px] items-center justify-center py-24 m:min-h-[480px]" shade="bg-[linear-gradient(180deg,rgba(8,12,40,.45),rgba(8,12,40,.25)_50%,rgba(8,12,40,.55))]">
            <div className="max-w-[760px] px-6 text-center text-white">
              <h2 data-blur className="font-head text-h1 font-bold tracking-[-.02em] text-white">Your next placement test is closer than you think</h2>
              <p className="mx-auto mt-5 max-w-[560px] text-[18px] leading-7 text-white/85">Start with a free account. Practise company tests, take a proctored mock and see your CTC Score.</p>
              <div className="mt-9 flex items-center justify-center gap-6 m:flex-col m:gap-3">
                <Pill href={APP_URL} kind="white">Start practising free</Pill>
                <TextLink href="/contact/" dark>Talk to us</TextLink>
              </div>
            </div>
          </Art>
        </section>
      </Main>
      <Footer disclaim={NOT_AFFILIATED} />
      <StickyCta title="Free forever plan" sub="No credit card" cta="Start practising free" href={APP_URL} />
    </>
  );
}
