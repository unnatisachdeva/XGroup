"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { careersFormSchema, CareersFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

interface CareersAppFormProps {
  jobTitle: string;
  jobSlug: string;
}

export function CareersAppForm({ jobTitle, jobSlug }: CareersAppFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareersFormValues>({
    resolver: zodResolver(careersFormSchema),
    defaultValues: {
      jobSlug,
    },
  });

  const onSubmit = async (data: CareersFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/careers-application", {
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
      <div className="p-8 sm:p-10 rounded-2xl bg-[#191D25] border border-[#3FAE6B]/40 text-center flex flex-col items-center gap-4 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-[#3FAE6B]/10 border border-[#3FAE6B]/30 flex items-center justify-center text-[#3FAE6B]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display font-extrabold text-xl text-[#F5F6F7]">
          Application Submitted
        </h3>
        <p className="text-[#A9AFB9] text-sm leading-relaxed">
          Your application for <strong className="text-[#F5F6F7]">{jobTitle}</strong> has been received by our operations & safety department.
        </p>
        <button onClick={() => setIsSuccess(false)} className="btn-secondary text-xs mt-2">
          Apply Again / Modify Details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 sm:p-8 rounded-2xl bg-[#191D25] border border-[#262B34] flex flex-col gap-5 shadow-2xl"
    >
      <div className="border-b border-[#262B34] pb-3">
        <span className="eyebrow-label text-[11px]">Apply Now</span>
        <h3 className="font-display font-bold text-xl text-[#F5F6F7] mt-1">
          Apply for {jobTitle}
        </h3>
      </div>

      {serverError && (
        <div className="p-3 rounded-xl bg-[#E24C4C]/10 border border-[#E24C4C]/30 text-[#E24C4C] text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-1.5">
          Full Name <span className="text-[#CC0000]">*</span>
        </label>
        <input
          {...register("fullName")}
          type="text"
          placeholder="Alex Mercer"
          className="w-full px-4 py-2.5 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
        />
        {errors.fullName && (
          <span className="text-xs text-[#E24C4C] mt-1 block">{errors.fullName.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-1.5">
            Email Address <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="alex@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
          {errors.email && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-1.5">
            Phone Number <span className="text-[#CC0000]">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(780) 555-0199"
            className="w-full px-4 py-2.5 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
          />
          {errors.phone && (
            <span className="text-xs text-[#E24C4C] mt-1 block">{errors.phone.message}</span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-1.5">
          Resume Link / LinkedIn Profile / Document URL <span className="text-[#CC0000]">*</span>
        </label>
        <input
          {...register("resumeLink")}
          type="text"
          placeholder="https://linkedin.com/in/profile or drive link"
          className="w-full px-4 py-2.5 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
        />
        {errors.resumeLink && (
          <span className="text-xs text-[#E24C4C] mt-1 block">{errors.resumeLink.message}</span>
        )}
      </div>

      <div>
        <label className="block text-xs font-display font-semibold text-[#A9AFB9] uppercase mb-1.5">
          Tell Us About Yourself & Experience <span className="text-[#CC0000]">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Summarize your Class 1 (AZ) history, oilfield rig move experience, or dispatch background..."
          className="w-full px-4 py-2.5 rounded-xl bg-[#12151B] border border-[#262B34] text-[#F5F6F7] placeholder-[#6E7580] focus:outline-none focus:border-[#CC0000] text-sm"
        />
        {errors.message && (
          <span className="text-xs text-[#E24C4C] mt-1 block">{errors.message.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            className="mt-0.5 rounded bg-[#12151B] border-[#262B34] text-[#CC0000] focus:ring-[#CC0000]"
          />
          <span className="text-xs text-[#A9AFB9]">
            I agree to the collection and use of my application details as per Privacy Policy.
          </span>
        </label>
        {errors.agreeToTerms && (
          <span className="text-xs text-[#E24C4C]">{errors.agreeToTerms.message}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full justify-center mt-1"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Application →</span>
        )}
      </Button>
    </form>
  );
}
