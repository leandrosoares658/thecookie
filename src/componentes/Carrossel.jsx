import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FOTOS, tag } from "../assets";
import { BANNERS } from "../data/conteudo";

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

  const banner = BANNERS[atual];

  return (
    <section
      className={`carrossel tema-${banner.tema}`}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      aria-roledescription="carrossel"
    >
      <div className="wrap carrossel-grid">
        <div className="carrossel-texto" key={banner.titulo}>
          <p className="carrossel-frase script">{banner.frase}</p>
          <h1>{banner.titulo}</h1>
          <p className="carrossel-sub">{banner.texto}</p>
          <Link to={banner.botao.para} className="btn btn-destaque">
            {banner.botao.rotulo}
          </Link>
        </div>

        <div className="carrossel-palco">
          <div className="carrossel-foto" key={banner.foto}>
            <img src={FOTOS[banner.foto]} alt="" />
          </div>
          <img className="carrossel-tag" src={tag} alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="wrap carrossel-controles">
        <button onClick={() => ir(atual - 1)} aria-label="Banner anterior">‹</button>
        <ul>
          {BANNERS.map((b, i) => (
            <li key={b.titulo}>
              <button
                className={i === atual ? "ativo" : undefined}
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
