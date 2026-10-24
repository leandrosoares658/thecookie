import { Rev, Tick } from "../componentes/ui";
import { embalagem, cookieClose, bite, vitrine } from "../assets";
import { TAMANHOS, USOS, PREPARO, VIDEO_YOUTUBE } from "../data/massa";
import { MARCA, real, zap } from "../data/marca";
import s from "./FacaEmCasa.module.css";
import l from "../estilos/layout.module.css";

/* fotos dos cards de uso, pela chave em data/massa.js */
const FOTOS_USO = { bite, vitrine, embalagem };

/* Vídeo em arquivo: basta salvar src/assets/tutorial.mp4 (ou .webm) que ele
   entra sozinho. O YouTube, se preenchido em data/massa.js, tem prioridade. */
const VIDEOS = import.meta.glob("../assets/tutorial.{mp4,webm}", {
  eager: true,
  import: "default",
});
const videoArquivo = Object.values(VIDEOS)[0];

function Video() {
  if (VIDEO_YOUTUBE) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_YOUTUBE}?rel=0`}
        title="Tutorial: como assar a massa congelada The Cookie"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }
  if (videoArquivo) {
    return (
      <video controls playsInline preload="metadata" poster={cookieClose}>
        <source src={videoArquivo} />
      </video>
    );
  }
  return (
    <div className={s.videoVazio}>
      <span className={s.play} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </span>
      <p>Vídeo tutorial em breve</p>
    </div>
  );
}

export default function FacaEmCasa() {
  return (
    <>
      {/* capa: mesmo desenho das páginas da marca e de brindes */}
      <section className={s.capa}>
        <img className={s.capaFoto} src={cookieClose} alt="" />
        <div className={`wrap ${s.capaIn}`}>
          <div className={s.capaTexto}>
            <h1>A nossa massa. O seu jeito de fazer.</h1>
            <p className={s.capaLead}>
              O cheirinho de cookie saindo do forno pode fazer parte da sua casa, do seu cardápio
              ou do seu negócio.
            </p>
            <p>
              Nossa massa artesanal vem congelada, em formato de cilindro, para você cortar em
              discos e assar. Prática de preparar, cheia de chocolate e com espaço para a sua
              criatividade.
            </p>
            <div className={s.capaBotoes}>
              <a className="btn btn-v grande" href={MARCA.cardapio} target="_blank" rel="noreferrer">
                Comprar a massa
              </a>
              <a className={`btn ${s.capaSecundario}`} href="#tutorial">
                Ver o tutorial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* usos: casa, cardápio e marca própria */}
      <section className={l.bloco}>
        <div className={`wrap ${s.usos}`}>
          {USOS.map((u) => (
            <Rev tag="article" className={s.uso} key={u.titulo}>
              <img src={FOTOS_USO[u.foto]} alt={u.alt} loading="lazy" />
              <div className={s.usoTexto}>
                <h2>{u.titulo}</h2>
                <p>{u.texto}</p>
                <a
                  className="btn btn-v"
                  href={u.zap ? zap(u.zap) : MARCA.cardapio}
                  target="_blank"
                  rel="noreferrer"
                >
                  {u.botao}
                </a>
              </div>
            </Rev>
          ))}
        </div>
      </section>

      {/* tamanhos */}
      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className="wrap">
          <div className={s.cabeca}>
            <p className={s.etiqueta}>Tamanhos</p>
            <h2>Escolha o seu pacote</h2>
          </div>
          <div className={s.grade}>
            {TAMANHOS.map((t) => (
              <Rev tag="article" className={`${s.card}` + (t.destaque ? ` ${s.destaque}` : "")} key={t.peso}>
                {t.destaque && <span className={s.selo}>Mais pedido</span>}
                <p className={s.peso}>{t.peso}</p>
                <p className={s.rende}>rende {t.rende}</p>
                <p className={s.cardTexto}>{t.texto}</p>
                <p className={s.preco}>{t.preco != null ? real(t.preco) : "Consulte o valor"}</p>
                <div className={s.cardBotoes}>
                  <a className="btn btn-v" href={MARCA.cardapio} target="_blank" rel="noreferrer">
                    Comprar
                  </a>
                  <a className={`btn ${s.cardZap}`} href={zap(`Oi! Queria a massa congelada de ${t.peso}.`)} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* tutorial: vídeo + passo a passo */}
      <section className={s.tutorial} id="tutorial">
        <div className={`wrap ${s.tutorialGrid}`}>
          <div className={s.video}>
            <Video />
          </div>
          <div>
            <p className={s.etiquetaClara}>Tutorial</p>
            <h2>À primeira mordida</h2>
            <p className={s.tutorialIntro}>
              Mantenha a massa congelada, corte em discos conforme as orientações de preparo e asse
              no forno ou na air fryer. Depois, é só escolher: saborear, servir ou vender.
            </p>
            <ol className={s.passos}>
              {PREPARO.map((passo, i) => (
                <li key={passo}>
                  <span className={s.passoNum}>{i + 1}</span>
                  <span>{passo}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
