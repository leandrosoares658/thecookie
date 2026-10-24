import { Rev } from "../componentes/ui";
import { presentesCapa, brindeClientes, brindeColaboradores, brindeEventos } from "../assets";
import { MARCA, zap } from "../data/marca";
import s from "./Kits.module.css";
import l from "../estilos/layout.module.css";

const ZAP_CORPORATIVO = "Oi! Queria um orçamento de brindes corporativos.";

/* para quem é o brinde: um card por público */
const PUBLICOS = [
  {
    titulo: "Para seus clientes",
    texto:
      "Agradeça pela confiança com um brinde que dá vontade de abrir na hora. Ideal para acompanhar uma compra, celebrar uma parceria ou surpreender em datas especiais.",
    foto: brindeClientes,
    alt: "Cookies embalados um a um com adesivo The Cookie",
  },
  {
    titulo: "Para seus colaboradores",
    texto:
      "Dê mais sabor às boas-vindas, às conquistas e às comemorações da equipe. Um gesto de cuidado para quem faz parte do dia a dia da sua empresa.",
    foto: brindeColaboradores,
    alt: "Pote de cookies com laço vermelho, caixa azul e cookie embalado The Cookie",
  },
  {
    titulo: "Para seus eventos",
    texto:
      "Receba seus convidados com uma lembrança gostosa. Cookies personalizados para encontros, inaugurações, congressos e ações da sua marca.",
    foto: brindeEventos,
    alt: "Caixinha kraft com três cookies e caixa azul The Cookie",
  },
];

export default function Kits() {
  return (
    <>
      {/* capa com os presentes ao fundo, no mesmo desenho da página da marca */}
      <section className={s.capa}>
        <img className={s.capaFoto} src={presentesCapa} alt="" />
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
              <a className="btn btn-v grande" href={zap(ZAP_CORPORATIVO, MARCA.whatsappComercial)} target="_blank" rel="noreferrer">
                Solicitar orçamento corporativo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* empresas: para quem é o brinde corporativo */}
      <section className={l.bloco} id="empresas">
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
            <a className="btn btn-v grande" href={zap(ZAP_CORPORATIVO, MARCA.whatsappComercial)} target="_blank" rel="noreferrer">
              Solicitar orçamento corporativo
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
