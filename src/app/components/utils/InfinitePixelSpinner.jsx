"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InfinitePixelSpinner() {
  const dotsRef = useRef([]);

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
      );
    }
  }, []);

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
  ];

  return (
    <div className="z-50 fixed inset-0 flex flex-col justify-center items-center bg-black/95">
      <div className="gap-2 grid grid-cols-3">
        {rainbowColors.map((color, i) => (
          <div
            key={i}
            ref={(el) => (dotsRef.current[i] = el)}
            className={`w-4 h-4 rounded-lg ${color}`}
          />
        ))}
      </div>
      <p className="mt-4 font-mono text-white text-sm text-center tracking-wider">
        Loading Dashboard...
      </p>
    </div>
  );
}
