import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Hero = () => {
  const circlesRef = useRef([])
  const h1Ref = useRef(null)
  const h6Ref = useRef(null)
  const [supportsAnimation, setSupportsAnimation] = useState(true)

  useEffect(() => {
    const supportsAnimations = () => {
      return window.CSS && CSS.supports("animation", "name")
    }

    setSupportsAnimation(supportsAnimations())

    if (supportsAnimation) {
      // Animate the background circles
      circlesRef.current.forEach((circle) => {
        gsap.to(circle, {
          x: "random(-200, 200)",
          y: "random(-200, 200)",
          scale: "random(0.5, 1.5)",
          duration: "random(5, 10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      })

      // Animate the h1 and h6 elements
      if (h1Ref.current && h6Ref.current) {
        gsap.fromTo(
          h1Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 0.7, ease: "power2.in" }
        )

        gsap.fromTo(
          h6Ref.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
        )
      }
    }
  }, [supportsAnimation])

  const createCircles = (count) => {
    const colors = [
      "#7bc950",
      "#2d2b75",
      "#e92f5e",
      "#fca723",
      "#87ceeb",
      "#1E90FF",
    ]

    return Array.from({ length: count }).map((_, i) => {
      const color = colors[Math.floor(Math.random() * colors.length)]

      return (
        <div
          key={i}
          ref={(e) => (circlesRef.current[i] = e)}
          className="absolute rounded-full"
          style={{
            width: "10em",
            height: "11em",
            backgroundColor: color,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            filter: "blur(10px)",
            opacity: 0.7,
            pointerEvents: "none",
          }}
        />
      )
    })
  }

  return (
    <section
      className={`relative w-full h-[100vh] overflow-hidden ${
        supportsAnimation ? "" : "bg-blue-500"
      }`}
    >
      {supportsAnimation && createCircles(30)}

      <div className="flex flex-col items-center justify-center h-full">
        <h1
          ref={h1Ref}
          className="text-white text-[6em] md:text-[12em] font-bold text-center relative z-10 text-shadow-sm"
        >
          Infinite Pixel
        </h1>
        <h6
          ref={h6Ref}
          className="text-white text-[1.5em] md:text-[2em] text-center relative z-10 capitalize"
        >
          Affordable custom web design for small businesses
        </h6>
      </div>
    </section>
  )
}

export default Hero
