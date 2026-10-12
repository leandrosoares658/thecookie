import { Capa, Rev, Tick } from "../componentes/ui";
import { vitrine, embalado } from "../assets";
import { MARCA, zap } from "../data/marca";

export default function Lojas() {
  const mapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${MARCA.endereco}, ${MARCA.cidade}`
  )}`;

  return (
    <>
      <Capa
        titulo="Onde encontrar"
        texto="A loja própria e os pontos que revendem a massa congelada da The Cookie."
      />

      <section className="bloco">
        <div className="wrap duas-colunas">
          <Rev className="moldura">
            <img src={vitrine} alt="Vitrine da loja The Cookie" loading="lazy" />
          </Rev>
          <div>
            <h2>Loja {MARCA.cidade.split(",")[0]}</h2>
            <p className="endereco">
              {MARCA.endereco}
              <br />
              {MARCA.cidade} · CEP {MARCA.cep}
            </p>
            <ul className="lista">
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

      <section className="bloco bloco-bege">
        <div className="wrap duas-colunas invertida">
          <div>
            <h2>Pontos que revendem</h2>
            <p>
              Cafeterias, padarias e mercados que assam a nossa massa no próprio forno. A lista
              muda conforme novos pontos entram — chame a central para saber o mais perto de você.
            </p>
            <p className="aviso-caixa">
              <b>A completar:</b> esta página ainda não tem a lista real de pontos de revenda.
              Quando houver, cada ponto vira um item em <code>src/data/conteudo.js</code>.
            </p>
            <a className="btn btn-v" href={zap("Oi! Qual ponto de revenda fica mais perto de mim?")} target="_blank" rel="noreferrer">
              Perguntar o ponto mais perto
            </a>
          </div>
          <Rev className="moldura">
            <img src={embalado} alt="Cookie embalado individualmente" loading="lazy" />
          </Rev>
        </div>
      </section>
    </>
  );
}
