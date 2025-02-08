import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import gsap from "gsap"
import ReactLogo from "../assets/logo.svg"

const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [isOpen, setIsOpen] = useState(false)
  // State to manage whether the navbar is over the specific background
  const [isOverBg, setIsOverBg] = useState(false)

  // Ref for the text element
  const textRef = useRef(null)

  // Toggle the mobile menu open/closed and manage scroll
  const toggleMenu = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      document.body.classList.add("overflow-hidden") // Disable scrolling when menu is open
    } else {
      document.body.classList.remove("overflow-hidden") // Re-enable scrolling when menu is closed
    }
  }

  // Close the mobile menu and re-enable scrolling
  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  // Detect scroll and check if the navbar is over the specific background
  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector(".bg-target")

      if (targetSection) {
        const rect = targetSection.getBoundingClientRect()

        // If the navbar is over the section with the #E2E8F0 background
        if (rect.top <= 0 && rect.bottom >= 0) {
          setIsOverBg(true)
        } else {
          setIsOverBg(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // GSAP animation for hover effects
  useEffect(() => {
    const textElement = textRef.current

    const handleMouseEnter = () => {
      gsap.to(textElement, {
        color: "#ff6347", // Change to a different color (e.g., tomato)
        duration: 0.1,
        ease: "power1.inOut",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(textElement, {
        color: isOverBg ? "#000000" : "#F1F5F9", // Black or slate depending on background
        duration: 0.2,
        ease: "power1.inOut",
      })
    }

    if (textElement) {
      textElement.addEventListener("mouseenter", handleMouseEnter)
      textElement.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (textElement) {
        textElement.removeEventListener("mouseenter", handleMouseEnter)
        textElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isOverBg]) // Re-run effect when background color changes

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 bg-transparent">
      {/* Logo positioned on the far left */}
      <div className="flex items-center">
        <img src={ReactLogo} alt="React Logo" className="h-8 w-15" />
      </div>

      {/* Flex container for the link and menu button on the far right */}
      <div className="flex items-center ml-auto">
        <a
          href="#"
          ref={textRef}
          className={`z-20 hidden mr-4 text-lg font-semibold transition duration-300 md:block ${
            isOverBg ? "text-black" : "text-slate-100"
          }`}
        >
          Let&apos;s Create Something Together
        </a>
        {/* Menu button for toggling mobile menu */}
        <button
          onClick={toggleMenu}
          className={`z-50 text-2xl transition-transform duration-300 transform focus:outline-none ${
            isOverBg ? "text-black" : "text-white"
          }`}
          aria-label="Menu button"
        >
          {/* Rotate the icon based on state */}
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </button>
      </div>

      {/* Fullscreen menu overlay for mobile view */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "bg-black opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="relative space-y-10 text-6xl text-white transition-transform duration-500 transform"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the list
        >
          <li className="absolute left-0 text-2xl -top-10">Menu</li>
          <li onClick={closeMenu} className="cursor-pointer hover:underline">
            About
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/portfolio" onClick={closeMenu}>
              Our Projects
            </Link>
          </li>
          <li onClick={closeMenu} className="cursor-pointer hover:underline">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
