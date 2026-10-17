import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BANNERS_IMG } from "../assets";
import { BANNERS } from "../data/conteudo";
import s from "./Carrossel.module.css";

const INTERVALO = 7000;

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

  return (
    <section
      className={s.carrossel}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      aria-roledescription="carrossel"
    >
      <div className={s.trilho} style={{ transform: `translateX(-${atual * 100}%)` }}>
        {BANNERS.map((b, i) => (
          <Link
            key={b.imagem}
            to={b.para}
            className={s.slide}
            aria-hidden={i !== atual}
            tabIndex={i === atual ? 0 : -1}
          >
            <img
              src={BANNERS_IMG[b.imagem]}
              alt={b.alt}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </Link>
        ))}
      </div>

      <button className={`${s.seta} ${s.anterior}`} onClick={() => ir(atual - 1)} aria-label="Banner anterior">‹</button>
      <button className={`${s.seta} ${s.proximo}`} onClick={() => ir(atual + 1)} aria-label="Próximo banner">›</button>

      <ul className={s.pontos}>
        {BANNERS.map((b, i) => (
          <li key={b.imagem}>
            <button
              className={i === atual ? s.ativo : undefined}
              aria-label={`Ir para o banner ${i + 1}`}
              aria-current={i === atual}
              onClick={() => ir(i)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
