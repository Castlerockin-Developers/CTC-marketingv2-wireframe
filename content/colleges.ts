// Shared bits of the college pages (content doc §4.21–4.26).
export const DEMO = '/colleges/demo/';
export const COLLEGE_STICKY: [string, string, string, string] = ['20-minute demo', 'Free, no commitment', 'Book a demo', DEMO];
export const collegeBand = (h: string) => ({ h, p: 'A 20-minute demo with your own use case. No commitment.', cta: ['Book a demo', DEMO] as [string, string], link: ['See the admin suite', '/colleges/'] as [string, string] });
export const collegeCrumb = (page: string): [string, string?][] => [['Home', '/'], ['For Colleges', '/colleges/'], [page]];
