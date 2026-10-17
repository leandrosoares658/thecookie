import { Link } from "react-router-dom";
import { FOTOS } from "../assets";
import { real, zap, MARCA } from "../data/marca";
import { ENTREGA } from "../data/conteudo";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import { Capa } from "../componentes/ui";
import s from "./Carrinho.module.css";
import l from "../estilos/layout.module.css";

/** Monta a mensagem do pedido para o WhatsApp. */
function montarPedido(linhas, total, observacao) {
  const itens = linhas
    .map((l) => `• ${l.quantidade}x ${l.nome} — ${real(l.subtotal)}`)
    .join("\n");

  return [
    `Olá! Queria fechar um pedido no site da ${MARCA.nome}:`,
    "",
    itens,
    "",
    `Total dos itens: ${real(total)}`,
    observacao.trim() ? `\nObservação: ${observacao.trim()}` : "",
    "",
    "Pode me confirmar a taxa de entrega e o prazo?",
  ]
    .filter(Boolean)
    .join("\n");
}

export default function Carrinho() {
  const { linhas, total, unidades, mudarQuantidade, remover, limpar, observacao, setObservacao } =
    useCarrinho();

  const faltaParaGratis = ENTREGA.gratis - total;
  const abaixoDoMinimo = total > 0 && total < ENTREGA.minimo;

  if (linhas.length === 0) {
    return (
      <>
        <Capa titulo="Seu carrinho" />
        <section className={l.bloco}>
          <div className="wrap centro">
            <p className={l.vazio}>Seu carrinho está vazio por enquanto.</p>
            <a href={MARCA.cardapio} className="btn btn-v grande" target="_blank" rel="noreferrer">Ver o cardápio</a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Capa titulo="Seu carrinho" texto={`${unidades} item(ns) selecionado(s)`} />

      <section className={l.bloco}>
        <div className={`wrap ${s.grid}`}>
          <div className={s.itens}>
            {linhas.map((l) => (
              <article className={s.item} key={linha.slug}>
                <Link to={`/produtos/${l.slug}`} className={s.itemFoto}>
                  <img src={FOTOS[l.foto]} alt={l.nome} loading="lazy" />
                </Link>

                <div className={s.itemInfo}>
                  <h3>
                    <Link to={`/produtos/${l.slug}`}>{l.nome}</Link>
                  </h3>
                  <p>{l.resumo}</p>
                  <button className={s.remover} onClick={() => remover(l.slug)}>
                    Remover
                  </button>
                </div>

                <div className={s.itemAcoes}>
                  <div className={l.contador}>
                    <button onClick={() => mudarQuantidade(l.slug, l.quantidade - 1)} aria-label={`Diminuir ${l.nome}`}>−</button>
                    <span>{l.quantidade}</span>
                    <button onClick={() => mudarQuantidade(l.slug, l.quantidade + 1)} aria-label={`Aumentar ${l.nome}`}>+</button>
                  </div>
                  <p className={s.itemPreco}>{real(l.subtotal)}</p>
                </div>
              </article>
            ))}

            <div className={s.obs}>
              <label htmlFor="obs">
                Observação do pedido <span>(sabores da caixa, ponto de forno, recado no cartão)</span>
              </label>
              <textarea
                id="obs"
                rows="3"
                placeholder="Ex.: na caixa de 6, dois Pistacho e quatro Clássico."
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
              />
            </div>

            <button className={s.remover} onClick={limpar}>Esvaziar carrinho</button>
          </div>

          <aside className={s.resumo}>
            <h2>Resumo</h2>

            <p className={s.resumoLinha}>
              <span>Itens ({unidades})</span>
              <b>{real(total)}</b>
            </p>
            <p className={`${s.resumoLinha} ${s.fraca}`}>
              <span>Entrega</span>
              <b>calculada no WhatsApp</b>
            </p>

            {abaixoDoMinimo && (
              <p className={s.avisoMinimo}>
                O pedido mínimo para entrega é {real(ENTREGA.minimo)}. Abaixo disso, só retirada na loja.
              </p>
            )}

            {!abaixoDoMinimo && faltaParaGratis > 0 && (
              <p className={s.avisoGratis}>
                Faltam {real(faltaParaGratis)} para a entrega sair de graça.
              </p>
            )}

            {faltaParaGratis <= 0 && <p className={s.avisoGratis}>Entrega grátis liberada.</p>}

            <p className={s.resumoTotal}>
              <span>Total dos itens</span>
              <b>{real(total)}</b>
            </p>

            <a
              className="btn btn-v grande bloco-largo"
              href={zap(montarPedido(linhas, total, observacao))}
              target="_blank"
              rel="noreferrer"
            >
              Fechar pedido no WhatsApp
            </a>

            <p className={s.resumoNota}>
              O pedido vai montado na mensagem. A central confirma a taxa de entrega, o prazo e a
              forma de pagamento ({ENTREGA.pagamento.join(", ")}).
            </p>

            <a href={MARCA.cardapio} className={s.voltar} target="_blank" rel="noreferrer">Continuar comprando</a>
          </aside>
        </div>
      </section>
    </>
  );
}
