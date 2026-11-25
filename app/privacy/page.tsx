import { LegalPage } from '@/components/Legal';
import { ADDRESS_SHORT, EMAIL, SUPPORT } from '@/content/site';

export const metadata = { title: 'Privacy policy', description: 'How Crack The Campus collects, uses and protects your personal data.', alternates: { canonical: '/privacy/' } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" intro="What we collect when you use Crack The Campus, why we collect it, and the choices you have.">
      <h2 id="collect">What we collect</h2>
      <ul>
        <li><strong>Account details:</strong> your name, email, phone number, college, branch and graduation year.</li>
        <li><strong>Learning and test data:</strong> answers, scores, time taken, course progress and your CTC Score.</li>
        <li><strong>Proctoring data:</strong> during proctored tests and contests only, webcam snapshots, screen-focus events and tab switches.</li>
        <li><strong>Payment details:</strong> handled by our payment provider. We never see or store your full card or UPI details.</li>
        <li><strong>Messages you send us</strong> through forms, email or WhatsApp.</li>
      </ul>
      <h2 id="use">How we use it</h2>
      <ul>
        <li>To run your account, tests, courses and contests, and to calculate your CTC Score.</li>
        <li>To check test integrity and investigate flagged proctored sessions.</li>
        <li>To reply to your messages and send service emails. Marketing emails only go out if you subscribe, and every one has an unsubscribe link.</li>
        <li>If your college has a Crack The Campus licence, to show your progress and scores to its placement officers and HODs.</li>
      </ul>
      <h2 id="share">Who we share it with</h2>
      <p>We do not sell your personal data. We share it only with service providers that help us run the platform (hosting, email, payments), with your college if it holds a licence for you, and with recruiters only when you choose to share your profile.</p>
      <h2 id="keep">How long we keep it</h2>
      <p>Proctoring media is kept for 90 days. Account, test and score data is kept while your account is active and deleted within 90 days of you asking us to close it, unless the law requires us to keep it longer.</p>
      <h2 id="rights">Your choices and rights</h2>
      <p>You can ask to see, correct, download or delete your data, and withdraw consent for optional processing, by writing to <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>. We reply within 30 days.</p>
      <h2 id="security">Security</h2>
      <p>Data is encrypted in transit and stored on access-controlled servers. No system is perfectly secure, so please use a strong, unique password.</p>
      <h2 id="contact">Contact</h2>
      <p>Grievance and privacy questions: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Crack The Campus, {ADDRESS_SHORT}.</p>
    </LegalPage>
  );
}
