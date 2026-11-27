import Link from 'next/link';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PostCard, Toc } from './Guides';
import { StickyCta } from './interactive';
import { Main } from './sections';
import { Band, Btn, Crumb, Frame, Head, Icon, JsonLd, Sec } from './ui';
import { tw } from './tw';
import { GUIDES, SITE_URL, type Faq } from '@/content/site';
import { AUTHOR } from '@/content/dummy';

// Guide article template (same layout as the first guide): header, cover, sticky table of contents,
// prose body, FAQ, author box, related guides and a closing band.
export type ArticleProps = {
  slug: string; title: string; desc: string; cat: string; read: string;
  cover?: { src: string; alt: string }; toc: [string, string][]; faq: Faq[];
  cta: { h: string; p: string; btn: [string, string] }; children: ReactNode;
};

/** Mid-article call to action box. */
export const CtaBox = ({ h, p, btn }: ArticleProps['cta']) => (
  <aside className="!my-10 rounded-2xl border border-tint2 bg-tint p-7 m:px-5 m:py-[22px] [&_h3]:font-head [&_h3]:text-[22px] [&_h3]:leading-[30px] [&_h3]:text-ink [&_p]:mb-[18px] [&_p]:mt-1.5">
    <h3>{h}</h3><p>{p}</p><Btn href={btn[1]}>{btn[0]}</Btn>
  </aside>
);

export function Article({ slug, title, desc, cat, read, cover, toc, faq, cta, children }: ArticleProps) {
  const url = `${SITE_URL}/guides/${slug}/`;
  return (
    <>
      <Header progress />
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Article', headline: title, description: desc, mainEntityOfPage: url, dateModified: '2026-11-26',
          author: { '@type': 'Person', name: AUTHOR.name, jobTitle: AUTHOR.role }, publisher: { '@type': 'Organization', name: 'Crack The Campus', logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` } } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />
      <Main>
        <section className="bg-alt pb-12 pt-10">
          <div className={tw.wrap}><div className={tw.articleHd}>
            <Crumb items={[['Home', '/'], ['Guides', '/guides/'], [cat]]} />
            <span className={`${tw.badge} ${tw.bV}`}>{cat}</span>
            <h1 className={`${tw.h1} mt-4`}>{title}</h1>
            <p className={`${tw.lead} mt-4 max-w-[680px]`}>{desc}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-[14.5px] text-tx3"><span><b className="font-medium text-ink">{AUTHOR.name}</b>, {AUTHOR.role}</span><span>Updated {AUTHOR.updated}</span><span>{read}</span></div>
            {cover && <Frame className="mt-10" src={cover.src} eager alt={cover.alt} ratio="16/9" />}
          </div></div>
        </section>

        <section className={`${tw.sec} !pt-16`}><div className={tw.wrap}><div className="grid grid-cols-[240px_minmax(0,680px)] justify-center gap-16 m:grid-cols-[1fr] m:gap-0">
          <Toc items={toc} />
          <article className={tw.prose} id="article">
            <details className="hidden m:mb-8 m:block m:rounded-xl m:border m:border-line m:bg-white"><summary className="m:flex m:min-h-[52px] m:cursor-pointer m:list-none m:items-center m:justify-between m:px-4 m:font-semibold m:text-tx">On this page <Icon name="down" /></summary><ol className="m:list-none m:!px-2 m:!pb-2 m:!pt-0">{toc.map(([id, t]) => <li key={id}><a className="m:flex m:min-h-11 m:items-center m:px-2 m:text-[15px] m:!text-tx2 m:!no-underline" href={`#${id}`}>{t}</a></li>)}</ol></details>
            {children}
            <CtaBox {...cta} />
            <section id="faq" aria-labelledby="faq-h">
              <h2 id="faq-h">Frequently asked questions</h2>
              <div className="mt-6 border-t border-bd">
                {faq.map(([q, a]) => (
                  <details key={q} className="group border-b border-bd">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-1 py-5 text-lg font-semibold text-tx hover:text-link [&::-webkit-details-marker]:hidden">
                      {q}<span aria-hidden className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-bd2 text-xl leading-none transition-transform group-open:rotate-45 group-open:border-act group-open:bg-act group-open:text-white">+</span>
                    </summary>
                    <p className="!mt-0 pb-6 pl-1 pr-14 text-base leading-[26px] text-tx2">{a}</p>
                  </details>
                ))}
              </div>
              <p className="mt-6"><Link href="/contact/">Ask us anything</Link></p>
            </section>
            <section className="block rounded-[20px] border border-line bg-white p-8 m:px-5 m:py-6" aria-labelledby="about-author">
              <h2 className={`${tw.h3} mb-5 border-b border-line pb-5`} id="about-author">About the author</h2>
              <p className="text-[15px] text-muted">{AUTHOR.role}</p>
              <p className="font-head text-[24px] font-bold text-ink">{AUTHOR.name}</p>
              <p className="max-w-[60ch] text-[17px] leading-[1.6] text-body">{AUTHOR.bio}</p>
              <p className={`${tw.cap} mt-3`}>Reviewed by {AUTHOR.reviewer}. Updated {AUTHOR.updated}.</p>
            </section>
          </article>
        </div></div></section>

        <Sec className={tw.light}>
          <Head h="Related guides" />
          <div className={`${tw.cols} ${tw.c3} ${tw.hscroll}`} data-reveal="kids">{GUIDES.filter((g) => g.slug !== slug).slice(0, 3).map((g) => <PostCard key={g.slug} g={g} />)}</div>
        </Sec>
        <Band h={cta.h} p={cta.p} cta={<Btn href={cta.btn[1]}>{cta.btn[0]}</Btn>} cta2={<Link href="/guides/">More placement guides</Link>} />
      </Main>
      <Footer />
      <StickyCta title={cta.h} sub="Free to start" cta={cta.btn[0]} href={cta.btn[1]} />
    </>
  );
}
