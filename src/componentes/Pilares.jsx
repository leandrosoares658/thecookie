import { PILARES } from "../data/conteudo";
import s from "./Pilares.module.css";

/** Faixa de pilares logo abaixo do banner. */
export default function Pilares() {
  return (
    <section className={s.pilares}>
      <div className={`wrap ${s.pilaresGrid}`}>
        {PILARES.map((p) => (
          <div className={s.pilar} key={p.titulo}>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
