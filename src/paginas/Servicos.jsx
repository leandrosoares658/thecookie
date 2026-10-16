import { Link } from "react-router-dom";
import HubServicos from "../componentes/HubServicos";
import Newsletter from "../componentes/Newsletter";
import { Capa, Rev } from "../componentes/ui";
import { FOTOS } from "../assets";
import { SERVICOS, PASSOS } from "../data/servicos";
import { zap } from "../data/marca";

export default function Servicos() {
  return (
    <>
      <Capa
        titulo="O que a gente faz"
        texto="Quatro jeitos de ter o mesmo cookie: no seu negócio, na sua porta, no presente de alguém ou no seu forno."
      />

      <HubServicos />

      {/* atalhos para os quatro blocos */}
      <nav className="servicos-atalhos" aria-label="Ir para um serviço">
        <div className="wrap">
          <ul>
            {SERVICOS.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>
                  <span className="atalho-num">{String(i + 1).padStart(2, "0")}</span>
                  {s.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* um bloco por serviço, alternando o lado da foto */}
      {SERVICOS.map((s, i) => (
        <section
          className={`servico tema-${s.tema} ${i % 2 ? "invertido" : ""}`}
          id={s.id}
          key={s.id}
        >
          <div className="wrap servico-grid">
            <div className="servico-texto">
              <p className="servico-etiqueta">{s.etiqueta}</p>
              <h2>
                {s.titulo[0]}
                <br />
                {s.titulo[1]}
              </h2>
              <p className="servico-frase script">{s.frase}</p>
              <p className="servico-resumo">{s.resumo}</p>

              <ul className="servico-pontos">
                {s.pontos.map((p) => (
                  <li key={p.termo}>
                    <span className="ponto-marca" aria-hidden="true" />
                    <div>
                      <b>{p.termo}</b>
                      <span>{p.texto}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="servico-botoes">
                <Link to={s.cta.para} className="btn btn-principal">
                  {s.cta.rotulo}
                </Link>
                <a className="btn btn-secundario" href={zap(s.zap)} target="_blank" rel="noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="servico-visual">
              <Rev className="servico-foto">
                <img
                  src={FOTOS[s.foto]}
                  alt={s.nome}
                  loading="lazy"
                  style={s.foco ? { objectPosition: s.foco } : undefined}
                />
              </Rev>
              <ul className="servico-numeros">
                {s.numeros.map((n) => (
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
      <section className="passos">
        <div className="wrap">
          <div className="passos-cabeca">
            <h2>Como começar</h2>
            <p>
              Vale para qualquer um dos quatro: a conversa começa igual e a proposta volta
              em até 24 horas.
            </p>
          </div>

          <ol className="passos-grade">
            {PASSOS.map((p, i) => (
              <Rev tag="li" className="passo-card" key={p.titulo}>
                <span className="passo-numero">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </Rev>
            ))}
          </ol>

          <div className="passos-cta">
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
