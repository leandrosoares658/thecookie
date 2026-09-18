import { presente } from "../assets";
import { TIPOS_EVENTO, linkWhatsapp } from "../data/conteudo";
import { Rev } from "./ui";

export default function Eventos() {
  return (
    <section className="eventos" id="eventos">
      <div className="wrap eventos-grid">
        <div>
          <h2>Para momentos especiais</h2>
          <p className="frase script">O sabor que torna qualquer ocasião mais doce.</p>

          <ul className="eventos-tipos">
            {TIPOS_EVENTO.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <p>
            Montamos caixas a partir de 20 unidades, com laço, cartão escrito à mão e
            etiqueta com o nome do seu evento. Respondemos o orçamento em até 24 horas,
            sem taxa de projeto.
          </p>

          <a
            className="btn btn-c"
            style={{ marginTop: "1.8rem" }}
            href={linkWhatsapp("Oi! Queria um orçamento para evento.")}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </a>
        </div>

        <Rev className="moldura">
          <img src={presente} alt="Caixa de presente com cookies, laço e etiqueta da marca" />
        </Rev>
      </div>
    </section>
  );
}
