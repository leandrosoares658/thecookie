import { Link } from "react-router-dom";
import Carrossel from "../componentes/Carrossel";
import Newsletter from "../componentes/Newsletter";
import ProdutoCard from "../componentes/ProdutoCard";
import { Cabeca, Onda, Rev, Tick } from "../componentes/ui";
import { pessoa, presente, vitrine } from "../assets";
import { PRODUTOS, SABORES, KITS } from "../data/produtos";
import { PILARES, DEPOIMENTOS, ENTREGA, REVENDA } from "../data/conteudo";
import { real, zap } from "../data/marca";

export default function Home() {
  const destaques = PRODUTOS.filter((p) => p.destaque);

  return (
    <>
      <Carrossel />

      {/* pilares */}
      <section className="pilares">
        <div className="wrap pilares-grid">
          {PILARES.map((p) => (
            <div className="pilar" key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* destaques */}
      <section className="bloco">
        <div className="wrap">
          <Cabeca
            linha="Qual é o seu favorito?"
            titulo="Nossos destaques"
            texto="Os seis sabores são fixos o ano inteiro. Estes são os que mais saem."
          />
          <div className="grade-produtos">
            {destaques.map((p) => (
              <ProdutoCard key={p.slug} produto={p} />
            ))}
          </div>
          <div className="centro">
            <Link to="/produtos" className="btn btn-a grande">Ver o cardápio completo</Link>
          </div>
        </div>
      </section>

      <Onda cor="#0F3B6D" />

      {/* sabores em lista */}
      <section className="sabores-faixa">
        <div className="wrap">
          <Cabeca
            className="clara"
            linha="Seis sabores, uma massa só"
            titulo="O cardápio inteiro"
            texto="Mesma base de manteiga e açúcar mascavo. O que muda é o que vai dentro."
          />
          <ul className="sabores-lista">
            {SABORES.map((s) => (
              <li key={s.slug}>
                <Link to={`/produtos/${s.slug}`}>
                  <b>{s.nome}</b>
                  <span>{s.resumo}</span>
                  <em>{real(s.preco)}</em>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Onda cor="#0F3B6D" virada />

      {/* delivery */}
      <section className="bloco">
        <div className="wrap duas-colunas">
          <Rev className="moldura">
            <img src={pessoa} alt="Cliente da The Cookie" loading="lazy" />
          </Rev>
          <div>
            <Cabeca linha="Chegou quentinho?" titulo="Delivery na cidade toda" />
            <p>{ENTREGA.prazo}</p>
            <ul className="lista">
              {ENTREGA.faixas.map((f) => (
                <li key={f.regiao}>
                  <Tick />
                  {f.regiao} — {real(f.taxa)}, {f.tempo}
                </li>
              ))}
              <li><Tick />{ENTREGA.retirada}</li>
            </ul>
            <Link to="/delivery" className="btn btn-v">Como funciona a entrega</Link>
          </div>
        </div>
      </section>

      {/* kits */}
      <section className="bloco bloco-bege">
        <div className="wrap">
          <Cabeca
            linha="O sabor que torna qualquer ocasião mais doce."
            titulo="Kits para festa"
            texto="Casamento, aniversário, confraternização de empresa. A gente monta, embala e entrega."
          />
          <div className="grade-kits">
            {KITS.map((k) => (
              <Rev tag="article" className={"kit-card" + (k.destaque ? " destaque" : "")} key={k.nome}>
                {k.destaque && <span className="kit-selo">Mais pedido</span>}
                <h3>{k.nome}</h3>
                <p className="kit-pessoas">{k.pessoas}</p>
                <p className="kit-preco">{real(k.preco)}</p>
                <ul>
                  {k.itens.map((i) => (
                    <li key={i}><Tick />{i}</li>
                  ))}
                </ul>
                <a className="btn btn-a" href={zap(`Oi! Queria um orçamento do ${k.nome}.`)} target="_blank" rel="noreferrer">
                  Pedir orçamento
                </a>
              </Rev>
            ))}
          </div>
          <div className="centro">
            <Link to="/kits" className="btn btn-o">Ver regras e prazos dos kits</Link>
          </div>
        </div>
      </section>

      {/* revenda */}
      <section className="revenda-chamada">
        <div className="wrap duas-colunas">
          <div>
            <p className="linha script">Para o seu negócio</p>
            <h2>Revenda The Cookie</h2>
            <p className="revenda-frase">{REVENDA.chamada}</p>
            <p>{REVENDA.texto}</p>
            <Link to="/revenda" className="btn btn-bege">Quero revender</Link>
          </div>
          <Rev className="moldura">
            <img src={vitrine} alt="Expositor de balcão da The Cookie" loading="lazy" />
          </Rev>
        </div>
      </section>

      {/* depoimentos */}
      <section className="bloco">
        <div className="wrap">
          <Cabeca linha="Cookie é sempre uma boa ideia." titulo="O que dizem por aí" />
          <div className="grade-depos">
            {DEPOIMENTOS.map((d) => (
              <Rev tag="article" className="depo" key={d.nome}>
                <span className="aspas script" aria-hidden="true">&ldquo;</span>
                <p>{d.texto}</p>
                <p className="depo-quem">
                  {d.nome}
                  <span>{d.detalhe}</span>
                </p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* presente */}
      <section className="bloco bloco-bege">
        <div className="wrap duas-colunas">
          <Rev className="moldura">
            <img src={presente} alt="Caixa de presente com cookies" loading="lazy" />
          </Rev>
          <div>
            <Cabeca linha="Para momentos especiais" titulo="Caixa de presente" />
            <p>
              Seis cookies, laço e etiqueta com o nome de quem recebe, escrito à mão.
              Dá para montar com os seis sabores e deixar a pessoa escolher o favorito.
            </p>
            <Link to="/produtos/caixa-6" className="btn btn-v">Ver a caixa com 6</Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
