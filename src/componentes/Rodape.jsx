import { Link } from "react-router-dom";
import { logoClaro } from "../assets";
import { MARCA, MENU, REDES, zap } from "../data/marca";
import { Estrela, IconeZap, LinkRede } from "./ui";
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
          </div>

          <div>
            <h2>Cardápio</h2>
            <ul className={s.links}>
              {MENU.map((m) => (
                <li key={m.para}>
                  <Link to={m.para}>{m.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Central de vendas</h2>
            <p>
              Faça já a sua encomenda.
              <br />
              WhatsApp: {MARCA.whatsappVisivel}
            </p>
            <p className={s.endereco}>
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
            <h2>Atendimento</h2>
            <p>
              <a href={`mailto:${MARCA.emailSac}`}>{MARCA.emailSac}</a>
              <br />
              Seg a sex, 9h às 17h
            </p>
            <ul className={s.redes}>
              {REDES.map((r) => (
                <li key={r.nome}>
                  <LinkRede rede={r} iconeClassName={s.redeIcone} />
                </li>
              ))}
              <li>
                <a href={zap()} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
                  <IconeZap className={s.redeIcone} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`wrap ${s.base}`}>
          <span>The Cookie Co - Cookies Artesanais</span>
          <span>© {ano} Todos os direitos reservados.</span>
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
