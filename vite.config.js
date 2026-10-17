import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  css: {
    modules: {
      // no CSS escrevemos .quadro-foto; no JSX acessamos s.quadroFoto
      localsConvention: "camelCase",
      // nome legível no DevTools em dev, curto no build
      generateScopedName:
        process.env.NODE_ENV === "production"
          ? "[hash:base64:6]"
          : "[name]__[local]",
    },
  },

  // GitHub Pages em subdiretório: troque para "/thecookie/"
  base: "/",
});
