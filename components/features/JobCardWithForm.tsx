"use client";

import Link from "next/link";
import { Check } from "lucide-react";

interface JobCardWithFormProps {
  title: string;
  tagline?: string;
  description: string;
  requirements: string[];
  slug: string;
}

export default function JobCardWithForm({
  title,
  tagline,
  description,
  requirements,
  slug,
}: JobCardWithFormProps) {
  return (
    <div className="w-full h-full">
      <div className="h-full rounded-[28px] border border-[#E5E7EB] bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(15,23,42,0.12)]">
        <div className="flex h-full flex-col">
          <div className="mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#CC0000]">{tagline}</span>
            <h3 className="mt-2 font-display text-2xl font-extrabold text-[#111827]">{title}</h3>
          </div>

          <p className="mb-5 text-sm leading-7 text-[#475569]">{description}</p>

          <div className="mb-6 flex-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#111827]">Requirements:</h4>
            <ul className="space-y-3 text-sm text-[#334155]">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#111827]" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link
              href={`/careers/${slug}`}
              className="block w-full border border-[#CC0000] bg-white px-4 py-3.5 text-center font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
