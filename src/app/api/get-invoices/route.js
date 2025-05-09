//get-invoices
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { customerId } = await request.json();

    const invoices = await stripe.invoices.list({
      customer: customerId,
    });

    return NextResponse.json({ data: invoices.data });
  } catch (error) {
    console.error("Error fetching invoices:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
