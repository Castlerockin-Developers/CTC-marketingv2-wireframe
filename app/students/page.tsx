import { Cards, Page, PageBanner, Steps } from '@/components/blocks';
import { Head, Quotes, Sec } from '@/components/ui';
import { APP_URL } from '@/content/site';
import { STUDENT_QUOTES } from '@/content/dummy';

// Content doc §3.2 For Students
export const metadata = {
  title: { absolute: 'Placement Preparation for Engineering Students | CTC' },
  description: 'Practise for campus placements by company, topic and round. Free sample tests, proctored mocks and your CTC Score.',
  alternates: { canonical: '/students/' },
};

export default function Students() {
  return (
    <Page
      faq={{ h: 'Placement prep questions', items: [
        ['When should I start preparing for placements?', 'Ideally in 3rd year, with 30–40 minutes a day on aptitude and coding. If your drives are close, start with your target company’s pattern and timed mocks.'],
        ['What do companies test in campus placements?', 'Most mass recruiters start with an online test covering quantitative aptitude, logical reasoning, verbal ability and often coding or pseudocode, followed by technical and HR interviews. Exact rounds vary by company and year.'],
        ['Is Crack The Campus only for computer science students?', 'No. Aptitude, reasoning, verbal and most company tests are the same across branches. Coding practice helps any student applying for IT roles.'],
        ['How long does it take to get placement-ready?', 'It depends on your starting point. Regular practice for 6–8 weeks, with one proctored mock a week, is a good plan for most students.'],
        ['Can I practise on my phone?', 'Yes, practice and courses work in a mobile browser. Proctored mocks and contests need the desktop app on a laptop or PC.'],
      ] }}
      band={{ h: 'Your next placement test is closer than you think', p: 'Start with a free account. Practise company tests, take a proctored mock and see your CTC Score.', cta: ['Start practising free', APP_URL], link: ['Talk to us', '/contact/'], micro: 'Free forever plan · No credit card' }}>
      <PageBanner art="/images/art/rooftop.webp" pos="30% 60%" eyebrow="For students" h1="Placement preparation for engineering students"
        sub="Whether your first drive is next month or next year, prepare in the order recruiters test you: aptitude, coding, company patterns, then interviews."
        cta={['Start practising free', APP_URL]} link={['Find your company', '#companies']} />

      <Cards h="Start from where you are" cols={4} items={[
        { t: '2nd or 3rd year', b: 'Build your base: aptitude topics, one programming language and a first resume.', href: '/aptitude/', link: 'Start with aptitude' },
        { t: 'Final year, drives coming', b: 'Switch to company prep and timed mocks for the recruiters visiting your campus.', href: '/prep/', link: 'Browse companies' },
        { t: 'Drive in under 30 days', b: 'Focus on your target company’s pattern and take two full proctored mocks a week.', href: '/mock-tests/', link: 'Take a mock test' },
        { t: 'Off-campus or fresher', b: 'Keep practising, enter monthly contests and keep your CTC Score current.', href: '/contests/', link: 'See contests' },
      ]} />

      <Cards id="companies" alt h="Everything you need for placements" cols={4} items={[
        { t: 'Company prep', icon: 'building', b: 'Hiring patterns and mocks for Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft.', href: '/prep/', link: 'Company prep' },
        { t: 'Aptitude practice', icon: 'sigma', b: 'Quant, reasoning and verbal, with shortcuts and timed quizzes.', href: '/aptitude/', link: 'Aptitude' },
        { t: 'Coding practice', icon: 'code', b: 'Problems in the style of placement coding rounds.', href: '/coding/', link: 'Coding' },
        { t: 'Courses', icon: 'book', b: 'Python, Java, C, C++, JavaScript and Aptitude & Logical Reasoning.', href: '/courses/', link: 'Courses' },
        { t: 'Proctored mock tests', icon: 'monitor', b: 'Timed tests in the desktop app with AI monitoring.', href: '/mock-tests/', link: 'Mock tests' },
        { t: 'AI resume builder', icon: 'file', b: 'An ATS-friendly fresher resume in minutes.', href: '/resume-builder/', link: 'Resume builder' },
        { t: 'Monthly contests', icon: 'trophy', b: 'Compete, climb the leaderboard and win rewards.', href: '/contests/', link: 'Contests' },
        { t: 'CTC Score', icon: 'target', b: 'Your readiness score from 0 to 10.', href: '/ctc-score/', link: 'CTC Score' },
      ]} />

      <Steps h="A simple weekly routine" items={[
        ['Three short sessions', '30–40 minutes on your weakest aptitude topic and one coding problem set.'],
        ['One company mock', 'A company-pattern mock for the recruiter you’re targeting.'],
        ['One review session', 'Go through your mistakes and the explanations.'],
        ['Check your score', 'Look at your CTC Score and pick next week’s focus.'],
      ]} cta={['Start practising free', APP_URL]} />

      <Sec>
        <Head h="Students who prepared with Crack The Campus" />
        <Quotes items={STUDENT_QUOTES.slice(0, 3)} />
      </Sec>
    </Page>
  );
}
