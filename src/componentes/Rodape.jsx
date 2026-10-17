import { Link } from "react-router-dom";
import { logoClaro } from "../assets";
import { MARCA, MENU, REDES, zap, real } from "../data/marca";
import { ENTREGA } from "../data/conteudo";
import { Estrela, IconeZap } from "./ui";
import s from "./Rodape.module.css";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <>
      {/* faixa corrida da assinatura */}
      <div className={s.faixa}>
        <div className={s.faixaIn}>
          {[0, 1].map((volta) => (
            <span key={volta} className={s.faixaGrupo}>
              <b>Ingredientes selecionados</b><Estrela />
              <b>Receitas artesanais</b><Estrela />
              <b>{MARCA.assinatura}</b><Estrela />
            </span>
          ))}
        </div>
      </div>

      <footer className={s.rodape}>
        <div className={`wrap ${s.grid}`}>
          <div>
            <img className={s.marca} src={logoClaro} alt="The Cookie — cookies artesanais" />
            <p>
              {MARCA.endereco}
              <br />
              {MARCA.cidade} · CEP {MARCA.cep}
            </p>
            <ul className={s.horarios}>
              {MARCA.horarios.map((h) => (
                <li key={h.dias}>
                  <b>{h.dias}</b> {h.hora}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Cardápio</h4>
            <ul className={s.links}>
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
            <p className={s.nota}>
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
            <ul className={s.links}>
              {REDES.map((r) => (
                <li key={r.nome}>
                  <a href={r.url} target="_blank" rel="noreferrer">{r.nome}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`wrap ${s.base}`}>
          <span>© {ano} {MARCA.nome} — Cookies Artesanais</span>
          <span>Imagens meramente ilustrativas</span>
        </div>
      </footer>

      {/* botão flutuante de WhatsApp */}
      <a
        className={s.zap}
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
