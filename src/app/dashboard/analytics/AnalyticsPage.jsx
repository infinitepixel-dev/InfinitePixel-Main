"use client"

import React, { useEffect, useState } from "react"
import gsap from "gsap"
import { FaEye, FaUsers, FaRegChartBar } from "react-icons/fa"

export default function AnalyticsPage() {
  const [data, setData] = useState(null)
  const [gaId, setGaId] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAnalyticsData = async (measurementId) => {
    if (!measurementId) return
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"

    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${baseUrl}/analytics?gaId=${measurementId}`)

      if (!res.ok) {
        throw new Error(`API returned ${res.status}: ${res.statusText}`)
      }

      const result = await res.json()
      setData(result)
    } catch (err) {
      console.error("Failed to fetch analytics data:", err)
      setError("Failed to fetch analytics data.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const id = localStorage.getItem("gaId")
    setGaId(id)
    fetchAnalyticsData(id)

    const onGaIdChange = () => {
      const newId = localStorage.getItem("gaId")
      setGaId(newId)
      fetchAnalyticsData(newId)
    }

    window.addEventListener("gaIdChanged", onGaIdChange)
    return () => window.removeEventListener("gaIdChanged", onGaIdChange)
  }, [])

  useEffect(() => {
    if (data) {
      gsap.from(".analytics-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      })
    }
  }, [data])

  const cards = [
    {
      title: "Page Views",
      icon: <FaEye className="text-3xl text-indigo-500" />,
      value: data?.pageViews || 0,
    },
    {
      title: "Users",
      icon: <FaUsers className="text-3xl text-green-500" />,
      value: data?.users || 0,
    },
    {
      title: "Bounce Rate",
      icon: <FaRegChartBar className="text-3xl text-pink-500" />,
      value: `${data?.bounceRate || 0}%`,
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Analytics Overview
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          Loading analytics...
        </p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : data ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="analytics-card bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-start space-y-4 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center space-x-4">
                {card.icon}
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {card.title}
                </h3>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No data available. Connect your GA account.
        </p>
      )}
    </div>
  )
}
