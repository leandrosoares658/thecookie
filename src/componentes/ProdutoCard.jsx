import { useState } from "react";
import { Link } from "react-router-dom";
import { FOTOS } from "../assets";
import { real } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";

export default function ProdutoCard({ produto }) {
  const { adicionar } = useCarrinho();
  const [posto, setPosto] = useState(false);

  const colocar = () => {
    adicionar(produto.slug);
    setPosto(true);
    setTimeout(() => setPosto(false), 1800);
  };

  return (
    <article className="produto-card">
      <Link to={`/produtos/${produto.slug}`} className="produto-foto">
        <img src={FOTOS[produto.foto]} alt={produto.nome} loading="lazy" />
        {produto.recheado && <span className="selo-recheado">Recheado</span>}
      </Link>

      <div className="produto-corpo">
        <p className="produto-cat">{produto.categoria}</p>
        <h3>
          <Link to={`/produtos/${produto.slug}`}>{produto.nome}</Link>
        </h3>
        <p className="produto-resumo">{produto.resumo}</p>

        <div className="produto-rodape">
          <span className="produto-preco">{real(produto.preco)}</span>
          <button className={"btn btn-v" + (posto ? " posto" : "")} onClick={colocar}>
            {posto ? "No carrinho ✓" : "Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
}
