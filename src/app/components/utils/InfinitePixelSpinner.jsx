"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function InfinitePixelSpinner() {
  const [showSpinner, setShowSpinner] = useState(true)
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
    "bg-red-600",
    "bg-orange-600",
    "bg-yellow-600",
    "bg-green-600",
    "bg-blue-600",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-rose-600",
  ]

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center bg-black/95 justify-center">
      <div className="grid grid-cols-3 gap-2">
        {rainbowColors.map((color, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className={`w-4 h-4 rounded-lg ${color}`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-white font-mono tracking-wider text-center"></p>
    </div>
  )
}
