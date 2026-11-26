import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExitIntent, PostCard, Toc } from '@/components/Guides';
import { StickyCta } from '@/components/interactive';
import { Main } from '@/components/sections';
import { Band, Btn, Crumb, Frame, Head, Icon, JsonLd, Sec } from '@/components/ui';
import { tw } from '@/components/tw';
import { GUIDES, POST_SLUG, SITE_URL } from '@/content/site';
import { AUTHOR } from '@/content/dummy';

const TITLE = 'How to prepare for campus placement: a step-by-step plan';
const DESC = 'A step-by-step plan for campus placements: aptitude, coding, company tests, resume and interviews, by year of study.';
const URL = `${SITE_URL}/guides/${POST_SLUG}/`;

export const metadata = { title: TITLE, description: DESC, alternates: { canonical: `/guides/${POST_SLUG}/` }, openGraph: { type: 'article', title: TITLE, description: DESC } };

const TOC: [string, string][] = [
  ['how', 'How campus placement works'], ['when', 'When should you start preparing?'], ['s1', 'Step 1: Build your aptitude base'],
  ['s2', 'Step 2: Get comfortable with coding'], ['s3', 'Step 3: Prepare for the companies visiting your campus'], ['s4', 'Step 4: Practise in real test conditions'],
  ['s5', 'Step 5: Build a resume that gets you shortlisted'], ['s6', 'Step 6: Prepare for technical and HR interviews'], ['d30', 'How to prepare in 30 days'],
  ['mist', 'Common mistakes to avoid'], ['start', 'Start today, not next semester'], ['faq', 'Campus placement questions'],
];

const FAQ: [string, string][] = [
          ['When should I start preparing for campus placements?', 'Ideally in your pre-final year (3rd year for B.E./B.Tech). Start aptitude and one programming language 6 to 9 months before the first drive, then add company-pattern mocks in the last 8 to 10 weeks.'],
          ['How many hours a day should I practise?', 'One focused hour on weekdays and two on weekends is enough for most students. Consistency beats long weekend sessions: a 30-minute timed aptitude set every day moves your score more than one 5-hour sitting.'],
          ['Which programming language is best for placements?', 'Use the language you already know best. Python, Java and C++ are all accepted by mass recruiters. What matters is solving placement-style problems quickly and explaining your code.'],
          ['Is aptitude more important than coding for service companies?', 'For mass recruiters like Infosys, Wipro and Capgemini, the aptitude and reasoning rounds filter out most candidates, so treat them as equally important. Product companies weigh coding more heavily.'],
          ['Do I need a perfect CGPA?', 'No. Most companies set a cut-off (often 6.0 to 7.0 with no active backlogs). Once you clear it, your test performance, projects and interview matter far more than the exact number.'],
          ['How do I practise for proctored online tests?', 'Take at least two full-length mocks with your camera on, a fixed timer and no switching tabs. The Crack The Campus desktop app runs mocks under the same conditions, so the real test feels familiar.'],
];

const AUTHOR_PHOTO = 'w-[200px] h-[200px] rounded-2xl object-cover bg-tint flex items-center justify-center text-act [&_svg]:w-12 [&_svg]:h-12 m:w-[120px] m:h-[120px]';

const CtaBox = () => (
  <aside className="rounded-2xl p-7 bg-tint border border-tint2 text-l900 !my-10 m:py-[22px] m:px-5 [&_h3]:text-l950 [&_h3]:font-head [&_h3]:text-[22px] [&_h3]:leading-[30px] [&_p]:mt-1.5 [&_p]:mb-[18px] [&_p]:text-[16px] [&_p]:leading-6 m:[&_[data-btn]]:w-full" data-hide-sticky="">
    <h3>See where you stand in 15 minutes.</h3>
    <p>Take a free 10-question company sample. No sign-up needed to start.</p>
    <Btn href="/prep/infosys/#sample">Start a free sample test</Btn>
  </aside>
);

export default function Post() {
  return (
    <>
      <Header progress />
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Article', headline: TITLE, description: DESC, mainEntityOfPage: URL, dateModified: '2026-11-18',
          author: { '@type': 'Person', name: AUTHOR.name, jobTitle: AUTHOR.role }, publisher: { '@type': 'Organization', name: 'Crack The Campus', logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` } } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' }, { '@type': 'ListItem', position: 2, name: 'Guides', item: SITE_URL + '/guides/' }, { '@type': 'ListItem', position: 3, name: TITLE, item: URL }] },
      ]} />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`} style={{ paddingBottom: 48 }}>
          <div className={`${tw.wrap} ${tw.heroWrap}`}><div className={`${tw.articleHd} ${tw.enter}`}>
            <div>
              <Crumb items={[['Home', '/'], ['Guides', '/guides/'], ['Company guides']]} />
              <div className={tw.row} style={{ gap: 8 }}><span className={`${tw.badge} ${tw.bV}`}>Company guides</span><span className={`${tw.badge} ${tw.bN}`}>Assessments</span></div>
              <h1 className={`${tw.h1} ${tw.heroH1}`} style={{ marginTop: 16 }}>{TITLE}</h1>
              <p className={`${tw.lead} ${tw.heroLead}`} style={{ marginTop: 16 }}>{DESC}</p>
              <div className="flex gap-3 items-center flex-wrap text-[14.5px] text-tx3 mt-5"><span><b style={{ color: 'var(--tx)' }}>{AUTHOR.name}</b>, {AUTHOR.role}</span><span>Updated {AUTHOR.updated}</span><span>8 min read</span></div>
            </div>
            <Frame className="mt-10" src="/images/guides/how-to-prepare-for-campus-placement.jpg" eager alt="Study desk with a laptop showing a timed aptitude test and a handwritten weekly placement checklist" ratio="16/9" />
          </div></div>
        </section>

        <section className={`${tw.sec} ${tw.light}`} style={{ paddingTop: 64 }}><div className={tw.wrap}><div className="grid grid-cols-[240px_minmax(0,680px)] gap-16 justify-center m:grid-cols-[1fr] m:gap-0">
          <Toc items={TOC} />
          <article className={tw.prose} id="article">
            <details className="hidden m:block m:border m:border-l200 m:rounded-xl m:bg-white m:mb-8"><summary className="m:min-h-[52px] m:flex m:items-center m:justify-between m:px-4 m:font-semibold m:text-tx m:cursor-pointer m:list-none m:[&::-webkit-details-marker]:hidden">On this page <Icon name="down" /></summary><ol className="m:list-none m:!pt-0 m:!px-2 m:!pb-2">{TOC.map(([id, t]) => <li key={id}><a className="m:flex m:items-center m:min-h-11 m:px-2 m:!text-tx2 m:!no-underline m:text-[15px]" href={`#${id}`}>{t}</a></li>)}</ol></details>
            <p>Campus placements can feel like one giant, scary event. In reality, they’re a sequence of fairly predictable steps: an online test, one or two interviews and an offer. Once you know the sequence, you can prepare for each step on purpose instead of panicking about all of them at once.</p>
            <p>This guide walks you through the whole process: what happens in a typical drive, what to practise for each round, and a simple plan whether you have a year or a month.</p>

            <h2 id="how">How campus placement works</h2>
            <p>Most engineering colleges follow a similar pattern each season:</p>
            <ol>
              <li><strong>Registration.</strong> Your placement cell shares a company’s eligibility criteria, usually marks in 10th, 12th and your degree, your branch and the number of backlogs allowed. Eligible students register.</li>
              <li><strong>Pre-placement talk.</strong> The company explains the role, location and package.</li>
              <li><strong>Online assessment.</strong> For most mass recruiters this is the biggest filter. It usually tests quantitative aptitude, logical reasoning and verbal ability, and often adds coding, pseudocode or, for some companies, game-based tasks.</li>
              <li><strong>Technical interview.</strong> Questions on your projects, programming basics and core subjects.</li>
              <li><strong>HR interview.</strong> Questions about you, your goals and how you work with people.</li>
              <li><strong>Offer.</strong> Many colleges follow a one-student, one-offer rule for mass recruiters, so check your college’s policy.</li>
            </ol>
            <p>The exact rounds vary by company and year, which is why company-specific preparation matters.</p>
            <CtaBox />

            <h2 id="when">When should you start preparing for placements?</h2>
            <p>Earlier than you think, but not as early as people scare you into. A useful rule of thumb:</p>
            <ul>
              <li><strong>2nd year:</strong> Learn one programming language properly and build a habit of solving a few problems a week.</li>
              <li><strong>3rd year:</strong> Start daily aptitude practice (30–40 minutes), pick up coding in your chosen language and build one or two projects you can talk about.</li>
              <li><strong>Final year, first semester:</strong> Switch to company-specific practice and timed mock tests. This is when most mass recruiters visit.</li>
            </ul>
            <p>If you’re already in final year and drives have started, skip to the <a href="#d30">30-day plan</a> at the end of this guide.</p>

            <h2 id="s1">Step 1: Build your aptitude base</h2>
            <p>The aptitude round decides who gets to an interview, so it deserves the most consistent practice. Focus on three areas:</p>
            <ul>
              <li><strong>Quantitative aptitude:</strong> percentages, ratios, profit and loss, time and work, time-speed-distance, number systems, averages and data interpretation.</li>
              <li><strong>Logical reasoning:</strong> series, coding-decoding, blood relations, directions, seating arrangements and puzzles.</li>
              <li><strong>Verbal ability:</strong> grammar, sentence correction, vocabulary and reading comprehension.</li>
            </ul>
            <p>The maths is school level. What makes it hard is the clock. So practise in short, timed sets: ten questions in fifteen minutes beats an untimed hour of textbook problems. Learn shortcuts for the question types that repeat, and get used to skipping a question that’s eating your time.</p>

            <h2 id="s2">Step 2: Get comfortable with coding</h2>
            <p>Even service companies increasingly include coding or pseudocode questions, and product companies may test only coding. You don’t need to be a competitive programmer for most fresher roles, but you do need to write correct, working code under time pressure.</p>
            <ul>
              <li><strong>Pick one language</strong> and stay with it. Python is quick to write; Java and C++ are common too. Check which languages your target companies allow.</li>
              <li><strong>Master the foundations:</strong> loops, conditions, arrays, strings, functions and basic recursion. Most mass-recruiter coding questions sit here.</li>
              <li><strong>Practise output tracing</strong> if your target companies use pseudocode questions. Capgemini is the best-known example.</li>
              <li><strong>Time yourself</strong> from week two onwards.</li>
            </ul>
            <p>New to programming? Start with the <Link href="/courses/python/">Python for placements</Link> course.</p>

            <h2 id="s3">Step 3: Prepare for the companies visiting your campus</h2>
            <p>This is where many students go wrong. They practise general aptitude and then meet a test with a different section mix, a strict sectional timer or an unfamiliar format like game-based aptitude.</p>
            <p>Ask your placement cell which companies visited last year and in what order. Then, for each company:</p>
            <ol>
              <li>Read its current test pattern: sections, timing and whether there’s negative marking.</li>
              <li>Take a short sample test to see where you stand.</li>
              <li>Practise its weakest sections for you.</li>
              <li>Take at least two full mocks in the company’s pattern before the drive.</li>
            </ol>
            <p>Our <Link href="/prep/infosys/">company prep pages</Link> cover Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft, each with a free 10-question sample.</p>

            <h2 id="s4">Step 4: Practise in real test conditions</h2>
            <p>Knowing the answers is not the same as performing on test day. Most online placement tests are proctored: your camera is on, other windows are locked and a timer is always running. Students who have never experienced that often lose marks to nerves rather than to knowledge.</p>
            <p>The fix is simple: take some of your practice tests under the same conditions. Proctored mock tests in the Crack The Campus desktop app recreate a monitored test environment, and your results feed into your <Link href="/#ctc-score">CTC Score</Link>, so you can see whether you’re getting more ready week by week.</p>

            <h2 id="s5">Step 5: Build a resume that gets you shortlisted</h2>
            <p>Your resume matters most for interviews, but some companies screen on it too. As a fresher:</p>
            <ul>
              <li>Keep it to one page.</li>
              <li>Lead with education and skills, then projects and internships.</li>
              <li>Describe each project in one or two lines that say what you built, with which tools, and what it achieved.</li>
              <li>Use a simple layout with standard headings so applicant tracking systems can read it.</li>
            </ul>

            <h2 id="s6">Step 6: Prepare for technical and HR interviews</h2>
            <p><strong>Technical interviews</strong> usually start with your resume. Be ready to explain every project in detail: why you built it, what you’d change and what went wrong. Revise programming basics in your language, object-oriented concepts and the core subjects for your branch.</p>
            <p><strong>HR interviews</strong> check communication and attitude. Prepare short, honest answers to common questions like “tell me about yourself”, “why this company” and “a challenge you faced”, and practise saying them aloud. Know your examples rather than memorising scripts.</p>

            <h2 id="d30">How to prepare for placements in 30 days</h2>
            <p>If drives are close, here is a focused plan:</p>
            <div className={tw.tablebox}><table className={tw.dtable}><caption className={tw.sr}>30-day placement plan</caption><tbody>
              {[['Days 1–3', 'Take one full mock in your first target company’s pattern. List your three weakest topics.'], ['Days 4–14', 'Daily: 40 minutes on one weak aptitude topic, 30 minutes of coding or pseudocode, 10 minutes of verbal.'], ['Days 15–21', 'Company-specific section practice for your top two recruiters. One full timed mock every three days.'], ['Days 22–27', 'Two proctored mocks a week. Fix your resume. Practise interview answers aloud.'], ['Days 28–30', 'Light revision, rest and a final system check if your test is online.']].map(([d, t]) => (
                <tr key={d}><th scope="row" className={tw.mono} style={{ color: 'var(--act-h)' }}>{d}</th><td>{t}</td></tr>
              ))}
            </tbody></table></div>

            <h2 id="mist">Common mistakes to avoid</h2>
            <ul>
              <li>Practising only untimed questions.</li>
              <li>Collecting dozens of PDFs and finishing none.</li>
              <li>Ignoring verbal ability because it feels easy.</li>
              <li>Taking your first proctored test on the day of the real drive.</li>
              <li>Writing project descriptions you can’t explain in an interview.</li>
            </ul>

            <h2 id="start">Start today, not next semester</h2>
            <p>You don’t need a perfect plan to begin, only a first step. Take a free sample test for the company you’re most likely to face, see where you stand, and build from there.</p>
            <CtaBox />

            <section id="faq" aria-labelledby="faq-h">
              <h2 id="faq-h">Campus placement questions</h2>
              <div className="mt-6 border-t border-bd">
                {FAQ.map(([q, a]) => (
                  <details key={q} className="group border-b border-bd">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-1 py-5 text-lg font-semibold text-tx hover:text-link [&::-webkit-details-marker]:hidden">
                      {q}
                      <span aria-hidden className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-bd2 text-xl leading-none transition-transform group-open:rotate-45 group-open:border-p700 group-open:bg-p700 group-open:text-white">+</span>
                    </summary>
                    <p className="!mt-0 pb-6 pl-1 pr-14 text-base leading-[26px] text-tx2">{a}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6"><Link href="/contact/">Ask us anything</Link></p>
            </section>

            <section className="block border border-l200 rounded-[20px] p-8 bg-white m:py-6 m:px-5" aria-labelledby="about-author">
              <h2 className={`${tw.h3} pb-5 mb-7 border-b border-line`} id="about-author">About the author</h2>
              <div className="grid grid-cols-[200px_1fr] gap-8 items-center m:grid-cols-[1fr] m:gap-5">
                {AUTHOR.photo
                  // eslint-disable-next-line @next/next/no-img-element -- static export, photo pre-sized
                  ? <img className={AUTHOR_PHOTO} src={AUTHOR.photo} alt={`${AUTHOR.name}, ${AUTHOR.role} at Crack The Campus`} width={200} height={200} loading="lazy" />
                  : <span className={AUTHOR_PHOTO} role="img" aria-label={`Photo of ${AUTHOR.name} coming soon`}><Icon name="user" /></span>}
                <div>
                  <p className="text-[15px] text-muted">{AUTHOR.role}</p>
                  <p className="font-head font-bold text-[26px] leading-[1.25] tracking-[-.015em] text-ink">{AUTHOR.name}</p>
                  <p className="text-[17px] leading-[1.6] text-body max-w-[60ch]">{AUTHOR.bio}</p>
                  <p className={tw.cap} style={{ marginTop: 12 }}>Reviewed by {AUTHOR.reviewer}. Updated {AUTHOR.updated}.</p>
                </div>
              </div>
            </section>
          </article>
        </div></div></section>

        <Sec>
          <Head h="Related guides" />
          <div className={`${tw.cols} ${tw.c3} ${tw.hscroll}`} data-reveal="kids">{GUIDES.slice(0, 3).map((g) => <PostCard key={g.slug} g={g} />)}</div>
        </Sec>
        <Band h="See where you stand in 15 minutes." p="Take a free 10-question company sample. No sign-up needed to start." cta={<Btn href="/prep/infosys/#sample">Start a free sample test</Btn>} cta2={<Link href="/prep/infosys/">Explore company prep</Link>} />
      </Main>
      <Footer />
      <StickyCta title="Free company sample" sub="10 questions, no sign-up" cta="Start test" href="/prep/infosys/#sample" />
      <ExitIntent />
    </>
  );
}
