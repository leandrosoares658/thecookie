import { Fragment } from "react";
import { Estrela } from "./ui";
import { MARCA, PILARES } from "../data/conteudo";

const ITENS = [...PILARES, MARCA.assinatura];

export default function Faixa() {
  return (
    <div className="faixa">
      {/* duplicado para o laço da animação não deixar buraco */}
      <div className="faixa-in">
        {[0, 1].map((volta) => (
          <Fragment key={volta}>
            {ITENS.map((texto) => (
              <Fragment key={texto}>
                <b>{texto}</b>
                <Estrela />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
