'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Frame, Icon } from './ui';
import { btn, INP, SITE, tw } from './tw';
import { GUIDES, POST_SLUG, type Guide } from '@/content/site';
import { AUTHOR } from '@/content/dummy';

const CATS = ['All', 'Company guides', 'Aptitude', 'Coding', 'Interviews', 'Resume', 'Assessments', 'Contests', 'For colleges'];
const FEATURED = { title: 'How to prepare for campus placement: a step-by-step plan', summary: 'A step-by-step plan for campus placements: aptitude, coding, company tests, resume and interviews, by year of study.', cats: ['Company guides', 'Assessments'] };

const Cover = ({ g }: { g: Guide }) => <Frame className="!border-0 !rounded-none" src={`/images/guides/${g.slug}.jpg`} alt={g.alt} ratio="16/9" />;

export function PostCard({ g }: { g: Guide }) {
  // shortcut: only the featured guide is written; the rest are listed as "Coming soon" until their articles exist.
  return (
    <article className={`${tw.card} ${tw.cardBd} p-0 overflow-hidden`}>
      <Cover g={g} />
      <div className="pt-5 px-6 pb-6 flex flex-col gap-2.5 flex-1">
        <div className={tw.row} style={{ gap: 8 }}><span className={`${tw.badge} ${tw.bV}`}>{g.cat}</span><span className={`${tw.badge} ${tw.bWarn}`}>Coming soon</span></div>
        <h3 className="font-head text-[20px] leading-7 text-tx !mb-0">{g.title}</h3><p>{g.summary}</p>
        <p className="!text-[13.5px] !text-tx3 mt-auto">{AUTHOR.name}, {g.read}</p>
      </div>
    </article>
  );
}

export function GuideList() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const match = (text: string, cats: string[]) => (cat === 'All' || cats.includes(cat)) && (!q || text.toLowerCase().includes(q.toLowerCase()));
  const shown = GUIDES.filter((g) => match(g.title + g.summary, [g.cat]));
  const featShown = match(FEATURED.title + FEATURED.summary, FEATURED.cats);
  const n = shown.length + (featShown ? 1 : 0);

  return (
    <>
      <form className="relative max-w-[560px] mt-8 mx-auto [&_svg]:absolute [&_svg]:left-4 [&_svg]:top-1/2 [&_svg]:-translate-y-1/2 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-tx3" role="search" onSubmit={(e) => e.preventDefault()} style={{ marginTop: -16, marginBottom: 32 }}>
        <label className={tw.sr} htmlFor="gsearch">Search guides</label><Icon name="search" />
        <input className={`${INP} border-l500 pl-12 pr-3.5 !min-h-14 !rounded-[14px]`} id="gsearch" type="search" placeholder="Search guides: Infosys, aptitude, resume…" value={q} onChange={(e) => setQ(e.target.value)} />
      </form>
      <div className="flex gap-2 flex-wrap justify-center m:flex-nowrap m:overflow-x-auto m:justify-start m:mx-[calc(var(--mar)*-1)] m:pt-0.5 m:px-mar m:pb-2" role="group" aria-label="Filter guides by category">
        {CATS.map((c) => <button key={c} type="button" className="min-h-11 px-[18px] rounded-full border border-l200 bg-white text-l900 font-medium text-[15px] cursor-pointer whitespace-nowrap hover:border-l500 hover:text-l950 aria-pressed:bg-act aria-pressed:text-white aria-pressed:border-act" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <p className={`${tw.cap} text-center`} style={{ marginTop: 12 }} aria-live="polite">{cat === 'All' && !q ? '' : `${n} guide${n === 1 ? '' : 's'} shown`}</p>
      {featShown && (
        <article className="grid grid-cols-[7fr_5fr] gap-0 bg-white border border-l200 rounded-[20px] overflow-hidden m:grid-cols-[1fr] m:rounded-2xl" style={{ marginTop: 32 }}>
          <Frame className="!border-0 !rounded-none !min-h-[360px] m:!min-h-[200px]" src={`/images/guides/${POST_SLUG}.jpg`} alt="Study desk with a laptop showing a timed aptitude test and a handwritten weekly placement checklist" />
          <div className="p-10 flex flex-col justify-center gap-3.5 m:p-6">
            <div className={tw.row} style={{ gap: 8 }}><span className={`${tw.badge} ${tw.bGold}`}>Featured</span>{FEATURED.cats.map((c) => <span className={`${tw.badge} ${tw.bV}`} key={c}>{c}</span>)}</div>
            <h2 className={tw.h3}>{FEATURED.title}</h2><p className={tw.sm}>{FEATURED.summary}</p>
            <p className={tw.cap}>{AUTHOR.name}, updated {AUTHOR.updated}, 8 min read</p>
            <div><Link className={btn('s')} data-btn="s" href={`/guides/${POST_SLUG}/`}>Read the guide</Link></div>
          </div>
        </article>
      )}
      <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids" style={{ marginTop: 32 }}>
        {shown.slice(0, 2).map((g) => <PostCard key={g.slug} g={g} />)}
        {cat === 'All' && !q && (
          <article className={`${tw.card} p-6 ${tw.cardI} bg-[linear-gradient(160deg,var(--tint),var(--tint2))] !border-tint2 text-l900 [&_h3]:text-l950 [&_p]:!text-l900`}>
            <span className={`${tw.ic} ${tw.icGold}`}><Icon name="target" /></span><h3 className={tw.h3s}>Try 10 free company-style questions</h3>
            <p>Pick Infosys, Wipro or Capgemini and see your score in 15 minutes. No sign-up needed to start.</p>
            <div style={{ marginTop: 'auto', paddingTop: 20 }}><Link className={btn('p', { blk: true })} data-btn="p" href="/prep/infosys/#sample">Start a free sample test</Link></div>
          </article>
        )}
        {shown.slice(2).map((g) => <PostCard key={g.slug} g={g} />)}
      </div>
      {n === 0 && <p className={`text-center ${tw.lead}`} style={{ marginTop: 32 }}>No guides match that yet. Try another word or category.</p>}
    </>
  );
}

/* ---------- Article TOC with scroll-spy ---------- */
export function Toc({ items }: { items: [string, string][] }) {
  const [on, setOn] = useState(items[0][0]);
  useEffect(() => {
    const f = () => {
      let cur = items[0][0];
      for (const [id] of items) { const h = document.getElementById(id); if (h && h.getBoundingClientRect().top < 240) cur = id; } // h2 scroll-margin (120) + header padding (88) lands headings at ~208px
      setOn(cur);
    };
    f(); // correct state when landing on a #section link
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, [items]);
  return (
    <nav className="sticky top-[104px] self-start m:hidden" aria-label="On this page">
      <p className="text-[13px] font-semibold tracking-normal normal-case text-tx3 mb-3">On this page</p>
      <ol className="list-none border-l-2 border-l200">{items.map(([id, t]) => <li key={id}><a href={`#${id}`} className={`block py-[7px] pr-0 pl-4 -ml-0.5 border-l-2 !no-underline text-[14.5px] leading-[21px] hover:!text-tx ${on === id ? 'border-l400 !text-l800 font-semibold' : 'border-transparent !text-tx2'}`} aria-current={on === id ? 'location' : undefined}>{t}</a></li>)}</ol>
    </nav>
  );
}

/* ---------- Exit-intent modal: guide posts only, desktop, once per visitor ---------- */
export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let seen = false;
    try { seen = localStorage.getItem('ctc-exit') === '1'; } catch { /* storage blocked */ }
    if (seen || window.matchMedia('(max-width:767px)').matches) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 40) return;
      setOpen(true);
      try { localStorage.setItem('ctc-exit', '1'); } catch { /* storage blocked */ }
      document.removeEventListener('mouseout', onLeave);
    };
    document.addEventListener('mouseout', onLeave);
    return () => document.removeEventListener('mouseout', onLeave);
  }, []);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open]);
  if (!open) return null;
  return (
    <div className={tw.layer}>
      <div className={`site ${SITE}`} style={{ position: 'absolute', inset: 0, background: 'transparent' }}>
        <div className={`${tw.scrim} opacity-100`} onClick={() => setOpen(false)} />
        <div className="absolute inset-0 flex items-center justify-center p-5" style={{ pointerEvents: 'none' }}>
          <div className="relative bg-white border border-l200 rounded-2xl shadow-3 w-full max-w-[480px] p-8 transition-[transform,opacity] duration-med ease-site overscroll-contain m:py-7 m:px-5" role="dialog" aria-modal="true" aria-labelledby="mh" style={{ pointerEvents: 'auto' }}>
            <button ref={closeRef} className={`${tw.iconBtn} absolute top-3 right-3`} type="button" aria-label="Close" onClick={() => setOpen(false)}><Icon name="x" /></button>
            <span className={`${tw.ic} ${tw.icGold}`}><Icon name="target" /></span>
            <h2 className={tw.h3s} id="mh">Try 10 free company-style questions</h2>
            <p className={tw.sm} style={{ margin: '8px 0 24px' }}>Pick Infosys, Wipro or Capgemini and see your score in 15 minutes. No sign-up needed to start.</p>
            <Link className={btn('p', { blk: true })} data-btn="p" href="/prep/infosys/#sample">Start a free sample test</Link>
            <div className="text-center" style={{ marginTop: 8 }}><button className={btn('g')} data-btn="g" type="button" onClick={() => setOpen(false)}>No thanks</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
