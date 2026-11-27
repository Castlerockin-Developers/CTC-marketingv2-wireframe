'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './ui';
import { btn, SITE, tw } from './tw';
import { BrandLogo } from './Logo';
import { APP_URL, LOGIN_URL, COLLEGE_NAV, EMAIL, RESOURCE_NAV, STUDENT_NAV, type NavItem } from '@/content/site';
import { PHONE } from '@/content/dummy';

type Sub = { title: string; cta: string; chip: string };

const NAV_LINK = "inline-flex items-center gap-1 min-h-11 px-3 rounded-[10px] bg-transparent !text-l900 text-[15px] font-medium !no-underline cursor-pointer relative hover:!text-l950 hover:bg-l50 t:px-2 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:transition-transform [&_svg]:duration-fast [&[aria-current]]:!text-l950 [&[aria-current]]:after:content-[''] [&[aria-current]]:after:absolute [&[aria-current]]:after:left-3 [&[aria-current]]:after:right-3 [&[aria-current]]:after:bottom-1 [&[aria-current]]:after:h-[3px] [&[aria-current]]:after:rounded-sm [&[aria-current]]:after:bg-l400";
// mega-menu panel; its rules reach every link and label inside, including the footer button
const DD = "absolute top-[calc(100%+8px)] -left-2 bg-white border border-l200 rounded-2xl shadow-3 p-3 grid gap-1 z-[60] before:content-[''] before:absolute before:left-0 before:right-0 before:-top-2.5 before:h-2.5 [&_a]:flex [&_a]:gap-3 [&_a]:py-2.5 [&_a]:px-3 [&_a]:rounded-[10px] [&_a]:!no-underline [&_a]:!text-inherit [&_a]:min-h-11 [&_a]:items-start [&_a:hover]:bg-l50 [&_b]:block [&_b]:text-l950 [&_b]:text-[15px] [&_b]:leading-[22px] [&_b]:font-semibold [&_span]:block [&_span]:text-l700 [&_span]:text-[13px] [&_span]:leading-[19px]";
const DD_SHUT = 'opacity-0 invisible -translate-y-1 [transition:opacity_var(--t-fast),transform_var(--t-fast),visibility_0s_linear_var(--t-fast)] group-hover:opacity-100 group-hover:visible group-hover:[transform:none] group-hover:[transition-delay:0s] group-focus-within:opacity-100 group-focus-within:visible group-focus-within:[transform:none] group-focus-within:[transition-delay:0s]';
const DD_OPEN = 'opacity-100 visible [transform:none] [transition:opacity_var(--t-fast),transform_var(--t-fast),visibility_0s_linear_var(--t-fast)] [transition-delay:0s]';
const MROW = 'w-full flex items-center justify-between min-h-14 bg-transparent !text-l950 text-[18px] leading-7 font-semibold !no-underline cursor-pointer p-0 text-left';

const ddItems = (items: NavItem[], close: () => void) =>
  items.map((x) => (
    <Link className="group/item" key={x.title} href={x.href} onClick={close}>
      <span className="!inline-flex flex-none w-10 h-10 rounded-[10px] m-0 items-center justify-center bg-tint !text-act [transition:background-color_160ms_var(--ease-out),color_160ms_var(--ease-out)] group-hover/item:bg-act group-hover/item:!text-white [&_svg]:w-5 [&_svg]:h-5"><Icon name={x.icon} /></span>
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
    <div className="relative group">
      <button className={`${NAV_LINK} group-hover:[&_svg]:rotate-180 ${open === key ? '[&_svg]:rotate-180' : ''}`} type="button" aria-expanded={open === key} aria-haspopup="true" aria-current={act === key ? 'true' : undefined} onClick={() => setOpen(open === key ? null : key)}>
        {label}<Icon name="down" />
      </button>
      <div className={`${DD} ${cls === 'narrow' ? 'w-[320px] grid-cols-[1fr]' : 'w-[600px] grid-cols-[1fr_1fr]'} ${open === key ? DD_OPEN : DD_SHUT}`}>{ddItems(items, close)}{foot}</div>
    </div>
  );

  const cta = isCol ? 'Book a demo' : 'Start free';
  const ctaHref = isCol ? '/colleges/#demo' : APP_URL;

  return (
    <>
      <a className="absolute left-4 -top-[60px] z-[100] bg-act !text-white py-2.5 px-4 rounded-[10px] font-semibold !no-underline focus:top-3" href="#main">Skip to content</a>
      <header className={`sticky top-0 z-40 bg-[rgba(255,255,255,.8)] [backdrop-filter:saturate(1.8)_blur(20px)] border-b [transition:border-color_var(--t-med),box-shadow_var(--t-med)] ${scrolled ? 'border-b-line' : 'border-transparent'}`}>
        <div className={`${tw.wrap} flex items-center gap-2 h-[72px] m:h-16`}>
          <Link className={`${tw.logo} mr-4 m:mr-auto`} href="/" aria-label="Crack The Campus home"><BrandLogo /></Link>
          <nav className="flex items-center gap-0.5 m:hidden" aria-label="Main" ref={navRef}>
            {navBtn('For students', 'stu', STUDENT_NAV)}
            {navBtn('For colleges', 'col', COLLEGE_NAV, '', (
              <div className="col-[1/-1] border-t border-l200 mt-1.5 pt-2.5 px-3 pb-0.5 flex justify-between items-center gap-3"><span className={tw.cap}>See the admin suite with your own use case.</span><Link className={btn('p', { sm: true })} data-btn="p" href="/colleges/#demo" onClick={close}>Book a demo</Link></div>
            ))}
            <Link className={NAV_LINK} href="/contests/code-nova-3/" aria-current={act === 'contests' ? 'page' : undefined}>Contests</Link>
            <Link className={NAV_LINK} href="/pricing/" aria-current={act === 'pricing' ? 'page' : undefined}>Pricing</Link>
            {navBtn('Resources', 'res', RESOURCE_NAV, 'narrow')}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a className="!text-l900 !no-underline font-medium text-[15px] min-h-11 inline-flex items-center px-3 rounded-[10px] hover:!text-l950 hover:bg-l50 m:hidden" href={LOGIN_URL}>Log in</a>
            <Link className={btn('p', { sm: true })} data-btn="p" href={ctaHref}><span className={tw.dOnly}>{cta}</span><span className={tw.mOnlyInline}>{isCol ? 'Demo' : 'Start free'}</span></Link>
            <button className="w-11 h-11 rounded-[10px] border border-l200 bg-white text-l950 items-center justify-center cursor-pointer [&_svg]:w-[22px] [&_svg]:h-[22px] !hidden m:!inline-flex" type="button" aria-label="Open menu" aria-expanded={menu} onClick={() => setMenu(true)}><Icon name="menu" /></button>
          </div>
        </div>
        {sub && (
          <div className="border-t border-l200 bg-l50 m:hidden"><div className={`${tw.wrap} flex items-center gap-4 h-14`}><b className="text-l950 font-head text-[16px]">{sub.title}</b><span className={tw.chip}>{sub.chip}</span><span style={{ marginLeft: 'auto' }} /><a className={btn('p', { sm: true })} data-btn="p" href={APP_URL}>{sub.cta}</a></div></div>
        )}
        {progress && <div className="absolute left-0 -bottom-px h-[3px] w-0 bg-[linear-gradient(90deg,var(--lav),var(--act))] transition-[width] duration-[80ms] ease-linear" style={{ width: `${prog * 100}%` }} aria-hidden="true" />}
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
    <div className="border-b border-l200 [&_li_a]:flex [&_li_a]:items-center [&_li_a]:min-h-12 [&_li_a]:px-3 [&_li_a]:rounded-[10px] [&_li_a]:!text-l900 [&_li_a]:!no-underline [&_li_a]:text-[16px] [&_li_a:hover]:bg-l50">
      <button className={`${MROW} [&_svg]:w-5 [&_svg]:h-5 [&_svg]:transition-transform [&_svg]:duration-fast aria-expanded:[&_svg]:rotate-180`} type="button" aria-expanded={openAcc === t} onClick={() => setOpenAcc(openAcc === t ? '' : t)}>{t}<Icon name="down" /></button>
      <ul className={`list-none pb-3 ${openAcc === t ? 'block' : 'hidden'}`}>{items.map((x) => <li key={x.title}><Link href={x.href} onClick={onClose}>{x.title}</Link></li>)}{extra}</ul>
    </div>
  );

  return createPortal(
    <div className={tw.layer}>
      <div className={`site ${SITE}`} style={{ position: 'absolute', inset: 0, background: 'transparent' }}>
        <div className={`${tw.scrim} ${shown ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
        <div className={`absolute top-0 right-0 bottom-0 w-full bg-white flex flex-col transition-transform duration-med ease-site ${shown ? '[transform:none]' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Menu" ref={ref}>
          <div className="flex items-center justify-between h-16 px-5 border-b border-l200">
            <span className={tw.logo} style={{ margin: 0 }}><BrandLogo /></span>
            <button className={tw.iconBtn} type="button" aria-label="Close menu" onClick={onClose}><Icon name="x" /></button>
          </div>
          <div className="flex-1 overflow-auto p-5 overscroll-contain">
            <Link className={btn('p', { blk: true })} data-btn="p" href={isCol ? '/colleges/#demo' : APP_URL} onClick={onClose}>{isCol ? 'Book a demo' : 'Start practising free'}</Link>
            <div style={{ height: 12 }} />
            {acc('For students', STUDENT_NAV)}
            {acc('For colleges', COLLEGE_NAV, <li><Link href="/colleges/#demo" onClick={onClose}><b>Book a demo</b></Link></li>)}
            <Link className={`${MROW} border-b border-l200`} href="/contests/code-nova-3/" onClick={onClose}>Contests<Icon name="arrow" /></Link>
            <Link className={`${MROW} border-b border-l200`} href="/pricing/" onClick={onClose}>Pricing<Icon name="arrow" /></Link>
            {acc('Resources', RESOURCE_NAV)}
            <a className={`${MROW} border-b border-l200`} href={LOGIN_URL}>Log in<Icon name="arrow" /></a>
          </div>
          <div className="pt-4 px-5 pb-6 border-t border-l200 text-[14px] text-l700">Need help? <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
