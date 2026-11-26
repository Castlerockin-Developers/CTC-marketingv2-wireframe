import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';
import {
  ArrowRight, BookOpen, Building2, Calendar, Camera, ChartColumn, Check, CircleAlert, CircleCheck, Clock, Code, CreditCard,
  Download, Eye, FileText, Hourglass, Image as ImageIcon, Info, Instagram, Layers, LayoutGrid, Linkedin, Lock, Mail, MapPin,
  MessageCircle, Monitor, Phone, Play, Quote, RefreshCw, Search, Server, ShieldCheck, Sigma, Sparkles, Star, Target, Trophy,
  User, Users, Youtube, ChevronDown, Menu, X, type LucideIcon,
} from 'lucide-react';
import type { Quote as Q } from '@/content/dummy';

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

type BtnKind = 'p' | 's' | 'g';
export function Btn({ href = '#', kind = 'p', className = '', children }: { href?: string; kind?: BtnKind; className?: string; children: ReactNode }) {
  return <Link className={`btn btn-${kind} ${className}`} href={href}>{children}</Link>;
}

export function ArrowLink({ href = '#', children, className = '' }: { href?: string; children: ReactNode; className?: string }) {
  return <Link className={`arrow-link ${className}`} href={href}>{children}<Icon name="arrow" /></Link>;
}

export function Sec({ className = '', id, style, children }: { className?: string; id?: string; style?: CSSProperties; children: ReactNode }) {
  return <section className={`sec ${className}`} id={id} style={style}><div className="wrap">{children}</div></section>;
}

export function Head({ eb, h, p, center, id }: { eb?: string; h: ReactNode; p?: ReactNode; center?: boolean; id?: string }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`}>
      {eb && <span className="eyebrow">{eb}</span>}
      <h2 className="h2" id={id}>{h}</h2>
      {p && <p className="lead">{p}</p>}
    </div>
  );
}

export function Checks({ items, className = '', style }: { items: ReactNode[]; className?: string; style?: CSSProperties }) {
  return <ul className={`checks ${className}`} style={style}>{items.map((t, k) => <li key={k}><Icon name="checkc" /><span>{t}</span></li>)}</ul>;
}

export const Chips = ({ items }: { items: string[] }) => <div className="chips">{items.map((c) => <span className="chip" key={c}>{c}</span>)}</div>;

export const Micro = ({ children, icon = 'checkc', style }: { children: ReactNode; icon?: string; style?: CSSProperties }) => (
  <p className="micro" style={style}><Icon name={icon} /><span>{children}</span></p>
);

export const Note = ({ children }: { children: ReactNode }) => <p className="note-strip"><Icon name="info" />{children}</p>;

/** Striped image frame standing in for a real screenshot/photo. Alt text is the content doc's; no caption (taste rule 1). */
export function Frame({ alt, ratio = '16/10', icon = 'image', className = '', style, src, eager }: { alt: string; ratio?: string; icon?: string; className?: string; style?: CSSProperties; src?: string; eager?: boolean }) {
  if (src) return (
    <figure className={`ph ${className}`} style={{ aspectRatio: ratio, ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, images pre-compressed in public/images */}
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </figure>
  );
  return (
    <figure className={`ph ${className}`} style={{ aspectRatio: ratio, ...style }} role="img" aria-label={alt}>
      <span className="ph-ic"><Icon name={icon} /></span>
    </figure>
  );
}

export function Avatar({ name, size = 48 }: { name: string; size?: number }) {
  const initials = name.replace(/^(Dr\.|Prof\.)\s*/, '').split(' ').map((w) => w[0]).slice(0, 2).join('');
  return (
    <span className="ph round" role="img" aria-label={`Photo of ${name}`} style={{ width: size, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size / 3, color: 'var(--l800)' }}>
      <span style={{ position: 'relative' }}>{initials}</span>
    </span>
  );
}

export function Crumb({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumb" aria-label="Breadcrumb">
      <ol>{items.map(([t, href], k) => (k < items.length - 1 ? <li key={t}><Link href={href || '/'}>{t}</Link></li> : <li key={t} aria-current="page">{t}</li>))}</ol>
    </nav>
  );
}

export function Quotes({ items, scroll = true }: { items: Q[]; scroll?: boolean }) {
  return (
    <div className={`cols c3 ${scroll ? 'hscroll' : ''}`}>
      {items.map((q) => (
        <figure className="card quote" key={q.name + q.text.slice(0, 8)}>
          <span className="qm"><Icon name="quote" /></span>
          <blockquote>“{q.text}”</blockquote>
          <figcaption><span className="who"><b>{q.name}</b><span>{q.meta}</span></span></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Proof({ label, stats, logos }: { label: string; stats: [string, string][]; logos?: string[] }) {
  return (
    <div className="proof">
      <span className="lab">{label}</span>
      <div className="stats">{stats.map(([b, s]) => <div className="stat" key={s}><b>{b}</b><span>{s}</span></div>)}</div>
      {logos && <div className="logos" aria-label="Partner colleges">{logos.map((l) => <div className="logo-slot" key={l}>{l}</div>)}</div>}
    </div>
  );
}

export function Band({ h, p, cta, cta2, micro, hide = true }: { h: string; p?: string; cta: ReactNode; cta2?: ReactNode; micro?: string; hide?: boolean }) {
  return (
    <section className="band" data-hide-sticky={hide ? '' : undefined}>
      <div className="wrap"><div className="panel">
        <h2 className="h2">{h}</h2>
        {p && <p>{p}</p>}
        <div className="cta-row">{cta}{cta2}</div>
        {micro && <p className="micro">{micro}</p>}
      </div></div>
    </section>
  );
}

export function ScoreCard({ big }: { big?: boolean }) {
  return (
    <div className={`score ${big ? 'big' : ''}`} role="img" aria-label="Example CTC Score card showing 7.8 out of 10 with a breakdown by skills, practice and proctored performance">
      <div className="top"><span className="lbl">CTC Score</span><span className="badge b-n">Example</span></div>
      <div className="num">7.8<small>/ 10</small></div>
      {[['Skills', 78, ''], ['Practice', 64, ''], ['Proctored performance', 84, 'g']].map(([l, w, c]) => (
        <div className={`bar ${c}`} key={l}><div className="bl"><span>{l}</span></div><div className="bt"><i style={{ width: `${w}%` }} /></div></div>
      ))}
    </div>
  );
}

/* Product UI drawn in markup (real screens of the app, not illustrations). Decorative to AT; the wrapper carries the label. */
export function PracticeWin({ label = 'Web app, company prep', q = 'A train 240 m long passes a pole in 16 s. How long will it take to cross a 360 m platform?', opts = ['32 s', '40 s', '45 s'], sel = 1, tags = ['Quant', 'Reasoning', 'Verbal'] }: { label?: string; q?: string; opts?: string[]; sel?: number; tags?: string[] }) {
  return (
    <div className="win ui" aria-hidden="true">
      <div className="win-bar"><i /><i /><i /><span>{label}</span></div>
      <div className="win-body">
        <div className="ui-tags">{tags.map((t, k) => <span className={`badge ${k ? 'b-n' : 'b-v'}`} key={t}>{t}</span>)}</div>
        <p className="ui-q">{q}</p>
        {opts.map((o, k) => <div className={`opt ${k === sel ? 'sel' : ''}`} key={o}><i />{o}</div>)}
      </div>
    </div>
  );
}

export function ProctorWin() {
  return (
    <div className="win ui" aria-hidden="true">
      <div className="win-bar"><i /><i /><i /><span>Desktop app, proctored</span></div>
      <div className="win-body">
        <div className="ui-row"><span className="rec">Proctoring on</span><span className="timer"><Icon name="clock" />42:18</span></div>
        <div className="ui-cam"><span className="ui-face" /><span className="ui-cam-l"><Icon name="camera" />Camera check passed</span></div>
        <div className="ui-row"><span className="badge b-n">Q 14 / 40</span><span className="badge b-v">Screen locked</span></div>
      </div>
    </div>
  );
}

/** College readiness dashboard. Example numbers, labelled as such. */
export function DashWin({ title = 'Batch 2026, readiness by department', rows = [['CSE', 82], ['ISE', 74], ['ECE', 61], ['EEE', 48], ['Mech', 39]], unit = 'ready', label = 'Admin suite' }: { title?: string; rows?: [string, number][]; unit?: string; label?: string }) {
  return (
    <div className="win ui" aria-hidden="true">
      <div className="win-bar"><i /><i /><i /><span>{label}</span></div>
      <div className="win-body">
        <div className="ui-row"><b className="ui-t">{title}</b><span className="badge b-n">Example</span></div>
        {rows.map(([d, v]) => (
          <div className="bar" key={d}><div className="bl"><span>{d}</span><span className="num-s">{v}% {unit}</span></div><div className="bt"><i style={{ width: `${v}%` }} /></div></div>
        ))}
      </div>
    </div>
  );
}

export function VaultWin() {
  const files: [string, string][] = [['Unit 3, DBMS notes.pdf', 'Indexed'], ['OS lab manual.pdf', 'Indexed'], ['Aptitude drill, week 6.pptx', 'Processing']];
  return (
    <div className="win ui" aria-hidden="true">
      <div className="win-bar"><i /><i /><i /><span>Curriculum vault</span></div>
      <div className="win-body">
        {files.map(([f, s]) => <div className="ui-file" key={f}><Icon name="file" /><span>{f}</span><span className={`badge ${s === 'Indexed' ? 'b-v' : 'b-n'}`}>{s}</span></div>)}
        <div className="ui-ask"><Icon name="chat" />Ask the AI tutor about Unit 3</div>
      </div>
    </div>
  );
}

/** Labelled wrapper for a product-UI visual (replaces striped placeholders). */
export const Shot = ({ alt, children, className = '' }: { alt: string; children: ReactNode; className?: string }) => (
  <div className={`ui-frame ${className}`} role="img" aria-label={alt}>{children}</div>
);

export function Composite() {
  return (
    <div className="comp" role="img" aria-label="Crack The Campus practice question with a sample CTC Score card">
      <div className="comp-main"><PracticeWin /></div>
      <div className="comp-score" aria-hidden="true"><ScoreCard /></div>
    </div>
  );
}

export function Card({ icon, title, children, href, link, className = '', iconClass = '' }: { icon?: string; title: string; children?: ReactNode; href?: string; link?: string; className?: string; iconClass?: string }) {
  return (
    <article className={`card ${href ? 'card-i' : ''} ${className}`}>
      {icon && <span className={`ic ${iconClass}`}><Icon name={icon} /></span>}
      <h3 className="h3s">{title}</h3>
      {children && <p>{children}</p>}
      {href && link && <Link className="arrow-link stretch" href={href}>{link}<Icon name="arrow" /></Link>}
    </article>
  );
}

export function Timeline({ items }: { items: { t: string; p: string; tag?: string }[] }) {
  return (
    <ol className="tl">
      {items.map((s, k) => (
        <li key={s.t}><span className="n">{String(k + 1).padStart(2, '0')}</span>
          <div><h3 className="h4">{s.t} {s.tag && <span className="badge b-n" style={{ marginLeft: 6 }}>{s.tag}</span>}</h3><p>{s.p}</p></div>
        </li>
      ))}
    </ol>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
