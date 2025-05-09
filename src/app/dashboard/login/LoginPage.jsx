// LoginPage.jsx
"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import gsap from "gsap"
import "./LoginPage.css"
import { useReCaptcha } from "next-recaptcha-v3"

import { signInWithEmailAndPassword } from "firebase/auth"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import { getDoc, doc, setDoc } from "firebase/firestore"

import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"

import InfinitePixelSpinner from "@utils/InfinitePixelSpinner"

//INFO Modals
import RegisterPage from "@modals/RegisterPage"
import ForgotPasswordPage from "@modals/ForgotPasswordPage"

export default function LoginPage() {
  const { executeRecaptcha } = useReCaptcha()

  const [activePanel, setActivePanel] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [lockoutRemaining, setLockoutRemaining] = useState(0)

  const router = useRouter()
  const containerRef = useRef(null)

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

  const toggleRegister = () => {
    const isRegistering = activePanel === "login"
    setActivePanel(isRegistering ? "register" : "login")
    gsap.to(containerRef.current, {
      rotateY: isRegistering ? 180 : 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
  }

  const toggleForgotPassword = () => {
    const isForgotPassword = activePanel === "login"
    setActivePanel(isForgotPassword ? "forgot-password" : "login")
    gsap.to(containerRef.current, {
      rotateY: isForgotPassword ? 180 : 0,
      duration: 0.25,
      ease: "power3.inOut",
    })
  }

  const handleLoginSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)

    try {
      const { auth, db } = await getFirebaseInstance()
      const emailKey = email.replace(/\./g, "_")
      const attemptRef = doc(db, "login_attempts", emailKey)
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

      const token = await executeRecaptcha("login")
      if (!token) {
        throw new Error("ReCAPTCHA verification failed. Please try again.")
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const uid = userCredential.user.uid
      const docRef = doc(db, "users", uid)
      const userSnap = await getDoc(docRef)

      if (userSnap.exists()) {
        await setDoc(attemptRef, {
          attempts: 0,
          lastAttempt: null,
          timeoutUntil: null,
        })

        const userData = userSnap.data()
        const firstName = userData.fullName?.split(" ")[0] || "User"
        localStorage.setItem("userFirstName", firstName)
        router.push("/dashboard")
      } else {
        setErrorMessage("User profile not found. Please contact support.")
      }
    } catch (error) {
      const { db } = await getFirebaseInstance()
      const emailKey = email.replace(/\./g, "_")
      const attemptRef = doc(db, "login_attempts", emailKey)
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
      console.error("Login error:", error)
      setErrorMessage(error.message || "Invalid email or password.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {(showSpinner || isSubmitting) && <InfinitePixelSpinner />}
      {lockoutRemaining > 0 && (
        <div className="text-center text-red-600 font-semibold">
          Please wait {lockoutRemaining} seconds before trying again.
        </div>
      )}
      <div className="relative flex justify-center items-start md:items-center bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 px-4 pt-24 w-full min-h-screen">
        <img
          src="/circle-scatter-haikei.svg"
          alt="Background pattern"
          className="absolute inset-0 opacity-5 w-full h-full object-cover"
        />

        <div className="z-10 w-full max-w-2xl perspective-1000">
          <div ref={containerRef} className="ring-cylinder-container">
            {/* Login Panel */}
            <div
              className={`auth-card-ring login-panel ${
                activePanel === "login" ? "active" : "inactive"
              }`}
            >
              <div className="bg-white shadow-xl p-6 rounded-2xl">
                <h1 className="mb-6 font-bold text-blue-950 text-3xl text-center">
                  Login
                </h1>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="relative">
                    <FaEnvelope className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2 pr-4 pl-10 border-0 border-gray-300 border-b-2 focus:border-blue-500 focus:outline-none w-full"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaLock className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2 pr-10 pl-10 border-0 border-gray-300 border-b-2 focus:border-blue-500 focus:outline-none w-full"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="right-3 absolute inset-y-0 flex items-center focus:outline-none text-gray-500"
                      tabIndex={-1}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || lockoutRemaining > 0}
                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-2 rounded-lg w-full text-white transition"
                  >
                    {isSubmitting ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                <p className="mt-4 text-gray-500 text-sm text-center">
                  <button
                    onClick={toggleForgotPassword}
                    className="text-blue-500 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </p>

                <div className="mt-6 text-gray-500 text-sm text-center">
                  Don&apos;t have an account?{" "}
                  <button
                    onClick={toggleRegister}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>

            {/* Register Panel */}
            <div
              className={`auth-card-ring register-panel ${
                activePanel === "register" ? "active" : "inactive"
              }`}
            >
              <div>
                <RegisterPage
                  embedded={true}
                  setShowSpinner={setShowSpinner}
                  toggleRegister={toggleRegister}
                />
              </div>
            </div>

            {/* Forgot Password Panel */}
            <div
              className={`auth-card-ring forgot-password-panel ${
                activePanel === "forgot-password" ? "active" : "inactive"
              }`}
            >
              <div>
                <ForgotPasswordPage
                  embedded={true}
                  setShowSpinner={setShowSpinner}
                  toggleForgotPassword={toggleForgotPassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
