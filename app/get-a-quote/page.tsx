import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuoteForm } from "@/components/features/QuoteForm";
import { Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Service | Get a Quote",
  description:
    "Request a quote from The X Group Inc. — dedicated, asset-based trucking for oilfield, mining, and energy freight across Western Canada.",
};

export default function GetAQuotePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="GET STARTED"
        title="Ready to Move?"
        subtitle="Our operations team is standing by to provide dedicated capacity and a fast, accurate quote."
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Quote Container */}
      <section className="py-20 bg-[#0A0C10]">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Sidebar Info Column */}
            <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
              <div className="p-8 rounded-2xl bg-[#12151B] border border-[#262B34] flex flex-col gap-6 shadow-xl">
                <h3 className="font-display font-bold text-xl text-[#F5F6F7] border-b border-[#262B34] pb-3">
                  Direct Operations Access
                </h3>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-4 group text-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-[#0A0C10] transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-display font-semibold text-[#6E7580]">
                      24/7 Dispatch Phone
                    </span>
                    <span className="font-display font-bold text-base text-[#F5F6F7] group-hover:text-[#CC0000]">
                      {SITE_CONFIG.displayPhone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 group text-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-[#0A0C10] transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-display font-semibold text-[#6E7580]">
                      Dispatch Email
                    </span>
                    <span className="font-display font-semibold text-sm text-[#F5F6F7] group-hover:text-[#CC0000]">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#191D25] border border-[#262B34] flex items-center justify-center text-[#5E7789] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-display font-semibold text-[#6E7580]">
                      Quote Response Window
                    </span>
                    <span className="text-xs text-[#A9AFB9]">
                      Within 1 business day or immediate by phone for active site emergencies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
