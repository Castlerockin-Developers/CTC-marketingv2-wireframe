'use client';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Icon } from './ui';
import { btn, INP, tw } from './tw';
import type { Faq as FaqT } from '@/content/site';

/* ---------- FAQ / module accordion ---------- */
const FAQ_BTN = 'group w-full flex gap-4 justify-between items-center text-left bg-transparent py-5 px-1 min-h-16 cursor-pointer !text-tx font-body font-semibold text-h4 hover:!text-l700 m:py-4 m:px-0 m:min-h-14';
// +/- icon: two bars drawn with ::before/::after; the vertical one rotates flat when open
const FAQ_PM = "flex-none w-9 h-9 rounded-full border border-l500 relative transition-[transform,background] duration-med ease-site m:w-8 m:h-8 group-aria-expanded:bg-act group-aria-expanded:border-act group-aria-expanded:text-white before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:w-3.5 before:h-0.5 before:-mt-px before:-ml-[7px] before:bg-current before:rounded-sm before:transition-transform before:duration-med before:ease-site after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:w-3.5 after:h-0.5 after:-mt-px after:-ml-[7px] after:bg-current after:rounded-sm after:transition-transform after:duration-med after:ease-site after:rotate-90 group-aria-expanded:after:rotate-0";
export function Faq({ items, openFirst = true }: { items: (FaqT | [ReactNode, string, ReactNode?])[]; openFirst?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(new Set(openFirst ? [0] : []));
  const id = useId();
  const toggle = (k: number) => setOpen((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  return (
    <div className="border-t border-l200" data-reveal="">
      {items.map((q, k) => (
        <div className="border-b border-l200" key={k}>
          <h3>
            <button className={FAQ_BTN} type="button" aria-expanded={open.has(k)} aria-controls={`${id}-${k}`} onClick={() => toggle(k)}>
              <span>{q[0]}</span>{q[2]}<span className={FAQ_PM} aria-hidden="true" />
            </button>
          </h3>
          <div className={`grid transition-[grid-template-rows] duration-med ease-site ${open.has(k) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} id={`${id}-${k}`} role="region"><div className="overflow-hidden"><p className="pt-0 pr-14 pb-6 pl-1 text-[16px] leading-[26px] text-tx2 m:p-0 m:pb-5">{q[1]}</p></div></div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Sticky mobile CTA: hidden while any [data-hide-sticky] block is on screen ---------- */
export function StickyCta({ title, sub, cta, href = '#' }: { title: string; sub: ReactNode; cta: string; href?: string }) {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    const vis = new Set<Element>();
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => (e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)));
      setHide(vis.size > 0);
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-hide-sticky]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className={`${tw.sticky} ${hide ? 'translate-y-[110%] opacity-0 pointer-events-none' : ''}`} role="region" aria-label="Quick action">
      <div className={tw.stickyText}><b>{title}</b>{sub}</div>
      <a className={btn('p', { size: 'min-h-12 px-[18px]' })} data-btn="p" href={href}>{cta}</a>
    </div>
  );
}

/* ---------- Mobile footer column accordion ---------- */
export function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  const [o, setO] = useState(false);
  return (
    <div className={`m:border-b border-l200 [&_ul]:list-none [&_ul]:mt-3 m:[&_ul]:mt-0 m:[&_ul]:mb-3 [&_a]:!text-l900 [&_a]:!no-underline [&_a]:inline-flex [&_a]:items-center [&_a]:min-h-9 [&_a:hover]:!text-l950 [&_a:hover]:!underline m:[&_a]:min-h-11 ${o ? 'm:[&_ul]:block' : 'm:[&_ul]:hidden'}`}>
      <h2><button className="bg-transparent p-0 text-l950 font-body font-semibold text-[14px] leading-5 tracking-[.02em] cursor-default flex justify-between w-full text-left m:min-h-[52px] m:items-center m:cursor-pointer m:text-[15px] [&_svg]:hidden [&_svg]:w-5 [&_svg]:h-5 m:[&_svg]:block m:[&_svg]:transition-transform m:[&_svg]:duration-fast m:aria-expanded:[&_svg]:rotate-180" type="button" aria-expanded={o} onClick={() => setO(!o)}>{title}<Icon name="down" /></button></h2>
      {children}
    </div>
  );
}

/* ---------- Countdown to an ISO date ---------- */
export function Countdown({ iso, seconds = false, label }: { iso: string; seconds?: boolean; label: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, new Date(iso).getTime() - (now ?? Date.now()));
  const parts: [number, string][] = [[Math.floor(diff / 864e5), 'days'], [Math.floor(diff / 36e5) % 24, 'hours'], [Math.floor(diff / 6e4) % 60, 'minutes']];
  if (seconds) parts.push([Math.floor(diff / 1e3) % 60, 'seconds']);
  return (
    <div className="flex gap-2.5 m:gap-1.5" role="timer" aria-label={label}>
      {parts.map(([v, u]) => <div className="min-w-[76px] py-3 px-2.5 rounded-xl bg-white border border-l200 text-center m:min-w-0 m:flex-1 m:py-2.5 m:px-1" key={u}><b className="block font-mono font-medium text-[28px] leading-[34px] text-l800 tabular-nums m:text-[22px] m:leading-7" suppressHydrationWarning>{now === null ? '--' : String(v).padStart(2, '0')}</b><span className="text-[12px] tracking-normal normal-case text-l700">{u}</span></div>)}
    </div>
  );
}

/* ---------- Form fields + validation (mock: no network, success state only) ---------- */
export type FieldDef = { name: string; label: string; type?: 'text' | 'email' | 'tel' | 'select' | 'textarea'; ph?: string; help?: string; err?: string; req?: 'text' | 'email' | 'phone'; options?: string[]; full?: boolean; optional?: boolean; ac?: string };

const valid = (t: FieldDef['req'], v: string) => {
  v = v.trim();
  if (t === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  if (t === 'phone') return /^\d{10}$/.test(v.replace(/[\s-]/g, '').replace(/^\+?91/, ''));
  return !!v;
};

export function Field({ f, value, bad, onChange, onBlur }: { f: FieldDef; value: string; bad: boolean; onChange: (v: string) => void; onBlur: () => void }) {
  const id = useId();
  const common = {
    id, name: f.name, className: `${INP} ${!bad && f.req && value && valid(f.req, value) ? 'border-[#067647]' : 'border-l500'} ${f.type === 'select' ? 'pl-3.5 pr-10 appearance-none bg-[url("data:image/svg+xml,%3Csvg_xmlns=%27http://www.w3.org/2000/svg%27_width=%2720%27_height=%2720%27_fill=%27none%27_stroke=%27%236A6683%27_stroke-width=%272%27_viewBox=%270_0_24_24%27%3E%3Cpath_d=%27m6_9_6_6_6-6%27/%3E%3C/svg%3E")] bg-no-repeat bg-[position:right_12px_center]' : 'px-3.5'} ${f.type === 'textarea' ? 'min-h-[120px] resize-y' : ''}`, value,
    'aria-invalid': bad || undefined, 'aria-describedby': `${id}-h ${id}-e`, onBlur,
    onChange: (e: { target: { value: string } }) => onChange(e.target.value),
  };
  return (
    <div className={`flex flex-col gap-1.5 ${f.full ? 'col-[1/-1]' : ''}`}>
      <label className="text-[14px] leading-5 font-medium text-tx" htmlFor={id}>{f.label}{f.optional && <span className="text-tx3 font-normal"> (optional)</span>}</label>
      {f.type === 'select' ? (
        <select {...common}><option value="">{f.ph || 'Select'}</option>{f.options?.map((o) => <option key={o}>{o}</option>)}</select>
      ) : f.type === 'textarea' ? (
        <textarea {...common} placeholder={f.ph} />
      ) : (
        <input {...common} type={f.type || 'text'} placeholder={f.ph} autoComplete={f.ac || (f.type === 'email' ? 'email' : f.type === 'tel' ? 'tel' : undefined)} inputMode={f.type === 'tel' ? 'numeric' : undefined} spellCheck={f.type === 'email' ? false : undefined} />
      )}
      {f.help ? <span className={`text-[13px] leading-[18px] text-tx3 ${bad ? 'hidden' : ''}`} id={`${id}-h`}>{f.help}</span> : <span id={`${id}-h`} hidden />}
      <span className={`text-[13.5px] leading-[18px] text-[#B42318] gap-1.5 items-start font-medium [&_svg]:w-4 [&_svg]:h-4 [&_svg]:flex-none [&_svg]:mt-px ${bad ? 'flex' : 'hidden'}`} id={`${id}-e`} role="alert"><Icon name="alert" /><span>{f.err || 'Please fill in this field.'}</span></span>
    </div>
  );
}

export function MockForm({ fields, submit, className = '', grid = true, children, success, btnClass = btn('p', { blk: true }), note }: {
  fields: FieldDef[]; submit: string; className?: string; grid?: boolean; children?: ReactNode; btnClass?: string; note?: ReactNode;
  /** `{field}` tokens are filled from the submitted values, e.g. 'Thanks, {name}.' ({name} = first word). */
  success: { title: string; body: string };
}) {
  const [vals, setVals] = useState<Record<string, string>>({});
  const [bad, setBad] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const okRef = useRef<HTMLDivElement>(null);
  const check = (f: FieldDef, v = vals[f.name] || '') => {
    const ok = !f.req || valid(f.req, v);
    setBad((s) => { const n = new Set(s); if (ok) n.delete(f.name); else n.add(f.name); return n; });
    return ok;
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const failed = fields.filter((f) => !check(f));
    if (failed.length) { formRef.current?.querySelector<HTMLElement>(`[name="${failed[0].name}"]`)?.focus(); return; }
    // shortcut: mock submit, no request is sent. Wire to the backend before launch.
    setDone(true);
    setTimeout(() => okRef.current?.focus(), 0);
  };
  return (
    <div className={className}>
      <form className={done ? 'hidden' : ''} ref={formRef} noValidate onSubmit={onSubmit}>
        {children}
        <div className={grid ? 'grid grid-cols-[1fr_1fr] gap-5 m:grid-cols-[1fr]' : ''}>
          {fields.map((f) => (
            <Field key={f.name} f={f} value={vals[f.name] || ''} bad={bad.has(f.name)}
              onChange={(v) => { setVals((s) => ({ ...s, [f.name]: v })); if (bad.has(f.name)) check(f, v); }}
              onBlur={() => { if (vals[f.name] || bad.has(f.name)) check(f); }} />
          ))}
        </div>
        <div style={{ marginTop: 24 }}><button className={btnClass} data-btn="p" type="submit">{submit}</button></div>
        {note}
      </form>
      <div className={`text-center py-6 px-2 ${done ? 'block animate-pop' : 'hidden'}`} role="status" tabIndex={-1} ref={okRef}>
        {done && (<>
          <span className="w-16 h-16 rounded-full bg-l100 text-l800 flex items-center justify-center mx-auto mb-4 [&_svg]:w-[30px] [&_svg]:h-[30px]"><Icon name="check" /></span>
          <h3 className={`${tw.h3s} !mb-2`}>{success.title}</h3>
          <p className={tw.sm}>{success.body.replace(/\{(\w+)\}/g, (_, k) => (k === 'name' ? (vals.name || '').trim().split(' ')[0] : (vals[k] || '').trim()))}</p>
        </>)}
      </div>
    </div>
  );
}
