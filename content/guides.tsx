import Link from 'next/link';
import type { ArticleProps } from '@/components/Article';

// Guide articles from the content doc §6.3–6.4, rendered by app/guides/[slug] with components/Article.
// Editor note from the doc: game names, counts and scoring change between drives; verify specifics before each season.

type Post = Omit<ArticleProps, 'children'> & { seoTitle: string; body: React.ReactNode };

export const POSTS: Post[] = [
  {
    slug: 'capgemini-game-based-aptitude-test', cat: 'Company guides', read: '7 min read',
    seoTitle: 'Capgemini Game-Based Aptitude Test: How to Prepare',
    title: 'Capgemini game-based aptitude test: what it is and how to prepare',
    desc: 'What the Capgemini game-based aptitude test is, what each game measures, how scoring usually works and a 3-week practice plan.',
    toc: [['what', 'What is a game-based aptitude test?'], ['fit', 'Where it fits in the Capgemini test'], ['games', 'What the games usually look like'], ['score', 'How is the game round scored?'], ['why', 'Why practice helps so much'], ['plan', 'A 3-week practice plan'], ['tips', 'Test-day tips'], ['faq', 'Frequently asked questions']],
    cta: { h: 'Play a Capgemini-style challenge now', p: 'Timed practice with scores, free to start.', btn: ['Play a free challenge', '/prep/capgemini/game-based-aptitude/'] },
    faq: [
      ['Has Capgemini removed logical reasoning MCQs?', 'In recent cycles, game-based aptitude has replaced the traditional logical reasoning MCQ section. Confirm for your drive, as formats can change.'],
      ['Can you really prepare for a game-based test?', 'Yes. You can learn the rules, controls and pacing, which removes surprises and improves your speed and accuracy.'],
      ['How long should I practise each day?', '15–20 minutes a day for two to three weeks is enough for most students.'],
      ['Do I need to be good at video games?', 'No. These games are simple; they reward focus and logic rather than gaming skill.'],
      ['Where can I practise for free?', 'You can play Capgemini-style challenges on our game-based aptitude practice page.'],
    ],
    body: (<>
      <p>If you’ve only ever practised multiple-choice aptitude, Capgemini’s online test can come as a surprise. In recent hiring cycles, Capgemini has replaced its traditional logical reasoning MCQs with a game-based aptitude section: a set of short, interactive tasks instead of questions with four options.</p>
      <p>The good news is that this round is very learnable. You can’t memorise answers, but you can learn how each game works, get used to the controls and pacing, and walk in without the shock that costs many students marks. This guide explains what to expect and gives you a simple three-week plan.</p>

      <h2 id="what">What is a game-based aptitude test?</h2>
      <p>A <Link href="/prep/game-based-aptitude/">game-based aptitude test</Link> measures thinking skills through tasks that look and feel like simple puzzle games. Each game focuses on one ability, such as:</p>
      <ul>
        <li><strong>Memory:</strong> remembering positions, sequences or symbols for a short time.</li>
        <li><strong>Attention:</strong> staying accurate while information changes quickly.</li>
        <li><strong>Pattern recognition and deduction:</strong> working out a rule from examples, often on a grid.</li>
        <li><strong>Planning:</strong> thinking a few moves ahead to reach a goal.</li>
        <li><strong>Numerical agility:</strong> quick mental arithmetic and number comparisons.</li>
      </ul>
      <p>Many of these games adapt as you play: get a level right and the next one is harder. That means there isn’t a fixed “paper” to finish; your score depends on how far you get and how accurately and quickly you play.</p>

      <h2 id="fit">Where it fits in the Capgemini online test</h2>
      <p>Based on recent cycles, Capgemini’s online assessment has combined several sections:</p>
      <ul>
        <li><strong>Pseudocode:</strong> tracing short pieces of code to predict output. <Link href="/prep/capgemini/pseudocode/">Practise pseudocode</Link>.</li>
        <li><strong>Quantitative aptitude:</strong> arithmetic, number systems and data interpretation.</li>
        <li><strong>English communication:</strong> grammar, vocabulary and comprehension.</li>
        <li><strong>Game-based aptitude:</strong> the interactive section this guide covers.</li>
        <li><strong>Behavioural profile:</strong> work-style questions that aren’t scored as right or wrong.</li>
      </ul>
      <p>Shortlisted candidates then usually face technical and HR interviews. Always check the latest pattern for your drive on our <Link href="/prep/capgemini/">Capgemini prep page</Link>, which shows when it was last reviewed.</p>

      <h2 id="games">What the games usually look like</h2>
      <p>The exact games can change from drive to drive, but students commonly describe tasks in a few families:</p>
      <ul>
        <li><strong>Grid and symbol puzzles,</strong> where you fill a grid so that rules hold in every row and column, or find the missing symbol.</li>
        <li><strong>Movement and planning challenges,</strong> where you move pieces to a target in as few steps as possible.</li>
        <li><strong>Memory tasks,</strong> where you see a pattern briefly and then reproduce it.</li>
        <li><strong>Quick-decision tasks,</strong> where you compare shapes, colours or numbers under a tight timer.</li>
      </ul>
      <p>On Crack The Campus you can practise Capgemini-style Cognitive Challenges, Motion Challenges and Grid Challenge sets that follow these families.</p>

      <h2 id="score">How is the game round scored?</h2>
      <p>Capgemini does not publish a detailed scoring formula, so be wary of anyone who claims to know it exactly. In general, game-based tests reward:</p>
      <ul>
        <li><strong>Level reached:</strong> progressing further usually scores higher.</li>
        <li><strong>Accuracy:</strong> careless errors can end a level or lower your score.</li>
        <li><strong>Speed:</strong> solving efficiently matters, but rushing into mistakes rarely pays off.</li>
      </ul>
      <p>The practical takeaway: aim for steady, accurate progress first, then work on speed.</p>

      <h2 id="why">Why practice helps so much</h2>
      <p>The underlying skills (memory, attention, reasoning) improve slowly. But three things improve fast with practice:</p>
      <ol>
        <li><strong>Understanding the rules.</strong> On test day, every second spent reading instructions is a second not playing.</li>
        <li><strong>Comfort with controls.</strong> Knowing how to drag, click and confirm without thinking.</li>
        <li><strong>Pacing.</strong> Learning when to slow down and check, and when to move on.</li>
      </ol>
      <p>Students who have played each game type several times walk in calmer, and calm players make fewer mistakes.</p>

      <h2 id="plan">A 3-week practice plan</h2>
      <p><strong>Week 1: Learn the games.</strong> Play each game type once a day for 15 minutes. Don’t worry about scores; focus on understanding the rules and controls. Start basic pseudocode practice alongside.</p>
      <p><strong>Week 2: Build accuracy.</strong> Spend 10 minutes a day on your weakest game and 5 minutes on your strongest. Keep a note of the level you reach. Add timed quant and English sets for the rest of the test.</p>
      <p><strong>Week 3: Test conditions.</strong> Play the full game set in one sitting, under a timer, at least twice. Take one or two full <Link href="/mock-tests/">proctored mock tests</Link> so the whole Capgemini test, not just the games, feels familiar.</p>

      <h2 id="tips">Test-day tips</h2>
      <ul>
        <li>Use a laptop with a mouse if allowed; it’s usually easier than a trackpad for drag-and-drop games.</li>
        <li>Read each game’s instructions fully, even if you’ve practised it. Small rule changes happen.</li>
        <li>If you make a mistake, reset mentally. One bad level rarely decides the whole section.</li>
        <li>Don’t try to “game” the behavioural profile. Answer honestly and consistently.</li>
        <li>Close other apps and check your internet connection before you start.</li>
      </ul>
      <p>Reading about the games is a good start. Playing them is what actually prepares you.</p>
    </>),
  },
  {
    slug: 'what-is-a-proctored-exam', cat: 'Assessments', read: '7 min read',
    seoTitle: 'What Is a Proctored Exam? How to Prepare (2026)',
    title: 'What is a proctored exam? A student’s guide to online proctored tests',
    desc: 'What online proctored exams are, what they monitor, the rules that trip students up and a checklist to prepare for proctored placement tests.',
    toc: [['types', 'Types of proctoring'], ['ai', 'How does AI proctoring work?'], ['rules', 'Common rules'], ['trouble', 'What gets students into trouble'], ['checklist', 'Your proctored test checklist'], ['practise', 'Why practise under proctored conditions'], ['colleges', 'For colleges'], ['faq', 'Frequently asked questions']],
    cta: { h: 'Take a proctored mock test', p: 'Experience the camera check, locked screen and timer before your real drive.', btn: ['Start a free mock test', '/mock-tests/'] },
    faq: [
      ['What does “proctored” mean?', 'It means supervised. A proctored exam is one where someone or something monitors the test to ensure fair conditions.'],
      ['Can a proctored exam detect tab switching?', 'Yes. Most proctoring tools record or block switching windows and tabs.'],
      ['Is it okay to look away from the screen?', 'Brief glances are normal, but frequent or long looks away can be flagged. Keep rough work close to the screen if it’s allowed.'],
      ['What happens if my internet disconnects?', 'It depends on the platform. Many save your progress and let you rejoin within a time limit. Always note the time and report it.'],
      ['Can I use rough paper in an online proctored test?', 'Only if the instructions allow it. Some tests provide an on-screen scratchpad instead.'],
      ['How can I practise for a proctored test?', 'Take full mock tests in a proctored environment, such as the Crack The Campus desktop app, and follow the checklist above.'],
    ],
    body: (<>
      <p>A proctored exam is a test taken under supervision, so the people running it can trust that the result is really yours. In a classroom, the proctor is the invigilator walking between the rows. Online, the proctor is software, sometimes with a human reviewer behind it, watching through your camera, microphone and screen.</p>
      <p>If you’re preparing for campus placements, you’ll almost certainly meet online proctored tests. Many companies run their first round this way, and colleges increasingly use proctoring for internal assessments too. This guide explains how proctoring works, what it watches for, and how to prepare so the setup doesn’t cost you marks.</p>

      <h2 id="types">Types of proctoring</h2>
      <p>Not every proctored test works the same way. You’ll usually see one of these:</p>
      <ul>
        <li><strong>Live online proctoring:</strong> a person watches candidates in real time over video and can message or stop a test.</li>
        <li><strong>Recorded proctoring:</strong> your session is recorded and reviewed later.</li>
        <li><strong>AI (automated) proctoring:</strong> software monitors the session and flags unusual events for review. This is the most common type in large hiring tests because it scales to thousands of candidates.</li>
      </ul>
      <p>Many platforms combine these, for example AI monitoring during the test and human review of anything flagged.</p>

      <h2 id="ai">How does AI proctoring work?</h2>
      <p>AI proctoring typically does three jobs:</p>
      <ol>
        <li><strong>Checks who you are.</strong> Before the test you may be asked to show your face and an ID, and sometimes your surroundings.</li>
        <li><strong>Controls the environment.</strong> A secure browser or desktop app can block other windows, copy-paste, screen sharing and sometimes extra monitors.</li>
        <li><strong>Watches for unusual behaviour.</strong> It looks for things like another face in the frame, you leaving the frame, frequent looking away, talking, or switching windows. These are flagged as events.</li>
      </ol>
      <p>An important point: a flag is not automatically a verdict. On most platforms, flagged events are reviewed by people before any decision is made. But you don’t want to give a reviewer reasons to doubt your session, which is why preparation matters.</p>

      <h2 id="rules">Common rules in proctored placement tests</h2>
      <p>Rules vary by company, so always read the instructions you receive. These are typical:</p>
      <ul>
        <li>Camera and microphone must stay on for the whole test.</li>
        <li>You must be alone in the room.</li>
        <li>No phones, notes, books or second screens within reach.</li>
        <li>No switching tabs or opening other applications.</li>
        <li>Your face must stay clearly visible and well lit.</li>
        <li>No headphones unless allowed.</li>
        <li>Rough paper may or may not be allowed; check first.</li>
      </ul>

      <h2 id="trouble">What gets students into trouble</h2>
      <p>Most problems in proctored tests come from setup, not cheating:</p>
      <ul>
        <li>A phone buzzing on the desk, or a family member walking in.</li>
        <li>Bad lighting, so the camera can’t see your face clearly.</li>
        <li>Reading questions aloud to yourself, which can be flagged as talking.</li>
        <li>Looking down at rough work for long periods without knowing whether it’s allowed.</li>
        <li>A weak internet connection that drops mid-test.</li>
        <li>Notifications popping up from other apps.</li>
        <li>Using a laptop that hasn’t been updated or doesn’t meet requirements.</li>
      </ul>
      <p>All of these are avoidable with a little preparation.</p>

      <h2 id="checklist">Your proctored test checklist</h2>
      <p><strong>The day before</strong></p>
      <ul>
        <li>Read every instruction from the company or college, including what’s allowed on your desk.</li>
        <li>Install any required browser or app and run its system check. For Crack The Campus mocks, <Link href="/download/">download the desktop app</Link>.</li>
        <li>Update your laptop and restart it.</li>
        <li>Plan where you’ll sit: a quiet room, a plain wall behind you, light in front of you rather than behind.</li>
        <li>Tell the people you live with when your test is, and ask not to be disturbed.</li>
        <li>Arrange a backup internet option, such as a phone hotspot, if allowed.</li>
      </ul>
      <p><strong>One hour before</strong></p>
      <ul>
        <li>Charge your laptop and keep it plugged in.</li>
        <li>Close every other application and turn off notifications.</li>
        <li>Put your phone in another room, or face down and silent if the rules require it nearby for login.</li>
        <li>Keep your ID ready if verification is required.</li>
        <li>Have water and rough paper ready only if permitted.</li>
      </ul>
      <p><strong>During the test</strong></p>
      <ul>
        <li>Keep your face in the frame and avoid covering your mouth.</li>
        <li>Read questions silently.</li>
        <li>If something goes wrong, such as a power cut or a disconnection, follow the platform’s instructions and note the time so you can report it.</li>
      </ul>

      <h2 id="practise">Why you should practise under proctored conditions</h2>
      <p>Here’s the part most students skip. Knowing the material is only half of a proctored test. The other half is performing while a timer runs, the screen is locked and you’re aware of being watched. Students who meet these conditions for the first time on the day of a drive often lose time to nerves, setup problems or simple unfamiliarity.</p>
      <p>The fix is to rehearse. Take a few practice tests in a proctored environment before your real one, so the camera check, the locked screen and the timer feel normal. On Crack The Campus, <Link href="/mock-tests/">proctored mock tests</Link> run in our desktop app with AI monitoring, so you experience the same kind of setup you’ll see in many company tests. Your results also feed your <Link href="/ctc-score/">CTC Score</Link>, which shows whether your readiness is improving.</p>

      <h2 id="colleges">For colleges: proctoring your internal tests</h2>
      <p>If you’re a placement officer or faculty member, proctoring internal assessments has two benefits. Your readiness data becomes trustworthy, and your students get used to the conditions before hiring season. Learn how colleges run <Link href="/colleges/proctored-exams/">proctored online exams</Link> on Crack The Campus.</p>
      <p>The best way to stay calm in a proctored test is to have done one before.</p>
    </>),
  },
];
