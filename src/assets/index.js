/* O `?foto`, `?banner`, etc. define os tamanhos gerados no build (ver TIPOS em
   vite.config.js). Imagem nova entra igual, e aparece na tela pelo componente Foto. */
import logo from "./logo.webp?logo";
import logoClaro from "./logo.webp?logo";

import cookieClose from "./cookie-close.webp?capa";
import vitrine from "./vitrine.webp?foto";
import embalagem from "./embalagem.webp?foto";
import saboresRecheados from "./sabores-recheados.webp?foto";
import massaCaixa from "./massa-caixa.webp?foto";
import massaEmbalada from "./massa-embalada.webp?foto";
import brindeClientes from "./brinde-clientes.webp?foto";
import brindeColaboradores from "./brinde-colaboradores.webp?foto";
import brindeEventos from "./brinde-eventos.webp?foto";
import brindesPresentes from "./brindes-presentes.webp?foto";
import presentesCapa from "./presentes-capa.webp?capa";

import banner1 from "./banner-1.webp?banner";
import banner2 from "./banner-2.webp?banner";
import banner3 from "./banner-3.webp?banner";
import banner4 from "./banner-4.webp?banner";
import bannerMobile1 from "./BannerMobile-1.webp?bannerMobile";
import bannerMobile2 from "./BannerMobile-2.webp?bannerMobile";
import bannerMobile3 from "./BannerMobile-3.webp?bannerMobile";
import bannerMobile4 from "./BannerMobile-4.webp?bannerMobile";

/** artes dos banners da home */
export const BANNERS_IMG = { banner1, banner2, banner3, banner4 };

/** versões verticais para celular — mesma chave da arte de desktop equivalente.
    Banner sem versão aqui não aparece no celular. */
export const BANNERS_MOBILE_IMG = {
  banner1: bannerMobile1, // massa congelada
  banner2: bannerMobile3, // já pode pedir
  banner3: bannerMobile2, // brindes e presentes
  banner4: bannerMobile4, // cookie bom rende história
};

export {
  logo, logoClaro,
  cookieClose, vitrine, embalagem, saboresRecheados, massaCaixa, massaEmbalada,
  brindeClientes, brindeColaboradores, brindeEventos, brindesPresentes, presentesCapa,
};
