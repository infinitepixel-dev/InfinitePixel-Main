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

  return (
    <section className="relative w-full h-[100vh] overflow-hidden clip-bottom">
      {/* Northern Lights Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-black to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ededed] via-[#0874f0] to-[#f10ef1] opacity-50 filter blur-[100px] animate-northern-lights" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
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

      <style>{`
        @keyframes northern-lights {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-northern-lights {
          animation: northern-lights 10s ease-in-out infinite;
          background-size: 200% 200%;
        }

        /* Adding the angled bottom */
        .clip-bottom {
          clip-path: polygon(0 0, 100% 0, 190% 85%, 0 100%);
        }
      `}</style>
    </section>
  )
}

export default Hero
