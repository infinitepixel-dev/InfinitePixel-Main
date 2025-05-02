"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "@/lib/firebaseClient"
import { doc, setDoc } from "firebase/firestore"
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa"

export default function RegisterPage() {
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

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )

      const user = userCredential?.user

      if (!user || !user.uid) {
        console.error("Firebase Auth returned an invalid user object:", user)
        setErrorMessage("Registration failed. Please try again.")
        setIsSubmitting(false)
        return
      }

      await setDoc(doc(db, "users", user.uid), {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        businessType: form.businessType,
        website: form.website || "",
        createdAt: new Date(),
      })

      setSuccessMessage("Registration successful! Redirecting...")
      setTimeout(() => router.push("/dashboard"), 2000)
    } catch (error) {
      console.error("Registration error:", error)
      setErrorMessage(error.message || "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid w-full min-h-screen px-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 place-items-center">
      <div className="w-full max-w-3xl p-8 bg-white shadow-xl rounded-2xl">
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-900">
          Create Your Account
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
                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select Business Type</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Salon">Salon</option>
                <option value="Retail">Retail</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Professional Services">
                  Professional Services
                </option>
                <option value="Other">Other</option>
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
          <Link
            href="/dashboard/login"
            className="text-blue-500 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}

// ✅ Reusable Input component
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
  return (
    <div className={`relative ${full ? "col-span-1 md:col-span-2" : ""}`}>
      <div className="absolute text-gray-400 -translate-y-1/2 pointer-events-none left-3 top-1/2">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div>
  )
}
