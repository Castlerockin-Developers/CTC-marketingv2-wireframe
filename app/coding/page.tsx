import Link from 'next/link';
import { Cards, Hero, Page, Prose, Split, Steps } from '@/components/blocks';
import { CodeWin, DashWin } from '@/components/ui';
import { APP_URL } from '@/content/site';

// Content doc §4.12 Coding practice.
export const metadata = {
  title: { absolute: 'Coding Practice for Placements | Crack The Campus' },
  description: 'Placement-pattern coding problems in Python, Java, C and C++, plus timed coding mocks in the proctored app.',
  alternates: { canonical: '/coding/' },
};

export default function Coding() {
  return (
    <Page
      faq={{ h: 'Coding FAQs', items: [
        ['Which language is best for placement coding?', 'The one you know best. Python is quick to write; C++ and Java are common in product-company rounds. Check which languages your target test allows.'],
        ['How many coding problems should I solve before placements?', 'Focus on coverage over count: solve problems from every common topic at your target difficulty, then practise under a timer.'],
        ['Do service companies ask coding questions?', 'Many include one or two coding problems or pseudocode questions in their online test. Each company page lists what its test covers.'],
        ['What are hidden test cases?', 'Extra inputs your code is checked against without you seeing them. They catch edge cases, just like real assessments.'],
        ['Can I practise coding on my phone?', 'Reading problems, yes; writing code is far easier on a laptop, and timed mocks need the desktop app.'],
      ] }}
      band={{ h: 'Write working code under a timer', p: 'Start with a free foundation problem, then take a timed coding mock in the desktop app.', cta: ['Solve a free coding problem', APP_URL], link: ['See this month’s contest', '/contests/'] }}
      sticky={['Coding practice', 'Foundation problems free', 'Start', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Coding']]} h1="Coding practice for placements"
        sub="Placement coding rounds reward correct, working code under a timer. Practise the problem types companies use, in the language you’ll actually write in."
        cta={['Solve a free coding problem', APP_URL]} link={['Choose your track', '#tracks']}
        visual={<CodeWin />} />

      <Prose h="Who coding practice is for">
        <p>Anyone applying for IT roles, from service companies that include one or two coding questions to product companies with coding-only assessments.</p>
        <p>If you’re starting from zero, begin with a <Link href="/courses/">language course</Link> first.</p>
      </Prose>

      <Cards id="tracks" alt h="Choose your track" cols={4} p="Practise in Python, Java, C, C++ or JavaScript." items={[
        { t: 'Foundation', icon: 'code', b: 'Loops, arrays, strings and basic maths problems. For mass-recruiter coding rounds.', href: APP_URL, link: 'Start foundation' },
        { t: 'Pseudocode', icon: 'file', b: 'Output tracing for Capgemini and similar tests.', href: '/prep/capgemini/pseudocode/', link: 'Pseudocode practice' },
        { t: 'Intermediate', icon: 'layers', b: 'Sorting, searching, hashing, recursion. For higher fresher tracks.', href: APP_URL, link: 'Start intermediate' },
        { t: 'Advanced', icon: 'chart', b: 'Data structures and algorithm problems for product-company assessments.', href: APP_URL, link: 'Start advanced' },
      ]} />

      <Split h="What you get" bullets={[
        'Problems tagged by topic, difficulty and company pattern',
        'Hidden test cases like real assessments',
        'Timed coding mocks in the proctored desktop app',
        <>Monthly <Link href="/contests/">coding contests</Link></>,
        <>Progress that counts towards your <Link href="/ctc-score/">CTC Score</Link></>,
      ]} visual={<DashWin title="Your coding, by topic" label="Coding tracker" unit="solved" rows={[['Arrays', 76], ['Strings', 68], ['Recursion', 41], ['Hashing', 55], ['Sorting', 63]]} />} />

      <Steps alt h="How to practise coding for placements" items={[
        ['Pick one language', 'And stick to it.'],
        ['Two a day', 'Two foundation problems a day for two weeks.'],
        ['Level up', 'Move to your target companies’ difficulty.'],
        ['Test yourself', 'A timed coding mock weekly, plus the monthly contest.'],
      ]} />

      <Prose h="Do I need DSA for every company?">
        <p>No. Most mass recruiters test foundation-level coding. Deep data structures and algorithms matter mainly for product-company roles.</p>
      </Prose>
    </Page>
  );
}
