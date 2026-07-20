import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CardGrid } from "@/components/sections/CardGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FLEET_CATEGORIES } from "@/lib/constants";
import { ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Fleet & Equipment",
  description:
    "A look at the trucks, trailers, and specialized equipment The X Group Inc. owns and operates across Western Canada's oilfield, mining, and energy sectors.",
};

export default function FleetPage() {
  const fleetCards = FLEET_CATEGORIES.map((f) => ({
    id: f.id,
    title: f.title,
    description: f.desc,
    icon: f.icon,
    href: "/get-a-quote",
    badge: "Owned Equipment",
  }));

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="OUR FLEET"
        title="Equipment We Own. Freight We Move."
        subtitle="A fleet built specifically for oilfield, mining, and heavy-industrial freight — maintained in-house and dispatched directly."
        backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
        ctaPrimary={{ label: "Request Service", href: "/get-a-quote" }}
        ctaSecondary={{ label: "Join Our Fleet", href: "/join-our-fleet" }}
      />

      {/* Equipment Categories Section */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow-label mb-2">EQUIPMENT CATEGORIES</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7] tracking-tight">
              Purpose-Built Industrial Hardware
            </h2>
            <p className="text-[#A9AFB9] text-base mt-3">
              Configured for tough terrain, lease roads, heavy weights, and specialized energy relocations.
            </p>
          </div>

          <CardGrid items={fleetCards} columns={3} />
        </div>
      </section>

      {/* Maintenance & Standards Section */}
      <section className="py-20 bg-[#12151B] border-y border-[#262B34]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="eyebrow-label">EQUIPMENT STANDARDS</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7] tracking-tight">
                Maintained In-House, Ready When You Are
              </h2>
              <p className="text-[#A9AFB9] text-base leading-relaxed">
                Every unit in our fleet runs through a scheduled preventive-maintenance program before it ever leaves the yard. That means fewer breakdowns, fewer delays, and equipment that shows up ready to work — not equipment you&apos;re hoping makes it to site.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[#F5F6F7]">In-House Technicians</span>
                    <span className="text-xs text-[#A9AFB9]">Scheduled servicing & pre-trip inspections</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[#F5F6F7]">Safety Inspections</span>
                    <span className="text-xs text-[#A9AFB9]">Documented pre/post trip compliance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#191D25] border border-[#262B34] flex flex-col gap-4">
              <h3 className="font-display font-bold text-xl text-[#F5F6F7] border-b border-[#262B34] pb-3">
                Fleet Operational Commitments
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-[#A9AFB9]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3FAE6B] shrink-0" />
                  <span>Zero brokered equipment ambiguity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3FAE6B] shrink-0" />
                  <span>GPS satellite tracking on long-haul moves</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3FAE6B] shrink-0" />
                  <span>Rig-move experienced Class 1 operators</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3FAE6B] shrink-0" />
                  <span>Heavy-haul permit & route planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="EQUIPMENT CAPACITY"
        title="Need Equipment for an Upcoming Project?"
        subtitle="Talk to our dispatch team to lock in dedicated tractors, lowboys, or winch units."
        buttonLabel="Request Equipment Quote"
      />
    </div>
  );
}
