import { vitrine } from "../assets";
import { MARCA } from "../data/conteudo";
import { Rev } from "./ui";

export default function Loja() {
  return (
    <section className="vitrine" id="loja">
      <div className="wrap vitrine-grid">
        <div className="texto">
          <h2>Passe na loja</h2>
          <p className="frase script">O verdadeiro sabor em cada mordida.</p>
          <p>
            A vitrine é reposta de hora em hora, então quase sempre tem cookie saindo do
            forno. Peça o do dia, sente no balcão e veja a próxima fornada entrar. Se
            preferir levar, a gente embala na hora.
          </p>
          <div className="hero-meta" style={{ marginTop: "2rem" }}>
            {MARCA.horarios.map((h) => {
              const [dias, hora] = h.split(", ");
              return (
                <div key={h}>
                  <b>{dias}</b>
                  <span className="claro">{hora}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Rev className="moldura">
          <img src={vitrine} alt="Expositor da loja com cookies embalados individualmente" />
        </Rev>
      </div>
    </section>
  );
}
