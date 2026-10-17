import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { MARCA, MENU, REDES, zap, real } from "../data/marca";
import { useCarrinho } from "../carrinho/CarrinhoContext";
import { LinkRede } from "./ui";
import s from "./Cabecalho.module.css";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { unidades } = useCarrinho();

  return (
    <>
      {/* fita superior */}
      <div className={s.fita}>
        <div className={`wrap ${s.fitaIn}`}>
          <ul className={s.fitaRedes}>
            {REDES.map((r) => (
              <li key={r.nome}>
                <LinkRede rede={r} iconeClassName={s.redeIcone} />
              </li>
            ))}
          </ul>
          <p className={s.fitaAviso}>
            Pedidos a partir do 01/11
          </p>
          <a className={s.fitaContato} href={zap("Oi! Vim pelo site.")} target="_blank" rel="noreferrer">
            {MARCA.whatsappVisivel}
          </a>
        </div>
      </div>

      {/* faixa principal: só o logotipo, centralizado */}
      <header className={s.topo}>
        <div className={`wrap ${s.topoIn}`}>
          <Link to="/" className={s.topoMarca} onClick={() => setMenuAberto(false)}>
            <img src={logo} alt="The Cookie — cookies artesanais" />
          </Link>

          <button
            className={s.menuToggle}
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? "Fechar" : "Menu"}
          </button>
        </div>
      </header>

      {/* navegação */}
      <nav className={s.navbar}>
        <ul id="menu-principal" className={`wrap ${s.navbarIn}` + (menuAberto ? ` ${s.aberto}` : "")}>
          {MENU.map((item) => (
            <li key={item.para}>
              <NavLink
                to={item.para}
                onClick={() => setMenuAberto(false)}
                className={({ isActive }) => (isActive ? s.ativo : undefined)}
              >
                {item.rotulo}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
