import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center">
        <a
          href="#"
          className="mr-4 text-lg font-semibold text-black hover:text-gray-700"
        >
          Let Us Create Something Together
        </a>
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Fullscreen menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-40">
          <div className="text-7xl font-bold absolute top-10 left-10 transform rotate-90">
            Menu
          </div>
          <ul className="text-6xl space-y-10">
            <li onClick={toggleMenu} className="cursor-pointer hover:underline">
              About
            </li>
            <li onClick={toggleMenu} className="cursor-pointer hover:underline">
              Our Projects
            </li>
            <li onClick={toggleMenu} className="cursor-pointer hover:underline">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
export default Navbar
