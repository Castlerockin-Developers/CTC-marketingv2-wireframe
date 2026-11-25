'use client';
import { useRef, useState } from 'react';
import { Icon } from './ui';
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

  return (
    <div className="qz" data-state={state} data-hide-sticky="">
      <div className="qz-top"><span className="mono" style={{ color: 'var(--act)', fontSize: 14 }}>{company} sample</span><span className="timer"><Icon name="clock" />{minutes}:00</span></div>
      <div className="qz-prog" data-st="q"><i style={{ width: `${(n + 1) * 10}%` }} /></div>
      <div className="qz-body">
        <div data-st="intro">
          <h3 className="h3s">{company} sample test</h3>
          <p className="body-sm" style={{ margin: '8px 0 20px' }}>10 questions in {minutes} minutes. No sign-up needed to start.</p>
          <button type="button" className="btn btn-p btn-blk" onClick={() => { setState('q'); setN(0); setScore(0); setBySec({}); setTimeout(() => firstOpt.current?.focus(), 0); }}>Start the sample test</button>
        </div>
        <div data-st="q">
          <p className="cap">Question {n + 1} of 10, {q.s}</p>
          <p className="h4" style={{ margin: '8px 0' }}>{q.q}</p>
          <div role="radiogroup" aria-label="Answer options">
            {q.o.map((o, k) => (
              <button key={o} ref={k === 0 ? firstOpt : undefined} type="button" className={`opt ${sel === k ? 'sel' : ''}`} role="radio" aria-checked={sel === k} onClick={() => setSel(k)}><i />{o}</button>
            ))}
          </div>
          <div className="qz-foot">
            <button type="button" className="btn btn-g" onClick={() => next(true)}>Skip</button>
            <button type="button" className="btn btn-p" onClick={() => next()} disabled={sel === null}>{n === 9 ? 'See my result' : 'Next question'}</button>
          </div>
        </div>
        <div data-st="res" aria-live="polite">
          <span className="badge b-ok">Sample complete</span>
          <h3 className="h3" style={{ margin: '12px 0 4px' }}>Your score: <span className="mono" style={{ color: 'var(--act-h)' }}>{score} / 10</span></h3>
          <p className="body-sm">{Object.keys(bySec).length ? Object.entries(bySec).map(([s, v]) => `${s}: ${v}`).join(', ') : 'Try the topic drills to find your weakest section.'}</p>
          <div style={{ marginTop: 20 }}><a className="btn btn-p btn-blk" href={APP_URL}>Create a free account to save your result</a></div>
          <p className="cap" style={{ marginTop: 10, textAlign: 'center' }}>Then go on to full {company} mocks.</p>
        </div>
      </div>
    </div>
  );
}
