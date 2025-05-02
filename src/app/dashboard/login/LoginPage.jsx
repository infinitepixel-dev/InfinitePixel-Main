//LoginPage.jsx
"use client"

import React, { useState } from "react"
import { FaEnvelope, FaLock } from "react-icons/fa"
import { signInWithEmailAndPassword } from "firebase/auth"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import Link from "next/link"
import { useRouter } from "next/navigation"

const { auth } = await getFirebaseInstance()

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")

    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("User logged in successfully")
      router.push("/dashboard") // ✅ redirect after login
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className="grid w-full h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 place-items-center">
      <div className="w-full max-w-md col-span-4 p-8 bg-white shadow-lg rounded-2xl">
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full py-2 pl-10 pr-4 transition-colors border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <p className="pr-2 mt-1 text-sm text-right text-gray-500">
            <Link
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
