import { useState, useEffect, useRef } from "react";

/** Estrela de quatro pontas da identidade. */
export function Estrela(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0c.9 8.2 3.8 11.1 12 12-8.2.9-11.1 3.8-12 12-.9-8.2-3.8-11.1-12-12C8.2 11.1 11.1 8.2 12 0z" />
    </svg>
  );
}

/** Marcador das listas de benefício. */
export function Tick() {
  return (
    <svg
      className="tick"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Onda que separa dois campos de cor. `virada` inverte a curva. */
export function Onda({ cor, virada = false }) {
  return (
    <div className="onda">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          fill={cor}
          d={
            virada
              ? "M0,36 C200,0 400,74 620,58 C830,42 1000,0 1200,30 L1200,0 L0,0 Z"
              : "M0,42 C220,96 420,6 640,32 C840,56 1010,92 1200,54 L1200,90 L0,90 Z"
          }
        />
      </svg>
    </div>
  );
}

/**
 * Revela o conteúdo quando ele entra na tela.
 * `tag` permite usar o mesmo comportamento em <article>, <a> etc.
 */
export function Rev({ children, className = "", tag: Tag = "div", ...resto }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { threshold: 0.16 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`rev ${visivel ? "visivel" : ""} ${className}`.trim()} {...resto}>
      {children}
    </Tag>
  );
}

/** Rolagem suave para uma seção, usada nos links internos. */
export function rolarPara(id, aoTerminar) {
  return (evento) => {
    evento.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    aoTerminar?.();
  };
}
