import { Link } from "react-router-dom";
import { Capa, Rev, Tick } from "../componentes/ui";
import MapaPontos from "../componentes/MapaPontos";
import { vitrine } from "../assets";
import { MARCA, zap } from "../data/marca";
import { LOJA_PROPRIA, PONTOS_REVENDA, REVENDA } from "../data/conteudo";
import s from "./Lojas.module.css";
import l from "../estilos/layout.module.css";

export default function Lojas() {
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${MARCA.endereco}, ${MARCA.cidade}`
  )}`;

  return (
    <>
      <Capa
        titulo="Onde encontrar"
        texto="A loja própria e os pontos que revendem a The Cookie, no mapa."
      />

      <section className={l.bloco}>
        <div className={`wrap ${l.duasColunas}`}>
          <Rev className={l.moldura}>
            <img src={vitrine} alt="Vitrine da loja The Cookie" loading="lazy" />
          </Rev>
          <div>
            <h2>Loja {MARCA.cidade.split(",")[0]}</h2>
            <p className={s.endereco}>
              {MARCA.endereco}
              <br />
              {MARCA.cidade} · CEP {MARCA.cep}
            </p>
            <ul className={l.lista}>
              {MARCA.horarios.map((h) => (
                <li key={h.dias}><Tick /><b>{h.dias}</b> — {h.hora}</li>
              ))}
            </ul>
            <p>
              A vitrine é reposta de hora em hora, então quase sempre tem cookie saindo do forno.
              Se preferir garantir o sabor, dá para reservar pelo WhatsApp e retirar em 20 minutos.
            </p>
            <div className="botoes">
              <a className="btn btn-v" href={mapa} target="_blank" rel="noreferrer">Ver no mapa</a>
              <a className="btn btn-o" href={zap("Oi! Queria reservar para retirada.")} target="_blank" rel="noreferrer">
                Reservar para retirada
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* mapa com a loja e os pontos de revenda */}
      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>Pontos que revendem</h2>
          <p className={s.mapaTexto}>
            Cafeterias, padarias, mercados e outros pontos com a The Cookie no balcão. Clique num
            ponto da lista para vê-lo no mapa.
          </p>
          <ul className={s.legenda}>
            <li><span className={s.corLoja} />Loja própria</li>
            {REVENDA.modelos.map((m) => (
              <li key={m.id}><span className={s[`cor-${m.id}`]} />{m.rotulo}</li>
            ))}
          </ul>

          <MapaPontos loja={LOJA_PROPRIA} pontos={PONTOS_REVENDA} />

          <div className={`botoes ${s.mapaBotoes}`}>
            <a className="btn btn-v" href={zap("Oi! Qual ponto de revenda fica mais perto de mim?")} target="_blank" rel="noreferrer">
              Perguntar o ponto mais perto
            </a>
            <Link className="btn btn-o" to="/revenda">Quero ser um ponto</Link>
          </div>
        </div>
      </section>
    </>
  );
}
