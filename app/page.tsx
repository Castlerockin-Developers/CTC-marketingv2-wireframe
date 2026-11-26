import Link from 'next/link';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StickyCta, Countdown } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { CHECK_LI, CHECKS, DashWin, Icon, PracticeWin, ProctorWin, ScoreCard } from '@/components/ui';
import { ChapterRail, CompanySwap, FeatureTabs } from '@/components/home';
import { tw } from '@/components/tw';
import { APP_URL, COMPANIES, DOWNLOAD_URL, FAQ_HOME } from '@/content/site';
import { CONTEST, STATS, STUDENT_QUOTES, type Quote } from '@/content/dummy';

export const metadata = {
  title: { absolute: 'Crack The Campus — placement prep for Infosys, Wipro, Capgemini and more' },
  alternates: { canonical: '/' },
};

/* ---------- page-local primitives ---------- */
type PillKind = 'act' | 'white' | 'ghost' | 'line';
const PILL: Record<PillKind, string> = {
  act: 'bg-act !text-white hover:bg-act-h',
  white: 'bg-white !text-ink hover:bg-alt',
  ghost: 'border border-white/30 bg-[rgba(10,24,70,.38)] !text-white backdrop-blur-md hover:bg-[rgba(10,24,70,.55)]',
  line: 'border border-line-2 !text-ink hover:border-ink',
};
const CHIP: Partial<Record<PillKind, string>> = { act: 'bg-white text-act', white: 'bg-act text-white', line: 'bg-ink text-white' };

/** Rocketlane-style pill: label plus a round arrow chip that nudges on hover. */
function Pill({ href, kind = 'act', children, className = '' }: { href: string; kind?: PillKind; children: ReactNode; className?: string }) {
  const chip = CHIP[kind];
  return (
    <Link href={href} className={`group inline-flex h-12 items-center gap-3 rounded-full text-[16px] font-medium !no-underline transition-colors duration-300 ${chip ? 'pl-6 pr-1.5' : 'px-6'} ${PILL[kind]} ${className}`}>
      {children}
      {chip && <span className={`flex h-9 w-9 items-center justify-center rounded-full ${chip} [&_svg]:h-4 [&_svg]:w-4 [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-0.5`}><Icon name="arrow" /></span>}
    </Link>
  );
}

/** Painted illustration card: image drifts on scroll (data-parallax), content sits on top. */
function Art({ src, pos = '50% 50%', className = '', shade = 'bg-[linear-gradient(180deg,rgba(8,16,48,.38),rgba(8,16,48,.05)_40%,rgba(8,16,48,.62))]', children, eager }: { src: string; pos?: string; className?: string; shade?: string; children: ReactNode; eager?: boolean }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-[32px] m:rounded-[20px] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export; art is pre-compressed in public/images/art */}
      <img src={src} alt="" data-parallax loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async"
        className="absolute inset-x-0 -top-[8%] -z-10 h-[116%] w-full object-cover" style={{ objectPosition: pos }} />
      <div className={`absolute inset-0 -z-10 ${shade}`} />
      {children}
    </div>
  );
}

const initials = (n: string) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

/** One student voice under each chapter, as Rocketlane closes each pillar with a customer. */
function Voice({ q }: { q: Quote }) {
  return (
    <figure className="mt-20 grid grid-cols-[120px_1fr] items-center gap-8 m:grid-cols-1 m:gap-5" data-reveal="">
      <span className="flex h-[120px] w-[120px] items-center justify-center rounded-[24px] bg-alt font-head text-[32px] font-medium text-muted m:h-16 m:w-16 m:rounded-2xl m:text-[20px]" aria-hidden="true">{initials(q.name)}</span>
      <div>
        <blockquote className="m-0 font-head text-[22px] font-medium leading-[32px] tracking-[-.01em] text-ink m:text-[19px] m:leading-7">“{q.text}”</blockquote>
        <figcaption className="mt-4 text-[15px] text-body"><b className="font-medium text-ink">{q.name}</b> · {q.meta}</figcaption>
      </div>
    </figure>
  );
}

function ChapterHead({ title, sub, cta }: { title: string; sub: string; cta: [string, string] }) {
  return (
    <>
      <Art src={CHAPTER_ART[title]} className="flex min-h-[460px] flex-col justify-between p-12 m:min-h-[360px] m:p-6">
        <h2 data-blur className="max-w-[640px] font-head text-h1 font-medium tracking-[-.025em] text-white [text-shadow:0_2px_24px_rgba(0,10,40,.25)]">{title}</h2>
        <p className="max-w-[560px] text-[17px] leading-7 text-white/90">{sub}</p>
      </Art>
      <div className="mt-6 pl-12 m:pl-0"><Pill href={cta[1]} kind="act">{cta[0]}</Pill></div>
    </>
  );
}

function Feature({ h, p, link, children }: { h: string; p: string; link?: [string, string]; children: ReactNode }) {
  return (
    <div className="mt-28 m:mt-20">
      <h3 data-blur className="font-head text-[34px] font-medium leading-[42px] tracking-[-.02em] text-ink m:text-[26px] m:leading-[32px]">{h}</h3>
      <p className="mt-4 max-w-[720px] text-body">{p}</p>
      {link && <Pill href={link[1]} kind="line" className="mt-7">{link[0]}</Pill>}
      <div className="mt-12">{children}</div>
    </div>
  );
}

const CHAPTER_ART: Record<string, string> = {
  'Practise like it’s the real test': '/images/art/rooftop.jpg',
  'Sit the test before the test': '/images/art/lake.jpg',
  'Know when you’re ready': '/images/art/campus.jpg',
};

const GLOW = 'rounded-[24px] bg-[radial-gradient(90%_120%_at_0%_0%,#DCD5FF_0%,transparent_55%),radial-gradient(80%_110%_at_100%_100%,#BFE3FF_0%,transparent_60%),linear-gradient(135deg,#EEF0FF,#F4F8FF)]';
const GLASS = 'rounded-[24px] border border-white/15 bg-white/[.08] p-8 text-white backdrop-blur-xl m:p-6';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        {/* ---------- hero: painted campus in a rounded frame, centred white type ---------- */}
        <section className="px-4 pt-2 m:px-2" data-hide-sticky>
          <Art src="/images/art/campus.jpg" pos="50% 100%" eager className="flex min-h-[min(88vh,860px)] items-start justify-center m:min-h-[680px]"
            shade="bg-[linear-gradient(180deg,rgba(10,24,70,.42)_0%,rgba(10,24,70,.18)_45%,rgba(10,24,70,0)_65%)]">
            <div className="max-w-[920px] px-6 pt-[104px] text-center text-white m:pt-14">
              <p className="text-[15px] font-medium text-white/85">For engineering students in India</p>
              <h1 data-blur className="mt-5 font-head text-display font-medium tracking-[-.03em] text-white [text-shadow:0_2px_30px_rgba(0,20,80,.25)]">Get placement-ready for Infosys, Wipro, Capgemini and more</h1>
              <p className="mx-auto mt-6 max-w-[640px] text-lead text-white/90">Company-wise aptitude and coding practice, proctored mock tests in our desktop app, and a CTC Score from 0 to 10 that shows how ready you are.</p>
              <div className="mt-9 flex justify-center gap-3 m:flex-col m:items-center">
                <Pill href={APP_URL} kind="white">Start practising free</Pill>
                <Pill href="#how-it-works" kind="ghost">See how it works</Pill>
              </div>
              <p className="mt-5 text-[14px] font-medium text-white [text-shadow:0_1px_12px_rgba(0,20,80,.6)]">Free forever plan. No credit card.</p>
            </div>
          </Art>
        </section>

        {/* ---------- companies: rolling grid ---------- */}
        <section className="py-28 m:py-16" id="companies">
          <div className={tw.wrap}>
            <h2 data-blur className="mx-auto max-w-[640px] text-center font-head text-[30px] font-medium leading-[38px] tracking-[-.02em] text-ink m:text-[24px] m:leading-8">Company-wise prep for the drives on your calendar</h2>
            <div className="mx-auto mt-12 max-w-[920px]"><CompanySwap items={COMPANIES} /></div>
            <p className="mt-8 text-center text-[15px] text-muted">Each company page has the test pattern, a free 10-question sample and full mock tests.</p>
            <p className="mt-2 text-center text-[12px] text-muted">Company names and logos are trademarks of their owners. Crack The Campus is not affiliated with or endorsed by them.</p>
          </div>
        </section>

        {/* ---------- two paths ---------- */}
        <section className="pb-sec">
          <div className={tw.wrap}>
            <h2 data-blur className="mx-auto max-w-[720px] text-center font-head text-h2 font-medium tracking-[-.02em] text-ink">For students, and for the colleges that train them</h2>
            <div className="mt-16 grid grid-cols-2 gap-6 m:grid-cols-1">
              <div className={`relative flex min-h-[600px] flex-col overflow-hidden p-10 m:min-h-0 m:p-6 ${GLOW}`} data-reveal="">
                <p className="text-[15px] font-medium text-muted">For students</p>
                <h3 className="mt-3 max-w-[420px] font-head text-[30px] font-medium leading-[38px] tracking-[-.02em] text-ink">Practise, prove it under test conditions, and track one score</h3>
                <Pill href={APP_URL} kind="act" className="mt-7 self-start">Start practising free</Pill>
                <div className="mt-auto translate-y-10 pt-14 drop-shadow-[0_24px_48px_rgba(29,29,31,.14)] m:translate-y-6"><PracticeWin /></div>
              </div>
              <div className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] [background:radial-gradient(70%_80%_at_80%_0%,rgba(91,68,227,.45),transparent_70%),#0B0B0F] p-10 m:min-h-0 m:p-6" data-reveal="">
                <p className="text-[15px] font-medium text-white/60">For colleges</p>
                <h3 className="mt-3 max-w-[420px] font-head text-[30px] font-medium leading-[38px] tracking-[-.02em] text-white">Run placement-grade assessments on your campus</h3>
                <Pill href="/colleges/#demo" kind="white" className="mt-7 self-start">Book a college demo</Pill>
                <div className="mt-auto translate-y-10 pt-14 m:translate-y-6"><DashWin /></div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- dark loop: learn, prove, score ---------- */}
        <section className="relative overflow-hidden bg-[#0B0B0F] py-sec text-white">
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[length:56px_56px] [mask-image:radial-gradient(60%_60%_at_50%_60%,#000,transparent)]" />
          <div className={`${tw.wrap} relative text-center`}>
            <h2 data-blur className="mx-auto max-w-[680px] font-head text-h2 font-medium tracking-[-.02em] text-white">One loop that gets you placement-ready</h2>
            <p className="mx-auto mt-5 max-w-[600px] text-[17px] leading-7 text-white/60">Learn in your browser, prove it in a proctored test, and watch your CTC Score move. Then do it again on the next weak spot.</p>
            <svg viewBox="0 0 480 440" className="mx-auto mt-14 !h-auto w-full max-w-[520px]" role="img" aria-label="Three overlapping circles: Learn on the web, Prove in the desktop app, Track your CTC Score. Where they meet: placement-ready.">
              <defs><radialGradient id="core"><stop offset="0" stopColor="#fff" stopOpacity=".9" /><stop offset="1" stopColor="#A294F9" stopOpacity="0" /></radialGradient></defs>
              {[[240, 160], [170, 280], [310, 280]].map(([x, y]) => <circle key={x + '' + y} cx={x} cy={y} r="120" fill="rgba(162,148,249,.06)" stroke="rgba(255,255,255,.28)" />)}
              <circle cx="240" cy="240" r="46" fill="url(#core)" />
              <g fill="#fff" fontSize="14" fontFamily="var(--f-body)" textAnchor="middle">
                <text x="240" y="110">Learn</text><text x="240" y="128" fill="rgba(255,255,255,.55)" fontSize="12">on the web</text>
                <text x="130" y="300">Prove</text><text x="130" y="318" fill="rgba(255,255,255,.55)" fontSize="12">in the desktop app</text>
                <text x="350" y="300">Score</text><text x="350" y="318" fill="rgba(255,255,255,.55)" fontSize="12">your CTC Score</text>
                <text x="240" y="245" fill="#0B0B0F" fontSize="12" fontWeight="600">Ready</text>
              </g>
            </svg>
          </div>
        </section>

        {/* ---------- three chapters with a sticky rail ---------- */}
        <div id="how-it-works" className={`${tw.wrap} grid scroll-mt-20 grid-cols-[160px_1fr] gap-16 pb-sec t:grid-cols-1`}>
          <aside className="pt-sec"><ChapterRail items={[['Practise', 'practise'], ['Prove', 'prove'], ['Score', 'ctc-score']]} /></aside>
          <div className="min-w-0">
            <section id="practise" className="scroll-mt-24 pt-sec">
              <ChapterHead title="Practise like it’s the real test" sub="Company patterns, aptitude and coding in your browser, any time. Every question has a worked explanation." cta={['Start practising free', APP_URL]} />
              <Feature h="Prep that follows each company’s real pattern" p="Pick the company, see its test pattern and work through the same kinds of sections: aptitude, reasoning, verbal, pseudocode and coding." link={['See company prep', '/prep/infosys/']}>
                <FeatureTabs tabs={[
                  { title: 'Company patterns', body: 'Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft, each with a free sample and full mocks.', visual: <PracticeWin /> },
                  { title: 'Aptitude, topic by topic', body: 'Quant, reasoning and verbal, drilled one topic at a time.', visual: <PracticeWin label="Web app, aptitude" tags={['Reasoning']} q="If APPLE is written as ELPPA, how is MANGO written?" opts={['OGNAM', 'ONGAM', 'OGMAN']} sel={0} /> },
                  { title: 'Coding in five languages', body: 'Placement-style problems in Python, Java, C, C++ and JavaScript.', visual: <PracticeWin label="Web app, Python course" tags={['Python', 'Loops']} q="What does range(2, 10, 3) produce?" opts={['2, 5, 8', '2, 4, 6, 8', '3, 6, 9']} sel={0} /> },
                ]} />
              </Feature>
              <Voice q={STUDENT_QUOTES[0]} />
            </section>

            <section id="prove" className="scroll-mt-24 pt-sec">
              <ChapterHead title="Sit the test before the test" sub="Timed, AI-proctored mock tests in the desktop app on Windows, macOS or Linux, so the real one feels familiar." cta={['Get the desktop app', DOWNLOAD_URL]} />
              <Feature h="Real test conditions, every time you practise" p="Camera checks, screen lock and a running timer. Take a full mock, see where you lost time, and go again." link={['See this month’s contest', '/contests/code-nova-3/']}>
                <FeatureTabs tabs={[
                  { title: 'Proctored mock tests', body: 'Full timed mocks with AI proctoring in a secure window.', visual: <ProctorWin /> },
                  { title: 'Monthly coding contests', body: `${CONTEST.lastName} is done. Code Nova 3 runs on ${CONTEST.date}, free to enter.`, visual: (
                    <div className="rounded-[16px] border border-line bg-white p-7">
                      <p className="text-[13px] font-medium text-act">Registration open</p>
                      <p className="mt-1 font-head text-[28px] font-medium tracking-[-.02em] text-ink">Code Nova 3</p>
                      <p className="mt-1 text-[14px] text-muted">{CONTEST.date}, {CONTEST.time} IST, {CONTEST.duration}</p>
                      <div className="mt-5"><Countdown iso={CONTEST.iso} label="Countdown to Code Nova 3" /></div>
                    </div>
                  ) },
                  { title: 'Results you can act on', body: 'See your accuracy and timing by section after every mock.', visual: <DashWin title="Your last mock, by section" label="Mock test report" unit="accuracy" rows={[['Quant', 72], ['Reasoning', 81], ['Verbal', 64], ['Pseudocode', 58], ['Coding', 70]]} /> },
                ]} />
              </Feature>
              <Voice q={STUDENT_QUOTES[1]} />
            </section>

            <section id="ctc-score" className="scroll-mt-24 pt-sec">
              <ChapterHead title="Know when you’re ready" sub="Your CTC Score runs from 0 to 10. Instead of telling a recruiter you’re ready, you can show them." cta={['Get my CTC Score', APP_URL]} />
              <div className="mt-28 grid grid-cols-[6fr_5fr] items-center gap-14 m:mt-20 m:grid-cols-1 m:gap-10">
                <div>
                  <h3 data-blur className="font-head text-[34px] font-medium leading-[42px] tracking-[-.02em] text-ink m:text-[26px] m:leading-[32px]">One number built from three things you control</h3>
                  <ul className={`${CHECKS} mt-8`}>
                    {[['Skills', 'courses and company prep you’ve completed'], ['Practice', 'mock tests and drills, and how consistently you do them'], ['Proctored performance', 'verified results from the desktop app']].map(([b, t]) => (
                      <li className={CHECK_LI} key={b}><Icon name="checkc" /><span><b className="font-medium text-ink">{b}:</b> {t}</span></li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[15px] text-muted">The CTC Score is a readiness score, not your salary CTC. Only you can see it unless you share your profile.</p>
                </div>
                <div className={`p-10 m:p-5 ${GLOW}`} data-reveal=""><div className="drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]"><ScoreCard big /></div></div>
              </div>
              <Voice q={STUDENT_QUOTES[2]} />
            </section>
          </div>
        </div>

        {/* ---------- proof: glass bento over painted art ---------- */}
        <section className="px-4 m:px-2">
          <Art src="/images/art/lake.jpg" shade="bg-[rgba(6,12,36,.62)]" className="py-sec">
            <div className={tw.wrap}>
              <h2 data-blur className="mx-auto max-w-[760px] text-center font-head text-h2 font-medium tracking-[-.02em] text-white">Students who prepared with Crack The Campus</h2>
              <div className="mt-16 grid grid-cols-3 gap-5 t:grid-cols-2 m:grid-cols-1" data-reveal="">
                {[[STATS.students, 'students practising'], [STATS.colleges, 'partner colleges']].map(([b, s]) => (
                  <div key={s} className={GLASS}><b className="block font-head text-[56px] font-medium leading-none tracking-[-.03em]">{b}</b><span className="mt-3 block text-white/70">{s}</span></div>
                ))}
                <figure className={`${GLASS} row-span-2 flex flex-col t:row-span-1`}>
                  <blockquote className="m-0 font-head text-[22px] font-medium leading-[32px] tracking-[-.01em]">“{STUDENT_QUOTES[3].text}”</blockquote>
                  <figcaption className="mt-auto pt-8 text-[15px] text-white/70"><b className="block font-medium text-white">{STUDENT_QUOTES[3].name}</b>{STUDENT_QUOTES[3].meta}</figcaption>
                </figure>
                {[[STATS.contestants, 'contest participants'], [STATS.drives, 'proctored assessment drives']].map(([b, s]) => (
                  <div key={s} className={GLASS}><b className="block font-head text-[56px] font-medium leading-none tracking-[-.03em]">{b}</b><span className="mt-3 block text-white/70">{s}</span></div>
                ))}
                <figure className={`${GLASS} col-span-3 grid grid-cols-[1fr_auto] items-end gap-8 t:col-span-2 m:col-span-1 m:grid-cols-1`}>
                  <blockquote className="m-0 font-head text-[22px] font-medium leading-[32px] tracking-[-.01em]">“{STUDENT_QUOTES[4].text}”</blockquote>
                  <figcaption className="text-[15px] text-white/70"><b className="block font-medium text-white">{STUDENT_QUOTES[4].name}</b>{STUDENT_QUOTES[4].meta}</figcaption>
                </figure>
              </div>
            </div>
          </Art>
        </section>

        {/* ---------- pricing teaser ---------- */}
        <section className="py-sec">
          <div className={tw.wrap}>
            <h2 data-blur className="mx-auto max-w-[640px] text-center font-head text-h2 font-medium tracking-[-.02em] text-ink">Start free. Upgrade when you’re ready.</h2>
            <div className="mx-auto mt-14 grid max-w-[920px] grid-cols-2 gap-6 m:grid-cols-1" data-reveal="">
              <div className="flex flex-col rounded-[24px] bg-alt p-10 m:p-7">
                <p className="text-[15px] font-medium text-muted">Free</p>
                <p className="mt-2 font-head text-[40px] font-medium tracking-[-.02em] text-ink">₹0, forever</p>
                <p className="mt-3 text-body">1 AI resume, 5 CTC assessments, practice assessments, limited AI help and limited contests.</p>
                <Pill href={APP_URL} kind="line" className="mt-8 self-start">Start free</Pill>
              </div>
              <div className="flex flex-col rounded-[24px] bg-ink p-10 text-white m:p-7">
                <p className="text-[15px] font-medium text-lav">Pro</p>
                <p className="mt-2 font-head text-[40px] font-medium tracking-[-.02em]">From ₹3,499 <span className="text-[18px] text-white/60">for 6 months</span></p>
                <p className="mt-3 text-white/70">23 CTC assessments a month, advanced courses, full contest access and detailed analytics.</p>
                <Pill href="/pricing/" kind="white" className="mt-8 self-start">Compare all plans</Pill>
              </div>
            </div>
          </div>
        </section>

        <FaqSec h="Questions students ask" items={FAQ_HOME} link={['Contact support', '/contact/']} />

        {/* ---------- closing: painted dusk, one clear action ---------- */}
        <section className="px-4 py-4 m:px-2" data-hide-sticky>
          <Art src="/images/art/rooftop.jpg" pos="50% 40%" className="flex min-h-[560px] items-center justify-center py-24 m:min-h-[480px]" shade="bg-[linear-gradient(180deg,rgba(8,12,40,.45),rgba(8,12,40,.25)_50%,rgba(8,12,40,.55))]">
            <div className="max-w-[760px] px-6 text-center text-white">
              <h2 data-blur className="font-head text-h1 font-medium tracking-[-.025em] text-white">Your next placement test is closer than you think</h2>
              <p className="mx-auto mt-5 max-w-[560px] text-[18px] leading-7 text-white/85">Start with a free account. Practise company tests, take a proctored mock and see your CTC Score.</p>
              <div className="mt-9 flex justify-center gap-3 m:flex-col m:items-center">
                <Pill href={APP_URL} kind="white">Start practising free</Pill>
                <Pill href="/contact/" kind="ghost">Talk to us</Pill>
              </div>
            </div>
          </Art>
        </section>
      </Main>
      <Footer />
      <StickyCta title="Free forever plan" sub="No credit card" cta="Start practising free" href={APP_URL} />
    </>
  );
}
