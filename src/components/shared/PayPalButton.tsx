"use client";
import { useEffect, useRef, useState } from "react";

type PayPalButtonProps = {
  getOrderData: () => any;
  onSuccess?: (details?: any) => void;
  onError?: (error: any) => void;
  disabled?: boolean;
};

const PayPalButton: React.FC<PayPalButtonProps> = ({
  getOrderData,
  onSuccess,
  onError,
  disabled = false,
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if PayPal SDK is loaded
    if (!window.paypal) {
      setError("PayPal SDK not loaded");
      setIsLoading(false);
      return;
    }

    // Check if ref is available
    if (!paypalRef.current) {
      setIsLoading(false);
      return;
    }

    // Clear any existing buttons
    paypalRef.current.innerHTML = "";

    try {
      window.paypal
        .Buttons({
          fundingSource: window.paypal.FUNDING.PAYPAL,
          style: {
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal",
            height: 45,
          },
          createOrder: async (data: any, actions: any) => {
            try {
              setIsLoading(true);
              const orderData = getOrderData();

              // Validate required data
              if (!orderData.amount || orderData.amount <= 0) {
                throw new Error("Invalid amount");
              }

              const res = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
              });

              if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to create order");
              }

              const responseData = await res.json();

              if (!responseData.id) {
                throw new Error("Order ID not returned from server");
              }

              return responseData.id;
            } catch (err: any) {
              console.error("Create order error:", err);
              setError(err.message || "Failed to create order");
              onError?.(err);
              throw err; // Re-throw to prevent PayPal button from proceeding
            } finally {
              setIsLoading(false);
            }
          },
          onApprove: async (data: any, actions: any) => {
            try {
              setIsLoading(true);

              // Capture the order
              const response = await fetch(`/api/paypal/capture-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderID: data.orderID }),
              });

              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Payment capture failed");
              }

              const captureData = await response.json();

              // Call success callback with capture details
              onSuccess?.(captureData);
            } catch (err: any) {
              console.error("Payment capture error:", err);
              setError(err.message || "Payment failed");
              onError?.(err);
              alert("Payment failed: " + err.message);
            } finally {
              setIsLoading(false);
            }
          },
          onError: (err: any) => {
            console.error("PayPal Button Error:", err);
            setError("PayPal payment failed");
            onError?.(err);
            alert("Payment failed. Please try again.");
          },
          onCancel: (data: any) => {
            console.log("Payment cancelled by user", data);
            setError(null); // Clear any previous errors
          },
        })
        .render(paypalRef.current);
    } catch (err) {
      console.error("Failed to render PayPal button:", err);
      setError("Failed to initialize PayPal");
      setIsLoading(false);
    }
  }, [getOrderData, onSuccess, onError, disabled]);

  // Handle disabled state
  useEffect(() => {
    if (paypalRef.current) {
      const buttons = paypalRef.current.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = disabled;
        button.style.opacity = disabled ? "0.6" : "1";
      });
    }
  }, [disabled]);

  if (error) {
    return (
      <div className="paypal-error">
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="paypal-button-container">
      {isLoading && (
        <div className="paypal-loading">
          <span>Loading PayPal...</span>
        </div>
      )}
      <div
        ref={paypalRef}
        style={{
          opacity: disabled ? 0.6 : 1,
          pointerEvents: disabled ? "none" : "auto",
        }}
      />
    </div>
  );
};

export default PayPalButton;
