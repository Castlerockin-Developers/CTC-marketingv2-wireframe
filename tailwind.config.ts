import type { Config } from 'tailwindcss';
// Brand tokens live as CSS variables in app/globals.css; Tailwind only exposes them for small layout tweaks.
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: Object.fromEntries([50, 100, 200, 300, 400, 500, 700, 800, 900, 950].map((n) => [`l${n}`, `var(--l${n})`])),
    },
  },
} satisfies Config;
