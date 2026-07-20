"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CtaBanner({
  eyebrow = "GET STARTED",
  title = "Ready to Move Your Project?",
  subtitle = "Partner with an asset-based fleet built for Western Canada's toughest freight. Get a fast, accurate quote from our operations team.",
  buttonLabel = "Request a Quote",
  buttonHref = "/get-a-quote",
}: CtaBannerProps) {
  return (
    <section className="relative w-full py-20 bg-[#F7F7F3] overflow-hidden border-y border-[#E6E6E6]">
      {/* Background photography overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/90 to-white/95" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-5"
        >
          <span className="eyebrow-label">{eyebrow}</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] tracking-tight">
            {title}
          </h2>
          <p className="text-[#4F4F4F] text-base sm:text-lg leading-relaxed max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Button href={buttonHref} variant="primary" showArrow className="!py-4 !px-9 !text-base">
              {buttonLabel}
            </Button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-sm font-display font-semibold text-[#4F4F4F] hover:text-[#CC0000] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#CC0000]" />
              <span>or call dispatch 24/7 <strong className="text-[#111111]">{SITE_CONFIG.displayPhone}</strong></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
