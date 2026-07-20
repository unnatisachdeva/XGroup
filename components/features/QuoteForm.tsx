"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { quoteFormSchema, QuoteFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

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
      serviceType: "Oilfield & Energy Transport",
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
      <div className="p-8 sm:p-12 rounded-2xl bg-[#191D25] border border-[#3FAE6B]/40 text-center flex flex-col items-center gap-4 max-w-2xl mx-auto shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#3FAE6B]/10 border border-[#3FAE6B]/30 flex items-center justify-center text-[#3FAE6B]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F6F7]">
          Service Request Submitted
        </h3>
        <p className="text-[#A9AFB9] text-base leading-relaxed">
          Thanks — a member of our operations team will review your freight details and get back to you within one business day.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn-secondary mt-4"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-10 rounded-2xl bg-[#191D25] border border-[#262B34] flex flex-col gap-6 shadow-2xl max-w-3xl mx-auto"
    >
      <div className="border-b border-[#262B34] pb-4">
        <h2 className="font-display font-bold text-2xl text-[#F5F6F7]">
          Request a Freight Quote
        </h2>
        <p className="text-sm text-[#A9AFB9] mt-1">
          Tell us about your shipment and we&apos;ll provide dedicated capacity and accurate rates.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-[#E24C4C]/10 border border-[#E24C4C]/30 text-[#E24C4C] text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Grid Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Full Name <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.fullName && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.fullName.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Company Name <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("companyName")}
            type="text"
            placeholder="Apex Energy Resources"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.companyName && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.companyName.message}</span>
          )}
        </div>
      </div>

      {/* Grid Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Email Address <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="johndoe@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.email && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Phone Number <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(780) 555-0199"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.phone && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Grid Row 3: Origin & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Origin Location <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("origin")}
            type="text"
            placeholder="Edmonton, AB / Site Location"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.origin && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.origin.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Destination Location <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("destination")}
            type="text"
            placeholder="Fort McMurray, AB"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.destination && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.destination.message}</span>
          )}
        </div>
      </div>

      {/* Grid Row 4: Service Type & Commodity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Service Category <span className="text-[#CC0000]">*</span>
          </label>
          <select
            {...register("serviceType")}
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          >
            <option value="Oilfield & Energy Transport">Oilfield & Energy Transport</option>
            <option value="Mining & Bulk Hauling">Mining & Bulk Hauling</option>
            <option value="Heavy-Haul & Rig Moves">Heavy-Haul & Rig Moves</option>
            <option value="Dedicated Capacity">Dedicated Capacity</option>
            <option value="Other">Other</option>
          </select>
          {errors.serviceType && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.serviceType.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Commodity / Load Description <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("commodity")}
            type="text"
            placeholder="e.g. Drilling Pipe, Frac Sand, Rig Mats"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] focus:ring-1 focus:ring-[#CC0000] transition-all text-sm"
          />
          {errors.commodity && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.commodity.message}</span>
          )}
        </div>
      </div>

      {/* Grid Row 5: Weight, Dimensions & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
            Est. Weight (lbs/kg)
          </label>
          <input
            {...register("weight")}
            type="text"
            placeholder="80,000 lbs"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
            Dimensions (L x W x H)
          </label>
          <input
            {...register("dimensions")}
            type="text"
            placeholder="53' x 8'6 x 13'6"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
            Preferred Pickup Date
          </label>
          <input
            {...register("pickupDate")}
            type="date"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] focus:outline-none focus:border-[#CC0000] text-sm"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
          Additional Site / Delivery Notes
        </label>
        <textarea
          {...register("notes")}
          rows={4}
          placeholder="Special site access requirements, winch requirements, pilot cars, etc."
          className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            className="mt-1 rounded bg-[#12151B] border-[#262B34] text-[#CC0000] focus:ring-[#CC0000]"
          />
          <span className="text-xs text-[#A9AFB9] leading-relaxed">
            I agree to the collection and use of my information as outlined in the{" "}
            <a href="/privacy-policy" className="text-[#CC0000] underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.agreeToTerms && (
          <span className="text-xs text-[#E24C4C]">{errors.agreeToTerms.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full sm:w-auto self-start mt-2 !py-4 !px-9 !text-base"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <span>Request Quote →</span>
        )}
      </Button>
    </form>
  );
}
