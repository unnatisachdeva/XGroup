"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Construction, Container, Pickaxe, Route, Truck } from "lucide-react";
import type { ElementType } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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

export default function ServicesPage() {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const navigateToService = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setHighlightedId(id);
    window.setTimeout(() => setHighlightedId(null), 1500);
  };

  return (
    <div className="flex flex-col w-full bg-[#F7F7F3]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[54vh] lg:min-h-[62vh] flex items-center justify-center pt-28 pb-14 px-5 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[100%] bg-no-repeat"
          style={{
            backgroundImage: "url('/services.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-[#F7F7F3]/95" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto text-center flex flex-col items-center gap-4 translate-y-25">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            Our <span className="text-[#CC0000]">Services</span>
          </h1>
          <p className="text-black text-base sm:text-lg lg:text-xl max-w-3xl font-normal leading-relaxed">
            Comprehensive logistics solutions built for Western Canada&apos;s toughest environments and most demanding industries.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F7F3] px-5 pb-8 pt-10 lg:px-10 lg:pb-12">
        <div className="mx-auto max-w-[1280px] rounded-xl border border-[#E6E6E6] bg-white px-6 py-10 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:px-9 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <span className="font-display text-xs font-extrabold uppercase tracking-[0.24em] text-[#CC0000]">
                Our Services
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-4xl">
                Specialized solutions. Delivered with expertise.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#4F4F4F]">
                Explore our core transportation and logistics services. Click any service below to learn more.
              </p>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-6 lg:grid-rows-3">
              {SERVICES_LIST.map((service, index) => {
                const Icon = service.icon;
                const placement = [
                  "lg:col-start-2 lg:col-span-2 lg:row-start-1",
                  "lg:col-start-1 lg:col-span-2 lg:row-start-2",
                  "lg:col-start-4 lg:col-span-2 lg:row-start-2",
                  "lg:col-start-2 lg:col-span-2 lg:row-start-3",
                  "lg:col-start-5 lg:col-span-2 lg:row-start-3",
                ][index];

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => navigateToService(service.id)}
                    className={`group flex min-h-28 items-center justify-between gap-5 border border-[#E6E6E6] bg-white px-7 py-5 text-left shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CC0000]/50 hover:shadow-[0_18px_45px_rgba(15,23,42,0.13)] ${placement}`}
                    style={{
                      clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)",
                      borderRadius: 12,
                    }}
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#CC0000]/20 bg-[#CC0000]/10 text-[#CC0000] transition-transform duration-300 group-hover:-translate-y-1">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-lg font-extrabold leading-tight text-[#111111]">
                        {service.title}
                      </span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#CC0000] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <main>
        {SERVICES_LIST.map((service, index) => {
          const isImageLeft = index % 2 === 1;
          const isProminentImage = index === 1 || index === 3;
          const chips = service.whoItsFor.split(",").map((item) => item.trim());

          return (
            <section
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 px-5 py-20 transition-colors duration-700 sm:py-24 lg:px-10 lg:py-28 ${
                index % 2 === 0 ? "bg-[#F7F7F3]" : "bg-white"
              } ${highlightedId === service.id ? "!bg-[#CC0000]/10" : ""}`}
            >
              <motion.article
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`flex flex-col ${
                    isImageLeft ? "lg:col-start-8 lg:col-span-5" : "lg:col-span-5"
                  }`}
                >
                  <span className="font-display text-xs font-extrabold uppercase tracking-[0.24em] text-[#CC0000]">
                    {service.tagline}
                  </span>
                  <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-[#111111] sm:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-base leading-8 text-[#4F4F4F] sm:text-lg">
                    {service.body}
                  </p>

                  <div className="mt-8 border-t border-[#E6E6E6] pt-7">
                    <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#111111]">
                      Who It&apos;s For
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-[#CC0000]/20 bg-[#CC0000]/10 px-3.5 py-2 text-xs font-semibold capitalize text-[#4F4F4F]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                    className="group mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#CC0000] px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(204,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E60000] hover:shadow-[0_14px_36px_rgba(204,0,0,0.3)]"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div
                  className={`${
                    isImageLeft
                      ? "lg:col-start-1 lg:row-start-1 lg:col-span-6"
                      : "lg:col-start-7 lg:col-span-6"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_22px_70px_rgba(15,23,42,0.12)] ${
                      isProminentImage
                        ? "h-[380px] sm:h-[500px] lg:h-[570px]"
                        : "h-[340px] sm:h-[440px] lg:h-[500px]"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </motion.article>
            </section>
          );
        })}
      </main>
    </div>
  );
}
