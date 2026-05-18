import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Change "portfolio" to your GitHub repo name
  base: "/portfolio/",
});
