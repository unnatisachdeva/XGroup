"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { PointerEvent } from "react";
import { Hero } from "@/components/sections/Hero";
import { CertificationsStrip } from "@/components/sections/CertificationsStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

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

export default function Home() {
  const servicesCarouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  const scrollToService = (index: number) => {
    const carousel = servicesCarouselRef.current;
    if (!carousel) return;

    const cardWidth = carousel.querySelector("a")?.clientWidth ?? carousel.clientWidth;
    const gap = 24;
    carousel.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
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

  return (
    <div className="flex flex-col w-full bg-[#08090C]">
      {/* Hero Banner */}
      <Hero
        height="full"
        eyebrow="ASSET-BASED FLEET — OILFIELD · MINING · ENERGY"
        title="Owned Trucks. Proven Ground."
        subtitle="Western Canada based trucking, serving Canada and the USA, from Laredo to Prudhoe Bay! Safely and reliably keeping your supply chain moving."
        ctaPrimary={{ label: "Request Service", href: "/get-a-quote" }}
        ctaSecondary={{ label: "Join Our Fleet", href: "/careers" }}
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

          <div className="relative">
            <div
              ref={servicesCarouselRef}
              onPointerDown={handleDragStart}
              onPointerMove={handleDragMove}
              onPointerUp={handleDragEnd}
              onPointerCancel={handleDragEnd}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing"
              aria-label="Services carousel"
            >
              {HOME_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group flex h-[520px] shrink-0 basis-full snap-start flex-col overflow-hidden bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.14)] sm:basis-[calc((100%_-_1.5rem)/2)] lg:h-[560px] lg:basis-[calc((100%_-_3rem)/3)]"
                >
                  <div className="relative h-[52%] w-full overflow-hidden bg-[#F7F7F3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-[#111111]">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-7 text-[#4F4F4F]">
                        {service.description}
                      </p>
                    </div>

                    <span className="mt-6 inline-flex w-fit items-center justify-center rounded-md bg-[#CC0000] px-7 py-3 font-display text-sm font-bold text-white transition-colors duration-200 group-hover:bg-[#E60000]">
                      Read More
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2.5" aria-label="Service carousel navigation">
              {HOME_SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollToService(index)}
                  className="h-3 w-3 rounded-full bg-[#A1A5B0] transition-all duration-200 hover:scale-110 hover:bg-[#CC0000]"
                  aria-label={`Go to ${service.title}`}
                />
              ))}
            </div>
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
