"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  image: string;
  body: string;
  whoItsFor: string;
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
  },
  {
    id: "oilfield",
    title: "Oil Field",
    tagline: "Specialized transport supporting active drilling, completions, and production.",
    image: "/s-oilfield.jpeg",
    body: "We embrace the pace and pressure of Canada’s energy sector. Our oilfield logistics services support drilling, completions, and production operations. We move pipe, frac sand, rig mats, and heavy equipment with the responsiveness required in active fields. Our team understands site requirements, safety standards, and tight timelines, ensuring your freight arrives when and where it’s needed—without disruption to operations.",
    whoItsFor:
      "oil & gas companies, drilling contractors, fracking companies, well service providers, energy producers, pipeline contractors, field operations teams",
  },
  {
    id: "iceroads",
    title: "Ice Road Transport",
    tagline: "Moving critical freight into isolated northern regions during narrow winter access windows.",
    image: "/s-iceroads.jpeg",
    body: "We specialize in moving critical freight into remote northern regions via ice roads. From equipment and fuel to essential supplies and extra parts, our team plans and executes shipments in some of the harshest conditions in North America. With experienced operators and a strong focus on safety and timing, we ensure your freight reaches isolated job sites during narrow winter access windows.",
    whoItsFor:
      "mining companies, northern construction projects, remote communities, energy exploration companies, government projects, infrastructure developers",
  },
  {
    id: "aggregate",
    title: "Aggregate",
    tagline: "High-volume hauling with scale and efficiency.",
    image: "/s-Aggregate.jpeg",
    body: "High-volume hauling with scale and efficiency. Our aggregate division handles sand, gravel, and bulk materials across Western Canada with a large fleet of dump trucks and dependable turnaround times.",
    whoItsFor:
      "construction companies, road builders, concrete suppliers, asphalt plants, infrastructure contractors, excavation companies, municipal projects",
  },
  {
    id: "heavyhaul",
    title: "Heavy-Haul / Over-Dimensional",
    tagline: "Complex multi-axle logistics, permitting, routing, and pilot escorts end-to-end.",
    image: "/s-heavyhaul.jpeg",
    body: "We manage complex heavy haul and over-dimensional freight from start to finish. From multi-axle configurations to specialized trailers, we handle permits, routing, and pilot escorts to ensure compliance and safe delivery. Whether moving large industrial components or oversized equipment, we bring the planning and execution required to move challenging freight without delays.",
    whoItsFor:
      "industrial manufacturers, mining operations, oil & gas companies, power generation projects, equipment dealers, engineering firms, construction contractors",
  },
];

export default function ServicesPage() {
  const [activeId, setActiveId] = useState<string>("opendeck");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const service of SERVICES_LIST) {
        const element = document.getElementById(service.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#08090C]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[54vh] lg:min-h-[62vh] flex items-center justify-center pt-28 pb-14 px-5 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/services.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/85 via-[#08090C]/75 to-[#08090C]" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto text-center flex flex-col items-center gap-4">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Our <span className="text-[#CC0000]">Services</span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-3xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Comprehensive logistics solutions built for Western Canada&apos;s toughest environments and most demanding industries.
          </p>
        </div>
      </section>

      {/* Main Services Layout: Minimal Directory Sidebar + Detailed Content */}
      <section className="relative w-full py-16 px-5 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Service Directory Minimal Sidebar (Box Removed, Larger Font) */}
          <aside className="lg:col-span-3 sticky top-28 hidden lg:flex flex-col gap-5 py-2">
            <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#696E79] pb-1 border-b border-[#242830]">
              SERVICE DIRECTORY
            </span>

            <nav className="flex flex-col gap-4 font-display">
              {SERVICES_LIST.map((service) => {
                const isActive = activeId === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className={`text-left transition-all duration-200 text-base lg:text-lg flex items-center gap-2.5 ${
                      isActive
                        ? "text-[#FFFFFF] font-bold tracking-tight"
                        : "text-[#696E79] hover:text-[#A1A5B0] font-medium"
                    }`}
                  >
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#CC0000] shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-transparent shrink-0" />
                    )}
                    <span>{service.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Service Content Grid */}
          <main className="lg:col-span-9 flex flex-col gap-28">
            {SERVICES_LIST.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 flex flex-col gap-6"
              >
                {/* Title & Red Tagline with Increased Font Sizes */}
                <div>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#FFFFFF] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#CC0000] font-display font-semibold text-lg sm:text-xl lg:text-2xl mt-3 leading-snug">
                    {service.tagline}
                  </p>
                </div>

                {/* Service Main Image */}
                <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl border border-[#242830] overflow-hidden shadow-2xl bg-[#16191E]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority={service.id === "opendeck"}
                  />
                </div>

                {/* 2-Column Info Grid below Image with Increased Font Sizes */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
                  {/* Body Copy Column */}
                  <div className="md:col-span-7 text-[#A1A5B0] text-base sm:text-lg leading-relaxed font-normal">
                    <p>{service.body}</p>
                  </div>

                  {/* Who It's For & CTA Column */}
                  <div className="md:col-span-5 flex flex-col gap-6 border-t md:border-t-0 border-[#242830] pt-6 md:pt-0">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-display font-bold text-xs uppercase tracking-widest text-[#CC0000]">
                        WHO IT&apos;S FOR
                      </span>
                      <p className="text-sm sm:text-base text-[#A1A5B0] leading-relaxed">
                        {service.whoItsFor}
                      </p>
                    </div>

                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                      className="group border border-[#CC0000] text-[#FFFFFF] hover:bg-[#CC0000] py-3.5 px-6 rounded-md font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 inline-flex items-center justify-between mt-2"
                    >
                      <span>REQUEST A QUOTE</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </main>
        </div>
      </section>
    </div>
  );
}
