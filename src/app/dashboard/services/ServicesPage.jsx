"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

//INFO Icons
import {
  FaPaintBrush, // Custom Web Design
  FaShoppingCart, // E-commerce Solutions
  FaSearch, // SEO Optimization
  FaTools, // Website Maintenance
  FaIdBadge, // Branding & Identity
  FaDraftingCompass, // UI/UX Design
} from "react-icons/fa";

//INFO UI
import PurchaseButton from "@ui/buttons/PurchaseButton";

const services = [
  {
    id: 1,
    title: "Custom Web Design",
    description:
      "Beautiful, responsive websites tailored to your brand identity.",
    price: "$1,200",
    icon: <FaPaintBrush />,
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description:
      "Robust online stores with seamless checkout and product management.",
    price: "$1,800",
    icon: <FaShoppingCart />,
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "Boost your search engine rankings and get found by the right people.",
    price: "$600",
    icon: <FaSearch />,
  },
  {
    id: 4,
    title: "Website Maintenance",
    description: "Ongoing support, updates, and performance enhancements.",
    price: "$150/month",
    icon: <FaTools />,
  },
  {
    id: 5,
    title: "Branding & Identity",
    description: "Logos, color schemes, and full branding packages.",
    price: "$950",
    icon: <FaIdBadge />,
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "Clean interfaces and intuitive user experiences that convert.",
    price: "$1,000",
    icon: <FaDraftingCompass />,
  },
];

export default function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      //   opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const handlePurchase = (title) => {
    alert(`You selected "${title}". Purchase logic goes here.`);
  };

  return (
    <section className="flex flex-col justify-start items-center bg-gray-100 dark:bg-gray-800 px-4 rounded-md min-h-screen">
      <h2 className="my-4 font-bold text-gray-800 dark:text-gray-100 text-3xl text-center">
        Our Services
      </h2>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-fit">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-xl p-4 rounded-2xl max-w-96 min-h-[4rem] transition duration-100"
          >
            {/* Content + Button wrapper */}
            <div className="flex flex-col flex-1 justify-between h-full">
              <div>
                <div className="flex justify-between items-center gap-2 mb-2">
                  <h3 className="font-extrabold text-blue-600 dark:text-blue-500 text-xl">
                    {service.title}
                  </h3>
                  <div className="flex-shrink-0 text-blue-600 dark:text-slate-300 text-3xl">
                    {service.icon}
                  </div>
                </div>
                <hr className="mb-2 border-gray-300 dark:border-gray-600" />

                <div className="flex flex-row items-center gap-2 mb-4">
                  <div className="flex-1 max-w-64 min-h-[4rem] text-gray-600 dark:text-gray-300">
                    {service.description}
                  </div>

                  {/* <div className="flex-shrink-0 min-w-12 text-blue-600 dark:text-slate-300 text-3xl">
                    {service.icon}
                  </div> */}
                </div>
              </div>

              <PurchaseButton
                clickFunction={() => handlePurchase(service.title)}
                price={service.price}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
