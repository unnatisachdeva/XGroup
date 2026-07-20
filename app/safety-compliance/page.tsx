import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { RegionSelector } from "@/components/features/RegionSelector";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PERMIT_TOPICS } from "@/lib/constants";
import { ShieldCheck, CheckCircle2, Award, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety & Compliance",
  description:
    "Safety program, certification progress, and oversize/overweight permit guidance from The X Group Inc. — an asset-based carrier serving Western Canada.",
};

export default function SafetyCompliancePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="SAFETY & COMPLIANCE"
        title="Safety Isn't a Department. It's How We Operate."
        subtitle="Our safety program, certification progress, and permit guidance for oversize and heavy-haul freight."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
        ctaPrimary={{ label: "Talk to Our Heavy-Haul Team", href: "/get-a-quote" }}
      />

      {/* Safety Program Section */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="eyebrow-label">OUR COMMITMENT</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7] tracking-tight">
                Building Toward COR & ISN Certification
              </h2>
              <p className="text-[#A9AFB9] text-base leading-relaxed">
                We&apos;re actively working toward Certificate of Recognition (COR) and ISNetworld (ISN) certification to meet the safety and compliance standards our clients in oil, gas, and mining expect. That work includes structured driver training, pre-trip and post-trip inspection protocols, and a preventive maintenance program applied across every unit in our fleet.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#F5F6F7]">
                    Ongoing driver safety training & site orientation
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#F5F6F7]">
                    Documented pre-trip and post-trip inspection standards
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#F5F6F7]">
                    Scheduled preventive maintenance across all equipment
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#191D25] border border-[#262B34] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#CC0000] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#F5F6F7]">
                    Incident reporting and continuous-improvement review
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#12151B] border border-[#262B34] flex flex-col gap-6 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000]">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-display uppercase tracking-widest text-[#CC0000]">
                  Group Compliance
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#F5F6F7] mt-1">
                  National Safety Code Compliant
                </h3>
              </div>

              <p className="text-sm text-[#A9AFB9] leading-relaxed">
                Operating under the broader safety envelope of the X Freight Group family of companies, backed by verified insurance, safety compliance officers, and direct dispatch coordination.
              </p>

              <div className="pt-4 border-t border-[#262B34] flex items-center justify-between text-xs text-[#6E7580]">
                <span>Status: In Progress / Verified</span>
                <span className="text-[#CC0000] font-bold">Western Canada Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Region Selector & Regulatory Hub */}
      <section className="py-20 bg-[#12151B] border-y border-[#262B34]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow-label mb-2">RESOURCE HUB</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F6F7] tracking-tight">
              Permits, Escorts & Regulatory Guidance
            </h2>
            <p className="text-[#A9AFB9] text-base mt-2">
              A practical reference for oversize, overweight, and rig-move freight across Canada and the United States. Regulations change frequently — always confirm current requirements with the issuing authority before a move.
            </p>
          </div>

          <RegionSelector />

          {/* 12 Regulatory Topic Reference Grid */}
          <div className="mt-20">
            <h3 className="font-display font-bold text-2xl text-[#F5F6F7] mb-8 border-l-4 border-[#CC0000] pl-3">
              Core Heavy-Haul Regulations & Topics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERMIT_TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="p-6 rounded-2xl bg-[#191D25] border border-[#262B34] hover:border-[#CC0000]/40 transition-all flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2 text-[#CC0000]">
                    <FileText className="w-5 h-5" />
                    <h4 className="font-display font-bold text-base text-[#F5F6F7]">
                      {topic.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#A9AFB9] leading-relaxed">
                    {topic.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="OVERSIZE PERMITS"
        title="Planning an Oversize or Rig Move?"
        subtitle="Our dispatch and heavy-haul coordinators will assist with routing, pilot cars, and permit verification."
      />
    </div>
  );
}
