import type { ReactNode } from 'react';
import { ArrowLink, Sec } from './ui';
import { tw } from './tw';
import { Faq } from './interactive';
import { SUPPORT, type Faq as FaqT } from '@/content/site';
import { REPLY_TIME } from '@/content/dummy';

export function FaqSec({ h, items, intro = true, link, id = 'faq' }: { h: string; items: FaqT[]; intro?: boolean; link?: [string, string]; id?: string }) {
  return (
    <Sec className={tw.light} id={id}>
      <div className={tw.faqWrap}>
        <div>
          <h2 className={tw.h2}>{h}</h2>
          {intro && <p className={`${tw.sm} mt-4`}>Still stuck? Write to <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a> and we reply within {REPLY_TIME}.</p>}
          {link && <ArrowLink className="mt-3" href={link[1]}>{link[0]}</ArrowLink>}
        </div>
        <Faq items={items} />
      </div>
    </Sec>
  );
}

export const Main = ({ children }: { children: ReactNode }) => <main id="main">{children}</main>;
