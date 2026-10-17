/* ==========================================================================
   Dados da marca e de contato. Mexa aqui para trocar telefone, endereço,
   horário ou redes — nenhum componente tem esses dados escritos dentro.
   ========================================================================== */

export const MARCA = {
  nome: "The Cookie",
  assinatura: "Mais que cookies, é sobre momentos.",
  descricao: "Cookies artesanais.",

  // só números, com DDI e DDD
  whatsapp: "5538991566092",
  whatsappVisivel: "(38) 99156-6092",
  email: "comercialthecookie@gmail.com",
  emailSac: "sac@thecookie.com.br",

  instagram: "thecookiecoficial",

  endereco: "Ibituruna",
  cidade: "Montes Claros, MG",
  cep: "39400-000",

  horarios: [
    { dias: "Terça a sábado", hora: "10h às 18h" },
    { dias: "Domingo", hora: "14h às 17h" },
    { dias: "Segunda", hora: "fechado" },
  ],
};

/** Monta o link do WhatsApp já com a mensagem preenchida. */
export const zap = (mensagem = "Oi! Vim pelo site.") =>
  `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(mensagem)}`;

export const REDES = [
  { nome: "Instagram", url: `https://instagram.com/${MARCA.instagram}` },
];

export const MENU = [
  { rotulo: "A marca", para: "/sobre" },
  { rotulo: "Brindes e presentes", para: "/kits" },
  { rotulo: "Faça em casa", para: "/produtos/massa-congelada-8" },
  { rotulo: "Seja revendedor", para: "/revenda" },
  { rotulo: "Onde encontrar", para: "/lojas" },
];

/** Formata número em real brasileiro. */
export const real = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
