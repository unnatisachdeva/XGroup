"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  height?: "full" | "compact";
  align?: "start" | "center";
  /** Optional editorial stat strip rendered beneath the CTAs (home page). */
  stats?: HeroStat[];
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero({
  eyebrow,
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
  ctaPrimary,
  ctaSecondary,
  height = "compact",
  align = "start",
  stats,
}: HeroProps) {
  const isFull = height === "full";
  const isCenter = align === "center";
  const shouldReduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduce
        ? {}
        : { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden flex items-end ${
        isCenter ? "justify-center" : "justify-start"
      } bg-[#EDEDE7] ${
        isFull
          ? "min-h-[92vh] pt-32 pb-16"
          : "min-h-[52vh] lg:min-h-[60vh] pt-32 pb-16"
      }`}
    >
      {/* Parallax background image */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y: shouldReduce ? 0 : parallaxY,
          scale: shouldReduce ? 1.05 : parallaxScale,
        }}
      />

      {/* Editorial light wash — heavier where the type sits, photo stays legible elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F3] via-[#F7F7F3]/82 to-[#F7F7F3]/25 pointer-events-none" />
      {!isCenter && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F7F3] via-[#F7F7F3]/55 to-transparent pointer-events-none" />
      )}
      {isCenter && (
        <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_50%_60%,transparent_10%,rgba(247,247,243,0.75)_75%)] pointer-events-none" />
      )}

      {/* Fine dot texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#B7B7AE_1px,transparent_1px)] [background-size:26px_26px] opacity-[0.14] pointer-events-none" />

      {/* Top hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E6E6E6] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 lg:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`flex flex-col gap-5 ${
            isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start max-w-3xl"
          }`}
        >
          {/* Eyebrow */}
          {title ? (
            <>
              <motion.div
                variants={item}
                className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
              >
                <span className="h-3.5 w-[3px] bg-[#CC0000]" />
                <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#CC0000]">
                  {eyebrow}
                </span>
              </motion.div>
              <motion.h1
                variants={item}
                className="font-display font-extrabold text-[#111111] text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] leading-[1.02] tracking-[-0.02em]"
              >
                {title}
              </motion.h1>
            </>
          ) : (
            <motion.h1
              variants={item}
              className="font-display font-extrabold text-[#111111] text-4xl sm:text-5xl lg:text-5xl leading-[1.04] tracking-[-0.02em] whitespace-nowrap"
            >
              {eyebrow}
            </motion.h1>
          )}

          <motion.p
            variants={item}
            className={`text-[#4F4F4F] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </motion.p>

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              variants={item}
              className={`flex flex-wrap items-center gap-4 mt-2 ${
                isCenter ? "justify-center" : ""
              }`}
            >
              {ctaPrimary && (
                <Button
                  href={ctaPrimary.href}
                  variant="primary"
                  showArrow
                  className="!text-base !py-3.5 !px-8"
                >
                  {ctaPrimary.label}
                </Button>
              )}
              {ctaSecondary && (
                <Button
                  href={ctaSecondary.href}
                  variant="secondary"
                  className="!text-base !py-3.5 !px-8"
                >
                  {ctaSecondary.label}
                </Button>
              )}
            </motion.div>
          )}

          {/* Optional editorial stat strip */}
          {stats && stats.length > 0 && (
            <motion.dl
              variants={item}
              className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#E6E6E6] bg-[#E6E6E6] sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 bg-[#FFFFFF]/80 px-4 py-4 backdrop-blur-sm"
                >
                  <dt className="font-display text-xl font-extrabold tracking-tight text-[#111111] sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>
      </div>

      {/* Scroll cue (full hero only) */}
      {isFull && !shouldReduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#6B6B6B]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-[#CC0000] to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
