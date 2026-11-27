// Course pages from the content doc §4.14–4.20. Python has its own page (app/courses/python) with modules and a
// lesson preview; the others share app/courses/[course]. Module lists, durations and certificates are not confirmed
// in the doc yet, so those pages leave them out rather than invent them.
import type { Faq } from './site';

export type Course = {
  slug: string; name: string; seoTitle: string; desc: string; line: string;
  sub: string; able: string[]; who: string; objection: [string, string];
  sample: { label: string; tags: string[]; q: string; opts: string[] };
  practice: { t: string; b: string; href: string; link: string }[];
  faq: Faq[];
};

/** All six, in the hub's order (Python first). */
export const COURSE_LIST: { slug: string; name: string; line: string }[] = [
  { slug: 'python', name: 'Python', line: 'The fastest language to write in coding rounds.' },
  { slug: 'java', name: 'Java', line: 'Object-oriented foundations many companies ask about.' },
  { slug: 'c', name: 'C Programming', line: 'The basics behind pointers, memory and output questions.' },
  { slug: 'cpp', name: 'C++', line: 'Speed and the standard library for competitive-style problems.' },
  { slug: 'javascript', name: 'JavaScript', line: 'For web roles and front-end interviews.' },
  { slug: 'aptitude-reasoning', name: 'Aptitude & Logical Reasoning', line: 'Every topic in placement aptitude rounds.' },
];

export const COURSES: Course[] = [
  {
    slug: 'java', name: 'Java', seoTitle: 'Java for Placements: Beginner Course | CTC', line: COURSE_LIST[1].line,
    desc: 'Learn Java and object-oriented programming for placement tests and technical interviews. Practice after every module.',
    sub: 'Java teaches object-oriented thinking that interviewers love to ask about, and it’s accepted in most coding assessments. Build both skills in one course.',
    able: ['Write Java programs with classes, objects and methods', 'Explain OOP concepts (encapsulation, inheritance, polymorphism, abstraction) clearly in interviews', 'Use arrays, strings and collections to solve placement problems', 'Handle exceptions and common runtime errors'],
    who: 'Students targeting roles where OOP questions are common, and anyone whose college teaches Java.',
    objection: ['“Java is verbose. Will it slow me down?”', 'A little at first. Templates and practice close the gap, and the OOP knowledge pays off in interviews.'],
    sample: { label: 'Java course, classes and objects', tags: ['Java', 'OOP'], q: 'Which OOP idea lets a subclass give its own version of a parent method?', opts: ['Overriding', 'Overloading', 'Encapsulation'] },
    practice: [
      { t: 'Java problem set', b: 'Placement-style problems, auto-graded.', href: '/coding/', link: 'Open practice' },
      { t: 'Coding mock test', b: 'Proctored and timed, in the desktop app.', href: '/mock-tests/', link: 'See mock tests' },
      { t: 'Oracle prep', b: 'Aptitude and technical practice for freshers.', href: '/prep/oracle/', link: 'Start Oracle prep' },
    ],
    faq: [
      ['Is Java good for placements?', 'Yes, especially for interviews that test OOP.'],
      ['Java or Python: which should I learn?', 'Learn the one your college uses or that your target companies favour; either works for most coding rounds.'],
      ['Will I learn OOP concepts?', 'Yes, with interview-style questions.'],
      ['Do I need to know C first?', 'No.'],
      ['How much is free?', 'The first modules are free; the full course comes with Pro.'],
    ],
  },
  {
    slug: 'c', name: 'C Programming', seoTitle: 'C Programming for Placements: Free Course | CTC', line: COURSE_LIST[2].line,
    desc: 'Master C basics, pointers and output questions that appear in placement technical rounds. Practice after every module.',
    sub: 'Many technical MCQs and output questions are written in C. Understand how C really works, memory, pointers and all, and those questions stop being guesswork.',
    able: ['Predict the output of tricky C snippets', 'Use pointers, arrays and strings correctly', 'Understand memory allocation and common errors', 'Answer C-based technical MCQs with confidence'],
    who: 'First-years, non-CS students and anyone facing C output questions in technical rounds.',
    objection: ['“Isn’t C outdated?”', 'Not for interviews. It’s still a favourite for testing whether you understand what code actually does.'],
    sample: { label: 'C course, pointers', tags: ['C', 'Pointers'], q: 'int a = 5; int *p = &a; *p = 9; What is a now?', opts: ['9', '5', 'Address of a'] },
    practice: [
      { t: 'Coding practice', b: 'Foundation problems in C.', href: '/coding/', link: 'Open practice' },
      { t: 'Pseudocode practice', b: 'Output tracing for Capgemini and similar tests.', href: '/prep/capgemini/pseudocode/', link: 'Practise pseudocode' },
      { t: 'Coding mock test', b: 'Proctored and timed, in the desktop app.', href: '/mock-tests/', link: 'See mock tests' },
    ],
    faq: [
      ['Why learn C for placements?', 'It builds strong fundamentals and appears in technical MCQs.'],
      ['Are pointers asked in interviews?', 'Often, yes. The course covers them step by step.'],
      ['Can I use C in coding rounds?', 'Usually, but Python or C++ may be faster; check each test.'],
      ['Is this course for beginners?', 'Yes.'],
      ['How much is free?', 'The first modules are free; the full course comes with Pro.'],
    ],
  },
  {
    slug: 'cpp', name: 'C++', seoTitle: 'C++ for Placements: Coding Round Course | CTC', line: COURSE_LIST[3].line,
    desc: 'Learn C++ and the STL for faster solutions in placement coding rounds and contests. Practice after every module.',
    sub: 'C++ runs fast and its standard library (STL) gives you ready-made data structures. That’s why it’s popular in coding contests and product-company assessments.',
    able: ['Write C++ with functions, classes and references', 'Use vectors, maps, sets and sort from the STL', 'Solve contest-style problems within time limits', 'Move on to data structures and algorithms'],
    who: 'Students aiming at coding contests and product-company roles.',
    objection: ['“C++ looks complicated.”', 'You only need a focused subset for coding rounds; the course teaches exactly that subset.'],
    sample: { label: 'C++ course, STL', tags: ['C++', 'STL'], q: 'Which STL container keeps unique keys in sorted order?', opts: ['std::set', 'std::vector', 'std::unordered_map'] },
    practice: [
      { t: 'Monthly contests', b: 'Compete in C++ and climb the leaderboard.', href: '/contests/', link: 'See contests' },
      { t: 'Microsoft prep', b: 'Online assessment practice for freshers.', href: '/prep/microsoft/', link: 'Start Microsoft prep' },
      { t: 'Coding practice', b: 'From foundation to advanced tracks.', href: '/coding/', link: 'Open practice' },
    ],
    faq: [
      ['Is C++ good for coding rounds?', 'Yes, especially when speed and data structures matter.'],
      ['What is STL?', 'The Standard Template Library: ready-made containers and algorithms.'],
      ['Should I learn C before C++?', 'Not necessary.'],
      ['Is C++ used in contests?', 'It’s one of the most common contest languages.'],
      ['How much is free?', 'The first modules are free; the full course comes with Pro.'],
    ],
  },
  {
    slug: 'javascript', name: 'JavaScript', seoTitle: 'JavaScript Course for Freshers & Web Roles | CTC', line: COURSE_LIST[4].line,
    desc: 'Learn JavaScript for web developer roles and front-end interviews, with hands-on practice after every module.',
    sub: 'Applying for web or front-end roles? JavaScript is the language you’ll be tested on. Learn the core language and the interview favourites, then build small projects for your resume.',
    able: ['Write modern JavaScript (variables, functions, arrays, objects)', 'Explain closures, scope and asynchronous code in interviews', 'Manipulate web pages with the DOM', 'Build a small project to add to your resume'],
    who: 'Students targeting web developer and front-end roles.',
    objection: ['“Will JavaScript help in mass-recruiter tests?”', 'For aptitude rounds, no; for web-role interviews and projects, yes. Pair it with aptitude practice.'],
    sample: { label: 'JavaScript course, closures', tags: ['JavaScript', 'Scope'], q: 'What does [1, 2, 3].map(x => x * 2) return?', opts: ['[2, 4, 6]', '[1, 2, 3, 2]', '12'] },
    practice: [
      { t: 'Coding practice', b: 'Problems you can solve in JavaScript.', href: '/coding/', link: 'Open practice' },
      { t: 'AI resume builder', b: 'Add your project to an ATS-friendly resume.', href: '/resume-builder/', link: 'Build my resume' },
      { t: 'Aptitude practice', b: 'Pair it with the aptitude round.', href: '/aptitude/', link: 'Practise aptitude' },
    ],
    faq: [
      ['Is JavaScript good for placements?', 'For web roles, yes.'],
      ['Can I use JavaScript in coding rounds?', 'Some assessments allow it; check each test’s allowed languages.'],
      ['What JavaScript topics come up in interviews?', 'Closures, scope, promises and async/await, and array methods.'],
      ['Do I need HTML and CSS first?', 'Basic HTML helps for DOM lessons.'],
      ['How much is free?', 'The first modules are free; the full course comes with Pro.'],
    ],
  },
  {
    slug: 'aptitude-reasoning', name: 'Aptitude & Logical Reasoning', seoTitle: 'Aptitude & Logical Reasoning Course for Placements | CTC', line: COURSE_LIST[5].line,
    desc: 'A structured aptitude and reasoning course covering every placement topic, with shortcuts and timed practice.',
    sub: 'Learn every topic in placement aptitude rounds in a planned order, from percentages and ratios to trains, time and work, and puzzles, with shortcuts and timed practice.',
    able: ['Solve quant questions using reliable shortcuts', 'Crack arrangement and puzzle questions systematically', 'Manage time across a full aptitude section', 'Raise accuracy in company-pattern mocks'],
    who: 'Anyone who wants a guided path in a fixed order with module tests. To practise any topic on demand instead, use aptitude practice.',
    objection: ['“I can watch free videos.”', 'You can. The course adds practice after every lesson and timed tests that show whether it stuck.'],
    sample: { label: 'Aptitude course, time, speed and distance', tags: ['Quant', 'Trains'], q: 'A 240 m train passes a pole in 16 s. What is its speed?', opts: ['54 km/h', '15 km/h', '60 km/h'] },
    practice: [
      { t: 'Aptitude topics', b: 'Practise any topic on demand.', href: '/aptitude/', link: 'Practise aptitude' },
      { t: 'Company prep', b: 'Mocks in each company’s pattern.', href: '/prep/', link: 'Browse companies' },
      { t: 'Mock tests', b: 'Timed and proctored.', href: '/mock-tests/', link: 'See mock tests' },
    ],
    faq: [
      ['What’s covered?', 'Quant, logical reasoning and verbal basics in placement order.'],
      ['Is this enough for Infosys or Wipro aptitude?', 'It covers the shared topics; add company-pattern mocks for timing.'],
      ['Do I need strong maths?', 'No, school-level maths is enough.'],
      ['How much is free?', 'The first modules are free; the full course comes with Pro.'],
    ],
  },
];
