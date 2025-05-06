"use client"

import { useEffect, useRef, useState } from "react"
import { signOut } from "firebase/auth"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import ThemeSwitch from "@ui/ThemeSwitch"

const timeoutOptions = [
  { label: "seconds", value: 0.17 },
  { label: "1 hour", value: 60 },
  { label: "2 hours", value: 120 },
  { label: "4 hours", value: 240 },
  { label: "8 hours", value: 480 },
  { label: "12 hours", value: 720 },
]

export default function SettingsPage() {
  const [timeoutDuration, setTimeoutDuration] = useState(10) // in minutes
  const [countdown, setCountdown] = useState(60)
  const [showModal, setShowModal] = useState(false)

  const activityTimer = useRef(null)
  const countdownTimer = useRef(null)

  const logoutUser = async () => {
    const { auth } = await getFirebaseInstance()
    await signOut(auth)
    window.location.href = "/dashboard/login" // redirect to dashboard login page
  }

  const resetInactivityTimer = () => {
    if (showModal) return

    clearTimeout(activityTi.current)
    clearInterval(countdownTimer.current)
    setCountdown(60)

    activityTimer.current = setTimeout(() => {
      setShowModal(true)
      let counter = 60
      countdownTimer.current = setInterval(() => {
        counter -= 1
        setCountdown(counter)
        if (counter <= 0) {
          clearInterval(countdownTimer.current)
          logoutUser()
        }
      }, 1000)
    }, timeoutDuration * 60 * 1000 - 60000)
  }

  useEffect(() => {
    const refreshToken = async () => {
      const { auth } = await getFirebaseInstance()
      const user = auth.currentUser
      if (user) {
        try {
          await user.getIdToken(true)
        } catch (err) {
          console.error("Token refresh failed:", err)
        }
      }
    }
    refreshToken()
  }, [])

  let activityTimeout

  const handleActivity = () => {
    if (!showModal) {
      clearTimeout(activityTimeout)
      activityTimeout = setTimeout(() => {
        resetInactivityTimer()
      }, 500) // delay actual reset to prevent rapid repeat
    }
  }

  return (
    <div className="space-y-6">
      <section className="bg-slate-50  dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Appearance
        </h2>
        <div className="flex justify-between items-center">
          <ThemeSwitch />
        </div>
      </section>

      <section className="bg-white backdrop-opacity-50 dark:bg-gray-800 shadow p-6 rounded-lg">
        <h2 className="mb-4 font-semibold text-gray-900 dark:text-gray-100 text-xl">
          Inactivity Timeout
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label htmlFor="timeout" className="text-gray-700 dark:text-gray-300">
            Automatically log me out after:
          </label>
          <select
            id="timeout"
            value={timeoutDuration}
            onChange={(e) => setTimeoutDuration(Number(e.target.value))}
            className="mt-1 block w-full sm:w-auto bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md p-2"
          >
            {timeoutOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 w-11/12 max-w-md text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Inactivity Detected
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You will be logged out in{" "}
              <span className="font-bold">{countdown}</span> seconds.
            </p>
            <button
              onClick={() => {
                setShowModal(false)
                setTimeout(() => resetInactivityTimer(), 100) // Give DOM time to fully unmount
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Stay Logged In
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
