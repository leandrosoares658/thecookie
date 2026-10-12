# The Cookie — site

Site da **The Cookie — Cookies Artesanais**: catálogo dos seis sabores, carrinho,
kits para festa, delivery e página de revenda. React + Vite + React Router.

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # gera dist/
npm run preview  # confere a dist/ antes de publicar
```

Node 18 ou superior.

---

## ⚠️ Antes de publicar

Estes pontos são **obrigatórios** — o site funciona, mas tem dado de exemplo dentro.

- [ ] **Preços.** Todos os valores em `src/data/produtos.js` são provisórios. Nenhum
      veio da operação real.
- [ ] **Contato.** Telefone, WhatsApp, e-mail, endereço e CEP em `src/data/marca.js`
      são fictícios. O WhatsApp `5538900000000` não existe.
- [ ] **Taxas e prazos de entrega** em `src/data/conteudo.js` (`ENTREGA`) são exemplo.
- [ ] **Números da revenda** (pedido mínimo, margem sugerida) são exemplo.
- [ ] **Depoimentos** são fictícios. Substitua por avaliações reais ou remova a seção.
- [ ] **Lista de pontos de revenda** na página "Onde encontrar" ainda não existe.
- [ ] **Newsletter** só valida o formato do e-mail. Não envia nada. Veja o `TODO`
      em `src/componentes/Newsletter.jsx`.
- [ ] **Fotos.** Vieram da prancha de identidade e têm resolução limitada. Há 6 sabores
      e menos fotos distintas, então algumas se repetem entre sabor e seção.
- [ ] Favicon e `og:image` em `index.html`.

### Dois pontos jurídicos

**Marcas de terceiros.** "Bueno" (Ferrero) e "Lotus" (Lotus Bakeries) são marcas
registradas. Usá-las como nome de sabor numa operação que vende e licencia revenda
é risco de notificação. Há sugestões de nomes neutros comentadas no topo de
`src/data/produtos.js`.

**Receitas.** As fichas de produção que você mandou **não estão no site**, e não
devem estar. As descrições dos sabores foram escritas a partir delas, mas sem
nenhuma quantidade. A página da massa congelada só traz o modo de assar — que o
cliente precisa saber — nunca a formulação.

---

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Preço, sabor, descrição, kits | `src/data/produtos.js` |
| Telefone, endereço, horário, redes, menu | `src/data/marca.js` |
| Banners, entrega, revenda, FAQ, depoimentos | `src/data/conteudo.js` |
| Cores, espaçamento, tipografia | `src/styles.css` (variáveis no `:root`) |
| Rotas e ordem das páginas | `src/App.jsx` |
| Fotos e logotipo | `src/assets/` + `src/assets/index.js` |

Nenhum componente tem texto escrito dentro. Tudo vem dos três arquivos de `data/`.

### WhatsApp

`MARCA.whatsapp` em `src/data/marca.js` — só números, com DDI e DDD. A função
`zap("mensagem")` monta o link já preenchido. Cada botão passa a própria mensagem,
e o carrinho monta a lista completa do pedido.

### Carrinho

O carrinho vive em `src/carrinho/CarrinhoContext.jsx`, guarda no `localStorage`
e **fecha o pedido pelo WhatsApp** — não há gateway de pagamento. Para vender com
checkout de verdade (Pix, cartão, antifraude), o caminho é plugar uma plataforma
(Stripe, Mercado Pago, Medusa) e trocar o botão "Fechar pedido no WhatsApp".

---

## Estrutura

```
src/
├── App.jsx                  rotas
├── main.jsx                 entrada (Router + Provider do carrinho)
├── styles.css               estilos globais + variáveis da marca
├── assets/                  logotipo e fotos (.webp) + index.js
├── carrinho/
│   └── CarrinhoContext.jsx  estado do carrinho, persistido no navegador
├── data/
│   ├── marca.js             contato, menu, formatação de moeda
│   ├── produtos.js          catálogo, sabores, kits
│   └── conteudo.js          banners, entrega, revenda, FAQ, depoimentos
├── componentes/
│   ├── ui.jsx               Estrela, Tick, Onda, Rev, Cabeca, Capa, ícones
│   ├── Cabecalho.jsx        fita, busca, logo, carrinho, navegação
│   ├── Rodape.jsx           rodapé, faixa corrida, botão de WhatsApp
│   ├── Carrossel.jsx        banners da home
│   ├── ProdutoCard.jsx      card do catálogo
│   └── Newsletter.jsx       captura de e-mail
└── paginas/
    ├── Home.jsx             carrossel, destaques, sabores, delivery, kits, revenda
    ├── Produtos.jsx         catálogo com filtro e busca
    ├── Produto.jsx          página do produto, com modo de assar quando é massa
    ├── Kits.jsx             kits para festa e regras
    ├── Delivery.jsx         taxas, prazos e FAQ
    ├── Lojas.jsx            loja própria e pontos de revenda
    ├── Revenda.jsx          proposta de revenda e formulário
    ├── Sobre.jsx            história e valores
    ├── Carrinho.jsx         carrinho e fechamento do pedido
    └── NaoEncontrada.jsx    404
```

## Publicando

A saída é estática. **Como o site tem várias rotas**, o servidor precisa devolver
`index.html` para qualquer caminho — senão `/produtos` dá 404 ao recarregar.

- **Netlify:** já resolvido, o arquivo `public/_redirects` vai junto no build.
- **Vercel:** detecta Vite e resolve sozinho.
- **GitHub Pages:** não suporta esse redirecionamento. Troque `BrowserRouter` por
  `HashRouter` em `src/main.jsx` (os endereços viram `/#/produtos`) e ajuste `base`
  no `vite.config.js` para `"/thecookie/"`.
