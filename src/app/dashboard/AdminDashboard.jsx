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

import BillingPage from "./billing/page";
import SettingsPage from "./settings/page";

export default function AdminDashboard() {
  const [userFirstName, setUserFirstName] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const sidebarRef = useRef(null);
  const router = useRouter();

  // Animate sidebar collapse/expand
  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        width: collapsed ? "4rem" : "16rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [collapsed]);

  // Auth check and user info
  useEffect(() => {
    const checkAuth = async () => {
      const { auth, db } = await getFirebaseInstance();

      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          router.push("/dashboard/login");
        } else {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserFirstName(docSnap.data().fullName?.split(" ")[0] || "User");
          }
          setCheckingAuth(false);
        }
      });
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    const { auth } = await getFirebaseInstance();
    await signOut(auth);
    router.push("/dashboard/login");
  };

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Billing", icon: <FaCreditCard /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Billing":
        return <BillingPage />;
      case "Dashboard":
        return (
          <h1 className="mb-4 font-bold text-3xl text-center">
            Welcome back, {userFirstName}
          </h1>
        );
      case "Settings":
        return <SettingsPage />;
      default:
        return null;
    }
  };

  if (checkingAuth) {
    return <div className="p-6 text-center">Checking authentication...</div>;
  }

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <aside
        ref={sidebarRef}
        className="relative flex flex-col bg-slate-900 dark:bg-gray-800 text-white transition-all duration-300"
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
              <span className="mr-3 text-lg">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center px-4 py-3 border-t border-blue-700">
          {!collapsed && <span className="text-sm">Logout</span>}
          <button
            onClick={handleLogout}
            className="focus:outline-none text-white hover:text-red-500"
            aria-label="Logout"
          >
            <FaSignOutAlt className="text-lg" />
          </button>
        </div>

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="top-1/2 right-0 absolute bg-blue-600 hover:bg-blue-700 shadow-md p-2 rounded-full focus:outline-none text-white -translate-y-1/2 translate-x-1/2 transform"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </aside>

      <main className="flex-1 p-6 text-gray-900 dark:text-gray-100">
        {renderContent()}
      </main>
    </div>
  );
}
