// RegisterPage.jsx
"use client"

import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"
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
  const [lockoutRemaining, setLockoutRemaining] = useState(0)

  const handleBackToLogin = () => {
    if (typeof toggleRegister === "function") {
      toggleRegister()
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "")
      let formattedPhone = digitsOnly
      if (digitsOnly.length >= 4 && digitsOnly.length <= 6) {
        formattedPhone = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`
      } else if (digitsOnly.length > 6) {
        formattedPhone = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(
          3,
          6
        )}-${digitsOnly.slice(6, 10)}`
      }
      setForm((prev) => ({ ...prev, phone: formattedPhone }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  useEffect(() => {
    let interval
    if (lockoutRemaining > 0) {
      interval = setInterval(() => {
        setLockoutRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [lockoutRemaining])

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")
    setIsSubmitting(true)

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match")
      setIsSubmitting(false)
      return
    }

    try {
      const { auth, db } = await getFirebaseInstance()
      const emailKey = form.email.replace(/\./g, "_")
      const attemptRef = doc(db, "registration_attempts", emailKey)
      const attemptSnap = await getDoc(attemptRef)
      const now = new Date()

      if (attemptSnap.exists()) {
        const data = attemptSnap.data()
        if (data.timeoutUntil && data.timeoutUntil.toDate() > now) {
          const waitTime = Math.ceil((data.timeoutUntil.toDate() - now) / 1000)
          setLockoutRemaining(waitTime)
          setErrorMessage(
            `Too many failed attempts. Please wait ${waitTime} seconds.`
          )
          setIsSubmitting(false)
          return
        }
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )
      const user = userCredential?.user
      if (!user || !user.uid)
        throw new Error("Invalid user returned from Firebase.")

      await setDoc(doc(db, "users", user.uid), {
        fullName: form.fullName || null,
        email: form.email || null,
        phone: form.phone || null,
        company: form.company || null,
        businessType: form.businessType || null,
        website: form.website || null,
        createdAt: serverTimestamp(),
      })

      await setDoc(attemptRef, {
        attempts: 0,
        lastAttempt: null,
        timeoutUntil: null,
      })

      await signOut(auth)
      setSuccessMessage("Registration successful! Redirecting to login...")
      setTimeout(() => router.push("/dashboard/login"), 2000)
    } catch (error) {
      const { db } = await getFirebaseInstance()
      const emailKey = form.email.replace(/\./g, "_")
      const attemptRef = doc(db, "registration_attempts", emailKey)
      const attemptSnap = await getDoc(attemptRef)
      const now = new Date()
      let attempts = 1
      if (attemptSnap.exists()) {
        const data = attemptSnap.data()
        attempts = (data.attempts || 0) + 1
      }
      const delay = Math.min(Math.pow(2, attempts - 3) * 60, 86400)
      const timeoutUntil = new Date(now.getTime() + delay * 1000)

      await setDoc(attemptRef, {
        attempts,
        lastAttempt: now,
        timeoutUntil,
      })

      setLockoutRemaining(delay)
      setErrorMessage(error.message || "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    console.log("🔍 RegisterPage props", { embedded, toggleRegister })
  }, [embedded, toggleRegister])

  return (
    <>
      {(showSpinner || isSubmitting) && <InfinitePixelSpinner />}
      {lockoutRemaining > 0 && (
        <div className="text-center text-red-600 font-semibold">
          Please wait {lockoutRemaining} seconds before trying again.
        </div>
      )}
      <div className={`${embedded ? "" : "min-[svh]"} relative z-10 w-full`}>
        {!embedded && (
          <img
            alt="Background pattern"
            src="/circle-scatter-haikei.svg"
            className="absolute inset-0 z-0 object-cover w-full h-full pointer-events-none opacity-30"
          />
        )}
        <div className="relative z-10 max-w-3xl p-8 mx-auto bg-white shadow-xl rounded-2xl">
          <h1 className="mb-6 text-3xl font-bold text-center text-blue-900">
            {embedded ? "Register Below" : "Create Your Account"}
          </h1>
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              <Input
                icon={<FaPhone />}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                type="tel"
                required
                pattern="\d{3}-\d{3}-\d{4}"
                inputMode="numeric"
                maxLength={12}
              />
              <Input
                icon={<FaBuilding />}
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
              />
              <div className="col-span-1 md:col-span-2">
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            {errorMessage && (
              <p className="text-sm text-center text-red-500">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-sm text-center text-green-600">
                {successMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-600">
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
      <div className="absolute text-gray-400 -translate-y-1/2 pointer-events-none top-1/2 left-3">
        {icon}
      </div>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 flex items-center text-gray-500 right-3 focus:outline-none"
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
