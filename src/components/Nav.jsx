import { useState } from "react";
import { logo } from "../assets";
import { MENU, linkWhatsapp } from "../data/conteudo";
import { rolarPara } from "./ui";

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <nav>
      <div className="wrap nav-in">
        <a href="#topo" onClick={rolarPara("topo", fechar)}>
          <img className="marca" src={logo} alt="The Cookie — cookies artesanais" />
        </a>

        <button
          className="nav-toggle"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>

        <ul id="menu-principal" className={"nav-links" + (aberto ? " aberto" : "")}>
          {MENU.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={rolarPara(item.id, fechar)}>
                {item.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-v"
          href={linkWhatsapp("Oi! Queria fazer um pedido.")}
          target="_blank"
          rel="noreferrer"
        >
          Fazer pedido
        </a>
      </div>
    </nav>
  );
}
