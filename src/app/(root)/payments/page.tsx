"use client";

import Input from "@/components/shared/Input";
import Navbar from "@/components/shared/Navbar";
import Select from "@/components/shared/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, PaymentType } from "./paymentValidation";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PaymentType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      note: "",
    },
  });

  const handleFormSubmit = (data: PaymentType) => {
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
              <h3>Payment Method</h3>
            </div>
            <div className="contact-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
