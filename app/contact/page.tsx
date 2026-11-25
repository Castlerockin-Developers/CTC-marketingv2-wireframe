import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MockForm, type FieldDef } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { ArrowLink, Frame, Head, Icon, Sec } from '@/components/ui';
import { ADDRESS_SHORT, DOWNLOAD_URL, EMAIL, MAPS_URL, SUPPORT } from '@/content/site';
import { HOURS, PHONE, REPLY_TIME, WHATSAPP } from '@/content/dummy';

export const metadata = {
  title: 'Contact us',
  description: `Students, colleges and press: reach the Crack The Campus team. We reply within ${REPLY_TIME}.`,
  alternates: { canonical: '/contact/' },
};

const FIELDS: FieldDef[] = [
  { name: 'who', label: 'I am a', type: 'select', req: 'text', err: 'Please choose one.', options: ['Student', 'College staff', 'Recruiter', 'Press', 'Other'], full: true },
  { name: 'name', label: 'Full name', ph: 'Your full name…', req: 'text', err: 'Please enter your name.', ac: 'name' },
  { name: 'email', label: 'Email', type: 'email', ph: 'you@gmail.com', req: 'email', err: 'Enter a valid email address, like name@gmail.com.' },
  { name: 'phone', label: 'Phone number', type: 'tel', ph: '98765 43210', optional: true },
  { name: 'college', label: 'College name', ph: 'Start typing your college…', optional: true },
  { name: 'msg', label: 'Message', type: 'textarea', ph: 'Tell us what you need help with…', req: 'text', err: 'Please write a short message.', full: true },
];

export default function Contact() {
  const tel = `tel:${PHONE.replace(/\s/g, '')}`;
  const wa = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}`;
  return (
    <>
      <Header />
      <Main>
        <section className="hero compact" style={{ paddingBottom: 56 }}>
          <div className="wrap" data-enter>
            <div className="measure">
              <h1 className="h1">Talk to the Crack The Campus team</h1>
              <p className="lead">Students, colleges and press: pick the fastest way to reach us. We reply within {REPLY_TIME}.</p>
              <div className="quick"><a href={tel}><Icon name="phone" />Call</a><a href={wa}><Icon name="chat" />WhatsApp</a><a href={`mailto:${EMAIL}`}><Icon name="mail" />Email</a></div>
            </div>
          </div>
        </section>

        <Sec className="raised" style={{ padding: '56px 0' }}>
          <h2 className="sr">Who to contact</h2>
          <div className="cols c3">
            {[['Students', 'Account, payments, tests and the desktop app.', SUPPORT, `mailto:${SUPPORT}`, 'user'], ['Colleges', 'Demos, licences and rollout.', 'Book a demo', '/colleges/#demo', 'building'], ['Partnerships and press', 'Partnerships, institutions and press.', EMAIL, `mailto:${EMAIL}`, 'mail']].map(([h, p, l, href, ic]) => (
              <article className="card card-i route" key={h}><span className="ic"><Icon name={ic} /></span><h3 className="h3s">{h}</h3><p>{p}</p>
                {href.startsWith('/') ? <Link className="arrow-link stretch" href={href}>{l}<Icon name="arrow" /></Link> : <a className="arrow-link stretch" href={href}>{l}<Icon name="arrow" /></a>}</article>
            ))}
          </div>
        </Sec>

        <Sec className="light">
          <div className="split r75" style={{ alignItems: 'start' }}>
            <MockForm className="form-card" fields={FIELDS} submit="Send message" btnClass="btn btn-p"
              note={<p className="form-note"><Icon name="lock" /><span>We use your details only to reply. See our <Link href="/privacy/">Privacy policy</Link>.</span></p>}
              success={{ title: 'Message sent', body: `We’ll reply to {email} within ${REPLY_TIME}.` }}>
              <h2 className="h2" style={{ fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-h3)' }}>Send us a message</h2>
              <p className="fsub">All fields are required unless marked optional.</p>
            </MockForm>
            <aside>
              <ul className="side-list">
                <li><Icon name="mail" /><span><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></li>
                <li><Icon name="phone" /><span><b>Phone</b><a href={tel}>{PHONE}</a></span></li>
                <li><Icon name="chat" /><span><b>WhatsApp</b><a href={wa}>{WHATSAPP}</a></span></li>
                <li><Icon name="clock" /><span><b>Hours</b>{HOURS}</span></li>
              </ul>
            </aside>
          </div>
        </Sec>

        <Sec>
          <div className="split rev m-img-last">
            <a href={MAPS_URL} aria-label="Open the office location in Google Maps"><Frame alt="Static map of ThiDiff Tech Park, Singasandra, Bengaluru" icon="pin" /></a>
            <div><h2 className="h2">Visit our Bengaluru office</h2><p className="lead" style={{ margin: '16px 0 20px' }}>{ADDRESS_SHORT}. Visits by appointment.</p><ArrowLink href={MAPS_URL}>Open in Google Maps</ArrowLink></div>
          </div>
        </Sec>

        <Sec className="raised" id="help">
          <Head h="Find an answer now" />
          <div className="cols c3">
            {[['Student FAQ', 'info', 'Free plan, CTC Score, desktop app and proctoring', 'Read the student FAQ', '/#faq'], ['Billing FAQ', 'card', 'Plans, payments and refunds', 'Read the billing FAQ', '/pricing/#faq'], ['Install help', 'dl', 'Download the desktop app for Windows, macOS or Linux', 'Go to downloads', DOWNLOAD_URL]].map(([h, ic, p, l, href]) => (
              <article className="card card-i" key={h}><span className="ic"><Icon name={ic} /></span><h3 className="h3s">{h}</h3><p>{p}</p><a className="arrow-link stretch" href={href}>{l}<Icon name="arrow" /></a></article>
            ))}
          </div>
        </Sec>

        <FaqSec h="Contact questions" intro={false} items={[
          ['How quickly will you reply?', `Within ${REPLY_TIME}, ${HOURS}.`],
          ['I can’t log in. What should I do?', `Use “Forgot password” on the login page. If that doesn’t work, email ${SUPPORT} from your registered email.`],
          ['How do I report a problem during a proctored test?', `Email ${SUPPORT} with your registered email, test name and the time it happened, or use “Report a problem” in the app menu.`],
          ['Can I visit your office?', 'Yes, by appointment. Email us before visiting.'],
          ['How do colleges get a quote?', 'Book a 20-minute demo and we’ll send a quote based on your cohort size.'],
        ]} />
      </Main>
      <Footer />
    </>
  );
}
