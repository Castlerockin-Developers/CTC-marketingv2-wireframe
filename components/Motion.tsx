'use client';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Scroll reveals for sections below the fold. Content is fully visible in the HTML;
// GSAP only hides what is still off-screen after hydration, so no-JS and reduced-motion see the final state.
const REVEAL = 'main .sec-head, main .step, main .co-list li, main .tracks li, main .stat, main .cols > *, main .ui-frame, main .contest, main .faq, main .band .panel, main .split > div';

export default function Motion() {
  const path = usePathname();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const fold = window.innerHeight;
      const below = (els: Element[]) => els.filter((el) => el.getBoundingClientRect().top > fold * 0.9 && !el.parentElement?.closest('.split > div, .cols > *'));

      const items = below(gsap.utils.toArray<Element>(REVEAL));
      gsap.set(items, { opacity: 0, y: 16 });
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, ease: 'expo.out', stagger: 0.06, overwrite: true }),
      });

      // Bars fill when they scroll in: the score is the product, so let it "compute" once.
      below(gsap.utils.toArray<Element>('main .bar .bt i')).forEach((bar) => {
        gsap.from(bar, { scaleX: 0, transformOrigin: 'left center', duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: bar, start: 'top 90%', once: true } });
      });
    });
    // Fonts and images change layout after load; re-measure trigger positions.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, { dependencies: [path], revertOnUpdate: true });

  return null;
}
