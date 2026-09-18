import { logoClaro } from "../assets";
import { MARCA, linkWhatsapp } from "../data/conteudo";
import { rolarPara } from "./ui";

const ANO = new Date().getFullYear();

export default function Rodape() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img className="marca" src={logoClaro} alt="The Cookie — cookies artesanais" />
            <p>
              {MARCA.endereco}
              {MARCA.horarios.map((h) => (
                <span key={h}>
                  <br />
                  {h}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h4>Cardápio</h4>
            <ul>
              <li><a href="#sabores" onClick={rolarPara("sabores")}>Sabores</a></li>
              <li><a href="#momentos" onClick={rolarPara("momentos")}>No ponto</a></li>
              <li><a href="#momentos" onClick={rolarPara("momentos")}>Kit em casa</a></li>
              <li><a href="#eventos" onClick={rolarPara("eventos")}>Caixas de presente</a></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href={linkWhatsapp("Oi!")} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`https://instagram.com/${MARCA.instagram}`} target="_blank" rel="noreferrer">
                  @{MARCA.instagram}
                </a>
              </li>
              <li>
                <a href={`mailto:${MARCA.email}`}>{MARCA.email}</a>
              </li>
              <li><a href="#duvidas" onClick={rolarPara("duvidas")}>Dúvidas</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-base">
          <span>© {ANO} {MARCA.nome} — Cookies Artesanais</span>
          <span>Feito com muito amor</span>
        </div>
      </div>
    </footer>
  );
}
