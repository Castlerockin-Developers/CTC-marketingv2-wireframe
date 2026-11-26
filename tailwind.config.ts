import type { Config } from 'tailwindcss';

// Brand tokens are CSS variables in app/globals.css (they switch per theme scope and breakpoint); Tailwind names them.
const v = (n: string) => `var(--${n})`;
const type = (n: string) => [v(`fs-${n}`), { lineHeight: v(`lh-${n}`) }] as [string, { lineHeight: string }];

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    // desktop-first, matching the design: t = tablet and below, m = mobile
    screens: { t: { max: '1279px' }, m: { max: '767px' } },
    extend: {
      colors: {
        ...Object.fromEntries([50, 100, 200, 300, 400, 500, 700, 800, 900, 950].map((n) => [`l${n}`, v(`l${n}`)])),
        ink: v('ink'), body: v('body'), muted: v('muted'),
        act: { DEFAULT: v('act'), h: v('act-h'), p: v('act-p') },
        lav: { DEFAULT: v('lav'), h: v('lav-h') },
        alt: v('alt'), tint: v('tint'), tint2: v('tint2'),
        line: { DEFAULT: v('line'), 2: v('line2'), ui: v('line-ui') },
        // theme-scoped roles
        bg: v('bg'), s1: v('s1'), s2: v('s2'), bd: v('bd'), bd2: v('bd2'),
        tx: v('tx'), tx2: v('tx2'), tx3: v('tx3'), link: v('link'), linkc: v('link-c'), eyebrow: v('eyebrow'), focus: v('focus'),
        p300: v('p300'), p600: v('p600'), p700: v('p700'),
        ok: v('ok'), err: v('err'),
      },
      fontFamily: { head: v('f-head'), body: v('f-body'), mono: v('f-mono') },
      fontSize: {
        display: type('display'), h1: type('h1'), h2: type('h2'), h3: type('h3'), h3s: type('h3s'), h4: type('h4'),
        lead: type('lead'), copy: type('body'), sm: type('sm'),
      },
      spacing: { sec: v('sec'), gut: v('gut'), mar: v('mar') },
      boxShadow: { 1: v('sh-1'), 2: v('sh-2'), 3: v('sh-3') },
      transitionTimingFunction: { site: v('ease'), snap: v('ease-out') },
      transitionDuration: { fast: v('t-fast'), med: v('t-med') },
      keyframes: {
        enter: { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'none' } },
        pop: { from: { opacity: '0', transform: 'scale(.97)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { enter: 'enter .6s var(--ease) both', pop: 'pop var(--t-med) var(--ease)' },
    },
  },
} satisfies Config;
