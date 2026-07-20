"use client";

import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ShieldCheck, Truck, Phone, ArrowRight, Fuel, Layers, Compass, Maximize2 } from "lucide-react";

interface HomeServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  colSpan: string; // Tailwind grid span
}

const HOME_SERVICES: HomeServiceItem[] = [
  {
    id: "heavyhaul",
    title: "Heavy-Haul & Over-Dimensional",
    subtitle: "Complex multi-axle moves, permit acquisition & pilot car coordination.",
    image: "/s-heavyhaul.jpeg",
    href: "/services#heavyhaul",
    colSpan: "lg:col-span-7 h-[380px] sm:h-[440px]",
  },
  {
    id: "opendeck",
    title: "Truckload – Open Deck",
    subtitle: "Flatbed and step-deck trucking across Canada and North America.",
    image: "/s-opendeck.jpeg",
    href: "/services#opendeck",
    colSpan: "lg:col-span-5 h-[380px] sm:h-[440px]",
  },
  {
    id: "oilfield",
    title: "Oil Field",
    subtitle: "Supporting drilling, completions, frac sand & rig relocations.",
    image: "/s-oilfield.jpeg",
    href: "/services#oilfield",
    colSpan: "lg:col-span-4 h-[320px] sm:h-[360px]",
  },
  {
    id: "iceroads",
    title: "Ice Road Transport",
    subtitle: "Critical winter freight to remote northern exploration sites.",
    image: "/s-iceroads.jpeg",
    href: "/services#iceroads",
    colSpan: "lg:col-span-4 h-[320px] sm:h-[360px]",
  },
  {
    id: "aggregate",
    title: "Aggregate",
    subtitle: "High-volume bulk hauling for infrastructure & civil projects.",
    image: "/s-Aggregate.jpeg",
    href: "/services#aggregate",
    colSpan: "lg:col-span-4 h-[320px] sm:h-[360px]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#08090C]">
      {/* Hero Banner */}
      <Hero
        height="full"
        eyebrow="ASSET-BASED FLEET — OILFIELD · MINING · ENERGY"
        title="Owned Trucks. Proven Ground."
        subtitle="Western Canada based trucking, serving Canada and the USA, from Laredo to Prudhoe Bay! Safely and reliably keeping your supply chain moving."
        ctaPrimary={{ label: "Request Service", href: "/get-a-quote" }}
        ctaSecondary={{ label: "Join Our Fleet", href: "/join-our-fleet" }}
        backgroundImage="/mainphoto.jpeg"
      />

      {/* Services Showcase Section (Directly Below Hero Banner) */}
      <section className="py-24 bg-[#08090C] relative border-b border-[#242830]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 flex flex-col gap-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
            <span className="text-[#CC0000] font-display font-extrabold text-xs uppercase tracking-[0.2em]">
              OUR CAPABILITIES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight">
              Built for the <span className="text-[#CC0000]">Toughest Freight</span>
            </h2>
            <p className="text-[#A1A5B0] text-base sm:text-lg mt-1 font-normal">
              Specialized capabilities across every major industrial sector in Western Canada.
            </p>
          </div>

          {/* Premium Asymmetrical Bento Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {HOME_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative rounded-3xl overflow-hidden border border-[#242830] hover:border-[#CC0000] transition-all duration-500 shadow-2xl flex flex-col justify-end p-8 sm:p-10 ${service.colSpan}`}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={service.id === "heavyhaul" || service.id === "opendeck"}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-transparent group-hover:via-[#08090C]/75 transition-all duration-500" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FFFFFF] group-hover:text-[#CC0000] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#16191E]/80 border border-[#242830] group-hover:border-[#CC0000] group-hover:bg-[#CC0000] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 shrink-0">
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A1A5B0] max-w-xl leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <CertificationsStrip />

      {/* Bottom Conversion Banner */}
      <CtaBanner />
    </div>
  );
}
