import { Thanks, THANKS_META } from '@/components/thanks';
import { SUPPORT } from '@/content/site';
import { REPLY_TIME } from '@/content/dummy';

// Content doc §5.3: the contact form redirects here after a successful send.
export const metadata = { title: 'Message Sent', ...THANKS_META };

export default function ContactThanks() {
  return (
    <Thanks h1="Message sent" next={[
      { t: 'Help docs', icon: 'book', b: 'Step-by-step help for your account and the app.', href: '/docs/', link: 'Browse help docs' },
      { t: 'FAQ', icon: 'chat', b: 'Quick answers about plans, tests and your CTC Score.', href: '/faq/', link: 'Read the FAQ' },
    ]}>
      <p>Thanks for writing to us. We’ll reply within {REPLY_TIME}.</p>
      <p className="text-[15px] text-muted">If it’s about a test happening right now, email <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a> with the test name and time.</p>
    </Thanks>
  );
}
