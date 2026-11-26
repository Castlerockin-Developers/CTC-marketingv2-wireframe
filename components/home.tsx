'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const calm = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CELL = 'absolute inset-0 flex items-center justify-center px-6';
function Logo({ c, alt }: { c: { slug: string; logoH: number }; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- static export; SVGs are tiny and scale themselves
  return <img src={`/images/logos/${c.slug}.svg`} alt={alt} style={{ height: c.logoH }} className="w-auto max-w-full transition-transform duration-500 ease-snap group-hover:scale-105 m:scale-90" decoding="async" />;
}

/* ---------- Company grid whose cells roll to the next set every few seconds (Rocketlane's logo wall) ---------- */
export function CompanySwap({ items, cells = 4, every = 3200 }: { items: { slug: string; name: string; logoH: number }[]; cells?: number; every?: number }) {
  const [k, setK] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const at = (set: number, i: number) => items[(set * cells + i) % items.length];

  useEffect(() => {
    if (calm() || items.length <= cells) return;
    let t: ReturnType<typeof setInterval> | undefined;
    // Only roll while visible, so it never moves off-screen or steals attention elsewhere.
    const io = new IntersectionObserver(([e]) => {
      clearInterval(t);
      if (e.isIntersecting) t = setInterval(() => setK((x) => x + 1), every);
    });
    if (root.current) io.observe(root.current);
    return () => { io.disconnect(); clearInterval(t); };
  }, [items.length, cells, every]);

  useGSAP(() => {
    if (k === 0) return;
    const q = gsap.utils.selector(root);
    gsap.fromTo(q('[data-prev]'), { yPercent: 0, opacity: 1 }, { yPercent: -100, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.075 });
    gsap.fromTo(q('[data-cur]'), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.075 });
  }, { dependencies: [k], scope: root });

  return (
    <div ref={root} className="grid grid-cols-4 border-l border-t border-line m:grid-cols-2">
      {Array.from({ length: cells }, (_, i) => {
        const cur = at(k, i), prev = k ? at(k - 1, i) : null;
        return (
          <Link key={i} href={`/prep/${cur.slug}/`} className="group relative h-[112px] overflow-hidden border-b border-r border-line !no-underline transition-colors duration-300 hover:bg-alt m:h-[88px]">
            {prev && <span data-prev aria-hidden="true" className={CELL}><Logo c={prev} alt="" /></span>}
            <span data-cur className={CELL}><Logo c={cur} alt={`${cur.name} test prep`} /></span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Auto-advancing feature tabs with a filling progress bar ---------- */
export type Tab = { title: string; body: ReactNode; visual: ReactNode };

export function FeatureTabs({ tabs, ms = 6000 }: { tabs: Tab[]; ms?: number }) {
  const [cur, setCur] = useState(0);
  const [run, setRun] = useState(false);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (calm()) return;
    const io = new IntersectionObserver(([e]) => setRun(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={root} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="relative overflow-hidden rounded-[24px] bg-[radial-gradient(90%_120%_at_0%_0%,#DCD5FF_0%,transparent_55%),radial-gradient(80%_110%_at_100%_100%,#BFE3FF_0%,transparent_60%),linear-gradient(135deg,#EEF0FF,#F4F8FF)]">
        <div className="grid aspect-[16/9] t:aspect-[4/3] m:aspect-auto m:min-h-[380px]">
          {tabs.map((t, i) => (
            <div key={t.title} id={`${id}-p${i}`} role="tabpanel" aria-labelledby={`${id}-t${i}`}
              className={`[grid-area:1/1] flex items-center justify-center p-12 transition-[opacity,transform,filter] duration-700 ease-snap m:p-5 ${i === cur ? 'opacity-100 scale-100 blur-0' : 'pointer-events-none opacity-0 scale-[.98] blur-[6px]'}`}
              inert={i !== cur}>
              <div className="w-full max-w-[520px] drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]">{t.visual}</div>
            </div>
          ))}
        </div>
      </div>
      <div role="tablist" aria-label="Features" className="mt-8 grid grid-cols-3 gap-6 m:grid-cols-1 m:gap-0">
        {tabs.map((t, i) => (
          <button key={t.title} id={`${id}-t${i}`} role="tab" type="button" aria-selected={i === cur} aria-controls={`${id}-p${i}`} onClick={() => setCur(i)}
            className={`group relative cursor-pointer bg-transparent pt-5 text-left transition-colors duration-300 m:pb-4 ${i === cur ? '' : 'opacity-60 hover:opacity-100'}`}>
            <span className="absolute inset-x-0 top-0 h-px bg-line" />
            {i === cur && <span key={cur} className="absolute inset-x-0 top-0 h-[2px] origin-left bg-ink" style={run ? { animation: `tab-fill ${ms}ms linear both`, animationPlayState: paused ? 'paused' : 'running' } : undefined}
              onAnimationEnd={() => setCur((c) => (c + 1) % tabs.length)} />}
            <span className="block font-head text-[17px] font-medium leading-6 text-ink">{t.title}</span>
            <span className={`mt-2 block text-[15px] leading-6 text-body ${i === cur ? '' : 'm:hidden'}`}>{t.body}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Sticky chapter rail: which part of the story you are in, and how far through it ---------- */
export function ChapterRail({ items }: { items: [string, string][] }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    items.forEach(([, id], i) => {
      const fill = root.current?.querySelectorAll<HTMLElement>('[data-fill]')[i];
      const link = root.current?.querySelectorAll<HTMLElement>('a')[i];
      const sec = document.getElementById(id);
      if (!fill || !sec || !link) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 50%', end: 'bottom 50%',
        onUpdate: (s) => { fill.style.transform = `scaleX(${s.progress})`; },
        onToggle: (s) => link.toggleAttribute('data-on', s.isActive),
      });
    });
  }, { scope: root });
  return (
    <nav ref={root} aria-label="On this page" className="sticky top-28 t:hidden">
      <ol className="list-none">
        {items.map(([t, id]) => (
          <li key={id} className="mb-5">
            <a href={`#${id}`} className="group block pb-2 text-[12px] font-medium uppercase leading-4 tracking-[.06em] text-muted !no-underline transition-colors hover:text-ink data-[on]:text-ink">
              {t}
              <span className="relative mt-2 block h-px bg-line"><span data-fill className="absolute inset-0 origin-left scale-x-0 bg-ink" /></span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
