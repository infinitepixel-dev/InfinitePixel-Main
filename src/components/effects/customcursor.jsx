import { useEffect, useRef } from "react";
import "./customcursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const pixelsRef = useRef([]);
  const colors = ["#7bc950", "#2d2b75", "#e92f5e", "#fbcf7f", "#fca723"];

  useEffect(() => {
    // Initialize pixel divs
    for (let i = 0; i < 50; i++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      document.body.appendChild(pixel);
      pixelsRef.current.push(pixel);
    }

    const handleMove = (e) => {
      const { clientX, clientY } = e.touches ? e.touches[0] : e;
      const x = clientX + window.scrollX;
      const y = clientY + window.scrollY;

      // Update cursor position
      const cursor = cursorRef.current;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      // Update pixel positions
      const pixel = pixelsRef.current.shift();
      if (pixel) {
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        animatePixel(pixel);
        pixelsRef.current.push(pixel);
      }
    };

    const animatePixel = (pixel) => {
      const angle = Math.random() * (2 * Math.PI);
      const distance = 20;
      pixel.animate(
        [
          { transform: `translate(-50%, -50%)`, opacity: 1 },
          {
            transform: `translate(-50%, -50%) translate(${
              Math.cos(angle) * distance
            }px, ${Math.sin(angle) * distance}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
