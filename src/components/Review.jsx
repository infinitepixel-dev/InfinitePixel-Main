import { useEffect, useRef } from "react"
import { FaStar } from "react-icons/fa"
import { gsap } from "gsap"

const reviewData = {
  name: "Corey P 'Guitarist of Jawfane'",
  stars: 5,
  review: `Infinite Pixel are some of the most down-to-earth space cadets making websites.
  They listen, they explain, they execute.
  Our band website turned out a tier above because we chose them.
  I cannot recommend them enough.`,
}

export default function Review() {
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
      className="max-w-md p-6 mx-auto mt-10 bg-white shadow-xl rounded-2xl"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {reviewData.title}
        </h3>
        <span className="text-sm text-gray-500">{reviewData.date}</span>
      </div>

      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={`text-xl ${
              index < reviewData.stars ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="mb-4 text-blue-950">{reviewData.review}</p>

      <div className="text-sm italic text-right text-gray-500">
        — {reviewData.name}
      </div>
    </div>
  )
}
