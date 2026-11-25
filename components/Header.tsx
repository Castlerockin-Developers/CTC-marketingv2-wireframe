'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './ui';
import { LogoMark, Wordmark } from './Logo';
import { APP_URL, LOGIN_URL, COLLEGE_NAV, EMAIL, RESOURCE_NAV, STUDENT_NAV, type NavItem } from '@/content/site';
import { PHONE } from '@/content/dummy';

type Sub = { title: string; cta: string; chip: string };

const ddItems = (items: NavItem[], close: () => void) =>
  items.map((x) => (
    <Link key={x.title} href={x.href} onClick={close}>
      <span className="ic"><Icon name={x.icon} /></span>
      <span><b>{x.title}</b>{x.desc && <span>{x.desc}</span>}</span>
    </Link>
  ));

function active(path: string) {
  if (path.startsWith('/colleges')) return 'col';
  if (path.startsWith('/prep') || path.startsWith('/courses')) return 'stu';
  if (path.startsWith('/contests')) return 'contests';
  if (path.startsWith('/pricing')) return 'pricing';
  if (path.startsWith('/guides')) return 'res';
  return '';
}

export default function Header({ sub, progress }: { sub?: Sub; progress?: boolean }) {
  const path = usePathname() || '/';
  const act = active(path);
  const isCol = act === 'col';
  const [open, setOpen] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prog, setProg] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 8);
      if (progress) {
        const a = document.getElementById('article');
        if (a) {
          const r = a.getBoundingClientRect();
          setProg(Math.min(1, Math.max(0, (-r.top + 120) / (r.height - window.innerHeight + 200))));
        }
      }
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [progress]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (!navRef.current?.contains(e.target as Node)) setOpen(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMenu(false); } };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);

  const close = () => setOpen(null);
  const navBtn = (label: string, key: string, items: NavItem[], cls = '', foot?: React.ReactNode) => (
    <div className={`nav-item ${open === key ? 'open' : ''}`}>
      <button className="nav-link" type="button" aria-expanded={open === key} aria-haspopup="true" aria-current={act === key ? 'true' : undefined} onClick={() => setOpen(open === key ? null : key)}>
        {label}<Icon name="down" />
      </button>
      <div className={`dd ${cls}`}>{ddItems(items, close)}{foot}</div>
    </div>
  );

  const cta = isCol ? 'Book a demo' : 'Start free';
  const ctaHref = isCol ? '/colleges/#demo' : APP_URL;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className={`hdr ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap hdr-in">
          <Link className="logo" href="/" aria-label="Crack The Campus home"><LogoMark /><Wordmark /></Link>
          <nav className="nav" aria-label="Main" ref={navRef}>
            {navBtn('For students', 'stu', STUDENT_NAV)}
            {navBtn('For colleges', 'col', COLLEGE_NAV, '', (
              <div className="dd-foot"><span className="cap">See the admin suite with your own use case.</span><Link className="btn btn-p btn-sm" href="/colleges/#demo" onClick={close}>Book a demo</Link></div>
            ))}
            <Link className="nav-link" href="/contests/code-nova-3/" aria-current={act === 'contests' ? 'page' : undefined}>Contests</Link>
            <Link className="nav-link" href="/pricing/" aria-current={act === 'pricing' ? 'page' : undefined}>Pricing</Link>
            {navBtn('Resources', 'res', RESOURCE_NAV, 'narrow')}
          </nav>
          <div className="hdr-r">
            <a className="login" href={LOGIN_URL}>Log in</a>
            <Link className="btn btn-p btn-sm" href={ctaHref}><span className="d-only">{cta}</span><span className="m-only">{isCol ? 'Demo' : 'Start free'}</span></Link>
            <button className="menu-btn m-only" type="button" aria-label="Open menu" aria-expanded={menu} onClick={() => setMenu(true)}><Icon name="menu" /></button>
          </div>
        </div>
        {sub && (
          <div className="subbar d-only"><div className="wrap"><b>{sub.title}</b><span className="chip">{sub.chip}</span><span style={{ marginLeft: 'auto' }} /><a className="btn btn-p btn-sm" href={APP_URL}>{sub.cta}</a></div></div>
        )}
        {progress && <div className="progress" style={{ width: `${prog * 100}%` }} aria-hidden="true" />}
      </header>
      {menu && <MobileMenu isCol={isCol} onClose={() => setMenu(false)} />}
    </>
  );
}

function MobileMenu({ isCol, onClose }: { isCol: boolean; onClose: () => void }) {
  const [openAcc, setOpenAcc] = useState('For students');
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocus.current = document.activeElement as HTMLElement;
    requestAnimationFrame(() => setShown(true));
    ref.current?.querySelector<HTMLElement>('a,button')?.focus();
    document.body.style.overflow = 'hidden';
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !ref.current) return;
      const f = [...ref.current.querySelectorAll<HTMLElement>('a,button')].filter((x) => x.offsetParent !== null);
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener('keydown', trap);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', trap); lastFocus.current?.focus(); };
  }, []);

  const acc = (t: string, items: NavItem[], extra?: React.ReactNode) => (
    <div className="macc">
      <button type="button" aria-expanded={openAcc === t} onClick={() => setOpenAcc(openAcc === t ? '' : t)}>{t}<Icon name="down" /></button>
      <ul>{items.map((x) => <li key={x.title}><Link href={x.href} onClick={onClose}>{x.title}</Link></li>)}{extra}</ul>
    </div>
  );

  return createPortal(
    <div className={`layer ${shown ? 'open-layer' : ''}`}>
      <div className="site" style={{ position: 'absolute', inset: 0, background: 'transparent' }}>
        <div className="scrim" onClick={onClose} />
        <div className="sheet" role="dialog" aria-modal="true" aria-label="Menu" ref={ref}>
          <div className="sheet-top">
            <span className="logo" style={{ margin: 0 }}><LogoMark /><Wordmark /></span>
            <button className="icon-btn" type="button" aria-label="Close menu" onClick={onClose}><Icon name="x" /></button>
          </div>
          <div className="sheet-body">
            <Link className="btn btn-p btn-blk" href={isCol ? '/colleges/#demo' : APP_URL} onClick={onClose}>{isCol ? 'Book a demo' : 'Start practising free'}</Link>
            <div style={{ height: 12 }} />
            {acc('For students', STUDENT_NAV)}
            {acc('For colleges', COLLEGE_NAV, <li><Link href="/colleges/#demo" onClick={onClose}><b>Book a demo</b></Link></li>)}
            <Link className="mlink" href="/contests/code-nova-3/" onClick={onClose}>Contests<Icon name="arrow" /></Link>
            <Link className="mlink" href="/pricing/" onClick={onClose}>Pricing<Icon name="arrow" /></Link>
            {acc('Resources', RESOURCE_NAV)}
            <a className="mlink" href={LOGIN_URL}>Log in<Icon name="arrow" /></a>
          </div>
          <div className="sheet-foot">Need help? <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
