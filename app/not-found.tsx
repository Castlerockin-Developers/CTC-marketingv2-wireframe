import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Main } from '@/components/sections';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header />
      <Main>
        <section className="hero center compact" style={{ padding: '120px 0' }}>
          <div className="wrap">
            <p className="eyebrow">Error 404</p>
            <h1 className="h1" style={{ marginTop: 12 }}>We couldn’t find that page</h1>
            <p className="lead" style={{ margin: '16px auto 0', maxWidth: 560 }}>The link may be old or mistyped. Try the home page, or go straight to company prep.</p>
            <div className="cta-row" style={{ justifyContent: 'center', marginTop: 32 }}>
              <Link className="btn btn-p" href="/">Go to the home page</Link>
              <Link className="btn btn-s" href="/prep/infosys/">Browse company prep</Link>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
