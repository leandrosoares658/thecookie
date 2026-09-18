/* ==========================================================================
   Todo o texto do site fica aqui. Para mudar preço, sabor ou horário,
   edite este arquivo — nenhum componente precisa ser tocado.
   ========================================================================== */

export const MARCA = {
  nome: "The Cookie",
  assinatura: "Mais que cookies, é sobre momentos.",
  endereco: "Rua das Fornadas, 128 — Centro",
  horarios: ["Terça a sábado, 10h às 19h", "Domingo, 14h às 18h"],
  whatsapp: "5538990000000", // só números, com DDI e DDD
  instagram: "thecookie",
  email: "oi@thecookie.com.br",
};

export const linkWhatsapp = (mensagem) =>
  `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const PILARES = [
  "Ingredientes selecionados",
  "Receitas artesanais",
  "O verdadeiro sabor do cookie",
];

export const NUMEROS = [
  { valor: "4 sabores", nota: "fixos o ano inteiro" },
  { valor: "24 h", nota: "de descanso da massa" },
  { valor: "De terça a domingo", nota: "fornadas de hora em hora" },
];

export const SABORES = [
  {
    nome: "Chocolate belga",
    disco: "#EADCC6",
    frase: "O clássico que some primeiro.",
    texto:
      "Gotas de chocolate belga meio amargo distribuídas na massa inteira. Sai do forno com o centro ainda derretendo e firma no balcão.",
    notas: ["Meio amargo 53%", "Centro cremoso", "Sem nozes"],
  },
  {
    nome: "Tradicional",
    disco: "#F1E3CB",
    frase: "A receita que deu origem à loja.",
    texto:
      "Manteiga, açúcar mascavo e baunilha de verdade, com a massa descansando 24 horas na geladeira antes de assar. É o mais pedido no fim da tarde.",
    notas: ["Massa de 24h", "Baunilha em fava", "Borda crocante"],
  },
  {
    nome: "Doce de leite",
    disco: "#EFDCBE",
    frase: "Doce, mas com sal no fim.",
    texto:
      "Recheio cremoso de doce de leite no meio da massa e uma pitada de flor de sal por cima, que corta a doçura na última mordida.",
    notas: ["Recheado", "Flor de sal", "Serve morno"],
  },
  {
    nome: "Oreo",
    disco: "#E6D6BC",
    frase: "O favorito da criançada.",
    texto:
      "Pedaços grandes de biscoito na massa e creme de baunilha no topo. É o que mais sai nos kits de festa e nas caixas de presente.",
    notas: ["Pedaços inteiros", "Creme de baunilha", "Favorito nas festas"],
  },
];

export const PRODUTOS = [
  {
    id: "no-ponto",
    tema: "azul",
    tag: "Vitrine da loja",
    nome: "No ponto",
    frase: "O verdadeiro sabor em cada mordida.",
    preco: "R$ 12,00",
    unidade: "cada",
    itens: [
      "Assados no dia, em fornadas de hora em hora",
      "Embalados um a um, direto da grade",
      "Retirada na loja ou entrega no mesmo dia",
      "Caixa de 6 com os quatro sabores",
    ],
    cta: "Pedir agora",
    mensagem: "Oi! Queria pedir cookies no ponto.",
  },
  {
    id: "kit",
    tema: "creme",
    tag: "Kit completo",
    nome: "Kit em casa",
    frase: "O cookie que você termina em casa.",
    preco: "R$ 49,90",
    unidade: "o kit",
    itens: [
      "Massa congelada já porcionada",
      "Recheios à parte (opcional)",
      "Passo a passo simples, sem balança",
      "Rende até 8 cookies grandes",
    ],
    cta: "Quero o kit",
    mensagem: "Oi! Queria encomendar o kit para assar em casa.",
  },
];

export const TIPOS_EVENTO = [
  "Casamentos",
  "Aniversários",
  "Brindes de empresa",
  "Chá de bebê",
  "Lembrancinhas",
];

export const DEPOIMENTOS = [
  {
    texto:
      "Comprei o kit para assar com as crianças num domingo de chuva. Virou programa fixo — já estou no quarto pedido.",
    nome: "Marina Rezende",
    detalhe: "Cliente desde 2024",
  },
  {
    texto:
      "Pedi 80 caixinhas para o fim de ano do escritório. Chegaram no horário e com o nome de cada pessoa na etiqueta.",
    nome: "Rafael Lima",
    detalhe: "Brindes corporativos",
  },
  {
    texto:
      "O de doce de leite com flor de sal não é normal. Passei a desviar o caminho de casa só para buscar um.",
    nome: "Júlia Andrade",
    detalhe: "Vizinha da loja",
  },
];

export const DUVIDAS = [
  {
    pergunta: "Quanto tempo o cookie dura?",
    resposta:
      "Cinco dias em pote fechado, em temperatura ambiente. Se quiser o centro macio de novo, dez segundos no micro-ondas resolvem.",
  },
  {
    pergunta: "E a massa congelada do kit?",
    resposta:
      "Até três meses no congelador. Vai direto do freezer para o forno, sem descongelar — são 12 a 15 minutos a 180 °C.",
  },
  {
    pergunta: "Vocês entregam?",
    resposta:
      "Entregamos na cidade toda. Pedidos feitos até 15h saem no mesmo dia; depois disso, no dia seguinte pela manhã.",
  },
  {
    pergunta: "Tem opção sem glúten ou sem lactose?",
    resposta:
      "Temos o tradicional em versão sem lactose, feito sob encomenda com um dia de antecedência. Sem glúten ainda está em teste — a massa é assada na mesma cozinha, então não indicamos para quem tem alergia.",
  },
  {
    pergunta: "Qual o pedido mínimo para evento?",
    resposta:
      "20 unidades. Acima de 100, a embalagem personalizada com o nome do evento entra sem custo adicional.",
  },
];

export const MENU = [
  { id: "sabores", rotulo: "Sabores" },
  { id: "momentos", rotulo: "Kit em casa" },
  { id: "loja", rotulo: "A loja" },
  { id: "eventos", rotulo: "Eventos" },
  { id: "duvidas", rotulo: "Dúvidas" },
];
