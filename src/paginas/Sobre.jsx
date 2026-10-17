import { Link } from "react-router-dom";
import { Capa, Rev } from "../componentes/ui";
import Newsletter from "../componentes/Newsletter";
import { vitrine, pilha } from "../assets";
import { HISTORIA, VALORES } from "../data/conteudo";
import { MARCA } from "../data/marca";
import s from "./Sobre.module.css";
import l from "../estilos/layout.module.css";

export default function Sobre() {
  return (
    <>
      <Capa titulo="A marca" texto={MARCA.assinatura} />

      <section className={l.bloco}>
        <div className={`wrap ${l.duasColunas}`}>
          <Rev className={l.moldura}>
            <img src={vitrine} alt="A loja da The Cookie" loading="lazy" />
          </Rev>
          <div>
            <h2>Como começou</h2>
            {HISTORIA.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>O que a gente não abre mão</h2>
          <div className={s.gradeValores}>
            {VALORES.map((v) => (
              <Rev tag="article" className={s.valor} key={v.titulo}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className={l.bloco}>
        <div className={`wrap ${l.duasColunas} ${l.invertida}`}>
          <div>
            <h2>Seis sabores, uma massa só</h2>
            <p>
              A base é sempre a mesma: manteiga batida com os dois açúcares até ficar aerada, farinha
              peneirada e massa descansada no frio antes de assar. O que muda de um sabor para o
              outro é o que vai dentro — e, em dois deles, o recheio no meio.
            </p>
            <p>
              Cada cookie sai com 150 g, assado por 12 minutos direto do congelador. É esse choque
              de temperatura que deixa a borda firme e o centro ainda mole.
            </p>
            <a href={MARCA.cardapio} className="btn btn-v" target="_blank" rel="noreferrer">Ver os seis sabores</a>
          </div>
          <Rev className={l.moldura}>
            <img src={pilha} alt="Pilha de cookies artesanais" loading="lazy" />
          </Rev>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
