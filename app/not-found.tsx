import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Main } from '@/components/sections';
import { btn, tw } from '@/components/tw';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact} text-center`} style={{ padding: '120px 0' }}>
          <div className={`${tw.wrap} ${tw.heroWrap}`}>
            <p className={tw.eyebrow}>Error 404</p>
            <h1 className={`${tw.h1} ${tw.heroH1}`} style={{ marginTop: 12 }}>This page has moved or doesn’t exist</h1>
            <p className={`${tw.lead} ${tw.heroLead} mx-auto`} style={{ margin: '16px auto 0', maxWidth: 560 }}>The link may be old, or there might be a typo in the address. Try one of these instead.</p>
            <div className={`${tw.ctaRow} ${tw.heroCta} justify-center`} style={{ justifyContent: 'center', marginTop: 32 }}>
              <Link className={`${btn('p')}`} data-btn="p" href="/">Go to the home page</Link>
              <Link className={`${btn('s')}`} data-btn="s" href="/prep/">Browse company prep</Link>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
