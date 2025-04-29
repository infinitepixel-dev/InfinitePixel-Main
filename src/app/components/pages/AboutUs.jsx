"use client"; // IMPORTANT for Next.js App Router if using /app folder

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image"; // ✅ Use next/image instead of regular img for optimization

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Configure ScrollTrigger (MUST be after registering)
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
});

export default function AboutUs() {
  console.log("Hello there!!");

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageEl = imageRef.current;
    const textEl = textRef.current;

    if (!imageEl || !textEl) return; // Safeguard against missing refs

    const ctx = gsap.context(() => {
      const mm = ScrollTrigger.matchMedia();
      mm.add("(min-width: 0px)", () => {
        gsap.fromTo(
          imageEl,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          textEl,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean GSAP context on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex md:flex-row flex-col justify-between items-center bg-slate-50 mt-12 p-2"
    >
      <div ref={imageRef} className="mb-10 w-full md:w-1/2">
        {/* ✅ Next.js Image optimization */}
        <Image
          src="/images/section3.jpg"
          alt="About Us Image"
          width={600}
          height={400}
          className="shadow-lg rounded-lg"
          priority
        />
      </div>

      <div ref={textRef} className="md:pl-8 w-full md:w-1/2 text-left">
        <h2 className="mb-4 font-semibold text-cyan-950 text-3xl">
          Why Use Infinite Pixel?
        </h2>
        <p className="mb-4 text-gray-700 text-lg">
          We specialize in creating custom websites tailored to your business
          needs. With a focus on responsive design, user experience, and modern
          technologies, our team ensures that every project meets the highest
          standards...
        </p>
        <ul className="space-y-2 mb-10 md:mb-0">
          {[
            "Responsive and modern designs",
            "Our team is based in the US",
            "User-focused development approach",
            "Secure and reliable technologies",
            "Transparent communication and collaboration",
            "Experienced team delivering high-quality solutions",
          ].map((item, index) => (
            <li
              key={item}
              className="flex items-start motion-preset-blur-down"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <FaCheckCircle className="flex-shrink-0 mt-1 mr-2 w-4 h-4 text-green-500" />
              <span className="text-gray-700 text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
