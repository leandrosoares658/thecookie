import { Rev, Tick } from "../componentes/ui";
import { presente, embalagem, caixaAberta, embalado } from "../assets";
import { KITS, REGRAS_KIT } from "../data/produtos";
import { real, zap } from "../data/marca";
import s from "./Kits.module.css";
import l from "../estilos/layout.module.css";

const ZAP_CORPORATIVO = "Oi! Queria um orçamento de brindes corporativos.";

/* para quem é o brinde: um card por público */
const PUBLICOS = [
  {
    titulo: "Para seus clientes",
    texto:
      "Agradeça pela confiança com um brinde que dá vontade de abrir na hora. Ideal para acompanhar uma compra, celebrar uma parceria ou surpreender em datas especiais.",
    foto: embalagem,
    alt: "Cookies embalados com tag personalizada",
  },
  {
    titulo: "Para seus colaboradores",
    texto:
      "Dê mais sabor às boas-vindas, às conquistas e às comemorações da equipe. Um gesto de cuidado para quem faz parte do dia a dia da sua empresa.",
    foto: caixaAberta,
    alt: "Caixa aberta com cookies",
  },
  {
    titulo: "Para seus eventos",
    texto:
      "Receba seus convidados com uma lembrança gostosa. Cookies personalizados para encontros, inaugurações, congressos e ações da sua marca.",
    foto: embalado,
    alt: "Cookies embalados individualmente",
  },
];

const ATALHOS = [
  { id: "empresas", rotulo: "Para empresas" },
  { id: "festas", rotulo: "Kits para festa" },
  { id: "como-funciona", rotulo: "Como funciona" },
];

export default function Kits() {
  return (
    <>
      {/* capa com a caixa de presente ao fundo, no mesmo desenho da página da marca */}
      <section className={s.capa}>
        <img className={s.capaFoto} src={presente} alt="" />
        <div className={`wrap ${s.capaIn}`}>
          <div className={s.capaTexto}>
            <h1>Sua marca presente nos bons momentos</h1>
            <p className={s.capaLead}>
              Brindes corporativos com o sabor da The Cookie e a identidade da sua empresa.
            </p>
            <p>
              Um agradecimento aos clientes, um carinho com a equipe ou uma surpresa em um evento.
              Nossos cookies artesanais ganham embalagens com tags personalizadas para levar sua
              marca junto de uma experiência deliciosa.
            </p>
            <div className={s.capaBotoes}>
              <a className="btn btn-v grande" href={zap(ZAP_CORPORATIVO)} target="_blank" rel="noreferrer">
                Solicitar orçamento corporativo
              </a>
              <a className={`btn ${s.capaSecundario}`} href="#festas">
                Ver os kits
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav className={s.atalhos} aria-label="Ir para uma seção">
        <div className="wrap">
          <ul>
            {ATALHOS.map((a) => (
              <li key={a.id}>
                <a href={`#${a.id}`}>{a.rotulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* empresas: para quem é o brinde corporativo */}
      <section className={`${l.bloco} ${s.secao}`} id="empresas">
        <div className="wrap">
          <div className={s.publicos}>
            {PUBLICOS.map((p) => (
              <Rev tag="article" className={s.publico} key={p.titulo}>
                <img src={p.foto} alt={p.alt} loading="lazy" />
                <div>
                  <h2>{p.titulo}</h2>
                  <p>{p.texto}</p>
                </div>
              </Rev>
            ))}
          </div>

          <div className={s.fecho}>
            <h2>Vamos criar o brinde da sua empresa?</h2>
            <p>
              Converse com a gente sobre quantidades, tamanhos, sabores e opções de
              personalização.
            </p>
            <a className="btn btn-v grande" href={zap(ZAP_CORPORATIVO)} target="_blank" rel="noreferrer">
              Solicitar orçamento corporativo
            </a>
          </div>
        </div>
      </section>

      {/* festas: os kits prontos */}
      <section className={`${l.bloco} ${l.blocoBege} ${s.secao}`} id="festas">
        <div className="wrap">
          <div className={s.cabeca}>
            <p className={s.etiqueta}>Para festas</p>
            <h2>Kits para festa</h2>
            <p>
              Casamento, aniversário, chá de bebê ou confraternização. Escolha pelo número de
              convidados. O valor já inclui a embalagem individual.
            </p>
          </div>

          <div className={s.grade}>
            {KITS.map((k) => (
              <Rev tag="article" className={`${s.card}` + (k.destaque ? ` ${s.destaque}` : "")} key={k.nome}>
                {k.destaque && <span className={s.selo}>Mais pedido</span>}
                <h3>{k.nome}</h3>
                <p className={s.pessoas}>{k.pessoas}</p>
                <p className={s.preco}>{real(k.preco)}</p>
                <ul>
                  {k.itens.map((i) => (
                    <li key={i}><Tick />{i}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-a"
                  href={zap(`Oi! Queria um orçamento do ${k.nome} para a data: `)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir orçamento
                </a>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className={`${l.bloco} ${s.secao}`} id="como-funciona">
        <div className={`wrap ${l.duasColunas}`}>
          <Rev className={l.moldura}>
            <img src={presente} alt="Caixa de cookies com laço e etiqueta" loading="lazy" />
          </Rev>
          <div>
            <h2>Como funciona</h2>
            <p>
              Você manda a data, o número de pessoas e o tipo de embalagem. A gente responde com
              as opções de sabor e o valor fechado em até 24 horas, sem taxa de projeto.
            </p>
            <ul className={`${l.lista} ${s.regras}`}>
              {REGRAS_KIT.map((r) => (
                <li key={r}><Tick />{r}</li>
              ))}
            </ul>
            <a className="btn btn-v" href={zap("Oi! Queria um orçamento para evento.")} target="_blank" rel="noreferrer">
              Falar com a central
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
