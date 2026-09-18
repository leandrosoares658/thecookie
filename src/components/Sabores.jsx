import { useState } from "react";
import { cookies } from "../assets";
import { SABORES } from "../data/conteudo";

export default function Sabores() {
  const [ativo, setAtivo] = useState(0);
  const sabor = SABORES[ativo];

  return (
    <section className="bloco" id="sabores">
      <div className="wrap">
        <div className="cabeca">
          <p className="linha script">Qual é o seu favorito?</p>
          <h2>Quatro sabores, uma massa só</h2>
          <p>
            A base nunca muda: manteiga, mascavo e descanso longo. O que muda é o recheio
            — e a discussão que isso gera na mesa. Escolha um para ver a ficha.
          </p>
        </div>

        <div className="sabor-palco">
          <div className="sabor-disco" style={{ background: sabor.disco }}>
            {/* a key força o React a remontar a imagem, disparando a animação */}
            <img key={sabor.nome} src={cookies[ativo]} alt={`Cookie sabor ${sabor.nome}`} />
          </div>

          <div className="sabor-info">
            <p className="idx">
              Sabor {ativo + 1} de {SABORES.length}
            </p>
            <h3>{sabor.nome}</h3>
            <p className="frase script">{sabor.frase}</p>
            <p>{sabor.texto}</p>
            <ul className="sabor-notas">
              {sabor.notas.map((nota) => (
                <li key={nota}>{nota}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="chips">
          {SABORES.map((item, i) => (
            <button
              key={item.nome}
              className="chip"
              data-ativo={i === ativo ? 1 : 0}
              aria-pressed={i === ativo}
              onClick={() => setAtivo(i)}
            >
              <img src={cookies[i]} alt="" aria-hidden="true" />
              <span>{item.nome}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
