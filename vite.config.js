import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // se for publicar no GitHub Pages num subdiretório, troque para "/nome-do-repo/"
  base: "/",
});
