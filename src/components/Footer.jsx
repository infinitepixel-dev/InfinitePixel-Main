import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import gsap from "gsap"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <footer ref={footerRef} className="w-full px-4 py-8 text-white bg-blue-950">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-semibold tracking-wide text-center">
          &copy; {currentYear} Infinite Pixel Web Design
        </p>

        <p className="text-sm text-gray-200">Find us on socials</p>

        <div className="flex items-center space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=61574753346703"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/infinite-pixel-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
