import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CompareTable, PricingPlans } from '@/components/Pricing';
import { FaqSec, Main } from '@/components/sections';
import { Band, Btn, Head, Icon, JsonLd, Sec } from '@/components/ui';
import { APP_URL, SITE_URL } from '@/content/site';

export const metadata = {
  title: 'Pricing: free plan, Pro and Pro + Placement',
  description: 'Start free with no credit card. Pro from ₹3,499 for 6 months; Pro + Placement from ₹7,499. Institutional licences for colleges.',
  alternates: { canonical: '/pricing/' },
};

export default function Pricing() {
  return (
    <>
      <Header />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Product', name: 'Crack The Campus', url: `${SITE_URL}/pricing/`, offers: [
        { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'INR' },
        { '@type': 'Offer', name: 'Pro, 6 months', price: '3499', priceCurrency: 'INR' },
        { '@type': 'Offer', name: 'Pro + Placement, 6 months', price: '7499', priceCurrency: 'INR' },
      ] }} />
      <Main>
        <section className="hero center compact" style={{ paddingBottom: 40 }}>
          <div className="wrap" data-enter>
            <h1 className="h1">Simple plans for placement prep</h1>
            <p className="lead" style={{ marginTop: 16 }}>Start free. Upgrade for more proctored assessments, advanced courses and placement support. Prices in INR, taxes as applicable.</p>
            <h2 className="sr">Plans</h2>
            <PricingPlans />
          </div>
        </section>

        <Sec className="light"><Head h="Compare plans" /><CompareTable /></Sec>

        <Sec>
          <div className="split" style={{ alignItems: 'start' }}>
            <h2 className="h2">What “placement support” includes</h2>
            <div>
              <p className="lead">Four one-to-one mock interviews with industry reviewers, two resume reviews, weekly drive alerts for your branch and graduation year, and priority registration for partner hiring events.</p>
              <div className="alert a-info" style={{ marginTop: 24 }}><Icon name="info" /><span>Placement support helps you prepare and apply. It does not guarantee a job offer.</span></div>
            </div>
          </div>
        </Sec>

        <Sec className="raised">
          <div className="cols c3">
            <div className="card"><span className="ic"><Icon name="lock" /></span><h3 className="h3s">Secure payments</h3><p>Pay with UPI, cards or net banking. Colleges can pay by bank transfer.</p></div>
            <div className="card"><span className="ic"><Icon name="refresh" /></span><h3 className="h3s">Change plans any time</h3><p>Upgrade or downgrade whenever you like; changes apply from your next billing cycle.</p></div>
            <div className="card"><span className="ic"><Icon name="card" /></span><h3 className="h3s">Refunds</h3><p>Read our <Link href="/refund-policy/">Refund &amp; cancellation policy</Link>.</p></div>
          </div>
        </Sec>

        <FaqSec h="Pricing questions" intro={false} items={[
          ['Can I switch between plans?', 'Yes. You can upgrade or downgrade at any time, and the change applies from your next billing cycle.'],
          ['Is there really a free plan?', 'Yes. The free plan has no time limit and needs no credit card.'],
          ['What payment methods do you accept?', 'UPI, credit and debit cards and net banking. Colleges can also pay by bank transfer.'],
          ['What happens when my plan ends?', 'You move back to the free plan and keep your CTC Score and history.'],
          ['Do you offer refunds?', 'Yes, within 7 days of purchase if you have used fewer than 3 CTC assessments. Full details are in our Refund & cancellation policy.'],
          ['Is there a coupon right now?', 'When an offer is running, it’s shown at the top of the site and applied automatically on this page.'],
          ['Is the price per month or one-time?', 'Each plan is paid once for the full period (6 or 12 months). The monthly figure is shown only for comparison.'],
        ]} />
        <Band hide={false} h="Not sure yet? Start free and upgrade any time." cta={<Btn kind="s" href={APP_URL}>Start free</Btn>} cta2={<Link href="/contact/">Talk to us</Link>} />
      </Main>
      <Footer />
      <div className="sticky" role="region" aria-label="Selected plan">
        <div className="st"><b>Pro + Placement</b><span data-stprice="">₹7,499 for 6 months</span></div>
        <a className="btn btn-p" href={APP_URL}>Get plan</a>
      </div>
    </>
  );
}
