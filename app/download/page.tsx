import { Cards, Hero, Page, Steps } from '@/components/blocks';
import { CHECK_LI, CHECKS, Head, Icon, ProctorWin, Sec } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { APP_VERSION, DOWNLOADS, LINUX_VERSION, SITE_URL } from '@/content/site';

// Content doc §3.7 Download. Installer links live in content/site.ts (DOWNLOADS).
export const metadata = {
  title: { absolute: 'Download the CTC Desktop App (Windows, macOS, Linux)' },
  description: 'Install the Crack The Campus desktop app for proctored mock tests and contests on Windows, macOS and Linux.',
  alternates: { canonical: '/download/' },
};

const D = DOWNLOADS;
const FILE_LINK = 'block py-2 text-[15px] font-medium';

function Platform({ name, icon, body, primary, more }: { name: string; icon: string; body: string; primary: { label: string; href: string; mb: number }; more?: { label: string; href: string; mb: number }[] }) {
  return (
    <article className={`${card({ lg: true })} flex flex-col`}>
      <span className={tw.ic}><Icon name={icon} /></span>
      <h3 className={tw.h3s}>{name}</h3>
      <p className="mt-2">{body}</p>
      <a className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-act px-6 font-medium !text-white !no-underline hover:bg-act-h" href={primary.href} download>
        <Icon name="dl" />Download for {name}
      </a>
      <p className="mt-2 text-center text-[13px] text-muted">{primary.label} · {primary.mb} MB</p>
      {more && <div className="mt-4 border-t border-line pt-3">{more.map((m) => <a key={m.href} className={FILE_LINK} href={m.href} download>{m.label} · {m.mb} MB</a>)}</div>}
    </article>
  );
}

export default function Download() {
  return (
    <Page
      schema={{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Crack The Campus', applicationCategory: 'EducationalApplication',
        operatingSystem: 'Windows, macOS, Linux', softwareVersion: APP_VERSION, url: `${SITE_URL}/download/`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } }}
      faq={{ h: 'App questions', items: [
        ['Is the desktop app free?', 'Yes. Downloading and using the app is free; proctored tests count towards your plan’s CTC assessment limit.'],
        ['Can I use the app on my phone?', 'No. Proctored tests need a laptop or PC running Windows, macOS or Linux.'],
        ['Which Mac download should I choose?', 'The Universal version works on all Macs. Choose Apple Silicon or Intel only if you want a smaller download.'],
        ['Which Linux file should I choose?', 'Most laptops use x64. The .deb packages install on Ubuntu, Debian and their derivatives.'],
      ] }}
      band={{ h: 'Ready for your first proctored mock?', p: 'Install the app, run the system check and sit a full mock under real conditions.', cta: ['Start a mock test', '/mock-tests/'] }}
      sticky={['Desktop app', `Version ${APP_VERSION} · free`, 'Download', '#platforms']}>
      <Hero crumb={[['Home', '/'], ['Download']]} h1="Download the Crack The Campus app"
        sub="The desktop app runs proctored mock tests, ranked assessments and contests in a secure, focused window."
        cta={['Choose your platform', '#platforms']} micro={`Version ${APP_VERSION} · Windows, macOS and Linux · Free`} visual={<ProctorWin />} />

      <Sec id="platforms">
        <Head h="Choose your platform" />
        <div className={`${tw.cols} ${tw.c3}`} data-reveal="kids">
          <Platform name="Windows" icon="monitor" body="Installer for personal laptops and college labs." primary={D.windows} />
          <Platform name="macOS" icon="monitor" body="Universal disk image for Apple Silicon and Intel Macs." primary={D.macUniversal} more={[D.macArm, D.macIntel]} />
          <Platform name="Linux" icon="server" body={`.deb packages for x64 and ARM64 (version ${LINUX_VERSION}).`} primary={D.linuxX64} more={[D.linuxArm]} />
        </div>
      </Sec>

      <Sec className={tw.light}>
        <Head h="Before you install" />
        <ul className={`${CHECKS} max-w-[640px]`}>
          {['A laptop or PC running Windows, macOS or Linux', 'Webcam and microphone (for proctored tests)', 'A stable internet connection', 'Admin rights to install (ask your lab admin if you’re on a college PC)'].map((t) => <li className={CHECK_LI} key={t}><Icon name="checkc" /><span>{t}</span></li>)}
        </ul>
      </Sec>

      <Steps h="How to install" items={[
        ['Download', 'Get the file for your system.'],
        ['Install', 'Open it and follow the installer.'],
        ['Sign in', 'Use your Crack The Campus account.'],
        ['Run the system check', 'Do it before your first proctored test.'],
      ]} />

      <Cards alt h="Why proctored tests run in the app" items={[
        { t: 'Real test conditions', icon: 'lock', b: 'Locked screen, timer and monitoring, like many company online tests.' },
        { t: 'Fair results', icon: 'shield', b: 'Proctored results count towards your CTC Score because they’re verified.' },
        { t: 'Synced progress', icon: 'refresh', b: 'Everything you do in the app appears in your web account.' },
      ]} />
    </Page>
  );
}
