/* ==========================================================================
   OS QUATRO SERVIÇOS DA THE COOKIE

   Esta é a espinha da página /servicos. Cada serviço vira um bloco no
   zigue-zague, e `pilulas` alimenta o hub circular do topo.

   ⚠️ Números (pedido mínimo, prazos, quantidades) são de EXEMPLO.
   Confirme todos antes de publicar.
   ========================================================================== */

export const SERVICOS = [
  {
    id: "revenda",
    etiqueta: "Para o seu negócio",
    nome: "Revenda",
    titulo: ["Cookie quente", "no seu balcão"],
    frase: "A gente congela, você assa.",
    resumo:
      "Sua cafeteria, padaria ou mercado passa a vender cookie saindo do forno, sem contratar confeiteiro e sem perda no fim do dia — o que não assa hoje continua congelado.",
    pontos: [
      { termo: "Sem confeiteiro", texto: "Doze minutos de forno e pronto. Treinamos sua equipe por chamada de vídeo." },
      { termo: "Sem perda", texto: "Você assa o que vai vender. O resto fica no freezer, com validade de três meses." },
      { termo: "Marca no balcão", texto: "Display, etiquetas e sacolas com a identidade da The Cookie, a partir da segunda remessa." },
    ],
    numeros: [
      { valor: "60", nota: "unidades no pedido mínimo" },
      { valor: "12 min", nota: "do freezer ao balcão" },
      { valor: "3 meses", nota: "de validade congelado" },
    ],
    // cookies já embalados: é o que o revendedor recebe e vende
    foto: "caixaAberta",
    tema: "vermelho",
    cta: { rotulo: "Quero revender", para: "/revenda" },
    zap: "Oi! Tenho interesse em revender a The Cookie.",
  },
  {
    id: "delivery",
    etiqueta: "Para hoje",
    nome: "Delivery",
    titulo: ["Chega antes", "de esfriar"],
    frase: "Pedido até 15h sai no mesmo dia.",
    resumo:
      "Entrega na cidade toda, com taxa por região e prazo que a central confirma na hora do pedido. Quem prefere buscar, retira na loja em vinte minutos, sem taxa.",
    pontos: [
      { termo: "Mesmo dia", texto: "Pedidos até 15h saem no mesmo dia. Depois disso, na manhã seguinte." },
      { termo: "Retirada sem taxa", texto: "Reserve pelo WhatsApp e busque na loja em vinte minutos." },
      { termo: "Pedido pelo WhatsApp", texto: "Monta o carrinho no site e fecha pela conversa, com a lista já pronta." },
    ],
    numeros: [
      { valor: "1h", nota: "no centro e bairros vizinhos" },
      { valor: "R$ 40", nota: "pedido mínimo para entrega" },
      { valor: "R$ 150", nota: "acima disso, frete grátis" },
    ],
    foto: "pessoa",
    tema: "azul",
    cta: { rotulo: "Ver taxas e prazos", para: "/delivery" },
    zap: "Oi! Queria saber se vocês entregam no meu bairro.",
  },
  {
    id: "presentes",
    etiqueta: "Para presentear",
    nome: "Presentes e brindes",
    titulo: ["Caixa que", "chega com nome"],
    frase: "O sabor que torna qualquer ocasião mais doce.",
    resumo:
      "Caixa com laço, etiqueta da marca e cartão escrito à mão. Para empresa, a etiqueta sai personalizada com a marca do cliente e o nome de cada pessoa que vai receber.",
    pontos: [
      { termo: "Cartão à mão", texto: "A mensagem vai escrita, não impressa. Você manda o texto no pedido." },
      { termo: "Etiqueta do evento", texto: "Acima de 100 unidades, a personalização com a sua marca entra sem custo." },
      { termo: "Entrega montada", texto: "Para brinde corporativo, levamos e montamos o display no local." },
    ],
    numeros: [
      { valor: "20", nota: "unidades no pedido mínimo" },
      { valor: "72h", nota: "de prazo para encomenda" },
      { valor: "24h", nota: "para responder o orçamento" },
    ],
    foto: "presente",
    foco: "center 35%",
    tema: "creme",
    cta: { rotulo: "Pedir orçamento", para: "/kits" },
    zap: "Oi! Queria um orçamento de presentes/brindes corporativos.",
  },
  {
    id: "massa",
    etiqueta: "Para assar em casa",
    nome: "Massa congelada",
    titulo: ["O forno é seu,", "a receita é nossa"],
    frase: "O cookie que você termina em casa.",
    resumo:
      "As mesmas bolas de 150 g que assamos na loja, congeladas e porcionadas. Vão direto do freezer para o forno — sem descongelar, sem balança e sem bagunça na cozinha.",
    pontos: [
      { termo: "Já porcionada", texto: "Oito bolas de 150 g. Você assa quantas quiser e devolve o resto ao freezer." },
      { termo: "Sem descongelar", texto: "Doze minutos a 190 °C no turbo ou 220 °C no convencional, direto do congelador." },
      { termo: "Passo a passo", texto: "Vai impresso na caixa, com o ponto certo de tirar do forno." },
    ],
    numeros: [
      { valor: "8", nota: "cookies por caixa" },
      { valor: "150 g", nota: "cada bola, já pesada" },
      { valor: "12 min", nota: "de forno, só isso" },
    ],
    foto: "cookieClose",
    foco: "center top",
    tema: "azul",
    cta: { rotulo: "Comprar massa congelada", para: "/faca-em-casa" },
    zap: "Oi! Queria encomendar a massa congelada.",
  },
];

/** Pílulas do hub circular do topo — o que a marca entrega, em palavras curtas. */
export const PILULAS = {
  esquerda: ["Revenda", "Atacado congelado", "Treinamento", "Display de balcão"],
  direita: ["Delivery", "Brindes corporativos", "Kits para festa", "Massa em casa"],
};

/** Os três passos de quem quer começar — fecha a página. */
export const PASSOS = [
  {
    titulo: "Diga o que você precisa",
    texto:
      "Chame no WhatsApp contando se é para revender, presentear, uma festa ou só matar a vontade hoje. Não tem formulário longo.",
  },
  {
    titulo: "A gente monta a proposta",
    texto:
      "Volta com sabores, quantidade, prazo e valor fechado em até 24 horas. Sem taxa de projeto e sem compromisso.",
  },
  {
    titulo: "Combina e recebe",
    texto:
      "Confirmado o pedido, entra na fila de produção. Delivery sai no mesmo dia; encomenda grande tem data marcada.",
  },
];

/* ==========================================================================
   VITRINE DA HOME — os quatro quadrados abaixo do banner.

   Versão curta de propósito: aqui o cliente só descobre QUE existe.
   Quem quiser detalhe clica e vai para a página do serviço.
   Uma frase por serviço; se precisar de duas, é porque é página, não card.
   ========================================================================== */
export const VITRINE = [
  {
    id: "pedir",
    numero: "01",
    nome: "Peça agora",
    chamada: "Cookie quente na sua porta",
    resumo: "Seis sabores assados no dia. Entrega na cidade toda ou retirada na loja.",
    foto: "embalado",
    tema: "vermelho",
    para: "/produtos",
    acao: "Ver os sabores",
  },
  {
    id: "brindes",
    numero: "02",
    nome: "Brindes e presentes",
    chamada: "Caixa que chega com nome",
    resumo: "Casamento, aniversário ou confraternização de empresa, com etiqueta personalizada.",
    foto: "presente",
    foco: "center 85%",
    tema: "azul",
    para: "/kits",
    acao: "Pedir orçamento",
  },
  {
    id: "faca-em-casa",
    numero: "03",
    nome: "Faça em casa",
    chamada: "O forno é seu",
    resumo: "Massa congelada já porcionada. Do freezer ao forno em doze minutos.",
    foto: "cookieClose",
    tema: "creme",
    para: "/faca-em-casa",
    acao: "Como funciona",
  },
  {
    id: "revenda",
    numero: "04",
    nome: "Revenda na loja",
    chamada: "A gente congela, você assa",
    resumo: "Para cafeteria, padaria e mercado: cookie fresco no balcão, sem confeiteiro.",
    foto: "caixaAberta",
    tema: "azul",
    para: "/revenda",
    acao: "Quero revender",
  },
];
