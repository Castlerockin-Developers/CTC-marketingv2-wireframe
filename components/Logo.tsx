// Official mark (icon.svg from the live site); ink set in lavender-950 instead of near-black.
export function LogoMark() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true">
      <circle cx="256" cy="256" r="236" fill="#fff" stroke="#D9D4FC" strokeWidth="16" />
      <g transform="translate(118 94) scale(0.76)">
        <path d="M207.194 260L120.863 346.667L189.928 416H362.59L207.194 260Z" fill="#A294F9" />
        <path d="M69.0648 294.667L362.59 0H207.194L8.63309 199.333C8.63309 199.333 0 207.094 0 216.667C0 226.24 8.63309 234 8.63309 234L69.0648 294.667Z" fill="#1C1641" />
      </g>
    </svg>
  );
}

export function Wordmark() {
  return <span className="flex flex-col leading-none font-head font-extrabold tracking-[.06em] uppercase text-[14px] text-l950" aria-hidden="true"><b className="font-extrabold">Crack</b><span className="mt-0.5"><i className="not-italic text-l400">The</i> Campus</span></span>;
}
