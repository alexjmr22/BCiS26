import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/alexandrejmr22.github.io/BCiS26',
  plugins: [react(), tailwindcss()],
})
