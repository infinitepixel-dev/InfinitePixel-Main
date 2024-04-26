import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const CustomCursor = ({ fade }) => {
  const cursorRef = useRef(null);
  const pixels = useRef([]);
  const availablePixels = useRef([]);
  const [cursorOpacity, setCursorOpacity] = useState(1); // State to control cursor opacity

  // Set up the transition for the cursor on mount
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transition = "opacity 0.5s ease-out";
    }
  }, []);

  // Adjust cursor opacity based on the fade prop
  useEffect(() => {
    setCursorOpacity(fade ? 0 : 1);
  }, [fade]);

  // Animation logic for pixels, skipped if cursor is faded out
  useEffect(() => {
    if (cursorOpacity === 0) return; // Skip animations when cursor is faded out

    const colors = [
      "#7bc950",
      "#2d2b75",
      "#e92f5e",
      "#fbcf7f",
      "#fca723",
      "#87ceeb",
    ];

    for (let i = 0; i < 230; i++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.style.width = "2px";
      pixel.style.height = "2px";
      pixel.style.position = "absolute";
      pixel.style.pointerEvents = "none";
      pixel.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(pixel);
      pixels.current.push(pixel);
      availablePixels.current.push(pixel);
    }

    const animatePixel = (pixel, startX, startY) => {
      const angle = Math.random() * (2 * Math.PI);
      const distance = Math.random() * 50 + 15;
      let progress = 0;
      const duration = 2000;

      const animate = () => {
        const elapsedTime = progress * duration;
        if (elapsedTime >= duration) {
          pixel.style.opacity = 0;
          availablePixels.current.push(pixel);
          return;
        }

        const x = startX + Math.cos(angle) * distance * progress;
        const y = startY + Math.sin(angle) * distance * progress;
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.opacity = String(1 - progress);
        progress += 8 / duration;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const pixelsToRemove = [...pixels.current]; // Create a local copy of pixels.current

    const animateCursor = (e) => {
      const { pageX: x, pageY: y } = e.touches ? e.touches[0] : e;
      const cursor = cursorRef.current;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      if (availablePixels.current.length > 0) {
        const pixel = availablePixels.current.pop();
        pixel.style.left = `${x}px`;
        pixel.style.top = `${y}px`;
        pixel.style.opacity = 1;
        pixel.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        animatePixel(pixel, x, y);
      }
    };

    document.addEventListener("mousemove", animateCursor);
    document.addEventListener("touchmove", animateCursor);

    return () => {
      document.removeEventListener("mousemove", animateCursor);
      document.removeEventListener("touchmove", animateCursor);
      pixelsToRemove.forEach((pixel) => pixel.remove());
    };
  }, [cursorOpacity]); // Depend on the cursorOpacity state

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{ opacity: cursorOpacity }}
    ></div>
  );
};

CustomCursor.propTypes = {
  fade: PropTypes.bool,
};

export default CustomCursor;
