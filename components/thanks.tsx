import type { ReactNode } from 'react';
import { Page, type CardItem } from './blocks';
import { Card, Icon, Sec } from './ui';
import { tw } from './tw';

/** Thank-you pages (content doc §5): a confirmation, then the obvious next steps. Not indexed. */
export const THANKS_META = { robots: { index: false, follow: true } };

export function Thanks({ h1, children, next }: { h1: string; children: ReactNode; next: CardItem[] }) {
  return (
    <Page sticky={null}>
      <Sec className={`${tw.light} !py-24`}>
        <div className="mx-auto max-w-[720px] text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-tint text-act [&_svg]:h-8 [&_svg]:w-8"><Icon name="check" /></span>
          <h1 className={tw.h1}>{h1}</h1>
          <div className={`${tw.lead} mt-5 space-y-3`}>{children}</div>
        </div>
        <div className={`${tw.cols} ${next.length > 2 ? tw.c3 : tw.c2} mx-auto mt-14 max-w-[1000px]`}>
          {next.map((c) => <Card key={c.t} icon={c.icon} title={c.t} href={c.href} link={c.link}>{c.b}</Card>)}
        </div>
      </Sec>
    </Page>
  );
}
