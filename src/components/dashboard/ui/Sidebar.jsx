import { useLayoutEffect, useRef, useState } from "react"
import { LuSettings2 } from "react-icons/lu"
import { MdOutlineSubscriptions } from "react-icons/md"
import {
  FaFileAlt,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaHornbill,
} from "react-icons/fa"
import { gsap } from "gsap"

const menuItems = [
  { icon: MdOutlineSubscriptions, label: "Manage Subscription" },
  { icon: FaFileAlt, label: "Reports" },
  { icon: FaHornbill, label: "Billing" },
  { icon: LuSettings2, label: "Settings", onClick: "settings" }, // Add an onClick key to trigger settings
  { icon: FaEye, label: "View Website" },
]

const Sidebar = ({ onSettingsClick }) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarRef = useRef(null)
  const itemRefs = useRef([])

  // Clear transform after animating in
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform,opacity",
      })
    }, sidebarRef)

    document.body.style.overflow = collapsed ? "auto" : "hidden"

    return () => {
      ctx.revert()
      document.body.style.overflow = "auto"
    }
  }, [collapsed])

  const toggleSidebar = () => setCollapsed((prev) => !prev)

  // Handle clicking on a menu item
  const handleItemClick = (item) => {
    if (item.onClick === "settings") {
      onSettingsClick() // Trigger the settings click handler from the parent
    }
  }

  return (
    <aside
      ref={sidebarRef}
      className={`sidebar h-screen bg-gradient-to-b from-blue-800 to-blue-900/90 text-white transition-all duration-500 ease-out ${
        collapsed ? "w-16 p-3" : "w-64 p-6"
      } relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute right-0 p-3 text-white transition-transform duration-300 -translate-y-1/2 bg-gray-800 rounded-full top-1/2 collapse-btn"
        style={{ transform: collapsed ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Heading */}
      {!collapsed && <h2 className="mb-10 text-2xl font-bold">Dashboard</h2>}

      {/* Nav */}
      <nav className="flex flex-col gap-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              ref={(el) => (itemRefs.current[index] = el)}
              className="flex items-center gap-4 transition-colors duration-200 cursor-pointer group hover:text-slate-200"
              onClick={() => handleItemClick(item)} // Handle item click
            >
              <Icon className="text-xl shrink-0" />
              <span
                className={`label transition-opacity duration-300 ${
                  collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
