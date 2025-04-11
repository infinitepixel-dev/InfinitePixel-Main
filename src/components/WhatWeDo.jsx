import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const WhatWeDo = () => {
  // Refs for the sections and text elements
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef1 = useRef(null)
  const textRef2 = useRef(null)

  useEffect(() => {
    const sectionEl = sectionRef.current
    const headingEl = headingRef.current
    const textEl1 = textRef1.current
    const textEl2 = textRef2.current

    if (sectionEl && headingEl && textEl1 && textEl2) {
      // Fade and slide animation for the section
      gsap.fromTo(
        sectionEl,
        { opacity: 0, y: 50 }, // Initial state: hidden and slightly below the view
        {
          opacity: 1,
          y: 0, // Target state: visible and positioned
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%", // Trigger when the section reaches 80% of viewport height
            toggleActions: "play none none reverse", // Play on scroll in, reverse on scroll out
          },
        }
      )

      // Fade-in animation for the heading
      gsap.fromTo(
        headingEl,
        { opacity: 0, y: 20 }, // Initial state: hidden and slightly below
        {
          opacity: 1,
          y: 0, // Target state: visible and positioned
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingEl,
            start: "top 85%", // Trigger when the heading reaches 85% of viewport height
            toggleActions: "play none none reverse", // Play when in view, reverse when out
          },
        }
      )

      // Fade and slide animation for the first paragraph
      gsap.fromTo(
        textEl1,
        { opacity: 0, x: -50 }, // Initial state: hidden and slightly left of the view
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textEl1,
            start: "top 90%", // Trigger when the first paragraph reaches 90% of viewport height
            toggleActions: "play none none reverse",
          },
        }
      )

      // Fade and slide animation for the second paragraph
      gsap.fromTo(
        textEl2,
        { opacity: 0, x: 50 }, // Initial state: hidden and slightly right of the view
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textEl2,
            start: "top 90%", // Trigger when the second paragraph reaches 90% of viewport height
            toggleActions: "play none none reverse",
          },
        }
      )
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white text-sky-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          ref={headingRef}
          className="p-8 mb-8 text-4xl font-extrabold md:text-5xl"
        >
          Professional Websites, Affordable Prices
        </h2>
        <p className="p-8 mb-8 text-xl font-light md:text-2xl">
          At <b>Infinite Pixel</b>, we specialize in creating custom websites
          tailored to the unique needs of small businesses. Our experienced
          designers offer professional services you can trust.
        </p>
        <div className="grid grid-cols-1 gap-8 p-8 leading-relaxed text-left md:grid-cols-2">
          <p ref={textRef1}>
            We know the challenges small businesses face, and we focus on
            delivering stunning, functional websites that are affordable without
            sacrificing quality. Whether you&apos;re looking for an online
            presence or establishing a presence, <b>Infinite Pixel</b> has got
            you covered.
          </p>
          <p ref={textRef2}>
            Our expert team builds sites optimized for performance, usability,
            and modern design. We work closely with clients, ensuring that your
            website is a true reflection of your brand and helps you achieve
            your business goals.
          </p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
      </div>
    </section>
  )
}

export default WhatWeDo
