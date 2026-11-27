import { Cards, Hero, Page } from '@/components/blocks';
import { SUPPORT } from '@/content/site';

// Content doc §3.16 Help docs hub. The doc lists a URL per topic but no article text yet,
// so topics are shown without links until those articles are written.
export const metadata = {
  title: { absolute: 'Crack The Campus Help Docs: Tests, App & Account' },
  description: 'Step-by-step help for your account, the desktop app, proctored exams, results, learning and your profile.',
  alternates: { canonical: '/docs/' },
};

export default function Docs() {
  return (
    <Page sticky={null}
      faq={{ h: 'Top help questions', items: [
        ['How do I reset my password?', 'Click “Forgot password” on the login page and follow the link sent to your email.'],
        ['Why does the system check fail?', 'Usually the camera or microphone is blocked. Allow access in your system settings and close other apps using them.'],
        ['Where do I see my results?', 'In Results and analytics on your dashboard.'],
        ['The installer shows a security warning. What should I do?', `Download only from crackthecampus.com/download. If you’re unsure about a warning, email ${SUPPORT} with a screenshot.`],
      ] }}
      band={{ h: 'Still need help?', p: `Email ${SUPPORT} with your registered email and a screenshot.`, cta: ['Contact support', '/contact/'], link: ['FAQ', '/faq/'] }}>
      <Hero crumb={[['Home', '/'], ['Help docs']]} h1="Help docs" sub="Step-by-step guides for students and colleges. Pick a topic, or write to support if you’re stuck." cta={['Contact support', '/contact/']} link={['Download the app', '/download/']} />

      <Cards h="Help topics" cols={4} items={[
        { t: 'Getting started', icon: 'spark', b: 'Create your account and find your way around.' },
        { t: 'Signing in', icon: 'lock', b: 'Log in, reset your password and manage your account.' },
        { t: 'Your dashboard', icon: 'grid', b: 'What you see on your home page and where to find things.' },
        { t: 'Exam management (colleges)', icon: 'cal', b: 'Create, schedule and assign assessments.' },
        { t: 'Taking an exam', icon: 'monitor', b: 'How to start, navigate and submit a test.' },
        { t: 'Pre-exam checks', icon: 'camera', b: 'Camera, microphone and identity checks before a proctored test.' },
        { t: 'During a live exam', icon: 'eye', b: 'What proctoring monitors and what to do if something goes wrong.' },
        { t: 'Results and analytics', icon: 'chart', b: 'Read your score, section breakdown and CTC Score changes.' },
        { t: 'Learning', icon: 'book', b: 'Courses, modules and practice sets.' },
        { t: 'Opportunities and profile', icon: 'user', b: 'Jobs, internships and your public profile.' },
      ]} />
    </Page>
  );
}
