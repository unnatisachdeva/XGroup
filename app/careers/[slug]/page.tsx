import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CareersAppForm } from "@/components/features/CareersAppForm";
import { ArrowLeft, CheckCircle2, MapPin, Briefcase, ShieldCheck } from "lucide-react";

interface RoleDetails {
  slug: string;
  title: string;
  location: string;
  type: string;
  opportunity: string;
  responsibilities: string[];
  requirements: string[];
}

const ROLES_DATA: Record<string, RoleDetails> = {
  drivers: {
    slug: "drivers",
    title: "Company Drivers (Class 1 / AZ)",
    location: "Western Canada",
    type: "Full-Time",
    opportunity:
      "The X Group Inc. is looking for experienced, safety-minded drivers to join our growing fleet. You'll haul freight across Western Canada's oilfield, mining, and energy sectors — from rig components to bulk material — on equipment we maintain in-house.",
    responsibilities: [
      "Safely transport freight to active job sites across Western Canada",
      "Complete thorough pre-trip and post-trip inspections",
      "Maintain accurate logs and trip documentation",
      "Secure loads to company and regulatory standards",
      "Communicate proactively with dispatch on schedule and site conditions",
      "Comply with all federal and provincial transportation regulations",
      "Represent The X Group Inc. professionally at every site",
    ],
    requirements: [
      "Valid Class 1 (AZ) license with clean abstract",
      "Experience with heavy-haul, oilfield, or specialized freight preferred",
      "Working knowledge of load securement standards",
      "Ability to pass drug and alcohol testing",
      "Strong safety record and safety-first mindset",
      "Willingness to work variable hours based on site and project demands",
    ],
  },
  "owner-operators": {
    slug: "owner-operators",
    title: "Owner-Operators (Dedicated Fleet)",
    location: "Western Canada",
    type: "Full-Time / Contract",
    opportunity:
      "We're expanding our owner-operator network to add dedicated capacity across oilfield, mining, and energy freight. Bring your own equipment and plug into consistent work with direct dispatch — no brokered middlemen, no guessing where your next load is coming from.",
    responsibilities: [
      "Operate your equipment safely across assigned routes and sites",
      "Maintain your unit to company and regulatory standards",
      "Communicate with dispatch on availability, schedule, and site conditions",
      "Complete required inspections and documentation",
      "Represent The X Group Inc. professionally on every job",
    ],
    requirements: [
      "Valid Class 1 (AZ) license and clean abstract",
      "Owned tractor and applicable trailer (winch tractor, tri-drive, lowboy, end dump, or similar)",
      "Current safety and equipment certifications",
      "Experience in oilfield, mining, or heavy-haul freight preferred",
      "Willingness to meet company safety and maintenance standards",
    ],
  },
  operations: {
    slug: "operations",
    title: "Operations & Dispatch Coordinator",
    location: "Western Canada",
    type: "Full-Time",
    opportunity:
      "Our Operations team keeps freight moving — coordinating dispatch, tracking equipment readiness, and solving problems before they become delays. This role sits at the center of how The X Group Inc. runs.",
    responsibilities: [
      "Coordinate daily dispatch and load assignments",
      "Track equipment availability and maintenance status",
      "Communicate with drivers, owner-operators, and clients throughout each move",
      "Support permit and routing coordination for heavy-haul freight",
      "Identify and resolve scheduling or site issues in real time",
    ],
    requirements: [
      "Experience in trucking dispatch, logistics coordination, or fleet operations",
      "Familiarity with oilfield, mining, or heavy-haul freight an asset",
      "Strong communication and problem-solving skills",
      "Comfort working in a fast-paced, deadline-driven environment",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const role = ROLES_DATA[slug];
  if (!role) return { title: "Position Not Found" };
  return {
    title: `${role.title} | Careers`,
    description: role.opportunity,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const role = ROLES_DATA[slug];

  if (!role) {
    notFound();
  }

  const jsonLdJob = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: role.title,
    description: role.opportunity,
    datePosted: "2026-07-18",
    employmentType: role.type.includes("Full-Time") ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "The X Group Inc.",
      sameAs: "https://www.thexgroup.ca",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "AB",
        addressCountry: "CA",
      },
    },
  };

  return (
    <div className="flex flex-col w-full bg-[#0A0C10] pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdJob) }}
      />

      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        {/* Back link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#A9AFB9] hover:text-[#CC0000] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </Link>

        {/* Header Title Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12151B] border border-[#262B34] mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="eyebrow-label">CAREER OPPORTUNITY</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7]">
              {role.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#A9AFB9] font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191D25] border border-[#262B34]">
                <MapPin className="w-3.5 h-3.5 text-[#CC0000]" />
                {role.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191D25] border border-[#262B34]">
                <Briefcase className="w-3.5 h-3.5 text-[#CC0000]" />
                {role.type}
              </span>
            </div>
          </div>
        </div>

        {/* Content & Application Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Details Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Opportunity */}
            <div className="flex flex-col gap-3">
              <h2 className="font-display font-bold text-xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3">
                The Opportunity
              </h2>
              <p className="text-base text-[#A9AFB9] leading-relaxed">
                {role.opportunity}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-bold text-xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3">
                Key Responsibilities
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-[#A9AFB9]">
                {role.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We're Looking For */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display font-bold text-xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3">
                What We&apos;re Looking For
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-[#A9AFB9]">
                {role.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-5 sticky top-28">
            <CareersAppForm jobTitle={role.title} jobSlug={role.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
