import logo from "./logo.png";
import logoClaro from "./logo.png";
import tag from "./tag.webp";

import pilha from "./pilha.webp";
import ponto from "./ponto.webp";
import bite from "./bite.webp";
import vermelho from "./vermelho.webp";
import navy from "./navy.webp";
import embalado from "./embalado.webp";
import caixaAberta from "./caixa-aberta.webp";
import cookieClose from "./cookie-close.webp";

import presente from "./presente.webp";
import vitrine from "./vitrine.webp";
import pessoa from "./pessoa.webp";
import embalagem from "./embalagem.webp";

import banner1 from "./banner-1.png";
import banner2 from "./banner-2.png";
import banner3 from "./banner-3.png";
import bannerMobile1 from "./BannerMobile-1.png";
import bannerMobile2 from "./BannerMobile-2.png";
import bannerMobile3 from "./BannerMobile-3.png";

/** artes dos banners da home */
export const BANNERS_IMG = { banner1, banner2, banner3 };

/** versões verticais para celular — mesma chave da arte de desktop equivalente */
export const BANNERS_MOBILE_IMG = {
  banner1: bannerMobile1, // massa congelada
  banner2: bannerMobile3, // lançamento 01/11
  banner3: bannerMobile2, // brindes e presentes
};

export {
  logo, logoClaro, tag,
  pilha, ponto, bite, vermelho, navy, embalado, caixaAberta, cookieClose,
  presente, vitrine, pessoa, embalagem,
};

/**
 * Mapa usado pelos produtos: cada produto guarda só a CHAVE da foto,
 * então trocar a imagem de um sabor é mexer em um lugar só.
 */
export const FOTOS = {
  pilha, ponto, bite, vermelho, navy, embalado, caixaAberta, cookieClose,
  presente, vitrine, pessoa, embalagem,
};
