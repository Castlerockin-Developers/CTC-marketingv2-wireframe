import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaqSec, Main } from '@/components/sections';
import { ArrowLink, Band, Btn, Frame, Head, Icon, Proof, Quotes, Sec } from '@/components/ui';
import { ADDRESS_LONG, APP_URL } from '@/content/site';
import { PRESS, STATS, STUDENT_QUOTES, TEAM } from '@/content/dummy';

export const metadata = {
  title: 'About us: the team behind Crack The Campus',
  description: 'Crack The Campus is a Bengaluru campus-to-career platform helping engineering students prove they’re ready for their first job.',
  alternates: { canonical: '/about/' },
};

export default function About() {
  return (
    <>
      <Header />
      <Main>
        <section className="hero compact">
          <div className="wrap hero-grid" data-enter>
            <div>
              <span className="eyebrow">About Crack The Campus</span>
              <h1 className="h1">We help engineering students prove they’re ready for their first job</h1>
              <p className="lead">Crack The Campus is a campus-to-career platform based in Bengaluru, built for engineering students and the colleges that train them.</p>
              <div className="cta-row"><Btn href={APP_URL}>Start practising free</Btn><a className="btn btn-g" href="#team">Meet the team</a></div>
            </div>
            <div><Frame alt="The Crack The Campus team at the Bengaluru office" ratio="4/3" icon="camera" /></div>
          </div>
        </section>

        <Sec className="light">
          <div className="split" style={{ alignItems: 'start' }}>
            <h2 className="h2">Why we started</h2>
            <div className="stack lead">
              <p>We founded Crack The Campus in {STATS.founded} after years of running placement training in Karnataka colleges. Students practised on scattered free sites, then froze in their first proctored online test.</p>
              <p>We built company prep on the web first, then a proctored desktop app so practice felt like the real thing, then the CTC Score to show progress. Colleges asked for the same tools, so we built the admin suite.</p>
              <p>Today {STATS.students} students and {STATS.colleges} colleges use Crack The Campus to prepare for placements.</p>
            </div>
          </div>
        </Sec>

        <Sec className="raised" style={{ padding: '56px 0' }}>
          <Proof label="Crack The Campus in numbers" stats={[[STATS.students, 'students'], [STATS.colleges, 'colleges'], [STATS.drives, 'proctored assessments run'], [STATS.founded, 'founded']]} />
        </Sec>

        <Sec>
          <Head h="What we believe" />
          <div className="cols c3">
            {[['Practise in real conditions.', 'Knowing the answer isn’t enough. You need to find it under a timer, on camera, without help.', 'clock'], ['Proof over promises.', 'We’d rather show you a score you can improve than promise you a job.', 'target'], ['Fair for every college.', 'A student from any college should be able to practise the same way as one from the best-known campus.', 'users']].map(([h, p, ic]) => (
              <div className="card" key={h}><span className="ic"><Icon name={ic} /></span><h3 className="h3s">{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec className="raised" id="team">
          <Head h="The team" />
          <div className="cols c4 m2 team">
            {TEAM.map((t) => (
              <article key={t.name}>
                <Frame alt={`${t.name}, ${t.role} at Crack The Campus`} ratio="1/1" icon="user" />
                <h3>{t.name}</h3><p className="role">{t.role}</p><p>{t.bio}</p>
              </article>
            ))}
          </div>
        </Sec>

        <Sec id="stories"><Head h="Students who prepared with Crack The Campus" /><Quotes items={STUDENT_QUOTES} /></Sec>

        <Sec className="light">
          <div className="split rev m-img-last">
            <a href="https://maps.app.goo.gl/y6P9HgeWedwsfCiz9" aria-label="Open the office location in Google Maps"><Frame alt="Map showing the Crack The Campus office at ThiDiff Tech Park, Singasandra, Bengaluru" icon="pin" /></a>
            <div><h2 className="h2">Visit us in Bengaluru</h2><p className="lead" style={{ margin: '16px 0 20px' }}>{ADDRESS_LONG}.</p><ArrowLink href="/contact/">Contact us</ArrowLink></div>
          </div>
        </Sec>

        <Sec id="press">
          <Head h="Press and recognition" />
          <div className="cols c3">
            {PRESS.map((p) => (
              <article className="card" key={p.headline}><span className="badge b-n">{p.outlet}</span><h3 className="h4" style={{ marginTop: 12 }}>{p.headline}</h3><p className="cap" style={{ marginTop: 6 }}>{p.date}</p></article>
            ))}
          </div>
        </Sec>

        <FaqSec h="About us" intro={false} items={[
          ['Where is Crack The Campus based?', 'Our office is at ThiDiff Tech Park, Singasandra, Bengaluru. We work with students and colleges across India online.'],
          ['Is Crack The Campus related to “Crack The Code”?', 'No. Crack The Campus is an Indian placement preparation platform and is not connected to Crack The Code or any coding bootcamp with a similar name.'],
          ['Who uses Crack The Campus?', 'Engineering students preparing for campus placements and internships, and colleges that run assessments and track placement readiness.'],
          ['Is Crack The Campus affiliated with the companies on its prep pages?', 'No. We name companies only to describe the tests we help students practise for.'],
          ['Are you hiring?', 'Yes. Send your CV to info@crackthecampus.com with the role in the subject line.'],
        ]} />
        <Band h="Ready to see where you stand?" cta={<Btn href={APP_URL}>Start practising free</Btn>} cta2={<Link href="/contact/">Talk to the team</Link>} />
      </Main>
      <Footer />
    </>
  );
}
