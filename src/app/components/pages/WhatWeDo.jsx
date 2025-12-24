//WhatweDo.jsx
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Review from "../../../../old-react/components/cards/ReviewCard"

gsap.registerPlugin(ScrollTrigger)

const WhatWeDo = () => {
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
      gsap.fromTo(
        sectionEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        headingEl,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        textEl1,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textEl1,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )

      gsap.fromTo(
        textEl2,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textEl2,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-sky-950 inter-para-regular"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          ref={headingRef}
          className="sm:mb-2 md:mb-8 p-8 font-extrabold text-4xl md:text-5xl"
        >
          Professional Websites, Affordable Prices
        </h2>

        {/* Upgraded to h3 instead of <p> since it functions like a heading */}
        <h3 className="sm:mb-2 md:mb-8 px-8 font-medium text-xl md:text-2xl">
          At <span>Infinite Pixel</span>, we specialize in creating custom
          websites tailored to the unique needs of small businesses. Our
          experienced designers offer professional services you can trust.
        </h3>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-6 p-4 md:p-8 font-normal text-blue-950 text-left leading-relaxed">
          <div className="items-start md:col-span-3 col-start-1 mt-8">
            <Review />
          </div>
          <div className="justify-center items-center grid grid-rows-2 md:col-span-3 pb-5">
            <p ref={textRef1}>
              We understand the challenges small businesses face, which is why
              we&apos;re committed to delivering clean, functional websites that
              are affordable without compromising on quality. Whether
              you&apos;re building your online presence for the first time or
              improving an existing one,
              <strong> Infinite Pixel</strong> has you covered.
            </p>
            <span className="border-yellow-600 border-t-2"></span>
            <p ref={textRef2}>
              Our experienced team crafts high-performance websites with a focus
              on usability and modern design. We collaborate closely with you to
              create a site that authentically represents your brand and drives
              your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
