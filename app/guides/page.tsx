import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GuideList } from '@/components/Guides';
import { StickyCta } from '@/components/interactive';
import { Main } from '@/components/sections';
import { Band, Btn } from '@/components/ui';
import { APP_URL } from '@/content/site';

export const metadata = {
  title: 'Placement guides for engineering students',
  description: 'What each company tests, how to practise it and how to walk into test day ready. Updated every hiring season.',
  alternates: { canonical: '/guides/' },
};

export default function Guides() {
  return (
    <>
      <Header />
      <Main>
        <section className="hero center compact" style={{ paddingBottom: 40 }}>
          <div className="wrap" data-enter>
            <h1 className="h1">Placement guides</h1>
            <p className="lead" style={{ maxWidth: 720, margin: '16px auto 0' }}>Practical guides for every stage of placement prep: what each company tests, how to practise it and how to walk into test day ready. Updated every hiring season.</p>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: 8 }}><div className="wrap"><GuideList /></div></section>
        <Band h="Practise what you read." p="Free company-wise practice, mock tests and your CTC Score." cta={<Btn href={APP_URL}>Start practising free</Btn>} cta2={<Link href="#nl-email">Get new guides by email</Link>} />
      </Main>
      <Footer />
      <StickyCta title="Free forever plan" sub="No credit card" cta="Start practising free" href={APP_URL} />
    </>
  );
}
