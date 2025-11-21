"use client";

import Input from "@/components/shared/Input";
import Navbar from "@/components/shared/Navbar";
import Select from "@/components/shared/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  note: z.string().optional(),
});

export const companyOptions = [
  {
    label: "OFTTARQ",
    value: "offtarq",
  },
  {
    label: "INMO CODERO",
    value: "inmocodero",
  },
  {
    label: "Other",
    value: "other",
  },
];

const Payments = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm<z.infer<typeof formSchema>>(
    {
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: undefined,
        company: "",
        note: "",
      },
    }
  );

  const handleFormSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <>
      <Navbar pageName="corderoservices" />
      <div className="container payment-wrapper">
        <div className="heading">
          <h1>Realizar pago</h1>
          <p>Pagos rápidos y seguros para todos nuestros servicios.</p>
        </div>
        <div className="contact-content">
          <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <Input
              type="text"
              label="Name"
              name="name"
              placeholder="Type Here..."
              error={errors.name?.message}
              register={register("name")}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Demo@gmail.com"
              error={errors.email?.message}
              register={register("email")}
            />
            <Input
              type="tel"
              label="Phone"
              name="phone"
              placeholder="099 |"
              error={errors.phone?.message}
              register={register("phone")}
            />
            <Select
              options={companyOptions}
              label="Company/Services"
              name="company"
              error={errors.company?.message}
              register={register("company")}
            />
            <Input
              type="text"
              label="Payment Note"
              name="note"
              placeholder="Add Additional Notes"
              error={errors.note?.message}
              register={register("note")}
            />
          </form>
          <div>
            <div className="contact-right">
              <h3>
                Payment Method
              </h3>
            </div>
            <div className="contact-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
