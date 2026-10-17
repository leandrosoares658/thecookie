import { Link } from "react-router-dom";
import HubServicos from "../componentes/HubServicos";
import Newsletter from "../componentes/Newsletter";
import { Capa, Rev } from "../componentes/ui";
import { FOTOS } from "../assets";
import { SERVICOS, PASSOS } from "../data/servicos";
import { zap } from "../data/marca";
import s from "./Servicos.module.css";

/** liga o tema de cada bloco à classe do módulo */
const TEMAS = { creme: s.temaCreme, bege: s.temaBege, azul: s.temaAzul, vermelho: s.temaVermelho };

export default function Servicos() {
  return (
    <>
      <Capa
        titulo="O que a gente faz"
        texto="Quatro jeitos de ter o mesmo cookie: no seu negócio, na sua porta, no presente de alguém ou no seu forno."
      />

      <HubServicos />

      {/* atalhos para os quatro blocos */}
      <nav className={s.atalhos} aria-label="Ir para um serviço">
        <div className="wrap">
          <ul>
            {SERVICOS.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className={s.atalhoNum}>{String(i + 1).padStart(2, "0")}</span>
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* um bloco por serviço, alternando o lado da foto */}
      {SERVICOS.map((item, i) => (
        <section
          className={`${s.servico} ${TEMAS[item.tema]} ${i % 2 ? s.invertido : ""}`}
          id={item.id}
          key={item.id}
        >
          <div className={`wrap ${s.grid}`}>
            <div className={s.texto}>
              <p className={item.etiqueta}>{item.etiqueta}</p>
              <h2>
                {item.titulo[0]}
                <br />
                {item.titulo[1]}
              </h2>
              <p className={`${item.frase} script`}>{item.frase}</p>
              <p className={item.resumo}>{item.resumo}</p>

              <ul className={s.pontos}>
                {item.pontos.map((p) => (
                  <li key={p.termo}>
                    <span className={s.pontoMarca} aria-hidden="true" />
                    <div>
                      <b>{p.termo}</b>
                      <span>{p.texto}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={s.botoes}>
                <Link to={item.cta.para} className={`btn ${s.principal}`}>
                  {item.cta.rotulo}
                </Link>
                <a className={`btn ${s.secundario}`} href={zap(item.zap)} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className={s.visual}>
              <Rev className={item.foto}>
                <img
                  src={FOTOS[s.foto]}
                  alt={item.nome}
                  loading="lazy"
                  style={item.foco ? { objectPosition: item.foco } : undefined}
                />
              </Rev>
              <ul className={s.numeros}>
                {item.numeros.map((n) => (
                  <li key={n.nota}>
                    <b>{n.valor}</b>
                    <span>{n.nota}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* três passos */}
      <section className={s.passos}>
        <div className="wrap">
          <div className={s.passosCabeca}>
            <h2>Como começar</h2>
            <p>
              Vale para qualquer um dos quatro: a conversa começa igual e a proposta volta
              em até 24 horas.
            </p>
          </div>

          <ol className={s.passosGrade}>
            {PASSOS.map((p, i) => (
              <Rev tag="li" className={s.passoCard} key={p.titulo}>
                <span className={s.passoNumero}>{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </Rev>
            ))}
          </ol>

          <div className={s.passosCta}>
            <a className="btn btn-v grande" href={zap("Oi! Vim pela página de serviços do site.")} target="_blank" rel="noreferrer">
              Começar a conversa
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
