import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { MARCA, MENU, REDES, zap, real } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import { IconeCarrinho } from "./ui";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const { unidades, total } = useCarrinho();
  const navegar = useNavigate();

  const buscar = (e) => {
    e.preventDefault();
    const termo = busca.trim();
    navegar(termo ? `/produtos?busca=${encodeURIComponent(termo)}` : "/produtos");
    setBusca("");
    setMenuAberto(false);
  };

  return (
    <>
      {/* fita superior */}
      <div className="fita">
        <div className="wrap fita-in">
          <ul className="fita-redes">
            {REDES.map((r) => (
              <li key={r.nome}>
                <a href={r.url} target="_blank" rel="noreferrer">{r.nome}</a>
              </li>
            ))}
          </ul>
          <p className="fita-aviso">
            Pedidos até 15h saem no mesmo dia · Entrega grátis acima de {real(150)}
          </p>
          <a className="fita-contato" href={zap("Oi! Vim pelo site.")} target="_blank" rel="noreferrer">
            {MARCA.whatsappVisivel}
          </a>
        </div>
      </div>

      {/* faixa principal */}
      <header className="topo">
        <div className="wrap topo-in">
          <form className="busca" role="search" onSubmit={buscar}>
            <label className="oculto" htmlFor="busca">Buscar no cardápio</label>
            <input
              id="busca"
              type="search"
              placeholder="Procure um sabor"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <button type="submit" aria-label="Buscar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </form>

          <Link to="/" className="topo-marca" onClick={() => setMenuAberto(false)}>
            <img src={logo} alt="The Cookie — cookies artesanais" />
          </Link>

          <div className="topo-acoes">
            <Link to="/produtos" className="btn btn-bege">Comprar</Link>
            <Link to="/carrinho" className="carrinho-botao" aria-label={`Carrinho com ${unidades} item(ns)`}>
              <IconeCarrinho />
              <span>{real(total)}</span>
              {unidades > 0 && <b className="bolinha">{unidades}</b>}
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </header>

      {/* navegação */}
      <nav className="navbar">
        <ul id="menu-principal" className={"wrap navbar-in" + (menuAberto ? " aberto" : "")}>
          {MENU.map((item) => (
            <li key={item.para}>
              <NavLink
                to={item.para}
                onClick={() => setMenuAberto(false)}
                className={({ isActive }) => (isActive ? "ativo" : undefined)}
              >
                {item.rotulo}
              </NavLink>
            </li>
          ))}
          <li className="so-mobile">
            <NavLink to="/carrinho" onClick={() => setMenuAberto(false)}>
              Carrinho ({unidades})
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
