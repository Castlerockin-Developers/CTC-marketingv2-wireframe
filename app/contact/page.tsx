import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MockForm, type FieldDef } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { ARROW, ArrowLink, Frame, Head, Icon, Sec } from '@/components/ui';
import { btn, card, FORM_CARD_ON_ALT, FORM_NOTE, FSUB, split, tw } from '@/components/tw';
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

const CARD_LINK = `${ARROW} ${tw.stretch} mt-auto pt-3`;

export default function Contact() {
  const tel = `tel:${PHONE.replace(/\s/g, '')}`;
  const wa = `https://wa.me/${WHATSAPP.replace(/\D/g, '')}`;
  return (
    <>
      <Header />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`} style={{ paddingBottom: 56 }}>
          <div className={`${tw.wrap} ${tw.heroWrap} ${tw.enter}`}>
            <div className={tw.measure}>
              <h1 className={`${tw.h1} ${tw.heroH1}`}>Talk to the Crack The Campus team</h1>
              <p className={`${tw.lead} ${tw.heroLead}`}>Students, colleges and press: pick the fastest way to reach us. We reply within {REPLY_TIME}.</p>
              <div className="hidden gap-2 mt-6 m:flex [&_a]:flex-1 [&_a]:flex [&_a]:flex-col [&_a]:items-center [&_a]:justify-center [&_a]:gap-1.5 [&_a]:min-h-[72px] [&_a]:border [&_a]:border-l200 [&_a]:rounded-[14px] [&_a]:!text-l950 [&_a]:!no-underline [&_a]:font-semibold [&_a]:text-[14px] [&_a]:bg-white [&_svg]:w-[22px] [&_svg]:h-[22px] [&_svg]:text-l700"><a href={tel}><Icon name="phone" />Call</a><a href={wa}><Icon name="chat" />WhatsApp</a><a href={`mailto:${EMAIL}`}><Icon name="mail" />Email</a></div>
            </div>
          </div>
        </section>

        <Sec className={tw.light} style={{ padding: '56px 0' }}>
          <h2 className={tw.sr}>Who to contact</h2>
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['Students', 'Account, payments, tests and the desktop app.', SUPPORT, `mailto:${SUPPORT}`, 'user'], ['Colleges', 'Demos, licences and rollout.', 'Book a demo', '/colleges/#demo', 'building'], ['Partnerships and press', 'Partnerships, institutions and press.', EMAIL, `mailto:${EMAIL}`, 'mail']].map(([h, p, l, href, ic]) => (
              <article className={card({ i: true })} key={h}><span className={tw.ic}><Icon name={ic} /></span><h3 className={tw.h3s}>{h}</h3><p>{p}</p>
                {href.startsWith('/') ? <Link className={CARD_LINK} href={href}>{l}<Icon name="arrow" /></Link> : <a className={CARD_LINK} href={href}>{l}<Icon name="arrow" /></a>}</article>
            ))}
          </div>
        </Sec>

        <Sec className={tw.light}>
          <div className={`${split('75')}`} data-reveal="split" style={{ alignItems: 'start' }}>
            <MockForm className={FORM_CARD_ON_ALT} fields={FIELDS} submit="Send message" btnClass={btn('p')}
              note={<p className={FORM_NOTE}><Icon name="lock" /><span>We use your details only to reply. See our <Link href="/privacy/">Privacy policy</Link>.</span></p>}
              success={{ title: 'Message sent', body: `We’ll reply to {email} within ${REPLY_TIME}.` }}>
              <h2 className={tw.h2} style={{ fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-h3)' }}>Send us a message</h2>
              <p className={FSUB}>All fields are required unless marked optional.</p>
            </MockForm>
            <aside>
              <ul className="list-none grid gap-0 border border-l200 rounded-2xl bg-white [&>li]:flex [&>li]:gap-3.5 [&>li]:py-[18px] [&>li]:px-5 [&>li]:items-start [&>li+li]:border-t [&>li+li]:border-l200 [&_b]:block [&_b]:text-tx [&_b]:text-[14px] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-act [&_svg]:mt-0.5 [&_svg]:flex-none">
                <li><Icon name="mail" /><span><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></li>
                <li><Icon name="phone" /><span><b>Phone</b><a href={tel}>{PHONE}</a></span></li>
                <li><Icon name="chat" /><span><b>WhatsApp</b><a href={wa}>{WHATSAPP}</a></span></li>
                <li><Icon name="clock" /><span><b>Hours</b>{HOURS}</span></li>
              </ul>
            </aside>
          </div>
        </Sec>

        <Sec>
          <div className={`${split()} ${tw.rev} ${tw.imgLast}`} data-reveal="split">
            <a href={MAPS_URL} aria-label="Open the office location in Google Maps"><Frame alt="Static map of ThiDiff Tech Park, Singasandra, Bengaluru" icon="pin" /></a>
            <div><h2 className={tw.h2}>Visit our Bengaluru office</h2><p className={tw.lead} style={{ margin: '16px 0 20px' }}>{ADDRESS_SHORT}. Visits by appointment.</p><ArrowLink href={MAPS_URL}>Open in Google Maps</ArrowLink></div>
          </div>
        </Sec>

        <Sec className={tw.light} id="help">
          <Head h="Find an answer now" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['Student FAQ', 'info', 'Free plan, CTC Score, desktop app and proctoring', 'Read the student FAQ', '/#faq'], ['Billing FAQ', 'card', 'Plans, payments and refunds', 'Read the billing FAQ', '/pricing/#faq'], ['Install help', 'dl', 'Download the desktop app for Windows, macOS or Linux', 'Go to downloads', DOWNLOAD_URL]].map(([h, ic, p, l, href]) => (
              <article className={card({ i: true })} key={h}><span className={tw.ic}><Icon name={ic} /></span><h3 className={tw.h3s}>{h}</h3><p>{p}</p><a className={CARD_LINK} href={href}>{l}<Icon name="arrow" /></a></article>
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
