"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function InfinitePixelSpinner() {
  const dotsRef = useRef([])

  useEffect(() => {
    if (dotsRef.current.length) {
      gsap.fromTo(
        dotsRef.current,
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1.2,
          opacity: 1,
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.1,
            from: "center",
          },
          duration: 0.6,
          ease: "power1.inOut",
        }
      )
    }
  }, [])

  const rainbowColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-rose-500",
  ]

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80">
      <div className="grid grid-cols-3 gap-2">
        {rainbowColors.map((color, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className={`w-4 h-4 rounded-sm ${color}`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-white font-mono tracking-wider text-center">
        Loading Infinite Pixel...
      </p>
    </div>
  )
}
