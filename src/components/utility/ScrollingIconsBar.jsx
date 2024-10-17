import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"

// Register GSAP plugin for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger)

// Define the ScrollingIconsBar component
const ScrollingIconsBar = () => {
  const iconContainerRef = useRef(null)

  useEffect(() => {
    const iconContainer = iconContainerRef.current

    // Setup ScrollTrigger to start animation when the bar comes into view
    ScrollTrigger.create({
      trigger: iconContainer,
      start: "top bottom", // Start the animation when the top of the bar reaches the bottom of the viewport
      onEnter: () => {
        gsap.fromTo(
          iconContainer,
          { xPercent: 0 },
          {
            xPercent: -50,
            ease: "none",
            duration: 25,
            repeat: -1,
          }
        )
      },
    })
  }, [])

  return (
    <div className="relative w-full py-4 mt-8 overflow-hidden bg-blue-950">
      <div
        ref={iconContainerRef}
        className="flex justify-between items-center w-[200%] text-6xl text-white space-x-16"
      >
        {/* FontAwesome Icons */}
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        {/* Duplicate icons for the continuous scroll effect */}
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
  )
}

// Correct export
export { ScrollingIconsBar as default }
