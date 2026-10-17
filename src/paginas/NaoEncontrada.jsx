import { Link } from "react-router-dom";
import s from "./NaoEncontrada.module.css";
import l from "../estilos/layout.module.css";
import { MARCA } from "../data/marca";

export default function NaoEncontrada() {
  return (
    <section className={l.bloco}>
      <div className={`wrap centro ${s.pagina}`}>
        <p className={`${s.linha} script`}>Essa fornada acabou.</p>
        <h1>Página não encontrada</h1>
        <p>O endereço não existe mais, ou nunca existiu. Acontece.</p>
        <div className="botoes centro">
          <Link to="/" className="btn btn-v">Voltar para o início</Link>
          <a href={MARCA.cardapio} className="btn btn-o" target="_blank" rel="noreferrer">Ver o cardápio</a>
        </div>
      </div>
    </section>
  );
}
