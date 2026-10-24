import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { REVENDA } from "../data/conteudo";
import s from "./MapaPontos.module.css";

/** nome de cada modelo de revenda, para a etiqueta do ponto */
const ROTULO_MODELO = Object.fromEntries(REVENDA.modelos.map((m) => [m.id, m.rotulo]));

const comoChegar = (p) =>
  `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;

/* escapa o texto que vai para o HTML do balão do mapa */
const html = (txt) =>
  String(txt).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

/**
 * Mapa com a loja própria e os pontos de revenda, e a lista ao lado.
 * Clicar num item da lista leva o mapa até o pino e abre o balão.
 * O Leaflet só é baixado quando a página do mapa abre.
 */
export default function MapaPontos({ loja, pontos }) {
  const caixa = useRef(null);
  const pinos = useRef([]);
  const mapaRef = useRef(null);
  const [ativo, setAtivo] = useState(null);

  const todos = [{ ...loja, propria: true }, ...pontos];

  useEffect(() => {
    let mapa;
    let cancelado = false;

    import("leaflet").then(({ default: L }) => {
      if (cancelado || !caixa.current) return;

      mapa = L.map(caixa.current, { scrollWheelZoom: false });
      mapaRef.current = mapa;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapa);

      pinos.current = todos.map((p, i) => {
        const icone = L.divIcon({
          className: "",
          html: `<span class="${s.pino} ${p.propria ? s.pinoLoja : s[`pino-${p.modelo}`] || ""}"></span>`,
          iconSize: [30, 30],
          iconAnchor: [15, 30],
          popupAnchor: [0, -28],
        });
        const etiqueta = p.propria ? "Loja própria" : ROTULO_MODELO[p.modelo] || "";
        return L.marker([p.lat, p.lng], { icon: icone, title: p.nome })
          .addTo(mapa)
          .bindPopup(
            `<div class="${s.balao}">
               ${etiqueta && `<span class="${s.balaoEtiqueta}">${html(etiqueta)}</span>`}
               <b>${html(p.nome)}</b>
               <span>${html(p.endereco)}</span>
               <a href="${comoChegar(p)}" target="_blank" rel="noreferrer">Como chegar</a>
             </div>`
          )
          .on("click", () => setAtivo(i));
      });

      // enquadra todos os pinos; com um só, fica num zoom de bairro
      if (todos.length > 1) {
        mapa.fitBounds(L.latLngBounds(todos.map((p) => [p.lat, p.lng])), { padding: [40, 40] });
      } else {
        mapa.setView([loja.lat, loja.lng], 14);
      }
    });

    return () => {
      cancelado = true;
      mapa?.remove();
      mapaRef.current = null;
    };
    // os pontos vêm de um arquivo fixo: o mapa só monta uma vez
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const irPara = (i) => {
    setAtivo(i);
    const p = todos[i];
    mapaRef.current?.flyTo([p.lat, p.lng], 16, { duration: 0.8 });
    pinos.current[i]?.openPopup();
  };

  return (
    <div className={s.mapaGrade}>
      <div className={s.mapa} ref={caixa} role="region" aria-label="Mapa dos pontos de venda" />

      <div className={s.lista}>
        <ul>
          {todos.map((p, i) => (
            <li key={p.nome}>
              <button
                type="button"
                className={[s.item, ativo === i && s.itemAtivo].filter(Boolean).join(" ")}
                onClick={() => irPara(i)}
              >
                <span className={`${s.marcador} ${p.propria ? s.pinoLoja : s[`pino-${p.modelo}`] || ""}`} />
                <span>
                  <b>{p.nome}</b>
                  <small>{p.endereco}</small>
                  <em>{p.propria ? "Loja própria" : ROTULO_MODELO[p.modelo]}</em>
                </span>
              </button>
            </li>
          ))}
        </ul>
        {pontos.length === 0 && (
          <p className={s.vazio}>Os primeiros pontos de revenda entram no mapa em breve.</p>
        )}
      </div>
    </div>
  );
}
