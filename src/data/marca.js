/* ==========================================================================
   Dados da marca e de contato. Mexa aqui para trocar telefone, endereço,
   horário ou redes — nenhum componente tem esses dados escritos dentro.
   ========================================================================== */

export const MARCA = {
  nome: "The Cookie",
  assinatura: "Mais que cookies, é sobre momentos.",
  descricao: "Cookies artesanais de 150 g, em fornadas pequenas.",

  // só números, com DDI e DDD
  whatsapp: "5538991566092",
  whatsappVisivel: "(38) 99156-6092",
  telefone: "(38) 9 9156-6092",
  email: "comercialthecookie@gmail.com",
  emailSac: "comercialthecookie@gmail.com",

  instagram: "thecookie",
  facebook: "thecookie",
  tiktok: "thecookie",

  endereco: "Rua Noruega, 80 — Ibituruna",
  cidade: "Montes Claros, MG",
  cep: "39408-106",

  horarios: [
    { dias: "Terça a sábado", hora: "10h às 19h" },
    { dias: "Domingo", hora: "14h às 18h" },
    { dias: "Segunda", hora: "fechado" },
  ],
};

/** Monta o link do WhatsApp já com a mensagem preenchida. */
export const zap = (mensagem = "Oi! Vim pelo site.") =>
  `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const REDES = [
  { nome: "Instagram", url: `https://instagram.com/${MARCA.instagram}` },
  { nome: "Facebook", url: `https://facebook.com/${MARCA.facebook}` },
  { nome: "TikTok", url: `https://tiktok.com/@${MARCA.tiktok}` },
];

export const MENU = [
  { rotulo: "A marca", para: "/sobre" },
  { rotulo: "Cookies", para: "/produtos" },
  { rotulo: "Kits para festa", para: "/kits" },
  { rotulo: "Delivery", para: "/delivery" },
  { rotulo: "Onde encontrar", para: "/lojas" },
  { rotulo: "Seja revendedor", para: "/revenda" },
];

/** Formata número em real brasileiro. */
export const real = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
