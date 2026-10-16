import { Link } from "react-router-dom";
import Carrossel from "../componentes/Carrossel";
import Pilares from "../componentes/Pilares";
import Newsletter from "../componentes/Newsletter";
import { Cabeca, Rev } from "../componentes/ui";
import { FOTOS, pilha } from "../assets";
import { VITRINE } from "../data/servicos";
import { SABORES } from "../data/produtos";
import { DEPOIMENTOS } from "../data/conteudo";
import { MARCA, real, zap } from "../data/marca";

/**
 * Home seguindo o wireframe: banner → faixa → os quatro serviços →
 * sabores → prova social → chamada → newsletter.
 *
 * Os quatro serviços aparecem resumidos de propósito. Cada um tem a própria
 * página; aqui o cliente só precisa descobrir que existem.
 */
export default function Home() {
  return (
    <>
      <Carrossel />

      {/* a faixa dos pilares, mantida como estava */}
      <Pilares />

      {/* os quatro serviços — o coração da home */}
      <section className="servicos-home" id="servicos">
        <div className="wrap">
          <Cabeca
            linha="Mais que cookies, é sobre momentos."
            titulo="O que a gente faz"
            texto="Quatro jeitos de ter o mesmo cookie. Clique no que te interessa para ver com calma."
          />

          <div className="servicos-grade">
            {VITRINE.map((s) => (
              <article className={`quadro tema-${s.tema}`} key={s.id}>
                <Link to={s.para} className="quadro-link">
                  <span className="quadro-foto">
                    <img
                      src={FOTOS[s.foto]}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={s.foco ? { objectPosition: s.foco } : undefined}
                    />
                  </span>

                  <span className="quadro-corpo">
                    <span className="quadro-num">{s.numero}</span>
                    <span className="quadro-nome">{s.nome}</span>
                    <span className="quadro-chamada script">{s.chamada}</span>
                    <span className="quadro-resumo">{s.resumo}</span>
                    <span className="quadro-acao">{s.acao}</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* sabores, em lista rápida */}
      <section className="faixa-sabores">
        <div className="wrap">
          <Cabeca
            className="clara"
            linha="Qual é o seu favorito?"
            titulo="Seis sabores, uma massa só"
            texto="Mesma base de manteiga e açúcar mascavo, descansada antes de assar. O que muda é o que vai dentro."
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
          <p className="sabores-rodape">
            <Link to="/produtos" className="btn btn-bege">Ver o cardápio completo</Link>
          </p>
        </div>
      </section>

      {/* prova social */}
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

      {/* chamada final */}
      <section className="chamada">
        <div className="wrap chamada-grid">
          <div>
            <p className="linha script">{MARCA.assinatura}</p>
            <h2>Bateu vontade agora?</h2>
            <p className="chamada-texto">
              Pedidos até 15h saem no mesmo dia. Para festa ou brinde de empresa, a gente
              responde o orçamento em até 24 horas.
            </p>
            <div className="chamada-botoes">
              <Link to="/produtos" className="btn btn-bege">Montar meu pedido</Link>
              <a
                className="btn btn-vazado-claro"
                href={zap("Oi! Vim pelo site e queria fazer um pedido.")}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <Rev className="chamada-foto">
            <img src={pilha} alt="Cookies artesanais da The Cookie" loading="lazy" />
          </Rev>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
