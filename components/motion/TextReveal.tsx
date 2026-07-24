"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface TextRevealProps {
  text: string;
  className?: string;
  as?: ElementType;
  /** Per-word delay. */
  stagger?: number;
  delay?: number;
}

/**
 * Word-by-word mask reveal for editorial headings. Words rise out of an
 * overflow-clipped line. Screen readers get the full string via aria-label,
 * and reduced-motion users get a plain fade.
 */
export function TextReveal({
  text,
  className,
  as = "h2",
  stagger = 0.055,
  delay = 0,
}: TextRevealProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduce) {
    const FadeTag = as as ElementType;
    return <FadeTag className={className}>{text}</FadeTag>;
  }

  const Tag = (motion[as as keyof typeof motion] ?? motion.h2) as typeof motion.h2;

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ clipPath: "inset(-20% -10% -20% -10%)" }}
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%" },
              show: { y: "0%", transition: { duration: 0.72, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
