'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from './ui';
import { FooterCol } from './interactive';
import { LogoMark, Wordmark } from './Logo';
import { ADDRESS_LONG, EMAIL, FOOTER_COLS, SOCIAL, SUPPORT } from '@/content/site';
import { HOURS, PHONE, WHATSAPP } from '@/content/dummy';

function Newsletter() {
  const [v, setV] = useState('');
  const [bad, setBad] = useState(false);
  const [done, setDone] = useState(false);
  if (done) return <p className="okmsg" role="status"><Icon name="checkc" />You’re in. Look out for our next email on Monday.</p>;
  return (
    <form noValidate onSubmit={(e) => {
      e.preventDefault();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
      setBad(!ok);
      if (ok) setDone(true); // shortcut: mock subscribe, no request sent
    }}>
      <div className={`field ${bad ? 'bad' : ''}`}>
        <label className="sr" htmlFor="nl-email">Email</label>
        <div className="news-f">
          <input className="inp" id="nl-email" type="email" autoComplete="email" placeholder="you@gmail.com" spellCheck={false} value={v} aria-invalid={bad || undefined} aria-describedby="nl-err" onChange={(e) => setV(e.target.value)} />
          <button className="btn btn-s btn-sm" type="submit">Subscribe</button>
        </div>
        <span className="err" id="nl-err" role="alert"><Icon name="alert" />Enter a valid email address, like name@gmail.com.</span>
      </div>
    </form>
  );
}

export default function Footer({ disclaim }: { disclaim?: string }) {
  return (
    <>
      {disclaim && <div className="disclaim"><div className="wrap">{disclaim}</div></div>}
      <footer className="ftr">
        <div className="wrap">
          <div className="ftr-quick">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}><Icon name="phone" />Call</a>
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`}><Icon name="chat" />WhatsApp</a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" />Email</a>
          </div>
          <div className="ftr-top">
            <div>
              <Link className="logo" href="/" aria-label="Crack The Campus home"><LogoMark /><Wordmark /></Link>
              <p className="tag">Placement prep, proctored mock tests and the CTC Score for engineering students and colleges in India.</p>
              <div className="news">
                <p className="nh">Get drive alerts and new guides</p>
                <p>One email a week with new company prep pages, contest dates and placement tips. Unsubscribe any time.</p>
                <Newsletter />
              </div>
            </div>
            <div className="fcols">
              {FOOTER_COLS.map((c) => (
                <FooterCol key={c.title} title={c.title}>
                  <ul>{c.links.map(([t, h]) => <li key={t}><Link href={h}>{t}</Link></li>)}</ul>
                </FooterCol>
              ))}
            </div>
          </div>
          <div className="ftr-mid">
            <div><b>Crack The Campus</b>{ADDRESS_LONG}</div>
            <div>
              <b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Student support: <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>
              <b style={{ marginTop: 12 }}>Phone and WhatsApp</b>{PHONE}, {HOURS}
            </div>
            {SOCIAL.length > 0 && (
              <div>
                <b>Follow us</b>
                <div className="soc">{SOCIAL.map((x) => <a key={x.label} href={x.href} rel="noopener" aria-label={`Crack The Campus on ${x.label}`}><Icon name={x.icon} />{x.label}</a>)}</div>
              </div>
            )}
          </div>
          <div className="ftr-bot">
            <span>© 2026 Crack The Campus. All rights reserved.</span>
            <nav aria-label="Legal"><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms of service</Link><Link href="/refund-policy/">Refund &amp; cancellation policy</Link></nav>
          </div>
        </div>
      </footer>
    </>
  );
}
