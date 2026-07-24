"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Fuel,
  Pickaxe,
  Truck,
  ShieldCheck,
  Anchor,
  Cpu,
  Maximize2,
  Layers,
  Compass,
  Grid,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Fuel,
  Pickaxe,
  Truck,
  ShieldCheck,
  Anchor,
  Cpu,
  Maximize2,
  Layers,
  Compass,
  Grid,
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface CardItem {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon?: string;
  badge?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export function CardGrid({ items, columns = 3 }: CardGridProps) {
  const shouldReduce = useReducedMotion();

  const gridClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const container: Variants = {
    hidden: {},
    show: { transition: shouldReduce ? {} : { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`grid ${gridClass} gap-6 sm:gap-8`}
    >
      {items.map((card, idx) => {
        const IconComponent = card.icon ? ICON_MAP[card.icon] || Truck : Truck;

        return (
          <motion.div
            key={card.id || idx}
            variants={item}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D6D6D0] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:p-8"
          >
            {/* Accent bar that grows on hover */}
            <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#CC0000] transition-transform duration-300 group-hover:scale-y-100" />

            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#CC0000]/8 text-[#CC0000] transition-all duration-300 group-hover:bg-[#CC0000] group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>
                {card.badge && (
                  <span className="rounded-full border border-[#E6E6E6] bg-[#F7F7F3] px-2.5 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#6B6B6B]">
                    {card.badge}
                  </span>
                )}
              </div>

              <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-[#111111] transition-colors group-hover:text-[#CC0000]">
                {card.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#4F4F4F]">
                {card.description}
              </p>
            </div>

            {card.href && (
              <Link
                href={card.href}
                className="group/link inline-flex items-center gap-2 border-t border-[#E6E6E6] pt-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-[#CC0000] transition-colors hover:text-[#E60000]"
              >
                <span>Explore Details</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
