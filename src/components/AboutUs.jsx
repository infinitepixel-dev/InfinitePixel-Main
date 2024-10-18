import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaCheckCircle } from "react-icons/fa"

// Register GSAP plugin for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  // Refs to track the section, image, and text elements
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const imageEl = imageRef.current
    const textEl = textRef.current

    // GSAP animation setup for fading in and sliding elements into view
    gsap.fromTo(
      [imageEl],
      { opacity: 0, x: -50 }, // Initial state: hidden and slightly off-screen
      {
        opacity: 1,
        x: 0, // Target state: visible and positioned
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Trigger when section reaches 75% of viewport height
          toggleActions: "play none none reverse", // Animation triggers on scroll in and reverses on scroll out
        },
      }
    )
    gsap.fromTo(
      [textEl],
      { opacity: 0, x: 100 }, // Initial state: hidden and slightly off-screen
      {
        opacity: 1,
        x: 0, // Target state: visible and positioned
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Trigger when section reaches 75% of viewport height
          toggleActions: "play none none reverse", // Animation triggers on scroll in and reverses on scroll out
        },
      }
    )
  }, [])

  return (
    <section
      // Ref for tracking the entire section and triggering animation
      ref={sectionRef}
      className="flex flex-col items-center justify-between p-8 bg-bg-slate-50 md:flex-row"
    >
      {/* Image section: Adjusts for responsive design, centered on small screens */}
      <div ref={imageRef} className="w-full mb-4 md:w-1/2 md:mb-0">
        <img
          src="./public/section3.jpg" // Placeholder image path
          alt="About Us Image"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Text section: Responsive design for mobile and desktop */}
      <div ref={textRef} className="w-full text-left md:w-1/2 md:pl-8">
        <h2 className="mb-4 text-3xl font-semibold text-cyan-950">
          Why Use Infinite Pixel?
        </h2>
        <p className="mb-4 text-lg text-gray-700">
          We specialize in creating custom websites tailored to your business
          needs. With a focus on responsive design, user experience, and modern
          technologies, our team ensures that every project meets the highest
          standards. We take pride in our transparent process, working closely
          with clients from conception to launch. Choose Infinite Pixel, and let
          us bring your vision to life with a website that’s not just beautiful
          but also functional and secure.
        </p>
        {/* List of benefits with green checkboxes */}
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              Responsive and modern designs
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              Our team is based in the US
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              User-focused development approach
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              Secure and reliable technologies
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              Transparent communication and collaboration
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              In-house website hosting and maintenance
            </span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mt-1 mr-2 text-green-500" />
            <span className="text-lg text-gray-700">
              Experienced team delivering high-quality solutions
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutUs
