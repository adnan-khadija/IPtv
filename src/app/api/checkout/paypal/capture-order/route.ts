import { NextResponse } from "next/server";

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
    const { orderId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: "Missing required fields (orderId)" },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const paypalUrl = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

    const response = await fetch(`${paypalUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `PayPal Order Capture failed: ${errorText}` },
        { status: 500 }
      );
    }

    const captureData = await response.json();

    // Check if the order status is COMPLETED or APPROVED (captured)
    const isCompleted = captureData.status === "COMPLETED";

    if (!isCompleted) {
      return NextResponse.json(
        { error: `PayPal payment capture is not completed. Status: ${captureData.status}` },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment captured successfully",
      details: captureData,
    });
  } catch (error) {
    console.error("Capture PayPal Order Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
