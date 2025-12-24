//ReviewCard.jsx
"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const reviewData = {
  name: "Corey P 'Guitarist of Jawfane'",
  stars: 5,
  // date: "4/08/2025",
  review: `Infinite Pixel are some of the most down-to-earth space cadets making websites.
  They listen, they explain, they execute.
  Our band website turned out a tier above because we chose them.
  I cannot recommend them enough.`,
}

export default function ReviewCard() {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-slate-300 shadow-xl shadow-yellow-600/40 md:mx-auto md:mt-14 mb-10 md:mb-20 p-6 md:p-6 rounded-2xl w-full md:w-3/4 md:max-w-md"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 text-xl">
          {reviewData.title}
        </h3>
        <span className="text-gray-500 text-sm">{reviewData.date}</span>
      </div>

      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`text-xl ${
              index < reviewData.stars
                ? "fill-yellow-400 transition-all stroke-slate-500 hover:fill-yellow-500 w-5 mx-1"
                : "text-blue-800"
            }`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 19.771 4.665 24 6 15.272 0 9.423l8.332-1.268z" />
          </svg>
        ))}
      </div>

      <p className="mb-4 text-blue-950">{reviewData.review}</p>

      <div className="text-slate-600 text-sm text-right italic">
        — {reviewData.name}
      </div>
    </div>
  )
}
