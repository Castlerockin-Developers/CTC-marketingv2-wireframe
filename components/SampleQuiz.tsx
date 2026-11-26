'use client';
import { useRef, useState } from 'react';
import { Icon } from './ui';
import { btn, tw } from './tw';
import { APP_URL } from '@/content/site';

// Dummy sample questions (draft); real ones come from the Prep Deck.
const QS: { s: string; q: string; o: string[]; a: number }[] = [
  { s: 'Mathematical ability', q: 'A train 240 m long passes a pole in 16 s. How long will it take to cross a 360 m platform?', o: ['32 s', '40 s', '45 s', '36 s'], a: 1 },
  { s: 'Reasoning', q: 'Find the next term: 3, 7, 15, 31, ?', o: ['47', '55', '63', '62'], a: 2 },
  { s: 'Verbal ability', q: 'Choose the correctly spelt word.', o: ['Accomodate', 'Acommodate', 'Accommodate', 'Acomodate'], a: 2 },
  { s: 'Mathematical ability', q: 'A shirt marked ₹1,200 is sold at 15% off. What is the selling price?', o: ['₹1,020', '₹1,050', '₹980', '₹1,080'], a: 0 },
  { s: 'Reasoning', q: 'If CAT is coded as 3120, how is DOG coded?', o: ['4157', '4147', '4167', '4156'], a: 0 },
  { s: 'Pseudocode', q: 'x = 5; for i = 1 to 3: x = x + i. What is x?', o: ['8', '10', '11', '9'], a: 2 },
  { s: 'Verbal ability', q: 'Pick the synonym of “candid”.', o: ['Frank', 'Shy', 'Rude', 'Clever'], a: 0 },
  { s: 'Mathematical ability', q: 'The average of 5 numbers is 18. If one number is removed, the average becomes 16. What was removed?', o: ['24', '26', '28', '22'], a: 1 },
  { s: 'Puzzle solving', q: 'A is taller than B, C is shorter than B, D is taller than A. Who is the shortest?', o: ['A', 'B', 'C', 'D'], a: 2 },
  { s: 'Pseudocode', q: 'n = 12; count = 0; while n > 1: n = n / 2; count++. What is count (integer division)?', o: ['2', '3', '4', '6'], a: 1 },
];

export default function SampleQuiz({ company, minutes }: { company: string; minutes: string }) {
  const [state, setState] = useState<'intro' | 'q' | 'res'>('intro');
  const [n, setN] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [bySec, setBySec] = useState<Record<string, number>>({});
  const firstOpt = useRef<HTMLButtonElement>(null);

  const next = (skip = false) => {
    const q = QS[n];
    if (!skip && sel === q.a) { setScore((s) => s + 1); setBySec((b) => ({ ...b, [q.s]: (b[q.s] || 0) + 1 })); }
    setSel(null);
    if (n >= QS.length - 1) setState('res');
    else { setN(n + 1); setTimeout(() => firstOpt.current?.focus(), 0); }
  };
  const q = QS[n];
  const show = (s: typeof state) => (state === s ? 'block' : 'hidden');

  return (
    <div className="bg-white border border-l200 rounded-[20px] overflow-hidden shadow-2" data-hide-sticky="">
      <div className="flex items-center justify-between gap-3 py-4 px-6 border-b border-l200 bg-l50 m:py-3 m:px-4"><span className={tw.mono} style={{ color: 'var(--act)', fontSize: 14 }}>{company} sample</span><span className="font-mono font-medium text-l800 text-[13px] inline-flex gap-1.5 items-center"><Icon name="clock" />{minutes}:00</span></div>
      <div className={`h-1.5 bg-l100 ${show('q')}`}><i className="block h-full bg-[linear-gradient(90deg,var(--lav),var(--act))] w-[10%] transition-[width] duration-med" style={{ width: `${(n + 1) * 10}%` }} /></div>
      <div className="p-8 m:p-5">
        <div className={show('intro')}>
          <h3 className={tw.h3s}>{company} sample test</h3>
          <p className={tw.sm} style={{ margin: '8px 0 20px' }}>10 questions in {minutes} minutes. No sign-up needed to start.</p>
          <button type="button" className={btn('p', { blk: true })} data-btn="p" onClick={() => { setState('q'); setN(0); setScore(0); setBySec({}); setTimeout(() => firstOpt.current?.focus(), 0); }}>Start the sample test</button>
        </div>
        <div className={show('q')}>
          <p className={tw.cap}>Question {n + 1} of 10, {q.s}</p>
          <p className={tw.h4} style={{ margin: '8px 0' }}>{q.q}</p>
          <div role="radiogroup" aria-label="Answer options">
            {q.o.map((o, k) => (
              <button key={o} ref={k === 0 ? firstOpt : undefined} type="button" className={`flex items-center gap-2.5 border rounded-[10px] mt-2 text-[16px] py-3.5 px-4 min-h-[52px] cursor-pointer w-full text-left text-l900 transition-[border-color,background] duration-fast hover:border-l500 ${sel === k ? 'border-lav bg-tint' : 'border-l200 bg-transparent'}`} role="radio" aria-checked={sel === k} onClick={() => setSel(k)}><i className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex-none ${sel === k ? 'border-act bg-[radial-gradient(var(--act)_40%,transparent_45%)]' : 'border-l500'}`} />{o}</button>
            ))}
          </div>
          <div className="flex justify-between gap-3 mt-6">
            <button type="button" className={btn('g')} data-btn="g" onClick={() => next(true)}>Skip</button>
            <button type="button" className={btn('p')} data-btn="p" onClick={() => next()} disabled={sel === null}>{n === 9 ? 'See my result' : 'Next question'}</button>
          </div>
        </div>
        <div className={show('res')} aria-live="polite">
          <span className={`${tw.badge} ${tw.bOk}`}>Sample complete</span>
          <h3 className={tw.h3} style={{ margin: '12px 0 4px' }}>Your score: <span className={tw.mono} style={{ color: 'var(--act-h)' }}>{score} / 10</span></h3>
          <p className={tw.sm}>{Object.keys(bySec).length ? Object.entries(bySec).map(([s, v]) => `${s}: ${v}`).join(', ') : 'Try the topic drills to find your weakest section.'}</p>
          <div style={{ marginTop: 20 }}><a className={btn('p', { blk: true })} data-btn="p" href={APP_URL}>Create a free account to save your result</a></div>
          <p className={tw.cap} style={{ marginTop: 10, textAlign: 'center' }}>Then go on to full {company} mocks.</p>
        </div>
      </div>
    </div>
  );
}
