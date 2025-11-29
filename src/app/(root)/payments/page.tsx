"use client";

import Input from "@/components/shared/Input";
import Navbar from "@/components/shared/Navbar";
import Select from "@/components/shared/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, PaymentType } from "./paymentValidation";
import { companyOptions, serviceOptions } from "@/constants";
import { useEffect } from "react";
import PayPalButton from "@/components/shared/PayPalButton";
import Script from "next/script";

const PaymentsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    getValues,
  } = useForm<PaymentType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      services: "",
      amount: 0,
      note: "",
    },
  });
//check
  const selectedServiceValue = watch("services");

  useEffect(() => {
    const selected = serviceOptions.find(
      (s) => s.value === selectedServiceValue
    );

    if (selected) {
      setValue("amount", selected.price);
    }
  }, [selectedServiceValue, setValue]);

  const handleFormSubmit = async (data: PaymentType) => {
    const res = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // ⭐ send everything
    });

    const result = await res.json();

    window.location.href = result.links.find(
      (l: { href: string; rel: string; method: string }) => l.rel === "approve"
    ).href;
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
              label="Company"
              name="company"
              error={errors.company?.message}
              register={register("company")}
            />
            <Select
              options={serviceOptions}
              label="Services"
              name="service"
              error={errors.services?.message}
              register={register("services")}
            />
            <Input
              type="number"
              label="Amount"
              name="amount"
              placeholder="Amount"
              readonly={true}
              error={errors.amount?.message}
              register={register("amount")}
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
              <Script
                src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD&disable-funding=card,credit`}
                strategy="afterInteractive"
              />
              <PayPalButton
                getOrderData={() => {
                  const values = getValues();
                  return {
                    name: values.name || "Anonymous",
                    email: values.email || "anon@example.com",
                    phone: values.phone || "",
                    company: values.company || "",
                    services: values.services || "",
                    note: values.note || "",
                  };
                }} // getValues from react-hook-form
                onSuccess={() => {
                  console.log("Payment completed!");
                  // Optional: redirect or reset form
                }}
              />
            </div>
            <div className="contact-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
