'use client';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Icon } from './ui';
import type { Faq as FaqT } from '@/content/site';

/* ---------- FAQ / module accordion ---------- */
export function Faq({ items, openFirst = true }: { items: (FaqT | [ReactNode, string, ReactNode?])[]; openFirst?: boolean }) {
  const [open, setOpen] = useState<Set<number>>(new Set(openFirst ? [0] : []));
  const id = useId();
  const toggle = (k: number) => setOpen((s) => { const n = new Set(s); if (n.has(k)) n.delete(k); else n.add(k); return n; });
  return (
    <div className="faq">
      {items.map((q, k) => (
        <div className={`faq-i ${open.has(k) ? 'open' : ''}`} key={k}>
          <h3 className="faq-q">
            <button type="button" aria-expanded={open.has(k)} aria-controls={`${id}-${k}`} onClick={() => toggle(k)}>
              <span>{q[0]}</span>{q[2]}<span className="pm" aria-hidden="true" />
            </button>
          </h3>
          <div className="faq-a" id={`${id}-${k}`} role="region"><div><p>{q[1]}</p></div></div>
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
    <div className={`sticky ${hide ? 'hide' : ''}`} role="region" aria-label="Quick action">
      <div className="st"><b>{title}</b>{sub}</div>
      <a className="btn btn-p" href={href}>{cta}</a>
    </div>
  );
}

/* ---------- Mobile footer column accordion ---------- */
export function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  const [o, setO] = useState(false);
  return (
    <div className="fcol">
      <h2 className="fh"><button className="fbtn" type="button" aria-expanded={o} onClick={() => setO(!o)}>{title}<Icon name="down" /></button></h2>
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
    <div className="cd" role="timer" aria-label={label}>
      {parts.map(([v, u]) => <div key={u}><b suppressHydrationWarning>{now === null ? '--' : String(v).padStart(2, '0')}</b><span>{u}</span></div>)}
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
    id, name: f.name, className: `inp ${!bad && f.req && value && valid(f.req, value) ? 'is-ok' : ''}`, value,
    'aria-invalid': bad || undefined, 'aria-describedby': `${id}-h ${id}-e`, onBlur,
    onChange: (e: { target: { value: string } }) => onChange(e.target.value),
  };
  return (
    <div className={`field ${f.full ? 'full' : ''} ${bad ? 'bad' : ''}`}>
      <label htmlFor={id}>{f.label}{f.optional && <span className="opt-t"> (optional)</span>}</label>
      {f.type === 'select' ? (
        <select {...common}><option value="">{f.ph || 'Select'}</option>{f.options?.map((o) => <option key={o}>{o}</option>)}</select>
      ) : f.type === 'textarea' ? (
        <textarea {...common} placeholder={f.ph} />
      ) : (
        <input {...common} type={f.type || 'text'} placeholder={f.ph} autoComplete={f.ac || (f.type === 'email' ? 'email' : f.type === 'tel' ? 'tel' : undefined)} inputMode={f.type === 'tel' ? 'numeric' : undefined} spellCheck={f.type === 'email' ? false : undefined} />
      )}
      {f.help ? <span className="help" id={`${id}-h`}>{f.help}</span> : <span id={`${id}-h`} hidden />}
      <span className="err" id={`${id}-e`} role="alert"><Icon name="alert" /><span>{f.err || 'Please fill in this field.'}</span></span>
    </div>
  );
}

export function MockForm({ fields, submit, className = '', grid = true, children, success, btnClass = 'btn btn-p btn-blk', note }: {
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
    <div className={`${className} ${done ? 'done' : ''}`}>
      <form ref={formRef} noValidate onSubmit={onSubmit}>
        {children}
        <div className={grid ? 'form-grid' : ''}>
          {fields.map((f) => (
            <Field key={f.name} f={f} value={vals[f.name] || ''} bad={bad.has(f.name)}
              onChange={(v) => { setVals((s) => ({ ...s, [f.name]: v })); if (bad.has(f.name)) check(f, v); }}
              onBlur={() => { if (vals[f.name] || bad.has(f.name)) check(f); }} />
          ))}
        </div>
        <div style={{ marginTop: 24 }}><button className={btnClass} type="submit">{submit}</button></div>
        {note}
      </form>
      <div className="success" role="status" tabIndex={-1} ref={okRef}>
        {done && (<>
          <span className="sic"><Icon name="check" /></span>
          <h3 className="h3s">{success.title}</h3>
          <p className="body-sm">{success.body.replace(/\{(\w+)\}/g, (_, k) => (k === 'name' ? (vals.name || '').trim().split(' ')[0] : (vals[k] || '').trim()))}</p>
        </>)}
      </div>
    </div>
  );
}
