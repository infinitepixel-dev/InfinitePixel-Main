// import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const MapEmbed = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <div className="mx-auto w-full overflow-hidden">
      <iframe
        ref={mapRef}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d643831.4282870197!2d-86.7816!3d36.1627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec0f364f4501%3A0x3538696e3d1736bc!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1729111105989!5m2!1sen!2sus&maptype=roadmap"
        className="border-0 w-full h-[450px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Nashville, TN" // Added title for accessibility
      />
    </div>
  )
}

export default MapEmbed
