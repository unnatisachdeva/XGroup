"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { HomeServices } from "@/components/sections/HomeServices";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { TextReveal } from "@/components/motion/TextReveal";
import { Parallax } from "@/components/motion/Parallax";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HERO_STATS = [
  { value: "100%", label: "Asset-Based" },
  { value: "24/7", label: "Direct Dispatch" },
  { value: "5", label: "Specialized Divisions" },
  { value: "CA · US", label: "Cross-Border" },
];

// const CAPABILITY_POINTS = [
//   {
//     icon: Truck,
//     title: "Owned equipment, not brokered",
//     body: "Winch tractors, tri-drives, lowboys, and end-dumps — dispatched directly, maintained in-house.",
//   },
//   {
//     icon: MapPin,
//     title: "Laredo to Prudhoe Bay",
//     body: "Cross-border lanes through Western Canada and across North America, on-highway and off.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Compliance-first operations",
//     body: "Bonded, permit-ready, and working toward ISN and COR certification on every move.",
//   },
// ];

export default function Home() {
  const shouldReduce = useReducedMotion();

  const reveal: Variants = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };
  const stagger: Variants = {
    hidden: {},
    show: { transition: shouldReduce ? {} : { staggerChildren: 0.1 } },
  };

  return (
    <div className="flex w-full flex-col bg-[#F7F7F3]">
      {/* Hero */}
      <Hero
        height="full"
        eyebrow="Asset-Based Fleet & 24/7 Dispatch"
        title="Owned Trucks. Proven Ground."
        subtitle="Western Canada based trucking, serving Canada and the USA, from Laredo to Prudhoe Bay — safely and reliably keeping your supply chain moving."
        ctaPrimary={{ label: "Request Service", href: "/get-a-quote" }}
        ctaSecondary={{ label: "Join Our Fleet", href: "/careers" }}
        backgroundImage="/home-banner.jpeg"
        stats={HERO_STATS}
      />

      {/* Positioning — editorial split */}
      <section className="border-b border-[#E6E6E6] bg-[#F7F7F3] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8 lg:col-span-6"
          >
            <motion.div variants={reveal} className="flex items-center gap-3">
              <span className="font-display text-sm font-bold tracking-[-0.02em] text-[#CC0000]">
                01
              </span>
              <span className="h-px w-8 bg-[#CC0000]" />
              <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#6B6B6B]">
                Who We Are
              </span>
            </motion.div>

            <TextReveal
              as="h2"
              text="An asset-based carrier built for the sectors that don't stop."
              className="font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-[3.15rem]"
            />

            <motion.p
              variants={reveal}
              className="max-w-xl text-base leading-relaxed text-[#4F4F4F] sm:text-lg"
            >
              We run our own trucks and a growing owner-operator fleet, providing dedicated
              capacity for rig moves, equipment transport, and bulk hauling across the oilfield,
              mining, and energy sectors — while working toward ISN and COR certification to meet
              the highest safety and compliance standards.
            </motion.p>

            <motion.div variants={reveal}>
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-[#CC0000] transition-colors hover:text-[#E60000]"
              >
                About The X Group
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Feature image + capability list */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#E6E6E6] shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
            >
              <Parallax className="absolute inset-0" amount={0.12}>
                <Image
                  src="/driver.jpg"
                  alt="An X Group driver on site in Western Canada"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              {/* <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#111111] backdrop-blur-sm">
                Edmonton, AB — Head Office
              </span> */}
            </motion.div>

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col divide-y divide-[#E6E6E6] rounded-2xl border border-[#E6E6E6] bg-white"
            >
              {/* {CAPABILITY_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <motion.li
                    key={point.title}
                    variants={reveal}
                    className="flex items-start gap-4 p-5 sm:p-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#CC0000]/8 text-[#CC0000]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-base font-bold tracking-tight text-[#111111]">
                        {point.title}
                      </span>
                      <span className="text-sm leading-relaxed text-[#6B6B6B]">
                        {point.body}
                      </span>
                    </div>
                  </motion.li>
                ); */}
              {/* })} */}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Capabilities / Services — pinned stacking showcase */}
      <HomeServices />

      {/* Certifications */}
      <CertificationsStrip />

      {/* Conversion banner */}
      <CtaBanner />
    </div>
  );
}
