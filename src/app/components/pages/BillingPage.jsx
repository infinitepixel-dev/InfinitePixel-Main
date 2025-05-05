// BillingPage.jsx

"use client"

import React from "react"

export default function BillingPage() {
  return (
    <div className="space-y-10">
      {/* 1. Subscription Overview */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Subscription Details</h2>
        <ul className="space-y-2 text-sm text-gray-700">
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
        <div className="mt-4 space-x-2">
          <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Update Plan
          </button>
          <button className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50">
            Cancel Plan
          </button>
        </div>
      </section>

      {/* 2. Payment Method */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <p className="text-sm text-gray-700 mb-2">Visa **** 4242</p>
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Update Payment Method
        </button>
      </section>

      {/* 3. Invoice History */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Invoice History</h2>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-600 uppercase bg-gray-100">
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">May 1, 2025</td>
              <td className="px-4 py-2">$29.00</td>
              <td className="px-4 py-2">Paid</td>
              <td className="px-4 py-2 text-blue-600 underline cursor-pointer">
                Download
              </td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </section>

      {/* 4. Change Plan */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Change Plan</h2>
        <p className="text-sm text-gray-700 mb-4">
          Need more features? Change your plan below.
        </p>
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </section>

      {/* 5. Cancel Subscription */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-red-600">
          Cancel Subscription
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          You’ll retain access until the end of your billing period.
        </p>
        <button className="px-4 py-2 text-red-600 border border-red-600 rounded hover:bg-red-50">
          Cancel Plan
        </button>
      </section>

      {/* 6. Billing Contact Info */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Billing Contact Info</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Tax ID"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Billing Address"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Save Info
          </button>
        </form>
      </section>
    </div>
  )
}
