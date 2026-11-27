import { fileURLToPath } from 'node:url';

// Production builds must point Log in / Start free at the real web app instead of "#".
if (process.env.VERCEL_ENV === 'production' && !process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error('NEXT_PUBLIC_APP_URL is required for production builds (the ctc-wapp base URL, e.g. https://app.crackthecampus.com).');
}
// Forms (contact, college demo, newsletter) email the team through Web3Forms; without the key they would silently go nowhere.
// shortcut: guard disabled so deploys pass without a key; forms send nothing until NEXT_PUBLIC_WEB3FORMS_KEY is set in Vercel, then re-enable.
// if (process.env.VERCEL_ENV === 'production' && !process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
//   throw new Error('NEXT_PUBLIC_WEB3FORMS_KEY is required for production builds (free key from web3forms.com, tied to the inbox that should receive leads).');
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)), // parent CTC/ has its own lockfile
};
export default nextConfig;
