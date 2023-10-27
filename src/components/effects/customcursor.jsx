import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", animateCursor);

    function animateCursor(e) {
      //Array for each color pixel
      const colors = ["#7bc950", "#2d2b75", "#e92f5e", "#fbcf7f", "#fca723"];

      const { clientX: x, clientY: y } = e;
      const cursor = cursorRef.current;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;

      // Create a pixel and append to cursor
      const pixel = document.createElement("div");
      pixel.style.width = "2px";
      pixel.style.height = "2px";

      // Generates a random color from the colors array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      pixel.style.background = randomColor;

      pixel.style.position = "absolute";
      pixel.style.pointerEvents = "none";
      pixel.style.transform = "translate(-50%, -50%)";
      pixel.style.left = `${x}px`;
      pixel.style.top = `${y}px`;
      document.body.appendChild(pixel);

      // Animate the pixel outwards and fade it out
      const angle = Math.random() * (2 * Math.PI); // Random angle in radians
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

      // Remove the pixel after animation
      setTimeout(() => {
        pixel.remove();
      }, 1000);
    }

    return () => {
      document.removeEventListener("mousemove", animateCursor);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
