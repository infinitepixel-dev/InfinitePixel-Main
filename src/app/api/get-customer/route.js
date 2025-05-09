import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();
    console.log("Received email:", email);

    if (!email) {
      console.log("No email provided");
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Fetch the customer by email
    const customers = await stripe.customers.list({ email });
    console.log("Customers found:", customers.data.length);

    if (customers.data.length === 0) {
      console.log("No customer found for email:", email);
      return NextResponse.json(
        { error: "No customer found with this email" },
        { status: 404 }
      );
    }

    const customer = customers.data[0];
    const customerId = customer.id;
    console.log("Customer ID found:", customerId);

    // Fetch all subscriptions for the customer
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
    });
    console.log("Subscriptions found:", subscriptions.data.length);

    let subscriptionId = null;

    if (subscriptions.data.length > 0) {
      subscriptionId = subscriptions.data[0].id;
      console.log("Active subscription ID:", subscriptionId);
    } else {
      console.log("No active subscriptions found for customer:", customerId);
    }

    return NextResponse.json({ customerId, subscriptionId });
  } catch (error) {
    console.error("Error fetching customer and subscriptions:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
