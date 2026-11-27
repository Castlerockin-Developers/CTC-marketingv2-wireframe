import { Cards, Hero, Page, Prose, Steps } from '@/components/blocks';
import { DashWin } from '@/components/ui';
import { COLLEGE_STICKY, collegeBand, collegeCrumb, DEMO } from '@/content/colleges';

// Content doc §4.23 Placement training (CRT) for colleges.
export const metadata = {
  title: { absolute: 'Placement Training (CRT) for Engineering Colleges | CTC' },
  description: 'Online CRT and placement training for colleges: aptitude, coding and company tracks with batch-wise readiness reports.',
  alternates: { canonical: '/colleges/placement-training/' },
};

export default function PlacementTraining() {
  return (
    <Page sticky={COLLEGE_STICKY}
      schema={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Placement training (CRT) for engineering colleges', provider: { '@type': 'Organization', name: 'Crack The Campus' }, areaServed: 'IN' }}
      faq={{ h: 'CRT and placement training FAQs', items: [
        ['What is CRT training in engineering colleges?', 'Campus recruitment training: preparation for aptitude tests, coding rounds and interviews ahead of placement drives.'],
        ['Can online CRT replace classroom training?', 'It works best alongside it: classroom sessions for concepts, online practice and mocks for repetition and measurement.'],
        ['Can we choose which companies to train for?', 'Yes. Assign company tracks for the recruiters visiting your campus.'],
        ['Do you train faculty?', 'Yes, with a workshop during rollout.'],
        ['Do you work with colleges outside Karnataka?', 'Yes. We work with colleges across India online.'],
        ['How do we see progress?', 'Weekly batch and department reports in the admin dashboard.'],
      ] }}
      band={collegeBand('Run CRT for every batch, and see who’s keeping up')}>
      <Hero crumb={collegeCrumb('Placement training')} eyebrow="For colleges" h1="Placement training for engineering colleges"
        sub="Campus recruitment training (CRT) for every batch, without scheduling outside trainers for every topic. Students follow aptitude, coding and company tracks; you track progress by batch."
        cta={['Book a demo', DEMO]} link={['See a sample training plan', '#plan']}
        visual={<DashWin title="Batch 2026 · 8-week plan" label="Training plan" unit="complete" rows={[['Aptitude & reasoning', 78], ['Verbal', 64], ['Coding foundations', 55], ['Company tracks', 32]]} />} />

      <Prose h="What is CRT, and how we deliver it">
        <p>Campus recruitment training prepares students for the online tests and interviews used in placement drives.</p>
        <p>With Crack The Campus, CRT runs as structured online tracks with timed practice and proctored mocks, so every student gets the same training and you get data on who is keeping up.</p>
      </Prose>

      <Cards alt h="Tracks you can assign" items={[
        { t: 'Aptitude & logical reasoning', icon: 'sigma', b: 'Every topic in placement aptitude rounds.' },
        { t: 'Verbal and written communication', icon: 'chat', b: 'Grammar, reading and written English.' },
        { t: 'Coding foundations', icon: 'code', b: 'Python, Java, C and C++.' },
        { t: 'Company tracks', icon: 'building', b: 'Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft.' },
        { t: 'Your own curriculum', icon: 'layers', b: 'Upload your syllabus to the curriculum vault.' },
        { t: 'Proctored mock drives', icon: 'shield', b: 'Diagnostic and pre-drive tests under real conditions.' },
      ]} />

      <Steps id="plan" h="A sample 8-week training plan" items={[
        ['Week 1', 'Diagnostic proctored test for the whole batch.'],
        ['Weeks 2–4', 'Aptitude and coding foundations, assigned by weakness.'],
        ['Weeks 5–6', 'Company tracks for recruiters visiting your campus.'],
        ['Weeks 7–8', 'Two full proctored mock drives, then a readiness review with HODs.'],
      ]} p="You get batch and department training plans, weekly progress reports, a readiness list before each drive and a faculty workshop at onboarding." />

      <Prose alt h="“We already have CRT trainers.”">
        <p>Keep them. Use Crack The Campus for daily practice, proctored mocks and tracking between sessions, so trainer time goes further.</p>
      </Prose>
    </Page>
  );
}
