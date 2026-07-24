"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Construction, Container, Pickaxe, Route, Truck } from "lucide-react";
import type { ElementType } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  image: string;
  body: string;
  whoItsFor: string;
  icon: ElementType;
}

const SERVICES_LIST: ServiceData[] = [
  {
    id: "opendeck",
    title: "Truckload – Open Deck",
    tagline: "Flatbed and open-deck freight across Canada and US.",
    image: "/s-opendeck.jpeg",
    body: "Our open deck division provides reliable flatbed and stepdeck trucking across Western Canada and throughout North America. We handle everything from construction materials and steel to machinery and oversized freight requiring specialized securement. With experienced drivers and well-maintained equipment, we ensure safe loading, proper tarping, and on-time delivery. Whether it’s a single shipment or ongoing project work, we bring consistency and visibility to every move.",
    whoItsFor:
      "construction companies, steel mills, equipment dealers, lumber yards, sawmills, infrastructure contractors, industrial manufacturers, oilfield service companies",
    icon: Truck,
  },
  {
    id: "oilfield",
    title: "Oil Field",
    tagline: "Specialized transport supporting active drilling, completions, and production.",
    image: "/s-oilfield.jpeg",
    body: "We embrace the pace and pressure of Canada’s energy sector. Our oilfield logistics services support drilling, completions, and production operations. We move pipe, frac sand, rig mats, and heavy equipment with the responsiveness required in active fields. Our team understands site requirements, safety standards, and tight timelines, ensuring your freight arrives when and where it’s needed—without disruption to operations.",
    whoItsFor:
      "oil & gas companies, drilling contractors, fracking companies, well service providers, energy producers, pipeline contractors, field operations teams",
    icon: Pickaxe,
  },
  {
    id: "iceroads",
    title: "Ice Road Transport",
    tagline: "Moving critical freight into isolated northern regions during narrow winter access windows.",
    image: "/s-iceroads.jpeg",
    body: "We specialize in moving critical freight into remote northern regions via ice roads. From equipment and fuel to essential supplies and extra parts, our team plans and executes shipments in some of the harshest conditions in North America. With experienced operators and a strong focus on safety and timing, we ensure your freight reaches isolated job sites during narrow winter access windows.",
    whoItsFor:
      "mining companies, northern construction projects, remote communities, energy exploration companies, government projects, infrastructure developers",
    icon: Route,
  },
  {
    id: "aggregate",
    title: "Aggregate",
    tagline: "High-volume hauling with scale and efficiency.",
    image: "/s-Aggregate.jpeg",
    body: "High-volume hauling with scale and efficiency. Our aggregate division handles sand, gravel, and bulk materials across Western Canada with a large fleet of dump trucks and dependable turnaround times.",
    whoItsFor:
      "construction companies, road builders, concrete suppliers, asphalt plants, infrastructure contractors, excavation companies, municipal projects",
    icon: Construction,
  },
  {
    id: "heavyhaul",
    title: "Heavy-Haul / Over-Dimensional",
    tagline: "Complex multi-axle logistics, permitting, routing, and pilot escorts end-to-end.",
    image: "/s-heavyhaul.jpeg",
    body: "We manage complex heavy haul and over-dimensional freight from start to finish. From multi-axle configurations to specialized trailers, we handle permits, routing, and pilot escorts to ensure compliance and safe delivery. Whether moving large industrial components or oversized equipment, we bring the planning and execution required to move challenging freight without delays.",
    whoItsFor:
      "industrial manufacturers, mining operations, oil & gas companies, power generation projects, equipment dealers, engineering firms, construction contractors",
    icon: Container,
  },
];

const SERVICE_IDS = SERVICES_LIST.map((s) => s.id);

export default function ServicesPage() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const highlightTimer = useRef<number | undefined>(undefined);

  // Scroll a service section into view (respecting the fixed header via
  // each section's `scroll-mt-*`) and flash the highlight effect.
  const focusService = useCallback(
    (id: string, smooth: boolean = true) => {
      const target = document.getElementById(id);
      if (!target) return;

      target.scrollIntoView({
        behavior: smooth && !prefersReducedMotion ? "smooth" : "auto",
        block: "start",
      });

      setHighlightedId(id);
      window.clearTimeout(highlightTimer.current);
      highlightTimer.current = window.setTimeout(() => setHighlightedId(null), 1600);
    },
    [prefersReducedMotion]
  );

  // In-page quick-nav clicks.
  const navigateToService = useCallback(
    (id: string) => {
      window.history.pushState(null, "", `#${id}`);
      focusService(id, true);
    },
    [focusService]
  );

  // Handle landing on the page via a hash URL (e.g. /services#oilfield) and
  // any subsequent same-page hash changes.
  useEffect(() => {
    const readHash = () =>
      typeof window !== "undefined"
        ? decodeURIComponent(window.location.hash.replace(/^#/, ""))
        : "";

    let raf = 0;
    let settleTimer = 0;

    const scrollToHash = (smooth: boolean) => {
      const id = readHash();
      if (!id || !SERVICE_IDS.includes(id)) return;

      // Run after layout so the target has its final position, then again
      // once images/fonts have had a moment to settle so we don't land short.
      raf = window.requestAnimationFrame(() => {
        focusService(id, smooth);
        settleTimer = window.setTimeout(() => {
          const target = document.getElementById(id);
          target?.scrollIntoView({ behavior: "auto", block: "start" });
        }, 320);
      });
    };

    // On mount: jump-to (no smooth) so deep links land reliably.
    scrollToHash(false);

    // Same-page hash clicks: smooth.
    const onHashChange = () => scrollToHash(true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.cancelAnimationFrame(raf);
      window.clearTimeout(settleTimer);
      window.clearTimeout(highlightTimer.current);
    };
  }, [focusService]);

  // Motion helpers, gated on prefers-reduced-motion.
  const reveal = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <div className="flex w-full flex-col bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative flex min-h-[54vh] w-full items-center justify-center overflow-hidden px-5 pb-14 pt-28 lg:min-h-[62vh] lg:px-10">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-[100%] bg-no-repeat"
          style={{ backgroundImage: "url('/services.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#F7F7F3]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] translate-y-16 flex-col items-center gap-5 text-center">
          <motion.span
            {...reveal(0)}
            className="inline-flex items-center gap-2.5 font-display text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/90"
          >
            <span className="h-px w-8 bg-[#CC0000]" />
            The X Group Inc.
            <span className="h-px w-8 bg-[#CC0000]" />
          </motion.span>
          <motion.h1
            {...reveal(0.06)}
            className="font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl"
          >
            Our <span className="text-[#CC0000]">Services</span>
          </motion.h1>
          <motion.p
            {...reveal(0.12)}
            className="max-w-3xl text-base font-normal leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:text-lg lg:text-xl"
          >
            Comprehensive logistics solutions built for Western Canada&apos;s toughest environments and most demanding industries.
          </motion.p>
        </div>
      </section>

      {/* Quick-nav index */}
      <section className="bg-[#F7F7F3] px-5 pb-8 pt-14 lg:px-10 lg:pb-12 lg:pt-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <motion.div {...reveal(0)} className="lg:col-span-4">
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.24em] text-[#CC0000]">
                Our Services
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-[1.05] tracking-tight text-[#111111] sm:text-4xl">
                Specialized solutions.
                <br />
                Delivered with expertise.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#4F4F4F]">
                Explore our core transportation and logistics services. Click any service below to learn more.
              </p>
              <div className="mt-7 h-px w-24 bg-[#111111]/15" />
            </motion.div>

            <div className="lg:col-span-8">
              <ul className="divide-y divide-[#E6E6E6] border-y border-[#E6E6E6]">
                {SERVICES_LIST.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.li key={service.id} {...reveal(index * 0.05)}>
                      <button
                        type="button"
                        onClick={() => navigateToService(service.id)}
                        className="group flex w-full items-center gap-5 py-5 text-left transition-colors duration-300 sm:gap-7 sm:py-6"
                      >
                        <span className="w-9 shrink-0 font-display text-sm font-bold tabular-nums text-[#8A919D] transition-colors duration-300 group-hover:text-[#CC0000]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E6E6E6] bg-white text-[#5F6672] transition-all duration-300 group-hover:border-[#CC0000]/40 group-hover:bg-[#CC0000]/10 group-hover:text-[#CC0000]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col">
                          <span className="font-display text-lg font-extrabold leading-tight text-[#111111] transition-colors duration-300 group-hover:text-[#CC0000] sm:text-xl">
                            {service.title}
                          </span>
                          <span className="mt-1 hidden truncate text-sm text-[#6B6B6B] sm:block">
                            {service.tagline}
                          </span>
                        </span>
                        <ArrowRight className="h-5 w-5 shrink-0 text-[#CC0000] transition-transform duration-300 group-hover:translate-x-1.5" />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <main>
        {SERVICES_LIST.map((service, index) => {
          const isImageLeft = index % 2 === 1;
          const chips = service.whoItsFor.split(",").map((item) => item.trim());
          const isHighlighted = highlightedId === service.id;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`relative scroll-mt-28 px-5 py-20 transition-colors duration-700 sm:py-24 lg:px-10 lg:py-28 ${
                index % 2 === 0 ? "bg-[#F7F7F3]" : "bg-white"
              } ${isHighlighted ? "!bg-[#CC0000]/[0.07]" : ""}`}
            >
              {/* Highlight accent bar */}
              <span
                aria-hidden
                className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-[#CC0000] transition-opacity duration-500 ${
                  isHighlighted ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Text column */}
                <motion.div
                  {...reveal(0)}
                  className={`flex flex-col ${
                    isImageLeft ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-5xl font-black leading-none tracking-tighter text-[#111111]/[0.08] sm:text-6xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[11px] font-extrabold uppercase leading-snug tracking-[0.22em] text-[#CC0000]">
                      {service.tagline}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-4xl font-black leading-[1.03] tracking-tight text-[#111111] sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-[#4F4F4F] sm:text-lg">
                    {service.body}
                  </p>

                  <div className="mt-8 border-t border-[#E6E6E6] pt-7">
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#111111]">
                      Who It&apos;s For
                    </h3>
                    <motion.div
                      className="mt-4 flex flex-wrap gap-2.5"
                      initial={prefersReducedMotion ? undefined : "hidden"}
                      whileInView={prefersReducedMotion ? undefined : "shown"}
                      viewport={{ once: true, margin: "-60px" }}
                      variants={
                        prefersReducedMotion
                          ? undefined
                          : { shown: { transition: { staggerChildren: 0.04 } } }
                      }
                    >
                      {chips.map((chip) => (
                        <motion.span
                          key={chip}
                          variants={
                            prefersReducedMotion
                              ? undefined
                              : {
                                  hidden: { opacity: 0, y: 8 },
                                  shown: { opacity: 1, y: 0 },
                                }
                          }
                          className="rounded-full border border-[#E6E6E6] bg-white px-3.5 py-2 text-xs font-semibold capitalize text-[#4F4F4F] transition-colors duration-200 hover:border-[#CC0000]/30 hover:text-[#111111]"
                        >
                          {chip}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  <Link
                    href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                    className="group mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#CC0000] px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(204,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E60000] hover:shadow-[0_14px_36px_rgba(204,0,0,0.3)]"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Image column */}
                <motion.div
                  {...(prefersReducedMotion
                    ? {}
                    : {
                        initial: { opacity: 0, scale: 0.96 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true, margin: "-80px" },
                        transition: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1] as const,
                        },
                      })}
                  className={`${
                    isImageLeft
                      ? "lg:col-start-1 lg:row-start-1 lg:col-span-6"
                      : "lg:col-start-7 lg:col-span-6"
                  }`}
                >
                  <div className="group relative h-[340px] overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.12)] sm:h-[440px] lg:h-[520px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority={index === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#CC0000] text-white shadow-lg">
                        <service.icon className="h-4 w-4" />
                      </span>
                      <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                        {String(index + 1).padStart(2, "0")} / {String(SERVICES_LIST.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
