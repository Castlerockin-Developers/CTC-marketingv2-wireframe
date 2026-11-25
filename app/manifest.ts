import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crack The Campus', short_name: 'CTC', description: 'Placement prep, proctored mock tests and the CTC Score for engineering students in India.',
    start_url: '/', display: 'standalone', background_color: '#FFFFFF', theme_color: '#FFFFFF',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
