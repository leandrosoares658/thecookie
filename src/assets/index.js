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

/** artes dos banners da home */
export const BANNERS_IMG = { banner1, banner2, banner3 };

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
