import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Review from "../cards/Review"

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
      <div className="max-w-6xl mx-auto text-center">
        <h2
          ref={headingRef}
          className="p-8 text-4xl font-extrabold sm:mb-2 md:mb-8 md:text-5xl"
        >
          Professional Websites, Affordable Prices
        </h2>

        {/* Upgraded to h3 instead of <p> since it functions like a heading */}
        <h3 className="px-8 text-xl font-medium sm:mb-2 md:mb-8 md:text-2xl">
          At <span className="text-blue-900">Infinite Pixel</span>, we
          specialize in creating custom websites tailored to the unique needs of
          small businesses. Our experienced designers offer professional
          services you can trust.
        </h3>
        <div className="grid grid-cols-1 gap-8 p-4 font-normal leading-relaxed text-left md:p-8 md:grid-cols-6 text-blue-950">
          <div className="items-start col-start-1 mt-8 md:col-span-3">
            <Review />
          </div>
          <div className="grid items-center justify-center grid-rows-2 pb-5 md:col-span-3">
            <p ref={textRef1}>
              We understand the challenges small businesses face, which is why
              we&apos;re committed to delivering clean, functional websites that
              are affordable without compromising on quality. Whether
              you&apos;re building your online presence for the first time or
              improving an existing one,
              <strong className="text-blue-900">Infinite Pixel</strong> has you
              covered.
            </p>
            <span className="border-blue-900/50 bt-line"></span>
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
