import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import gsap from "gsap"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)

  useEffect(() => {
    // GSAP animation for the footer
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <footer
      ref={footerRef}
      className="flex flex-col items-center py-4 space-y-2 text-white bg-gray-800"
    >
      <p className="text-sm text-center">
        &copy; {currentYear} Infinite Pixel LLC
      </p>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
