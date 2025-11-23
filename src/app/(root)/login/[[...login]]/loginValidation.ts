import * as z from "zod";

export const loginValidation = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password length must be of 8 characters" }),
});

export type LoginType = z.infer<typeof loginValidation>