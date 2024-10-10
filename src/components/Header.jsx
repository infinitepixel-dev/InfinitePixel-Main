import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Hero = () => {
  // Ref to hold references to the circles
  const circlesRef = useRef([])
  // State to determine if the device supports CSS animations
  const [supportsAnimation, setSupportsAnimation] = useState(true)

  useEffect(() => {
    // Function to check for CSS animation support
    const supportsAnimations = () => {
      return window.CSS && CSS.supports("animation", "name")
    }

    // Set the state based on whether animations are supported
    setSupportsAnimation(supportsAnimations())

    // If animations are supported, create the animation for each circle
    if (supportsAnimation) {
      circlesRef.current.forEach((circle) => {
        gsap.to(circle, {
          x: "random(-200, 200)", // Random x position
          y: "random(-200, 200)", // Random y position
          scale: "random(0.5, 1.5)", // Random scale for size
          duration: "random(5, 10)", // Random duration for animation
          repeat: -1, // Repeat the animation indefinitely
          yoyo: true, // Reverse the animation after completing
          ease: "sine.inOut", // Easing function for smooth animation
        })
      })
    }
  }, [supportsAnimation]) // Effect runs when supportsAnimation changes

  // Function to create multiple animated circles
  const createCircles = (count) => {
    // Array of colors for the circles
    const colors = [
      "#7bc950",
      "#2d2b75",
      "#e92f5e",
      "#fca723",
      "#87ceeb",
      "#1E90FF",
    ]

    // Create an array of circle elements
    return Array.from({ length: count }).map((_, i) => {
      // Randomly select a color for each circle
      const color = colors[Math.floor(Math.random() * colors.length)]

      return (
        <div
          key={i} // Unique key for each circle
          ref={(e) => (circlesRef.current[i] = e)} // Assign reference to circle
          className="absolute rounded-full" // Tailwind classes for positioning and shape
          style={{
            width: "10em", // Base size for circles
            height: "11em", // Base size for circles
            position: "absolute", // Absolute positioning to allow random placement
            backgroundColor: color, // Use the selected color for the circle
            top: `${Math.random() * 100}vh`, // Random vertical position
            left: `${Math.random() * 100}vw`, // Random horizontal position
            filter: "blur(10px)", // Apply blur effect
            opacity: 0.7, // Semi-transparent circles
            pointerEvents: "none", // Prevent user interaction with circles
          }}
        />
      )
    })
  }

  return (
    <section
      className={`relative w-full h-[100vh] overflow-hidden ${
        supportsAnimation ? "" : "bg-blue-500" // Set fallback color if animations are not supported
      }`}
    >
      {/* Animated Background Circles */}
      {supportsAnimation && createCircles(30)}{" "}
      {/* Only create circles if animations are supported */}
      <div className="flex items-center justify-center h-full">
        {/* Centered Text */}
        <h1 className="text-white text-[6em] md:text-[12em] font-bold text-center relative z-10">
          Infinite Pixel
        </h1>
      </div>
    </section>
  )
}

export default Hero
