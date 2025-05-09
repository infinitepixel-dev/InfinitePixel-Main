import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received request body in cancel-subscription:", body);

    const { subscriptionId } = body;

    if (!subscriptionId) {
      console.log("No subscription ID provided");
      throw new Error("Subscription ID is required.");
    }

    console.log("Canceling subscription with ID:", subscriptionId);

    // Cancel the subscription with stripe
    const canceledSubscription = await stripe.subscriptions.cancel(
      subscriptionId
    );
    console.log("Canceled subscription:", canceledSubscription);

    return NextResponse.json({
      message: "Subscription canceled successfully",
      canceledSubscription,
    });
  } catch (error) {
    console.error("Error canceling subscription:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
