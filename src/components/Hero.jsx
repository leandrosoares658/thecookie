import { logo, pilha, tag } from "../assets";
import { MARCA, NUMEROS, linkWhatsapp } from "../data/conteudo";
import { rolarPara } from "./ui";

export default function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="wrap hero-grid">
        <div>
          <img className="marca entra d1" src={logo} alt="The Cookie — cookies artesanais" />

          <p className="hero-frase script entra d2">{MARCA.assinatura}</p>

          <p className="hero-texto entra d2">
            Fornadas pequenas ao longo do dia, massa descansada e borda crocante. Para
            comer ainda quente no balcão ou assar na sua cozinha.
          </p>

          <div className="hero-ctas entra d3">
            <a className="btn btn-v" href="#sabores" onClick={rolarPara("sabores")}>
              Ver sabores
            </a>
            <a
              className="btn btn-o"
              href={linkWhatsapp("Oi! Queria fazer um pedido.")}
              target="_blank"
              rel="noreferrer"
            >
              Pedir no WhatsApp
            </a>
          </div>

          <div className="hero-meta entra d4">
            {NUMEROS.map((n) => (
              <div key={n.valor}>
                <b>{n.valor}</b>
                <span>{n.nota}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="palco entra d3">
          <div className="foto">
            <img src={pilha} alt="Pilha de cookies artesanais recém-assados" />
          </div>
          <img className="tag-gira" src={tag} alt="" aria-hidden="true" />
          <div className="selo">
            <span>a partir de</span>
            <strong>R$ 12</strong>
            <span>a unidade</span>
          </div>
        </div>
      </div>
    </header>
  );
}
