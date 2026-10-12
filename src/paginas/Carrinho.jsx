import { Link } from "react-router-dom";
import { FOTOS } from "../assets";
import { real, zap, MARCA } from "../data/marca";
import { ENTREGA } from "../data/conteudo";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import { Capa } from "../componentes/ui";

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
        <section className="bloco">
          <div className="wrap centro">
            <p className="vazio">Seu carrinho está vazio por enquanto.</p>
            <Link to="/produtos" className="btn btn-v grande">Ver o cardápio</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Capa titulo="Seu carrinho" texto={`${unidades} item(ns) selecionado(s)`} />

      <section className="bloco">
        <div className="wrap carrinho-grid">
          <div className="carrinho-itens">
            {linhas.map((l) => (
              <article className="linha" key={l.slug}>
                <Link to={`/produtos/${l.slug}`} className="linha-foto">
                  <img src={FOTOS[l.foto]} alt={l.nome} loading="lazy" />
                </Link>

                <div className="linha-info">
                  <h3>
                    <Link to={`/produtos/${l.slug}`}>{l.nome}</Link>
                  </h3>
                  <p>{l.resumo}</p>
                  <button className="linha-remover" onClick={() => remover(l.slug)}>
                    Remover
                  </button>
                </div>

                <div className="linha-acoes">
                  <div className="contador">
                    <button onClick={() => mudarQuantidade(l.slug, l.quantidade - 1)} aria-label={`Diminuir ${l.nome}`}>−</button>
                    <span>{l.quantidade}</span>
                    <button onClick={() => mudarQuantidade(l.slug, l.quantidade + 1)} aria-label={`Aumentar ${l.nome}`}>+</button>
                  </div>
                  <p className="linha-preco">{real(l.subtotal)}</p>
                </div>
              </article>
            ))}

            <div className="carrinho-obs">
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

            <button className="linha-remover" onClick={limpar}>Esvaziar carrinho</button>
          </div>

          <aside className="carrinho-resumo">
            <h2>Resumo</h2>

            <p className="resumo-linha">
              <span>Itens ({unidades})</span>
              <b>{real(total)}</b>
            </p>
            <p className="resumo-linha fraca">
              <span>Entrega</span>
              <b>calculada no WhatsApp</b>
            </p>

            {abaixoDoMinimo && (
              <p className="aviso-minimo">
                O pedido mínimo para entrega é {real(ENTREGA.minimo)}. Abaixo disso, só retirada na loja.
              </p>
            )}

            {!abaixoDoMinimo && faltaParaGratis > 0 && (
              <p className="aviso-gratis">
                Faltam {real(faltaParaGratis)} para a entrega sair de graça.
              </p>
            )}

            {faltaParaGratis <= 0 && <p className="aviso-gratis">Entrega grátis liberada.</p>}

            <p className="resumo-total">
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

            <p className="resumo-nota">
              O pedido vai montado na mensagem. A central confirma a taxa de entrega, o prazo e a
              forma de pagamento ({ENTREGA.pagamento.join(", ")}).
            </p>

            <Link to="/produtos" className="resumo-voltar">Continuar comprando</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
