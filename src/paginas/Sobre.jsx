import { Rev } from "../componentes/ui";
import Newsletter from "../componentes/Newsletter";
import { vitrine, pilha } from "../assets";
import { HISTORIA, VALORES } from "../data/conteudo";
import { MARCA } from "../data/marca";
import s from "./Sobre.module.css";
import l from "../estilos/layout.module.css";

/* Foto da Keth: basta salvar src/assets/keth.jpg (ou .jpeg, .png, .webp) que
   ela entra sozinha. Enquanto o arquivo não existe, a capa usa a vitrine. */
const FOTOS_KETH = import.meta.glob("../assets/keth.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const fotoKeth = Object.values(FOTOS_KETH)[0];

export default function Sobre() {
  return (
    <>
      {/* capa com a foto da Keth ao fundo e a história por cima */}
      <section className={s.historia}>
        <img
          className={s.historiaFoto}
          src={fotoKeth || vitrine}
          alt={fotoKeth ? "Keth, idealizadora da The Cookie" : "A vitrine da The Cookie"}
        />
        <div className={`wrap ${s.historiaIn}`}>
          <div className={s.historiaTexto}>
            <p className={`${s.historiaLinha} script`}>{MARCA.assinatura}</p>
            <h1>A Keth e a The Cookie</h1>
            <p className={s.historiaDestaque}>
              Por trás de cada fornada tem uma pessoa: a Keth, que idealizou a marca e faz a
              The Cookie acontecer todos os dias.
            </p>
            {HISTORIA.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className={`${s.assinatura} script`}>Keth, idealizadora da The Cookie</p>
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
