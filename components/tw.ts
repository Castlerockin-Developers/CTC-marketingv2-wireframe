// Shared Tailwind class strings for the design-system primitives used across many pages.
// Tokens (colours, type scale, spacing) come from tailwind.config.ts.

const head = 'font-head text-tx text-balance';

/** page root (body, and the overlay layer): base type and colour */
export const SITE = 'm-0 font-body text-copy text-tx2 bg-bg antialiased [text-rendering:optimizeLegibility] min-h-screen relative';

export const tw = {
  // type
  display: `${head} font-medium text-display tracking-[-.025em]`,
  h1: `${head} font-medium text-h1 tracking-[-.025em]`,
  h2: `${head} font-medium text-h2 tracking-[-.02em]`,
  h3: `${head} font-medium text-h3 tracking-[-.015em]`,
  h3s: `${head} font-medium text-h3s tracking-[-.01em]`,
  h4: 'font-body text-h4 font-semibold text-tx',
  lead: 'text-lead text-tx2 text-pretty',
  sm: 'text-sm',
  cap: 'text-[13px] leading-5 text-tx3',
  eyebrow: 'inline-block text-[14px] leading-5 font-medium text-muted',
  mono: 'font-mono font-medium tabular-nums',
  measure: 'max-w-[680px]',
  sr: '!absolute w-px h-px overflow-hidden [clip:rect(0_0_0_0)] whitespace-nowrap',
  iconBtn: 'w-11 h-11 rounded-[10px] bg-transparent text-l900 inline-flex items-center justify-center cursor-pointer hover:bg-l50 hover:text-l950 [&_svg]:w-5 [&_svg]:h-5',
  // overlay root (menu sheet, modal): portalled outside <main>; `layer`/`site` are the hooks for the base styles in globals.css
  layer: 'layer fixed inset-0 pointer-events-none z-[80] overflow-hidden empty:hidden [&>*]:pointer-events-auto',
  scrim: 'absolute inset-0 bg-[rgba(28,22,65,.4)] transition-opacity duration-med',
  seg: 'p-1 rounded-[14px] bg-l50 border border-l200 gap-1 m:w-full',
  segBtn: 'min-h-11 px-5 rounded-[10px] bg-transparent text-l900 font-semibold text-[15px] cursor-pointer whitespace-nowrap hover:text-tx aria-pressed:bg-act aria-pressed:text-white aria-pressed:shadow-1 m:flex-1 m:px-2 m:text-[14px]',
  logo: 'inline-flex items-center gap-2.5 !no-underline !text-l950 font-head font-semibold text-[18px] tracking-[-.01em] min-h-11 whitespace-nowrap [&_svg]:w-[34px] [&_svg]:h-[34px] [&_svg]:flex-none m:text-[16px]',

  // layout
  wrap: 'max-w-[calc(1200px+var(--mar)*2)] mx-auto px-mar',
  sec: 'py-sec',
  light: 'bg-alt text-tx2 [--bg:var(--alt)]',
  row: 'flex gap-4 items-center flex-wrap',
  cols: 'grid gap-gut',
  c2: 'grid-cols-[repeat(2,1fr)] m:grid-cols-[1fr]',
  c3: 'grid-cols-[repeat(3,1fr)] m:grid-cols-[1fr]',
  c4: 'grid-cols-[repeat(4,1fr)] t:grid-cols-[repeat(2,1fr)] m:grid-cols-[1fr]',
  c5: 'grid-cols-[repeat(5,1fr)] m:grid-cols-[1fr]',
  c6: 'grid-cols-[repeat(6,1fr)] m:grid-cols-[1fr]',
  m2: 'm:!grid-cols-[1fr_1fr]',
  rev: '[&>:first-child]:order-2 m:[&>:first-child]:order-none',
  imgLast: 'm:[&>figure]:order-2',
  hscroll: 'm:!grid m:grid-flow-col m:auto-cols-[82%] m:!grid-cols-none m:overflow-x-auto m:snap-x m:snap-mandatory m:mx-[calc(var(--mar)*-1)] m:px-mar m:pt-1 m:pb-3 m:scroll-px-mar m:gap-3 m:[&>*]:snap-start',
  mOnly: '!hidden m:!block',
  mOnlyInline: '!hidden m:!inline',
  dOnly: 'm:!hidden',
  centerM: 'm:text-center',
  ctaRow: 'flex gap-x-5 gap-y-3 items-center flex-wrap',
  // hero enters once on load
  enter: '[&>*]:animate-enter [&>*:nth-child(2)]:[animation-delay:.08s]',

  // hero section: the page writes the content, these are its parts
  hero: "relative overflow-hidden bg-white",
  heroPad: 'pt-[72px] pb-24 m:pt-10 m:pb-16',
  heroCompact: 'pt-14 pb-[72px] m:pt-8 m:pb-12',
  heroWrap: 'relative z-[1]',
  heroH1: 'mt-4 mb-5',
  heroLead: 'max-w-[600px]',
  heroCta: 'mt-8 m:flex-col m:items-stretch m:mt-7 m:[&_[data-btn=g]]:self-center',
  heroMicro: 'mt-4',

  // long-form article body (guides, legal pages). `.site` in the variants keeps the original precedence over child classes.
  prose: '[&_h2]:font-head [&_h2]:text-[30px] [&_h2]:leading-[38px] [&_h2]:text-tx [&_h2]:tracking-[-.01em] [&_h2]:mt-14 [&_h2]:scroll-mt-[120px] m:[&_h2]:text-[24px] m:[&_h2]:leading-8 m:[&_h2]:mt-11 text-[18px] leading-[30px] text-tx2 m:text-[17px] m:leading-[29px] [.site_&>*+*]:mt-5 [.site_&>h2]:mt-14 [.site_&_li+li]:mt-2.5 [&_ul]:pl-6 [&_ol]:pl-6 [&_strong]:text-tx [&_p]:text-pretty [&_li]:marker:text-act',
  articleHd: 'max-w-[880px] mx-auto text-left',

  // home: company list, track links, steps, contest panel
  tracks: 'list-none mt-8 p-0 grid gap-3 [&_a]:flex [&_a]:gap-3.5 [&_a]:items-start [&_a]:p-4 [&_a]:border [&_a]:border-line [&_a]:rounded-xl [&_a]:!no-underline [&_a]:!text-body [&_a]:[transition:border-color_160ms_var(--ease-out),background-color_160ms] [&_a:hover]:border-act [&_a:hover]:bg-alt [&_svg]:w-[22px] [&_svg]:h-[22px] [&_svg]:text-act [&_svg]:flex-none [&_svg]:mt-0.5 [&_b]:block [&_b]:text-ink [&_b]:text-[16px] [&_b]:mb-0.5 [&_span]:text-[15px] [&_span]:leading-[1.45]',
  contest: 'rounded-[32px] bg-alt p-14 grid grid-cols-[7fr_5fr] gap-12 items-center m:grid-cols-[1fr] m:py-7 m:px-5 m:gap-7 m:rounded-[20px]',
  ctaStack: 'm:flex-col m:items-stretch',
  quiet: 'pt-5 border-t border-l200 text-[15px] text-tx3',
  dot: 'w-2 h-2 rounded-full bg-lav shadow-[0_0_0_4px_rgba(162,148,249,.28)]',
  prize: 'list-none grid gap-3.5 [&_li]:flex [&_li]:gap-3.5 [&_li]:items-start [&_li]:text-[15px] [&_li]:leading-[22px] [&_li_b]:block [&_li_b]:text-l950 [&_li_b]:text-[15px]',

  numlist: "list-none [counter-reset:n] grid gap-4 [&>li]:[counter-increment:n] [&>li]:flex [&>li]:gap-4 [&>li]:items-start [&>li]:before:content-[counter(n,decimal-leading-zero)] [&>li]:before:font-mono [&>li]:before:font-medium [&>li]:before:text-eyebrow [&>li]:before:text-[15px] [&>li]:before:leading-7 [&>li]:before:min-w-7",
  faqWrap: 'grid grid-cols-[4fr_8fr] gap-16 m:grid-cols-[1fr] m:gap-6',

  sticky: 'sticky bottom-0 z-[35] hidden items-center gap-3 pt-3 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] bg-[rgba(255,255,255,.96)] backdrop-blur-[12px] border-t border-l200  [transition:transform_var(--t-med)_var(--ease),opacity_var(--t-med)] m:flex',
  stickyText: 'flex-1 text-[13px] leading-[18px] text-l700 [&_b]:block [&_b]:text-l950 [&_b]:text-[14.5px] [&_b]:leading-5',

  // cards
  card: 'bg-white border rounded-[24px] relative [&_h3]:mb-2 [&_p]:text-sm [&_p]:text-tx2',
  cardBd: 'border-bd',
  cardI: 'border-l200 transition-[border-color,transform,box-shadow] duration-fast ease-site flex flex-col hover:border-line-2 hover:-translate-y-0.5 hover:shadow-2',
  stretch: "after:content-[''] after:absolute after:inset-0 after:rounded-[inherit]",
  ic: 'w-11 h-11 rounded-[14px] bg-alt text-ink inline-flex items-center justify-center mb-4 flex-none [&_svg]:w-[22px] [&_svg]:h-[22px]',
  icGold: '!bg-act !text-white',

  // badges
  badge: 'inline-flex items-center gap-1.5 py-0.5 px-2.5 rounded-full text-[12.5px] leading-5 font-semibold tracking-[.02em]',
  bV: 'bg-l100 text-l800',
  bN: 'bg-l50 text-l900 shadow-[inset_0_0_0_1px_var(--l200)]',
  bOk: 'bg-[#E7F6EC] text-[#067647]',
  bGold: 'bg-ink text-white',
  bInfo: 'bg-l100 text-l800',
  bWarn: 'bg-[#FFF4E5] text-[#93370D]',
  chip: 'inline-flex items-center gap-1.5 min-h-8 py-1 px-3 rounded-full border border-l200 text-[14px] leading-5 font-medium text-l900 bg-white [&_svg]:w-4 [&_svg]:h-4',

  // data tables
  tablebox: 'bg-white border border-l200 rounded-2xl overflow-hidden',
  dtable: 'w-full border-collapse text-[16px] [&_th]:py-4 [&_th]:px-5 [&_td]:py-4 [&_td]:px-5 [&_th]:border-b [&_td]:border-b [&_th]:border-l200 [&_td]:border-l200 [&_th]:text-left [&_td]:text-left [&_th]:align-top [&_td]:align-top [&_th]:w-[34%] [&_th]:text-tx [&_th]:font-semibold m:[&_th]:py-3.5 m:[&_th]:px-3 m:[&_td]:py-3.5 m:[&_td]:px-3 m:[&_th]:text-[15px] m:[&_td]:text-[15px]',
  callout: 'border-l-[3px] border-l400 bg-l50 rounded-r-xl py-5 px-6 [&_h3]:mb-1.5',
  alert: 'flex gap-3 items-start py-3.5 px-4 rounded-xl border text-[15px] leading-[22px] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:flex-none [&_svg]:mt-px',
  aInfo: 'bg-l50 border-l300 text-l900',
  aOk: 'bg-[#ECFDF3] border-[#A6F4C5] text-[#054F31]',
  aWarn: 'bg-[#FFFAEB] border-[#FEDF89] text-[#7A2E0E]',
  aErr: 'bg-[#FEF3F2] border-[#FECDCA] text-[#7A271A]',
};

const COLS = { '11': 'grid-cols-[1fr_1fr]', '57': 'grid-cols-[5fr_7fr]', '75': 'grid-cols-[7fr_5fr]', '66': 'grid-cols-[6fr_6fr]' };
/** two-column split that stacks on mobile; pair with data-reveal="split" */
export const split = (r: '11' | '57' | '75' = '11') => `grid ${COLS[r]} gap-16 items-center t:gap-10 m:!grid-cols-[1fr] m:gap-8`;
/** hero content + visual grid */
export const heroGrid = (r: '66' | '75' = '66') => `grid ${COLS[r]} gap-14 items-center t:gap-10 m:!grid-cols-[1fr] m:!gap-10`;

/** card: static (border bd) or interactive (lifts on hover); lg = 32px padding */
export const card = (o: { i?: boolean; lg?: boolean } = {}) =>
  `${tw.card} ${o.lg ? 'p-8' : 'p-6'} ${o.i ? tw.cardI : tw.cardBd}`;

export type BtnKind = 'p' | 's' | 'g';
const BTN = {
  base: 'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium text-[16px] leading-6 border-[1.5px] border-transparent !no-underline cursor-pointer whitespace-nowrap [transition:background-color_160ms_var(--ease-out),border-color_160ms_var(--ease-out),color_160ms,transform_160ms_var(--ease-out),box-shadow_160ms] active:scale-[.97] [&_svg]:w-[18px] [&_svg]:h-[18px] focus-visible:outline-offset-[3px] focus-visible:rounded-full disabled:!bg-tint disabled:!text-muted disabled:!border-transparent disabled:!shadow-none disabled:cursor-not-allowed disabled:!transform-none',
  p: 'bg-act !text-white hover:bg-act-h active:bg-act-p',
  s: 'bg-white border-line-2 !text-ink hover:border-ink active:bg-alt',
  g: 'bg-transparent !text-linkc hover:!underline',
  size: { p: 'min-h-12 px-6 m:min-h-[52px]', s: 'min-h-12 px-6 m:min-h-[52px]', g: 'min-h-11 px-2.5 m:min-h-[52px]' },
  sm: 'min-h-11 px-[18px] !text-[15px]',
};
/** Button classes; pair with data-btn={kind} so containers can restyle it (e.g. the dark closing band). */
export const btn = (kind: BtnKind = 'p', o: { sm?: boolean; blk?: boolean; size?: string } = {}) =>
  `${BTN.base} ${BTN[kind]} ${o.size ?? (o.sm ? BTN.sm : BTN.size[kind])}${o.blk ? ' w-full' : ''}`;

/** form card around a MockForm; on alt-tinted sections use FORM_CARD_ON_ALT */
const FORM_CARD_BASE = 'bg-white border border-line rounded-[24px] p-8 m:py-6 m:px-5 [&_h3]:mb-1.5 [&_h2]:mb-1.5';
export const FORM_CARD = `${FORM_CARD_BASE} shadow-[0_24px_60px_rgba(0,0,0,.08)]`;
export const FORM_CARD_ON_ALT = `${FORM_CARD_BASE} shadow-[0_24px_60px_rgba(0,0,0,.06)]`;
export const FSUB = 'text-[15px] leading-[22px] text-tx3 mb-6';
export const FORM_NOTE = 'text-[13px] leading-5 text-tx3 mt-3 block [&_svg]:!inline-block [&_svg]:w-4 [&_svg]:h-4 [&_svg]:align-[-3px] [&_svg]:mr-2';
export const INP = 'w-full min-h-12 py-3 rounded-[10px] border-[1.5px] bg-white text-l950 text-[16px] leading-[22px] transition-[border-color,box-shadow] duration-fast placeholder:text-tx3 placeholder:opacity-100 hover:border-body focus:!outline-none focus:border-act focus:shadow-[0_0_0_3px_rgba(91,68,227,.18)] aria-[invalid=true]:border-[#B42318] disabled:opacity-60 disabled:cursor-not-allowed';
