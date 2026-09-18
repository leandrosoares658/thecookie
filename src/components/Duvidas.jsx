import { useState } from "react";
import { DUVIDAS } from "../data/conteudo";

export default function Duvidas() {
  const [aberta, setAberta] = useState(0);

  return (
    <section className="bloco" id="duvidas" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cabeca">
          <p className="linha script">Dúvidas?</p>
          <h2>Perguntas que chegam sempre</h2>
        </div>

        <div className="faq">
          {DUVIDAS.map((d, i) => (
            <div className="faq-item" key={d.pergunta}>
              <button
                className="faq-btn"
                aria-expanded={aberta === i}
                aria-controls={`resposta-${i}`}
                onClick={() => setAberta(aberta === i ? -1 : i)}
              >
                {d.pergunta}
                <span className="sinal" aria-hidden="true">
                  {aberta === i ? "–" : "+"}
                </span>
              </button>
              {aberta === i && (
                <p className="faq-resp" id={`resposta-${i}`}>
                  {d.resposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
