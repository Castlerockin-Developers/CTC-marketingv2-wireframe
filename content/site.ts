// Real facts and shared structure, taken from ctc-light-mockups.html / the content doc.
import { REPLY_TIME } from './dummy';

// Web app (ctc-wapp). Required for production builds (checked in next.config.mjs).
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || '').replace(/\/$/, '') || '#';
export const LOGIN_URL = APP_URL === '#' ? '#' : `${APP_URL}/login`;
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://crackthecampus.com').replace(/\/$/, '');
export const DOWNLOAD_URL = 'https://crackthecampus.com/download';
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
  { title: 'Company prep', desc: 'Patterns and mock tests for Infosys, Wipro, Capgemini and more', icon: 'building', href: '/prep/infosys/' },
  { title: 'Aptitude', desc: 'Quant, reasoning and verbal, topic by topic', icon: 'sigma', href: APP_URL },
  { title: 'Coding', desc: 'Placement-style problems in Python, Java, C and C++', icon: 'code', href: APP_URL },
  { title: 'Courses', desc: 'Skill tracks from beginner to placement-ready', icon: 'book', href: '/courses/python/' },
  { title: 'Mock tests', desc: 'Timed and proctored, free to start', icon: 'clock', href: APP_URL },
  { title: 'Resume builder', desc: 'An ATS-friendly fresher resume in minutes', icon: 'file', href: APP_URL },
  { title: 'CTC Score', desc: 'Your placement readiness score from 0 to 10', icon: 'target', href: '/#ctc-score' },
  { title: 'Download the app', desc: 'Windows, macOS and Linux', icon: 'dl', href: DOWNLOAD_URL },
];
export const COLLEGE_NAV: NavItem[] = [
  { title: 'Platform overview', desc: 'One admin suite for your placement programme', icon: 'grid', href: '/colleges/' },
  { title: 'Proctored exams', desc: 'Run your internal tests in a secure app', icon: 'shield', href: '/colleges/#suite' },
  { title: 'Placement training (CRT)', desc: 'Aptitude, coding and company tracks for every batch', icon: 'layers', href: '/colleges/#suite' },
  { title: 'Readiness analytics', desc: 'Know who is ready before hiring season', icon: 'chart', href: '/colleges/#suite' },
  { title: 'Case studies', desc: 'How colleges use Crack The Campus', icon: 'file', href: '/colleges/#case-study' },
];
export const RESOURCE_NAV: NavItem[] = [
  { title: 'Placement guides', icon: 'book', href: '/guides/' },
  { title: 'Help and support', icon: 'info', href: '/contact/#help' },
  { title: 'FAQ', icon: 'chat', href: '/#faq' },
];

export const FOOTER_COLS: { title: string; links: [string, string][] }[] = [
  { title: 'Students', links: [['Company prep', '/prep/infosys/'], ['Aptitude', APP_URL], ['Coding', APP_URL], ['Courses', '/courses/python/'], ['Contests', '/contests/code-nova-3/'], ['Download the app', DOWNLOAD_URL]] },
  { title: 'Colleges', links: [['Platform overview', '/colleges/'], ['Proctored exams', '/colleges/#suite'], ['Placement training', '/colleges/#suite'], ['Readiness analytics', '/colleges/#suite'], ['Case studies', '/colleges/#case-study'], ['Book a demo', '/colleges/#demo']] },
  { title: 'Company', links: [['About us', '/about/'], ['Contact', '/contact/'], ['Careers', 'mailto:info@crackthecampus.com?subject=Careers'], ['Press', '/about/#press']] },
  { title: 'Resources', links: [['Placement guides', '/guides/'], ['Help and support', '/contact/#help'], ['FAQ', '/#faq'], ['CTC Score explained', '/#ctc-score']] },
];

export const COMPANIES: { slug: string; name: string }[] = [
  { slug: 'infosys', name: 'Infosys' },
  { slug: 'wipro', name: 'Wipro' },
  { slug: 'capgemini', name: 'Capgemini' },
  { slug: 'hcl', name: 'HCL' },
  { slug: 'ltimindtree', name: 'LTIMindtree' },
  { slug: 'oracle', name: 'Oracle' },
  { slug: 'microsoft', name: 'Microsoft' },
];

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
  { slug: 'capgemini-game-based-aptitude', title: 'Capgemini game-based aptitude test: what it is and how to prepare', summary: 'What the Capgemini game-based aptitude test is, what each game measures, how scoring usually works and a 3-week practice plan.', cat: 'Company guides', read: '7 min read', alt: 'Student playing a grid-based puzzle game on a laptop during practice' },
  { slug: 'what-is-a-proctored-exam', title: 'What is a proctored exam? A student’s guide to online proctored tests', summary: 'What online proctored exams are, what they monitor, the rules that trip students up and a checklist to prepare.', cat: 'Assessments', read: '7 min read', alt: 'Student at a laptop with webcam on during an online proctored test' },
  { slug: 'time-speed-distance', title: 'Time, speed and distance: shortcuts and a 30-minute practice plan', summary: 'The four formulas that cover most placement questions, and a timed drill to make them automatic.', cat: 'Aptitude', read: '6 min read', alt: 'Hand-drawn speed and distance diagram in a notebook', planned: true },
  { slug: 'pseudo-code-questions', title: 'Pseudocode questions for placement: how to trace any snippet', summary: 'A three-step tracing method for loops, recursion and bit operations, with worked examples.', cat: 'Coding', read: '8 min read', alt: 'Pseudocode snippet with variables traced in the margin', planned: true },
  { slug: 'fresher-resume-format', title: 'Fresher resume format for engineering students (with examples)', summary: 'A one-page layout that passes ATS filters, with project bullet examples for CSE, ECE and Mech.', cat: 'Resume', read: '9 min read', alt: 'One-page fresher resume on a desk', planned: true },
  { slug: 'hr-interview-questions', title: 'HR interview questions for freshers (with sample answers)', summary: 'The 12 questions that come up most, and how to answer them honestly in under a minute.', cat: 'Interviews', read: '10 min read', alt: 'Student in a mock HR interview', planned: true },
  { slug: 'improve-college-placement-record', title: 'How to improve your college’s placement record', summary: 'What placement cells that improved first-round clear rates did differently, term by term.', cat: 'For colleges', read: '8 min read', alt: 'Placement officer reviewing a batch readiness report', planned: true },
  { slug: 'code-nova-2-results', title: 'Code Nova 2: results and what top scorers did', summary: 'How the top 10 approached the three problems, and the habits they shared.', cat: 'Contests', read: '5 min read', alt: 'Contest leaderboard on a laptop screen', planned: true },
];

export const POST_SLUG = 'how-to-prepare-for-campus-placement';
export const REPLY = REPLY_TIME;
