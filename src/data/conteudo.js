/* ==========================================================================
   Textos das páginas: entrega, revenda, dúvidas, depoimentos.
   ⚠️ Bairros, prazos, taxas e números de revenda são EXEMPLO. Confirme tudo.
   ========================================================================== */

import { MARCA } from "./marca";

/* Banners da home: a arte já traz o texto, então `alt` repete o que está escrito.
   `para` pode ser uma rota do site ("/kits") ou um endereço externo (https://…). */
export const BANNERS = [
  {
    imagem: "banner1",
    para: "/faca-em-casa",
    alt: "Hoje a sua casa terá cheiro de cookie. Massa congelada para assar em casa: 750 g rende 10 cookies, 1,5 kg rende 20 cookies.",
  },
  {
    imagem: "banner2",
    para: MARCA.cardapio,
    alt: "Tá quase na hora! Uma fornada de bons momentos. Lançamento 01/11. Prontinho para comer ou assar em casa. Montes Claros, MG.",
  },
  {
    imagem: "banner3",
    para: "/kits",
    alt: "Brindes e presentes: carinho em forma de cookie. Para presentear, agradecer e surpreender.",
  },
  {
    imagem: "banner4",
    para: MARCA.cardapio,
    alt: "Cookie bom rende história. A primeira mordida. O cheiro pela casa. A disputa pelo último pedaço.",
  },
];

export const PILARES = [
  { titulo: "Ingredientes selecionados", texto: "Manteiga de verdade, chocolate nobre e nada de gordura hidrogenada." },
  { titulo: "Receitas artesanais", texto: "Massa descansada e porcionada à mão, em fornadas pequenas." },
  { titulo: "O verdadeiro sabor do cookie", texto: "150 g, borda crocante e centro que ainda cede quando parte." },
];

/* ---------- delivery ---------- */
export const ENTREGA = {
  prazo: "Pedidos até 15h saem no mesmo dia. Depois disso, na manhã seguinte.",
  minimo: 30.0,
  faixas: [
    { regiao: "Centro e bairros vizinhos", taxa: 8.0, tempo: "até 1h" },
    { regiao: "Demais bairros da cidade", taxa: 14.0, tempo: "até 2h" },
    { regiao: "Zona rural e distritos", taxa: 25.0, tempo: "combinado por WhatsApp" },
  ],
  retirada: "Retirada na loja sai sem taxa e fica pronta em 20 minutos.",
  pagamento: ["Pix", "Cartão na entrega", "Dinheiro"],
  gratis: 100.0,
};

/* ---------- revenda ---------- */
export const REVENDA = {
  chamada:
    "Cookies artesanais americanos para conquistar seus clientes, seja no balcão ou em uma sobremesa especial no cardápio.",
  convite: "Escolha a opção que combina com o seu estabelecimento e venha crescer com a gente.",
  texto:
    "Duas formas de ter The Cookie no seu balcão: massa congelada para assar e vender quente, ou cookie pronto, já embalado, com reposição nossa. Nos dois casos o display de balcão vai junto.",

  // os dois modelos de revenda — a ordem aqui é a ordem na página
  modelos: [
    {
      id: "massa",
      rotulo: "Massa congelada",
      titulo: "Você assa e vende quente",
      texto:
        "A gente produz e congela; você assa no seu forno e vende o cookie saindo quentinho. Sem confeiteiro, sem perda: o que não assa hoje continua congelado.",
      itens: [
        "Porcionada em bolas de 150 g, pronta para o forno",
        "12 minutos de forno, direto do freezer",
        "Validade de 3 meses congelada",
        "Treinamento da equipe por chamada de vídeo",
      ],
      ideal: "Ideal para cafeterias, padarias e quem já tem forno.",
    },
    {
      id: "pronto",
      rotulo: "Cookie pronto",
      titulo: "A gente assa e reabastece",
      texto:
        "O cookie chega assado e embalado um a um, pronto para ir ao display. Você só expõe e vende; a gente volta para repor na frequência combinada.",
      itens: [
        "Embalado individualmente, com a marca",
        "Sem forno e sem freezer no seu ponto",
        "Reposição semanal ou quinzenal, conforme o giro",
        "Mix de sabores ajustado pelo que mais vende",
      ],
      ideal: "Ideal para mercados, lojas de conveniência, academias e escritórios.",
    },
  ],

  // o display de balcão, fornecido nos dois modelos
  display: {
    titulo: "O display vai junto",
    texto:
      "Em qualquer um dos modelos, você recebe o display de balcão da The Cookie: o organizador que deixa os cookies à vista, com a identidade da marca e o preço em destaque.",
    itens: [
      "Organiza os cookies embalados em fileiras, à vista do cliente",
      "Ocupa pouco espaço no balcão, ao lado do caixa",
      "Fornecido pela The Cookie, sem custo para o revendedor",
    ],
  },

  comoFunciona: [
    { titulo: "Você escolhe o modelo", texto: "Massa congelada ou cookie pronto. Na dúvida, a gente ajuda a escolher pelo perfil do seu ponto." },
    { titulo: "Sem risco para seu negócio", texto: "O primeiro pedido é no consignado." },
    { titulo: "A gente entrega com o display", texto: "A primeira remessa chega junto com o display de balcão, pronto para montar." },
    { titulo: "Você vende, a gente repõe", texto: "Na massa congelada, você pede quando precisar. No cookie pronto, a gente volta para reabastecer." },
  ],
  // ⚠️ margem de exemplo — calcule com os seus custos reais antes de publicar
  margem: "A sugestão de preço final é a partir de R$ 18,00.",
};

/* ---------- onde encontrar: mapa ---------- */
/* Cada ponto vira um pino no mapa e um item na lista ao lado.
   lat/lng: no Google Maps, clique com o botão direito no local e clique nos
   números que aparecem no topo do menu — eles vão copiados como "lat, lng".
   modelo: "massa" (assa no forno) ou "pronto" (cookie pronto, no display). */

// ⚠️ coordenada aproximada do bairro Ibituruna — troque pela da porta da loja
export const LOJA_PROPRIA = {
  nome: "The Cookie — loja própria",
  endereco: "Ibituruna, Montes Claros, MG",
  lat: -16.7346,
  lng: -43.8838,
};

export const PONTOS_REVENDA = [
  // exemplo de como preencher:
  // {
  //   nome: "Café do Centro",
  //   endereco: "Rua Dr. Santos, 100 — Centro, Montes Claros",
  //   modelo: "massa",
  //   lat: -16.7280,
  //   lng: -43.8640,
  // },
];

/* ---------- institucional ---------- */
export const HISTORIA = [
  "Foi entre receitas, fornadas e a alegria de dividir o que saía do forno que a nossa história começou. Dessa experiência veio a ideia de levar esse aconchego para mais pessoas, em forma de cookies artesanais com toque americano.",
  "Massa generosa, muito chocolate, bordas levemente crocantes e um interior macio. Cuidamos de cada detalhe para fazer da primeira mordida um convite à próxima.",
  "Em Montes Claros, essa experiência ganha diferentes formas: cookies assados na hora, massa para preparar em casa, presentes que aproximam e parcerias com estabelecimentos que querem levar a The Cookie para seus clientes.",
  "Para acompanhar um café, reunir a família ou surpreender alguém. Sempre existe um bom momento para um cookie.",
];

export const VALORES = [
  { titulo: "Massa descansada", texto: "A massa vai ao frio antes de assar. É o que dá a borda crocante e o miolo que cede." },
  { titulo: "Nada de reaproveitar", texto: "O que não vende no dia não volta para a vitrine amanhã." },
  { titulo: "Receita fechada", texto: "A formulação é da casa e não muda por fornecedor nem por custo." },
];

export const DUVIDAS = [
  {
    pergunta: "Quanto tempo o cookie dura?",
    resposta:
      "Cinco dias em pote fechado, em temperatura ambiente. Para recuperar o centro macio, dez segundos no micro-ondas resolvem.",
  },
  {
    pergunta: "E a massa congelada?",
    resposta:
      "Até três meses no congelador. Vai direto do freezer para o forno, sem descongelar: 12 minutos a 190 °C no turbo ou 220 °C no convencional.",
  },
  {
    pergunta: "Posso escolher os sabores da caixa?",
    resposta:
      "Pode, inclusive repetindo o mesmo sabor. É só anotar na observação do pedido quais você quer em cada caixa.",
  },
  {
    pergunta: "Vocês entregam?",
    resposta:
      "Entregamos na cidade toda, com taxa por região. Pedidos feitos até 15h saem no mesmo dia; depois disso, na manhã seguinte.",
  },
  {
    pergunta: "Tem opção sem glúten ou sem lactose?",
    resposta:
      "Ainda não. A massa leva farinha de trigo e manteiga, e tudo é assado na mesma cozinha — então não indicamos para quem tem alergia ou doença celíaca.",
  },
  {
    pergunta: "Como funciona a revenda?",
    resposta:
      "São dois modelos: massa congelada, que você assa no seu ponto, ou cookie pronto, que a gente entrega embalado e reabastece. Nos dois o display de balcão vai junto, e o pedido mínimo é de 60 unidades.",
  },
  {
    pergunta: "Qual o prazo para encomenda de festa?",
    resposta:
      "72 horas para os kits prontos. Para mais de 100 pessoas, fale com a central — o prazo depende do tamanho.",
  },
];
