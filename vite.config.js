import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { imagetools } from "vite-imagetools";
import sharp from "sharp";

/**
 * Tamanhos gerados para cada tipo de imagem. Em src/assets/index.js, o `?tipo`
 * no fim do import escolhe a linha daqui; o build corta e comprime sozinho, e
 * o componente Foto (ui.jsx) entrega a cada tela só o tamanho que ela precisa.
 * Banners têm texto na arte, por isso a qualidade maior.
 */
const TIPOS = {
  foto: { w: "400;660;1000", quality: "72" },
  capa: { w: "1280;1600;2050", quality: "72" },
  banner: { w: "800;1280;1600;2050", quality: "78" },
  bannerMobile: { w: "480;760;1122", quality: "78" },
  logo: { w: "160;340;450", quality: "80" },
  // sem cortar: só para saber largura e altura do arquivo
  desenho: {},
};

function diretivas(url) {
  const tipo = Object.keys(TIPOS).find((t) => url.searchParams.has(t));
  if (!tipo) return new URLSearchParams();
  return new URLSearchParams({ ...TIPOS[tipo], format: "webp", as: "picture" });
}

/**
 * Coloca no HTML o aviso do primeiro banner e da fonte principal. Sem isso o
 * navegador só descobre o banner (a maior imagem da tela) depois de baixar e
 * rodar o JavaScript. Se o PRIMEIRO banner de data/conteudo.js mudar, troque
 * os nomes abaixo.
 *
 * O banner só existe na Home: as outras páginas usam o app.html, cópia sem o
 * aviso do banner, para não baixarem uma imagem que não vão mostrar (quem
 * escolhe o HTML de cada endereço é o public/_redirects).
 */
function avisosNoHtml() {
  const BANNER_MOBILE = "BannerMobile-1.webp";
  const BANNER_COMPUTADOR = "banner-1.webp";

  async function srcset(bundle, nome) {
    const arquivos = Object.values(bundle).filter((a) => a.type === "asset" && a.names?.includes(nome));
    const itens = await Promise.all(arquivos.map(async (a) => {
      const { width } = await sharp(Buffer.from(a.source)).metadata();
      return { width, url: `/${a.fileName}` };
    }));
    return itens.sort((a, b) => a.width - b.width).map((i) => `${i.url} ${i.width}w`).join(", ");
  }

  return {
    name: "avisos-no-html",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      async handler(html, { bundle }) {
        const fonte = Object.values(bundle).find((a) => /archivo-latin-wght-normal.*\.woff2$/.test(a.fileName));
        const banner = async (media, nome) => ({
          tag: "link",
          attrs: {
            rel: "preload", as: "image", fetchpriority: "high", media,
            imagesrcset: await srcset(bundle, nome), imagesizes: "100vw",
          },
          injectTo: "head",
        });
        return {
          html,
          tags: [
            await banner("(max-width: 600px)", BANNER_MOBILE),
            await banner("(min-width: 601px)", BANNER_COMPUTADOR),
            {
              tag: "link",
              attrs: { rel: "preload", as: "font", type: "font/woff2", href: `/${fonte.fileName}`, crossorigin: true },
              injectTo: "head",
            },
          ],
        };
      },
    },
    writeBundle({ dir }, bundle) {
      const html = bundle["index.html"].source.toString();
      writeFileSync(join(dir, "app.html"), html.replace(/\s*<link rel="preload" as="image"[^>]*>/g, ""));
    },
  };
}

export default defineConfig({
  plugins: [react(), imagetools({ defaultDirectives: diretivas }), avisosNoHtml()],

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
