import { Capa, Rev, Tick } from "../componentes/ui";
import Newsletter from "../componentes/Newsletter";
import { presente } from "../assets";
import { KITS, REGRAS_KIT } from "../data/produtos";
import { real, zap } from "../data/marca";
import s from "./Kits.module.css";
import l from "../estilos/layout.module.css";

export default function Kits() {
  return (
    <>
      <Capa
        titulo="Kits para festa"
        texto="Casamento, aniversário, chá de bebê ou confraternização de empresa. A gente monta, embala e entrega."
      />

      <section className={l.bloco}>
        <div className="wrap">
          <div className={s.grade}>
            {KITS.map((k) => (
              <Rev tag="article" className={`${s.card}` + (k.destaque ? ` ${s.destaque}` : "")} key={k.nome}>
                {k.destaque && <span className={s.selo}>Mais pedido</span>}
                <h3>{k.nome}</h3>
                <p className={s.pessoas}>{k.pessoas}</p>
                <p className={s.preco}>{real(k.preco)}</p>
                <ul>
                  {k.itens.map((i) => (
                    <li key={i}><Tick />{i}</li>
                  ))}
                </ul>
                <a
                  className="btn btn-a"
                  href={zap(`Oi! Queria um orçamento do ${k.nome} para a data: `)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir orçamento
                </a>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className={`wrap ${l.duasColunas}`}>
          <Rev className={l.moldura}>
            <img src={presente} alt="Caixa de cookies com laço e etiqueta" loading="lazy" />
          </Rev>
          <div>
            <h2>Como funciona</h2>
            <p>
              Você manda a data, o número de pessoas e o tipo de embalagem. A gente responde com
              as opções de sabor e o valor fechado em até 24 horas, sem taxa de projeto.
            </p>
            <ul className={`${l.lista} ${s.regras}`}>
              {REGRAS_KIT.map((r) => (
                <li key={r}><Tick />{r}</li>
              ))}
            </ul>
            <a className="btn btn-v" href={zap("Oi! Queria um orçamento para evento.")} target="_blank" rel="noreferrer">
              Falar com a central
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
