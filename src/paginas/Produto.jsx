import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProdutoCard from "../componentes/ProdutoCard";
import { Tick } from "../componentes/ui";
import { FOTOS } from "../assets";
import { acharProduto, PRODUTOS } from "../data/produtos";
import { MARCA, real, zap } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import s from "./Produto.module.css";
import l from "../estilos/layout.module.css";

export default function Produto() {
  const { slug } = useParams();
  const produto = acharProduto(slug);
  const { adicionar } = useCarrinho();
  const [quantidade, setQuantidade] = useState(1);
  const [posto, setPosto] = useState(false);

  if (!produto) {
    return (
      <section className={l.bloco}>
        <div className="wrap centro">
          <h1>Produto não encontrado</h1>
          <p>Esse item saiu do cardápio ou o endereço está errado.</p>
          <a href={MARCA.cardapio} className="btn btn-v" target="_blank" rel="noreferrer">Ver o cardápio</a>
        </div>
      </section>
    );
  }

  const colocar = () => {
    adicionar(produto.slug, quantidade);
    setPosto(true);
    setTimeout(() => setPosto(false), 2200);
  };

  const relacionados = PRODUTOS.filter(
    (p) => p.slug !== produto.slug && p.categoria === produto.categoria
  ).slice(0, 3);

  return (
    <>
      <section className={s.pagina}>
        <div className="wrap">
          <nav className={s.migalhas} aria-label="Você está em">
            <Link to="/">Início</Link> <span>/</span>{" "}
            <a href={MARCA.cardapio} target="_blank" rel="noreferrer">Cardápio</a> <span>/</span> {produto.nome}
          </nav>

          <div className={s.grid}>
            <div className={s.imagem}>
              <img src={FOTOS[produto.foto]} alt={produto.nome} />
              {produto.recheado && <span className={`${l.seloRecheado} ${l.grande}`}>Recheado</span>}
            </div>

            <div className={s.info}>
              <p className={s.categoria}>{produto.categoria}</p>
              <h1>{produto.nome}</h1>
              <p className={`${s.frase} script`}>{produto.frase}</p>
              <p className={s.descricao}>{produto.descricao}</p>

              {produto.notas && (
                <ul className={s.notas}>
                  {produto.notas.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}

              <p className={s.valor}>{real(produto.preco)}</p>

              <div className={s.compra}>
                <div className={l.contador}>
                  <button onClick={() => setQuantidade(Math.max(1, quantidade - 1))} aria-label="Diminuir">−</button>
                  <span aria-live="polite">{quantidade}</span>
                  <button onClick={() => setQuantidade(quantidade + 1)} aria-label="Aumentar">+</button>
                </div>
                <button className={"btn btn-v grande" + (posto ? " posto" : "")} onClick={colocar}>
                  {posto ? "Adicionado ✓" : "Adicionar ao carrinho"}
                </button>
              </div>

              <p className={s.zap}>
                Prefere pedir pelo WhatsApp?{" "}
                <a href={zap(`Oi! Queria ${quantidade}x ${produto.nome}.`)} target="_blank" rel="noreferrer">
                  Fale com a central
                </a>
              </p>
            </div>
          </div>

          {produto.preparo && (
            <div className={s.preparo}>
              <h2>Como assar em casa</h2>
              <ol>
                {produto.preparo.map((passo) => (
                  <li key={passo}>{passo}</li>
                ))}
              </ol>
            </div>
          )}

          <div className={s.selos}>
            <p><Tick /> Embalado individualmente</p>
            <p><Tick /> Dura 5 dias em pote fechado</p>
            <p><Tick /> Contém glúten, leite e derivados de soja</p>
          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className={`${l.bloco} ${l.blocoBege}`}>
          <div className="wrap">
            <h2 className={l.tituloSimples}>Quem levou esse, levou também</h2>
            <div className={l.gradeProdutos}>
              {relacionados.map((p) => (
                <ProdutoCard key={p.slug} produto={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
