import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaHtml5, FaCss3Alt, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
// Register GSAP plugin for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

// Define the ScrollingIconsBar component
const ScrollingIconsBar = () => {
  const iconContainerRef = useRef(null);

  useEffect(() => {
    const iconContainer = iconContainerRef.current;

    // Setup ScrollTrigger to start animation when the bar comes into view
    ScrollTrigger.create({
      trigger: iconContainer,
      start: "top bottom", // Start the animation when the top of the bar reaches the bottom of the viewport
      onEnter: () => {
        gsap.fromTo(
          iconContainer,
          { xPercent: 0 },
          {
            xPercent: -50,
            ease: "none",
            duration: 30,
            repeat: -1,
          }
        );
      },
    });
  }, []);

  return (
    <div className="relative bg-blue-950 mt-2 md:mt-8 py-4 w-full overflow-hidden">
      <div
        ref={iconContainerRef}
        className="flex justify-between items-center space-x-8 md:space-x-16 w-[200%] text-white text-6xl"
      >
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <RiTailwindCssFill />
        <FaNode />

        {/* Duplicate icons for the continuous scroll effect */}
        <FaReact />
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <RiTailwindCssFill />
        <FaNode />
      </div>
    </div>
  );
};

// Correct export
export { ScrollingIconsBar as default };
