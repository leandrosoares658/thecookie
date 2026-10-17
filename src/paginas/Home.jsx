import { Link } from "react-router-dom";
import Carrossel from "../componentes/Carrossel";
import Pilares from "../componentes/Pilares";
import Newsletter from "../componentes/Newsletter";
import { Cabeca, Onda, Rev } from "../componentes/ui";
import { FOTOS, pilha } from "../assets";
import { VITRINE } from "../data/servicos";
import { SABORES } from "../data/produtos";
import { DEPOIMENTOS } from "../data/conteudo";
import { MARCA, real, zap } from "../data/marca";
import s from "./Home.module.css";
import l from "../estilos/layout.module.css";

/** liga o tema de cada quadro à classe do módulo */
const TEMAS = { creme: s.temaCreme, azul: s.temaAzul, vermelho: s.temaVermelho };

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
      <section className={s.servicos} id="servicos">
        <div className="wrap">
          <Cabeca
            linha="Mais que cookies, é sobre momentos."
            titulo="O que a gente faz"
            texto="Quatro jeitos de ter o mesmo cookie. Clique no que te interessa para ver com calma."
          />

          <div className={s.grade}>
            {VITRINE.map((item) => (
              <article className={`${s.quadro} ${TEMAS[item.tema]}`} key={item.id}>
                <Link to={item.para} className={s.link}>
                  <span className={s.quadroFoto}>
                    <img
                      src={FOTOS[item.foto]}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={item.foco ? { objectPosition: item.foco } : undefined}
                    />
                  </span>

                  <span className={s.quadroCorpo}>
                    <span className={s.num}>{item.numero}</span>
                    <span className={s.nome}>{item.nome}</span>
                    <span className={`${s.chamadaCurta} script`}>{item.chamada}</span>
                    <span className={s.resumo}>{item.resumo}</span>
                    <span className={s.acao}>{item.acao}</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Onda cor="var(--azul-fundo)" />

      {/* sabores, em lista rápida */}
      <section className={s.sabores}>
        <div className="wrap">
          <Cabeca
            clara
            linha="Qual é o seu favorito?"
            titulo="Seis sabores, uma massa só"
            texto="Mesma base de manteiga e açúcar mascavo, descansada antes de assar. O que muda é o que vai dentro."
          />
          <ul className={s.saboresLista}>
            {SABORES.map((sabor) => (
              <li key={sabor.slug}>
                <Link to={`/produtos/${sabor.slug}`}>
                  <b>{sabor.nome}</b>
                  <span>{sabor.resumo}</span>
                  <em>{real(sabor.preco)}</em>
                </Link>
              </li>
            ))}
          </ul>
          <p className={s.saboresRodape}>
            <Link to="/produtos" className="btn btn-bege">Ver o cardápio completo</Link>
          </p>
        </div>
      </section>

      <Onda cor="var(--azul-fundo)" virada />

      {/* prova social */}
      <section className={l.bloco}>
        <div className="wrap">
          <Cabeca linha="Cookie é sempre uma boa ideia." titulo="O que dizem por aí" />
          <div className={s.gradeDepos}>
            {DEPOIMENTOS.map((d) => (
              <Rev tag="article" className={s.depo} key={d.nome}>
                <span className={`${s.aspas} script`} aria-hidden="true">&ldquo;</span>
                <p>{d.texto}</p>
                <p className={s.quem}>
                  {d.nome}
                  <span>{d.detalhe}</span>
                </p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      {/* chamada final */}
      <section className={s.chamada}>
        <div className={`wrap ${s.chamadaGrid}`}>
          <div>
            <p className={`${s.chamadaLinha} script`}>{MARCA.assinatura}</p>
            <h2>Bateu vontade agora?</h2>
            <p className={s.chamadaTexto}>
              Pedidos até 15h saem no mesmo dia. Para festa ou brinde de empresa, a gente
              responde o orçamento em até 24 horas.
            </p>
            <div className={s.chamadaBotoes}>
              <Link to="/produtos" className="btn btn-bege">Montar meu pedido</Link>
              <a
                className="btn btn-claro"
                href={zap("Oi! Vim pelo site e queria fazer um pedido.")}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <Rev className={s.chamadaFoto}>
            <img src={pilha} alt="Cookies artesanais da The Cookie" loading="lazy" />
          </Rev>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
