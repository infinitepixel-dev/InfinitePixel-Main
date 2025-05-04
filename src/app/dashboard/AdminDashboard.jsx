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

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [userFirstName, setUserFirstName] = useState("")
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

  useEffect(() => {
    const storedName = localStorage.getItem("userFirstName")
    if (storedName) setUserFirstName(storedName)
  }, [])

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, href: "/admin" },
    { name: "Billing", icon: <FaCreditCard />, href: "/admin/billing" },
    { name: "Settings", icon: <FaCog />, href: "/admin/settings" },
  ]

  return (
    <div className="flex min-h-screen">
      <aside
        ref={sidebarRef}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col transition-all duration-300 relative"
        style={{ width: "16rem" }}
      >
        <div className="flex-1 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 hover:bg-blue-700 transition-colors"
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md focus:outline-none"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </aside>
      <main className="flex-1 bg-gray-50 p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome back, {userFirstName ? ` ${userFirstName}` : ""}
        </h1>
        {/* Your dashboard content will go here */}
      </main>
    </div>
  )
}
