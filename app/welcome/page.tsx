import { Thanks, THANKS_META } from '@/components/thanks';
import { DOWNLOAD_URL } from '@/content/site';

// Content doc §5.1: the web app can send new sign-ups here.
export const metadata = { title: 'Welcome to Crack The Campus', ...THANKS_META };

export default function Welcome() {
  return (
    <Thanks h1="You’re in." next={[
      { t: 'Take a free sample test', icon: 'clock', b: '10 questions, about 15 minutes.', href: '/mock-tests/', link: 'Start a sample' },
      { t: 'Pick your company', icon: 'building', b: 'Patterns and mocks for 7 recruiters.', href: '/prep/', link: 'Browse companies' },
      { t: 'Download the desktop app', icon: 'dl', b: 'For proctored mocks and contests.', href: DOWNLOAD_URL, link: 'Download' },
    ]}>
      <p>Check your inbox for a verification email from Crack The Campus. While you wait, take your first step.</p>
      <p className="text-[15px] text-muted">Didn’t get the email? Check your spam folder.</p>
    </Thanks>
  );
}
