import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaqSec, Main } from '@/components/sections';
import { ArrowLink, Band, Btn, Frame, Head, Proof, Quotes, Sec } from '@/components/ui';
import { btn, card, heroGrid, split, tw } from '@/components/tw';
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
        <section className={`${tw.hero} ${tw.heroCompact}`}>
          <div className={`${tw.wrap} ${tw.heroWrap} ${heroGrid()} ${tw.enter}`}>
            <div>
              <span className={tw.eyebrow}>About Crack The Campus</span>
              <h1 className={`${tw.h1} ${tw.heroH1}`}>We help engineering students prove they’re ready for their first job</h1>
              <p className={`${tw.lead} ${tw.heroLead}`}>Crack The Campus is a campus-to-career platform based in Bengaluru, built for engineering students and the colleges that train them.</p>
              <div className={`${tw.ctaRow} ${tw.heroCta}`}><Btn href={APP_URL}>Start practising free</Btn><a className={btn('g')} data-btn="g" href="#team">Meet the team</a></div>
            </div>
            <div><Frame alt="The Crack The Campus team at the Bengaluru office" ratio="4/3" icon="camera" /></div>
          </div>
        </section>

        <Sec className={tw.light}>
          <div className={`${split()}`} data-reveal="split" style={{ alignItems: 'start' }}>
            <h2 className={tw.h2}>Why we started</h2>
            <div className={`[.site_&>*+*]:mt-4 ${tw.lead}`}>
              <p>We founded Crack The Campus in {STATS.founded} after years of running placement training in Karnataka colleges. Students practised on scattered free sites, then froze in their first proctored online test.</p>
              <p>We built company prep on the web first, then a proctored desktop app so practice felt like the real thing, then the CTC Score to show progress. Colleges asked for the same tools, so we built the admin suite.</p>
              <p>Today {STATS.students} students and {STATS.colleges} colleges use Crack The Campus to prepare for placements.</p>
            </div>
          </div>
        </Sec>

        <Sec className={tw.light} style={{ padding: '56px 0' }}>
          <Proof label="Crack The Campus in numbers" stats={[[STATS.students, 'students'], [STATS.colleges, 'colleges'], [STATS.drives, 'proctored assessments run'], [STATS.founded, 'founded']]} />
        </Sec>

        <Sec>
          <Head h="What we believe" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {[['Practise in real conditions.', 'Knowing the answer isn’t enough. You need to find it under a timer, on camera, without help.', 'clock'], ['Proof over promises.', 'We’d rather show you a score you can improve than promise you a job.', 'target'], ['Fair for every college.', 'A student from any college should be able to practise the same way as one from the best-known campus.', 'users']].map(([h, p]) => (
              <div className={card()} key={h}><h3 className={tw.h3s}>{h}</h3><p>{p}</p></div>
            ))}
          </div>
        </Sec>

        <Sec className={tw.light} id="team">
          <Head h="The team" />
          <div className={`${tw.cols} ${tw.c4} ${tw.m2} [&_figure]:rounded-2xl [&_figure]:mb-4 [&_h3]:text-[18px] [&_h3]:leading-[26px] [&_h3]:m-0 [&_h3]:font-head [&_h3]:text-tx [&_p]:text-[14.5px] [&_p]:leading-[22px] [&_p]:mt-2`} data-reveal="kids">
            {TEAM.map((t) => (
              <article key={t.name}>
                <Frame alt={`${t.name}, ${t.role} at Crack The Campus`} ratio="1/1" icon="user" />
                <h3>{t.name}</h3><p className="!text-[14px] text-tx3">{t.role}</p><p>{t.bio}</p>
              </article>
            ))}
          </div>
        </Sec>

        <Sec id="stories"><Head h="Students who prepared with Crack The Campus" /><Quotes items={STUDENT_QUOTES} /></Sec>

        <Sec className={tw.light}>
          <div className={`${split()} ${tw.rev} ${tw.imgLast}`} data-reveal="split">
            <a href="https://maps.app.goo.gl/y6P9HgeWedwsfCiz9" aria-label="Open the office location in Google Maps"><Frame alt="Map showing the Crack The Campus office at ThiDiff Tech Park, Singasandra, Bengaluru" icon="pin" /></a>
            <div><h2 className={tw.h2}>Visit us in Bengaluru</h2><p className={tw.lead} style={{ margin: '16px 0 20px' }}>{ADDRESS_LONG}.</p><ArrowLink href="/contact/">Contact us</ArrowLink></div>
          </div>
        </Sec>

        <Sec id="press">
          <Head h="Press and recognition" />
          <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
            {PRESS.map((p) => (
              <article className={card()} key={p.headline}><span className={`${tw.badge} ${tw.bN}`}>{p.outlet}</span><h3 className={tw.h4} style={{ marginTop: 12 }}>{p.headline}</h3><p className={tw.cap} style={{ marginTop: 6 }}>{p.date}</p></article>
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
