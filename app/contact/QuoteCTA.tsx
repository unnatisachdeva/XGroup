import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
          Ready to Move Freight?
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
          Let's Build Your Logistics Solution Together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Whether you need transportation, specialized hauling, or logistics
          support, our team is ready to provide a customized solution for your
          business.
        </p>

        <Link
          href="/get-a-quote"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl"
        >
          Request a Quote

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </section>
  );
}