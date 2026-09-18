import { navy, pessoa, vermelho, pilha } from "../assets";
import { MARCA } from "../data/conteudo";
import { Rev } from "./ui";

const POSTS = [navy, pessoa, vermelho, pilha];
const PERFIL = `https://instagram.com/${MARCA.instagram}`;

export default function Galeria() {
  return (
    <section className="bloco">
      <div className="wrap">
        <div className="galeria-topo">
          <div className="cabeca" style={{ marginBottom: 0 }}>
            <p className="linha script">Sabor que vira momento.</p>
            <h2>No nosso Instagram</h2>
          </div>
          <a className="btn btn-o" href={PERFIL} target="_blank" rel="noreferrer">
            Seguir @{MARCA.instagram}
          </a>
        </div>

        <div className="galeria">
          {POSTS.map((src, i) => (
            <Rev tag="a" key={i} href={PERFIL} target="_blank" rel="noreferrer">
              <img src={src} alt="Publicação da The Cookie no Instagram" />
            </Rev>
          ))}
        </div>
      </div>
    </section>
  );
}
