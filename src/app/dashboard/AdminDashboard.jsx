"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { doc, getDoc } from "firebase/firestore"
import { signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth"
import { getFirebaseInstance } from "@/lib/firebaseClient"
import gsap from "gsap"
import {
  FaTachometerAlt,
  FaCreditCard,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa"

import BillingPage from "./billing/page"
import SettingsPage from "./settings/page"

export default function AdminDashboard() {
  const [userFirstName, setUserFirstName] = useState("")
  const [collapsed, setCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("Dashboard")
  const [darkMode, setDarkMode] = useState(false)
  const sidebarRef = useRef(null)

  // Animate sidebar collapse/expand
  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        width: collapsed ? "4rem" : "16rem",
        duration: 0.3,
        ease: "power2.inOut",
      })
    }
  }, [collapsed])

  // Set theme from localStorage on load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const isDark = storedTheme === "dark"
    setDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  // Fetch user info from Firebase
  useEffect(() => {
    const fetchUser = async () => {
      const { auth, db } = await getFirebaseInstance()

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid)
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            setUserFirstName(docSnap.data().fullName?.split(" ")[0] || "User")
          }
        }
      })
    }

    fetchUser()
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev
      localStorage.setItem("theme", next ? "dark" : "light")
      document.documentElement.classList.toggle("dark", next)
      return next
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
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome back, {userFirstName}
          </h1>
        )
      case "Settings":
        return <SettingsPage />
      default:
        return null
    }
  }

  const router = useRouter()

  const handleLogout = async () => {
    const { auth } = await getFirebaseInstance()
    await signOut(auth)
    router.push("/dashboard/login") // change path if needed
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

        <div className="px-4 py-3 border-t border-blue-700 flex items-center justify-between">
          {!collapsed && <span className="text-sm">Logout</span>}
          <button
            onClick={handleLogout}
            className="text-white hover:text-red-500 focus:outline-none"
            aria-label="Logout"
          >
            <FaSignOutAlt className="text-lg" />
          </button>
        </div>

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
