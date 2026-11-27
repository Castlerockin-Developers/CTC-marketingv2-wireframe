import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { StickyCta } from './interactive';
import { FaqSec, Main } from './sections';
import { Band, Btn, Card, CHECK_LI, CHECKS, Crumb, Head, Icon, JsonLd, Micro, Sec } from './ui';
import { GLOW, PageBanner, TextLink } from './brand';
import { heroGrid, split, tw } from './tw';
import { APP_URL, type Faq } from '@/content/site';

// Section blocks the content-doc pages are assembled from, so every page shares one rhythm:
// hero → alternating white / warm-paper sections → FAQ → painted closing band.

export type Link2 = [label: string, href: string];

/** Page frame: header, main, footer, the doc's mobile sticky CTA, extra JSON-LD and the closing band. */
export function Page({ children, sticky = ['Free forever plan', 'No credit card', 'Start practising free', APP_URL], band, faq, schema, disclaim }: {
  children: ReactNode; sticky?: [string, string, string, string] | null; schema?: object | object[]; disclaim?: string;
  band?: { h: string; p?: string; cta: Link2; link?: Link2; micro?: string };
  faq?: { h: string; items: Faq[]; link?: Link2 };
}) {
  return (
    <>
      <Header />
      {schema && <JsonLd data={schema} />}
      <Main>
        {children}
        {faq && <FaqSec h={faq.h} items={faq.items} link={faq.link} />}
        {band && <Band h={band.h} p={band.p} micro={band.micro} cta={<Btn href={band.cta[1]}>{band.cta[0]}</Btn>} cta2={band.link && <a href={band.link[1]}>{band.link[0]}</a>} />}
      </Main>
      <Footer disclaim={disclaim} />
      {sticky && <StickyCta title={sticky[0]} sub={sticky[1]} cta={sticky[2]} href={sticky[3]} />}
    </>
  );
}

/** Hub hero: the painted banner. */
export { PageBanner };

/** Detail-page hero: text and one product visual side by side, warm paper behind. */
export function Hero({ crumb, eyebrow, h1, sub, cta, link, micro, visual, chips }: {
  crumb: [string, string?][]; eyebrow?: string; h1: string; sub: ReactNode; cta?: Link2; link?: Link2; micro?: string; visual?: ReactNode; chips?: ReactNode;
}) {
  return (
    <section className="bg-alt pb-20 pt-10 m:pb-14 m:pt-6" data-hide-sticky>
      <div className={`${tw.wrap} ${visual ? heroGrid('66') : ''}`}>
        <div className={visual ? '' : 'max-w-[820px]'}>
          <Crumb items={crumb} />
          {eyebrow && <p className={tw.eyebrow}>{eyebrow}</p>}
          <h1 className={`${tw.h1} mt-3`}>{h1}</h1>
          <p className={`${tw.lead} mt-5 max-w-[640px]`}>{sub}</p>
          {chips}
          {(cta || link) && <div className={`${tw.ctaRow} mt-8 gap-x-6`}>{cta && <Btn href={cta[1]}>{cta[0]}</Btn>}{link && <TextLink href={link[1]}>{link[0]}</TextLink>}</div>}
          {micro && <Micro className="mt-4">{micro}</Micro>}
        </div>
        {visual && <div className={`p-10 m:p-5 ${GLOW}`}><div className="drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]">{visual}</div></div>}
      </div>
    </section>
  );
}

export type CardItem = { t: string; b?: ReactNode; href?: string; link?: string; icon?: string };

/** Heading + grid of cards (2, 3 or 4 across). */
export function Cards({ h, p, items, cols = 3, alt, id }: { h: string; p?: ReactNode; items: CardItem[]; cols?: 2 | 3 | 4; alt?: boolean; id?: string }) {
  return (
    <Sec className={alt ? tw.light : ''} id={id}>
      <Head h={h} p={p} />
      <div className={`${tw.cols} ${cols === 2 ? tw.c2 : cols === 4 ? tw.c4 : tw.c3}`} data-reveal="kids">
        {items.map((c, k) => <Card key={c.t} kicker={String(k + 1).padStart(2, '0')} title={c.t} href={c.href} link={c.link}>{c.b}</Card>)}
      </div>
    </Sec>
  );
}

/** Numbered steps: heading sticks on the left, big numbered rows on the right (plain strings become step titles). */
export function Steps({ h, p, items, alt, id, cta }: { h: string; p?: ReactNode; items: (string | [string, string] | [string, string, string])[]; alt?: boolean; id?: string; cta?: Link2 }) {
  return (
    <Sec className={alt ? tw.light : ''} id={id}>
      <div className="grid grid-cols-[5fr_7fr] gap-16 t:gap-10 m:grid-cols-1 m:gap-8">
        <div className="sticky top-28 self-start m:static">
          <h2 className={tw.h2}>{h}</h2>
          {p && <p className={`${tw.lead} mt-4`}>{p}</p>}
          {cta && <div className="mt-8"><Btn href={cta[1]}>{cta[0]}</Btn></div>}
        </div>
        <ol className="list-none border-b border-line" data-reveal="kids">
          {items.map((s, k) => {
            const [t, d, tag] = typeof s === 'string' ? [s, '', ''] : s;
            return (
              <li key={t} className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-t border-line py-8 m:grid-cols-[56px_1fr] m:py-6">
                <span className="font-head text-[44px] font-extrabold leading-none tracking-[-.03em] text-[#C4B9F6] m:text-[32px]" aria-hidden="true">{String(k + 1).padStart(2, '0')}</span>
                <div>{tag && <p className="mb-1.5 font-mono text-[12.5px] uppercase tracking-[.06em] text-muted">{tag}</p>}<h3 className={tw.h3s}>{t}</h3>{d && <p className="mt-2 text-[17px] leading-7 text-body">{d}</p>}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </Sec>
  );
}

/** Text beside a product visual on the glow card; `rev` puts the visual first. */
export function Split({ h, p, bullets, visual, rev, cta, link, alt, id, eyebrow }: {
  h: string; p?: ReactNode; bullets?: ReactNode[]; visual: ReactNode; rev?: boolean; cta?: Link2; link?: Link2; alt?: boolean; id?: string; eyebrow?: string;
}) {
  return (
    <Sec className={alt ? tw.light : ''} id={id}>
      <div className={`${split('11')} ${rev ? tw.rev : ''}`} data-reveal="split">
        <div>
          {eyebrow && <p className={tw.eyebrow}>{eyebrow}</p>}
          <h2 className={`${tw.h2} ${eyebrow ? 'mt-3' : ''}`}>{h}</h2>
          {p && <p className={`${tw.lead} mt-5`}>{p}</p>}
          {bullets && <ul className={`${CHECKS} mt-7`}>{bullets.map((b, k) => <li className={CHECK_LI} key={k}><Icon name="checkc" /><span>{b}</span></li>)}</ul>}
          {(cta || link) && <div className={`${tw.ctaRow} mt-8 gap-x-6`}>{cta && <Btn href={cta[1]}>{cta[0]}</Btn>}{link && <TextLink href={link[1]}>{link[0]}</TextLink>}</div>}
        </div>
        <div className={`p-10 m:p-5 ${GLOW}`}><div className="drop-shadow-[0_24px_48px_rgba(29,29,31,.14)]">{visual}</div></div>
      </div>
    </Sec>
  );
}

/** Heading + data table; first column is the row header. */
export function Table({ h, p, head, rows, note, alt, id }: { h: string; p?: ReactNode; head: string[]; rows: ReactNode[][]; note?: ReactNode; alt?: boolean; id?: string }) {
  return (
    <Sec className={alt ? tw.light : ''} id={id}>
      <Head h={h} p={p} />
      <div className={`${tw.tablebox} overflow-x-auto`} data-reveal="">
        <table className={tw.dtable}>
          <thead><tr>{head.map((c, k) => <th key={k} scope="col">{c}</th>)}</tr></thead>
          <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, k) => (k === 0 ? <th key={k} scope="row">{c}</th> : <td key={k}>{c}</td>))}</tr>)}</tbody>
        </table>
      </div>
      {note && <p className="mt-4 text-[14px] text-muted">{note}</p>}
    </Sec>
  );
}

/** Short prose section (heading + paragraphs), for "who can see it", notes and similar. */
export function Prose({ h, children, alt, id }: { h: string; children: ReactNode; alt?: boolean; id?: string }) {
  return (
    <Sec className={alt ? tw.light : ''} id={id}>
      <div className="max-w-[760px] [&>p+p]:mt-4" data-reveal="">
        <h2 className={tw.h2}>{h}</h2>
        <div className="mt-5 space-y-4 text-[18px] leading-[30px] text-body">{children}</div>
      </div>
    </Sec>
  );
}
