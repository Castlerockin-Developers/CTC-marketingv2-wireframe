# Crack The Campus: marketing site v2

Next.js 15 static site (App Router, `output: 'export'`), built from `ctc-light-mockups.html` and `ctc-wireframes.html`.

```bash
npm install
npm run dev        # http://localhost:3100
npm run build      # static export to out/
npm run lint && npm run typecheck
```

## Deploy to Vercel
1. Import the `marketing-site-v2` folder as a Vercel project (framework: Next.js; `vercel.json` sets build and install commands).
2. Set environment variables (see `.env.example`):
   - `NEXT_PUBLIC_APP_URL` (**required in production**, the build fails without it): base URL of the web app (ctc-wapp). Log in goes to `<APP_URL>/login`; Start free, Get Pro and Register go to `<APP_URL>`.
   - `NEXT_PUBLIC_SITE_URL`: canonical domain, defaults to `https://crackthecampus.com`.
   - `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_YOUTUBE_URL` (optional): the footer shows social links only when these are set.
3. Add the domain. `vercel.json` sends security headers (HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy) and long-cache headers for `/_next/static`.

If you later post forms to an API or add analytics, add that origin to `connect-src` in the CSP in `vercel.json`.

## Pages
`/`, `/prep/[company]` (Infosys plus 6 more from one template), `/colleges`, `/pricing`, `/courses/python`, `/contests/code-nova-3` (+ `/code-nova-3.ics`), `/about`, `/contact`, `/guides`, `/guides/how-to-prepare-for-campus-placement`, `/privacy`, `/terms`, `/refund-policy`, `/styleguide` (noindex), plus a custom 404, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `llms.txt` and a generated Open Graph image.

## Motion
GSAP 3 + `@gsap/react` in `components/Motion.tsx` (mounted once in `app/layout.tsx`): sections below the fold fade up 16px as they scroll in, and score/readiness bars fill once. Content is visible in the HTML; with JS off or `prefers-reduced-motion: reduce` nothing animates. Hero entrance is CSS (`[data-enter]`). Buttons press to `scale(.97)` over 160ms.

## Where things live
- `.agents/site-brief.md`: site goals, metrics and audiences (read before changing pages).
- `app/globals.css`: the mockup's tokens and components, then the v3 colour theme block at the end (ink, body and muted text; action violet #5B44E3; logo lavender #A294F9 as accent).
- `content/site.ts`: real facts and links (prices, plan limits, address, emails, app and download URLs, nav, FAQs).
- `content/dummy.ts`: **invented sample data**: stats, testimonials, team, press, contest dates, phone, hours and response time. Shipped visible by decision; replace with verified data as it arrives.
- `components/`: `ui.tsx` (server building blocks), `interactive.tsx` (FAQ, sticky CTA, forms, countdown), `Header`, `Footer`, `SampleQuiz`, `Pricing`, `Guides`, `Legal`.

## Known limits
- **Forms are mock:** demo, contact and newsletter forms validate and show success, but send nothing (search `shortcut:`).
- **Legal pages are drafts** written from the site’s own facts (7-day refund rule, 90-day proctoring retention). Have them reviewed before launch.
- **Sample content:** the sample-test questions in `components/SampleQuiz.tsx` are samples. Only one guide is written; the others show "Coming soon".
- **Images:** product visuals (practice question, proctored window, CTC Score, admin dashboard, curriculum vault) are real UI drawn in code (`PracticeWin`, `ProctorWin`, `DashWin`, `VaultWin` in `components/ui.tsx`). Photo slots still use plain tinted frames: About (team, office), contest banner, course lesson, guide hero, contact/about maps. Testimonials and the author box show names only until real photos exist.
- **Pricing:** confirm the struck-through prices on /pricing were really charged, or remove them.
- **Google verification:** the meta tag reuses the live site’s Search Console property.
