"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

export function CertificationsStrip() {
  return (
    <section className="py-16 bg-[#12151B] border-y border-[#262B34] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
          <div>
            <span className="eyebrow-label mb-2">TRUSTED OPERATIONS</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F6F7] tracking-tight">
              Certifications & Safety Compliance
            </h2>
          </div>
          <p className="text-sm text-[#A9AFB9] max-w-xl">
            Operating under the safety and compliance framework of the X Freight Group family,
            with active progress toward independent COR and ISNetworld verification.
          </p>
        </div>

        {/* Certifications Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="group p-5 rounded-xl bg-[#191D25] border border-[#262B34] hover:border-[#CC0000]/50 transition-all duration-300 flex flex-col items-center text-center justify-center gap-3 cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-[#0A0C10] border border-[#262B34] flex items-center justify-center text-[#6E7580] group-hover:text-[#CC0000] group-hover:border-[#CC0000]/40 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display font-extrabold text-xs text-[#F5F6F7] group-hover:text-[#CC0000] transition-colors">
                  {cert.badge}
                </span>
                <span className="text-[11px] text-[#A9AFB9] font-medium leading-tight mt-1">
                  {cert.name}
                </span>
                <span className="text-[10px] text-[#CC0000] font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
