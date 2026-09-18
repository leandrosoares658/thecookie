import { ponto, bite } from "../assets";
import { PRODUTOS, linkWhatsapp } from "../data/conteudo";
import { Rev, Tick } from "./ui";

const CAPAS = {
  "no-ponto": { src: ponto, alt: "Cookies assados no dia, prontos na vitrine" },
  kit: { src: bite, alt: "Cookie assado em casa a partir do kit de massa congelada" },
};

export default function Momentos() {
  return (
    <section className="momentos" id="momentos">
      <div className="wrap">
        <div className="cabeca">
          <p className="linha script">Prontos para o seu momento.</p>
          <h2>Come agora ou assa em casa</h2>
          <p>
            São dois jeitos de ter o mesmo cookie. Escolha pela pressa — ou pelo cheiro
            que você quer que a sua casa tenha daqui a quinze minutos.
          </p>
        </div>

        <div className="cards">
          {PRODUTOS.map((p) => (
            <Rev tag="article" className={`card card-${p.tema}`} key={p.id}>
              <div className="capa">
                <img src={CAPAS[p.id].src} alt={CAPAS[p.id].alt} />
                <div className="preco-flut">
                  {p.preco}
                  <small>{p.unidade}</small>
                </div>
              </div>

              <div className="corpo">
                <p className="tag">{p.tag}</p>
                <h3>{p.nome}</h3>
                <p className="frase script">{p.frase}</p>
                <ul className="lista">
                  {p.itens.map((item) => (
                    <li key={item}>
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${p.tema === "azul" ? "btn-c" : "btn-a"}`}
                  href={linkWhatsapp(p.mensagem)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.cta}
                </a>
              </div>
            </Rev>
          ))}
        </div>
      </div>
    </section>
  );
}
