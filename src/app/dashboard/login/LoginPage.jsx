"use client"

import React, { useState } from "react"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"
import { signInWithEmailAndPassword } from "firebase/auth"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import Link from "next/link"
import InfinitePixelSpinner from "@/app/components/utils/InfinitePixelSpinner"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)

    try {
      const { auth } = await getFirebaseInstance()
      await signInWithEmailAndPassword(auth, email, password)
      console.log("User logged in successfully")
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      setErrorMessage("Invalid email or password.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {(showSpinner || isSubmitting) && <InfinitePixelSpinner />}

      <div className="relative grid w-full h-screen place-items-center px-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 overflow-hidden">
        <img
          src="/circle-scatter-haikei.svg"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full opacity-50 md:opacity-5 object-cover z-0 pointer-events-none"
        />
        <div className="relative z-10 w-full max-w-md col-span-4 p-8 bg-white shadow-lg rounded-2xl">
          <h1 className="mb-6 text-3xl font-bold text-center text-blue-950">
            Login
          </h1>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full py-2 pl-10 pr-4 transition-colors border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute text-gray-400 transform -translate-y-1/2 top-1/2 left-3" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full py-2 pl-10 pr-10 transition-colors border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}

            <p className="pr-2 mt-1 text-sm text-right text-gray-500">
              <Link
                href="/dashboard/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="flex items-center justify-center mt-4">
            <p className="text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/dashboard/register"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
