import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuoteForm } from "@/components/features/QuoteForm";
import { Phone, Mail } from "lucide-react";

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
        backgroundImage="/quote.png"
      />

      {/* Main Quote Container */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl lg:sticky lg:top-24 lg:self-start">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#CC0000]">REQUEST A QUOTE</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold text-[#111827] sm:text-5xl">
                Shipping solutions
                <br />
                you can count on
              </h2>
              <p className="mt-6 text-base leading-8 text-[#475569]">
                Whether you have a single shipment or require a customized solution, we&apos;ve got you covered. Backed by years of experience serving a wide variety of industries, our team understands what&apos;s required to move and is always ready for the next challenge.
              </p>

              <div className="mt-8 space-y-4">
                <p className="text-base font-medium text-[#111827]">
                  Want to speak with someone right now? We&apos;re available.
                </p>
                <a href="tel:+13685999677" className="flex items-center gap-3 text-[#334155] hover:text-[#CC0000]">
                  <Phone className="h-4 w-4" />
                  <span>+1-368-599-9677</span>
                </a>
                <a href="mailto:info@xtransport.ca" className="flex items-center gap-3 text-[#334155] hover:text-[#CC0000]">
                  <Mail className="h-4 w-4" />
                  <span>info@xtransport.ca</span>
                </a>
              </div>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
