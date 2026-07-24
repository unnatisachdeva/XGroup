"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Height of the fixed header to offset in-page anchor targets. */
const HEADER_OFFSET = 110;

/**
 * Global smooth-scroll layer. Drives Lenis from a single rAF loop and keeps
 * GSAP ScrollTrigger in lockstep so scroll-driven animations stay in sync.
 * Also owns scroll restoration on navigation: normal route changes jump to the
 * top, while links carrying a hash (e.g. /services#oilfield) scroll to that
 * section. Respects prefers-reduced-motion by leaving native scrolling intact.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      anchors: true,
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(refresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, []);

  // Scroll restoration on route change.
  useEffect(() => {
    const lenis = lenisRef.current;
    const hash = window.location.hash;

    // Deep link to a section (e.g. /services#oilfield): wait for the target to
    // mount and settle, then scroll to it accounting for the fixed header.
    if (hash) {
      let attempts = 0;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el as HTMLElement, { offset: -HEADER_OFFSET });
          } else {
            const y =
              el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            window.scrollTo({ top: y });
          }
          ScrollTrigger.refresh();
          return;
        }
        if (attempts++ < 10) window.setTimeout(tryScroll, 60);
      };
      const id = window.setTimeout(tryScroll, 120);
      return () => window.clearTimeout(id);
    }

    // Normal navigation: reset to the very top so pages never open mid-scroll.
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 240);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
