"use client";
import { useEffect, useRef } from "react";

type PayPalButtonProps = {
  getOrderData: () => any;
  onSuccess?: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  getOrderData,
  onSuccess,
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !paypalRef.current) return;
    // @ts-ignore
    if (!window.paypal) return;

    window.paypal
      .Buttons({
        fundingSource: window.paypal.FUNDING.PAYPAL, // Only show PayPal
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
        createOrder: async () => {
          const orderData = getOrderData();
          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
          });
          const data = await res.json();
          if (!data.id) throw new Error(data.error || "Order ID not returned");
          return data.id;
        },
        onApprove: async () => {
          alert("Payment successful!");
          if (onSuccess) onSuccess();
        },
        onError: (err: any) => {
          console.error(err);
          alert("Payment failed!");
        },
      })
      .render(paypalRef.current);
  }, [getOrderData, onSuccess]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;
