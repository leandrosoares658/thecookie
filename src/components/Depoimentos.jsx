import { DEPOIMENTOS } from "../data/conteudo";
import { Rev } from "./ui";

export default function Depoimentos() {
  return (
    <section className="bloco">
      <div className="wrap">
        <div className="cabeca">
          <p className="linha script">Cookie é sempre uma boa ideia.</p>
          <h2>O que dizem por aí</h2>
        </div>

        <div className="depos">
          {DEPOIMENTOS.map((d) => (
            <Rev tag="article" className="depo" key={d.nome}>
              <span className="aspas script" aria-hidden="true">&ldquo;</span>
              <p>{d.texto}</p>
              <p className="quem">
                {d.nome}
                <span>{d.detalhe}</span>
              </p>
            </Rev>
          ))}
        </div>
      </div>
    </section>
  );
}
