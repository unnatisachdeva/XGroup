"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { fleetFormSchema, FleetFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const REGIONS = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "Northern Territories",
];

export function FleetAppForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FleetFormValues>({
    resolver: zodResolver(fleetFormSchema),
    defaultValues: {
      applyingAs: "Owner-Operator",
      operatingRegions: ["Alberta", "British Columbia"],
    },
  });

  const applyingAs = watch("applyingAs");
  const selectedRegions = watch("operatingRegions") || [];

  const handleRegionToggle = (region: string) => {
    if (selectedRegions.includes(region)) {
      setValue(
        "operatingRegions",
        selectedRegions.filter((r) => r !== region)
      );
    } else {
      setValue("operatingRegions", [...selectedRegions, region]);
    }
  };

  const onSubmit = async (data: FleetFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/fleet-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
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
          Application Received
        </h3>
        <p className="text-[#A9AFB9] text-base leading-relaxed">
          Thank you for your interest in joining The X Group Inc. fleet. Our safety and recruitment team will review your qualifications and contact you.
        </p>
        <button onClick={() => setIsSuccess(false)} className="btn-secondary mt-4">
          Submit Another Application
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
          Join Our Fleet Application
        </h2>
        <p className="text-sm text-[#A9AFB9] mt-1">
          Drive for an asset-based company that owns its equipment and respects its operators.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-[#E24C4C]/10 border border-[#E24C4C]/30 text-[#E24C4C] text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Field: Applying As Toggle */}
      <div>
        <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
          Applying As <span className="text-[#CC0000]">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          {(["Owner-Operator", "Company Driver"] as const).map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setValue("applyingAs", type)}
              className={`p-4 rounded-xl font-display font-bold text-sm border transition-all ${
                applyingAs === type
                  ? "bg-[#CC0000] text-[#0A0C10] border-[#CC0000] shadow-lg"
                  : "bg-[#12151B] text-[#A9AFB9] border-[#262B34] hover:text-[#F5F6F7]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Row: Name & Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Full Name <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Robert Vance"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
          {errors.fullName && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.fullName.message}</span>
          )}
        </div>

        {applyingAs === "Owner-Operator" && (
          <div>
            <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
              Company / Corp Name (Optional)
            </label>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Vance Heavy Trucking Ltd."
              className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
            />
          </div>
        )}
      </div>

      {/* Row: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
            Email Address <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="robert@vancetrucking.ca"
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
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
            className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
          {errors.phone && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Conditional Equipment specs */}
      {applyingAs === "Owner-Operator" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
              Primary Equipment Type
            </label>
            <select
              {...register("equipmentType")}
              className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] focus:outline-none focus:border-[#CC0000] text-sm"
            >
              <option value="Winch Tractor">Winch Tractor</option>
              <option value="Tri-Drive">Tri-Drive Tractor</option>
              <option value="Lowboy / Highboy">Lowboy / Highboy Trailer</option>
              <option value="End Dump">End Dump</option>
              <option value="Picker Truck">Picker / Boom Truck</option>
              <option value="Other">Other Equipment</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
              Number of Units
            </label>
            <input
              {...register("numberOfUnits")}
              type="text"
              placeholder="e.g. 2 Tractors"
              className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
              NSC / MC Number
            </label>
            <input
              {...register("nscMcNumber")}
              type="text"
              placeholder="NSC #123456"
              className="w-full px-4 py-3 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
            />
          </div>
        </div>
      )}

      {/* Operating Regions Multi-Select */}
      <div>
        <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-2">
          Operating Regions <span className="text-[#CC0000]">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {REGIONS.map((region) => {
            const isChecked = selectedRegions.includes(region);
            return (
              <button
                type="button"
                key={region}
                onClick={() => handleRegionToggle(region)}
                className={`px-4 py-2.5 rounded-xl text-xs font-display font-semibold border transition-all ${
                  isChecked
                    ? "bg-[#CC0000]/20 border-[#CC0000] text-[#CC0000]"
                    : "bg-[#12151B] border-[#262B34] text-[#A9AFB9] hover:text-[#F5F6F7]"
                }`}
              >
                {isChecked ? "✓ " : "+ "}
                {region}
              </button>
            );
          })}
        </div>
        {errors.operatingRegions && (
          <span className="text-xs text-[#E24C4C] mt-1 block">
            {errors.operatingRegions.message}
          </span>
        )}
      </div>

      {/* Additional info */}
      <div>
        <label className="block text-xs font-display font-semibold text-[#6E7580] uppercase mb-2">
          Experience & Additional Information
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Tell us about your oilfield/mining haul experience, safety records, certifications..."
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
            <span>Submitting Application...</span>
          </>
        ) : (
          <span>Submit Application →</span>
        )}
      </Button>
    </form>
  );
}
