import { Link } from "react-router-dom";

export default function NaoEncontrada() {
  return (
    <section className="bloco">
      <div className="wrap centro nao-encontrada">
        <p className="linha script">Essa fornada acabou.</p>
        <h1>Página não encontrada</h1>
        <p>O endereço não existe mais, ou nunca existiu. Acontece.</p>
        <div className="botoes centro">
          <Link to="/" className="btn btn-v">Voltar para o início</Link>
          <Link to="/produtos" className="btn btn-o">Ver o cardápio</Link>
        </div>
      </div>
    </section>
  );
}
