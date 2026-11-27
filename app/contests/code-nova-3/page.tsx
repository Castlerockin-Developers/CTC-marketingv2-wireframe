import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Countdown, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { Steps } from '@/components/blocks';
import { Band, Btn, Crumb, Frame, Head, Icon, JsonLd, Micro, Sec } from '@/components/ui';
import { btn, heroGrid, split, tw } from '@/components/tw';
import { APP_URL, DOWNLOAD_URL, SITE_URL } from '@/content/site';
import { CONTEST } from '@/content/dummy';

export const metadata = {
  title: { absolute: 'Code Nova 3: Free Coding Contest for Students | CTC' },
  description: `Code Nova 3 on ${CONTEST.date}, ${CONTEST.time} IST. Compete with students from other colleges and win prizes. Free to enter.`,
  alternates: { canonical: '/contests/code-nova-3/' },
};

const ICS = '/code-nova-3.ics';
const LB = 'w-full border-collapse text-[15px] [&_th]:text-[13px] [&_th]:font-semibold [&_th]:tracking-normal [&_th]:normal-case [&_th]:text-tx3 [&_th]:text-left [&_th]:py-3 [&_th]:px-4 [&_th]:border-b [&_th]:border-l300 [&_td]:p-4 [&_td]:border-b [&_td]:border-l200 [&_td]:text-tx2 [&_td]:tabular-nums [&_td:first-child]:font-mono [&_td:first-child]:text-l700 [&_td:first-child]:text-[16px] m:[&_th]:py-3 m:[&_th]:px-2.5 m:[&_td]:py-3 m:[&_td]:px-2.5';
const cal = <a className={`${btn('g')}`} data-btn="g" href={ICS} download><Icon name="cal" />Add to calendar</a>;

export default function Contest() {
  return (
    <>
      <Header />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Event', name: 'Code Nova 3', startDate: CONTEST.iso, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: `${SITE_URL}/contests/code-nova-3/` },
        organizer: { '@type': 'Organization', name: 'Crack The Campus', url: SITE_URL }, isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', url: `${SITE_URL}/contests/code-nova-3/` } }} />
      <Main>
        <section className={`${tw.hero} ${tw.heroCompact}`} style={{ background: 'radial-gradient(80% 90% at 90% 0%,rgba(162,148,249,.12),transparent 60%)' }}>
          <div className={`${tw.wrap} ${tw.heroWrap} ${heroGrid()} ${tw.enter}`}>
            <div data-hide-sticky>
              <Crumb items={[['Home', '/'], ['Contests', '/contests/code-nova-3/'], ['Code Nova 3']]} />
              <span className={tw.eyebrow} style={{ color: 'var(--act-h)' }}><span className={tw.dot} style={{ display: 'inline-block', marginRight: 10, verticalAlign: 'middle' }} />Upcoming, registration open</span>
              <h1 className={`${tw.display} ${tw.heroH1}`}>Code Nova 3</h1>
              <p className={`${tw.lead} ${tw.heroLead}`}>A monthly Crack The Campus coding contest. Compete with students from other colleges, climb the leaderboard and win rewards that show on your CTC Score profile.</p>
              <div style={{ marginTop: 28 }}><Countdown iso={CONTEST.iso} seconds label="Time until Code Nova 3 starts" /></div>
              <div className={`${tw.ctaRow} ${tw.heroCta}`}><Btn href={APP_URL}>Register free</Btn>{cal}</div>
              <Micro className={tw.heroMicro} icon="monitor" style={{ marginTop: 16 }}>{CONTEST.date}, {CONTEST.time} IST, {CONTEST.duration}. Desktop app on Windows, macOS or Linux.</Micro>
            </div>
            <div><Frame src="/images/contest/code-nova-3.jpg" eager alt="Code Nova 3 contest artwork: glowing code brackets around a star burst on deep indigo" ratio="4/3" /></div>
          </div>
        </section>

        <Sec className={tw.light}>
          <Head h="Contest details" />
          <dl className="grid grid-cols-5 overflow-hidden rounded-[24px] border border-line bg-white t:grid-cols-3 m:grid-cols-1" data-reveal="">
            {[['Format', CONTEST.format], ['Duration', CONTEST.duration], ['Eligibility', CONTEST.eligibility], ['Languages', CONTEST.languages], ['Where', 'Crack The Campus desktop app']].map(([k, v]) => (
              <div className="border-line p-7 [&+&]:border-l t:[&:nth-child(4)]:border-l-0 t:[&:nth-child(n+4)]:border-t m:!border-l-0 m:p-5 m:[&+&]:border-t" key={k}><dt className="font-mono text-[12px] font-medium uppercase tracking-[.08em] text-muted">{k}</dt><dd className="mt-3 text-[17px] font-semibold leading-[26px] text-ink">{v}</dd></div>
            ))}
          </dl>
        </Sec>

        <Sec>
          <Head h="Prizes" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['Elite tier', CONTEST.eliteRanks, 'Premium tech hardware or course scholarships.'], ['Growth tier', CONTEST.growthRanks, 'Exclusive access to premium hiring events.'], ['Participation', 'Everyone who finishes', 'Recognition on your CTC Score profile.']].map(([h, r, p], k) => {
              const ranks = r.startsWith('Ranks ') ? r.slice(6) : '';
              return (
                <div className={`relative flex flex-col overflow-hidden rounded-[24px] p-8 ${k === 0 ? 'bg-[#211A4A] text-white' : k === 1 ? 'border border-tint2 bg-tint' : 'border border-line bg-white'}`} key={h}>
                  {k === 0 && <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(162,148,249,.45),transparent_65%)]" />}
                  <p className={`relative font-mono text-[12px] font-medium uppercase tracking-[.08em] ${k === 0 ? 'text-lav' : 'text-muted'}`}>{h}</p>
                  <p className={`relative mt-4 font-head font-extrabold leading-none tracking-[-.03em] ${ranks ? 'text-[64px] m:text-[52px]' : 'text-[30px] leading-9'} ${k === 0 ? 'text-white' : 'text-ink'}`}>{ranks || r}</p>
                  {ranks && <p className={`relative mt-2 text-[14px] ${k === 0 ? 'text-white/60' : 'text-muted'}`}>Ranks</p>}
                  <p className={`relative mt-auto pt-8 text-[17px] leading-7 ${k === 0 ? 'text-white/85' : 'text-body'}`}>{p}</p>
                </div>
              );
            })}
          </div>
        </Sec>

        <Steps alt h="Before and on contest day" items={[
          ['Register', `Register before ${CONTEST.deadline}.`],
          ['Install and check', 'Download the desktop app and run the system check.'],
          ['Contest day', `${CONTEST.date}, ${CONTEST.time} IST. Log in 15 minutes early.`],
          ['Results', `Leaderboard and rewards on ${CONTEST.results}.`],
        ]} />

        <Sec>
          <div className={`${split()}`} data-reveal="split" style={{ alignItems: 'start' }}>
            <div>
              <h2 className={tw.h2}>Rules</h2>
              <p className={tw.lead} style={{ margin: '16px 0 24px' }}>Fair for everyone, so the leaderboard means something.</p>
              <a className={`${btn('s')}`} data-btn="s" href={DOWNLOAD_URL}><Icon name="dl" />Download the desktop app</a>
            </div>
            <ol className={tw.numlist}>
              {[`Register with your Crack The Campus account before ${CONTEST.deadline}.`, 'Take the contest in the desktop app with AI proctoring on for the whole session.', `Use ${CONTEST.languages}. No outside help, AI tools or second devices.`, 'Score is points per problem solved; ties break on total time.', 'A flagged session is reviewed; confirmed malpractice removes you from the leaderboard.', 'Prizes ship within 30 days after an eligibility check.'].map((r) => <li key={r}><span>{r}</span></li>)}
            </ol>
          </div>
        </Sec>

        <Sec className={tw.light} id="results">
          <Head h="Last contest results" p={`${CONTEST.lastName}, top 3`} />
          <div className={tw.tablebox}>
            <table className={LB}><caption className={tw.sr}>Top 3 results of the last contest</caption>
              <thead><tr><th scope="col">Rank</th><th scope="col">Participant</th><th scope="col">College</th><th scope="col" className="!text-right">Points</th></tr></thead>
              <tbody>{CONTEST.lastResults.map((r) => <tr key={r[0]} className={r[0] === '1' ? 'bg-tint/60' : ''}><td><span className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-mono text-[13px] font-medium ${r[0] === '1' ? 'bg-act text-white' : 'bg-alt text-ink'}`}>{r[0]}</span></td><td className="font-semibold !text-ink">{r[1]}</td><td>{r[2]}</td><td className="text-right font-mono !text-ink">{Number(r[3]).toFixed(1)}</td></tr>)}</tbody>
            </table>
          </div>
        </Sec>

        <FaqSec h="Code Nova 3 FAQs" intro={false} items={[
          ['Is Code Nova 3 free?', 'Yes, registration is free.'],
          ['What if my internet drops during the contest?', 'The app saves your progress. You can rejoin within 10 minutes and continue where you left off.'],
          ['Can I practise before the contest?', 'Yes. Try the coding practice sets and past contest problems.'],
          ['When will results be announced?', `On ${CONTEST.results}, on this page and by email.`],
          ['How will I receive my prize?', 'We email winners for a shipping address and college ID; prizes ship within 30 days.'],
        ]} />
        <Band h="Code Nova 3 is coming up. Save your seat." cta={<Btn href={APP_URL}>Register free</Btn>} cta2={<a href={ICS} download>Add to calendar</a>} />
      </Main>
      <Footer />
      <StickyCta title={`Starts ${CONTEST.date}`} sub="Free to enter" cta="Register free" href={APP_URL} />
    </>
  );
}
