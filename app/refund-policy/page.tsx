import { LegalPage } from '@/components/Legal';
import { SUPPORT } from '@/content/site';

export const metadata = { title: 'Refund and cancellation policy', description: 'When you can get a refund on a Crack The Campus plan, and how to cancel.', alternates: { canonical: '/refund-policy/' } };

export default function Refund() {
  return (
    <LegalPage title="Refund and cancellation policy" intro="When you can get your money back, and what happens when you cancel.">
      <h2 id="eligible">When you can get a refund</h2>
      <p>You can ask for a full refund within 7 days of buying a Pro or Pro + Placement plan, as long as you have used fewer than 3 CTC assessments on it.</p>
      <h2 id="not-eligible">When refunds don’t apply</h2>
      <ul>
        <li>After 7 days, or once 3 or more CTC assessments have been used.</li>
        <li>If the account was suspended for malpractice under our terms of service.</li>
        <li>Placement support sessions that have already taken place.</li>
      </ul>
      <h2 id="how">How to ask for a refund</h2>
      <p>Email <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a> from your registered email with your order ID. We confirm within 3 working days, and approved refunds reach your original payment method within 5–7 working days.</p>
      <h2 id="cancel">Cancelling</h2>
      <p>Plans are paid once for a fixed period and do not renew automatically, so there is nothing to cancel. When your plan ends you move to the free plan and keep your CTC Score and history.</p>
      <h2 id="colleges">Colleges</h2>
      <p>Institutional licences follow the refund and cancellation terms in your signed agreement.</p>
    </LegalPage>
  );
}
