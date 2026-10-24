/* ==========================================================================
   SEO: título da aba e descrição que o Google mostra, página por página.
   Título: até ~60 caracteres. Descrição: até ~155 (o resto o Google corta).
   Página fora desta lista é tratada como "não encontrada" e não é indexada.
   ========================================================================== */

export const SITE = "https://thecookie.com.br";

export const SEO = {
  "/": {
    titulo: "The Cookie | Cookies artesanais em Montes Claros",
    descricao:
      "Cookies artesanais americanos em Montes Claros: delivery na cidade, massa congelada para assar em casa, brindes corporativos e revenda para o seu negócio.",
  },
  "/sobre": {
    titulo: "A marca | The Cookie",
    descricao:
      "Da cozinha de casa para a sua história: conheça a The Cookie, cookies artesanais com massa generosa, muito chocolate e toque americano, em Montes Claros.",
  },
  "/kits": {
    titulo: "Brindes corporativos e presentes | The Cookie",
    descricao:
      "Brindes corporativos com cookies artesanais e a identidade da sua empresa: para clientes, colaboradores e eventos em Montes Claros. Peça seu orçamento.",
  },
  "/faca-em-casa": {
    titulo: "Massa de cookie congelada para assar | The Cookie",
    descricao:
      "Massa de cookie artesanal congelada em cilindro: corte, asse no forno ou na air fryer e tenha cookie quentinho em casa, no cardápio ou na sua marca.",
  },
  "/revenda": {
    titulo: "Revenda de cookies artesanais | The Cookie",
    descricao:
      "Leve The Cookie para o seu negócio: cookies prontos ou massa congelada, com display de balcão. Primeiro pedido no consignado, sem risco. Fale com a gente.",
  },
};

export const SEO_NAO_ENCONTRADA = {
  titulo: "Página não encontrada | The Cookie",
  descricao: "Essa página não existe. Veja os cookies artesanais da The Cookie em Montes Claros.",
};
