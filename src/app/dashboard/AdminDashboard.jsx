"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getFirebaseInstance } from "@/lib/firebaseClient";
import gsap from "gsap";
import {
  FaTachometerAlt,
  FaCreditCard,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsWrenchAdjustableCircle } from "react-icons/bs";

import { SiGoogleanalytics } from "react-icons/si";

import BillingPage from "./billing/page";
import SettingsPage from "./settings/page";
import AnalyticsPage from "./analytics/AnalyticsPage";
import ServicesPage from "./services/ServicesPage";
import { useUser } from "@context/UserContext";

export default function AdminDashboard() {
  //INFO User Details States
  const {
    // userEmail,
    userFirstName,
    checkingAuth,
  } = useUser();

  //INFO UI States
  const [collapsed, setCollapsed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [activeTab, setActiveTab] = useState("Dashboard");

  const sidebarRef = useRef(null);
  const router = useRouter();

  // Cleanup ReCAPTCHA widget
  const removeRecaptchaBadge = () => {
    const recaptchaElements = document.querySelectorAll(".grecaptcha-badge");
    recaptchaElements.forEach((el) => el.remove());
  };

  useEffect(() => {
    const captchaDisabled = localStorage.getItem("captchaDisabled");
    if (captchaDisabled === "true") {
      removeRecaptchaBadge();
    }
  }, []);

  // Animate sidebar collapse/expand
  useEffect(() => {
    if (sidebarRef.current) {
      const sidebar = sidebarRef.current;
      const labels = sidebar.querySelectorAll(".menu-label");

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut", duration: 0.3 },
        onStart: () => setIsAnimating(true),
        onComplete: () => setIsAnimating(false),
      });

      if (collapsed) {
        tl.to(labels, {
          opacity: 0,
          x: -10,
          stagger: 0.05,
        }).to(sidebar, { width: "4rem" }, "<");
      } else {
        tl.to(sidebar, { width: "16rem" }).to(
          labels,
          {
            opacity: 1,
            x: 0,
            stagger: 0.05,
          },
          "<0.1"
        );
      }
    }
  }, [collapsed]);

  const handleLogout = async () => {
    const { auth } = await getFirebaseInstance();
    await signOut(auth);
    localStorage.removeItem("captchaDisabled");
    router.push("/dashboard/login");
  };

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Services", icon: <BsWrenchAdjustableCircle /> },
    { name: "Analytics", icon: <SiGoogleanalytics /> },
    { name: "Billing", icon: <FaCreditCard /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  const renderContent = () => {
    const pages = {
      Billing: <BillingPage />,
      Dashboard: (
        <h1 className="mb-4 font-bold text-3xl text-center">
          Welcome back, {userFirstName}
        </h1>
      ),
      Analytics: <AnalyticsPage />,
      Settings: <SettingsPage />,
      Services: <ServicesPage />,
    };

    return pages[activeTab] || null;
  };

  if (checkingAuth) {
    return <div className="p-6 text-center">Checking authentication...</div>;
  }

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <aside
        ref={sidebarRef}
        className={`relative flex flex-col bg-slate-900 dark:bg-gray-800 text-white transition-[width] duration-300 ease-in-out ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full text-left flex items-center px-4 py-3 transition-colors duration-200 ease-in-out rounded-md hover:bg-blue-700 ${
                activeTab === item.name ? "bg-blue-800" : ""
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span
                className={`menu-label origin-left transition-all duration-300 ${
                  collapsed
                    ? "opacity-0 -translate-x-2 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center px-4 py-3 border-t border-blue-700">
          {/* Logout Icon Button */}
          <button
            onClick={handleLogout}
            className="focus:outline-none text-white hover:text-red-500"
            aria-label="Logout"
          >
            <FaSignOutAlt className="text-lg" />
          </button>
          <span
            className={`menu-label text-sm transition-opacity duration-300 ${
              collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          ></span>

          {/* Lgotout Text Button */}
          <button
            onClick={handleLogout}
            className={`text-sm transition-opacity duration-300 ${
              collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            } hover:text-red-500`}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="top-1/2 right-0 absolute bg-blue-600 hover:bg-blue-700 shadow-md p-2 rounded-full focus:outline-none text-white -translate-y-1/2 translate-x-1/2 transform"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </aside>

      <main className="flex-1 p-2 text-gray-900 dark:text-gray-100">
        {renderContent()}
      </main>
    </div>
  );
}
