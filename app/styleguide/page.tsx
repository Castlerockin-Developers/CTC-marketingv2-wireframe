import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Faq } from '@/components/interactive';
import { Main } from '@/components/sections';
import { ArrowLink, Avatar, Icon, ScoreCard } from '@/components/ui';
import { BrandLogo } from '@/components/Logo';

export const metadata = { title: 'Style guide', robots: { index: false } };

// WCAG 2.1 relative luminance + contrast ratio, computed at build time.
const lum = (h: string) => {
  const c = [0, 2, 4].map((k) => { const v = parseInt(h.slice(1).substr(k, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const cr = (a: string, b: string) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };

const SW: [string, [string, string, string, string][]][] = [
  ['Brand', [['lavender (logo)', '#A294F9', 'Accent only: score bars, dots, active underline, band glow, band button', '#16132B'], ['action violet', '#5B44E3', 'Every filled button, selected toggle and open state', '#FFFFFF'], ['action hover', '#4A35C9', 'Hover, badge text, score numerals', '#FFFFFF'], ['link', '#4F3BD6', 'Inline and arrow links', '#FFFFFF']]],
  ['Text', [['ink', '#16132B', 'Headings, the closing band, Recommended badge', '#FFFFFF'], ['body', '#3D3957', 'Paragraphs', '#FFFFFF'], ['muted', '#6A6683', 'Secondary text, captions, meta', '#FFFFFF']]],
  ['Surfaces and lines', [['white', '#FFFFFF', 'Page, cards, inputs', '#16132B'], ['alt', '#F8F7FC', 'Alternate sections, footer', '#16132B'], ['tint', '#F1EEFE', 'Icon tiles, badges, CTA boxes', '#16132B'], ['line', '#E7E4F0', 'Card borders, dividers', '#16132B'], ['line strong', '#D5D0E6', 'Secondary button border', '#16132B'], ['line UI', '#8E89A6', 'Input borders (3:1)', '#FFFFFF']]],
  ['Functional status', [['error', '#B42318', 'Form errors only', '#FFFFFF'], ['success', '#067647', 'Form success only', '#FFFFFF'], ['warning', '#B54708', 'Deadlines, Coming soon', '#FFFFFF']]],
];
const PAIRS: [string, string, string, 'normal' | 'large' | 'ui' | 'never' | 'exempt'][] = [
  ['Heading on white', '#16132B', '#FFFFFF', 'normal'], ['Body on white', '#3D3957', '#FFFFFF', 'normal'], ['Muted on white', '#6A6683', '#FFFFFF', 'normal'],
  ['Muted on alt', '#6A6683', '#F8F7FC', 'normal'], ['Link on white', '#4F3BD6', '#FFFFFF', 'normal'], ['Badge text on tint', '#4A35C9', '#F1EEFE', 'normal'],
  ['Primary button text', '#FFFFFF', '#5B44E3', 'normal'], ['Primary hover', '#FFFFFF', '#4A35C9', 'normal'], ['Band body on ink', '#CFC9E8', '#16132B', 'normal'],
  ['Band button (ink on lavender)', '#16132B', '#A294F9', 'normal'], ['Score numerals', '#4A35C9', '#FFFFFF', 'large'], ['Error text', '#B42318', '#FFFFFF', 'normal'],
  ['Success text', '#067647', '#FFFFFF', 'normal'], ['Coming soon tag', '#93370D', '#FFF4E5', 'normal'], ['Disabled button', '#8E89A6', '#F1EEFE', 'exempt'],
  ['Focus ring vs white', '#5B44E3', '#FFFFFF', 'ui'], ['Input border vs white', '#8E89A6', '#FFFFFF', 'ui'], ['Lavender as text on white', '#A294F9', '#FFFFFF', 'never'],
];
const TYPE = [['display', 'Homepage H1', 'Plus Jakarta Sans', '56/62', '36/42', '800'], ['h1', 'Inner-page H1', 'Plus Jakarta Sans', '48/56', '32/38', '800'], ['h2', 'Section heading', 'Plus Jakarta Sans', '40/48', '28/34', '700'], ['h3', 'Card / sub-section', 'Plus Jakarta Sans', '28/36', '22/28', '700'], ['h4', 'FAQ question', 'Inter', '20/28', '18/26', '600'], ['eyebrow', 'Overline (sentence case)', 'Inter', '14/20', '14/20', '600'], ['lead', 'Hero / section intro', 'Inter', '20/32', '18/28', '400'], ['body', 'Paragraphs', 'Inter', '17/28', '16/26', '400'], ['caption', 'Legal, meta', 'Inter', '13/20', '13/20', '400'], ['score', 'CTC Score, timers', 'JetBrains Mono', '52–72', '36–52', '500']];

const SgSec = ({ eb, h, children, raised }: { eb: string; h: string; children: React.ReactNode; raised?: boolean }) => (
  <section className={`sec ${raised ? 'raised' : ''}`} style={{ padding: '72px 0' }}><div className="wrap"><span className="eyebrow">{eb}</span><h2 className="h2" style={{ margin: '8px 0 28px' }}>{h}</h2>{children}</div></section>
);

export default function StyleGuide() {
  return (
    <>
      <Header />
      <Main>
        <section className="hero compact"><div className="wrap" data-enter>
          <div><span className="eyebrow">Brand system v3</span><h1 className="h1" style={{ marginTop: 12 }}>Style guide</h1>
            <p className="lead" style={{ maxWidth: 820, marginTop: 16 }}>White pages, desaturated ink text and one action violet. The logo’s lavender (#A294F9) is the accent: data, marks and the closing band. Saturated colour always means you can act on it.</p></div>
          <div className="row" style={{ marginTop: 28, gap: 14 }}><span className="logo" style={{ margin: 0 }}><BrandLogo /></span><span className="badge b-v">Official mark</span></div>
        </div></section>

        <SgSec eb="Colour" h="Palette and usage rules">
          {SW.map(([g, items]) => (
            <div key={g}><h3 className="h4" style={{ margin: '28px 0 14px' }}>{g}</h3>
              <div className="cols c6 m2">{items.map(([n, hex, use, ink]) => (
                <div key={n} style={{ border: '1px solid var(--bd)', borderRadius: 12, overflow: 'hidden', background: 'var(--s1)' }}>
                  <div style={{ height: 84, background: hex, display: 'flex', alignItems: 'flex-end', padding: '8px 10px', color: ink, font: '500 13px var(--f-mono)' }}>Aa {cr(hex, ink).toFixed(2)}:1</div>
                  <div style={{ padding: '10px 12px' }}><b style={{ display: 'block', color: 'var(--tx)', fontSize: 14 }}>{n}</b><span className="mono" style={{ fontSize: 13 }}>{hex}</span><p className="cap" style={{ marginTop: 4 }}>{use}</p></div>
                </div>
              ))}</div>
            </div>
          ))}
          <div className="callout" style={{ marginTop: 32 }}><h3 className="h4">Usage rules</h3>
            <ul className="checks" style={{ fontSize: 15, lineHeight: '23px', marginTop: 10 }}>{['Action violet #5B44E3 with white text is the only filled button colour.', 'Logo lavender #A294F9 is for bars, dots, underlines and the band, never for text on white (2.58:1).', 'Text runs ink, body, muted: never saturated violet for paragraphs.', 'On the ink band the button turns lavender with ink text (7:1).'].map((t) => <li key={t}><Icon name="check" /><span>{t}</span></li>)}</ul></div>
        </SgSec>

        <SgSec eb="Accessibility" h="Contrast ratios for every text and background pair" raised>
          <p className="body-sm" style={{ marginBottom: 20 }}>Calculated with the WCAG 2.1 formula. Thresholds: 4.5:1 for normal text, 3:1 for large text and UI components.</p>
          <div className="tablebox" style={{ overflowX: 'auto' }}><table className="lb" style={{ fontSize: 14.5 }}>
            <thead><tr><th>Pair</th><th>Foreground</th><th>Background</th><th>Sample</th><th>Ratio</th><th>Result</th></tr></thead>
            <tbody>{PAIRS.map(([n, fg, bg, kind]) => { const r = cr(fg, bg); const ok = r >= (kind === 'normal' ? 4.5 : 3); return (
              <tr key={n}><td style={{ color: 'var(--tx)', fontFamily: 'var(--f-body)' }}>{n}</td><td className="mono" style={{ fontSize: 13 }}>{fg}</td><td className="mono" style={{ fontSize: 13 }}>{bg}</td>
                <td><span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 6, background: bg, color: fg, fontWeight: 600, border: kind === 'ui' ? `2px solid ${fg}` : undefined }}>Aa</span></td>
                <td className="pts">{r.toFixed(2)}:1</td>
                <td>{kind === 'never' ? <span className="badge b-warn">Not allowed as text</span> : kind === 'exempt' ? <span className="badge b-n">Exempt (disabled)</span> : ok ? <span className="badge b-ok">Pass</span> : <span className="badge b-warn">Check</span>}</td></tr>); })}</tbody>
          </table></div>
        </SgSec>

        <SgSec eb="Typography" h="Plus Jakarta Sans, Inter and JetBrains Mono">
          <div className="tablebox" style={{ overflowX: 'auto' }}><table className="lb" style={{ fontSize: 14 }}>
            <thead><tr><th>Token</th><th>Use</th><th>Font</th><th>Desktop px</th><th>Mobile px</th><th>Weight</th></tr></thead>
            <tbody>{TYPE.map((t) => <tr key={t[0]}><td>{t[0]}</td><td style={{ color: 'var(--tx)' }}>{t[1]}</td><td>{t[2]}</td><td className="pts">{t[3]}</td><td className="pts">{t[4]}</td><td>{t[5]}</td></tr>)}</tbody>
          </table></div>
          <div className="card pad-lg" style={{ marginTop: 28 }}>
            <p className="eyebrow">Eyebrow, for engineering students in India</p><p className="display" style={{ margin: '10px 0' }}>Get placement-ready.</p>
            <p className="h2">Section heading H2</p><p className="h3" style={{ marginTop: 8 }}>Card heading H3</p><p className="h4" style={{ marginTop: 8 }}>FAQ question H4</p>
            <p className="lead" style={{ marginTop: 12 }}>Lead: company-wise aptitude and coding practice, proctored mock tests in our desktop app.</p>
            <p style={{ marginTop: 8 }}>Body: the free plan has no time limit and needs no credit card. Line length capped at 680 px.</p>
            <p className="mono" style={{ color: '#3B2E8A', fontSize: 52, lineHeight: '56px', marginTop: 12 }}>7.8<span style={{ fontSize: 20 }}> / 10</span></p>
          </div>
        </SgSec>

        <SgSec eb="Components" h="Buttons and states" raised>
          <div className="tablebox" style={{ padding: '8px 0', overflowX: 'auto' }}><table className="lb">
            <thead><tr><th>Variant</th><th>Default</th><th>Hover</th><th>Focus</th><th>Active</th><th>Disabled</th></tr></thead>
            <tbody>{[['Primary', 'p'], ['Secondary', 's'], ['Ghost', 'g']].map(([n, k]) => (
              <tr key={k}><td style={{ color: 'var(--tx)', fontFamily: 'var(--f-body)' }}>{n}</td>{['', 'is-hover', 'is-focus', 'is-active'].map((s) => <td key={s}><span className={`btn btn-${k} btn-sm ${s}`}>Start free</span></td>)}<td><button className={`btn btn-${k} btn-sm`} disabled>Start free</button></td></tr>
            ))}</tbody>
          </table></div>
          <div className="cols c2" style={{ marginTop: 24 }}>
            <div className="card"><h3 className="h4">Spec</h3><p>48 px tall (52 on mobile, 44 small), 24 px side padding, 12 px radius, Inter 16/600. Focus: 2 px #5B44E3 ring, 3 px offset.</p></div>
            <div className="card"><h3 className="h4">Links</h3><p>Inline links are <Link href="/">always underlined</Link> so colour isn’t the only cue. Tertiary action: <ArrowLink href="/pricing/">Compare all plans</ArrowLink></p></div>
          </div>
        </SgSec>

        <SgSec eb="Components" h="Cards, accordion, testimonial, badges and alerts">
          <div className="cols c3">
            <article className="card card-i"><span className="ic"><Icon name="building" /></span><h3 className="h3s">Interactive card</h3><p>Hover lifts 2 px and the border turns lavender. The whole card is one link.</p><Link className="arrow-link stretch" href="/prep/infosys/">Browse companies<Icon name="arrow" /></Link></article>
            <div className="card"><span className="ic gold"><Icon name="trophy" /></span><h3 className="h3s">Static card</h3><p>Border lavender-200; used for facts, features and values.</p></div>
            <ScoreCard />
          </div>
          <div className="cols c2" style={{ marginTop: 24 }}>
            <Faq items={[['Is Crack The Campus free?', 'Yes. The free plan has no time limit and needs no credit card.'], ['Do I need the desktop app?', 'Only for proctored mock tests and contests.']]} />
            <figure className="card quote"><span className="qm"><Icon name="quote" /></span><blockquote>“Proctored mocks fixed my nerves.”</blockquote><figcaption><Avatar name="Karthik Menon" /><span className="who"><b>Karthik Menon</b><span>CSE 2026, placed at Infosys</span></span></figcaption></figure>
          </div>
          <div className="row" style={{ marginTop: 28, gap: 10 }}>{[['b-v', 'Company guides'], ['b-gold', 'Recommended'], ['b-ok', 'Free'], ['b-info', 'New'], ['b-warn', 'Coming soon'], ['b-n', 'Example']].map(([c, t]) => <span className={`badge ${c}`} key={t}>{t}</span>)}<span className="chip">Beginner</span></div>
          <div className="stack" style={{ marginTop: 28 }}>
            <div className="alert a-info"><Icon name="info" /><span>Placement support helps you prepare and apply. It does not guarantee a job offer.</span></div>
            <div className="alert a-ok"><Icon name="checkc" /><span>Account created. Check your inbox to verify your email.</span></div>
            <div className="alert a-warn"><Icon name="clock" /><span>Registration for Code Nova 3 closes on 12 Dec 2026.</span></div>
            <div className="alert a-err"><Icon name="alert" /><span>Something went wrong on our side. Try again in a minute.</span></div>
          </div>
        </SgSec>
      </Main>
      <Footer />
    </>
  );
}
