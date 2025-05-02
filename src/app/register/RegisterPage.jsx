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

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match")
      return
    }
    console.log("Firestore write success")
    try {
      // 1. Register the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      )
      const user = userCredential.user

      // 2. Store additional user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        businessType: form.businessType,
        website: form.website || "",
        createdAt: new Date(),
      })

      // 3. Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      setErrorMessage(error.message)
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
            <div className="relative">
              <FaUser className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                required
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaBuilding className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

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

            <div className="relative col-span-1 md:col-span-2">
              <FaGlobe className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="url"
                name="website"
                placeholder="Website URL (optional)"
                value={form.website}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-sm text-center text-red-500">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Register
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
