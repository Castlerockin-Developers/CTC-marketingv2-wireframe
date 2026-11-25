import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Main } from './sections';
import { Crumb } from './ui';

export const LEGAL_UPDATED = '24 November 2026';

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <Main>
        <section className="hero compact" style={{ paddingBottom: 40 }}>
          <div className="wrap"><div className="article-hd">
            <Crumb items={[['Home', '/'], [title]]} />
            <h1 className="h1">{title}</h1>
            <p className="lead" style={{ marginTop: 16 }}>{intro}</p>
            <p className="cap" style={{ marginTop: 12 }}>Last updated {LEGAL_UPDATED}</p>
          </div></div>
        </section>
        <section className="sec" style={{ paddingTop: 24 }}><div className="wrap"><article className="prose article-hd">{children}</article></div></section>
      </Main>
      <Footer />
    </>
  );
}
