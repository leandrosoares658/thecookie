import { PILARES } from "../data/conteudo";

/** Faixa de pilares logo abaixo do banner. */
export default function Pilares() {
  return (
    <section className="pilares">
      <div className="wrap pilares-grid">
        {PILARES.map((p) => (
          <div className="pilar" key={p.titulo}>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
