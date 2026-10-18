import { useEffect, useRef, useState } from "react";
import s from "./ui.module.css";
import { useLocation } from "react-router-dom";

/** Estrela de quatro pontas da identidade. */
export function Estrela(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c.9 8.2 3.8 11.1 12 12-8.2.9-11.1 3.8-12 12-.9-8.2-3.8-11.1-12-12C8.2 11.1 11.1 8.2 12 0z" />
    </svg>
  );
}

export function Tick() {
  return (
    <svg className={s.tick} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function IconeCarrinho(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 4h2l2.3 11.2a1.5 1.5 0 001.5 1.2h8.7a1.5 1.5 0 001.5-1.2L21 7H6" />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
    </svg>
  );
}

export function IconeZap(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.7.7-1 1.6-.9 2.6.3 1.4 1 2.6 2 3.6a9 9 0 003.9 2.4c1 .3 2 .3 2.8-.2.5-.3.9-.8 1-1.4.1-.3.1-.6 0-.7l-.3-.2z" />
    </svg>
  );
}

export function IconeInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

const ICONES_REDES = { Instagram: IconeInstagram };

/**
 * Link de rede social (de REDES, em marca.js) mostrado pelo ícone. O nome
 * fica no aria-label e na dica do mouse; rede sem ícone aparece escrita.
 */
export function LinkRede({ rede, className, iconeClassName }) {
  const Icone = ICONES_REDES[rede.nome];
  return (
    <a href={rede.url} target="_blank" rel="noreferrer" className={className}
      aria-label={rede.nome} title={rede.nome}>
      {Icone ? <Icone className={iconeClassName} /> : rede.nome}
    </a>
  );
}

/** Onda que separa dois campos de cor. */
export function Onda({ cor, virada = false }) {
  return (
    <div className={s.onda}>
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
        <path style={{ fill: cor }} d={virada
          ? "M0,36 C200,0 400,74 620,58 C830,42 1000,0 1200,30 L1200,0 L0,0 Z"
          : "M0,42 C220,96 420,6 640,32 C840,56 1010,92 1200,54 L1200,90 L0,90 Z"} />
      </svg>
    </div>
  );
}

/** Revela o conteúdo quando entra na tela. */
export function Rev({ children, className = "", tag: Tag = "div", ...resto }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setVisivel(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisivel(true); io.disconnect(); }
    }, { threshold: 0.14 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={[s.rev, visivel && s.visivel, className].filter(Boolean).join(" ")} {...resto}>
      {children}
    </Tag>
  );
}

/** Cabeçalho padrão de seção. */
export function Cabeca({ linha, titulo, texto, clara = false, className = "", children }) {
  return (
    <div className={[s.cabeca, clara && s.clara, className].filter(Boolean).join(" ")}>
      {linha && <p className={`${s.linha} script`}>{linha}</p>}
      <h2>{titulo}</h2>
      {texto && <p>{texto}</p>}
      {children}
    </div>
  );
}

/** Faixa vermelha no topo das páginas internas. */
export function Capa({ titulo, texto, foto }) {
  return (
    <header className={s.capa} style={foto ? { backgroundImage: `url(${foto})` } : undefined}>
      <div className="wrap">
        <h1>{titulo}</h1>
        {texto && <p>{texto}</p>}
      </div>
    </header>
  );
}

/** Rola até o início da página, suave (ou direto, para quem pediu menos movimento). */
export function subirAoTopo() {
  const semMovimento = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: semMovimento ? "auto" : "smooth" });
}

/** Botão flutuante que aparece depois de rolar um pouco e leva ao início da página. */
export function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const conferir = () => setVisivel(window.scrollY > 600);
    conferir();
    window.addEventListener("scroll", conferir, { passive: true });
    return () => window.removeEventListener("scroll", conferir);
  }, []);

  return (
    <button
      type="button"
      className={[s.topo, visivel && s.topoVisivel].filter(Boolean).join(" ")}
      onClick={subirAoTopo}
      aria-label="Voltar ao início da página"
      title="Voltar ao início"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

/** Sobe para o topo a cada troca de rota. */
export function TopoAoNavegar() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
