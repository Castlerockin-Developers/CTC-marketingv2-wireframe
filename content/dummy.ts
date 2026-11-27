/**
 * DRAFT SAMPLE DATA — every value in this file is invented for the mock-up.
 * Replace each one with a verified figure, a real (consented) quote or a real date before launch.
 * Real facts (prices, plan limits, address, emails, company list) live in content/site.ts.
 */

export const STATS = {
  students: '48,000+',
  colleges: '120+',
  drives: '1,300+', // from the current site — confirm the definition
  contestants: '9,500+',
  studentsAssessed: '2.1 lakh',
  caseMetric: '31%',
  founded: '2023',
};

export const PHONE = '+91 80 4000 0000';
export const WHATSAPP = '+91 90000 00000';
export const HOURS = 'Mon–Sat, 10 am–7 pm IST';
export const REPLY_TIME = '4 working hours';

export const PARTNER_COLLEGES = [
  'RV Institute of Technology',
  'Sri Venkateswara College of Engg.',
  'PES Institute of Science',
  'Dayananda Sagar Institute',
  'Christ School of Engineering',
  'Nitte Institute of Technology',
];

export type Quote = { text: string; name: string; meta: string };

export const STUDENT_QUOTES: Quote[] = [
  { text: 'The Capgemini game rounds were the part I feared most. After a week of the practice games, the real test felt familiar.', name: 'Ananya Rao', meta: 'ECE, 2026, placed at Capgemini' },
  { text: 'Taking proctored mocks with the camera on fixed my nerves. I stopped freezing on the first question.', name: 'Karthik Menon', meta: 'CSE, 2026, placed at Infosys (SP)' },
  { text: 'Watching my CTC Score go from 5.4 to 7.9 told me when I was actually ready, not just busy.', name: 'Sneha Patil', meta: 'ISE, 2026, CTC Score 7.9' },
  { text: 'Company-wise mocks showed me Wipro’s pattern was different from what my seniors described.', name: 'Rahul Verma', meta: 'Mech, 2026, placed at Wipro' },
  { text: 'I used the free sample first. The explanations were good enough that I upgraded the same night.', name: 'Divya Shetty', meta: 'CSE, 2025, placed at LTIMindtree' },
  { text: 'Code Nova 2 was my first timed coding contest. Rank 14 gave me confidence for the HCL drive.', name: 'Mohammed Faiz', meta: 'IT, 2026, Code Nova 2, rank 14' },
];

export const INFOSYS_QUOTES: Quote[] = [
  { text: 'The pseudocode sets were close to the real thing. I cleared the online test on my first attempt.', name: 'Pooja Iyer', meta: 'CSE, 2026, Infosys SE' },
  { text: 'I switched to the SP track after my sample score. The advanced coding mocks made the difference.', name: 'Karthik Menon', meta: 'CSE, 2026, Infosys SP' },
  { text: 'Weekly proctored mocks kept me honest about my timing on the puzzle section.', name: 'Aditya Kulkarni', meta: 'ECE, 2026, Infosys DSE' },
];

export const LEARNER_QUOTES: Quote[] = [
  { text: 'I had only used C before. Two weeks in, I was solving string problems faster in Python.', name: 'Nikhil Joshi', meta: 'ECE, 3rd year' },
  { text: 'The practice set after every module is the best part. No tutorial-hell.', name: 'Meera Nair', meta: 'CSE, 2nd year' },
  { text: 'Module tests in the desktop app felt exactly like my Infosys coding round.', name: 'Varun Gowda', meta: 'IT, final year' },
];

export const TPO_QUOTE: Quote & { metrics: string[] } = {
  text: 'We ran all our internal aptitude tests on Crack The Campus this year. For the first time, we knew which students needed help before the drives started.',
  name: 'Dr. Lakshmi Narayan',
  meta: 'Training & Placement Officer, RV Institute of Technology',
  metrics: ['31% more students cleared first-round tests', '40 hours of faculty time saved per semester'],
};

export const TEAM = [
  { name: 'Arjun Prakash', role: 'Co-founder & CEO', bio: 'Ran placement training for 30+ engineering colleges in Karnataka.' },
  { name: 'Nisha Reddy', role: 'Co-founder & CTO', bio: 'Built proctoring systems used for 1,000+ online assessments.' },
  { name: 'Vikram Bhat', role: 'Head of Content', bio: 'Leads the Prep Deck research on every company pattern.' },
  { name: 'Prof. S. Ramesh', role: 'Advisor, former TPO', bio: '20 years as a training and placement officer.' },
];

export const CONTEST = {
  date: '14 Dec 2026',
  iso: '2026-12-14T19:00:00+05:30',
  time: '7:00 pm',
  duration: '90 minutes',
  deadline: '12 Dec 2026',
  results: '17 Dec 2026',
  format: '3 coding problems, easy to hard',
  eligibility: 'Any student enrolled in a UG or PG programme in India',
  languages: 'Python, Java, C, C++, JavaScript',
  eliteRanks: 'Ranks 1–10',
  growthRanks: 'Ranks 11–50',
  lastName: 'Code Nova 2',
  lastResults: [
    ['1', 'PRI****YA', 'PES Institute of Science', '8'],
    ['2', 'ARJ****AN', 'RV Institute of Technology', '7.8'],
    ['3', 'NEH****RI', 'Nitte Institute of Technology', '7.2'],
  ],
};

export const INFOSYS = {
  updated: 'November 2026',
  practiceSets: '42',
  mocks: '8',
  minutes: '15',
  rounds: '3 — online test, technical interview, HR interview',
  sections: 'Reasoning, mathematical ability, verbal ability, pseudocode, puzzle solving; coding for SP and DSE',
  duration: '100 minutes (online test)',
  negative: 'No',
};

export const COURSE = { duration: '6 weeks', modules: '8', freeModules: '2', lessons: '12', lesson1: 'Variables, input and output', lesson1Len: '14 min' };

export const PRESS = [
  { outlet: 'YourStory', headline: 'Bengaluru edtech brings proctored practice to tier-2 colleges', date: 'Aug 2026' },
  { outlet: 'Inc42', headline: '30 startups to watch in campus hiring tech', date: 'May 2026' },
  { outlet: 'The Hindu', headline: 'How students are preparing for game-based aptitude tests', date: 'Feb 2026' },
];

/** photo: path under public/ once a real headshot exists (e.g. '/images/team/vikram.jpg'). */
export const AUTHOR: { name: string; role: string; reviewer: string; updated: string; bio: string; photo?: string } = { name: 'Vikram Bhat', role: 'Head of Content', reviewer: 'Arjun Prakash, Co-founder', updated: '18 Nov 2026', bio: 'Vikram has coached 4,000+ students through campus placements and leads the Prep Deck research at Crack The Campus.' };
