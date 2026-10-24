/* ==========================================================================
   Página "Faça em casa" — massa congelada.
   Mexa aqui para trocar os usos, os passos ou o vídeo.
   ========================================================================== */

/* Os três jeitos de usar a massa. Sem `zap`, o botão leva ao cardápio
   online; com `zap`, abre o WhatsApp com essa mensagem. `foco` (opcional)
   ajusta o recorte da foto no card. */
export const USOS = [
  {
    titulo: "Para assar em casa",
    texto:
      "Uma fornada de bons momentos começa aqui. Reúna a família, convide alguém ou prepare só para você. Corte, asse e aproveite seu cookie quentinho, do jeito que mais gosta.",
    botao: "Quero assar em casa",
    foto: "massaCaixa",
    alt: "Caixa The Cookie aberta com o rolo de massa e pacotinhos de confeitos e gotas de chocolate",
  },
  {
    titulo: "Para o seu cardápio",
    texto:
      "Cafés, bistrôs, restaurantes e padarias podem ganhar novas possibilidades com a nossa massa. Sirva cookies recém-assados, crie sobremesas com sorvete ou experimente combinações com os ingredientes da sua casa. Uma base prática para receitas com a personalidade do seu negócio.",
    botao: "Quero no meu cardápio",
    zap: "Oi! Tenho um café/restaurante e queria a massa da The Cookie no meu cardápio.",
    foto: "massaEmbalada",
    alt: "Rolo de massa The Cookie embalado sobre papel manteiga e tábua de madeira",
  },
  {
    titulo: "Para vender com a sua marca",
    texto:
      "A gente prepara a massa, você dá o seu toque. Asse, escolha a apresentação e venda os cookies com a sua própria marca. Uma forma prática de começar a empreender ou ampliar o que você já oferece.",
    botao: "Quero vender com minha marca",
    zap: "Oi! Queria comprar a massa da The Cookie para vender com a minha marca.",
    foto: "embalagem",
    foco: "50% 20%", // mantém a tampa com a marca no quadro
    alt: "Rolo de massa The Cookie na caixa aberta, com a tampa da marca ao fundo",
  },
];

/* Tutorial "Como assar sua massa", no mesmo texto do folheto da caixa.
   `desenho`: chave do desenho em DESENHOS (FacaEmCasa.jsx).
   O passo "Asse" tem `aparelhos` no lugar de `texto`. */
export const TUTORIAL = [
  {
    titulo: "Congele",
    texto: "Deixe a massa no congelador por 4 horas antes de cortar.",
    desenho: "rolo",
  },
  {
    titulo: "Corte",
    texto: "Retire a embalagem e corte discos iguais de aproximadamente 75 g.",
    rendimento: ["750 g = 10 cookies", "1.500 g = 20 cookies"],
    desenho: "fatias",
  },
  {
    titulo: "Prepare e decore",
    texto:
      "Forre uma assadeira baixa com papel manteiga. Deixe espaço entre os discos. Coloque uma pitada de sal sobre cada cookie e decore com gotas de chocolate, confeitos ou confetes.",
    desenho: "assadeira",
  },
  {
    titulo: "Asse",
    aparelhos: [
      {
        nome: "Forno",
        temperatura: "220 °C",
        texto: ["Pré-aqueça por 10 minutos.", "Asse por 8 minutos ou até dourar."],
        desenho: "forno",
      },
      {
        nome: "Air fryer",
        temperatura: "190 °C",
        texto: ["Não precisa pré-aquecer.", "Asse por 8 minutos ou até dourar."],
        desenho: "airfryer",
      },
    ],
  },
  {
    titulo: "Espere esfriar e sirva",
    texto: "Após assar, espere os cookies esfriarem antes de servir.",
    desenho: "cookies",
  },
];

/* Vídeo tutorial. Dois jeitos de colocar (o primeiro que existir entra):
   1. YouTube: cole aqui só o código do vídeo — em youtube.com/watch?v=ABC123
      o código é "ABC123".
   2. Arquivo: salve o vídeo como src/assets/tutorial.mp4 (ou .webm).
   Enquanto nenhum dos dois existir, o tutorial aparece só com os passos. */
export const VIDEO_YOUTUBE = "";
