import { useState } from "react";
import { Link } from "react-router-dom";
import { FOTOS } from "../assets";
import { real } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import s from "./ProdutoCard.module.css";
import l from "../estilos/layout.module.css";

export default function ProdutoCard({ produto }) {
  const { adicionar } = useCarrinho();
  const [posto, setPosto] = useState(false);

  const colocar = () => {
    adicionar(produto.slug);
    setPosto(true);
    setTimeout(() => setPosto(false), 1800);
  };

  return (
    <article className={s.card}>
      <Link to={`/produtos/${produto.slug}`} className={s.foto}>
        <img src={FOTOS[produto.foto]} alt={produto.nome} loading="lazy" />
        {produto.recheado && <span className={l.seloRecheado}>Recheado</span>}
      </Link>

      <div className={s.corpo}>
        <p className={s.categoria}>{produto.categoria}</p>
        <h3>
          <Link to={`/produtos/${produto.slug}`}>{produto.nome}</Link>
        </h3>
        <p className={s.resumo}>{produto.resumo}</p>

        <div className={s.rodape}>
          <span className={s.preco}>{real(produto.preco)}</span>
          <button className={"btn btn-v" + (posto ? " posto" : "")} onClick={colocar}>
            {posto ? "No carrinho ✓" : "Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
}
