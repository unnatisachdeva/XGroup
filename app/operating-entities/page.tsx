import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { OPERATING_ENTITIES } from "@/lib/constants";
import { ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Entities",
  description:
    "The X Group Inc. is part of the X Freight Group family of companies — asset-based and brokerage divisions serving Western Canada's freight and logistics needs.",
};

export default function OperatingEntitiesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="OUR FAMILY OF COMPANIES"
        title="Part of a Larger Fleet"
        subtitle="The X Group Inc. operates alongside a family of specialized transportation companies, each focused on a distinct part of the freight equation."
        backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Entity Cards Grid */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OPERATING_ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between gap-6 shadow-xl ${
                  entity.isCurrent
                    ? "bg-[#191D25] border-[#CC0000] ring-1 ring-[#CC0000]/30"
                    : "bg-[#12151B] border-[#262B34] hover:border-[#CC0000]/40"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow-label text-xs">{entity.badge}</span>
                    {entity.isCurrent && (
                      <span className="px-3 py-1 rounded-full bg-[#CC0000]/20 border border-[#CC0000]/40 text-[#CC0000] font-display font-bold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        You Are Here
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F6F7]">
                    {entity.name}
                  </h2>

                  <p className="text-sm font-display font-semibold text-[#CC0000]">
                    {entity.tagline}
                  </p>

                  <p className="text-sm text-[#A9AFB9] leading-relaxed">
                    {entity.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262B34] flex items-center justify-between">
                  {entity.isCurrent ? (
                    <span className="text-xs font-display font-bold text-[#F5F6F7] uppercase tracking-wider">
                      Asset-Based Oilfield Carrier
                    </span>
                  ) : (
                    <a
                      href={entity.href}
                      target={entity.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="btn-text-arrow text-xs uppercase tracking-wider"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
