'use client';
import Link from 'next/link';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const calm = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Co = { slug: string; name: string; logoH: number };

/** Company logo SVG at its tuned optical height. */
export function Logo({ c, alt = '', className = '' }: { c: { slug: string; logoH: number }; alt?: string; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- static export; SVGs are tiny and scale themselves
  return <img src={`/images/logos/${c.slug}.svg`} alt={alt} style={{ height: c.logoH }} className={`w-auto max-w-full ${className}`} decoding="async" />;
}

const CELL = 'absolute inset-0 flex items-center justify-center px-6';
const CELL_LOGO = 'transition-transform duration-500 ease-snap group-hover:scale-105 m:scale-90';

/* ---------- Company logo grid whose cells roll to the next set every few seconds ---------- */
export function CompanySwap({ items, cells = 4, every = 3200 }: { items: Co[]; cells?: number; every?: number }) {
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
    <div ref={root} className="grid grid-cols-4 border-l border-t border-line bg-white m:grid-cols-2">
      {Array.from({ length: cells }, (_, i) => {
        const cur = at(k, i), prev = k ? at(k - 1, i) : null;
        return (
          <Link key={i} href={`/prep/${cur.slug}/`} className="group relative h-[112px] overflow-hidden border-b border-r border-line !no-underline transition-colors duration-300 hover:bg-alt m:h-[88px]">
            {prev && <span data-prev aria-hidden="true" className={CELL}><Logo c={prev} className={CELL_LOGO} /></span>}
            <span data-cur className={CELL}><Logo c={cur} alt={`${cur.name} test prep`} className={CELL_LOGO} /></span>
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
    <div ref={root} className="grid grid-cols-[5fr_7fr] items-center gap-14 t:grid-cols-1 t:gap-8"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div role="tablist" aria-label="Features" aria-orientation="vertical" className="flex flex-col">
        {tabs.map((t, i) => (
          <button key={t.title} id={`${id}-t${i}`} role="tab" type="button" aria-selected={i === cur} aria-controls={`${id}-p${i}`} onClick={() => setCur(i)}
            className={`relative flex cursor-pointer flex-col items-start justify-start border-l-2 border-line bg-transparent py-5 pl-6 text-left transition-opacity duration-300 ${i === cur ? '' : 'opacity-55 hover:opacity-100'}`}>
            {i === cur && <span key={cur} className="absolute -left-[2px] top-0 h-full w-[2px] origin-top bg-act" style={run ? { animation: `tab-fill-y ${ms}ms linear both`, animationPlayState: paused ? 'paused' : 'running' } : undefined}
              onAnimationEnd={() => setCur((c) => (c + 1) % tabs.length)} />}
            <span className="block font-head text-[19px] font-bold leading-7 text-ink">{t.title}</span>
            {/* body opens like an accordion under the active tab */}
            <span className={`grid transition-[grid-template-rows] duration-500 ease-snap ${i === cur ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <span className="overflow-hidden"><span className="block pt-2 text-[15px] leading-6 text-body">{t.body}</span></span>
            </span>
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[24px] bg-[radial-gradient(90%_120%_at_0%_0%,#DCD5FF_0%,transparent_55%),radial-gradient(80%_110%_at_100%_100%,#BFE3FF_0%,transparent_60%),linear-gradient(135deg,#EEF0FF,#F4F8FF)]">
        <div className="grid aspect-[4/3] t:aspect-[16/10] m:aspect-auto m:min-h-[320px]">
          {tabs.map((t, i) => (
            <div key={t.title} id={`${id}-p${i}`} role="tabpanel" aria-labelledby={`${id}-t${i}`}
              className={`[grid-area:1/1] flex items-center justify-center p-10 transition-[opacity,transform,filter] duration-700 ease-snap m:p-5 ${i === cur ? 'opacity-100 scale-100 blur-0' : 'pointer-events-none opacity-0 scale-[.98] blur-[6px]'}`}
              inert={i !== cur}>
              <div className="w-full max-w-[440px] drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]">{t.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Journey bar: sticky under the header across the three chapters, filling as you read each ---------- */
export function JourneyBar({ items }: { items: [string, string][] }) {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    items.forEach(([, id], i) => {
      const fill = root.current?.querySelectorAll<HTMLElement>('[data-fill]')[i];
      const link = root.current?.querySelectorAll<HTMLElement>('a')[i];
      const sec = document.getElementById(id);
      if (!fill || !sec || !link) return;
      ScrollTrigger.create({
        trigger: sec, start: 'top 60%', end: 'bottom 60%',
        onUpdate: (s) => { fill.style.transform = `scaleX(${s.progress})`; },
        onToggle: (s) => link.toggleAttribute('data-on', s.isActive),
      });
    });
  }, { scope: root });
  return (
    <nav ref={root} aria-label="How it works" className="sticky top-[72px] z-30 border-b border-line bg-white/85 backdrop-blur-xl m:top-16">
      <ol className="mx-auto flex max-w-[calc(1200px+var(--mar)*2)] list-none gap-8 px-mar m:gap-4">
        {items.map(([t, id], i) => (
          <li key={id} className="flex-1">
            <a href={`#${id}`} className="group block pt-3.5 text-[14px] font-medium leading-5 text-muted !no-underline transition-colors hover:text-ink data-[on]:text-ink m:text-[13px]">
              <span className="mr-2 font-mono text-[12px] text-act m:hidden">0{i + 1}</span>{t}
              <span className="relative mt-3 block h-[2px] bg-transparent"><span data-fill className="absolute inset-0 origin-left scale-x-0 bg-act" /></span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
