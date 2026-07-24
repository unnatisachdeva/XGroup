"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";
import { TextReveal } from "@/components/motion/TextReveal";

const CERT_IMAGE_MAP: Record<string, string> = {
  "ACE / ACI Bonded Carrier": "/cert-ace.svg",
  "SmartWay Transport Partner": "/cert-smartway-partner.jpg",
  "US-Canada Bonded": "/cert-us-canada-bonded.png",
  ACI: "/cert-aci.svg",
};

function resolveImage(cert: { name: string; badge: string }) {
  return CERT_IMAGE_MAP[cert.name] || CERT_IMAGE_MAP[cert.badge] || "/cert-ace.svg";
}

export function CertificationsStrip() {
  const shouldReduce = useReducedMotion();
  // Two identical copies let us loop x from 0% to -50% seamlessly.
  const track = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="relative overflow-hidden border-y border-[#E6E6E6] bg-[#F7F7F3] py-12">
      <div className="mx-auto mb-9 flex max-w-[1280px] flex-col gap-3 px-5 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-3.5 w-[3px] bg-[#CC0000]" />
          <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#CC0000]">
            Trusted Operations
          </span>
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <TextReveal
            as="h2"
            text="Certified, bonded, and cleared for cross-border freight"
            className="max-w-xl font-display text-2xl font-extrabold tracking-[-0.01em] text-[#111111] sm:text-3xl"
          />
          <p className="text-sm text-[#6B6B6B] sm:text-right">
            Compliance credentials that keep your loads moving.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F7F3] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F7F3] to-transparent sm:w-28" />

        {shouldReduce ? (
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-4 px-5">
            {CERTIFICATIONS.map((cert) => (
              <CertCard key={cert.name} src={resolveImage(cert)} name={cert.name} />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max gap-4 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          >
            {track.map((cert, idx) => (
              <CertCard
                key={`${cert.name}-${idx}`}
                src={resolveImage(cert)}
                name={cert.name}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function CertCard({ src, name }: { src: string; name: string }) {
  return (
    <div className="group flex h-28 w-[210px] shrink-0 items-center justify-center rounded-xl border border-[#E6E6E6] bg-white px-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6D6D0] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-16 w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}
