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
    para: "/produtos/massa-congelada-8",
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
  chamada: "Cookie pronto para assar, com a sua marca no balcão.",
  texto:
    "A gente produz e congela; você assa e vende quente. O cookie sai do seu forno em 12 minutos, sem confeiteiro, sem perda e sem estoque parado — o que não assa hoje continua congelado.",
  comoFunciona: [
    { titulo: "Você escolhe o mix", texto: "Monta a caixa com os sabores que fazem sentido para o seu público. Pedido mínimo de 60 unidades." },
    { titulo: "A gente entrega congelado", texto: "Chega em caixa térmica, porcionado em bolas de 150 g, com validade de 3 meses." },
    { titulo: "Você assa e vende", texto: "12 minutos de forno. Mandamos o passo a passo e treinamos a sua equipe por chamada de vídeo." },
    { titulo: "Material de ponto de venda", texto: "Display de balcão, etiquetas e sacolas com a identidade da marca, sem custo a partir do segundo pedido." },
  ],
  requisitos: [
    "Forno convencional ou turbo e freezer com espaço para as caixas",
    "CNPJ ativo",
    "Pedido mínimo de 60 unidades por remessa",
    "Compromisso de não alterar a receita nem a marca na revenda",
  ],
  // ⚠️ margem de exemplo — calcule com os seus custos reais antes de publicar
  margem: "A sugestão de preço final fica entre R$ 12 e R$ 16, conforme a praça.",
};

/* ---------- institucional ---------- */
export const HISTORIA = [
  "A The Cookie começou numa cozinha de casa, com uma receita que a fundadora ajustou por meses até a massa parar de espalhar no forno e o centro ficar no ponto exato.",
  "O primeiro ponto de venda foi um freezer emprestado numa cafeteria do centro, com dois sabores. A conta era simples: assar na hora, nunca deixar cookie velho na vitrine e não cortar ingrediente para baixar preço.",
  "Hoje são seis sabores fixos, fornadas de hora em hora e cookies de 150 g — o tamanho que a gente testou e manteve, mesmo quando ficou mais caro de produzir.",
];

export const VALORES = [
  { titulo: "Massa descansada", texto: "A massa vai ao frio antes de assar. É o que dá a borda crocante e o miolo que cede." },
  { titulo: "Nada de reaproveitar", texto: "O que não vende no dia não volta para a vitrine amanhã." },
  { titulo: "Receita fechada", texto: "A formulação é da casa e não muda por fornecedor nem por custo." },
];

/* ---------- prova social ---------- */
export const DEPOIMENTOS = [
  {
    texto: "Comprei a massa congelada para assar com as crianças num domingo de chuva. Virou programa fixo — já estou no quarto pedido.",
    nome: "Marina Rezende",
    detalhe: "Cliente desde 2024",
  },
  {
    texto: "Pedi o Kit 50 para o fim de ano do escritório. Chegou no horário, com etiqueta do evento e o display montado.",
    nome: "Rafael Lima",
    detalhe: "Encomenda para empresa",
  },
  {
    texto: "Coloquei na minha cafeteria em março. Asso duas fornadas por dia e o Pistacho acaba antes das quatro da tarde.",
    nome: "Camila Prates",
    detalhe: "Revendedora",
  },
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
      "A gente entrega a massa congelada e você assa no seu ponto. O pedido mínimo é de 60 unidades e o material de ponto de venda entra a partir da segunda remessa.",
  },
  {
    pergunta: "Qual o prazo para encomenda de festa?",
    resposta:
      "72 horas para os kits prontos. Para mais de 100 pessoas, fale com a central — o prazo depende do tamanho.",
  },
];
