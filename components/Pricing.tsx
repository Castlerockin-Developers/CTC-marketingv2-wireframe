'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ARROW, CHECKS, CHECKS2, Icon, NOTE } from './ui';
import { btn, tw } from './tw';
import { APP_URL, COLLEGE_INCLUDES, PLAN_PRICES } from '@/content/site';

type Len = '6' | '12';
const checks = (items: string[], c = '') => <ul className={`${CHECKS} text-[15px] leading-[22px] ${c}`}>{items.map((t) => <li className="flex gap-3 items-start [&_svg]:w-5 [&_svg]:h-5 [&_svg]:flex-none [&_svg]:mt-px [&_svg]:text-act" key={t}><Icon name="checkc" /><span>{t}</span></li>)}</ul>;
const PLAN = 'bg-white border border-l200 rounded-[20px] p-8 flex flex-col relative m:p-6';
const PLAN_H3 = 'font-head text-[22px] leading-[30px] text-tx';
const PD = 'text-[15px] leading-[22px] text-tx3 mt-1.5 min-h-11';
const planBtn = (kind: 'p' | 's') => `${btn(kind, { blk: true })} my-6`;

export function PricingPlans() {
  const [aud, setAud] = useState<'stu' | 'col'>('stu');
  const [len, setLen] = useState<Len>('6');
  const P = (k: 'pro' | 'pp') => ({ price: PLAN_PRICES[k][`p${len}`], was: PLAN_PRICES[k][`w${len}`], per: `for ${len} months, ${PLAN_PRICES[k][`m${len}`]}` });
  // keep the sticky bar's price in sync (it lives outside this component)
  useEffect(() => { document.querySelectorAll('[data-stprice]').forEach((el) => (el.textContent = `${PLAN_PRICES.pp[`p${len}`]} for ${len} months`)); }, [len]);

  const plan = (o: { name: string; desc: string; price: string; per: string; was?: string; cta: React.ReactNode; feats: string[]; rec?: boolean }) => (
    <article className={`${PLAN} ${o.rec ? '!border-2 !border-l400 bg-[linear-gradient(180deg,var(--l50),#fff_45%)] shadow-[0_20px_50px_rgba(91,68,227,.14)] m:-order-1' : ''}`}>
      {o.rec && <span className={`${tw.badge} ${tw.bGold} absolute -top-3.5 left-8`}>Recommended</span>}
      <h3 className={PLAN_H3}>{o.name}</h3><p className={PD}>{o.desc}</p>
      <div className="flex items-baseline gap-2 mt-5 flex-wrap"><b className="font-head font-medium text-[44px] leading-[52px] text-tx tracking-[-.02em] tabular-nums">{o.price}</b><span className="text-tx3 text-[15px]">{o.per}</span></div>
      <p className="text-[14px] text-tx3 min-h-[22px]">{o.was ? <><span className={tw.sr}>Previously </span><s className="text-tx3">{o.was}</s></> : ' '}</p>
      {o.cta}{checks(o.feats)}
    </article>
  );

  return (
    <>
      <div className={tw.row} style={{ justifyContent: 'center', marginTop: 32, gap: 12 }}>
        <div className={`inline-flex ${tw.seg}`} role="group" aria-label="Audience">
          <button className={tw.segBtn} type="button" aria-pressed={aud === 'stu'} onClick={() => setAud('stu')}>Students</button>
          <button className={tw.segBtn} type="button" aria-pressed={aud === 'col'} onClick={() => setAud('col')}>Colleges</button>
        </div>
        <div className={`inline-flex ${tw.seg}`} role="group" aria-label="Plan length" style={{ visibility: aud === 'col' ? 'hidden' : undefined }}>
          <button className={tw.segBtn} type="button" aria-pressed={len === '6'} onClick={() => setLen('6')}>6 months</button>
          <button className={`${tw.segBtn} m:leading-[18px]`} type="button" aria-pressed={len === '12'} onClick={() => setLen('12')}>12 months<span className="font-medium text-[12.5px] ml-1.5 text-inherit opacity-90 m:block m:m-0 m:text-[11.5px] m:leading-[14px]">save up to 50%</span></button>
        </div>
      </div>
      {aud === 'stu' ? (
        <>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-6 items-stretch mt-12 m:grid-cols-[1fr] m:gap-7 m:mt-8" style={{ textAlign: 'left' }}>
            {plan({ name: 'Free', desc: 'No credit card required. Start now, upgrade when you’re ready.', price: '₹0', per: 'forever', cta: <a className={planBtn('s')} data-btn="s" href={APP_URL}>Start free</a>, feats: ['1 AI-powered resume', '5 CTC assessments', 'Practice assessments', 'Limited AI help', 'Limited contests'] })}
            {plan({ name: 'Pro', desc: 'Assessments, courses and contests for a focused prep window.', ...P('pro'), cta: <a className={planBtn('s')} data-btn="s" href={APP_URL}>Get Pro</a>, feats: ['13 resume exports', '23 CTC assessments a month', 'Advanced courses', 'Full contest access', 'Internship opportunities', 'Extended AI limits', 'Detailed analytics'] })}
            {plan({ rec: true, name: 'Pro + Placement', desc: 'Everything in Pro, plus placement support for the hiring season.', ...P('pp'), cta: <span data-hide-sticky=""><a className={planBtn('p')} data-btn="p" href={APP_URL}>Get Pro + Placement</a></span>, feats: ['18 resume exports', '25 CTC assessments a month', 'Twice the AI limits of Pro', 'Everything in Pro', '4 mock interviews, 2 resume reviews and drive alerts'] })}
          </div>
          <p className={NOTE} style={{ textAlign: 'center' }}><Icon name="info" />Struck-through prices are the earlier list prices. Confirm they were really charged before launch, or remove them.</p>
        </>
      ) : (
        <div className={PLAN} style={{ maxWidth: 760, margin: '48px auto 0', textAlign: 'left' }}>
          <span className={`${tw.badge} ${tw.bV}`} style={{ alignSelf: 'flex-start' }}>Colleges</span>
          <h3 className={PLAN_H3} style={{ marginTop: 12 }}>Institutional licence, custom quote</h3>
          <p className={PD}>Priced per student per year, based on cohort size, integrations and support. Invoicing and custom terms available.</p>
          {checks(COLLEGE_INCLUDES, CHECKS2)}
          <div className={tw.ctaRow} style={{ marginTop: 28 }}><Link className={`${btn('p')} my-6`} data-btn="p" href="/colleges/#demo">Get a quote</Link><Link className={ARROW} href="/colleges/">Explore the college platform<Icon name="arrow" /></Link></div>
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

// on mobile one plan column shows at a time (picked with the tabs above the table)
const CMP = 'w-full border-separate border-spacing-0 bg-white border border-l200 rounded-2xl overflow-hidden text-[15px] [&_th]:py-4 [&_th]:px-5 [&_td]:py-4 [&_td]:px-5 [&_th]:text-left [&_td]:text-left [&_th]:border-b [&_td]:border-b [&_th]:border-l200 [&_td]:border-l200 [&_tr:last-child_td]:border-b-0 [&_thead_th]:text-[14px] [&_thead_th]:text-tx [&_thead_th]:bg-l50 [&_thead_th]:font-semibold [&_tbody_th]:font-medium [&_tbody_th]:text-tx [&_td]:text-tx2 [&_td]:tabular-nums m:[&_thead]:hidden m:[&_th]:py-3.5 m:[&_th]:px-4 m:[&_td]:py-3.5 m:[&_td]:px-4 m:[&_tbody_th]:w-[55%]';
export function CompareTable() {
  const [col, setCol] = useState(3);
  const cell = (c: string) => (c === '✓' ? <span className="[&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-act"><Icon name="check" /><span className={tw.sr}>Included</span></span> : c === '—' ? <span aria-label="Not included">—</span> : c);
  return (
    <>
      <div className={`hidden m:flex m:mb-3 ${tw.seg}`} role="group" aria-label="Choose a plan to compare">
        {['Free', 'Pro', 'Pro + Placement'].map((t, k) => <button className={tw.segBtn} key={t} type="button" aria-pressed={col === k + 1} onClick={() => setCol(k + 1)}>{t}</button>)}
      </div>
      <table className={CMP}>
        <caption className={tw.sr}>Feature comparison of Free, Pro and Pro + Placement</caption>
        <thead><tr><th scope="col">Feature</th><th scope="col">Free</th><th scope="col">Pro</th><th scope="col" className="bg-l50">Pro + Placement</th></tr></thead>
        <tbody>{ROWS.map((r) => (
          <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c, k) => <td key={k} className={`${k === 2 ? 'bg-l50' : ''} ${col === k + 1 ? '' : 'm:hidden'}`}>{cell(c)}</td>)}</tr>
        ))}</tbody>
      </table>
    </>
  );
}
