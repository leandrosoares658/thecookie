import { Capa, Rev, Tick } from "../componentes/ui";
import Newsletter from "../componentes/Newsletter";
import { presente } from "../assets";
import { KITS, REGRAS_KIT } from "../data/produtos";
import { real, zap } from "../data/marca";

export default function Kits() {
  return (
    <>
      <Capa
        titulo="Kits para festa"
        texto="Casamento, aniversário, chá de bebê ou confraternização de empresa. A gente monta, embala e entrega."
      />

      <section className="bloco">
        <div className="wrap">
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

      <section className="bloco bloco-bege">
        <div className="wrap duas-colunas">
          <Rev className="moldura">
            <img src={presente} alt="Caixa de cookies com laço e etiqueta" loading="lazy" />
          </Rev>
          <div>
            <h2>Como funciona</h2>
            <p>
              Você manda a data, o número de pessoas e o tipo de embalagem. A gente responde com
              as opções de sabor e o valor fechado em até 24 horas, sem taxa de projeto.
            </p>
            <ul className="lista regras">
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
