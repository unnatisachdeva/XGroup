import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SITE_CONFIG } from "@/lib/constants";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and PIPEDA compliance guidelines for The X Group Inc. website visitors and fleet applicants.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 18, 2026";

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <Hero
        height="compact"
        eyebrow="LEGAL & COMPLIANCE"
        title="Privacy Policy"
        subtitle="How The X Group Inc. collects, uses, and protects personal and commercial operational data."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Legal Content */}
      <section className="py-20 bg-[#0A0C10] text-[#A9AFB9]">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 flex flex-col gap-10">
          <div className="p-4 rounded-xl bg-[#12151B] border border-[#262B34] flex items-center justify-between text-xs text-[#6E7580]">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#CC0000]" />
              PIPEDA Aligned Compliance Statement
            </span>
            <span>Last Updated: {lastUpdated}</span>
          </div>

          <div className="flex flex-col gap-6 text-sm sm:text-base leading-relaxed">
            <h2 className="font-display font-extrabold text-2xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3">
              1. Introduction & Scope
            </h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;The X Group Inc.&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of personal and business information provided to us by website users, shippers, drivers, and owner-operator applicants. This Privacy Policy outlines our practices pursuant to the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Canadian provincial privacy laws.
            </p>

            <h2 className="font-display font-extrabold text-2xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3 mt-4">
              2. Information We Collect
            </h2>
            <p>
              We collect information provided directly by you through interactive website forms, service requests, and career applications, including:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Contact details: Name, email address, phone number, company name.</li>
              <li>Freight quote details: Origin, destination, commodity descriptions, equipment needs, dimensions, weight specs.</li>
              <li>Fleet & Driver application details: Operating license numbers, National Safety Code (NSC) or MC identifiers, equipment configurations, operating region selections, and work histories.</li>
              <li>Technical usage data: Anonymous IP addresses, browser types, device identifiers, and page navigation metrics collected via standard web analytics.</li>
            </ul>

            <h2 className="font-display font-extrabold text-2xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3 mt-4">
              3. Purpose & Use of Data
            </h2>
            <p>
              Information collected on this site is strictly used for legitimate business operations:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>Processing freight rate quotes, evaluating heavy-haul permits, and dispatching equipment.</li>
              <li>Evaluating driver and owner-operator qualifications, safety abstracts, and fleet compatibility.</li>
              <li>Communicating operational updates, project schedules, and safety advisories.</li>
              <li>Maintaining legal, safety, and regulatory records mandated by transport authorities.</li>
            </ul>

            <h2 className="font-display font-extrabold text-2xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3 mt-4">
              4. Data Protection & Third-Party Disclosure
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. Data may be shared with trusted third-party service providers (such as secure cloud hosting, email delivery engines, and CRM systems) solely to facilitate our operational services. All third parties are legally obligated to maintain equal or greater data security standards.
            </p>

            <h2 className="font-display font-extrabold text-2xl text-[#F5F6F7] border-l-4 border-[#CC0000] pl-3 mt-4">
              5. Your Rights & Privacy Inquiries
            </h2>
            <p>
              Under Canadian privacy legislation, you have the right to access, update, or request deletion of personal information held by us, subject to statutory retention requirements for transport logs and tax compliance.
            </p>

            <div className="p-6 rounded-2xl bg-[#12151B] border border-[#262B34] mt-6 flex flex-col gap-2">
              <h3 className="font-display font-bold text-base text-[#F5F6F7]">
                Privacy Officer Contact
              </h3>
              <p className="text-xs text-[#A9AFB9]">
                For questions or requests regarding your data, contact our Privacy Compliance Officer at:
              </p>
              <div className="text-xs text-[#CC0000] font-semibold mt-1">
                Email: {SITE_CONFIG.email} | Phone: {SITE_CONFIG.displayPhone}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
