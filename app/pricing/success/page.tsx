import Link from 'next/link';
import { Thanks, THANKS_META } from '@/components/thanks';
import { APP_URL, DOWNLOAD_URL } from '@/content/site';

// Content doc §5.4: checkout can send buyers here.
export const metadata = { title: 'Payment Successful', ...THANKS_META };

export default function PaymentSuccess() {
  return (
    <Thanks h1="Payment successful" next={[
      { t: 'Start practising', icon: 'spark', b: 'Your new limits are live in the web app.', href: APP_URL, link: 'Go to my dashboard' },
      { t: 'Download the desktop app', icon: 'dl', b: 'For proctored mocks and contests.', href: DOWNLOAD_URL, link: 'Download' },
    ]}>
      <p>Your plan is active, and a receipt has been sent to your email.</p>
      <p className="text-[15px] text-muted">Refunds: see our <Link href="/refund-policy/">Refund &amp; cancellation policy</Link>.</p>
    </Thanks>
  );
}
