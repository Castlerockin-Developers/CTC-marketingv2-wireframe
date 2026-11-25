import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Countdown, StickyCta } from '@/components/interactive';
import { FaqSec, Main } from '@/components/sections';
import { Band, Btn, Crumb, Frame, Head, Icon, JsonLd, Micro, Sec, Timeline } from '@/components/ui';
import { APP_URL, DOWNLOAD_URL, SITE_URL } from '@/content/site';
import { CONTEST } from '@/content/dummy';

export const metadata = {
  title: 'Code Nova 3: free monthly coding contest for engineering students',
  description: `Code Nova 3 on ${CONTEST.date}, ${CONTEST.time} IST. Compete with students from other colleges and win prizes. Free to enter.`,
  alternates: { canonical: '/contests/code-nova-3/' },
};

const ICS = '/code-nova-3.ics';
const cal = <a className="btn btn-g" href={ICS} download><Icon name="cal" />Add to calendar</a>;

export default function Contest() {
  return (
    <>
      <Header />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Event', name: 'Code Nova 3', startDate: CONTEST.iso, eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled', location: { '@type': 'VirtualLocation', url: `${SITE_URL}/contests/code-nova-3/` },
        organizer: { '@type': 'Organization', name: 'Crack The Campus', url: SITE_URL }, isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', url: `${SITE_URL}/contests/code-nova-3/` } }} />
      <Main>
        <section className="hero compact" style={{ background: 'radial-gradient(80% 90% at 90% 0%,rgba(162,148,249,.12),transparent 60%)' }}>
          <div className="wrap hero-grid" data-enter>
            <div data-hide-sticky>
              <Crumb items={[['Home', '/'], ['Contests', '/contests/code-nova-3/'], ['Code Nova 3']]} />
              <span className="eyebrow" style={{ color: 'var(--act-h)' }}><span className="dot" style={{ display: 'inline-block', marginRight: 10, verticalAlign: 'middle' }} />Upcoming, registration open</span>
              <h1 className="display">Code Nova 3</h1>
              <p className="lead">A monthly Crack The Campus coding contest. Compete with students from other colleges, climb the leaderboard and win rewards that show on your CTC Score profile.</p>
              <div style={{ marginTop: 28 }}><Countdown iso={CONTEST.iso} seconds label="Time until Code Nova 3 starts" /></div>
              <div className="cta-row"><Btn href={APP_URL}>Register free</Btn>{cal}</div>
              <Micro icon="monitor" style={{ marginTop: 16 }}>{CONTEST.date}, {CONTEST.time} IST, {CONTEST.duration}. Desktop app on Windows, macOS or Linux.</Micro>
            </div>
            <div><Frame alt="Code Nova 3 contest banner" ratio="4/3" icon="trophy" /></div>
          </div>
        </section>

        <Sec className="raised">
          <Head h="Contest details" />
          <dl className="facts">
            {[['Format', CONTEST.format], ['Duration', CONTEST.duration], ['Eligibility', CONTEST.eligibility], ['Languages', CONTEST.languages], ['Where', 'Crack The Campus desktop app']].map(([k, v]) => (
              <div className="fact" key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </Sec>

        <Sec>
          <Head h="Prizes" />
          <div className="cols c3">
            {[['t1', 'Elite tier', CONTEST.eliteRanks, 'Premium tech hardware or course scholarships.', 'trophy', 'gold'], ['t2', 'Growth tier', CONTEST.growthRanks, 'Exclusive access to premium hiring events.', 'spark', ''], ['', 'Participation', 'Everyone who finishes', 'Recognition on your CTC Score profile.', 'star', '']].map(([t, h, r, p, ic, c]) => (
              <div className={`tier ${t}`} key={h}><span className={`ic ${c}`}><Icon name={ic} /></span><h3 className="h3s">{h}</h3><p className="cap" style={{ margin: '2px 0 10px' }}>{r}</p><p className="body-sm">{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec className="raised">
          <Head h="Before and on contest day" />
          <Timeline items={[
            { t: 'Register', p: `Register before ${CONTEST.deadline}.` },
            { t: 'Install and check', p: 'Download the desktop app and run the system check.' },
            { t: 'Contest day', p: `${CONTEST.date}, ${CONTEST.time} IST. Log in 15 minutes early.` },
            { t: 'Results', p: `Leaderboard and rewards on ${CONTEST.results}.` },
          ]} />
        </Sec>

        <Sec>
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2 className="h2">Rules</h2>
              <p className="lead" style={{ margin: '16px 0 24px' }}>Fair for everyone, so the leaderboard means something.</p>
              <a className="btn btn-s" href={DOWNLOAD_URL}><Icon name="dl" />Download the desktop app</a>
            </div>
            <ol className="numlist">
              {[`Register with your Crack The Campus account before ${CONTEST.deadline}.`, 'Take the contest in the desktop app with AI proctoring on for the whole session.', `Use ${CONTEST.languages}. No outside help, AI tools or second devices.`, 'Score is points per problem solved; ties break on total time.', 'A flagged session is reviewed; confirmed malpractice removes you from the leaderboard.', 'Prizes ship within 30 days after an eligibility check.'].map((r) => <li key={r}><span>{r}</span></li>)}
            </ol>
          </div>
        </Sec>

        <Sec className="raised" id="results">
          <Head h="Last contest results" p={`${CONTEST.lastName}, top 3`} />
          <div className="tablebox">
            <table className="lb"><caption className="sr">Top 3 results of the last contest</caption>
              <thead><tr><th scope="col">Rank</th><th scope="col">Participant</th><th scope="col">College</th><th scope="col">Points</th></tr></thead>
              <tbody>{CONTEST.lastResults.map((r) => <tr key={r[0]}><td>{r[0]}</td><td style={{ color: 'var(--tx)', fontWeight: 600 }}>{r[1]}</td><td>{r[2]}</td><td className="pts">{r[3]}</td></tr>)}</tbody>
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
