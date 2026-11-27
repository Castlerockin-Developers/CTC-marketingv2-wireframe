import { Thanks, THANKS_META } from '@/components/thanks';
import { DOWNLOAD_URL } from '@/content/site';
import { CONTEST } from '@/content/dummy';

// Content doc §5.5: contest registration confirmation.
export const metadata = { title: 'Registered for Code Nova 3', ...THANKS_META };

export default function Registered() {
  return (
    <Thanks h1="You’re registered for Code Nova 3" next={[
      { t: 'Download the app', icon: 'dl', b: 'Contests run in the desktop app.', href: DOWNLOAD_URL, link: 'Download' },
      { t: 'Add to calendar', icon: 'cal', b: `${CONTEST.date}, ${CONTEST.time} IST.`, href: '/code-nova-3.ics', link: 'Add to calendar' },
      { t: 'Warm up', icon: 'code', b: 'Practise coding problems before the contest.', href: '/coding/', link: 'Coding practice' },
    ]}>
      <p>The contest starts on {CONTEST.date} at {CONTEST.time} IST. Before then: download the desktop app, run the system check and log in 15 minutes early.</p>
    </Thanks>
  );
}
