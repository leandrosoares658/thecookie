import { Link } from "react-router-dom";
import { Capa, Rev, Tick } from "../componentes/ui";
import { pessoa } from "../assets";
import { ENTREGA, DUVIDAS } from "../data/conteudo";
import { MARCA, real, zap } from "../data/marca";
import { useState } from "react";
import s from "./Delivery.module.css";
import l from "../estilos/layout.module.css";

export default function Delivery() {
  const [aberta, setAberta] = useState(0);

  return (
    <>
      <Capa
        titulo="Encomendas e delivery"
        texto="Entregamos na cidade toda. Retirada na loja sai sem taxa e fica pronta em 20 minutos."
      />

      <section className={l.bloco}>
        <div className={`wrap ${l.duasColunas}`}>
          <div>
            <h2>Prazos e taxas</h2>
            <p>{ENTREGA.prazo}</p>

            <table className={s.tabela}>
              <thead>
                <tr>
                  <th scope="col">Região</th>
                  <th scope="col">Taxa</th>
                  <th scope="col">Tempo</th>
                </tr>
              </thead>
              <tbody>
                {ENTREGA.faixas.map((f) => (
                  <tr key={f.regiao}>
                    <td>{f.regiao}</td>
                    <td>{real(f.taxa)}</td>
                    <td>{f.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className={l.lista}>
              <li><Tick />Pedido mínimo de {real(ENTREGA.minimo)} para entrega</li>
              <li><Tick />Acima de {real(ENTREGA.gratis)}, a taxa sai de graça</li>
              <li><Tick />{ENTREGA.retirada}</li>
              <li><Tick />Pagamento: {ENTREGA.pagamento.join(", ")}</li>
            </ul>

            <div className="botoes">
              <Link to="/produtos" className="btn btn-v">Montar meu pedido</Link>
              <a className="btn btn-o" href={zap("Oi! Queria saber se vocês entregam no meu bairro.")} target="_blank" rel="noreferrer">
                Perguntar sobre o meu bairro
              </a>
            </div>
          </div>

          <Rev className={l.moldura}>
            <img src={pessoa} alt="Cliente recebendo cookies" loading="lazy" />
          </Rev>
        </div>
      </section>

      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>Dúvidas frequentes</h2>
          <div className={s.faq}>
            {DUVIDAS.map((d, i) => (
              <div className={s.item} key={d.pergunta}>
                <button
                  className={s.botao}
                  aria-expanded={aberta === i}
                  onClick={() => setAberta(aberta === i ? -1 : i)}
                >
                  {d.pergunta}
                  <span className={s.sinal} aria-hidden="true">{aberta === i ? "–" : "+"}</span>
                </button>
                {aberta === i && <p className={s.resposta}>{d.resposta}</p>}
              </div>
            ))}
          </div>
          <p className={s.rodape}>
            Não achou? Chame no WhatsApp {MARCA.whatsappVisivel} ou escreva para{" "}
            <a href={`mailto:${MARCA.emailSac}`}>{MARCA.emailSac}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
