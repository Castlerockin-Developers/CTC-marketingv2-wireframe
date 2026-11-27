import { Cards, Hero, Page, Prose, Split, Steps } from '@/components/blocks';
import { DashWin, ProctorWin } from '@/components/ui';
import { COLLEGE_STICKY, collegeBand, collegeCrumb, DEMO } from '@/content/colleges';

// Content doc §4.22 Proctored exams for colleges.
export const metadata = {
  title: { absolute: 'Online Proctored Exam Platform for Colleges | CTC' },
  description: 'Run internal exams in a secure AI-proctored desktop app with screen lock and behaviour checks. Built for placement cells.',
  alternates: { canonical: '/colleges/proctored-exams/' },
};

export default function ProctoredExams() {
  return (
    <Page sticky={COLLEGE_STICKY}
      schema={{ '@context': 'https://schema.org', '@type': 'Service', name: 'Proctored online exams for colleges', provider: { '@type': 'Organization', name: 'Crack The Campus' }, areaServed: 'IN' }}
      faq={{ h: 'Proctored exam FAQs', items: [
        ['How does AI proctoring detect cheating?', 'It monitors the camera, screen and test environment and flags suspicious events for faculty review.'],
        ['Do students need a webcam?', 'Yes, for proctored tests.'],
        ['Can we use our own question papers?', 'Yes. Upload your questions or mix them with the pre-built library.'],
        ['What happens when a session is flagged?', 'Faculty see the flag and review the session, then decide what to do.'],
        ['Can we run exams in our computer labs?', 'Yes, on Windows, macOS or Linux machines with the desktop app installed.'],
      ] }}
      band={collegeBand('See a proctored exam from both sides')}>
      <Hero crumb={collegeCrumb('Proctored exams')} eyebrow="For colleges" h1="Proctored online exams for colleges"
        sub="Give every internal test the same integrity as a company hiring test. Students sit exams in a locked, AI-monitored desktop app; you get clean results and flagged sessions to review."
        cta={['Book a demo', DEMO]} link={['How AI proctoring works', '#how']} visual={<ProctorWin />} />

      <Prose h="What you can run">
        <p>Internal placement tests, mock drives, semester practice tests and curriculum quizzes: any assessment where you need to trust the results.</p>
        <p>Built for placement cells and departments that want students to get used to proctored conditions before real hiring tests.</p>
      </Prose>

      <Steps id="how" alt h="How AI proctoring works" items={[
        ['Pre-exam checks', 'Students verify camera, microphone and identity in the app.'],
        ['Locked environment', 'The app blocks other windows and screen sharing during the test.'],
        ['Behaviour monitoring', 'AI flags events such as looking away or leaving the frame.'],
        ['Review', 'Faculty review flagged sessions and decide outcomes.'],
      ]} />

      <Split h="What you get" bullets={[
        'Upload your own questions or use the pre-built library',
        'Scheduling by batch and department',
        'Real-time monitoring and malpractice flags',
        'Automatic scoring for MCQs and coding',
        'Downloadable results and integrity reports',
      ]} cta={['Book a demo', DEMO]} visual={<DashWin title="Mock drive, CSE batch 2026" label="Admin suite · live session" unit="submitted" rows={[['Section A', 92], ['Section B', 88], ['Section C', 71], ['Flags to review', 6]]} />} />

      <Cards alt h="Why colleges proctor internal tests" items={[
        { t: 'Honest data', icon: 'chart', b: 'Readiness reports are only useful if the scores are real.' },
        { t: 'No surprises for students', icon: 'users', b: 'Students who have taken proctored tests on campus don’t panic in hiring assessments.' },
        { t: 'Less invigilation effort', icon: 'clock', b: 'Fewer staff needed to supervise large tests.' },
      ]} p="Included in the institutional licence, priced per student per year." />
    </Page>
  );
}
