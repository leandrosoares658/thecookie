import { Rev, Tick } from "../componentes/ui";
import { embalagem, cookieClose, massaCaixa, massaEmbalada } from "../assets";
import { USOS, TUTORIAL, VIDEO_YOUTUBE } from "../data/massa";
import rolo from "../assets/tutorial/rolo.webp";
import fatias from "../assets/tutorial/fatias.webp";
import assadeira from "../assets/tutorial/assadeira.webp";
import forno from "../assets/tutorial/forno.webp";
import airfryer from "../assets/tutorial/airfryer.webp";
import cookies from "../assets/tutorial/cookies.webp";
import fornoTopo from "../assets/tutorial/forno-topo.webp";
import { MARCA, zap } from "../data/marca";
import s from "./FacaEmCasa.module.css";
import l from "../estilos/layout.module.css";

/* fotos dos cards de uso, pela chave em data/massa.js */
const FOTOS_USO = { massaCaixa, massaEmbalada, embalagem };

/* desenhos do tutorial, recortados do folheto que vai na caixa */
const DESENHOS = { rolo, fatias, assadeira, forno, airfryer, cookies };

/* Vídeo em arquivo: basta salvar src/assets/tutorial.mp4 (ou .webm) que ele
   entra sozinho, acima dos passos. O YouTube, se preenchido em data/massa.js,
   tem prioridade. */
const VIDEOS = import.meta.glob("../assets/tutorial.{mp4,webm}", {
  eager: true,
  import: "default",
});
const videoArquivo = Object.values(VIDEOS)[0];
const comVideo = Boolean(VIDEO_YOUTUBE || videoArquivo);

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
  return null;
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
              <img src={FOTOS_USO[u.foto]} alt={u.alt} loading="lazy" style={u.foco ? { objectPosition: u.foco } : undefined} />
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

      {/* tutorial: o folheto da caixa, passo a passo, com os desenhos */}
      <section className={s.tutorial} id="tutorial">
        <div className="wrap">
          <div className={s.tutorialCabeca}>
            <img className={s.tutorialEnfeite} src={fornoTopo} alt="" loading="lazy" />
            <div>
              <p className={`${s.tutorialLinha} script`}>Hoje sua casa vai ter cheiro de cookie.</p>
              <h2>Como assar sua massa</h2>
            </div>
          </div>

          {comVideo && (
            <div className={s.video}>
              <Video />
            </div>
          )}

          <ol className={s.passos}>
            {TUTORIAL.map((passo, i) => (
              <Rev tag="li" className={s.passo} key={passo.titulo}>
                <span className={s.passoNum}>{i + 1}</span>
                <div className={s.passoCorpo}>
                  <h3>{passo.titulo}</h3>

                  {passo.texto && <p>{passo.texto}</p>}

                  {passo.aparelhos && (
                    <div className={s.aparelhos}>
                      {passo.aparelhos.map((a) => (
                        <div className={s.aparelho} key={a.nome}>
                          <img src={DESENHOS[a.desenho]} alt="" loading="lazy" />
                          <div>
                            <b className={s.aparelhoNome}>{a.nome}</b>
                            <span className={s.temperatura}>{a.temperatura}</span>
                            {a.texto.map((linha) => (
                              <p key={linha}>{linha}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {passo.rendimento && (
                  <ul className={s.rendimento}>
                    {passo.rendimento.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}

                {passo.desenho && (
                  <img className={s.desenho} src={DESENHOS[passo.desenho]} alt="" loading="lazy" />
                )}
              </Rev>
            ))}
          </ol>

          <p className={s.aviso}>O tempo pode variar conforme o aparelho. Acompanhe o preparo.</p>
          <p className={s.fechoTutorial}>Assou. Esfriou. Aproveitou.</p>
        </div>
      </section>
    </>
  );
}
