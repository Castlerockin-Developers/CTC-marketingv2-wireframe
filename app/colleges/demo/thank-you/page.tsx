import { Thanks, THANKS_META } from '@/components/thanks';
import { EMAIL } from '@/content/site';
import { PHONE, REPLY_TIME } from '@/content/dummy';

// Content doc §5.2: the demo forms redirect here after a successful send.
export const metadata = { title: 'Demo Request Received', ...THANKS_META };

export default function DemoThanks() {
  return (
    <Thanks h1="Thanks. Your demo request is in." next={[
      { t: 'How proctored exams work', icon: 'shield', b: 'Locked, AI-monitored tests for your internal exams.', href: '/colleges/proctored-exams/', link: 'Read more' },
      { t: 'Readiness analytics', icon: 'chart', b: 'See every student’s readiness by batch and department.', href: '/colleges/readiness-analytics/', link: 'Read more' },
    ]}>
      <p>We’ll contact you within {REPLY_TIME} to confirm a time.</p>
      <p className="text-[15px] text-muted">Questions before the demo? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE}.</p>
    </Thanks>
  );
}
