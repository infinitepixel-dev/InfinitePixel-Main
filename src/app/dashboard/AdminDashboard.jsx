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
  FaMoon,
  FaSun,
} from "react-icons/fa"

import BillingPage from "./billing/page"
import SettingsPage from "./settings/page"

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("Dashboard")
  const [darkMode, setDarkMode] = useState(false)
  const sidebarRef = useRef(null)

  // Collapse sidebar animation
  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        width: collapsed ? "4rem" : "16rem",
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [collapsed])

  // Set dark mode class on html element + load persisted theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // Toggle dark mode and persist to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const nextMode = !prev
      localStorage.setItem("theme", nextMode ? "dark" : "light")
      if (nextMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return nextMode
    })
  }

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
        return <SettingsPage />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <aside
        ref={sidebarRef}
        className="bg-slate-900 dark:bg-gray-800 text-white flex flex-col transition-all duration-300 relative"
        style={{ width: "16rem" }}
      >
        <div className="flex-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full text-left flex items-center px-4 py-3 hover:bg-blue-700 transition-colors ${
                activeTab === item.name ? "bg-blue-800" : ""
              }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <div className="px-4 py-3 border-t border-blue-700 flex items-center justify-between">
          {!collapsed && <span className="text-sm">Dark Mode</span>}
          <button
            onClick={toggleDarkMode}
            className="text-white focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md focus:outline-none"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </aside>

      <main className="flex-1 p-6 text-gray-900 dark:text-gray-100">
        {renderContent()}
      </main>
    </div>
  )
}
