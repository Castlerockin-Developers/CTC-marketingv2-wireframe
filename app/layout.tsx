import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE_URL, EMAIL } from '@/content/site';
import { JsonLd } from '@/components/ui';
import Motion from '@/components/Motion';
import { SITE } from '@/components/tw';

const head = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-head', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', preload: false }); // scores and timers only, so not preloaded

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Crack The Campus — placement prep for engineering students', template: '%s | Crack The Campus' },
  description: 'Company-wise aptitude and coding practice, proctored mock tests and a CTC Score from 0 to 10 for engineering students and colleges in India.',
  openGraph: { siteName: 'Crack The Campus', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', creator: '@crackthecampus' },
  icons: { icon: '/icon.svg' },
  // Same Search Console property as the live site.
  verification: { google: 'nRIXqWPiT5hLeDvzV50i9y_N2scWMntn4ql2Hs3RACc' },
};
export const viewport: Viewport = { themeColor: '#FFFFFF' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${head.variable} ${inter.variable} ${mono.variable}`}>
      <body className={`site ${SITE}`}>
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Crack The Campus', url: SITE_URL, email: EMAIL, logo: `${SITE_URL}/icon.svg`,
          address: { '@type': 'PostalAddress', streetAddress: 'Ground Floor, ThiDiff Tech Park, Singasandra', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560068', addressCountry: 'IN' } }} />
        {children}
        <div className="edge-blur" aria-hidden="true" />
        <Motion />
      </body>
    </html>
  );
}
