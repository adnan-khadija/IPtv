import { NextResponse } from "next/server";
import { plans } from "@/lib/data/plans";

async function getPayPalAccessToken() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const paypalUrl = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials are not configured in environment variables");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(`${paypalUrl}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to retrieve PayPal access token: ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, email } = body;

    if (!planId || !email) {
      return NextResponse.json(
        { error: "Missing required fields (planId or email)" },
        { status: 400 }
      );
    }

    // Resolve price dynamically from plans data to prevent customer price manipulation
    const plan = plans.find((p) => p.id === planId);
    if (!plan) {
      return NextResponse.json({ error: "Invalid Plan ID" }, { status: 400 });
    }

    const price = plan.price.toFixed(2);
    const accessToken = await getPayPalAccessToken();
    const paypalUrl = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

    const response = await fetch(`${paypalUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "CHF",
              value: price,
            },
            description: `StreamVault IPTV — ${plan.duration}`,
            custom_id: email, // Store buyer email in custom_id for webhook/order tracking
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `PayPal Order Creation failed: ${errorText}` },
        { status: 500 }
      );
    }

    const orderData = await response.json();
    return NextResponse.json({ orderId: orderData.id });
  } catch (error) {
    console.error("Create PayPal Order Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
