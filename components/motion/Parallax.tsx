"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total travel as a fraction of the element height. Positive = moves up. */
  amount?: number;
}

/**
 * Vertical image/content parallax tied to the element's own scroll progress.
 * The inner layer is scaled slightly so the translate never exposes an edge.
 * No-ops under reduced motion.
 */
export function Parallax({ children, className, amount = 0.14 }: ParallaxProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${amount * 100}%`, `${-amount * 100}%`]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="relative h-full w-full will-change-transform"
        style={{
          y: shouldReduce ? 0 : y,
          scale: shouldReduce ? 1 : 1 + amount * 2,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
