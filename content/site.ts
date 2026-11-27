// Real facts and shared structure, taken from ctc-light-mockups.html / the content doc.
import { REPLY_TIME } from './dummy';

// Web app (ctc-wapp). Required for production builds (checked in next.config.mjs).
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/$/, '') || '#';
export const LOGIN_URL = APP_URL === '#' ? '#' : `${APP_URL}/login`;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://crackthecampus.com').replace(/\/$/, '');
export const DOWNLOAD_URL = '/download/';

/** Desktop app installers (storage.crackthecampus.com, checked 26 Nov 2026). Sizes in MB. */
const STORE = 'https://storage.crackthecampus.com/';
export const APP_VERSION = '1.4.17';
// shortcut: the 1.4.17 .deb files on storage are empty (96 bytes), so Linux points at 1.4.16 until they are re-uploaded
export const LINUX_VERSION = '1.4.16';
export const DOWNLOADS = {
  windows: { label: 'Windows installer (.exe)', href: `${STORE}Crack%20The%20Campus-${APP_VERSION}-Setup.exe`, mb: 150 },
  macUniversal: { label: 'macOS Universal (.dmg)', href: `${STORE}Crack%20The%20Campus-${APP_VERSION}-universal.dmg`, mb: 255 },
  macArm: { label: 'Apple Silicon only (.dmg)', href: `${STORE}Crack%20The%20Campus-${APP_VERSION}-arm64.dmg`, mb: 173 },
  macIntel: { label: 'Intel only (.dmg)', href: `${STORE}Crack%20The%20Campus-${APP_VERSION}.dmg`, mb: 180 },
  linuxX64: { label: 'Linux x64 (.deb)', href: `${STORE}crackthecampus_${LINUX_VERSION}_amd64.deb`, mb: 133 },
  linuxArm: { label: 'Linux ARM64 (.deb)', href: `${STORE}crackthecampus_${LINUX_VERSION}_arm64.deb`, mb: 128 },
};
/** Social profiles render in the footer only when a URL is set here. */
export const SOCIAL: { label: string; icon: string; href: string }[] = [
  { label: 'LinkedIn', icon: 'linkedin', href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '' },
  { label: 'Instagram', icon: 'instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '' },
  { label: 'YouTube', icon: 'youtube', href: process.env.NEXT_PUBLIC_YOUTUBE_URL || '' },
].filter((x) => x.href);

export const EMAIL = 'info@crackthecampus.com';
export const SUPPORT = 'support@crackthecampus.com';
export const ADDRESS_LONG =
  'Ground Floor, ThiDiff Tech Park, Metro Station – Patalamma Temple, near Singasandra, Aishwarya Crystal Layout, Singasandra, Bengaluru, Karnataka 560068';
export const ADDRESS_SHORT = 'Ground Floor, ThiDiff Tech Park, Singasandra, Bengaluru, Karnataka 560068';
export const MAPS_URL = 'https://maps.app.goo.gl/y6P9HgeWedwsfCiz9';

export type NavItem = { title: string; desc?: string; icon: string; href: string };

export const STUDENT_NAV: NavItem[] = [
  { title: 'Company prep', desc: 'Patterns and mock tests for Infosys, Wipro, Capgemini and more', icon: 'building', href: '/prep/' },
  { title: 'Aptitude', desc: 'Quant, reasoning and verbal, topic by topic', icon: 'sigma', href: '/aptitude/' },
  { title: 'Coding', desc: 'Placement-style problems in Python, Java, C and C++', icon: 'code', href: '/coding/' },
  { title: 'Courses', desc: 'Skill tracks from beginner to placement-ready', icon: 'book', href: '/courses/' },
  { title: 'Mock tests', desc: 'Timed and proctored, free to start', icon: 'clock', href: '/mock-tests/' },
  { title: 'Resume builder', desc: 'An ATS-friendly fresher resume in minutes', icon: 'file', href: '/resume-builder/' },
  { title: 'CTC Score', desc: 'Your placement readiness score from 0 to 10', icon: 'target', href: '/ctc-score/' },
  { title: 'Download the app', desc: 'Windows, macOS and Linux', icon: 'dl', href: DOWNLOAD_URL },
];
export const COLLEGE_NAV: NavItem[] = [
  { title: 'Platform overview', desc: 'One admin suite for your placement programme', icon: 'grid', href: '/colleges/' },
  { title: 'Proctored exams', desc: 'Run your internal tests in a secure app', icon: 'shield', href: '/colleges/proctored-exams/' },
  { title: 'Placement training (CRT)', desc: 'Aptitude, coding and company tracks for every batch', icon: 'layers', href: '/colleges/placement-training/' },
  { title: 'Readiness analytics', desc: 'Know who is ready before hiring season', icon: 'chart', href: '/colleges/readiness-analytics/' },
  { title: 'Case studies', desc: 'How colleges use Crack The Campus', icon: 'file', href: '/colleges/case-studies/' },
];
export const RESOURCE_NAV: NavItem[] = [
  { title: 'Placement guides', icon: 'book', href: '/guides/' },
  { title: 'Help docs', icon: 'info', href: '/docs/' },
  { title: 'FAQ', icon: 'chat', href: '/faq/' },
  { title: 'Compare platforms', icon: 'layers', href: '/compare/' },
];

export const FOOTER_COLS: { title: string; links: [string, string][] }[] = [
  { title: 'Students', links: [['Company prep', '/prep/'], ['Aptitude', '/aptitude/'], ['Coding', '/coding/'], ['Courses', '/courses/'], ['Mock tests', '/mock-tests/'], ['Contests', '/contests/'], ['Download the app', DOWNLOAD_URL]] },
  { title: 'Colleges', links: [['Platform overview', '/colleges/'], ['Proctored exams', '/colleges/proctored-exams/'], ['Placement training', '/colleges/placement-training/'], ['Readiness analytics', '/colleges/readiness-analytics/'], ['Case studies', '/colleges/case-studies/'], ['Book a demo', '/colleges/demo/']] },
  { title: 'Company', links: [['About us', '/about/'], ['Contact', '/contact/'], ['Careers', 'mailto:info@crackthecampus.com?subject=Careers'], ['Pricing', '/pricing/']] },
  { title: 'Resources', links: [['Placement guides', '/guides/'], ['Help docs', '/docs/'], ['FAQ', '/faq/'], ['Compare platforms', '/compare/'], ['CTC Score explained', '/ctc-score/']] },
];

/** logoH: rendered logo height in px, tuned per mark so wide wordmarks and square marks look the same size.
 *  seoTitle: the <title> from the content doc (§3, one primary keyword per page).
 *  Logos (public/images/logos/<slug>.svg) are the companies' trademarks from Wikimedia Commons; used only to name the test we prep for. */
export const COMPANIES: { slug: string; name: string; logoH: number; seoTitle: string }[] = [
  { slug: 'infosys', name: 'Infosys', logoH: 30, seoTitle: 'Infosys Mock Test \& Exam Pattern 2026 | CTC' },
  { slug: 'wipro', name: 'Wipro', logoH: 52, seoTitle: 'Wipro NLTH Mock Test, Pattern \& Eligibility | CTC' },
  { slug: 'capgemini', name: 'Capgemini', logoH: 30, seoTitle: 'Capgemini Mock Test \& Exam Pattern 2026 | CTC' },
  { slug: 'hcl', name: 'HCL', logoH: 20, seoTitle: 'HCL Test Pattern \& Mock Test for Freshers | CTC' },
  { slug: 'ltimindtree', name: 'LTIMindtree', logoH: 26, seoTitle: 'LTIMindtree Mock Test \& Aptitude Test Pattern | CTC' },
  { slug: 'oracle', name: 'Oracle', logoH: 20, seoTitle: 'Oracle Aptitude Test for Freshers: Practice | CTC' },
  { slug: 'microsoft', name: 'Microsoft', logoH: 30, seoTitle: 'Microsoft Online Assessment Practice for Freshers | CTC' },
];

/** The content doc's wording for any page that names recruiters. */
export const NOT_AFFILIATED = 'Company names are used only to describe the tests we help you practise for. Crack The Campus is not affiliated with these companies.';

export type Faq = [string, string];

export const FAQ_HOME: Faq[] = [
  ['Is Crack The Campus free?', 'Yes. The free plan has no time limit and needs no credit card. It includes 1 AI-powered resume, 5 CTC assessments, practice assessments, limited AI help and limited contests. Pro plans add more assessments, advanced courses and full contest access.'],
  ['What is the CTC Score, and who can see it?', 'The CTC Score is a placement readiness score from 0 to 10, based on your skills, practice and proctored test results. It is not your salary “CTC”. Only you can see it, unless you share your profile link with a recruiter.'],
  ['Do I need the desktop app?', 'You can learn and practise in the browser. You need the free desktop app (Windows, macOS or Linux) for proctored mock tests and contests, because they run in a secure, monitored window.'],
  ['Which companies can I prepare for?', 'Company prep currently covers Infosys, Wipro, Capgemini, HCL, LTIMindtree, Oracle and Microsoft, with more being added.'],
  ['How are tests proctored?', 'Proctored tests run in the desktop app with AI monitoring and screen-lock protection, similar to the conditions many companies use in online hiring tests.'],
  ['How is this different from free practice websites?', 'Free sites give you questions. Crack The Campus adds company-pattern mocks, proctored test conditions and a score that tracks your readiness over time.'],
  ['Can my college use Crack The Campus?', 'Yes. Colleges get an admin suite for proctored internal exams, readiness analytics and curriculum-linked practice. Book a demo on the colleges page.'],
];

export const PLAN_PRICES = {
  pro: { p6: '₹3,499', w6: '₹4,665', m6: 'about ₹583 a month', p12: '₹5,499', w12: '₹10,998', m12: 'about ₹458 a month' },
  pp: { p6: '₹7,499', w6: '₹9,999', m6: 'about ₹1,250 a month', p12: '₹9,999', w12: '₹19,998', m12: 'about ₹833 a month' },
};

export const COLLEGE_INCLUDES = ['Unlimited assessments', 'Unlimited AI learning', 'Full admin access', 'Detailed analytics', 'Contest access', 'Access to job opportunities', 'Internship offers', 'Priority support', 'Dedicated account manager', 'Custom branding'];

export type Guide = { slug: string; title: string; summary: string; cat: string; read: string; alt: string; planned?: boolean };
export const GUIDES: Guide[] = [
  { slug: 'capgemini-game-based-aptitude-test', title: 'Capgemini game-based aptitude test: what it is and how to prepare', summary: 'What the Capgemini game-based aptitude test is, what each game measures, how scoring usually works and a 3-week practice plan.', cat: 'Company guides', read: '7 min read', alt: 'Laptop showing a grid-based puzzle game with a countdown timer' },
  { slug: 'what-is-a-proctored-exam', title: 'What is a proctored exam? A student’s guide to online proctored tests', summary: 'What online proctored exams are, what they monitor, the rules that trip students up and a checklist to prepare.', cat: 'Assessments', read: '7 min read', alt: 'Laptop running a locked online proctored test with the webcam on' },
  { slug: 'time-speed-distance', title: 'Time, speed and distance: shortcuts and a 30-minute practice plan', summary: 'The four formulas that cover most placement questions, and a timed drill to make them automatic.', cat: 'Aptitude', read: '6 min read', alt: 'Notebook with hand-drawn train and platform diagrams and speed, distance and time formulas', planned: true },
  { slug: 'pseudo-code-questions', title: 'Pseudocode questions for placement: how to trace any snippet', summary: 'A three-step tracing method for loops, recursion and bit operations, with worked examples.', cat: 'Coding', read: '8 min read', alt: 'Printed pseudocode with variable values traced in pencil beside a laptop', planned: true },
  { slug: 'fresher-resume-format', title: 'Fresher resume format for engineering students (with examples)', summary: 'A one-page layout that passes ATS filters, with project bullet examples for CSE, ECE and Mech.', cat: 'Resume', read: '9 min read', alt: 'One-page fresher resume on a desk with a highlighter and pen', planned: true },
  { slug: 'hr-interview-questions', title: 'HR interview questions for freshers (with sample answers)', summary: 'The 12 questions that come up most, and how to answer them honestly in under a minute.', cat: 'Interviews', read: '10 min read', alt: 'Interview room with two chairs, a notepad and a printed resume on the table', planned: true },
  { slug: 'improve-college-placement-record', title: 'How to improve your college’s placement record', summary: 'What placement cells that improved first-round clear rates did differently, term by term.', cat: 'For colleges', read: '8 min read', alt: 'Placement office desk with a readiness dashboard on a laptop and a printed report', planned: true },
  { slug: 'code-nova-2-results', title: 'Code Nova 2: results and what top scorers did', summary: 'How the top 10 approached the three problems, and the habits they shared.', cat: 'Contests', read: '5 min read', alt: 'Coding contest leaderboard on a laptop at night', planned: true },
];

export const POST_SLUG = 'how-to-prepare-for-campus-placement';
export const REPLY = REPLY_TIME;
