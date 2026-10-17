import { embalado } from "../assets";
import { PILULAS } from "../data/servicos";
import { MARCA } from "../data/marca";
import s from "./HubServicos.module.css";

/**
 * Hub do topo da página de serviços: o produto no centro e pílulas do que a
 * marca entrega saindo para os dois lados.
 *
 * Os fios são conectores presos a cada pílula (CSS), não um SVG de fundo:
 * assim eles acompanham a largura real da coluna e nunca saem do lugar quando
 * um rótulo muda de tamanho. No celular os conectores somem e as pílulas viram
 * duas tiras roláveis.
 */
export default function HubServicos() {
  return (
    <section className={s.hub}>
      <div className="wrap">
        <div className={s.caixa}>
          <div className={s.cabeca}>
            <h2>
              Não é só uma
              <br />
              loja de cookies
            </h2>
            <p>
              A mesma massa chega até você de quatro jeitos: assada na nossa vitrine, congelada
              para o seu forno, montada em caixa de presente ou entregue no balcão do seu negócio.
            </p>
          </div>

          <div className={s.palco}>
            <ul className={`${s.pilulas} ${s.esquerda}`}>
              {PILULAS.esquerda.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className={s.centro}>
              <span className={s.anel} aria-hidden="true" />
              <img
                className={s.produto}
                src={embalado}
                alt="Cookie da The Cookie embalado individualmente"
              />
            </div>

            <ul className={`${s.pilulas} ${s.direita}`}>
              {PILULAS.direita.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <p className={`${s.rodape} script`}>{MARCA.assinatura}</p>
        </div>
      </div>
    </section>
  );
}
