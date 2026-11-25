import { CONTEST } from '@/content/dummy';
import { SITE_URL } from '@/content/site';

export const dynamic = 'force-static';

const utc = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export function GET() {
  const start = new Date(CONTEST.iso);
  const end = new Date(start.getTime() + parseInt(CONTEST.duration, 10) * 60_000);
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Crack The Campus//Contests//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', `UID:code-nova-3@crackthecampus.com`, `DTSTAMP:${utc(new Date('2026-11-24T00:00:00Z'))}`,
    `DTSTART:${utc(start)}`, `DTEND:${utc(end)}`, 'SUMMARY:Code Nova 3 (Crack The Campus coding contest)',
    `DESCRIPTION:Log in to the Crack The Campus desktop app 15 minutes early. Details: ${SITE_URL}/contests/code-nova-3/`,
    `URL:${SITE_URL}/contests/code-nova-3/`, 'BEGIN:VALARM', 'TRIGGER:-PT30M', 'ACTION:DISPLAY', 'DESCRIPTION:Code Nova 3 starts in 30 minutes', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
  return new Response(ics, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
}
