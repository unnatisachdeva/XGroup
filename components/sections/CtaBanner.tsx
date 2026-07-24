"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Magnetic } from "@/components/motion/Magnetic";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Optional background photograph (defaults to project photography). */
  backgroundImage?: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function CtaBanner({
  eyebrow = "GET STARTED",
  title = "Ready to Move Your Project?",
  subtitle = "Partner with an asset-based fleet built for Western Canada's toughest freight. Get a fast, accurate quote from our operations team.",
  buttonLabel = "Request a Quote",
  buttonHref = "/get-a-quote",
  backgroundImage = "/mainphoto.jpeg",
}: CtaBannerProps) {
  const shouldReduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: shouldReduce ? {} : { staggerChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#111111]"
    >
      {/* Parallax photographic texture */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] grayscale"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          y: shouldReduce ? 0 : bgY,
          scale: 1.12,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/92 to-[#111111]/60" />
      {/* Fine grid texture for industrial depth */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />
      {/* Accent hairline top — grows on view */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-[#CC0000]"
        initial={shouldReduce ? { width: 96 } : { width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
        >
          <div className="flex flex-col gap-5 lg:col-span-8">
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="h-3.5 w-[3px] bg-[#CC0000]" />
              <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#E60000]">
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.04] tracking-[-0.02em] text-white"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={item}
              className="max-w-xl text-base sm:text-lg leading-relaxed text-[#B7BAC1]"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            variants={item}
            className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end lg:text-right"
          >
            <Magnetic strength={0.4}>
              <a
                href={buttonHref}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#CC0000] px-8 py-4 font-display text-base font-bold text-white shadow-[0_10px_30px_rgba(204,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E60000] hover:shadow-[0_14px_38px_rgba(204,0,0,0.5)]"
              >
                {buttonLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="group flex items-center gap-2.5 text-sm text-[#9AA0AA] transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C] bg-[#1A1A1A] text-[#CC0000] transition-colors group-hover:border-[#CC0000]">
                <Phone className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6B6B6B]">
                  Dispatch 24/7
                </span>
                <strong className="font-display text-[0.95rem] font-bold text-white">
                  {SITE_CONFIG.displayPhone}
                </strong>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
