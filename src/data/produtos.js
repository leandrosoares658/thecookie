/* ==========================================================================
   CATÁLOGO

   ⚠️ PREÇOS SÃO PROVISÓRIOS. Nenhum valor abaixo veio da operação real —
   foram escolhidos só para o site funcionar. Revise todos antes de publicar.

   ⚠️ NOMES "Bueno" e "Lotus" são marcas registradas de terceiros (Ferrero e
   Lotus Bakeries). Usá-los como nome de sabor em loja que vende e faz revenda
   é risco de notificação. Sugestões neutras, caso queira trocar depois:
   "Bueno" → "Duo de Chocolate" / "Avelã Dupla"
   "Lotus" → "Speculoos" / "Canela com Doce de Leite"

   As descrições abaixo foram escritas a partir das fichas de produção, mas
   NÃO contêm formulação. Receita é da casa e não vai para o site.
   ========================================================================== */

export const CATEGORIAS = [
  { id: "cookies", rotulo: "Cookies", descricao: "Assados no dia, 150 g cada" },
  { id: "caixas", rotulo: "Caixas", descricao: "Para presentear ou dividir" },
  { id: "congelados", rotulo: "Massa congelada", descricao: "Você assa em casa" },
];

/* --------------------------------------------------------------------------
   Os seis sabores. `foto` é uma chave do mapa FOTOS em src/assets/index.js
   -------------------------------------------------------------------------- */
export const SABORES = [
  {
    slug: "classico",
    nome: "Clássico",
    categoria: "cookies",
    preco: 14.0,
    foto: "pilha",
    destaque: true,
    frase: "O que deu origem a tudo.",
    resumo: "Chocolate meio amargo e ao leite, com flor de sal por cima.",
    descricao:
      "A receita que abriu a casa. Massa de manteiga com os dois açúcares, batida até ficar aerada, e uma quantidade de chocolate que beira o exagero: meio amargo e ao leite juntos. Sai do forno com o centro ainda mole e firma no balcão. Vai uma pitada de flor de sal por cima antes de assar.",
    notas: ["Meio amargo e ao leite", "Flor de sal", "150 g"],
    recheado: false,
  },
  {
    slug: "dark-chocolate",
    nome: "Dark Chocolate",
    categoria: "cookies",
    preco: 14.0,
    foto: "navy",
    destaque: true,
    frase: "Para quem acha os outros doces demais.",
    resumo: "Massa escura com dois tipos de cacau e manteiga clarificada.",
    descricao:
      "O mais intenso da vitrine. Leva cacau comum e cacau black na massa, o que deixa a cor quase preta e o sabor bem mais seco, além de um pouco de manteiga clarificada, que aprofunda o gosto de tostado. Os pedaços de chocolate meio amargo e ao leite equilibram a amargura.",
    notas: ["Cacau black", "Manteiga clarificada", "150 g"],
    recheado: false,
  },
  {
    slug: "pistacho",
    nome: "Pistacho",
    categoria: "cookies",
    preco: 18.0,
    foto: "bite",
    destaque: true,
    frase: "Recheado, e o recheio aparece.",
    resumo: "Chocolate branco e pistache, com ganache de pistache no centro.",
    descricao:
      "Massa com chocolate branco e pistache picado, fechada em volta de uma colher generosa de ganache de pistache. É recheado de verdade: quando parte no meio, o creme escorre. Um dos dois sabores que não são só massa e pedaços.",
    notas: ["Recheado", "Pistache", "150 g"],
    recheado: true,
  },
  {
    slug: "lotus",
    nome: "Lotus",
    categoria: "cookies",
    preco: 18.0,
    foto: "ponto",
    destaque: true,
    frase: "Canela, doce de leite e nada de modéstia.",
    resumo: "Massa de canela com chocolate branco, recheada com doce de leite.",
    descricao:
      "A canela vai na massa, junto com o chocolate branco, e o recheio é doce de leite. Antes de assar leva açúcar com canela por cima, que caramelize na borda. É o mais doce dos seis — e o que some mais rápido no fim da tarde.",
    notas: ["Recheado", "Canela", "150 g"],
    recheado: true,
  },
  {
    slug: "red-velvet",
    nome: "Red Velvet",
    categoria: "cookies",
    preco: 16.0,
    foto: "vermelho",
    destaque: false,
    frase: "Vermelho de verdade, não de enfeite.",
    resumo: "Massa aveludada de cacau e baunilha com chocolate branco.",
    descricao:
      "Cacau e baunilha numa massa macia e bem vermelha, com bastante chocolate branco picado. O contraste entre a massa escura por dentro e os pedaços brancos é o que faz esse cookie render foto — mas ele se sustenta sozinho no sabor.",
    notas: ["Cacau e baunilha", "Chocolate branco", "150 g"],
    recheado: false,
  },
  {
    slug: "bueno",
    nome: "Bueno",
    categoria: "cookies",
    preco: 16.0,
    foto: "embalado",
    destaque: false,
    frase: "Chocolate ao leite com chocolate branco.",
    resumo: "Os dois chocolates na mesma massa, em pedaços grandes.",
    descricao:
      "Massa clara com pedaços grandes de chocolate ao leite e de chocolate branco, nas mesmas proporções. Mais doce que o Clássico e mais leve que o Dark. É o pedido mais comum de quem está levando cookie para criança.",
    notas: ["Ao leite e branco", "Pedaços grandes", "150 g"],
    recheado: false,
  },
];

/* --------------------------------------------------------------------------
   Caixas e massa congelada
   -------------------------------------------------------------------------- */
export const OUTROS = [
  {
    slug: "caixa-4",
    nome: "Caixa com 4",
    categoria: "caixas",
    preco: 52.0,
    foto: "caixaAberta",
    destaque: true,
    frase: "Você escolhe os sabores.",
    resumo: "Quatro cookies à sua escolha, embalados um a um.",
    descricao:
      "Monta com os sabores que você quiser, inclusive repetindo. Cada cookie vai embalado individualmente dentro da caixa, então dura os mesmos cinco dias de um cookie avulso. Cabe cartão escrito à mão, se for presente.",
    notas: ["4 unidades", "Sabores à escolha", "Cabe cartão"],
  },
  {
    slug: "caixa-6",
    nome: "Caixa com 6",
    categoria: "caixas",
    preco: 76.0,
    foto: "presente",
    destaque: true,
    frase: "A caixa de presente.",
    resumo: "Seis cookies, laço e etiqueta com o nome de quem recebe.",
    descricao:
      "A caixa que mais sai para presente. Vai com laço, etiqueta da marca e, se você pedir, o nome de quem vai receber escrito à mão. Os seis sabores cabem, então dá para montar o kit completo e deixar a pessoa decidir.",
    notas: ["6 unidades", "Laço e etiqueta", "Nome escrito à mão"],
  },
  {
    slug: "massa-congelada-8",
    nome: "Massa congelada — 8 bolas",
    categoria: "congelados",
    preco: 69.9,
    foto: "embalagem",
    destaque: true,
    frase: "O cookie que você termina em casa.",
    resumo: "Oito bolas de 150 g, já porcionadas e congeladas.",
    descricao:
      "As mesmas bolas que a gente assa na loja, só que congeladas e embaladas para você. Vão do congelador direto para o forno, sem descongelar: 12 minutos a 190 °C no forno turbo ou 220 °C no convencional. Rende até 8 cookies grandes e dura 3 meses no congelador.",
    notas: ["8 bolas de 150 g", "Direto do freezer", "Dura 3 meses"],
    preparo: [
      "Pré-aqueça o forno: 190 °C no turbo, 220 °C no convencional.",
      "Forre a assadeira com papel manteiga e distribua as bolas com espaço entre elas.",
      "Asse por 12 minutos, direto do congelador, sem descongelar.",
      "Tire quando a borda estiver firme e o centro ainda parecer mole — ele firma fora do forno.",
      "Espere 10 minutos antes de tirar da assadeira.",
    ],
  },
];

/** Catálogo completo, na ordem em que aparece na loja. */
export const PRODUTOS = [...SABORES, ...OUTROS];

export const acharProduto = (slug) => PRODUTOS.find((p) => p.slug === slug);

export const porCategoria = (id) =>
  id === "todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === id);

/* --------------------------------------------------------------------------
   Kits para festa — vendidos sob encomenda, não entram no carrinho
   -------------------------------------------------------------------------- */
export const KITS = [
  {
    nome: "Kit 25",
    pessoas: "até 25 pessoas",
    preco: 320.0,
    itens: ["25 cookies de 150 g", "Até 4 sabores", "Embalagem individual", "Etiqueta com o nome do evento"],
  },
  {
    nome: "Kit 50",
    pessoas: "até 50 pessoas",
    preco: 610.0,
    destaque: true,
    itens: ["50 cookies de 150 g", "Os 6 sabores", "Embalagem individual", "Etiqueta personalizada", "Display de balcão emprestado"],
  },
  {
    nome: "Kit 100",
    pessoas: "até 100 pessoas",
    preco: 1180.0,
    itens: ["100 cookies de 150 g", "Os 6 sabores", "Embalagem individual", "Etiqueta personalizada", "Display de balcão emprestado", "Entrega e montagem inclusas"],
  },
];

export const REGRAS_KIT = [
  "Prazo mínimo de 72 horas para encomendas de kit.",
  "Sabores recheados (Pistacho e Lotus) entram em todos os kits sem custo extra.",
  "Acima de 100 pessoas, o orçamento é montado caso a caso pela central.",
  "Pedido confirmado com 50% de sinal; o restante na entrega.",
  "Cancelamento com menos de 48 horas retém o sinal.",
];
