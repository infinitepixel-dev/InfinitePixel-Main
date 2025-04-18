import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Sidebar from "./Sidebar"
import Settings from "../pages/Settings"

const DashboardMain = () => {
  const [name, setName] = useState("Daniel")
  const [showSettings, setShowSettings] = useState(false) // State to control visibility of Settings

  const contentRef = useRef()

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 30,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    })
  }, [])

  // Handle link click from Sidebar to show settings
  const handleSettingsClick = () => setShowSettings(true)

  return (
    <div className="flex">
      <Sidebar onSettingsClick={handleSettingsClick} />{" "}
      {/* Pass handler to Sidebar */}
      <main ref={contentRef} className="w-screen min-h-screen overflow-hidden">
        <h1 className="block mb-6 text-2xl font-bold text-center text-blue-950">
          Welcome Back, {name}
        </h1>

        {/* Conditionally render Settings based on state */}
        {showSettings && <Settings />}
      </main>
    </div>
  )
}

export default DashboardMain
