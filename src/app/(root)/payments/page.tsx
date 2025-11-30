"use client";

import Input from "@/components/shared/Input";
import Navbar from "@/components/shared/Navbar";
import Select from "@/components/shared/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema, PaymentType } from "./paymentValidation";
import { companyOptions, serviceOptions } from "@/constants";
import { useEffect, useState } from "react";
import PayPalButton from "@/components/shared/PayPalButton";
import Script from "next/script";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const PaymentsPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  const {
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
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

  const selectedServiceValue = watch("services");

  useEffect(() => {
    const selected = serviceOptions.find(
      (s) => s.value === selectedServiceValue
    );
    if (selected) setValue("amount", selected.price);
  }, [selectedServiceValue, setValue]);

  const handlePaymentSuccess = async (orderID: string) => {
    const formData = getValues();

    setPaymentDetails({ orderID, ...formData });
    setPaymentSuccess(true);

    try {
      const serviceLabel =
        serviceOptions.find((s) => s.value === formData.services)?.label ||
        formData.services;

      const templateParams = {
        order_id: orderID,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        company: formData.company,
        service: serviceLabel,
        amount: `$${formData.amount}`,
        note: formData.note || "N/A",
        payment_date: new Date().toLocaleString(),
        to_email: formData.email,
        to_name: formData.name,
      };

      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID!,
        templateParams
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        {
          ...templateParams,
          to_email: process.env.ADMIN_EMAIL,
          to_name: "Admin",
        }
      );

      console.log("Confirmation emails sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Payment successful! There was a problem sending the confirmation email – we will contact you shortly.");
    }
    reset();
  };

  if (paymentSuccess) {
    return (
      <>
        <Navbar pageName="corderoservices" />
        <div className="container payment-wrapper">
          <div className="payment-success-message">
            <div className="success-icon">✓</div>
            <h1>Payment Successful!</h1>
            <p className="success-subtitle">
              Thank you! Your transaction has been completed.
            </p>

            <div className="payment-details-card">
              <h3>Payment Details</h3>
              <div className="detail-row">
                <span className="detail-label">Order ID:</span>
                <span className="detail-value">{paymentDetails?.orderID}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{paymentDetails?.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{paymentDetails?.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Service:</span>
                <span className="detail-value">
                  {
                    serviceOptions.find(
                      (s) => s.value === paymentDetails?.services
                    )?.label
                  }
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Amount:</span>
                <span className="detail-value">${paymentDetails?.amount}</span>
              </div>
            </div>

            <p className="email-notification">
              A confirmation email has been sent to{" "}
              <strong>{paymentDetails?.email}</strong>
            </p>

            <button
              className="btn-primary"
              onClick={() => {
                setPaymentSuccess(false);
                setPaymentDetails(null);
              }}
            >
              Back to Form
            </button>
          </div>
        </div>

        <style jsx>{`
          .payment-success-message {
            text-align: center;
            max-width: 600px;
            margin: 50px auto;
            padding: 40px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .success-icon {
            width: 80px;
            height: 80px;
            background: #10b981;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            margin: 0 auto 20px;
            animation: scaleIn 0.5s ease-out;
          }
          @keyframes scaleIn {
            from {
              transform: scale(0);
            }
            to {
              transform: scale(1);
            }
          }
          .payment-success-message h1 {
            color: #10b981;
            font-size: 32px;
            margin-bottom: 10px;
          }
          .success-subtitle {
            color: #6b7280;
            margin-bottom: 30px;
          }
          .payment-details-card {
            background: #f9fafb;
            border-radius: 8px;
            padding: 24px;
            margin: 30px 0;
            text-align: left;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: #6b7280;
            font-weight: 500;
          }
          .detail-value {
            color: #111827;
            font-weight: 600;
          }
          .email-notification {
            background: #dbeafe;
            color: #1e40af;
            padding: 12px 20px;
            border-radius: 6px;
            margin: 20px 0;
          }
          .btn-primary {
            background: #3b82f6;
            color: white;
            padding: 12px 32px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 20px;
          }
          .btn-primary:hover {
            background: #2563eb;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Navbar pageName="corderoservices" />
      <div className="container payment-wrapper">
        <div className="heading">
          <h1>Make a Payment</h1>
          <p>Fast and secure payments for all our services.</p>
        </div>

        <div className="contact-content">
          <form className="form">
            <Input
              type="text"
              label="Name"
              name="name"
              placeholder="John Doe"
              register={register("name")}
              error={errors.name?.message}
            />
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="john@example.com"
              register={register("email")}
              error={errors.email?.message}
            />
            <Input
              type="tel"
              name="phone"
              label="Phone"
              placeholder="099 123 4567"
              register={register("phone")}
              error={errors.phone?.message}
            />
            <Select
              name="company"
              label="Company"
              options={companyOptions}
              register={register("company")}
              error={errors.company?.message}
            />
            <Select
              name="service"
              label="Service"
              options={serviceOptions}
              register={register("services")}
              error={errors.services?.message}
            />
            <Input
              name="amount"
              label="Amount (USD)"
              readonly={true}
              register={register("amount")}
              error={errors.amount?.message}
              type="number"
            />
            <Input
              type="text"
              name="note"
              label="Note (optional)"
              placeholder="Additional details"
              register={register("note")}
              error={errors.note?.message}
            />
          </form>

          <div className="contact-right">
            <h3>Payment Method</h3>

            <Script
              src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD&disable-funding=card,credit`}
              strategy="afterInteractive"
            />

            <PayPalButton
              getOrderData={() => {
                const values = getValues();
                const validation = formSchema.safeParse(values);
                if (!validation.success) {
                  toast.error("Please fill all required fields correctly");
                  throw new Error("Validation failed");
                }
                return {
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  company: values.company,
                  services: values.services,
                  note: values.note || "",
                };
              }}
              onSuccess={handlePaymentSuccess}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
