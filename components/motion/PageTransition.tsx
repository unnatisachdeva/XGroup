"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Per-route enter animation. Lives in app/template.tsx, so it remounts on every
 * navigation: a thin red curtain sweeps up and the page content settles in.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) return <>{children}</>;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] origin-top bg-[#CC0000]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </>
  );
}
