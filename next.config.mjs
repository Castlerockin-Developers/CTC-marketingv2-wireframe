import { fileURLToPath } from 'node:url';

// Production builds must point Log in / Start free at the real web app instead of "#".
if (process.env.VERCEL_ENV === 'production' && !process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error('NEXT_PUBLIC_APP_URL is required for production builds (the ctc-wapp base URL, e.g. https://app.crackthecampus.com).');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)), // parent CTC/ has its own lockfile
};
export default nextConfig;
