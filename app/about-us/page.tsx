import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The X Group Inc.",
  description:
    "Behind every successful logistics partnership is a relationship built on trust, consistency, and reliable execution.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full bg-[var(--color-bg-primary)]">
      {/* Full-bleed Hero Section matching xfreight.ca/about-us */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-5 lg:px-10 overflow-hidden">
        {/* Warehouse Background Photography */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/20 to-white/35" />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col items-start gap-2">
            <span className="text-[#CC0000] font-display font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em]">
              WHO WE ARE
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#111111] tracking-tight leading-none">
              About <span className="text-[#CC0000]">Us</span>
            </h1>
            <div className="w-12 h-1.5 bg-[#CC0000] mt-3 rounded-full" />
          </div>

          {/* Right Column: Light card for readability */}
          <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E6E6E6] shadow-2xl flex flex-col gap-8">
            {/* Main Header Statement */}
            <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#111111] leading-snug tracking-tight border-b border-[#E6E6E6] pb-6">
              Behind every successful logistics partnership is a relationship. A relationship built on{" "}
              <span className="text-[#CC0000]">trust, consistency</span> and reliable execution.
            </h2>

            {/* 2-Column Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-sm sm:text-base text-[#4F4F4F] leading-relaxed">
              {/* Left Column Text */}
              <div className="flex flex-col gap-5">
                <p>
                  <strong className="text-[#111111] font-semibold">The X Group Inc.</strong> was built around a simple, timeless idea: showing up every day to do what we say we will do, leads to{" "}
                  <span className="text-[#CC0000] font-medium">long-term, win-win relationships</span>. For our clients, drivers, partner carriers and colleagues alike.
                </p>
                <p>
                  Combining our Western-Canada fleet footprint with the versatility of our carrier partner network, we offer shippers an{" "}
                  <span className="text-[#CC0000] font-medium">agile, responsive</span> logistics solution whenever and however their supply chain requires.
                </p>
              </div>

              {/* Right Column Text */}
              <div className="flex flex-col gap-5">
                <p>
                  From oilfield, aggregate, and heavy-haul to long-haul dry van & reefer shipping, each of our business units brings a{" "}
                  <span className="text-[#CC0000] font-medium">specialized skillset</span> to the table.
                </p>
                <p>
                  Our clients rely on us because we keep things simple: answer the phone, communicate clearly, and get freight where it needs to go. No over-complication. No excuses. Just{" "}
                  <span className="text-[#CC0000] font-medium">consistent execution</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
