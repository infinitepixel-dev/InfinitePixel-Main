import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import gsap from "gsap"
import ReactLogo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOverBg, setIsOverBg] = useState(false)

  const textRef = useRef(null)
  const menuButtonRef = useRef(null)
  const menuButtonBgRef = useRef(null) // Ref for the background animation element

  const toggleMenu = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      document.body.classList.add("overflow-hidden")
      animateButtonBackground()
    } else {
      document.body.classList.remove("overflow-hidden")
      gsap.killTweensOf(menuButtonBgRef.current)
      gsap.to(menuButtonBgRef.current, { backgroundColor: "transparent" })
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  const animateButtonBackground = () => {
    gsap.fromTo(
      menuButtonBgRef.current,
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#1a202c",
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector(".bg-target")

      if (targetSection) {
        const rect = targetSection.getBoundingClientRect()

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

  useEffect(() => {
    const textElement = textRef.current
    const menuButton = menuButtonRef.current

    if (textElement && menuButton) {
      // Hover effect for the link text
      textElement.addEventListener("mouseenter", () => {
        gsap.to(textElement, {
          color: "#a216b5",
          duration: 0.2,
          ease: "power1.inOut",
        })
      })

      textElement.addEventListener("mouseleave", () => {
        gsap.to(textElement, {
          color: isOverBg ? "#000000" : "#fefefe",
          duration: 0.2,
          ease: "power1.inOut",
        })
      })

      // Hover effect for the menu button
      menuButton.addEventListener("mouseenter", () => {
        gsap.to(menuButton, {
          color: "#fefefe",
          duration: 0.1,
          ease: "power1.inOut",
        })
      })

      menuButton.addEventListener("mouseleave", () => {
        gsap.to(menuButton, {
          color: isOverBg ? "#000000" : "#F1F5F9",
          duration: 0.2,
          ease: "power1.inOut",
        })
      })
    }

    return () => {
      if (textElement) {
        textElement.removeEventListener("mouseenter", null)
        textElement.removeEventListener("mouseleave", null)
      }
      if (menuButton) {
        menuButton.removeEventListener("mouseenter", null)
        menuButton.removeEventListener("mouseleave", null)
      }
    }
  }, [isOverBg])

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 bg-transparent">
      <div className="flex items-center">
        <img src={ReactLogo} alt="React Logo" className="h-8 w-15" />
      </div>

      <div className="flex items-center ml-auto">
        <a
          href="#"
          ref={textRef}
          className={`z-20 hidden mr-4 text-lg font-semibold transition duration-300 md:block ${
            isOverBg ? "text-black" : "text-slate-400"
          }`}
        >
          Let&apos;s Create Something Together
        </a>

        <button
          onClick={toggleMenu}
          ref={menuButtonRef}
          className={`z-50 text-2xl transition-transform duration-300 transform focus:outline-none ${
            isOverBg ? "text-black" : "text-slate-400"
          }`}
          aria-label="Menu button"
        >
          <div
            ref={menuButtonBgRef}
            className={`transition-transform duration-300 p-2 rounded-full ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen ? "bg-black opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className="relative space-y-10 text-6xl transition-transform duration-500 transform text-slate-400"
          onClick={(e) => e.stopPropagation()}
        >
          <li className="absolute left-0 text-2xl -top-10">Menu</li>
          <li onClick={closeMenu} className="cursor-pointer hover:underline">
            Our Projects
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
