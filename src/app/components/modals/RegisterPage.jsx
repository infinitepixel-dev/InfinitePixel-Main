//RegisterPage.jsx
"use client"

import PropTypes from "prop-types"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import InfinitePixelSpinner from "@/app/components/utils/InfinitePixelSpinner"
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaBuilding,
  FaGlobe,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"

export default function RegisterPage({
  embedded = false,
  toggleRegister = () => {},
}) {
  const router = useRouter()

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    company: "",
    businessType: "",
    website: "",
  })

  const [disableInput, setDisableInput] = useState(false) // Dev toggle

  const countryCodes = [
    { code: "+1", label: "US/CA" },
    { code: "+44", label: "UK" },
    { code: "+61", label: "AU" },
    { code: "+64", label: "NZ" },
    { code: "+49", label: "DE" },
    { code: "+33", label: "FR" },
    { code: "+81", label: "JP" },
    { code: "+82", label: "KR" },
    { code: "+31", label: "NL" },
    { code: "+41", label: "CH" },
    { code: "+358", label: "FI" },
    { code: "+47", label: "NO" },
    { code: "+46", label: "SE" },
    { code: "+48", label: "PL" },
    { code: "+420", label: "CZ" },
    { code: "+43", label: "AT" },
    { code: "+34", label: "ES" },
    { code: "+39", label: "IT" },
    { code: "+52", label: "MX" },
    { code: "+91", label: "IN" },
  ]
  const businessTypes = [
    "Accounting",
    "Advertising & Marketing",
    "Agriculture",
    "Architecture & Design",
    "Automotive",
    "Construction",
    "Consulting",
    "Education & Training",
    "Entertainment",
    "Financial Services",
    "Food & Beverage",
    "Healthcare",
    "Hospitality",
    "IT & Software",
    "Legal Services",
    "Logistics & Transportation",
    "Manufacturing",
    "Media & Publishing",
    "Non-Profit",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Travel & Tourism",
    "Wholesale & Distribution",
    "Other",
  ]

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const handleBackToLogin = () => {
    console.log("embedded", embedded)

    console.log("Back to login clicked", toggleRegister)
    if (typeof toggleRegister === "function") {
      toggleRegister()
    } else {
      console.warn("toggleRegister is not a function", toggleRegister)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Format phone number as (XXX) XXX-XXXX
  const handlePhoneChange = (event) => {
    let numericValue = event.target.value.replace(/\D/g, "")
    if (numericValue.length <= 10) {
      const formatted = numericValue.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,4})$/,
        (match, p1, p2, p3) => {
          let result = ""
          if (p1) result += `(${p1}`
          if (p2) result += `)-${p2}`
          if (p3) result += `-${p3}`
          return result
        }
      )
      setForm((prev) => ({ ...prev, phone: formatted }))
    }
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")
    setIsSubmitting(true)

    const phoneNumber = form.phone.replace(/[^0-9]/g, "")
    const formattedPhone = `${form.countryCode}-${phoneNumber.slice(
      0,
      3
    )}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match")
      setIsSubmitting(false)
      return
    }

    try {
      const { auth, db } = await getFirebaseInstance()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      const user = userCredential?.user
      if (!user || !user.uid) {
        console.error("Firebase Auth returned an invalid user object:", user)
        setErrorMessage("Registration failed. Please try again.")
        setIsSubmitting(true)
        return
      }

      await setDoc(doc(db, "debug", "testWrite"), {
        status: "ok",
        time: new Date().toISOString(),
      })

      await setDoc(doc(db, "users", user.uid), {
        fullName: form.fullName || null,
        email: form.email || null,
        phone: formattedPhone || null,
        company: form.company || null,
        businessType: form.businessType || null,
        website: form.website || null,
        createdAt: serverTimestamp(),
      })

      const DASHBOARD_URL = "/dashboard"
      setSuccessMessage("Registration successful! Redirecting to dashboard...")
      setTimeout(() => router.push(DASHBOARD_URL), 2000)
    } catch (error) {
      console.error("Registration error:", error)
      setErrorMessage(error.message || "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (form.password !== form.confirmPassword) {
      setDisableInput(true)
    } else {
      setDisableInput(false)
    }
  }, [form.password, form.confirmPassword])

  useEffect(() => {
    console.log("🔍 RegisterPage props", { embedded, toggleRegister })
  }, [embedded, toggleRegister])

  return (
    <>
      {(showSpinner || isSubmitting) && <InfinitePixelSpinner />}

      <div className={`${embedded ? "" : "min-[svh]"} relative z-10 w-full`}>
        {!embedded && (
          <img
            alt="Background pattern"
            src="/circle-scatter-haikei.svg"
            className="z-0 absolute inset-0 opacity-30 w-full h-full object-cover pointer-events-none"
          />
        )}

        <div className="z-10 relative bg-white shadow-xl mx-auto p-8 rounded-2xl max-w-3xl">
          <h1 className="mb-6 font-bold text-blue-900 text-3xl text-center">
            {embedded ? "Register Below" : "Create Your Account"}
          </h1>

          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
              <Input
                icon={<FaUser />}
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <Input
                icon={<FaEnvelope />}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
              />

              <div className="flex gap-1">
                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg"
                >
                  {countryCodes.map(({ code, label }) => (
                    <option key={code} value={code}>
                      {`${label} (${code})`}
                    </option>
                  ))}
                </select>
                <Input
                  icon={<FaPhone />}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="(XXX)-XXX-XXXX"
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <Input
                icon={<FaBuilding />}
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="col-span-1 md:col-span-2"
              />

              <div className="col-span-1 md:col-span-2">
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                  className="bg-white px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-gray-700"
                >
                  <option value="">Select Business Type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                icon={<FaGlobe />}
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Website URL (optional)"
                type="url"
                full
              />
              <Input
                icon={<FaLock />}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                required
              />
              <Input
                icon={<FaLock />}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                type="password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || disableInput}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-3 rounded-lg w-full font-semibold text-white transition"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-gray-600 text-sm text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={handleBackToLogin}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

function Input({
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  full = false,
}) {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword ? (showPassword ? "text" : "password") : type

  return (
    <div className={`relative ${full ? "col-span-1 md:col-span-2" : ""}`}>
      <div className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2 pointer-events-none">
        {icon}
      </div>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="py-2 pr-10 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="right-3 absolute inset-y-0 flex items-center focus:outline-none text-gray-500"
          tabIndex={-1}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  )
}

RegisterPage.propTypes = {
  embedded: PropTypes.bool,
  toggleRegister: PropTypes.func,
}

Input.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  full: PropTypes.bool,
}
