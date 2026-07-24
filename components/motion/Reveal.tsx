"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertical travel distance in px. */
  y?: number;
  delay?: number;
  /** Element rendered. Defaults to div. */
  as?: "div" | "section" | "span" | "li" | "figure";
  once?: boolean;
}

/**
 * Scroll-triggered reveal: subtle fade + rise as the element enters the
 * viewport. Collapses to a plain fade when reduced motion is requested.
 */
export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-90px" }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "section";
}

/** Parent that staggers direct <Reveal> (or motion) children on view. */
export function Stagger({ children, className, gap = 0.1, as = "div" }: StaggerProps) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      variants={{
        hidden: {},
        show: { transition: shouldReduce ? {} : { staggerChildren: gap } },
      }}
    >
      {children}
    </MotionTag>
  );
}
