/* ==========================================================================
   Página "Faça em casa" — massa congelada.
   Mexa aqui para trocar tamanhos, preços, passos ou o vídeo.
   ⚠️ Preços, tempos e temperaturas são EXEMPLO. Confirme tudo.
   ========================================================================== */

/* Os tamanhos que vendemos. `preco` em número (ex.: 69.9); deixe null para
   mostrar "consulte" no lugar do valor. Marque um como `destaque` para o selo. */
export const TAMANHOS = [
  {
    peso: "750 g",
    rende: "10 cookies",
    preco: null,
    texto: "Para a família ou para uma tarde com amigos.",
  },
  {
    peso: "1,5 kg",
    rende: "20 cookies",
    preco: null,
    destaque: true,
    texto: "Para festa, reunião ou para deixar sempre no freezer.",
  },
];

/* Os três jeitos de usar a massa. Sem `zap`, o botão leva ao cardápio
   online; com `zap`, abre o WhatsApp com essa mensagem. */
export const USOS = [
  {
    titulo: "Para assar em casa",
    texto:
      "Uma fornada de bons momentos começa aqui. Reúna a família, convide alguém ou prepare só para você. Corte, asse e aproveite seu cookie quentinho, do jeito que mais gosta.",
    botao: "Quero assar em casa",
    foto: "bite",
    alt: "Cookie mordido, ainda quente",
  },
  {
    titulo: "Para o seu cardápio",
    texto:
      "Cafés, bistrôs, restaurantes e padarias podem ganhar novas possibilidades com a nossa massa. Sirva cookies recém-assados, crie sobremesas com sorvete ou experimente combinações com os ingredientes da sua casa. Uma base prática para receitas com a personalidade do seu negócio.",
    botao: "Quero no meu cardápio",
    zap: "Oi! Tenho um café/restaurante e queria a massa da The Cookie no meu cardápio.",
    foto: "vitrine",
    alt: "Vitrine com cookies",
  },
  {
    titulo: "Para vender com a sua marca",
    texto:
      "A gente prepara a massa, você dá o seu toque. Asse, escolha a apresentação e venda os cookies com a sua própria marca. Uma forma prática de começar a empreender ou ampliar o que você já oferece.",
    botao: "Quero vender com minha marca",
    zap: "Oi! Queria comprar a massa da The Cookie para vender com a minha marca.",
    foto: "embalagem",
    alt: "Cookies embalados para venda",
  },
];

/* Passo a passo para assar — aparece ao lado do vídeo. */
export const PREPARO = [
  "Pré-aqueça o forno: 190 °C no turbo, 220 °C no convencional.",
  "Forre a assadeira com papel manteiga e distribua as bolas com espaço entre elas.",
  "Asse por 12 minutos, direto do congelador, sem descongelar.",
  "Tire quando a borda estiver firme e o centro ainda parecer mole — ele firma fora do forno.",
  "Espere 10 minutos antes de tirar da assadeira.",
];

/* Vídeo tutorial. Dois jeitos de colocar (o primeiro que existir entra):
   1. YouTube: cole aqui só o código do vídeo — em youtube.com/watch?v=ABC123
      o código é "ABC123".
   2. Arquivo: salve o vídeo como src/assets/tutorial.mp4 (ou .webm).
   Enquanto nenhum dos dois existir, a página mostra um espaço reservado. */
export const VIDEO_YOUTUBE = "";
