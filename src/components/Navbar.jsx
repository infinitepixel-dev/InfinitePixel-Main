import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ReactLogo from "../assets/react.svg"

const Navbar = () => {
  // State to manage the open/close state of the mobile menu
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the mobile menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close the mobile menu
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4">
      {/* Logo positioned on the far left */}
      <div className="flex items-center">
        <img src={ReactLogo} alt="React Logo" className="w-8 h-8" />
      </div>

      {/* Flex container for the link and menu button on the far right */}
      <div className="flex items-center ml-auto">
        <a
          href="#"
          className="hidden mr-4 text-lg font-semibold transition duration-300 text-slate-100 hover:text-slate-200 md:block"
        >
          Let&apos;s Create Something Together
        </a>
        {/* Menu button for toggling mobile menu */}
        <button onClick={toggleMenu} className="z-50 text-2xl text-white">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen menu overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center text-white transition duration-300 bg-black"
          onClick={closeMenu} // Close menu when clicking outside
        >
          <ul
            className="relative space-y-10 text-6xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the list
          >
            <li className="absolute left-0 text-2xl -top-10">Menu</li>
            <li onClick={closeMenu} className="cursor-pointer hover:underline">
              About
            </li>
            <li onClick={closeMenu} className="cursor-pointer hover:underline">
              Our Projects
            </li>
            <li onClick={closeMenu} className="cursor-pointer hover:underline">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
