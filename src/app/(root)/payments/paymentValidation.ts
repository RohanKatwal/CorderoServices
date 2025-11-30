import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name is too short" })
    .trim(),

  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),

  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(7, { message: "Invalid phone number" }),

  company: z
    .string()
    .min(1, { message: "Company name is required" })
    .trim(),

  services: z
    .string()
    .min(1, { message: "Service is required" })
    .trim(),

  amount: z.number().min(1, { message: "Select a service" }),

  note: z.string().optional(),
});

export type PaymentType = z.infer<typeof formSchema>;
