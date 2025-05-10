"use client"

import React, { useEffect, useState } from "react"
import gsap from "gsap"
import {
  FaEye,
  FaUsers,
  FaRegChartBar,
  FaClock,
  FaChartLine,
} from "react-icons/fa"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

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
      description: "Total number of page views over the past 30 days.",
    },
    {
      title: "Users",
      icon: <FaUsers className="text-3xl text-green-500" />,
      value: data?.users || 0,
      description: "Unique visitors who accessed your site this month.",
    },
    {
      title: "Bounce Rate",
      icon: <FaRegChartBar className="text-3xl text-pink-500" />,
      value: `${data?.bounceRate || 0}%`,
      description:
        "Percentage of users who left without interacting. Lower is better.",
    },
    {
      title: "Sessions",
      icon: <FaChartLine className="text-3xl text-blue-500" />,
      value: data?.sessions || 0,
      description: "Total number of visits including returning users.",
    },
    {
      title: "Avg. Session Duration",
      icon: <FaClock className="text-3xl text-yellow-500" />,
      value: data?.avgSessionDuration || "0:00",
      description: "Average time users spend per visit.",
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
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="analytics-card bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col items-start space-y-4 hover:scale-[1.02] transition-transform"
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
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {data.pageViewsByDay && data.pageViewsByDay.length > 0 && (
            <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Page Views Over the Past Week
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data.pageViewsByDay}>
                  <XAxis dataKey="date" stroke="#8884d8" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No data available. Connect your GA account.
        </p>
      )}
    </div>
  )
}
