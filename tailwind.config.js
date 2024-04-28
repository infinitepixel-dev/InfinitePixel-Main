/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "visible", // Ensure visibility from the start
          },
          "30%": {
            // Halfway through the typing
            width: "100%",
            visibility: "visible",
          },
          "50%": {
            // Begins to reverse
            width: "100%",
            visibility: "visible",
          },
          "100%": {
            width: "0%",
            visibility: "visible", // Ends with visibility still on
          },
        },
        blink: {
          "0%, 100%": {
            borderColor: "initial", // Use the original border color
          },
          "50%": {
            borderColor: "transparent",
          },
        },
      },
      animation: {
        // Adjust the duration to 10s to accommodate both typing out and reversing
        // The steps function and infinite animation count remains the same
        // The blink animation is kept as is for the cursor effect
        typing:
          "typing 7s steps(30, end) infinite, blink 0.5s step-end infinite",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
