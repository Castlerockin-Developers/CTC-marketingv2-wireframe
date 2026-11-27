import { Cards, Hero, Page, Steps } from '@/components/blocks';
import { Head, Sec } from '@/components/ui';
import { card, tw } from '@/components/tw';
import { APP_URL } from '@/content/site';

// Content doc §4.13 AI resume builder.
export const metadata = {
  title: { absolute: 'AI Resume Builder for Freshers (ATS-Friendly) | CTC' },
  description: 'Build an ATS-friendly fresher resume in minutes with AI suggestions for engineering students. One resume free.',
  alternates: { canonical: '/resume-builder/' },
};

/** A resume line being rewritten: the product visual for this page. */
function ResumeWin() {
  return (
    <div className="overflow-hidden rounded-[16px] border border-line bg-white" aria-hidden="true">
      <div className="border-b border-line px-4 py-2.5 text-[12px] font-medium text-muted">Resume builder · Projects</div>
      <div className="space-y-3 p-5 text-[14px] leading-6">
        <p className="rounded-xl bg-alt p-3 text-muted line-through decoration-[rgba(110,110,115,.5)]">Made a website for college project using HTML, CSS.</p>
        <p className="rounded-xl border border-[rgba(91,68,227,.3)] bg-tint p-3 text-ink"><span className="mb-1 block text-[12px] font-medium text-act">AI suggestion</span>Built a responsive event-registration website for a college fest using HTML, CSS and JavaScript.</p>
      </div>
    </div>
  );
}

export default function ResumeBuilder() {
  return (
    <Page
      schema={{ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Crack The Campus AI resume builder', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } }}
      faq={{ h: 'Resume builder FAQs', items: [
        ['What is an ATS-friendly resume?', 'A resume that applicant tracking software can read: standard headings, simple layout, no text inside images or complex tables.'],
        ['Is the AI resume builder free?', 'Yes, the free plan includes 1 AI-powered resume. Pro plans include 13 or 18 exports.'],
        ['What should a fresher put on a resume?', 'Education, skills, projects, internships, certifications, contests or hackathons, and any leadership roles.'],
        ['How long should a fresher resume be?', 'One page.'],
        ['Can I make different resumes for different roles?', 'Yes, on Pro plans you can export multiple versions tailored to each role.'],
        ['Does the AI make up achievements?', 'No. It improves wording only; you add the facts.'],
      ] }}
      band={{ h: 'Your resume, ready before your next drive', p: 'Fill in your projects and skills, take the AI’s suggestions and export.', cta: ['Build my resume free', APP_URL], micro: '1 AI-powered resume free · No credit card' }}
      sticky={['AI resume builder', '1 resume free', 'Build mine', APP_URL]}>
      <Hero crumb={[['Home', '/'], ['Resume builder']]} h1="AI resume builder for freshers"
        sub="Turn your projects, internships and skills into a clean, ATS-friendly resume in minutes, with AI suggestions written for engineering freshers."
        cta={['Build my resume free', APP_URL]} link={['See an example', '#example']} micro="1 AI-powered resume free · No credit card" visual={<ResumeWin />} />

      <Cards h="Built for students with little work experience" cols={3}
        p="Most resume tools assume years of jobs to list. Freshers have projects, internships, coursework and contests. The builder helps you describe those clearly, in a format applicant tracking systems (ATS) can read."
        items={[
          { t: 'ATS-friendly layout', icon: 'file', b: 'Simple structure and standard headings that tracking systems parse correctly.' },
          { t: 'Better bullet points', icon: 'spark', b: 'AI suggestions turn “did a project on X” into clear, specific achievements.' },
          { t: 'Placement-ready in minutes', icon: 'clock', b: 'Fill guided sections, review, export.' },
        ]} />

      <Steps alt h="How it works" items={[
        ['Add your details', 'Education, skills, projects and internships.'],
        ['Review suggestions', 'AI suggests clearer bullet points; edit anything you like.'],
        ['Pick a template', 'And check the preview.'],
        ['Export', 'Use it for campus and off-campus applications.'],
      ]} p="Exports: 1 resume on Free, 13 on Pro, 18 on Pro + Placement." />

      <Sec id="example">
        <Head h="Before and after" p="AI suggestions never add facts. You fill in your real numbers." />
        <div className={`${tw.cols} ${tw.c2}`} data-reveal="kids">
          <div className={card({ lg: true })}><p className={tw.eyebrow}>Before</p><p className="mt-3 text-[18px] leading-7 text-muted">“Made a website for college project using HTML, CSS.”</p></div>
          <div className={`${card({ lg: true })} !border-[rgba(91,68,227,.4)] !bg-tint`}><p className={`${tw.eyebrow} !text-act`}>After</p><p className="mt-3 text-[18px] leading-7 text-ink">“Built a responsive event-registration website for a college fest using HTML, CSS and JavaScript, used by [number] students.”</p></div>
        </div>
        <p className="mt-6 max-w-[720px] text-body"><b className="font-medium text-ink">“Will recruiters know it was written by AI?”</b> The builder suggests wording; you choose and edit it. The content, your projects, skills and results, is always yours.</p>
      </Sec>
    </Page>
  );
}
