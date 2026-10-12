import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProdutoCard from "../componentes/ProdutoCard";
import { Tick } from "../componentes/ui";
import { FOTOS } from "../assets";
import { acharProduto, PRODUTOS } from "../data/produtos";
import { real, zap } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";

export default function Produto() {
  const { slug } = useParams();
  const produto = acharProduto(slug);
  const { adicionar } = useCarrinho();
  const [quantidade, setQuantidade] = useState(1);
  const [posto, setPosto] = useState(false);

  if (!produto) {
    return (
      <section className="bloco">
        <div className="wrap centro">
          <h1>Produto não encontrado</h1>
          <p>Esse item saiu do cardápio ou o endereço está errado.</p>
          <Link to="/produtos" className="btn btn-v">Ver o cardápio</Link>
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
      <section className="produto-pagina">
        <div className="wrap">
          <nav className="migalhas" aria-label="Você está em">
            <Link to="/">Início</Link> <span>/</span>{" "}
            <Link to="/produtos">Cardápio</Link> <span>/</span> {produto.nome}
          </nav>

          <div className="produto-grid">
            <div className="produto-imagem">
              <img src={FOTOS[produto.foto]} alt={produto.nome} />
              {produto.recheado && <span className="selo-recheado grande">Recheado</span>}
            </div>

            <div className="produto-info">
              <p className="produto-cat">{produto.categoria}</p>
              <h1>{produto.nome}</h1>
              <p className="produto-frase script">{produto.frase}</p>
              <p className="produto-descricao">{produto.descricao}</p>

              {produto.notas && (
                <ul className="produto-notas">
                  {produto.notas.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}

              <p className="produto-valor">{real(produto.preco)}</p>

              <div className="produto-compra">
                <div className="contador">
                  <button onClick={() => setQuantidade(Math.max(1, quantidade - 1))} aria-label="Diminuir">−</button>
                  <span aria-live="polite">{quantidade}</span>
                  <button onClick={() => setQuantidade(quantidade + 1)} aria-label="Aumentar">+</button>
                </div>
                <button className={"btn btn-v grande" + (posto ? " posto" : "")} onClick={colocar}>
                  {posto ? "Adicionado ✓" : "Adicionar ao carrinho"}
                </button>
              </div>

              <p className="produto-zap">
                Prefere pedir pelo WhatsApp?{" "}
                <a href={zap(`Oi! Queria ${quantidade}x ${produto.nome}.`)} target="_blank" rel="noreferrer">
                  Fale com a central
                </a>
              </p>
            </div>
          </div>

          {produto.preparo && (
            <div className="preparo">
              <h2>Como assar em casa</h2>
              <ol>
                {produto.preparo.map((passo) => (
                  <li key={passo}>{passo}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="produto-selos">
            <p><Tick /> Embalado individualmente</p>
            <p><Tick /> Dura 5 dias em pote fechado</p>
            <p><Tick /> Contém glúten, leite e derivados de soja</p>
          </div>
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="bloco bloco-bege">
          <div className="wrap">
            <h2 className="titulo-simples">Quem levou esse, levou também</h2>
            <div className="grade-produtos">
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
