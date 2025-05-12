"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const services = [
  {
    title: "Custom Web Design",
    description:
      "Beautiful, responsive websites tailored to your brand identity.",
    price: "$1,200",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Robust online stores with seamless checkout and product management.",
    price: "$1,800",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings and get found by the right people.",
    price: "$600",
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support, updates, and performance enhancements.",
    price: "$150/month",
  },
  {
    title: "Branding & Identity",
    description: "Logos, color schemes, and full branding packages.",
    price: "$950",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean interfaces and intuitive user experiences that convert.",
    price: "$1,000",
  },
]

export default function Services() {
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.from(cardsRef.current, {
      //   opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    })
  }, [])

  const handlePurchase = (title) => {
    alert(`You selected "${title}". Purchase logic goes here.`)
  }

  return (
    <section className="py-12 px-4 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-gray-800 mb-6">
                {service.price}
              </p>
            </div>
            <button
              onClick={() => handlePurchase(service.title)}
              className="mt-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
