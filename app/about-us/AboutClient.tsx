"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Scroll-reveal wrapper — respects prefers-reduced-motion. */
function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* The four company paragraphs — copy preserved verbatim, red highlights intact. */
const STORY = [
  {
    id: "01",
    body: (
      <>
        <strong className="text-[#111111] font-semibold">
          The X Group Inc.
        </strong>{" "}
        was built around a simple, timeless idea: showing up every day to do
        what we say we will do, leads to{" "}
        <span className="text-[#CC0000] font-medium">
          long-term, win-win relationships
        </span>
        . For our clients, drivers, partner carriers and colleagues alike.
      </>
    ),
  },
  {
    id: "02",
    body: (
      <>
        Combining our Western-Canada fleet footprint with the versatility of our
        carrier partner network, we offer shippers an{" "}
        <span className="text-[#CC0000] font-medium">agile, responsive</span>{" "}
        logistics solution whenever and however their supply chain requires.
      </>
    ),
  },
  {
    id: "03",
    body: (
      <>
        From oilfield, aggregate, and heavy-haul to long-haul dry van &amp;
        reefer shipping, each of our business units brings a{" "}
        <span className="text-[#CC0000] font-medium">specialized skillset</span>{" "}
        to the table.
      </>
    ),
  },
  {
    id: "04",
    body: (
      <>
        Our clients rely on us because we keep things simple: answer the phone,
        communicate clearly, and get freight where it needs to go. No
        over-complication. No excuses. Just{" "}
        <span className="text-[#CC0000] font-medium">consistent execution</span>.
      </>
    ),
  },
];

export default function AboutClient() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Timeline rail draw — tied to the story stream's scroll progress.
  const streamRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: streamRef,
    offset: ["start 65%", "end 75%"],
  });
  const railHeight = useTransform(storyProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col w-full bg-[var(--color-bg-primary)]">
      {/* ------------------------------------------------------------- HERO */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[92vh] flex items-end overflow-hidden"
      >
        {/* Parallax photography */}
        <motion.div
          className="absolute inset-0 z-0 will-change-transform"
          style={reduce ? undefined : { y: imageY, scale: 1.12 }}
        >
          <Image
            src="/mainphoto.jpeg"
            alt="An X Group oversize heavy-haul load staged beneath a prairie storm"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Legibility scrims — bottom-weighted, not a flat wash */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/55 to-transparent" />

        <motion.div
          style={reduce ? undefined : { y: contentY }}
          className="relative z-10 w-full max-w-[1280px] mx-auto px-5 lg:px-10 pb-16 lg:pb-24 pt-40"
        >
          <div className="max-w-3xl">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-3 font-display font-bold text-xs sm:text-sm uppercase tracking-[0.24em] text-[#CC0000]"
            >
              <span className="h-px w-8 bg-[#CC0000]" />
              Who We Are
            </motion.span>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
              className="mt-5 font-display font-black text-white text-6xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight"
            >
              About <span className="text-[#CC0000]">Us</span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
              className="mt-8 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed"
            >
              A Western-Canada carrier built on relationships — and on doing what
              we say we will do.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* -------------------------------------------------- STATEMENT / LEAD */}
      <section className="relative w-full px-5 lg:px-10 py-24 lg:py-36">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
          <Reveal className="lg:col-span-3">
            <span className="eyebrow-label">Our Philosophy</span>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-9">
            <div className="border-l-2 border-[#CC0000] pl-6 sm:pl-10">
              <p className="font-display font-bold text-[#111111] text-2xl sm:text-4xl lg:text-[2.85rem] leading-[1.15] tracking-tight">
                Behind every successful logistics partnership is a relationship.
                A relationship built on{" "}
                <span className="text-[#CC0000]">trust, consistency</span> and
                reliable execution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- OUR STORY */}
      <section className="relative w-full px-5 lg:px-10 pb-24 lg:pb-36">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14">
          {/* Sticky editorial column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 flex flex-col gap-8">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <span className="eyebrow-label">Our Story</span>
                  <h2 className="font-display font-extrabold text-[#111111] text-3xl sm:text-4xl leading-tight tracking-tight">
                    How we
                    <br />
                    show up.
                  </h2>
                  <div className="w-12 h-1.5 bg-[#CC0000] rounded-full" />
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white">
                  <Image
                    src="/portrait.jpeg"
                    alt="An X Group tractor hauling oversize agricultural equipment on a step-deck trailer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Paragraph stream — timeline */}
          <div className="lg:col-span-8 lg:pt-2">
            <div ref={streamRef} className="relative flex flex-col">
              {/* Timeline rail */}
              <div className="pointer-events-none absolute bottom-6 left-[13px] top-6 w-px bg-[#E6E6E6]">
                <motion.div
                  className="absolute left-0 top-0 w-px origin-top bg-[#CC0000]"
                  style={reduce ? { height: "100%" } : { height: railHeight }}
                />
              </div>

              {STORY.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.06}>
                  <article className="grid grid-cols-[auto_1fr] gap-6 py-8 sm:gap-8 lg:py-9">
                    {/* Timeline node */}
                    <div className="relative flex justify-center pt-1.5">
                      <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#E6E6E6] bg-white font-display text-[0.7rem] font-bold tabular-nums text-[#8A919D] shadow-[0_2px_8px_rgba(15,23,42,0.06)] transition-colors duration-300 group-hover:border-[#CC0000]">
                        {item.id}
                      </span>
                    </div>
                    <p className="max-w-2xl pt-1 text-base leading-relaxed text-[#4F4F4F] sm:text-lg lg:text-xl">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- LEAD-IN TO CERTS STRIP */}
      <section className="w-full px-5 lg:px-10 pb-16 lg:pb-20">
        <Reveal className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-start gap-3 border-t border-[#E6E6E6] pt-14">
            <span className="eyebrow-label">Built On Standards</span>
            <p className="font-display font-semibold text-[#111111] text-xl sm:text-2xl tracking-tight max-w-2xl leading-snug">
              The credentials and compliance programs that keep our freight
              moving across the border.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
