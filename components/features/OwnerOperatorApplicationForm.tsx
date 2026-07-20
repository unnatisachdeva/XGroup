"use client";

import { useState } from "react";

export default function OwnerOperatorApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-0">
      <h2 className="text-2xl font-extrabold text-[#111827]">Apply Now</h2>

      {submitted ? (
        <div className="mt-6 rounded-2xl border border-[#D1FAE5] bg-[#ECFDF3] p-4 text-sm text-[#065F46]">
          Thank you — your application has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">First Name*</label>
              <input required className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">Last Name*</label>
              <input required className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Postal Code*</label>
            <input required className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Email*</label>
            <input type="email" required className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">Home Phone</label>
              <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">Cell Phone*</label>
              <input required className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Do you have a valid Class 1/AZ Licence?*</label>
            <div className="flex gap-6 text-sm text-[#334155]">
              <label className="flex items-center gap-2"><input type="radio" name="class1" value="yes" required /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="class1" value="no" /> No</label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Are you able to cross the Canada/US border?*</label>
            <div className="flex gap-6 text-sm text-[#334155]">
              <label className="flex items-center gap-2"><input type="radio" name="border" value="yes" required /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="border" value="no" /> No</label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">How many years in transportation?</label>
            <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Where did you hear about X Transport?</label>
            <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">How many vehicles do you own?</label>
            <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Are your vehicles governed at 105?</label>
            <div className="flex gap-6 text-sm text-[#334155]">
              <label className="flex items-center gap-2"><input type="radio" name="governed105" value="yes" /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="governed105" value="no" /> No</label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Are the emissions deleted for your vehicle(s)?</label>
            <div className="flex gap-6 text-sm text-[#334155]">
              <label className="flex items-center gap-2"><input type="radio" name="emissionsDeleted" value="yes" /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="emissionsDeleted" value="no" /> No</label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Are your vehicle(s) eLog compatible?</label>
            <div className="flex gap-6 text-sm text-[#334155]">
              <label className="flex items-center gap-2"><input type="radio" name="elogCompatible" value="yes" /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="elogCompatible" value="no" /> No</label>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">What is the wheelbase(s)?</label>
              <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">What is the Tare Weight(s)?</label>
              <input className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">What types of equipment did you operate?</label>
            <textarea rows={4} className="w-full rounded-xl border border-[#D1D5DB] px-4 py-3 text-sm outline-none focus:border-[#CC0000]" />
          </div>

          <button type="submit" className="w-full border border-[#CC0000] bg-white px-4 py-3.5 font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
