//ForgotPasswordPage.jsx
"use client";

import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseInstance } from "@/lib/firebaseClient";

export default function ForgotPasswordPage({
  embedded = false,
  toggleForgotPassword = () => {},
  setShowSpinner,
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleBackToLogin = () => {
    console.log("embedded", embedded);

    console.log("Back to login clicked", toggleForgotPassword);
    if (typeof toggleForgotPassword === "function") {
      //clear the form data
      // setForm({
      //   fullName: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      //   phone: "",
      //   company: "",
      //   businessType: "",
      //   website: "",
      // });

      // //set country code to US/CA
      // setForm((prev) => ({ ...prev, countryCode: "+1" }));
      toggleForgotPassword();
    } else {
      console.warn(
        "toggleForgotPassword is not a function",
        toggleForgotPassword
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email) return;

    try {
      const { auth } = await getFirebaseInstance();
      await sendPasswordResetEmail(auth, email);
      setSubmitted(true);
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage(
        error?.message || "An error occurred while sending reset email."
      );
    }
  };

  useEffect(() => {
    console.log("🔍 ForgotPassword props", { embedded, toggleForgotPassword });
  }, [embedded, toggleForgotPassword]);

  return (
    <div>
      <div className="z-10 relative col-span-4 bg-white shadow-lg p-8 rounded-2xl w-full">
        <h2 className="mb-6 font-bold text-blue-950 text-3xl text-center">
          Forgot Password
        </h2>

        {submitted ? (
          <p className="text-slate-500 text-sm text-center">
            If an account exists for <strong>{email}</strong>, a password reset
            link will be sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="py-2 pr-4 pl-10 border-0 border-gray-300 border-b-2 focus:border-blue-500 focus:outline-none w-full"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 text-sm text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg w-full text-white"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="mt-4 text-gray-500 text-sm text-center">
          <button
            type="button"
            onClick={handleBackToLogin}
            className="text-blue-500 hover:underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
}

ForgotPasswordPage.propTypes = {
  embedded: PropTypes.bool,
  toggleForgotPassword: PropTypes.func,
  setShowSpinner: PropTypes.func,
};
