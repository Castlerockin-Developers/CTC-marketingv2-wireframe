import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';
import {
  ArrowRight, BookOpen, Building2, Calendar, Camera, ChartColumn, Check, CircleAlert, CircleCheck, Clock, Code, CreditCard,
  Download, Eye, FileText, Hourglass, Image as ImageIcon, Info, Instagram, Layers, LayoutGrid, Linkedin, Lock, Mail, MapPin,
  MessageCircle, Monitor, Phone, Play, Quote, RefreshCw, Search, Server, ShieldCheck, Sigma, Sparkles, Star, Target, Trophy,
  User, Users, Youtube, ChevronDown, Menu, X, type LucideIcon,
} from 'lucide-react';
import type { Quote as Q } from '@/content/dummy';
import { btn, card, tw, type BtnKind } from './tw';

const ICONS: Record<string, LucideIcon> = {
  arrow: ArrowRight, book: BookOpen, building: Building2, cal: Calendar, camera: Camera, chart: ChartColumn, check: Check,
  alert: CircleAlert, checkc: CircleCheck, clock: Clock, code: Code, card: CreditCard, dl: Download, eye: Eye, file: FileText,
  hourglass: Hourglass, image: ImageIcon, info: Info, instagram: Instagram, layers: Layers, grid: LayoutGrid, linkedin: Linkedin,
  lock: Lock, mail: Mail, pin: MapPin, chat: MessageCircle, monitor: Monitor, phone: Phone, play: Play, quote: Quote,
  refresh: RefreshCw, search: Search, server: Server, shield: ShieldCheck, sigma: Sigma, spark: Sparkles, star: Star,
  target: Target, trophy: Trophy, user: User, users: Users, youtube: Youtube, down: ChevronDown, menu: Menu, x: X,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Info;
  return <C className={className} strokeWidth={1.75} aria-hidden="true" />;
}

export function Btn({ href = '#', kind = 'p', sm, blk, className = '', children }: { href?: string; kind?: BtnKind; sm?: boolean; blk?: boolean; className?: string; children: ReactNode }) {
  return <Link className={`${btn(kind, { sm, blk })} ${className}`} data-btn={kind} href={href}>{children}</Link>;
}

export const ARROW = 'font-semibold !no-underline inline-flex items-center gap-1.5 min-h-11 hover:!underline [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:transition-transform [&_svg]:duration-fast [&_svg]:ease-site hover:[&_svg]:translate-x-[3px]';
export function ArrowLink({ href = '#', children, className = '' }: { href?: string; children: ReactNode; className?: string }) {
  return <Link className={`${ARROW} ${className}`} href={href}>{children}<Icon name="arrow" /></Link>;
}

export function Sec({ className = '', id, style, children }: { className?: string; id?: string; style?: CSSProperties; children: ReactNode }) {
  return <section className={`${tw.sec} ${className}`} id={id} style={style}><div className={tw.wrap}>{children}</div></section>;
}

export function Head({ eb, h, p, center, id }: { eb?: string; h: ReactNode; p?: ReactNode; center?: boolean; id?: string }) {
  return (
    <div className={`mb-12 max-w-[760px] m:mb-8 ${center ? 'mx-auto text-center' : ''}`} data-reveal="">
      {eb && <span className={`${tw.eyebrow} mb-3`}>{eb}</span>}
      <h2 className={tw.h2} id={id}>{h}</h2>
      {p && <p className={`${tw.lead} mt-4`}>{p}</p>}
    </div>
  );
}

export const CHECKS = 'list-none grid gap-3';
export const CHECK_LI = 'flex gap-3 items-start [&_svg]:w-5 [&_svg]:h-5 [&_svg]:flex-none [&_svg]:mt-1 [&_svg]:text-act';
export function Checks({ items, className = '', style }: { items: ReactNode[]; className?: string; style?: CSSProperties }) {
  return <ul className={`${CHECKS} ${className}`} style={style}>{items.map((t, k) => <li className={CHECK_LI} key={k}><Icon name="checkc" /><span>{t}</span></li>)}</ul>;
}
/** two-column Checks */
export const CHECKS2 = 'grid-cols-[1fr_1fr] gap-x-8 gap-y-3 m:grid-cols-[1fr]';

export const Chips = ({ items }: { items: string[] }) => <div className="flex gap-2 flex-wrap mt-6">{items.map((c) => <span className={tw.chip} key={c}>{c}</span>)}</div>;

export const MICRO = 'text-[14px] leading-5 text-tx3 flex gap-2 items-start [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-act [&_svg]:mt-0.5';
export const Micro = ({ children, icon = 'checkc', style, className = '' }: { children: ReactNode; icon?: string; style?: CSSProperties; className?: string }) => (
  <p className={`${MICRO} ${className}`} style={style}><Icon name={icon} /><span>{children}</span></p>
);

export const NOTE = 'block text-[13.5px] leading-5 text-tx3 mt-5 [&_svg]:!inline-block [&_svg]:w-4 [&_svg]:h-4 [&_svg]:align-[-3px] [&_svg]:mr-2';
export const Note = ({ children }: { children: ReactNode }) => <p className={NOTE}><Icon name="info" />{children}</p>;

const PH_BASE = 'relative overflow-hidden bg-tint border border-l200 flex flex-col';
export const PH = `${PH_BASE} rounded-xl justify-end min-h-[120px] has-[img]:bg-alt`;
export const PH_IC = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-14 h-14 rounded-[14px] bg-white flex items-center justify-center text-muted [&_svg]:w-[26px] [&_svg]:h-[26px]';
/** Striped image frame standing in for a real screenshot/photo. Alt text is the content doc's; no caption (taste rule 1). */
export function Frame({ alt, ratio = '16/10', icon = 'image', className = '', style, src, eager }: { alt: string; ratio?: string; icon?: string; className?: string; style?: CSSProperties; src?: string; eager?: boolean }) {
  if (src) return (
    <figure className={`${PH} ${className}`} style={{ aspectRatio: ratio, ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images pre-compressed in public/images */}
      <img className="absolute inset-0 w-full h-full object-cover" src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </figure>
  );
  return (
    <figure className={`${PH} ${className}`} style={{ aspectRatio: ratio, ...style }} role="img" aria-label={alt}>
      <span className={PH_IC}><Icon name={icon} /></span>
    </figure>
  );
}

export function Avatar({ name, size = 48, className = '' }: { name: string; size?: number; className?: string }) {
  const initials = name.replace(/^(Dr\.|Prof\.)\s*/, '').split(' ').map((w) => w[0]).slice(0, 2).join('');
  return (
    <span className={`${PH_BASE} rounded-full min-h-0 aspect-square justify-center w-9 flex-none ${className}`} role="img" aria-label={`Photo of ${name}`} style={{ width: size, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size / 3, color: 'var(--l800)' }}>
      <span style={{ position: 'relative' }}>{initials}</span>
    </span>
  );
}

export function Crumb({ items }: { items: [string, string?][] }) {
  return (
    <nav className="text-[14px] text-tx3 mb-6 m:mb-4" aria-label="Breadcrumb">
      <ol className="list-none flex gap-2 flex-wrap items-center [&>li+li]:before:content-['/'] [&>li+li]:before:mr-2 [&>li+li]:before:text-l300">{items.map(([t, href], k) => (k < items.length - 1 ? <li key={t}><Link className="!text-tx2 !no-underline hover:!underline" href={href || '/'}>{t}</Link></li> : <li key={t} aria-current="page">{t}</li>))}</ol>
    </nav>
  );
}

export const QUOTE = 'flex flex-col gap-5';
export const QM = 'w-8 h-8 text-lav';
export const QUOTE_BQ = 'm-0 text-[18px] leading-7 text-tx font-medium';
export const QUOTE_CAP = 'flex gap-3 items-center mt-auto';
export const QUOTE_WHO = 'block text-tx text-[15px]';
export function Quotes({ items, scroll = true }: { items: Q[]; scroll?: boolean }) {
  return (
    <div className={`${tw.cols} ${tw.c3} ${scroll ? tw.hscroll : ''}`} data-reveal="kids">
      {items.map((q) => (
        <figure className={`${card()} ${QUOTE}`} key={q.name + q.text.slice(0, 8)}>
          <span className={QM}><Icon name="quote" /></span>
          <blockquote className={QUOTE_BQ}>“{q.text}”</blockquote>
          <figcaption className={QUOTE_CAP}><span><b className={QUOTE_WHO}>{q.name}</b><span className="text-[14px] text-tx3">{q.meta}</span></span></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Proof({ label, stats, logos }: { label: string; stats: [string, string][]; logos?: string[] }) {
  return (
    <div>
      <span className="block text-center text-[14px] font-semibold tracking-normal normal-case text-tx3 mb-7">{label}</span>
      <div className="grid grid-cols-[repeat(4,1fr)] border border-l200 rounded-2xl bg-white m:grid-cols-[1fr_1fr]">{stats.map(([b, s]) => (
        <div className="p-6 text-center border-l200 [&+&]:border-l m:py-5 m:px-3 m:[&+&]:border-l-0 m:even:!border-l m:[&:nth-child(n+3)]:border-t" data-reveal="" key={s}>
          <b className="block font-head font-medium text-[30px] leading-[38px] text-tx tracking-[-.01em] tabular-nums m:text-[24px] m:leading-[30px]">{b}</b>
          <span className="block text-[15px] leading-[22px] text-tx2 mt-1 m:text-[14px] m:leading-5">{s}</span>
        </div>
      ))}</div>
      {logos && <div className="grid grid-cols-[repeat(6,1fr)] gap-4 mt-6 m:grid-cols-[repeat(3,1fr)] m:gap-2.5" aria-label="Partner colleges">{logos.map((l) => (
        <div className="h-16 border border-dashed border-l300 rounded-xl flex items-center justify-center text-center text-[12px] leading-4 text-l700 p-2 bg-white m:h-auto m:min-h-14 m:leading-[14px]" key={l}>{l}</div>
      ))}</div>}
    </div>
  );
}

const BAND_PANEL = "relative rounded-[32px] py-24 px-16 [background:radial-gradient(60%_100%_at_50%_0%,rgba(91,68,227,.35),transparent_70%),#0B0B0F] text-center overflow-hidden [&>*]:relative [&>*]:z-[1] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(rgba(255,255,255,.10)_1px,transparent_1px)] after:bg-[length:22px_22px] after:[mask-image:radial-gradient(circle_at_80%_10%,#000,transparent_60%)] m:rounded-none m:py-14 m:px-5";
const BAND_P = '!text-[#CFC9E8] max-w-[620px] mt-4 mx-auto text-[18px] leading-7 m:text-[16px] m:leading-[26px]';
const BAND_LINKS = '[&_a:not([data-btn])]:!text-white [&_a:not([data-btn])]:min-h-11 [&_a:not([data-btn])]:inline-flex [&_a:not([data-btn])]:items-center [&_a:not([data-btn])]:justify-center [&_a:not([data-btn])]:px-2';
const BAND_BTNS = '[&_[data-btn=p]]:bg-white [&_[data-btn=p]]:!text-ink [&_[data-btn=p]:hover]:bg-alt [&_[data-btn=s]]:bg-transparent [&_[data-btn=s]]:border-[rgba(255,255,255,.45)] [&_[data-btn=s]]:!text-white [&_[data-btn=s]:hover]:bg-[rgba(255,255,255,.08)] [&_[data-btn=s]:hover]:border-white';
export function Band({ h, p, cta, cta2, micro, hide = true }: { h: string; p?: string; cta: ReactNode; cta2?: ReactNode; micro?: string; hide?: boolean }) {
  return (
    <section className="py-sec relative overflow-hidden bg-white m:p-0 [&_:focus-visible]:outline-lav" data-hide-sticky={hide ? '' : undefined}>
      <div className={`${tw.wrap} m:!px-0`}><div className={BAND_PANEL} data-reveal="">
        <h2 className={`${tw.h2} !text-white max-w-[760px] mx-auto`}>{h}</h2>
        {p && <p className={BAND_P}>{p}</p>}
        <div className={`${tw.ctaRow} justify-center mt-8 m:flex-col m:items-stretch ${BAND_LINKS} ${BAND_BTNS}`}>{cta}{cta2}</div>
        {micro && <p className={`${MICRO} justify-center mt-4 !text-[#CFC9E8]`}>{micro}</p>}
      </div></div>
    </section>
  );
}

export function Bar({ label, w, g }: { label: ReactNode; w: number; g?: boolean }) {
  return (
    <div className="mt-3">
      <div className="flex justify-between text-[13px] leading-[18px] mb-1.5 text-l900">{label}</div>
      <div className="h-2 rounded-lg bg-l100 overflow-hidden"><i className={`block h-full rounded-lg ${g ? 'bg-[linear-gradient(90deg,#7B66F0,var(--act-h))]' : 'bg-[linear-gradient(90deg,var(--lav),var(--act))]'}`} data-bar="" style={{ width: `${w}%` }} /></div>
    </div>
  );
}

export function ScoreCard({ big }: { big?: boolean }) {
  return (
    <div className={`bg-[linear-gradient(160deg,#FFFFFF,var(--l50))] border border-l200 rounded-2xl shadow-2 text-l900 ${big ? 'p-7' : 'p-5'}`} role="img" aria-label="Example CTC Score card showing 7.8 out of 10 with a breakdown by skills, practice and proctored performance">
      <div className="flex justify-between items-center mb-1.5"><span className="text-[13px] font-semibold tracking-normal normal-case text-l700">CTC Score</span><span className={`${tw.badge} ${tw.bN}`}>Example</span></div>
      <div className={`font-mono font-medium text-l800 tracking-[-.02em] ${big ? 'text-[72px] leading-[76px]' : 'text-[52px] leading-[56px]'}`}>7.8<small className="text-[20px] text-l700 ml-1">/ 10</small></div>
      {[['Skills', 78, ''], ['Practice', 64, ''], ['Proctored performance', 84, 'g']].map(([l, w, c]) => (
        <Bar key={l} label={<span>{l}</span>} w={w as number} g={c === 'g'} />
      ))}
    </div>
  );
}

const WIN = 'relative w-full bg-white border border-line rounded-[16px] shadow-2 overflow-hidden';
const WIN_BAR = 'h-9 flex items-center px-4 border-b border-line bg-white text-[12px] font-medium text-muted';
const UI_ROW = 'flex justify-between items-center gap-2 mb-3 last:mt-3.5 last:mb-0';
const BADGE_N = `${tw.badge} ${tw.bN}`;
const BADGE_V = `${tw.badge} ${tw.bV}`;
/* Product UI drawn in markup (real screens of the app, not illustrations). Decorative to AT; the wrapper carries the label. */
export function PracticeWin({ label = 'Web app, company prep', q = 'A train 240 m long passes a pole in 16 s. How long will it take to cross a 360 m platform?', opts = ['32 s', '40 s', '45 s'], sel = 1, tags = ['Quant', 'Reasoning', 'Verbal'] }: { label?: string; q?: string; opts?: string[]; sel?: number; tags?: string[] }) {
  return (
    <div className={WIN} data-win="" aria-hidden="true">
      <div className={WIN_BAR}><span>{label}</span></div>
      <div className="p-4">
        <div className="flex gap-2 mb-3.5 flex-wrap">{tags.map((t, k) => <span className={k ? BADGE_N : BADGE_V} key={t}>{t}</span>)}</div>
        <p className="text-[14px] leading-5 text-ink font-semibold">{q}</p>
        {opts.map((o, k) => <div className={`flex items-center gap-2.5 border rounded-[10px] py-[9px] px-3 mt-2 text-[13px] text-l900 ${k === sel ? 'border-lav bg-tint' : 'border-l200'}`} key={o}><i className={`w-3.5 h-3.5 rounded-full border-[1.5px] flex-none ${k === sel ? 'border-act bg-[radial-gradient(var(--act)_40%,transparent_45%)]' : 'border-l500'}`} />{o}</div>)}
      </div>
    </div>
  );
}

export function ProctorWin() {
  return (
    <div className={WIN} data-win="" aria-hidden="true">
      <div className={WIN_BAR}><span>Desktop app, proctored</span></div>
      <div className="p-4">
        <div className={UI_ROW}><span className="inline-flex items-center gap-1.5 text-[11.5px] text-[#B42318] before:content-[''] before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#B42318]">Proctoring on</span><span className="font-mono font-medium text-l800 text-[13px] inline-flex gap-1.5 items-center"><Icon name="clock" />42:18</span></div>
        <div className="relative h-[120px] rounded-[10px] bg-[linear-gradient(160deg,#2A2550,var(--ink))] flex items-end p-2.5 overflow-hidden"><span className="absolute left-1/2 top-[22px] w-[54px] h-[54px] -ml-[27px] rounded-full border-2 border-lav shadow-[0_0_0_6px_rgba(162,148,249,.18)]" /><span className="relative inline-flex gap-1.5 items-center text-[12px] text-white bg-[rgba(255,255,255,.12)] py-1 px-2 rounded-full [&_svg]:w-3.5 [&_svg]:h-3.5"><Icon name="camera" />Camera check passed</span></div>
        <div className={UI_ROW}><span className={BADGE_N}>Q 14 / 40</span><span className={BADGE_V}>Screen locked</span></div>
      </div>
    </div>
  );
}

/** College readiness dashboard. Example numbers, labelled as such. */
export function DashWin({ title = 'Batch 2026, readiness by department', rows = [['CSE', 82], ['ISE', 74], ['ECE', 61], ['EEE', 48], ['Mech', 39]], unit = 'ready', label = 'Admin suite' }: { title?: string; rows?: [string, number][]; unit?: string; label?: string }) {
  return (
    <div className={WIN} data-win="" aria-hidden="true">
      <div className={WIN_BAR}><span>{label}</span></div>
      <div className="p-4">
        <div className={UI_ROW}><b className="text-[13px] text-ink">{title}</b><span className={BADGE_N}>Example</span></div>
        {rows.map(([d, v]) => <Bar key={d} label={<><span>{d}</span><span className="tabular-nums text-muted">{v}% {unit}</span></>} w={v} />)}
      </div>
    </div>
  );
}

export function VaultWin() {
  const files: [string, string][] = [['Unit 3, DBMS notes.pdf', 'Indexed'], ['OS lab manual.pdf', 'Indexed'], ['Aptitude drill, week 6.pptx', 'Processing']];
  return (
    <div className={WIN} data-win="" aria-hidden="true">
      <div className={WIN_BAR}><span>Curriculum vault</span></div>
      <div className="p-4">
        {files.map(([f, s]) => <div className="flex items-center gap-2.5 py-2.5 border-b border-line text-[13px] text-ink [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-act [&_svg]:flex-none" key={f}><Icon name="file" /><span className="flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{f}</span><span className={s === 'Indexed' ? BADGE_V : BADGE_N}>{s}</span></div>)}
        <div className="mt-3.5 flex gap-2 items-center text-[13px] text-muted border border-line-2 rounded-[10px] py-2.5 px-3 [&_svg]:w-4 [&_svg]:h-4"><Icon name="chat" />Ask the AI tutor about Unit 3</div>
      </div>
    </div>
  );
}

/** Labelled wrapper for a product-UI visual (replaces striped placeholders). */
export const Shot = ({ alt, children, className = '' }: { alt: string; children: ReactNode; className?: string }) => (
  <div className={`relative rounded-[20px] bg-[linear-gradient(160deg,var(--tint),var(--alt))] border border-line p-[clamp(20px,4vw,40px)] flex items-center [&>*]:w-full ${className}`} role="img" aria-label={alt} data-reveal="">{children}</div>
);

export function Composite() {
  return (
    <div className="relative h-auto pb-[150px] m:pb-0" role="img" aria-label="Crack The Campus practice question with a sample CTC Score card">
      <div className="w-[84%] m:w-full"><PracticeWin /></div>
      <div className="absolute right-0 bottom-0 w-[46%] top-auto m:!relative m:!top-auto m:!w-[82%] m:!mt-[-28px] m:!mr-0 m:!mb-0 m:!ml-auto" aria-hidden="true"><ScoreCard /></div>
    </div>
  );
}

export function Card({ icon, title, children, href, link, className = '', iconClass = '' }: { icon?: string; title: string; children?: ReactNode; href?: string; link?: string; className?: string; iconClass?: string }) {
  return (
    <article className={`${card({ i: !!href })} ${className}`}>
      {icon && <span className={`${tw.ic} ${iconClass}`}><Icon name={icon} /></span>}
      <h3 className={tw.h3s}>{title}</h3>
      {children && <p>{children}</p>}
      {href && link && <Link className={`${ARROW} ${tw.stretch} mt-auto pt-3`} href={href}>{link}<Icon name="arrow" /></Link>}
    </article>
  );
}

export function Timeline({ items }: { items: { t: string; p: string; tag?: string }[] }) {
  return (
    <ol className="grid grid-cols-[repeat(4,1fr)] gap-6 list-none relative before:content-[''] before:absolute before:top-[22px] before:left-[22px] before:right-[22px] before:h-0.5 before:bg-[linear-gradient(90deg,var(--l400),var(--l200))] m:grid-cols-[1fr] m:gap-0 m:before:bottom-[22px] m:before:left-[21px] m:before:right-auto m:before:w-0.5 m:before:h-auto">
      {items.map((s, k) => (
        <li className="relative m:grid m:grid-cols-[44px_1fr] m:gap-x-4 m:gap-y-0 m:pb-7 m:last:pb-0" key={s.t}><span className="w-11 h-11 rounded-full bg-act text-white font-mono font-medium flex items-center justify-center relative z-[1] mb-5 shadow-[0_0_0_6px_var(--bg)] m:m-0 m:row-[1/3]">{String(k + 1).padStart(2, '0')}</span>
          <div><h3 className={`${tw.h4} mb-1.5`}>{s.t} {s.tag && <span className={BADGE_N} style={{ marginLeft: 6 }}>{s.tag}</span>}</h3><p className="text-[15px] leading-6">{s.p}</p></div>
        </li>
      ))}
    </ol>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
