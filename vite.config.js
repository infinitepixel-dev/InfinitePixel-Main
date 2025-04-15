import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { webcrypto } from "node:crypto"

// Inject webcrypto into global scope if needed
if (!globalThis.crypto?.getRandomValues) {
  globalThis.crypto = webcrypto
}

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
})
