// components/ProjectStats.jsx
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const stats = [
  { label: "Projects Completed", value: 14 },
  { label: "States Reached", value: 8 },
  { label: "Countries Delivered", value: 3 },
]

export default function ProjectStats() {
  const countersRef = useRef([])

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          duration: 2,
          innerText: stats[index].value,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText)
          },
        }
      )
    })
  }, [])

  return (
    <div className="w-full px-4 py-12 text-white bg-gray-900 md:px-12">
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto text-center sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index}>
            <div
              ref={(el) => (countersRef.current[index] = el)}
              className="text-4xl font-bold text-blue-500"
            >
              0
            </div>
            <p className="mt-2 text-sm tracking-wide text-white uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
