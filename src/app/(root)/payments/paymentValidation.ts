import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name is too short" })
    .trim(),

  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),

  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(7, { message: "Invalid phone number" })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Phone number must be a valid international format (E.164)",
    }),

  company: z
    .string()
    .min(1, { message: "Company name is required" })
    .trim()
    .refine((val) => val.length > 0, {
      message: "Company name cannot be empty",
    }),

  services: z
    .string()
    .min(1, { message: "Service is required" })
    .trim()
    .refine((val) => val.length > 0, {
      message: "Service cannot be empty",
    }),

  amount: z.number().min(1, { message: "Select a service" }).readonly(),

  note: z.string().optional(),
});

export type PaymentType = z.infer<typeof formSchema>;
