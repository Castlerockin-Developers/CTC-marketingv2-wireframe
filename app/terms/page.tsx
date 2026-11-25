import Link from 'next/link';
import { LegalPage } from '@/components/Legal';
import { EMAIL } from '@/content/site';

export const metadata = { title: 'Terms of service', description: 'The terms for using Crack The Campus.', alternates: { canonical: '/terms/' } };

export default function Terms() {
  return (
    <LegalPage title="Terms of service" intro="The rules for using Crack The Campus. By creating an account or buying a plan, you agree to them.">
      <h2 id="accounts">Your account</h2>
      <p>Use accurate details and keep your password private. One account per person; accounts cannot be shared or resold. You must be at least 16 years old.</p>
      <h2 id="plans">Plans and payment</h2>
      <p>The free plan has no time limit. Paid plans are paid once for the full period shown (6 or 12 months), in INR, with taxes as applicable. Plan limits, such as CTC assessments a month, are listed on the <Link href="/pricing/">pricing page</Link>. Refunds follow our <Link href="/refund-policy/">refund and cancellation policy</Link>.</p>
      <h2 id="integrity">Fair use and test integrity</h2>
      <ul>
        <li>Proctored tests and contests must be taken alone, in the desktop app, without outside help, AI tools or second devices.</li>
        <li>Flagged sessions are reviewed. Confirmed malpractice can void scores, remove contest rankings and prizes, and lead to account suspension.</li>
        <li>Do not copy, scrape, share or resell questions, solutions or course content.</li>
      </ul>
      <h2 id="outcomes">No job guarantee</h2>
      <p>Crack The Campus helps you prepare and apply. Placement support, the CTC Score and contest results do not guarantee an interview, offer or package. Company names are used only to describe the tests we help you practise for; we are not affiliated with those companies.</p>
      <h2 id="content">Our content</h2>
      <p>Courses, questions, the CTC Score method and the software belong to Crack The Campus. Your answers and code remain yours, and you allow us to use them to run and improve the service.</p>
      <h2 id="changes">Changes and ending your account</h2>
      <p>We may update these terms and will email you about material changes. You can close your account at any time. We may suspend accounts that break these terms.</p>
      <h2 id="law">Governing law</h2>
      <p>These terms are governed by the laws of India, and courts in Bengaluru, Karnataka have jurisdiction.</p>
      <h2 id="contact">Contact</h2>
      <p>Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
    </LegalPage>
  );
}
