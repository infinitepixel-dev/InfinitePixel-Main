import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const colors = [
      "#7bc950",
      "#2d2b75",
      "#e92f5e",
      "#fbcf7f",
      "#fca723",
      "#87ceeb",
    ];

    const animateCursor = (e) => {
      // Get the x and y coordinates of the cursor relative to the entire document
      const { pageX: x, pageY: y } = e.touches ? e.touches[0] : e;

      const cursor = cursorRef.current; // Gets the cursor element

      cursor.style.left = `${x}px`; // Set the left position of the cursor
      cursor.style.top = `${y}px`; // Set the top position of the cursor

      // Pixel effects
      const pixel = document.createElement("div");
      pixel.style.width = "2px";
      pixel.style.height = "2px";

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      pixel.style.background = randomColor;

      pixel.style.position = "absolute"; // Set the position of the pixel to absolute
      pixel.style.pointerEvents = "none"; // Disable pointer events on the pixel
      pixel.style.transform = "translate(-50%, -50%)"; // Center the pixel
      pixel.style.left = `${x}px`; // Set the left position of the pixel
      pixel.style.top = `${y}px`; // Set the top position of the pixel
      document.body.appendChild(pixel);

      // Pixel animation calculation
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
          duration: 1000,
          easing: "ease-out",
          fill: "forwards",
        }
      );

      setTimeout(() => {
        pixel.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", animateCursor);
    document.addEventListener("touchmove", animateCursor);

    return () => {
      document.removeEventListener("mousemove", animateCursor);
      document.removeEventListener("touchmove", animateCursor);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
