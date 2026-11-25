import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Crack The Campus: placement prep, proctored mock tests and the CTC Score';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72,
        backgroundColor: '#16132B', backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(162,148,249,.45), transparent 55%), radial-gradient(circle at 0% 100%, rgba(91,68,227,.35), transparent 60%)', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 512 512"><circle cx="256" cy="256" r="236" fill="#fff" /><g transform="translate(118 94) scale(0.76)"><path d="M207.194 260L120.863 346.667L189.928 416H362.59L207.194 260Z" fill="#A294F9" /><path d="M69.0648 294.667L362.59 0H207.194L8.63309 199.333C8.63309 199.333 0 207.094 0 216.667C0 226.24 8.63309 234 8.63309 234L69.0648 294.667Z" fill="#16132B" /></g></svg>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>CRACK THE CAMPUS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.08, maxWidth: 980 }}>Get placement-ready for Infosys, Wipro, Capgemini and more.</div>
          <div style={{ fontSize: 30, color: '#CFC9E8' }}>Company prep, proctored mock tests and a CTC Score from 0 to 10.</div>
        </div>
      </div>
    ),
    size,
  );
}
