"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { quoteFormSchema, QuoteFormValues } from "@/lib/validations";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      serviceType: "Cross-Border Transportation",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request. Please try again.");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-[32px] bg-[#F8FAFC] p-8 text-center shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#3FAE6B]/20 bg-[#ECFDF3] text-[#3FAE6B]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="font-display text-2xl font-extrabold text-[#111827]">
          Service Request Submitted
        </h3>
        <p className="text-base leading-relaxed text-[#475569]">
          Thanks — a member of our operations team will review your freight details and get back to you within one business day.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-2 rounded-xl border border-[#CC0000] px-5 py-3 font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-[32px] bg-[#F8FAFC] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-10"
    >
      <div>
        <h2 className="font-display text-2xl font-extrabold text-[#111827]">CONTACT INFORMATION</h2>
      </div>

      {serverError && (
        <div className="flex items-center gap-2 rounded-xl border border-[#FECACA] bg-[#FEF2F2] p-4 text-sm text-[#B91C1C]">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#111827]">Full Name*</label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="John Doe"
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
          />
          {errors.fullName && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.fullName.message}</span>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#111827]">Company Name*</label>
          <input
            {...register("companyName")}
            type="text"
            placeholder="Apex Energy Resources"
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
          />
          {errors.companyName && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.companyName.message}</span>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#111827]">Email*</label>
          <input
            {...register("email")}
            type="email"
            placeholder="johndoe@company.com"
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
          />
          {errors.email && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.email.message}</span>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#111827]">Phone Number*</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(780) 555-0199"
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
          />
          {errors.phone && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.phone.message}</span>}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl font-extrabold text-[#111827]">SHIPMENT DETAILS</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Service Type*</label>
            <select
              {...register("serviceType")}
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            >
              <option value="Cross-Border Transportation">Cross-Border Transportation</option>
              <option value="Dry Van & Refrigerated (Reefer) Transportation">Dry Van & Refrigerated (Reefer) Transportation</option>
              <option value="Flatbed Shipping">Flatbed Shipping</option>
              <option value="Heavy Haul & Over Dimensional">Heavy Haul & Over Dimensional</option>
              <option value="Intermodal / Multimodal Transportation">Intermodal / Multimodal Transportation</option>
              <option value="Project Management & Logistics">Project Management & Logistics</option>
              <option value="Other">Other</option>
            </select>
            {errors.serviceType && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.serviceType.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Commodity / Load Description*</label>
            <input
              {...register("commodity")}
              type="text"
              placeholder="e.g. Drilling Pipe, Frac Sand, Rig Mats"
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            />
            {errors.commodity && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.commodity.message}</span>}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl font-extrabold text-[#111827]">PICK-UP & DELIVERY</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Origin Location*</label>
            <input
              {...register("origin")}
              type="text"
              placeholder="Edmonton, AB"
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            />
            {errors.origin && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.origin.message}</span>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Destination Location*</label>
            <input
              {...register("destination")}
              type="text"
              placeholder="Fort McMurray, AB"
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            />
            {errors.destination && <span className="mt-1 block text-xs text-[#B91C1C]">{errors.destination.message}</span>}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Date of Desired Loading*</label>
            <input
              {...register("pickupDate")}
              type="date"
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#111827]">Date of Desired Delivery*</label>
            <input
              {...register("deliveryDate")}
              type="date"
              className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#111827]">Additional Notes</label>
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Special site access requirements, winch requirements, pilot cars, etc."
          className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/10"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            className="mt-1 rounded border-[#E5E7EB] text-[#CC0000] focus:ring-[#CC0000]"
          />
          <span className="text-xs leading-relaxed text-[#475569]">
            I agree to the collection and use of my information as outlined in the{" "}
            <a href="/privacy-policy" className="text-[#CC0000] underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.agreeToTerms && <span className="text-xs text-[#B91C1C]">{errors.agreeToTerms.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl border border-[#CC0000] bg-white px-5 py-3.5 font-semibold text-[#CC0000] transition-colors hover:bg-[#CC0000] hover:text-white sm:w-auto"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting Request...
          </span>
        ) : (
          "SUBMIT REQUEST"
        )}
      </button>
    </form>
  );
}
