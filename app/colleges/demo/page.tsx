import { Page } from '@/components/blocks';
import { LeadForm, type FieldDef } from '@/components/interactive';
import { CHECK_LI, CHECKS, Crumb, Icon, Sec } from '@/components/ui';
import { FORM_CARD, FORM_NOTE, FSUB, split, tw } from '@/components/tw';
import { EMAIL } from '@/content/site';
import { PHONE, REPLY_TIME } from '@/content/dummy';

// Content doc §4.25 Book a demo.
export const metadata = {
  title: { absolute: 'Book a Demo: Crack The Campus for Colleges' },
  description: 'Book a 20-minute demo of proctored exams, readiness analytics and placement training for your college.',
  alternates: { canonical: '/colleges/demo/' },
};

const FIELDS: FieldDef[] = [
  { name: 'name', label: 'Full name', ph: 'Your full name…', req: 'text', err: 'Please enter your name.', ac: 'name' },
  { name: 'role', label: 'Designation', type: 'select', ph: 'Select', req: 'text', err: 'Please choose your role.', options: ['TPO', 'HOD', 'Principal', 'Faculty', 'Other'] },
  { name: 'email', label: 'Work email', type: 'email', ph: 'name@college.edu.in', help: 'Use your official college email if you have one', req: 'email', err: 'Enter a valid email address.' },
  { name: 'phone', label: 'Phone number', type: 'tel', ph: '98765 43210', help: 'For demo scheduling only', req: 'phone', err: 'Enter a 10-digit mobile number.' },
  { name: 'college', label: 'College name', ph: 'Start typing your college…', req: 'text', err: 'Please tell us your college.', ac: 'organization' },
  { name: 'city', label: 'City', ph: 'e.g. Bengaluru', req: 'text', err: 'Please tell us your city.', ac: 'address-level2' },
  { name: 'students', label: 'Number of students', type: 'select', ph: 'Select range', help: 'Students who would use it this year', req: 'text', err: 'Please choose a range.', options: ['Under 500', '500–1,500', '1,500–5,000', 'Over 5,000'], full: true },
  { name: 'msg', label: 'What would you like to see?', type: 'textarea', ph: 'Proctored exams, readiness reports, CRT tracks… Add teammates’ emails if they should join.', optional: true, full: true },
];

export default function Demo() {
  return (
    <Page sticky={null}
      faq={{ h: 'Demo questions', items: [
        ['How long is the demo?', 'About 20 minutes plus questions.'],
        ['Is it free?', 'Yes, with no commitment.'],
        ['Can my team join?', 'Yes, add their emails in the message box.'],
        ['Can we start with a pilot?', 'Yes, most colleges begin with one batch or department.'],
        ['Will you share pricing?', 'Yes, we’ll send a quote based on your cohort size after the demo.'],
      ] }}>
      <Sec className={`${tw.light} !pt-10`}>
        <Crumb items={[['Home', '/'], ['For Colleges', '/colleges/'], ['Book a demo']]} />
        <div className={split('11')} style={{ alignItems: 'start' }}>
          <div>
            <h1 className={tw.h1}>Book a 20-minute demo</h1>
            <p className={`${tw.lead} mt-5`}>See the admin suite with your own use case. We’ll reply within {REPLY_TIME} to confirm a time.</p>
            <h2 className={`${tw.h4} mt-10`}>What we’ll cover</h2>
            <ul className={`${CHECKS} mt-4`}>
              {['Your placement goals and batch size', 'A live proctored exam from the student and admin side', 'Readiness reports', 'Rollout and pricing for your college'].map((t) => <li className={CHECK_LI} key={t}><Icon name="checkc" /><span>{t}</span></li>)}
            </ul>
            <div className="mt-10 rounded-[24px] border border-line bg-white p-6">
              <p className="font-medium text-ink">Prefer to talk?</p>
              <p className="mt-1 text-[15px] text-body">Call <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a> or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
            </div>
          </div>
          <LeadForm next="/colleges/demo/thank-you/" subject="College demo request" className={FORM_CARD} fields={FIELDS} submit="Book my demo"
            note={<p className={FORM_NOTE}><Icon name="lock" />We use your details only to arrange the demo.</p>}
            success={{ title: 'Demo request received', body: `Thanks, {name}. We’ll contact you within ${REPLY_TIME} to confirm a time.` }}>
            <h2 className={tw.h3s}>Your details</h2>
            <p className={FSUB}>All fields are required unless marked optional.</p>
          </LeadForm>
        </div>
      </Sec>
    </Page>
  );
}
