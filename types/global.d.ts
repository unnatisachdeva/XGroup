import type Lenis from "lenis";

declare global {
  interface Window {
    /** Shared Lenis smooth-scroll instance, set by the SmoothScroll provider. */
    __lenis?: Lenis;
  }
}

export {};
