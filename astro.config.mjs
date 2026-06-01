// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Deployed to GitHub Pages as a user site -> served from the root, no `base` needed.
export default defineConfig({
  site: "https://danzhechen.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
