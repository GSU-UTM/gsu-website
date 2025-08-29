import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Set to your repo name for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index-[hash].js",
      },
    },
  },
});
