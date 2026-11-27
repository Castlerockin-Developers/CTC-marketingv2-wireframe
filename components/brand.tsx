import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './ui';
import { Logo } from './home';
import { tw } from './tw';
import { COMPANIES } from '@/content/site';
import type { Quote } from '@/content/dummy';

// Shared building blocks of the v4 look (first built for the homepage): one filled pill per screen with an
// arrow chip, underlined text links for everything secondary, painted art cards, result cards.
type PillKind = 'act' | 'white';
const PILL: Record<PillKind, [string, string]> = {
  act: ['bg-act !text-white hover:bg-act-h', 'bg-white text-act'],
  white: ['bg-white !text-ink hover:bg-alt', 'bg-act text-white'],
};

/** The one filled button on a screen: label plus a round arrow chip that nudges on hover. */
export function Pill({ href, kind = 'act', children, className = '' }: { href: string; kind?: PillKind; children: ReactNode; className?: string }) {
  const [base, chip] = PILL[kind];
  return (
    <Link href={href} className={`group inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-1.5 text-[16px] font-medium !no-underline transition-colors duration-300 ${base} ${className}`}>
      {children}
      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${chip} [&_svg]:h-4 [&_svg]:w-4 [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-0.5`}><Icon name="arrow" /></span>
    </Link>
  );
}

/** Secondary action: an underlined text link with a sliding arrow (light or on-dark). */
export function TextLink({ href, children, dark, className = '' }: { href: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-1.5 text-[16px] font-medium underline decoration-1 underline-offset-4 ${dark ? '!text-white decoration-white/50 hover:decoration-white' : '!text-ink decoration-line-2 hover:decoration-ink'} ${className}`}>
      {children}<span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
    </Link>
  );
}

/** Painted illustration card: image drifts on scroll (data-parallax), content sits on top. */
export function Art({ src, pos = '50% 50%', className = '', shade = 'bg-[linear-gradient(180deg,rgba(8,16,48,.38),rgba(8,16,48,.05)_40%,rgba(8,16,48,.62))]', children, eager }: { src: string; pos?: string; className?: string; shade?: string; children: ReactNode; eager?: boolean }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-[32px] m:rounded-[20px] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export; art is pre-compressed in public/images/art */}
      <img src={src} alt="" data-parallax loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async"
        className="absolute inset-x-0 -top-[8%] -z-10 h-[116%] w-full object-cover" style={{ objectPosition: pos }} />
      <div className={`absolute inset-0 -z-10 ${shade}`} />
      {children}
    </div>
  );
}

export const H2 = 'font-head text-h2 font-medium tracking-[-.02em] text-ink';
export const initials = (n: string) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');
const placedAt = (q: Quote) => COMPANIES.find((c) => q.meta.includes(`placed at ${c.name}`));
const scoreIn = (q: Quote) => q.meta.match(/CTC Score ([\d.]+)/)?.[1];

/** Student result card: the outcome (company logo or score) is the headline, the quote backs it up. */
export function Scorecard({ q }: { q: Quote }) {
  const co = placedAt(q), score = scoreIn(q);
  return (
    <figure className="mt-20 grid grid-cols-[220px_1fr] overflow-hidden rounded-[24px] border border-line bg-white m:mt-14 m:grid-cols-1" data-reveal="">
      <div className="flex flex-col justify-between gap-6 bg-alt p-7 m:flex-row m:items-center m:p-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white font-head text-[20px] font-bold text-muted" aria-hidden="true">{initials(q.name)}</span>
        {co ? <span><span className="block text-[12px] font-medium uppercase tracking-[.08em] text-muted">Placed at</span><span className="mt-2 flex h-8 items-center"><Logo c={co} alt={co.name} /></span></span>
          : score ? <span><span className="block text-[12px] font-medium uppercase tracking-[.08em] text-muted">CTC Score</span><span className="font-mono text-[34px] font-medium leading-none text-act">{score}<span className="text-[16px] text-muted"> / 10</span></span></span> : null}
      </div>
      <div className="p-8 m:p-6">
        <blockquote className="m-0 font-head text-[22px] font-bold leading-[32px] tracking-[-.01em] text-ink m:text-[19px] m:leading-7">“{q.text}”</blockquote>
        <figcaption className="mt-4 text-[15px] text-body"><b className="font-medium text-ink">{q.name}</b> · {co || score ? q.meta.replace(/,\s*(placed at|CTC Score) .*$/, '') : q.meta}</figcaption>
      </div>
    </figure>
  );
}

export const GLOW = 'rounded-[24px] bg-[radial-gradient(90%_120%_at_0%_0%,#DCD5FF_0%,transparent_55%),radial-gradient(80%_110%_at_100%_100%,#BFE3FF_0%,transparent_60%),linear-gradient(135deg,#EEF0FF,#F4F8FF)]';
export const GLASS = 'rounded-[24px] border border-white/15 bg-white/[.08] p-8 text-white backdrop-blur-xl m:p-6';

/** Painted page banner for hub pages: eyebrow, H1, one line, one filled button, optional text link. */
export function PageBanner({ art, pos, eyebrow, h1, sub, cta, link, crumb }: { art: string; pos?: string; eyebrow?: string; h1: string; sub: string; cta?: [string, string]; link?: [string, string]; crumb?: ReactNode }) {
  return (
    <section className="px-4 pt-2 m:px-2" data-hide-sticky>
      <Art src={art} pos={pos} eager className="flex min-h-[520px] flex-col justify-end m:min-h-[460px]" shade="bg-[linear-gradient(180deg,rgba(8,16,48,.25),rgba(8,16,48,.15)_35%,rgba(8,16,48,.7))]">
        <div className={`${tw.wrap} w-full pb-14 pt-24 m:pb-10`}>
          {crumb && <div className="mb-5 text-white/80 [&_a]:!text-white/85 [&_li]:text-white/70">{crumb}</div>}
          {eyebrow && <p className="text-[15px] font-medium text-white/85">{eyebrow}</p>}
          <h1 className="mt-3 max-w-[820px] text-balance font-head text-h1 font-bold tracking-[-.02em] text-white [text-shadow:0_2px_24px_rgba(0,10,40,.3)]">{h1}</h1>
          <p className="mt-5 max-w-[640px] text-lead text-white/90">{sub}</p>
          {(cta || link) && <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">{cta && <Pill href={cta[1]} kind="white">{cta[0]}</Pill>}{link && <TextLink href={link[1]} dark className="rounded-full bg-[rgba(10,24,70,.32)] px-4 backdrop-blur-md">{link[0]}</TextLink>}</div>}
        </div>
      </Art>
    </section>
  );
}
