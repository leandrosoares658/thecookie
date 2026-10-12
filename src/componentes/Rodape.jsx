import { Link } from "react-router-dom";
import { logoClaro } from "../assets";
import { MARCA, MENU, REDES, zap, real } from "../data/marca";
import { ENTREGA } from "../data/conteudo";
import { Estrela, IconeZap } from "./ui";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <>
      {/* faixa corrida da assinatura */}
      <div className="faixa">
        <div className="faixa-in">
          {[0, 1].map((volta) => (
            <span key={volta} className="faixa-grupo">
              <b>Ingredientes selecionados</b><Estrela />
              <b>Receitas artesanais</b><Estrela />
              <b>{MARCA.assinatura}</b><Estrela />
            </span>
          ))}
        </div>
      </div>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <img className="foot-marca" src={logoClaro} alt="The Cookie — cookies artesanais" />
            <p>
              {MARCA.endereco}
              <br />
              {MARCA.cidade} · CEP {MARCA.cep}
            </p>
            <ul className="foot-horarios">
              {MARCA.horarios.map((h) => (
                <li key={h.dias}>
                  <b>{h.dias}</b> {h.hora}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Cardápio</h4>
            <ul className="foot-links">
              {MENU.map((m) => (
                <li key={m.para}>
                  <Link to={m.para}>{m.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Central de vendas</h4>
            <p>
              Faça já a sua encomenda.
              <br />
              Tel: {MARCA.telefone}
              <br />
              WhatsApp: {MARCA.whatsappVisivel}
            </p>
            <p className="foot-nota">
              Pedido mínimo de {real(ENTREGA.minimo)} para entrega. Acima de {real(ENTREGA.gratis)} a taxa sai de graça.
            </p>
          </div>

          <div>
            <h4>Atendimento</h4>
            <p>
              <a href={`mailto:${MARCA.emailSac}`}>{MARCA.emailSac}</a>
              <br />
              Seg a sex, 9h às 17h
            </p>
            <ul className="foot-links">
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a href={r.url} target="_blank" rel="noreferrer">{r.nome}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wrap foot-base">
          <span>© {ano} {MARCA.nome} — Cookies Artesanais</span>
          <span>Imagens meramente ilustrativas</span>
        </div>
      </footer>

      {/* botão flutuante de WhatsApp */}
      <a
        className="zap-flutuante"
        href={zap("Oi! Vim pelo site e queria fazer um pedido.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <IconeZap />
      </a>
    </>
  );
}
