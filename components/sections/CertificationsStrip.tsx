"use client";

import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/constants";

const CERT_IMAGE_MAP: Record<string, string> = {
  "ACE / ACI Bonded Carrier": "/cert-ace.svg",
  "SmartWay Transport Partner": "/cert-smartway-partner.jpg",
  "US-Canada Bonded": "/cert-us-canada-bonded.png",
  "ACI": "/cert-aci.svg",
};

export function CertificationsStrip() {
  const marqueeItems = [...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section className="py-8 bg-[#F7F7F3] border-y border-[#E6E6E6] relative overflow-hidden">
      <div className="flex flex-col items-center text-center gap-2 mb-6 px-5">
        <span className="eyebrow-label">TRUSTED OPERATIONS</span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
          Certifications & Safety Compliance
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max gap-6 py-2"
          animate={{ x: [0, -1800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 24,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((cert, idx) => {
            const imageSrc = CERT_IMAGE_MAP[cert.name] || CERT_IMAGE_MAP[cert.badge] || "/cert-ace.svg";
            return (
              <motion.div
                key={`${cert.name}-${idx}`}
                whileHover={{ y: -6, scale: 1.03, rotate: -1 }}
                className="w-[220px] h-28 shrink-0 rounded-2xl flex items-center justify-center"
              >
                <img
                  src={imageSrc}
                  alt={cert.name}
                  className="w-full h-full object-contain p-3"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
