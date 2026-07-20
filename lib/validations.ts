import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  origin: z.string().min(2, "Origin location is required"),
  destination: z.string().min(2, "Destination location is required"),
  serviceType: z.enum(
    [
      "Oilfield & Energy Transport",
      "Mining & Bulk Hauling",
      "Heavy-Haul & Rig Moves",
      "Dedicated Capacity",
      "Other",
    ],
    { message: "Please select a service category" }
  ),
  commodity: z.string().min(2, "Commodity / load description is required"),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  pickupDate: z.string().optional(),
  notes: z.string().optional(),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the Privacy Policy",
  }),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const fleetFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  applyingAs: z.enum(["Company Driver", "Owner-Operator"], {
    message: "Please select an application type",
  }),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  equipmentType: z.string().optional(),
  numberOfUnits: z.string().optional(),
  operatingRegions: z
    .array(z.string())
    .min(1, "Select at least one operating region"),
  nscMcNumber: z.string().optional(),
  yearsExperience: z.string().optional(),
  message: z.string().optional(),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the Privacy Policy",
  }),
});

export type FleetFormValues = z.infer<typeof fleetFormSchema>;

export const careersFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  resumeLink: z.string().min(2, "Resume link or experience profile is required"),
  message: z
    .string()
    .min(10, "Please include a short message (min 10 characters)"),
  jobSlug: z.string().min(1, "Job role required"),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the Privacy Policy",
  }),
});

export type CareersFormValues = z.infer<typeof careersFormSchema>;
