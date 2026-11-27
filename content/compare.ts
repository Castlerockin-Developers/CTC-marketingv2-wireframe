// Comparison pages (content doc §3.13–3.15). Rule: never publish an unverified claim about a named competitor.
// Cells the doc marks [Verify] render as "Check their site" until someone confirms them on the competitor's
// own website and records the date in CHECKED. Do not use Review schema for competitors.
import type { Faq } from './site';

export const CHECKED = ''; // e.g. '20 Nov 2026'; shown as "Last checked" once competitor cells are verified
export const UNVERIFIED = 'Check their site';

export type Row = [feature: string, ctc: string];
export const ROWS: Row[] = [
  ['Best for', 'Practising company tests under proctored conditions and tracking readiness'],
  ['Company prep', 'Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle, Microsoft'],
  ['Playable game-based aptitude', 'Yes (Capgemini-style challenges)'],
  ['Proctored mock tests', 'Yes, in a desktop app'],
  ['Readiness score', 'CTC Score (0–10)'],
  ['Free plan', 'Yes, no time limit'],
  ['Paid plans', 'From ₹3,499 for 6 months'],
  ['For colleges', 'Proctored exams, readiness analytics, curriculum vault'],
];

export type Rival = { slug: string; name: string; site: string; known: Partial<Record<string, string>> };
/** Only the cells the content doc states without a [Verify] mark. */
export const RIVALS: Rival[] = [
  { slug: 'prepinsta', name: 'PrepInsta', site: 'https://prepinsta.com', known: { 'Best for': 'Large library of company articles and courses' } },
  { slug: 'face-prep', name: 'FACE Prep', site: 'https://www.faceprep.in', known: { 'Best for': 'Company guides and free articles', 'Playable game-based aptitude': 'Guides', 'Free plan': 'Free articles', 'For colleges': 'Campus programmes' } },
  { slug: 'placementpreparation-io', name: 'PlacementPreparation.io', site: 'https://www.placementpreparation.io', known: { 'Best for': 'Company exam hubs and mock tests' } },
];

export type VsPage = { slug: string; rival: string; seoTitle: string; desc: string; sub: string; short: [string, string]; who: [string, string][]; together?: string; faq: Faq[] };
export const VS: VsPage[] = [
  {
    slug: 'prepinsta', rival: 'PrepInsta', seoTitle: 'PrepInsta Alternative: Crack The Campus Compared',
    desc: 'How Crack The Campus compares with PrepInsta on mock tests, proctoring, company prep and pricing, so you can choose.',
    sub: 'PrepInsta is one of India’s best-known placement prep sites. Here’s an honest look at where each one fits.',
    short: ['PrepInsta offers a large library of company articles and courses. Check their site for current plans and prices.', 'Crack The Campus focuses on practising company tests in a proctored desktop app and tracking your readiness with the CTC Score.'],
    who: [['PrepInsta may suit you if…', 'you want a large set of written guides and video courses in one subscription.'], ['Crack The Campus may suit you if…', 'you want to practise under timed, proctored conditions, play Capgemini-style games and see a readiness score.']],
    faq: [
      ['Is Crack The Campus a good PrepInsta alternative?', 'It’s a strong choice if you want proctored practice and readiness tracking. If you mainly want written guides, you may use both.'],
      ['How much does Crack The Campus cost?', 'Pro costs ₹3,499 for 6 months, and there is a free plan with no time limit. Check PrepInsta’s site for their current prices.'],
      ['Can I try Crack The Campus before paying?', 'Yes. The free plan has no time limit and includes 5 CTC assessments.'],
      ['Does Crack The Campus have company mock tests?', 'Yes, for Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft.'],
      ['Are the two companies related?', 'No. They are separate companies.'],
    ],
  },
  {
    slug: 'face-prep', rival: 'FACE Prep', seoTitle: 'FACE Prep Alternative: Crack The Campus Compared',
    desc: 'Compare Crack The Campus and FACE Prep on company guides, mock tests, proctoring and college programmes.',
    sub: 'FACE Prep has years of placement training behind it and a large library of free guides. Here’s how it differs from Crack The Campus.',
    short: ['FACE Prep is known for detailed company guides and campus training programmes for colleges.', 'Crack The Campus lets you practise those company tests interactively, including Capgemini-style games, in a proctored desktop app with a readiness score.'],
    who: [['Use FACE Prep if…', 'you want to read long-form company guides.'], ['Use Crack The Campus if…', 'you want to practise the same sections under a timer and in proctored conditions.']],
    together: 'Many students read a company guide first, then practise the same sections under a timer. If that’s you, use the guides you like and take proctored mocks with Crack The Campus to check you’re ready.',
    faq: [
      ['Is Crack The Campus a FACE Prep alternative?', 'For practice and proctored mocks, yes. For reading long-form guides, many students use both.'],
      ['Which is better for the Capgemini game-based round?', 'Guides explain the games; practising them helps you get faster. Crack The Campus has playable Capgemini-style challenges.'],
      ['Does Crack The Campus work with colleges?', 'Yes. Crack The Campus offers proctored internal exams, readiness analytics and a curriculum vault for colleges.'],
      ['Is Crack The Campus free?', 'Yes, with a free plan that has no time limit.'],
      ['Are the two companies related?', 'No.'],
    ],
  },
];
