import { Cards, Page, PageBanner, Steps } from '@/components/blocks';
import { Crumb } from '@/components/ui';
import { APP_URL } from '@/content/site';
import { COURSE_LIST } from '@/content/courses';

// Content doc §4.14 Courses hub.
export const metadata = {
  title: { absolute: 'Placement Courses for Engineering Students | CTC' },
  description: 'Beginner-friendly courses in Python, Java, C, C++, JavaScript and aptitude, built for campus placements. Start free.',
  alternates: { canonical: '/courses/' },
};

export default function CoursesHub() {
  return (
    <Page
      faq={{ h: 'Course questions', items: [
        ['Which course should I take first?', 'Aptitude & Logical Reasoning if your drive is soon; otherwise one programming language you’ll use in coding rounds.'],
        ['Are courses free?', 'The first modules of every course are free; full courses are included in Pro plans.'],
        ['Do courses count towards my CTC Score?', 'Yes, completed courses add to the skills part of your score.'],
      ] }}
      band={{ h: 'Pick one course and start tonight', p: 'Short lessons, practice after every module, placement problems at the end.', cta: ['Start a free course', APP_URL], link: ['Compare plans', '/pricing/'] }}
      sticky={['Placement courses', 'First modules free', 'Start free', APP_URL]}>
      <PageBanner art="/images/art/rooftop.webp" pos="20% 75%" eyebrow="Courses" h1="Courses built for placements"
        sub="Learn a language or brush up aptitude with short lessons and practice after every module. Each course ends with placement-style problems."
        cta={['Start a free course', APP_URL]} crumb={<Crumb items={[['Home', '/'], ['Courses']]} />} />

      <Cards h="Choose a course" items={COURSE_LIST.map((c) => ({ t: c.name, b: c.line, href: `/courses/${c.slug}/`, link: `See ${c.name}`, icon: c.slug === 'aptitude-reasoning' ? 'sigma' : 'code' }))} />

      <Steps alt h="How courses work" items={[
        ['Short lessons', 'One idea at a time, with examples.'],
        ['Practice after each module', 'Questions with explanations.'],
        ['Module tests', 'Check it stuck before moving on.'],
        ['Placement problem set', 'Placement-style problems to finish.'],
      ]} p="The first modules of every course are free. Full courses come with Pro plans." />
    </Page>
  );
}
