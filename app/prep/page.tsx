import Link from 'next/link';
import { Page, PageBanner, Prose, Steps } from '@/components/blocks';
import { Crumb, Head, Icon, Sec } from '@/components/ui';
import { APP_URL, NOT_AFFILIATED } from '@/content/site';

// Content doc §3.3 Company prep hub. The doc asks for company names as text here, not logos.
// Capgemini leads (the only card whose doc copy names its rounds, so the only one with round tags).
const COS: [name: string, body: string, href: string, link: string, tags?: string[]][] = [
  ['Capgemini', 'Pseudocode, aptitude, English and the game-based aptitude round. Play the games before test day.', '/prep/capgemini/', 'Start Capgemini prep', ['Pseudocode', 'Aptitude', 'English', 'Game-based aptitude']],
  ['Infosys', 'Pattern by round, free sample and full mocks.', '/prep/infosys/', 'Start Infosys prep'],
  ['Wipro', 'Elite NTH pattern, eligibility and mocks.', '/prep/wipro/', 'Start Wipro prep'],
  ['HCL', 'Test pattern and practice for HCL fresher hiring.', '/prep/hcl/', 'Start HCL prep'],
  ['LTIMindtree', 'Aptitude test practice and mocks.', '/prep/ltimindtree/', 'Start LTIMindtree prep'],
  ['Oracle', 'Aptitude and technical practice for freshers.', '/prep/oracle/', 'Start Oracle prep'],
  ['Microsoft', 'Online assessment practice for freshers.', '/prep/microsoft/', 'Start Microsoft prep'],
  ['More companies', 'We’re adding new companies every season. Tell us which one you need.', '/contact/', 'Request a company'],
];
export const metadata = {
  title: { absolute: 'Company-Specific Mock Tests for Placements | CTC' },
  description: 'Prepare for Infosys, Wipro, Capgemini, HCL, LTIMindtree and more. Hiring patterns, free samples and full proctored mocks.',
  alternates: { canonical: '/prep/' },
};

export default function PrepHub() {
  return (
    <Page disclaim={NOT_AFFILIATED}
      faq={{ h: 'Company prep questions', items: [
        ['Are these the real questions from company tests?', 'No. We create practice questions that follow each company’s published and reported test patterns. Practising the pattern and timing is what helps on test day.'],
        ['How often are company patterns updated?', 'We review each company page before every hiring season. The date at the top of each page shows when it was last checked.'],
        ['Can I practise for more than one company?', 'Yes. Most students prepare for several recruiters. Aptitude and coding practice carries over between companies.'],
        ['Which company should I start with?', 'Start with the first recruiter visiting your campus, or with Capgemini or Infosys, whose patterns cover most of what other mass recruiters test.'],
        ['Is company prep free?', 'Each company page has a free 10-question sample. Full mocks and section practice are included in the free plan up to its limits and fully in Pro plans.'],
      ] }}
      band={{ h: 'Your next placement test is closer than you think', p: 'Pick your company, try 10 free questions and see where you stand.', cta: ['Take a free sample test', '/mock-tests/'], link: ['Start practising free', APP_URL] }}>
      <PageBanner art="/images/art/lake.webp" pos="50% 60%" eyebrow="Company prep" h1="Company-wise placement preparation"
        sub="Each company tests a little differently. Pick yours to see the pattern, try 10 free questions and practise full mocks in test conditions."
        cta={['Take a free sample test', '/mock-tests/']} link={['Choose your company', '#companies']} crumb={<Crumb items={[['Home', '/'], ['Company prep']]} />} />

      <Sec id="companies">
        <Head h="Choose your company" />
        <ul className="grid list-none grid-cols-4 gap-4 t:grid-cols-2 m:grid-cols-1" data-reveal="kids">
          {COS.map(([name, body, href, link, tags], k) => {
            const lead = k === 0, more = href === '/contact/';
            return (
              <li key={name} className={lead ? 'col-span-2 row-span-2 m:col-span-1' : more ? 'col-span-2 m:col-span-1' : ''}>
                <Link href={href} className={`group relative flex h-full flex-col rounded-[24px] p-7 !no-underline transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 ${lead ? 'bg-ink p-10 text-white hover:shadow-[0_24px_60px_rgba(29,29,31,.25)] m:p-7' : more ? 'border-[1.5px] border-dashed border-line-2 bg-transparent hover:border-ink' : 'border border-line bg-white hover:border-line-2 hover:shadow-2'}`}>
                  <span className={`font-head font-extrabold tracking-[-.025em] ${lead ? 'text-[56px] leading-[60px] m:text-[40px] m:leading-[44px]' : 'text-[28px] leading-9'} ${lead ? 'text-white' : 'text-ink'}`}>{name}</span>
                  {tags && <span className="mt-6 flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[14px] font-medium text-white">{t}</span>)}</span>}
                  <span className={`mt-4 block ${lead ? 'max-w-[440px] text-[18px] leading-[30px] text-white/75' : 'text-[15px] leading-6 text-body'}`}>{body}</span>
                  <span className={`mt-auto flex items-center gap-2 pt-8 font-medium ${lead ? 'text-lav' : 'text-act'}`}>{link}<span className="transition-transform duration-200 group-hover:translate-x-1"><Icon name="arrow" /></span></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-[13.5px] text-muted">{NOT_AFFILIATED}</p>
      </Sec>

      <Steps alt h="How company prep works" items={[
        ['Read the pattern', 'See the rounds, sections and timing for your company.'],
        ['Try 10 free questions', 'No sign-up needed to start.'],
        ['Practise section by section', 'Drill the topics that company tests most.'],
        ['Take full proctored mocks', 'In the desktop app, under real time limits.'],
      ]} />

      <Prose h="Which companies come for campus placement?">
        <p>Most engineering colleges see a mix of mass recruiters, which hire freshers in large numbers through online tests, and product or specialist companies, which hire fewer students with harder coding rounds.</p>
        <p>Mass recruiters usually visit first and set the pace of the placement season, so preparing for their test patterns early pays off. The list for your college depends on its region, branches and past results; ask your placement cell for last year’s list and start with those companies.</p>
      </Prose>
    </Page>
  );
}
