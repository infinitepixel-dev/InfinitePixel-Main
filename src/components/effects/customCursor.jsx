import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CustomCursor = ({ fade }) => {
  const cursorRef = useRef(null);
  const pixels = useRef([]);
  const availablePixels = useRef([]);

  useEffect(() => {
    // if fade is true slowly set the opacity of the cursor to 0
    if (fade) {
      //check if the cursorRef is null, if it is, slowly fade out the previous cursors effects
      if (cursorRef.current) {
        cursorRef.current.style.transition = "opacity 5s";
      } else {
        pixels.current.forEach((pixel) => {
          //set the opacity over 5s to 0
          pixel.style.transition = "opacity 5s";
        });
        return;
      }
    }

    const colors = [
      "#7bc950",
      "#2d2b75",
      "#e92f5e",
      "#fbcf7f",
      "#fca723",
      "#87ceeb",
    ];

    // Initialize pixel elements
    for (let i = 0; i < 230; i++) {
      // Adjust the number based on performance and effect
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
      // Increase the range and variability of distances
      const distance = Math.random() * 50 + 15; // Increased variability
      let progress = 0;
      const duration = 2000; // Keep or adjust duration based on testing

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

        // Adjust progress rate for a more dynamic movement, if needed
        progress += 8 / duration;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

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
          colors[Math.floor(Math.random() * colors.length)]; // Set random color

        animatePixel(pixel, x, y);
      }
    };

    const pixelsToRemove = pixels.current.slice(); // Copy the value of pixels.current to a new variable

    document.addEventListener("mousemove", animateCursor);
    document.addEventListener("touchmove", animateCursor);

    return () => {
      document.removeEventListener("mousemove", animateCursor);
      document.removeEventListener("touchmove", animateCursor);
      pixelsToRemove.forEach((pixel) => pixel.remove()); // Use the new variable in the cleanup function
    };
  }, [fade]);

  return <>{fade ? <></> : <div ref={cursorRef} className="cursor"></div>}</>;
};

CustomCursor.propTypes = {
  fade: PropTypes.bool,
};

export default CustomCursor;
