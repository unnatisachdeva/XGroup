import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { CareersAppForm } from "@/components/features/CareersAppForm";
import JobCardWithForm from "@/components/features/JobCardWithForm";

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
        align="center"
        eyebrow="JOIN OUR TEAM"
        title=""
        subtitle="We're growing our fleet and looking for people who take ownership of the work as much as we do."
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1280px] w-full mx-auto">
            <JobCardWithForm
              title="Company Driver"
              tagline="CANADA/US LONG HAUL"
              slug="company-driver"
              description="Join our fleet of professional drivers operating state-of-the-art equipment across Canada and the United States. We offer stable employment with excellent benefits and competitive compensation."
              requirements={[
                "Minimum 6 months of Class 1/AZ driving experience",
                "Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred",
                "Minimum 6 months of Load Securement experience preferred",
              ]}
            />

            <JobCardWithForm
              title="Owner Operator"
              tagline="CANADA/US LONG HAUL"
              slug="owner-operator"
              description="Partner with us and maintain your independence while benefiting from our extensive network, competitive rates, and comprehensive support services."
              requirements={[
                "Minimum 1 year of Class 1/AZ driving experience",
                "Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred",
                "Minimum 6 months of Load Securement experience preferred",
              ]}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
