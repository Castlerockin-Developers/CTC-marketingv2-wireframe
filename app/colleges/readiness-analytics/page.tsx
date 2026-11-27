import { Hero, Page, Prose, Split, Steps } from '@/components/blocks';
import { DashWin } from '@/components/ui';
import { COLLEGE_STICKY, collegeBand, collegeCrumb, DEMO } from '@/content/colleges';

// Content doc §4.24 Readiness analytics for colleges.
export const metadata = {
  title: { absolute: 'Placement Readiness Assessment & Analytics | CTC' },
  description: 'Measure every student’s placement readiness by batch and department, and act before the hiring season.',
  alternates: { canonical: '/colleges/readiness-analytics/' },
};

export default function ReadinessAnalytics() {
  return (
    <Page sticky={COLLEGE_STICKY}
      schema={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Placement readiness analytics for colleges', provider: { '@type': 'Organization', name: 'Crack The Campus' }, areaServed: 'IN' }}
      faq={{ h: 'Readiness analytics FAQs', items: [
        ['What is a placement readiness assessment?', 'A test, or series of tests, that measures how prepared students are for hiring assessments before drives begin.'],
        ['How is readiness calculated?', 'From skills, practice and proctored performance: the same model as the student CTC Score.'],
        ['Can we export reports?', 'Yes, individual and batch reports can be downloaded.'],
        ['Can the data help with accreditation?', 'It can support internal reviews; check NAAC/NBA requirements for what evidence they accept.'],
      ] }}
      band={collegeBand('See your students’ readiness before the next drive')}>
      <Hero crumb={collegeCrumb('Readiness analytics')} eyebrow="For colleges" h1="Placement readiness analytics"
        sub="Know which students are ready, which are close and which need help, months before the first drive, not the week of."
        cta={['Book a demo', DEMO]} link={['How colleges use it', '#use']} visual={<DashWin />} />

      <Split h="What the readiness view shows" bullets={[
        'Readiness score per student, based on the CTC Score model',
        'Section strengths and gaps: aptitude, coding, verbal, company patterns',
        'Practice consistency',
        'Batch and department comparisons',
        'Trends over time',
      ]} visual={<DashWin title="ECE batch 2026, section gaps" label="Readiness view" unit="avg" rows={[['Aptitude', 71], ['Coding', 48], ['Verbal', 66], ['Company patterns', 52]]} />} />

      <Steps id="use" alt h="From data to action" items={[
        ['Diagnose', 'Run a proctored diagnostic for each batch.'],
        ['Review', 'Go through readiness by department with HODs.'],
        ['Assign', 'Targeted practice for students who need support.'],
        ['Re-test', 'Before each drive, and share shortlists with confidence.'],
      ]} p="You get a live dashboard, downloadable individual and batch reports and pre-drive readiness lists." />

      <Prose h="“We already track placement offers.”">
        <p>Offers tell you what happened. Readiness tells you what’s about to happen, while there’s still time to act.</p>
      </Prose>
    </Page>
  );
}
