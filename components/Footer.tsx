'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from './ui';
import { btn, INP, tw } from './tw';
import { FooterCol, Honeypot, sendForm } from './interactive';
import { BrandLogo } from './Logo';
import { ADDRESS_LONG, EMAIL, FOOTER_COLS, SOCIAL, SUPPORT } from '@/content/site';
import { HOURS, PHONE, WHATSAPP } from '@/content/dummy';

function Newsletter() {
  const [v, setV] = useState('');
  const [bad, setBad] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState(false);
  if (done) return <p className="text-[13.5px] text-[#067647] flex gap-1.5 items-center" role="status"><Icon name="checkc" />You’re in. Look out for our next email on Monday.</p>;
  return (
    <form noValidate onSubmit={async (e) => {
      e.preventDefault();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
      setBad(!ok);
      if (!ok || (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement | null)?.checked) return;
      const sent = await sendForm('Newsletter sign-up', { Email: v.trim() });
      setErr(!sent); setDone(sent);
    }}>
      <Honeypot />
      <div className="flex flex-col gap-1.5">
        <label className={tw.sr} htmlFor="nl-email">Email</label>
        <div className="flex gap-2">
          <input className={`${INP} border-l500 px-3.5 flex-1 min-w-0`} id="nl-email" type="email" autoComplete="email" placeholder="you@gmail.com" spellCheck={false} value={v} aria-invalid={bad || undefined} aria-describedby="nl-err" onChange={(e) => setV(e.target.value)} />
          <button className={btn('s', { sm: true })} data-btn="s" type="submit">Subscribe</button>
        </div>
        <span className={`text-[13.5px] leading-[18px] text-[#B42318] gap-1.5 items-start font-medium [&_svg]:w-4 [&_svg]:h-4 [&_svg]:flex-none [&_svg]:mt-px ${bad ? 'flex' : 'hidden'}`} id="nl-err" role="alert"><Icon name="alert" />Enter a valid email address, like name@gmail.com.</span>
        {err && <span className="text-[13.5px] font-medium text-[#B42318]" role="alert">Couldn’t subscribe right now. Please try again in a minute.</span>}
      </div>
    </form>
  );
}

export default function Footer({ disclaim }: { disclaim?: string }) {
  return (
    <>
      {disclaim && <div className="text-[13px] text-l700 py-4 border-t border-l200 bg-l50"><div className={tw.wrap}>{disclaim}</div></div>}
      <footer className="bg-l50 border-t border-l200 pt-[72px] pb-8 text-l700 text-[15px] leading-6 m:pt-10 m:pb-6">
        <div className={tw.wrap}>
          <div className="hidden m:grid m:grid-cols-[repeat(3,1fr)] m:gap-2 m:mb-8 [&_a]:!text-l950 [&_a]:bg-white m:[&_a]:flex m:[&_a]:flex-col m:[&_a]:items-center m:[&_a]:justify-center m:[&_a]:gap-1.5 m:[&_a]:min-h-16 m:[&_a]:border m:[&_a]:!border-l200 m:[&_a]:rounded-xl m:[&_a]:!no-underline m:[&_a]:text-[13.5px] m:[&_a]:font-semibold [&_svg]:!text-l700 m:[&_svg]:w-5 m:[&_svg]:h-5">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}><Icon name="phone" />Call</a>
            <a href={`https://wa.me/${WHATSAPP.replace(/\D/g, '')}`}><Icon name="chat" />WhatsApp</a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" />Email</a>
          </div>
          <div className="grid grid-cols-[4fr_8fr] gap-16 pb-12 border-b !border-l200 m:grid-cols-[1fr] m:gap-8 m:pb-2 m:border-b-0">
            <div>
              <Link className={`${tw.logo} mr-4 m:mr-auto`} href="/" aria-label="Crack The Campus home"><BrandLogo /></Link>
              <p className="mt-4 mb-6 max-w-[340px] text-l900">Placement prep, proctored mock tests and the CTC Score for engineering students and colleges in India.</p>
              <div className="[&_p]:mt-1.5 [&_p]:mb-3.5 [&_p]:text-[14px] [&_p]:leading-[22px]">
                <p className="font-head font-bold text-l950 !text-[18px]">Get drive alerts and new guides</p>
                <p>One email a week with new company prep pages, contest dates and placement tips. Unsubscribe any time.</p>
                <Newsletter />
              </div>
            </div>
            <div className="grid grid-cols-[repeat(4,1fr)] gap-6 !border-l200 m:grid-cols-[1fr] m:gap-0 m:border-t">
              {FOOTER_COLS.map((c) => (
                <FooterCol key={c.title} title={c.title}>
                  <ul>{c.links.map(([t, h]) => <li key={t}><Link href={h}>{t}</Link></li>)}</ul>
                </FooterCol>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-[5fr_4fr_3fr] gap-8 py-8 border-b border-l200 m:grid-cols-[1fr] m:gap-5 [&_b]:text-l950 [&_b]:font-semibold [&_b]:block [&_b]:mb-1.5 [&_b]:text-[14px] [&_a]:!text-linkc">
            <div><b>Crack The Campus</b>{ADDRESS_LONG}</div>
            <div>
              <b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Student support: <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>
              <b style={{ marginTop: 12 }}>Phone and WhatsApp</b>{PHONE}, {HOURS}
            </div>
            {SOCIAL.length > 0 && (
              <div>
                <b>Follow us</b>
                <div className="flex gap-2 flex-wrap [&_a]:inline-flex [&_a]:items-center [&_a]:gap-2 [&_a]:min-h-11 [&_a]:px-3.5 [&_a]:border [&_a]:border-l200 [&_a]:rounded-[10px] [&_a]:!no-underline [&_a]:text-[14px] [&_a]:bg-white [&_a:hover]:border-l400 [&_a:hover]:!text-l950 [&_svg]:w-[18px] [&_svg]:h-[18px]">{SOCIAL.map((x) => <a key={x.label} href={x.href} rel="noopener" aria-label={`Crack The Campus on ${x.label}`}><Icon name={x.icon} />{x.label}</a>)}</div>
              </div>
            )}
          </div>
          <div className="flex justify-between gap-4 flex-wrap pt-6 text-[13px] leading-5 m:flex-col-reverse">
            <span>© 2026 Crack The Campus. All rights reserved.</span>
            <nav className="flex gap-x-5 gap-y-1 flex-wrap [&_a]:!text-l700 [&_a]:!no-underline [&_a]:min-h-11 [&_a]:inline-flex [&_a]:items-center [&_a:hover]:!text-l950 [&_a:hover]:!underline" aria-label="Legal"><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms of service</Link><Link href="/refund-policy/">Refund &amp; cancellation policy</Link></nav>
          </div>
        </div>
      </footer>
    </>
  );
}
