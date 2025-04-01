import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"

// Icons
import { FaBars, FaTimes } from "react-icons/fa"

// Logos
import ReactLogo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scrollBarWidthRef = useRef(0)
  const textRef = useRef(null)
  const navigate = useNavigate()

  const menuItems = [
    { label: "Home", action: "home" },
    { label: "Portfolio", action: "portfolio" },
    { label: "Contact Us", action: "contact" },
  ]

  const menuOverlayRef = useRef(null)
  const menuButtonRef = useRef(null)
  const menuButtonBgRef = useRef(null)
  const menuItemsRef = useRef([])

  useEffect(() => {
    scrollBarWidthRef.current =
      window.innerWidth - document.documentElement.clientWidth
  }, [])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      )
    }
  }, [isOpen])

  const toggleMenu = () => {
    const opening = !isOpen
    const container = document.getElementById("app-container")

    if (opening) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth
      scrollBarWidthRef.current = scrollBarWidth

      if (container) container.style.marginRight = `${scrollBarWidth}px`
      if (menuOverlayRef.current)
        menuOverlayRef.current.style.paddingRight = `${scrollBarWidth}px`

      document.body.classList.add("overflow-hidden")
      animateButtonBackground()
    } else {
      document.body.classList.remove("overflow-hidden")
      if (container) container.style.marginRight = ""
      if (menuOverlayRef.current) menuOverlayRef.current.style.paddingRight = ""
      gsap.killTweensOf(menuButtonBgRef.current)
      gsap.to(menuButtonBgRef.current, { backgroundColor: "transparent" })
    }

    setIsOpen(opening)
  }

  const closeMenu = (action) => {
    setIsOpen(false)
    document.body.classList.remove("overflow-hidden")

    const container = document.getElementById("app-container")
    if (container) container.style.marginRight = ""

    if (action === "contact") {
      const contactForm = document.getElementById("contact-form")
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" })
      } else {
        console.error("Contact form not found!")
      }
    } else if (action === "portfolio") {
      // Ensure navigate is used correctly
      if (navigate) navigate("/portfolio")
    } else if (action === "home") {
      if (navigate) navigate("/")
    }
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

  return (
    <nav
      className={`top-0 left-0 z-50 fixed w-full ${
        !isOpen ? "backdrop-blur-sm" : ""
      }`}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-slate-800 to-red-slate-800/0 h-26"></div>

      {/* Navbar Content */}
      <div className="relative flex items-center justify-between w-full p-4 transition-colors duration-300 bg-transparent">
        <div className="flex items-center">
          <button
            onClick={() => {
              const contactForm = document.getElementById("app-container")
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: "smooth" })
              } else {
                console.error("Contact form not found!")
              }
            }}
            className="p-0 m-0 bg-transparent border-none focus:outline-none"
            aria-label="Scroll to app container"
          >
            <img src={ReactLogo} alt="React Logo" className="h-8 w-15" />
          </button>
        </div>

        <div className="flex items-center ml-auto">
          <button
            ref={textRef}
            className="z-20 hidden mr-4 text-lg font-semibold transition-colors duration-100 md:block text-slate-100 hover:text-rose-500"
            onClick={() => {
              const contactForm = document.getElementById("contact-form")
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: "smooth" })
              } else {
                console.error("Contact form not found!")
              }
            }}
          >
            Let&apos;s Create Something Together
          </button>

          {/* Menu Toggle */}
          <button
            onClick={toggleMenu}
            ref={menuButtonRef}
            className="z-[999] focus:outline-none text-2xl transition-transform duration-300 transform"
            aria-label="Menu button"
          >
            <div
              ref={menuButtonBgRef}
              className={`transition-transform duration-100 hover:text-rose-500 p-2 rounded-full ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <FaTimes className="duration-100 text-slate-100 hover:text-rose-500" />
              ) : (
                <FaBars className="duration-100 text-slate-100 hover:text-rose-500" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        ref={menuOverlayRef}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black`}
        role="menu"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Escape") closeMenu()
        }}
      >
        <div className="relative flex flex-col items-center space-y-10 text-6xl transition-transform transform text-slate-100">
          <div className="text-4xl text-white bg-transparent border-none">
            Menu
          </div>
          {menuItems.map((item, index) => (
            <button
              key={item.action}
              ref={(el) => (menuItemsRef.current[index] = el)}
              onClick={() => closeMenu(item.action)}
              className="text-5xl text-white bg-transparent border-none cursor-pointer hover:underline"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
