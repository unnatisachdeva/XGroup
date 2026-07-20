"use client";

import { motion } from "framer-motion";
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
  const gridClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridClass} gap-6 sm:gap-8`}>
      {items.map((item, idx) => {
        const IconComponent = item.icon ? ICON_MAP[item.icon] || Truck : Truck;

        return (
          <motion.div
            key={item.id || idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#191D25] border border-[#262B34] hover:border-[#CC0000]/50 hover:bg-[#1C2028] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
          >
            <div>
              {/* Header Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000] group-hover:scale-110 group-hover:bg-[#CC0000] group-hover:text-[#0A0C10] transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                {item.badge && (
                  <span className="text-xs font-display font-semibold uppercase px-2.5 py-1 rounded-full bg-[#12151B] border border-[#262B34] text-[#A9AFB9]">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-[#F5F6F7] group-hover:text-[#CC0000] transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#A9AFB9] leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Link Action */}
            {item.href && (
              <Link
                href={item.href}
                className="btn-text-arrow pt-4 border-t border-[#262B34] text-xs uppercase tracking-wider"
              >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
