"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

/** Content preserved verbatim from the original homepage services carousel. */
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

const TOTAL = HOME_SERVICES.length;

export function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [pinned, setPinned] = useState(false);

  // Decide layout mode: pinned stacking on desktop with motion, otherwise a
  // plain vertical list (mobile + reduced motion).
  useEffect(() => {
    const evaluate = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setPinned(desktop && !reduce);
    };
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, []);

  // Pinned scroll-stacking timeline. Each subsequent card slides up from the
  // bottom to cover the previous one; after the last card the section unpins.
  useEffect(() => {
    if (!pinned) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
      if (cards.length < 2) return;
      const covering = cards.slice(1);

      gsap.set(covering, { yPercent: 100 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => "+=" + (cards.length - 1) * window.innerHeight,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      covering.forEach((card) => {
        tl.to(card, { yPercent: 0 });
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pinned]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] text-white"
      aria-label="Our Capabilities"
    >
      {/* Heading shown when the section is a plain list (mobile / reduced motion) */}
      <div className={`${pinned ? "hidden" : "block"} px-5 pt-20 pb-10 sm:px-6`}>
        <SectionHeading />
      </div>

      <div
        ref={pinRef}
        className={
          pinned
            ? "grid h-[100svh] grid-cols-2 overflow-hidden"
            : "grid grid-cols-1"
        }
      >
        {/* Pinned left panel — only in the stacking layout */}
        <div className={`${pinned ? "relative block" : "hidden"} overflow-hidden`}>
          <Image
            src="/mainphoto.jpeg"
            alt=""
            fill
            aria-hidden
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/80" />
          <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_20%_10%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">
            <SectionHeading dark />
            <div className="flex items-center gap-3 text-white/50">
              <span className="font-display text-sm font-bold tabular-nums text-[#CC0000]">
                {String(TOTAL).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-white/25" />
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                Specialized Divisions
              </span>
            </div>
          </div>
        </div>

        {/* Cards column */}
        <div
          className={
            pinned
              ? "relative h-full"
              : "flex flex-col gap-5 px-5 pb-20 sm:px-6"
          }
        >
          {HOME_SERVICES.map((service, index) => (
            <article
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={pinned ? { zIndex: index + 1 } : undefined}
              className={`group relative flex flex-col justify-end overflow-hidden ${
                pinned
                  ? "absolute inset-0 rounded-none"
                  : "min-h-[68vh] rounded-3xl"
              } ${pinned && index > 0 ? "translate-y-full" : ""}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />

              {/* Top meta */}
              <div className="absolute left-7 right-7 top-7 flex items-center justify-between sm:left-9 sm:right-9 sm:top-9">
                <span className="flex items-center gap-3">
                  <span className="font-display text-sm font-bold tabular-nums text-[#CC0000]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-white/40" />
                </span>
                <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom content */}
              <div className="relative z-10 flex flex-col gap-4 p-7 sm:p-9 lg:p-12">
                <h3 className="max-w-xl font-display text-3xl font-extrabold leading-[1.04] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-2 inline-flex w-fit items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:text-[#FF4646]"
                >
                  Read More
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CC0000] text-white transition-all duration-200 group-hover:bg-[#E60000] group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex max-w-xl flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-bold tracking-[-0.02em] text-[#CC0000]">
          02
        </span>
        <span className="h-px w-8 bg-[#CC0000]" />
        <span
          className={`font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] ${
            dark ? "text-white/60" : "text-white/60"
          }`}
        >
          Our Capabilities
        </span>
      </div>
      <h2 className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
        Built for the toughest freight
      </h2>
      <p className="text-base text-white/70 sm:text-lg">
        Specialized capabilities across every major industrial sector in Western Canada.
      </p>
      <Link
        href="/services"
        className="group mt-1 inline-flex w-fit items-center gap-2 whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.08em] text-white transition-colors hover:text-[#FF4646]"
      >
        All Services
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  );
}
