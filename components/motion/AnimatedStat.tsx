"use client";

import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface AnimatedStatProps {
  /** Full display value, e.g. "100%", "24/7", "CA · US", "5". */
  value: string;
  className?: string;
}

/**
 * Counts the leading numeric portion of a stat up from zero when it scrolls
 * into view, preserving any prefix/suffix (%, +, /7, etc.). Non-numeric values
 * simply render as-is. Reduced motion shows the final value immediately.
 */
export function AnimatedStat({ value, className }: AnimatedStatProps) {
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2].replace(/,/g, "")) : null;
  const suffix = match?.[3] ?? "";

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(
    target === null ? value : `${prefix}0${suffix}`
  );

  useEffect(() => {
    if (target === null) return;
    if (shouldReduce) {
      setDisplay(value);
      return;
    }
    if (inView) mv.set(target);
  }, [inView, target, value, shouldReduce, mv]);

  useEffect(() => {
    if (target === null) return;
    const unsub = spring.on("change", (v) => {
      setDisplay(`${prefix}${Math.round(v).toLocaleString()}${suffix}`);
    });
    return unsub;
  }, [spring, prefix, suffix, target]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
