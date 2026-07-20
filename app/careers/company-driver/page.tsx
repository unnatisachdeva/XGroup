import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareerApplicationForm from "@/components/features/CareerApplicationForm";

export default function CompanyDriverApplicationPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl pt-16">
        <Link href="/careers" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#334155] hover:text-[#CC0000]">
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="p-0 sm:p-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#CC0000]">COMPANY DRIVER</p>
            <h1 className="mt-3 text-3xl font-extrabold text-[#111827]">CANADA/US LONG HAUL</h1>
            <p className="mt-5 text-base leading-7 text-[#475569]">
              Join our fleet of professional drivers operating state-of-the-art equipment across Canada and the United States. We offer stable employment with excellent benefits and competitive compensation.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-[#111827]">Requirements:</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                  <li>• Minimum 6 months of Class 1/AZ driving experience</li>
                  <li>• Minimum 6 months of Commercial Flat Deck/Open Deck experience preferred</li>
                  <li>• Minimum 6 months of Load Securement experience preferred</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#111827]">What we offer:</h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                  <li>• Competitive pay</li>
                  <li>• Full benefit package effective immediately after orientation</li>
                  <li>• Loaded & empty miles paid equally</li>
                  <li>• Frequent home time</li>
                  <li>• Dedicated fleet manager</li>
                  <li>• Monthly mileage incentive bonus</li>
                  <li>• Referral bonus program</li>
                  <li>• Paid orientation and training</li>
                  <li>• Paid FAST/TWIC cards</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-[#111827]">What we&apos;re looking for:</h2>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#334155]">
                <li>• 6 months over-the-road experience</li>
                <li>• Clean abstract</li>
                <li>• Ability to cross the border</li>
                <li>• Positive attitude</li>
                <li>• FAST approved or eligible considered an asset</li>
                <li>• Flatbed Experience</li>
              </ul>
            </div>
          </div>

          <div className="lg:pl-2">
            <CareerApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
