import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FOTOS, tag } from "../assets";
import { BANNERS } from "../data/conteudo";
import s from "./Carrossel.module.css";

const INTERVALO = 7000;

/** liga o tema do banner à classe do módulo */
const TEMAS = { creme: s.temaCreme, azul: s.temaAzul, vermelho: s.temaVermelho };

export default function Carrossel() {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const ir = useCallback((i) => setAtual((i + BANNERS.length) % BANNERS.length), []);

  useEffect(() => {
    if (pausado) return;
    const prefereParado = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefereParado) return;
    const t = setInterval(() => ir(atual + 1), INTERVALO);
    return () => clearInterval(t);
  }, [atual, pausado, ir]);

  const banner = BANNERS[atual];

  return (
    <section
      className={`${s.carrossel} ${TEMAS[banner.tema]}`}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      aria-roledescription="carrossel"
    >
      <div className={`wrap ${s.grid}`}>
        <div className={s.texto} key={banner.titulo}>
          <p className={`${s.frase} script`}>{banner.frase}</p>
          <h1>{banner.titulo}</h1>
          <p className={s.sub}>{banner.texto}</p>
          <Link to={banner.botao.para} className={`btn ${s.destaque}`}>
            {banner.botao.rotulo}
          </Link>
        </div>

        <div className={s.palco}>
          <div className={s.foto} key={banner.foto}>
            <img src={FOTOS[banner.foto]} alt="" />
          </div>
        </div>
      </div>

      <div className={`wrap ${s.controles}`}>
        <button onClick={() => ir(atual - 1)} aria-label="Banner anterior">‹</button>
        <ul>
          {BANNERS.map((b, i) => (
            <li key={b.titulo}>
              <button
                className={i === atual ? s.ativo : undefined}
                aria-label={`Ir para o banner ${i + 1}`}
                aria-current={i === atual}
                onClick={() => ir(i)}
              />
            </li>
          ))}
        </ul>
        <button onClick={() => ir(atual + 1)} aria-label="Próximo banner">›</button>
      </div>
    </section>
  );
}
