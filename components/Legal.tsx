import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Main } from './sections';
import { Crumb } from './ui';
import { tw } from './tw';

export const LEGAL_UPDATED = '24 November 2026';

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`} style={{ paddingBottom: 40 }}>
          <div className={`${tw.wrap} ${tw.heroWrap}`}><div className={tw.articleHd}>
            <Crumb items={[['Home', '/'], [title]]} />
            <h1 className={`${tw.h1} ${tw.heroH1}`}>{title}</h1>
            <p className={`${tw.lead} ${tw.heroLead}`} style={{ marginTop: 16 }}>{intro}</p>
            <p className={tw.cap} style={{ marginTop: 12 }}>Last updated {LEGAL_UPDATED}</p>
          </div></div>
        </section>
        <section className={tw.sec} style={{ paddingTop: 24 }}><div className={tw.wrap}><article className={`${tw.prose} ${tw.articleHd}`}>{children}</article></div></section>
      </Main>
      <Footer />
    </>
  );
}
