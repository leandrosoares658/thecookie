import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BANNERS_IMG, BANNERS_MOBILE_IMG } from "../assets";
import { BANNERS } from "../data/conteudo";
import s from "./Carrossel.module.css";

const INTERVALO = 7000;
/* mesmo corte do @media do Carrossel.module.css */
const MOBILE = "(max-width: 600px)";

/** true enquanto a tela estiver no corte de celular */
function useCelular() {
  const consulta = () => typeof window !== "undefined" && !!window.matchMedia?.(MOBILE).matches;
  const [celular, setCelular] = useState(consulta);

  useEffect(() => {
    const mq = window.matchMedia?.(MOBILE);
    if (!mq) return;
    const mudou = () => setCelular(mq.matches);
    mq.addEventListener("change", mudou);
    return () => mq.removeEventListener("change", mudou);
  }, []);

  return celular;
}

export default function Carrossel() {
  const celular = useCelular();
  // banner sem arte vertical fica só no computador: a arte larga não cabe no celular
  const banners = celular ? BANNERS.filter((b) => BANNERS_MOBILE_IMG[b.imagem]) : BANNERS;
  const total = banners.length;

  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const ir = useCallback((i) => setAtual((i + total) % total), [total]);

  // a lista muda de tamanho ao girar a tela: não deixa o índice apontar para o vazio
  useEffect(() => {
    if (atual >= total) setAtual(0);
  }, [atual, total]);

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
        {banners.map((b, i) => {
          // endereço externo (Anota AI) abre em outra aba; rota do site navega por dentro
          const externo = /^https?:/.test(b.para);
          const Destino = externo ? "a" : Link;
          const destino = externo
            ? { href: b.para, target: "_blank", rel: "noreferrer" }
            : { to: b.para };
          const mobile = BANNERS_MOBILE_IMG[b.imagem];
          return (
          <Destino
            key={b.imagem}
            {...destino}
            className={s.slide}
            aria-hidden={i !== atual}
            tabIndex={i === atual ? 0 : -1}
          >
            <picture>
              {mobile && <source media={MOBILE} srcSet={mobile} />}
              <img
                src={BANNERS_IMG[b.imagem]}
                alt={b.alt}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </picture>
          </Destino>
          );
        })}
      </div>

      <button className={`${s.seta} ${s.anterior}`} onClick={() => ir(atual - 1)} aria-label="Banner anterior">‹</button>
      <button className={`${s.seta} ${s.proximo}`} onClick={() => ir(atual + 1)} aria-label="Próximo banner">›</button>

      <ul className={s.pontos}>
        {banners.map((b, i) => (
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
