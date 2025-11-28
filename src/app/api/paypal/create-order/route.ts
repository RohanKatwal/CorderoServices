// /api/paypal/create-order.ts
import { NextRequest, NextResponse } from "next/server";
import { serviceOptions, companyOptions } from "@/constants";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string(),
  services: z.string(),
  note: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = orderSchema.parse(body);

    const service = serviceOptions.find((s) => s.value === parsed.services);
    if (!service)
      return NextResponse.json({ error: "Invalid service" }, { status: 400 });
    if (!companyOptions.find((c) => c.value === parsed.company))
      return NextResponse.json({ error: "Invalid company" }, { status: 400 });

    const amount = service.price.toFixed(2);

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
    const secret = process.env.PAYPAL_SECRET!;
    const basicAuth = Buffer.from(`${clientId}:${secret}`).toString("base64");

    const tokenRes = await fetch(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      }
    );
    const tokenData = await tokenRes.json();

    const orderRes = await fetch(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [{ amount: { currency_code: "USD", value: amount } }],
        }),
      }
    );

    const order = await orderRes.json();
    if (!order.id) throw new Error("PayPal order ID not returned");

    return NextResponse.json({ id: order.id });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Invalid request" },
      { status: 400 }
    );
  }
}
