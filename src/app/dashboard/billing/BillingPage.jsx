// BillingPage.jsx
"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { useUser } from "@context/UserContext";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function BillingPage() {
  const { userEmail, userFirstName, checkingAuth } = useUser();
  console.log("userEmail", userEmail);

  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [customerId, setCustomerId] = useState(""); // Customer ID to fetch invoices
  const [subscriptionId, setSubscriptionId] = useState(""); // Subscription ID to cancel

  // Fetch Customer and Subscription
  const fetchCustomerAndSubscription = async () => {
    console.log("Fetching customer and subscription...");

    try {
      const res = await fetch("/api/get-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await res.json();
      console.log("Raw response data from get-customer:", data);

      const { customerId, subscriptionId, error } = data;

      if (error) {
        console.error("Error fetching customer data:", error);
        return;
      }

      console.log("Setting Customer ID:", customerId);
      console.log("Setting Subscription ID:", subscriptionId);

      setCustomerId(customerId);
      setSubscriptionId(subscriptionId);
    } catch (err) {
      console.error("Error fetching customer and subscription:", err);
    }
  };

  const handleSubscribe = async () => {
    try {
      setLoading(true);

      const email = userEmail;

      // Fetch the customer ID by email
      const resCustomer = await fetch("/api/get-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { customerId, error: customerError } = await resCustomer.json();

      if (customerError) {
        console.error("Error fetching customer:", customerError);
        setLoading(false);
        return;
      }

      // Proceed to create a checkout session
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId,
          planId: "price_1RMtDzDwhEl3Hack0LfQKjlk", //REVIEW planId hard coded to recurrding test..
        }),
      });

      const { sessionId, error } = await res.json();
      setLoading(false);

      if (error) {
        console.error("Checkout error:", error);
        return;
      }

      const stripe = await stripePromise;
      stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.error("Error during checkout:", err);
      setLoading(false);
    }
  };

  // Handle Cancel Subscription
  const handleCancelSubscription = async () => {
    console.log("Subscription ID before confirm dialog:", subscriptionId);

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel your subscription? This action cannot be undone."
    );

    if (!confirmCancel) return;

    console.log("Subscription ID after confirm dialog:", subscriptionId);

    try {
      setLoading(true);

      const res = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscriptionId }),
      });

      const { message, error } = await res.json();
      setLoading(false);

      if (error) {
        console.error("Error canceling subscription:", error);
        return;
      }

      alert(message);
      setSubscriptionId(""); // Reset subscription ID after cancellation
    } catch (err) {
      console.error("Error during subscription cancellation:", err);
      setLoading(false);
    }
  };

  // Fetch Invoices
  const fetchInvoices = async () => {
    try {
      console.log("Fetching invoices for customer ID:", customerId);

      const res = await fetch("/api/get-invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: customerId,
        }),
      });

      const { data, error } = await res.json();
      if (error) {
        console.error("Error fetching invoices:", error);
        return;
      }

      setInvoices(data);
    } catch (err) {
      console.error("Error fetching invoices:", err);
    }
  };

  // Effect to Fetch Customer and Subscription on Mount
  useEffect(() => {
    if (userEmail) {
      fetchCustomerAndSubscription();
    }
  }, [userEmail]);

  // Re-fetch invoices when subscriptionId is updated
  useEffect(() => {
    if (subscriptionId) {
      fetchInvoices();
    }
  }, [subscriptionId]);

  return (
    <div className="space-y-10">
      {/* 1. Subscription Overview */}
      <section className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Subscription Details
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>
            <strong>Status:</strong> Active
          </li>
          <li>
            <strong>Next Billing Date:</strong> June 1, 2025
          </li>
          <li>
            <strong>Billing Cycle:</strong> Monthly
          </li>
        </ul>
        <div className="space-x-2 mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            onClick={handleSubscribe}
            disabled={loading}
          >
            {loading ? "Processing..." : "Subscribe to Plan"}
          </button>
          <button
            onClick={handleCancelSubscription}
            disabled={loading}
            className="hover:bg-red-50 px-4 py-2 border border-red-600 rounded text-red-600"
          >
            Cancel Plan
          </button>
        </div>
      </section>

      {/* 3. Invoice History */}
      <section className="bg-white dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Invoice History
        </h2>
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs uppercase">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">PDF</th>
            </tr>
          </thead>
          <tbody>
            {invoices.length > 0 ? (
              invoices.map((invoice) => (
                <tr key={invoice.id} className="dark:border-gray-700 border-b">
                  <td className="px-4 py-2">
                    {new Date(invoice.created * 1000).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">${invoice.amount_due / 100}</td>
                  <td className="px-4 py-2">{invoice.status}</td>
                  <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                    <a
                      href={invoice.invoice_pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2" colSpan="4">
                  No invoices available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
