"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, ArrowRight, ShieldCheck, Truck, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const HOME_SERVICES: HomeServiceItem[] = [
  {
    id: "heavyhaul",
    title: "Heavy-Haul & Over-Dimensional",
    description: "Complex multi-axle moves, permit acquisition & pilot car coordination.",
    image: "/s-heavyhaul.jpeg",
    href: "/services#heavyhaul",
  },
  {
    id: "opendeck",
    title: "Truckload – Open Deck",
    description: "Flatbed and step-deck trucking across Canada and North America.",
    image: "/s-opendeck.jpeg",
    href: "/services#opendeck",
  },
  {
    id: "oilfield",
    title: "Oil Field",
    description: "Supporting drilling, completions, frac sand & rig relocations.",
    image: "/s-oilfield.jpeg",
    href: "/services#oilfield",
  },
  {
    id: "iceroads",
    title: "Ice Road Transport",
    description: "Critical winter freight to remote northern exploration sites.",
    image: "/s-iceroads.jpeg",
    href: "/services#iceroads",
  },
  {
    id: "aggregate",
    title: "Aggregate",
    description: "High-volume bulk hauling for infrastructure & civil projects.",
    image: "/s-Aggregate.jpeg",
    href: "/services#aggregate",
  },
];

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
  const servicesCarouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const metrics = (() => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return { cardWidth: 0, gap: 24 };
    const cardWidth = carousel.querySelector("a")?.clientWidth ?? carousel.clientWidth;
    return { cardWidth, gap: 24 };
  });

  const scrollToService = (index: number) => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return;
    const { cardWidth, gap } = metrics();
    carousel.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" });
  };

  const handleScroll = () => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return;
    const { cardWidth, gap } = metrics();
    if (!cardWidth) return;
    const index = Math.round(carousel.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), HOME_SERVICES.length - 1));
  };

  const handleDragStart = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return;
    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = carousel.scrollLeft;
    carousel.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = servicesCarouselRef.current;
    if (!carousel || !isDraggingRef.current) return;
    carousel.scrollLeft = dragStartScrollRef.current - (event.clientX - dragStartXRef.current);
  };

  const handleDragEnd = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = servicesCarouselRef.current;
    isDraggingRef.current = false;
    carousel?.releasePointerCapture(event.pointerId);
  };

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
        // height="full"
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

            <motion.h2
              variants={reveal}
              className="font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-[3.15rem]"
            >
              An asset-based carrier built for the sectors that don&apos;t stop.
            </motion.h2>

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
              <Image
                src="/driver.jpg"
                alt="An X Group driver on site in Western Canada"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
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

      {/* Capabilities / Services carousel */}
      <section className="relative border-b border-[#E6E6E6] bg-[#FFFFFF] py-20 lg:py-28">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 lg:px-10">
          {/* Section header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 border-b border-[#E6E6E6] pb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="flex max-w-2xl flex-col gap-4">
              <motion.div variants={reveal} className="flex items-center gap-3">
                <span className="font-display text-sm font-bold tracking-[-0.02em] text-[#CC0000]">
                  02
                </span>
                <span className="h-px w-8 bg-[#CC0000]" />
                <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#6B6B6B]">
                  Our Capabilities
                </span>
              </motion.div>
              <motion.h2
                variants={reveal}
                className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-5xl"
              >
                Built for the toughest freight
              </motion.h2>
              <motion.p
                variants={reveal}
                className="text-base text-[#4F4F4F] sm:text-lg"
              >
                Specialized capabilities across every major industrial sector in Western Canada.
              </motion.p>
            </div>

            <motion.div variants={reveal}>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.08em] text-[#111111] transition-colors hover:text-[#CC0000]"
              >
                All Services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={servicesCarouselRef}
              onScroll={handleScroll}
              onPointerDown={handleDragStart}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing"
              aria-label="Services carousel"
            >
              {HOME_SERVICES.map((service, index) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative flex h-[500px] shrink-0 basis-full snap-start flex-col overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:basis-[calc((100%_-_1.5rem)/2)] lg:h-[540px] lg:basis-[calc((100%_-_3rem)/3)]"
                >
                  <div className="relative h-[54%] w-full overflow-hidden bg-[#EDEDE7]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 font-display text-sm font-extrabold text-[#111111] backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-[#111111] sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-7 text-[#4F4F4F]">
                        {service.description}
                      </p>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-[#CC0000]">
                      Read More
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CC0000] text-white transition-all duration-200 group-hover:bg-[#E60000] group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Dot navigation */}
            <div
              className="mt-8 flex justify-center gap-2.5"
              aria-label="Service carousel navigation"
            >
              {HOME_SERVICES.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToService(index)}
                    aria-label={`Go to ${service.title}`}
                    aria-current={isActive}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-[#CC0000]"
                        : "w-2.5 bg-[#CFCFC8] hover:bg-[#A9A9A0]"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsStrip />

      {/* Conversion banner */}
      <CtaBanner />
    </div>
  );
}
