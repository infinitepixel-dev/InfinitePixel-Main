// components/Analytics.jsx
"use client"

import React, { useEffect, useState } from "react"
import gsap from "gsap"

export default function AnalyticsPage({ data }) {
  useEffect(() => {
    gsap.from(".analytics-card", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {data ? (
        <>
          <div className="analytics-card bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Page Views</h3>
            <p className="text-2xl">{data.pageViews}</p>
          </div>
          <div className="analytics-card bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Users</h3>
            <p className="text-2xl">{data.users}</p>
          </div>
          <div className="analytics-card bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Bounce Rate</h3>
            <p className="text-2xl">{data.bounceRate}%</p>
          </div>
        </>
      ) : (
        <p className="text-center col-span-3 text-gray-600">
          No data available. Connect your GA account.
        </p>
      )}
    </div>
  )
}
