'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icon } from './ui';
import { APP_URL, COLLEGE_INCLUDES, PLAN_PRICES } from '@/content/site';

type Len = '6' | '12';
const checks = (items: string[], c = '') => <ul className={`checks ${c}`}>{items.map((t) => <li key={t}><Icon name="checkc" /><span>{t}</span></li>)}</ul>;

export function PricingPlans() {
  const [aud, setAud] = useState<'stu' | 'col'>('stu');
  const [len, setLen] = useState<Len>('6');
  const P = (k: 'pro' | 'pp') => ({ price: PLAN_PRICES[k][`p${len}`], was: PLAN_PRICES[k][`w${len}`], per: `for ${len} months, ${PLAN_PRICES[k][`m${len}`]}` });
  // keep the sticky bar's price in sync (it lives outside this component)
  useEffect(() => { document.querySelectorAll('[data-stprice]').forEach((el) => (el.textContent = `${PLAN_PRICES.pp[`p${len}`]} for ${len} months`)); }, [len]);

  const plan = (o: { name: string; desc: string; price: string; per: string; was?: string; cta: React.ReactNode; feats: string[]; rec?: boolean }) => (
    <article className={`plan ${o.rec ? 'recd' : ''}`}>
      {o.rec && <span className="badge b-gold rb">Recommended</span>}
      <h3>{o.name}</h3><p className="pd">{o.desc}</p>
      <div className="price"><b>{o.price}</b><span className="per">{o.per}</span></div>
      <p className="was">{o.was ? <><span className="sr">Previously </span><s>{o.was}</s></> : ' '}</p>
      {o.cta}{checks(o.feats)}
    </article>
  );

  return (
    <>
      <div className="row" style={{ justifyContent: 'center', marginTop: 32, gap: 12 }}>
        <div className="seg" role="group" aria-label="Audience">
          <button type="button" aria-pressed={aud === 'stu'} onClick={() => setAud('stu')}>Students</button>
          <button type="button" aria-pressed={aud === 'col'} onClick={() => setAud('col')}>Colleges</button>
        </div>
        <div className="seg" role="group" aria-label="Plan length" style={{ visibility: aud === 'col' ? 'hidden' : undefined }}>
          <button type="button" aria-pressed={len === '6'} onClick={() => setLen('6')}>6 months</button>
          <button type="button" aria-pressed={len === '12'} onClick={() => setLen('12')}>12 months<span className="save">save up to 50%</span></button>
        </div>
      </div>
      {aud === 'stu' ? (
        <>
          <div className="plans" style={{ textAlign: 'left' }}>
            {plan({ name: 'Free', desc: 'No credit card required. Start now, upgrade when you’re ready.', price: '₹0', per: 'forever', cta: <a className="btn btn-s btn-blk" href={APP_URL}>Start free</a>, feats: ['1 AI-powered resume', '5 CTC assessments', 'Practice assessments', 'Limited AI help', 'Limited contests'] })}
            {plan({ name: 'Pro', desc: 'Assessments, courses and contests for a focused prep window.', ...P('pro'), cta: <a className="btn btn-s btn-blk" href={APP_URL}>Get Pro</a>, feats: ['13 resume exports', '23 CTC assessments a month', 'Advanced courses', 'Full contest access', 'Internship opportunities', 'Extended AI limits', 'Detailed analytics'] })}
            {plan({ rec: true, name: 'Pro + Placement', desc: 'Everything in Pro, plus placement support for the hiring season.', ...P('pp'), cta: <span data-hide-sticky=""><a className="btn btn-p btn-blk" href={APP_URL}>Get Pro + Placement</a></span>, feats: ['18 resume exports', '25 CTC assessments a month', 'Twice the AI limits of Pro', 'Everything in Pro', '4 mock interviews, 2 resume reviews and drive alerts'] })}
          </div>
          <p className="note-strip" style={{ textAlign: 'center' }}><Icon name="info" />Struck-through prices are the earlier list prices. Confirm they were really charged before launch, or remove them.</p>
        </>
      ) : (
        <div className="plan" style={{ maxWidth: 760, margin: '48px auto 0', textAlign: 'left' }}>
          <span className="badge b-v" style={{ alignSelf: 'flex-start' }}>Colleges</span>
          <h3 style={{ marginTop: 12 }}>Institutional licence, custom quote</h3>
          <p className="pd">Priced per student per year, based on cohort size, integrations and support. Invoicing and custom terms available.</p>
          {checks(COLLEGE_INCLUDES, 'c2')}
          <div className="cta-row" style={{ marginTop: 28 }}><Link className="btn btn-p" href="/colleges/#demo">Get a quote</Link><Link className="arrow-link" href="/colleges/">Explore the college platform<Icon name="arrow" /></Link></div>
        </div>
      )}
    </>
  );
}

const ROWS: [string, string, string, string][] = [
  ['AI resume', '1 resume', '13 exports', '18 exports'], ['CTC assessments', '5 total', '23 a month', '25 a month'], ['Practice assessments', '✓', '✓', '✓'],
  ['Advanced courses', '—', '✓', '✓'], ['Contests', 'Limited', 'Full', 'Full'], ['AI help', 'Limited', 'Extended', '2× Pro'],
  ['Internship opportunities', '—', '✓', '✓'], ['Detailed analytics', '—', '✓', '✓'], ['Placement support', '—', '—', '✓'],
];

export function CompareTable() {
  const [col, setCol] = useState(3);
  const cell = (c: string) => (c === '✓' ? <span className="yes"><Icon name="check" /><span className="sr">Included</span></span> : c === '—' ? <span aria-label="Not included">—</span> : c);
  return (
    <>
      <div className="seg cmp-tabs" role="group" aria-label="Choose a plan to compare">
        {['Free', 'Pro', 'Pro + Placement'].map((t, k) => <button key={t} type="button" aria-pressed={col === k + 1} onClick={() => setCol(k + 1)}>{t}</button>)}
      </div>
      <table className="cmp" data-col={col}>
        <caption className="sr">Feature comparison of Free, Pro and Pro + Placement</caption>
        <thead><tr><th scope="col">Feature</th><th scope="col">Free</th><th scope="col">Pro</th><th scope="col" className="hl">Pro + Placement</th></tr></thead>
        <tbody>{ROWS.map((r) => (
          <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c, k) => <td key={k} className={`${k === 2 ? 'hl' : ''} ${col === k + 1 ? 'on' : ''}`}>{cell(c)}</td>)}</tr>
        ))}</tbody>
      </table>
    </>
  );
}
