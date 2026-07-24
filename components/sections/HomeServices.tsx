"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

/** Content preserved verbatim from the original homepage services carousel. */
const HOME_SERVICES: HomeServiceItem[] = [
  {
    id: "heavyhaul",
    title: "Heavy-Haul & Over-Dimensional",
    description: "Complex multi-axle moves, permit acquisition & pilot car coordination.",
    href: "/services#heavyhaul",
  },
  {
    id: "opendeck",
    title: "Truckload – Open Deck",
    description: "Flatbed and step-deck trucking across Canada and North America.",
    href: "/services#opendeck",
  },
  {
    id: "oilfield",
    title: "Oil Field",
    description: "Supporting drilling, completions, frac sand & rig relocations.",
    href: "/services#oilfield",
  },
  {
    id: "iceroads",
    title: "Ice Road Transport",
    description: "Critical winter freight to remote northern exploration sites.",
    href: "/services#iceroads",
  },
  {
    id: "aggregate",
    title: "Aggregate",
    description: "High-volume bulk hauling for infrastructure & civil projects.",
    href: "/services#aggregate",
  },
];

const TOTAL = HOME_SERVICES.length;
const RED = "#CC0000";
const DARK = "#111111";
const LIGHT = "#F4F4F6";
const DIVIDER = "#E5E5E5";

const pad = (n: number) => String(n).padStart(2, "0");

export function HomeServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);

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
  // bottom to cover the previous one; only one card is visible at a time and
  // the left image stays fixed. After the last card the section unpins.
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
          onUpdate: (self) => {
            const idx = Math.round(self.progress * (cards.length - 1));
            setActive(idx);
          },
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
      className="relative w-full bg-[#F7F7F3]"
      aria-label="Our Services"
    >
      <div
        ref={pinRef}
        className={
          pinned
            ? "grid h-[100svh] grid-cols-2 gap-10 px-10 py-12 xl:gap-14 xl:px-16"
            : "flex flex-col gap-6 px-5 py-16 sm:px-6"
        }
      >
        {/* Left column — fixed portrait image (uncropped, rounded) */}
        <div
          className={
            pinned
              ? "relative h-full overflow-hidden rounded-3xl bg-black"
              : "relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-black"
          }
        >
          <Image
            src="/portrait2.jpeg"
            alt="Our Services"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Heading overlay */}
          <h2 className="pointer-events-none absolute left-6 top-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:left-8 sm:top-8 sm:text-5xl lg:text-6xl">
            Our
            <br />
            Services
          </h2>
          {/* Bottom progress bar with current index */}
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 sm:inset-x-8 sm:bottom-8">
            <div className="flex flex-1 items-center gap-2">
              {HOME_SERVICES.map((s, i) => (
                <span
                  key={s.id}
                  className="h-px flex-1 overflow-hidden bg-white/25"
                >
                  <span
                    className="block h-full bg-white transition-all duration-500"
                    style={{ width: i <= active ? "100%" : "0%" }}
                  />
                </span>
              ))}
            </div>
            <span className="font-display text-xs font-semibold tabular-nums tracking-[0.15em] text-white">
              {pad(active + 1)}/{pad(TOTAL)}
            </span>
          </div>
        </div>

        {/* Right column — stacked service cards */}
        <div className={pinned ? "relative h-full" : "flex flex-col gap-5"}>
          {HOME_SERVICES.map((service, index) => {
            const isRed = index % 2 === 1;
            return (
              <article
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{
                  zIndex: index + 1,
                  backgroundColor: isRed ? RED : LIGHT,
                  color: isRed ? "#FFFFFF" : DARK,
                }}
                className={`flex flex-col justify-between overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 ${
                  pinned ? "absolute inset-0" : "min-h-105"
                }`}
              >
                {/* Top row — number + title */}
                <div className="flex items-start gap-6 sm:gap-8">
                  <span className="font-display text-6xl font-extrabold leading-none tabular-nums tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                    {pad(index + 1)}
                  </span>
                  <h3 className="mt-1 max-w-md font-display text-2xl font-extrabold uppercase leading-[1.05] tracking-[-0.01em] sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
                  style={{ color: isRed ? "rgba(255,255,255,0.85)" : "#4F4F4F" }}
                >
                  {service.description}
                </p>

                {/* Divider */}
                <div
                  className="mt-8 h-px w-full"
                  style={{ backgroundColor: isRed ? "rgba(255,255,255,0.25)" : DIVIDER }}
                />

                {/* Bottom row — LEARN MORE + index */}
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ color: isRed ? "#FFFFFF" : DARK }}
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition-transform duration-200 group-hover:translate-x-0.5"
                      style={{
                        borderColor: isRed ? "rgba(255,255,255,0.5)" : "rgba(17,17,17,0.3)",
                      }}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    Learn More
                  </Link>
                  <span
                    className="font-display text-xs font-semibold tabular-nums tracking-[0.15em]"
                    style={{ color: isRed ? "rgba(255,255,255,0.7)" : "#8A8A8A" }}
                  >
                    {pad(index + 1)}/{pad(TOTAL)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
