import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join The X Group Inc.'s growing fleet. Openings for Drivers, Owner-Operators, and Operations across Western Canada.",
};

const JOBS = [
  {
    num: "01",
    slug: "drivers",
    title: "Company Drivers",
    location: "Western Canada",
    type: "Full-Time",
    desc: "Run oilfield, mining, and heavy-haul freight across Western Canada with a company that owns its equipment and backs its drivers.",
  },
  {
    num: "02",
    slug: "owner-operators",
    title: "Owner-Operators",
    location: "Western Canada",
    type: "Full-Time / Contract",
    desc: "Bring your equipment into a dedicated fleet with consistent freight, direct dispatch, and no brokered middlemen.",
  },
  {
    num: "03",
    slug: "operations",
    title: "Operations & Dispatch",
    location: "Western Canada",
    type: "Full-Time",
    desc: "Coordinate dispatch, equipment readiness, and site logistics to keep our fleet moving without downtime.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="JOIN OUR TEAM"
        title="Careers at The X Group Inc."
        subtitle="We're growing our fleet — and looking for people who take ownership of the work as much as we do."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
        ctaPrimary={{ label: "Join Our Fleet Form", href: "/join-our-fleet" }}
      />

      {/* Openings Grid */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow-label mb-2">CURRENT OPENINGS</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7] tracking-tight">
                Current Opportunities
              </h2>
            </div>
            <p className="text-sm text-[#A9AFB9] max-w-md">
              Select a position to view responsibilities, qualification standards, and submit your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOBS.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group relative p-8 rounded-3xl bg-[#12151B] border border-[#262B34] hover:border-[#CC0000] hover:bg-[#191D25] transition-all duration-300 flex flex-col justify-between gap-6 shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-[#262B34] pb-4">
                    <span className="font-display font-black text-3xl text-[#CC0000]">
                      {job.num}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#191D25] border border-[#262B34] text-[11px] font-display font-semibold text-[#A9AFB9]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-[#F5F6F7] group-hover:text-[#CC0000] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-sm text-[#A9AFB9] leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262B34] flex items-center justify-between text-xs">
                  <span className="text-[#6E7580] flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#CC0000]" />
                    {job.location}
                  </span>
                  <span className="btn-text-arrow text-xs">
                    View Role & Apply →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="EQUIPMENT OWNERS"
        title="Are You an Owner-Operator?"
        subtitle="Plug your equipment into consistent oilfield and mining haul routes with direct dispatch."
        buttonLabel="Submit Fleet Application"
        buttonHref="/join-our-fleet"
      />
    </div>
  );
}
