/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      m375: "375px", // Mobile (iPhone X and similar)
      m384: "384px", // Mobile (Samsung Galaxy S23 Ultra)
      m693: "693px", // Mobile (Samsung Galaxy S23 Ultra - landscape)
      galaxyS23Ultra: "384px",
      galaxyS23Ultra_Landscape: "693px", // Mobile (Galaxy S23 Ultra Landscape)
      iphone6_7_8: "640px", // Mobile (iPhone 6/7/8 and similar)
      iphoneX: "375px", // Mobile (iPhone X and similar)
      iphone13ProMax: "414px", // Mobile (iPhone 13 Pro Max)
      iphone13ProMax_Landscape: "896px", // Mobile (iPhone 13 Pro Max Landscape)
      iphone15ProMax: "428px", // Mobile (iPhone 15 Pro Max)
      iphone15ProMax_Landscape: "926px", // Mobile (iPhone 15 Pro Max Landscape)
      m768: "768px", // Tablet (iPad portrait mode and similar)
      t1920: "1920px", // Tablet (Large tablet screens)
      t2560: "2560px", // Tablet (Extra-large tablet screens)
      l1024: "1024px", // Laptop (Small laptop screens)
      l1366: "1366px", // Laptop (Common resolution)
      l1440: "1440px", // Laptop (Higher resolution)
      d1080: "1080px", // Desktop (HD monitors)
      d1280: "1280px", // Desktop (Medium-sized monitors)
      d1440: "1440px", // Desktop (Large monitors)
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
}
