"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  height?: "full" | "compact";
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80",
  ctaPrimary,
  ctaSecondary,
  height = "compact",
}: HeroProps) {
  const isFull = height === "full";

  return (
    <section
      className={`relative w-full overflow-hidden flex items-center justify-center bg-[#0A0C10] ${
        isFull ? "min-h-[88vh] lg:min-h-[92vh] pt-28 pb-20" : "min-h-[50vh] lg:min-h-[58vh] pt-32 pb-16"
      }`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark Industrial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/80 via-[#0A0C10]/75 to-[#0A0C10]" />
      
      {/* Subtle Grid Accent Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#262B34_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-start gap-4"
        >
          {/* Eyebrow */}
          <span className="eyebrow-label px-3 py-1 rounded-md bg-[#CC0000]/10 border border-[#CC0000]/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" />
            {eyebrow}
          </span>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-[#F5F6F7] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-[#A9AFB9] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mt-1 font-normal">
            {subtitle}
          </p>

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              {ctaPrimary && (
                <Button href={ctaPrimary.href} variant="primary" showArrow className="!text-base !py-3.5 !px-8">
                  {ctaPrimary.label}
                </Button>
              )}
              {ctaSecondary && (
                <Button href={ctaSecondary.href} variant="secondary" className="!text-base !py-3.5 !px-8">
                  {ctaSecondary.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

    </section>
  );
}
