import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Countdown, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { Band, Btn, Crumb, Frame, Head, Icon, JsonLd, Micro, Sec, Timeline } from '@/components/ui';
import { btn, heroGrid, split, tw } from '@/components/tw';
import { APP_URL, DOWNLOAD_URL, SITE_URL } from '@/content/site';
import { CONTEST } from '@/content/dummy';

export const metadata = {
  title: 'Code Nova 3: free monthly coding contest for engineering students',
  description: `Code Nova 3 on ${CONTEST.date}, ${CONTEST.time} IST. Compete with students from other colleges and win prizes. Free to enter.`,
  alternates: { canonical: '/contests/code-nova-3/' },
};

const ICS = '/code-nova-3.ics';
const TIER: Record<string, string> = { t1: 'border-l400 bg-[linear-gradient(160deg,var(--l100),#fff_60%)]', t2: 'border-l300 bg-[linear-gradient(160deg,var(--l50),#fff_60%)]', '': 'border-l200' };
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
          <dl className="grid grid-cols-[repeat(5,1fr)] gap-4 t:grid-cols-[repeat(3,1fr)] m:grid-cols-[1fr_1fr] m:gap-2.5">
            {[['Format', CONTEST.format], ['Duration', CONTEST.duration], ['Eligibility', CONTEST.eligibility], ['Languages', CONTEST.languages], ['Where', 'Crack The Campus desktop app']].map(([k, v]) => (
              <div className="bg-white border border-l200 rounded-xl p-5 m:p-4 m:[&:last-child:nth-child(odd)]:col-[1/-1]" key={k}><dt className="text-[13px] font-semibold tracking-normal normal-case text-tx3 mb-2">{k}</dt><dd className="text-tx font-semibold text-[16px] leading-6">{v}</dd></div>
            ))}
          </dl>
        </Sec>

        <Sec>
          <Head h="Prizes" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['t1', 'Elite tier', CONTEST.eliteRanks, 'Premium tech hardware or course scholarships.', 'trophy', 'gold'], ['t2', 'Growth tier', CONTEST.growthRanks, 'Exclusive access to premium hiring events.', 'spark', ''], ['', 'Participation', 'Everyone who finishes', 'Recognition on your CTC Score profile.', 'star', '']].map(([t, h, r, p, ic, c]) => (
              <div className={`rounded-2xl p-7 border bg-white relative overflow-hidden ${TIER[t]}`} key={h}><span className={`${tw.ic} ${c ? tw.icGold : ''}`}><Icon name={ic} /></span><h3 className={tw.h3s}>{h}</h3><p className={tw.cap} style={{ margin: '2px 0 10px' }}>{r}</p><p className={tw.sm}>{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec className={tw.light}>
          <Head h="Before and on contest day" />
          <Timeline items={[
            { t: 'Register', p: `Register before ${CONTEST.deadline}.` },
            { t: 'Install and check', p: 'Download the desktop app and run the system check.' },
            { t: 'Contest day', p: `${CONTEST.date}, ${CONTEST.time} IST. Log in 15 minutes early.` },
            { t: 'Results', p: `Leaderboard and rewards on ${CONTEST.results}.` },
          ]} />
        </Sec>

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
              <thead><tr><th scope="col">Rank</th><th scope="col">Participant</th><th scope="col">College</th><th scope="col">Points</th></tr></thead>
              <tbody>{CONTEST.lastResults.map((r) => <tr key={r[0]}><td>{r[0]}</td><td style={{ color: 'var(--tx)', fontWeight: 600 }}>{r[1]}</td><td>{r[2]}</td><td className="font-mono !text-tx">{r[3]}</td></tr>)}</tbody>
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
