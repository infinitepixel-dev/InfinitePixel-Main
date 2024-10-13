import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaSass,
} from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

const WhatWeDo = () => {
  const iconsRef = useRef(null) // Ref for the icons container

  useEffect(() => {
    if (iconsRef.current) {
      const totalWidth = iconsRef.current.scrollWidth // Total width of the icons
      const animationDuration = 30 // Duration for smooth scrolling

      // GSAP Infinite Scroll Animation for the icons only
      gsap.to(iconsRef.current, {
        x: `-${totalWidth / 2}px`, // Move the icons left horizontally based on half the total width
        duration: animationDuration, // Duration for smooth scrolling
        ease: "linear",
        repeat: -1, // Infinite repeat
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const parsedX = parseFloat(x)
            return `${parsedX % (totalWidth / 2)}px` // Reset position to create the illusion of infinite scrolling
          }),
        },
      })
    }
  }, [iconsRef]) // Ensure the effect runs when iconsRef is available

  return (
    <section className="relative py-20 text-cyan-950 bg-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="p-8 mb-8 text-4xl font-extrabold md:text-5xl">
          Professional Websites, Affordable Prices
        </h2>
        <p className="p-8 mb-8 text-xl font-light md:text-2xl">
          At Infinite Pixel, we specialize in creating custom websites tailored
          to the unique needs of small businesses. Our experienced designers
          offer professional services you can trust.
        </p>
        <div className="grid grid-cols-1 gap-8 p-8 leading-relaxed text-left md:grid-cols-2">
          <p>
            We know the challenges small businesses face, and we focus on
            delivering stunning, functional websites that are affordable without
            sacrificing quality. Whether you&apos;re looking for an online
            presence or establishing a presence, Infinite Pixel has got you
            covered.
          </p>
          <p>
            Our expert team builds sites optimized for performance, usability,
            and modern design. We work closely with clients, ensuring that your
            website is a true reflection of your brand and helps you achieve
            your business goals.
          </p>
        </div>
      </div>

      {/* Static GSAP Scroll Bar */}
      <div
        className="relative mt-16 overflow-hidden"
        style={{ height: "25em" }}
      >
        <div
          className="absolute z-10 flex items-center w-full h-16"
          style={{
            backgroundColor: "#D2B48C", // Custom tan color
            height: "10em", // Make the bar span the entire height
            left: "0%", // Move the bar left so it spans the screen
            top: "30%", // Vertically center the bar
          }}
        >
          <div
            className="flex items-center text-slate-200"
            ref={iconsRef}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {/* Combined array of React Icons */}
            {[
              FaHtml5,
              FaCss3,
              FaBootstrap,
              FaJs,
              FaReact,
              FaNodeJs,
              RiTailwindCssFill,
              FaSass,
            ].map((Icon, index) => (
              <Icon
                key={index}
                className="z-50 text-5xl mx-28 text-white-400 opacity-90"
              />
            ))}
            {/* Duplicate icons for infinite effect */}
            {[
              FaHtml5,
              FaCss3,
              FaBootstrap,
              FaJs,
              FaReact,
              FaNodeJs,
              RiTailwindCssFill,
              FaSass,
            ].map((Icon, index) => (
              <Icon
                key={index + 8} // Ensure unique keys for duplicated icons
                className="text-5xl mx-28 text-white-400 opacity-90"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
