import { Cards, Hero, Page, Prose, Steps } from '@/components/blocks';
import { Head, PracticeWin, Sec } from '@/components/ui';
import { tw } from '@/components/tw';
import { APP_URL, NOT_AFFILIATED } from '@/content/site';

// Content doc §4.3. Lives under [company] (Capgemini only) so /prep/capgemini keeps its own page.
export const dynamicParams = false;
export const generateStaticParams = () => [{ company: 'capgemini' }];

export const metadata = {
  title: { absolute: 'Capgemini Pseudo Code Questions with Answers | CTC' },
  description: 'Practise Capgemini pseudocode questions: loops, conditionals and output tracing, with explanations and a timed quiz.',
  alternates: { canonical: '/prep/capgemini/pseudocode/' },
};

const CODE = `SET total = 0
FOR i FROM 1 TO 9 STEP 2
    total = total + i
END FOR
PRINT total`;
const TRACE: [number, number][] = [[1, 1], [3, 4], [5, 9], [7, 16], [9, 25]];

export default function Pseudocode() {
  return (
    <Page disclaim={NOT_AFFILIATED}
      faq={{ h: 'Pseudocode FAQs', items: [
        ['What language is Capgemini pseudocode written in?', 'It’s language-neutral pseudocode that looks a bit like C or Python. You don’t need to know any one language.'],
        ['How do I solve pseudocode questions quickly?', 'Trace with a variable table, check loop limits carefully and practise daily under a timer.'],
        ['Are pseudocode questions hard for non-CS students?', 'They take practice, but they test logic rather than syntax, so non-CS students can do well.'],
        ['Is recursion included?', 'Our question bank includes recursion questions alongside loops and conditions.'],
      ] }}
      band={{ h: 'Trace ten questions tonight', p: 'A timed quiz with a step-by-step explanation for every answer.', cta: ['Start a timed pseudocode quiz', APP_URL], link: ['Full Capgemini prep', '/prep/capgemini/'] }}
      sticky={['Pseudocode quiz', 'First quiz free', 'Start', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Company prep', '/prep/'], ['Capgemini', '/prep/capgemini/'], ['Pseudocode']]} h1="Capgemini pseudocode questions"
        sub="Pseudocode questions look like code but test logic. Learn to trace them line by line and you’ll answer faster than students who try to guess the output."
        cta={['Start a timed pseudocode quiz', APP_URL]} link={['See a worked example', '#example']}
        visual={<PracticeWin label="Pseudocode quiz, question 4 of 10" tags={['Pseudocode', 'Loops']} q="x = 5; FOR i = 1 TO 3: x = x + i. What is x?" opts={['11', '8', '9']} sel={0} />} />

      <Prose h="What the pseudocode section tests">
        <p>Each question shows a short piece of pseudocode and asks for its output or the value of a variable. You don’t need to know a specific language, but you do need to follow loops, conditions and function calls exactly.</p>
        <p>Useful for anyone with a Capgemini drive, and for other companies that include pseudocode.</p>
      </Prose>

      <Sec className={tw.light} id="example">
        <Head h="Worked example" p="What does this print?" />
        <div className="grid grid-cols-[1fr_1fr] gap-6 m:grid-cols-1" data-reveal="kids">
          <pre className="m-0 overflow-x-auto rounded-[20px] bg-[#0B0B0F] p-7 font-mono text-[15px] leading-7 text-white"><code>{CODE}</code></pre>
          <div className={`${tw.tablebox}`}>
            <table className={tw.dtable}>
              <thead><tr><th scope="col">i</th><th scope="col">total</th></tr></thead>
              <tbody>{TRACE.map(([i, t]) => <tr key={i}><th scope="row" className="font-mono">{i}</th><td className="font-mono">{t}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 max-w-[760px] text-body"><b className="font-medium text-ink">Answer: 25.</b> The loop adds only odd numbers because it starts at 1 and steps by 2, and it includes 9 because the range is inclusive.</p>
      </Sec>

      <Cards h="Topics covered" items={[
        { t: 'Loops and nested loops', icon: 'refresh' }, { t: 'If-else conditions', icon: 'layers' }, { t: 'Arrays and indexing', icon: 'grid' },
        { t: 'Functions and recursion', icon: 'code' }, { t: 'Bitwise and modulo operations', icon: 'sigma' }, { t: 'Output prediction', icon: 'eye' },
      ]} />

      <Steps alt h="How to get faster at pseudocode" items={[
        ['Trace on paper', 'Keep a small table of variables.'],
        ['Watch loop boundaries', '< versus ≤: most mistakes happen there.'],
        ['Ten a day', 'Do 10 timed questions a day.'],
        ['Review', 'Note the trap behind every wrong answer.'],
      ]} p="The first quiz is free; the full bank is included in the free plan up to its limits and fully in Pro." />

      <Prose h="“I’m not from CS. Can I still do this?”">
        <p>Yes. Pseudocode tests logic, not a programming language. Start with loops and conditions and you’ll pick it up.</p>
      </Prose>
    </Page>
  );
}
