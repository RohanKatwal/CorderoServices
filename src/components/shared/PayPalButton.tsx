"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

type PayPalButtonProps = {
  getOrderData: () => any;
  onSuccess?: () => void;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  getOrderData,
  onSuccess,
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const buttonsRendered = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !paypalRef.current) return;
    if (buttonsRendered.current) return;
    if (!window.paypal) {
      console.error("PayPal SDK not loaded");
      return;
    }

    buttonsRendered.current = true;

    window.paypal
      .Buttons({
        fundingSource: window.paypal.FUNDING.PAYPAL,
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
        createOrder: async () => {
          try {
            const orderData = getOrderData();
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(orderData),
            });
            
            const data = await res.json();
            
            if (!data.id) {
              throw new Error(data.error || "Order ID not returned");
            }
            
            return data.id;
          } catch (error: any) {
            console.error("Create order error:", error);
            alert(error.message || "Failed to create order");
            throw error;
          }
        },
        onApprove: async (data: any) => {
          try {
            // Capture the payment
            const res = await fetch(`/api/paypal/capture-order`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });
            
            const result = await res.json();
            
            if (result.error) {
              throw new Error(result.error);
            }
            
            if (onSuccess) onSuccess();
          } catch (error: any) {
            console.error("Capture order error:", error);
            alert("Payment capture failed: " + error.message);
          }
        },
        onError: (err: any) => {
          console.error("PayPal error:", err);
          alert("Payment failed! Please try again.");
        },
        onCancel: () => {
          console.log("Payment cancelled by user");
          alert("Payment cancelled");
        },
      })
      .render(paypalRef.current);
  }, [getOrderData, onSuccess]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;