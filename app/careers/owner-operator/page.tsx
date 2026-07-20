import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import OwnerOperatorApplicationForm from "@/components/features/OwnerOperatorApplicationForm";

export default function OwnerOperatorApplicationPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl pt-16">
        <Link href="/careers" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#334155] hover:text-[#CC0000]">
          <ArrowLeft className="h-4 w-4" />
          Back to Job Listings
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="p-0 sm:p-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#CC0000]">OWNER OPERATOR</p>
            <h1 className="mt-3 text-3xl font-extrabold text-[#111827]">CANADA/US LONG HAUL</h1>
            <p className="mt-5 text-base leading-7 text-[#475569]">
              Partner with us and maintain your independence while benefiting from our extensive network, competitive rates, and comprehensive support services.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-[#111827]">Requirements:</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                  <li>• Minimum 1 year of Class 1/AZ driving experience</li>
                  <li>• Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred</li>
                  <li>• Minimum 6 months of Load Securement experience preferred</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#111827]">What we offer:</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                  <li>• Competitive contract</li>
                  <li>• Full benefit package effective immediately after orientation</li>
                  <li>• Fuel Subsidy Program</li>
                  <li>• Loaded & Empty miles paid equally</li>
                  <li>• Frequent home time</li>
                  <li>• Dedicated fleet manager</li>
                  <li>• Referral bonus program</li>
                  <li>• Paid orientation and training</li>
                  <li>• Paid FAST TWIC cards</li>
                  <li>• Discounted tire rates</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-[#111827]">What we&apos;re looking for:</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                <li>• 1 year over-the-road experience</li>
                <li>• Clean abstract</li>
                <li>• Ability to cross the border</li>
                <li>• Positive attitude</li>
                <li>• FAST approved or eligible considered an asset</li>
                <li>• Flatbed/Stepdeck experience</li>
                <li>• Well maintained, ELD compatible tractor</li>
              </ul>
            </div>
          </div>

          <div className="lg:pl-2">
            <OwnerOperatorApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
