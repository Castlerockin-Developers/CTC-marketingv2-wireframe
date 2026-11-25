'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './ui';
import { GUIDES, POST_SLUG, type Guide } from '@/content/site';
import { AUTHOR } from '@/content/dummy';

const CATS = ['All', 'Company guides', 'Aptitude', 'Coding', 'Interviews', 'Resume', 'Assessments', 'Contests', 'For colleges'];
const FEATURED = { title: 'How to prepare for campus placement: a step-by-step plan', summary: 'A step-by-step plan for campus placements: aptitude, coding, company tests, resume and interviews, by year of study.', cats: ['Company guides', 'Assessments'] };

function Cover({ alt }: { alt: string }) {
  return <figure className="ph" style={{ aspectRatio: '16/9' }} role="img" aria-label={alt}><span className="ph-ic"><Icon name="image" /></span></figure>;
}

export function PostCard({ g }: { g: Guide }) {
  // shortcut: only the featured guide is written; the rest are listed as "Coming soon" until their articles exist.
  return (
    <article className="card post-c">
      <Cover alt={g.alt} />
      <div className="pc">
        <div className="row" style={{ gap: 8 }}><span className="badge b-v">{g.cat}</span><span className="badge b-warn">Coming soon</span></div>
        <h3>{g.title}</h3><p>{g.summary}</p>
        <p className="meta">{AUTHOR.name}, {g.read}</p>
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
      <form className="search" role="search" onSubmit={(e) => e.preventDefault()} style={{ marginTop: -16, marginBottom: 32 }}>
        <label className="sr" htmlFor="gsearch">Search guides</label><Icon name="search" />
        <input className="inp" id="gsearch" type="search" placeholder="Search guides: Infosys, aptitude, resume…" value={q} onChange={(e) => setQ(e.target.value)} />
      </form>
      <div className="filters" role="group" aria-label="Filter guides by category">
        {CATS.map((c) => <button key={c} type="button" className="fchip" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <p className="cap center" style={{ marginTop: 12 }} aria-live="polite">{cat === 'All' && !q ? '' : `${n} guide${n === 1 ? '' : 's'} shown`}</p>
      {featShown && (
        <article className="feat" style={{ marginTop: 32 }}>
          <figure className="ph" role="img" aria-label="Engineering student planning placement preparation with a laptop and a weekly checklist"><span className="ph-ic"><Icon name="image" /></span></figure>
          <div className="fb">
            <div className="row" style={{ gap: 8 }}><span className="badge b-gold">Featured</span>{FEATURED.cats.map((c) => <span className="badge b-v" key={c}>{c}</span>)}</div>
            <h2 className="h3">{FEATURED.title}</h2><p className="body-sm">{FEATURED.summary}</p>
            <p className="cap">{AUTHOR.name}, updated {AUTHOR.updated}, 8 min read</p>
            <div><Link className="btn btn-s" href={`/guides/${POST_SLUG}/`}>Read the guide</Link></div>
          </div>
        </article>
      )}
      <div className="cols c3" style={{ marginTop: 32 }}>
        {shown.slice(0, 2).map((g) => <PostCard key={g.slug} g={g} />)}
        {cat === 'All' && !q && (
          <article className="card card-i promo-c">
            <span className="ic gold"><Icon name="target" /></span><h3 className="h3s">Try 10 free company-style questions</h3>
            <p>Pick Infosys, Wipro or Capgemini and see your score in 15 minutes. No sign-up needed to start.</p>
            <div style={{ marginTop: 'auto', paddingTop: 20 }}><Link className="btn btn-p btn-blk" href="/prep/infosys/#sample">Start a free sample test</Link></div>
          </article>
        )}
        {shown.slice(2).map((g) => <PostCard key={g.slug} g={g} />)}
      </div>
      {n === 0 && <p className="center lead" style={{ marginTop: 32 }}>No guides match that yet. Try another word or category.</p>}
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
    <nav className="toc" aria-label="On this page">
      <p className="tt">On this page</p>
      <ol>{items.map(([id, t]) => <li key={id}><a href={`#${id}`} className={on === id ? 'on' : ''} aria-current={on === id ? 'location' : undefined}>{t}</a></li>)}</ol>
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
    <div className="layer open-layer">
      <div className="site" style={{ position: 'absolute', inset: 0, background: 'transparent' }}>
        <div className="scrim" onClick={() => setOpen(false)} />
        <div className="modal-wrap" style={{ pointerEvents: 'none' }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mh" style={{ pointerEvents: 'auto' }}>
            <button ref={closeRef} className="icon-btn x" type="button" aria-label="Close" onClick={() => setOpen(false)}><Icon name="x" /></button>
            <span className="ic gold"><Icon name="target" /></span>
            <h2 className="h3s" id="mh">Try 10 free company-style questions</h2>
            <p className="body-sm" style={{ margin: '8px 0 24px' }}>Pick Infosys, Wipro or Capgemini and see your score in 15 minutes. No sign-up needed to start.</p>
            <Link className="btn btn-p btn-blk" href="/prep/infosys/#sample">Start a free sample test</Link>
            <div className="center" style={{ marginTop: 8 }}><button className="btn btn-g" type="button" onClick={() => setOpen(false)}>No thanks</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
