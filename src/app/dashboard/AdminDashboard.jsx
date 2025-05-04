// AdminDashboard.jsx

"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import {
  FaTachometerAlt,
  FaCreditCard,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa"
import BillingPage from "@/app/components/pages/BillingPage"

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("Dashboard")
  const sidebarRef = useRef(null)

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        width: collapsed ? "4rem" : "16rem",
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [collapsed])

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Billing", icon: <FaCreditCard /> },
    { name: "Settings", icon: <FaCog /> },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "Billing":
        return <BillingPage />
      case "Dashboard":
        return (
          <h1 className="text-2xl font-bold mb-4">
            Welcome to the Admin Dashboard
          </h1>
        )
      case "Settings":
        return (
          <p className="text-lg text-gray-600">Settings content goes here.</p>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen">
      <aside
        ref={sidebarRef}
        className="bg-blue-800 text-white flex flex-col transition-all duration-300 relative"
        style={{ width: "16rem" }}
      >
        <div className="flex-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full text-left flex items-center px-4 py-3 hover:bg-blue-700 transition-colors ${
                activeTab === item.name ? "bg-blue-700" : ""
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md focus:outline-none"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </aside>
      <main className="flex-1 bg-gray-50 p-6">{renderContent()}</main>
    </div>
  )
}
