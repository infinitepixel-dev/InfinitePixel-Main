import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),

      // Main Website paths

      "@web": path.resolve(__dirname, "src/components/website"),
      "@web/pages": path.resolve(__dirname, "src/components/website/pages"),
      "@web/cards": path.resolve(__dirname, "src/components/website/cards"),
      "@web/utilities": path.resolve(
        __dirname,
        "src/components/website/utilities"
      ),
      //TODO -  Dashboard
      "@dashboard": path.resolve(__dirname, "src/components/dashboard"),
      "@dashboard/pages": path.resolve(
        __dirname,
        "src/components/dashboard/pages"
      ),
      "@dashboard/ui": path.resolve(__dirname, "src/components/dashboard/ui"),
    },
  },
})
