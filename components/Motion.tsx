'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Scroll reveals. Content is fully visible in the HTML; GSAP only hides what is still
// off-screen after hydration, so no-JS and reduced-motion see the final state.
const REVEAL = '[data-reveal]';
const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

export default function Motion() {
  const path = usePathname();

  // One Lenis for the whole session, driven by GSAP's ticker so ScrollTrigger and Lenis share a frame.
  useEffect(() => {
    if (calm()) return;
    lenis = new Lenis({ autoRaf: false, anchors: { offset: -80 }, lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis?.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis?.destroy(); lenis = null; };
  }, []);

  useGSAP(() => {
    lenis?.scrollTo(0, { immediate: true });
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Signature: headings resolve word by word out of a blur.
      // every page heading gets it, except inside article text and forms (same selector as globals.css)
      gsap.utils.toArray<HTMLElement>('[data-blur], main h1, main h2').filter((el) => !el.closest('article, form')).forEach((el) => {
        const split = SplitText.create(el, { type: 'words', aria: 'auto' });
        el.classList.add('is-split');
        gsap.from(split.words, {
          opacity: 0, y: 18, filter: 'blur(10px)', duration: 1, ease: 'power3.out', stagger: 0.07,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      // Painted art drifts slower than the page.
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((img) => {
        gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      const fold = window.innerHeight;
      const below = (els: Element[]) => els.filter((el) => el.getBoundingClientRect().top > fold * 0.9);
      // nested reveals would double-animate, so only the outermost one moves
      const items = below(gsap.utils.toArray<Element>(REVEAL)).filter((el) => !el.parentElement?.closest('[data-reveal]'));
      gsap.set(items, { opacity: 0, y: 24 });
      ScrollTrigger.batch(items, {
        start: 'top 90%', once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, overwrite: true }),
      });

      // Score bars "compute" once when they scroll in.
      below(gsap.utils.toArray<Element>('main [data-bar]')).forEach((bar) => {
        gsap.from(bar, { scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: bar, start: 'top 92%', once: true } });
      });
    });
    // Fonts and images change layout after load; re-measure trigger positions.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, { dependencies: [path], revertOnUpdate: true });

  return null;
}
