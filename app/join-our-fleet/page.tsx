import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FleetAppForm } from "@/components/features/FleetAppForm";
import { ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Join Our Fleet",
  description:
    "Bring your equipment or apply to drive for The X Group Inc.'s asset-based fleet serving Western Canada's oilfield, mining, and energy sectors.",
};

export default function JoinOurFleetPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="DRIVE WITH US"
        title="Join Our Fleet"
        subtitle="Whether you're an owner-operator or looking to drive for us directly, tell us about your operation and we'll be in touch."
        backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Form Container */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <FleetAppForm />
            </div>

            {/* Sidebar Benefits Column */}
            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
              <div className="p-8 rounded-2xl bg-[#12151B] border border-[#262B34] flex flex-col gap-5 shadow-xl">
                <h3 className="font-display font-bold text-xl text-[#F5F6F7] border-b border-[#262B34] pb-3">
                  Why Fleet Operators Choose Us
                </h3>

                <ul className="flex flex-col gap-4 text-xs text-[#A9AFB9]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F6F7] block text-sm">Consistent Work</strong>
                      <span>Direct contracts across oilfield, mining, and energy sites</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F6F7] block text-sm">No Middleman Brokers</strong>
                      <span>Direct dispatch communication without broker commission cuts</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#CC0000] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#F5F6F7] block text-sm">Safety Support</strong>
                      <span>Structured COR and ISN compliance assistance for operators</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
