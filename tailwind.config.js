/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router (if using)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can copy your custom colors, fonts, etc., from your Vite one if you want!
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-scrollbar"),
    // require("tailwind-scrollbar-hide"),
    require("tailwindcss-motion"), // ✅ Install and add motion here
  ],
};
