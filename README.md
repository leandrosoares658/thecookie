# The Cookie — Landing page

Site de apresentação da **The Cookie — Cookies Artesanais**, em React + Vite.

## Rodando

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

```bash
npm run build    # gera a pasta dist/
npm run preview  # serve a dist/ para conferir antes de publicar
```

Precisa de Node 18 ou superior.

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Preço, sabor, horário, WhatsApp, textos | `src/data/conteudo.js` |
| Cores, espaçamentos, tipografia | `src/styles.css` (variáveis no `:root`) |
| Ordem das seções | `src/App.jsx` |
| Fotos e logotipo | `src/assets/` + `src/assets/index.js` |

Quase tudo que muda no dia a dia está em `src/data/conteudo.js`. Os componentes
só consomem esses dados — não há texto solto espalhado pelo código.

### WhatsApp

Em `conteudo.js`, ajuste `MARCA.whatsapp` (só números, com DDI e DDD:
`5538990000000`). A função `linkWhatsapp("sua mensagem")` monta o link já com o
texto preenchido, e cada botão passa a própria mensagem.

### Paleta

Definida em `src/styles.css`:

```
--vermelho  #8B1E2D
--azul      #0F3B6D
--creme     #F5E9D8
--bege      #D7C2A7
```

## Estrutura

```
src/
├── App.jsx              monta as seções na ordem
├── main.jsx             ponto de entrada
├── styles.css           estilos globais + variáveis da marca
├── assets/              logotipo e fotos (.webp) + index.js que exporta tudo
├── data/conteudo.js     TODO o texto do site
└── components/
    ├── ui.jsx           Estrela, Tick, Onda, Rev, rolarPara
    ├── Nav.jsx          menu fixo com versão mobile
    ├── Hero.jsx         logotipo, assinatura, foto e etiqueta giratória
    ├── Faixa.jsx        faixa vermelha corrida
    ├── Pilares.jsx      tira azul dos três pilares
    ├── Sabores.jsx      seletor interativo dos quatro sabores
    ├── Momentos.jsx     cards "No ponto" e "Kit em casa"
    ├── Loja.jsx         seção da vitrine física
    ├── Galeria.jsx      grade de posts do Instagram
    ├── Eventos.jsx      orçamento para eventos e presentes
    ├── Depoimentos.jsx  depoimentos de clientes
    ├── Duvidas.jsx      acordeão de perguntas frequentes
    ├── Newsletter.jsx   captura de e-mail
    └── Rodape.jsx       endereço, links e contato
```

## Imagens

O logotipo e as fotos foram recortados da prancha de identidade visual da marca
e convertidos para `.webp`. O recorte do logotipo usa fundo transparente, então
funciona sobre creme e sobre azul — `logo.webp` tem o texto em azul e
`logo-claro.webp` em creme, para fundos escuros.

As fotos vieram do material de apresentação e têm resolução limitada. Para
produção, o ideal é substituí-las por fotos reais do produto mantendo os mesmos
nomes de arquivo em `src/assets/`.

## Pendências antes de publicar

- [ ] Trocar endereço, telefone e horário reais em `src/data/conteudo.js`
- [ ] Substituir os depoimentos por avaliações reais de clientes
- [ ] Conectar o formulário de newsletter a um serviço (Mailchimp, Brevo, etc.) — hoje ele só valida o formato do e-mail (veja o `TODO` em `Newsletter.jsx`)
- [ ] Conferir o aviso sobre glúten na FAQ com a realidade da cozinha
- [ ] Adicionar favicon e imagem de compartilhamento (og:image) em `index.html`

## Publicando

A saída é estática, então serve em qualquer lugar: Vercel, Netlify, Cloudflare
Pages ou GitHub Pages. Para GitHub Pages em subdiretório, ajuste `base` no
`vite.config.js` para `"/nome-do-repo/"`.
