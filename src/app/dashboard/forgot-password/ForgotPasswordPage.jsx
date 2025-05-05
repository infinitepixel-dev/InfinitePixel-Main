"use client"

import { useState } from "react"
import { FaEnvelope } from "react-icons/fa"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (element) => {
    element.preventDefault()
    if (!email) return

    // TODO: Add Firebase password reset logic here
    setSubmitted(true)
  }

  return (
    <div className="relative grid w-full h-screen place-items-center px-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 overflow-hidden">
      <img
        src="/circle-scatter-haikei.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full opacity-50 md:opacity-5 object-cover z-0 pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-md col-span-4 p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-3xl font-bold text-center text-blue-900">
          Forgot Password
        </h2>

        {submitted ? (
          <p className="text-green-600 text-sm text-center">
            If an account exists for <strong>{email}</strong>, a password reset
            link will be sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-2 pl-10 pr-4 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-sm text-center text-gray-500 mt-4">
          <Link
            href="/dashboard/login"
            className="text-blue-500 hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  )
}
