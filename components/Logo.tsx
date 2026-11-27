// Official logo from the live site (crackthecampus.com/lightlogo.png). The live file is the light version for dark
// backgrounds; logo-dark.png is the same artwork with its white parts set to ink, for light backgrounds.
export function BrandLogo({ variant = 'dark', className = '' }: { variant?: 'dark' | 'light'; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- static export; 467x120 PNG, tiny
  return <img src={`/images/logo-${variant}.png`} alt="Crack The Campus" width={467} height={120} decoding="async" className={`h-10 w-auto m:h-8 ${className}`} />;
}
