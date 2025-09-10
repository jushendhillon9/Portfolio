import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    port: Number(process.env.PORT) || 5173,  // Fallback to 5173 if PORT isn't set
  },
});
