import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join The X Group Inc.'s growing fleet. Openings for Drivers, Owner-Operators, and Operations across Western Canada.",
};

const CAREER_BLOCKS = [
  {
    tagline: "CANADA/US LONG HAUL",
    title: "Company Driver",
    description:
      "Join our fleet of professional drivers operating state-of-the-art equipment across Canada and the United States. We offer stable employment with excellent benefits and competitive compensation.",
    requirements: [
      "Minimum 6 months of Class 1/AZ driving experience",
      "Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred",
      "Minimum 6 months of Load Securement experience preferred",
    ],
    href: "/careers/company-driver",
  },
  {
    tagline: "CANADA/US LONG HAUL",
    title: "Owner Operator",
    description:
      "Partner with us and maintain your independence while benefiting from our extensive network, competitive rates, and comprehensive support services.",
    requirements: [
      "Minimum 1 year of Class 1/AZ driving experience",
      "Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred",
      "Minimum 6 months of Load Securement experience preferred",
    ],
    href: "/careers/owner-operator",
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
        backgroundImage="/join.png"
      />

      {/* Career Opportunities */}
      <section className="bg-[#CC0000]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden bg-[#F7F7F3] lg:min-h-[520px]">
            <Image
              src="/driver.jpg"
              alt="Company Driver"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          <article className="flex min-h-[360px] items-center bg-[#CC0000] px-8 py-16 sm:px-14 lg:min-h-[520px] lg:px-20">
            <div className="max-w-xl text-white">
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-white/80">
                {CAREER_BLOCKS[0].tagline}
              </span>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
                {CAREER_BLOCKS[0].title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/90">
                {CAREER_BLOCKS[0].description}
              </p>
              <h3 className="mt-7 font-display text-lg font-extrabold">Requirements:</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-white/90">
                {CAREER_BLOCKS[0].requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
              <Link
                href={CAREER_BLOCKS[0].href}
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-display text-sm font-bold text-[#CC0000] transition-colors hover:bg-[#F7F7F3]"
              >
                Apply Now
              </Link>
            </div>
          </article>

          <article className="flex min-h-[360px] items-center bg-[#CC0000] px-8 py-16 sm:px-14 lg:min-h-[520px] lg:px-20">
            <div className="max-w-xl text-white">
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-white/80">
                {CAREER_BLOCKS[1].tagline}
              </span>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
                {CAREER_BLOCKS[1].title}
              </h2>
              <p className="mt-5 text-base leading-8 text-white/90">
                {CAREER_BLOCKS[1].description}
              </p>
              <h3 className="mt-7 font-display text-lg font-extrabold">Requirements:</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-white/90">
                {CAREER_BLOCKS[1].requirements.map((requirement) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
              <Link
                href={CAREER_BLOCKS[1].href}
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-display text-sm font-bold text-[#CC0000] transition-colors hover:bg-[#F7F7F3]"
              >
                Apply Now
              </Link>
            </div>
          </article>

          <div className="relative min-h-[360px] overflow-hidden bg-[#F7F7F3] lg:min-h-[520px]">
            <Image
              src="/ownerop.jpg"
              alt="Owner Operator"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
