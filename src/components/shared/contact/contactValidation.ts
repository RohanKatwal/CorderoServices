import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Imię jest wymagane" })
    .min(3, { message: "Imię jest za krótkie" }),
  email: z
    .string()
    .min(1, { message: "Adres e-mail jest wymagany" })
    .email({ message: "Nieprawidłowy adres e-mail" }),
  phone: z
    .string()
    .min(1, { message: "Numer telefonu jest wymagany" })
    .min(7, { message: "Nieprawidłowy numer telefonu" })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message:
        "Numer telefonu musi być w prawidłowym formacie międzynarodowym (E.164)",
    }),
  message: z
    .string()
    .min(1, { message: "Wiadomość jest wymagana" })
    .min(2, { message: "Wiadomość jest za krótka" }),
});

export type ContactType = z.infer<typeof contactSchema>;
