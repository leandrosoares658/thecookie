import logo from "./logo.webp";
import logoClaro from "./logo.webp";

import cookieClose from "./cookie-close.webp";
import vitrine from "./vitrine.webp";
import embalagem from "./embalagem.webp";
import saboresRecheados from "./sabores-recheados.webp";
import massaCaixa from "./massa-caixa.webp";
import massaEmbalada from "./massa-embalada.webp";
import brindeClientes from "./brinde-clientes.webp";
import brindeColaboradores from "./brinde-colaboradores.webp";
import brindeEventos from "./brinde-eventos.webp";
import brindesPresentes from "./brindes-presentes.webp";
import presentesCapa from "./presentes-capa.webp";

import banner1 from "./banner-1.webp";
import banner2 from "./banner-2.webp";
import banner3 from "./banner-3.webp";
import banner4 from "./banner-4.webp";
import bannerMobile1 from "./BannerMobile-1.webp";
import bannerMobile2 from "./BannerMobile-2.webp";
import bannerMobile3 from "./BannerMobile-3.webp";
import bannerMobile4 from "./BannerMobile-4.webp";

/** artes dos banners da home */
export const BANNERS_IMG = { banner1, banner2, banner3, banner4 };

/** versões verticais para celular — mesma chave da arte de desktop equivalente.
    Banner sem versão aqui não aparece no celular. */
export const BANNERS_MOBILE_IMG = {
  banner1: bannerMobile1, // massa congelada
  banner2: bannerMobile3, // lançamento 01/11
  banner3: bannerMobile2, // brindes e presentes
  banner4: bannerMobile4, // cookie bom rende história
};

export {
  logo, logoClaro,
  cookieClose, vitrine, embalagem, saboresRecheados, massaCaixa, massaEmbalada,
  brindeClientes, brindeColaboradores, brindeEventos, brindesPresentes, presentesCapa,
};
