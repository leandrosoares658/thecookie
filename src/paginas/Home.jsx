import { Link } from "react-router-dom";
import Carrossel from "../componentes/Carrossel";
import Pilares from "../componentes/Pilares";
import { Onda, Rev } from "../componentes/ui";
import { brindesPresentes, massaCaixa, saboresRecheados, vitrine } from "../assets";
import { ENTREGA, REVENDA } from "../data/conteudo";
import { MARCA, real } from "../data/marca";
import s from "./Home.module.css";
import l from "../estilos/layout.module.css";

/**
 * Home: banner → faixa → delivery → brindes e presentes → massa congelada →
 * revenda.
 */
export default function Home() {
  return (
    <>
      <Carrossel />

      {/* a faixa dos pilares, mantida como estava */}
      <Pilares />

      {/* delivery: o pedido em casa, texto e botão de um lado, foto do outro */}
      <section className={s.servicos} id="servicos">
        <div className={`wrap ${s.entregaGrid}`}>
          <div className={s.entregaTexto}>
            <p className={`${s.entregaLinha} script`}>Pediu, chegou.</p>
            <h2>Cookie quentinho na sua casa</h2>
            <p>
              Entregamos na cidade toda. {ENTREGA.prazo} Pedido mínimo de {real(ENTREGA.minimo)} e
              frete grátis acima de {real(ENTREGA.gratis)}.
            </p>
            <a href={MARCA.cardapio} className="btn btn-v grande" target="_blank" rel="noreferrer">Fazer meu pedido</a>
          </div>

          <Rev className={s.entregaFoto}>
            <img
              src={saboresRecheados}
              alt="Pilha de cookies recheados cortados ao meio: clássico com chocolate, doce de leite, dark chocolate, red velvet e pistacho"
              loading="lazy"
            />
          </Rev>
        </div>
      </section>

      <Onda cor="var(--azul-fundo)" />

      {/* brindes e presentes: foto de um lado, texto e botão do outro */}
      <section className={s.sabores}>
        <div className={`wrap ${s.presentesGrid}`}>
          <Rev className={s.presentesFoto}>
            <img src={brindesPresentes} alt="Embalagens de presente The Cookie: caixinha kraft, caixa azul, pote com laço e cookie embalado" loading="lazy" />
          </Rev>

          <div className={s.presentesTexto}>
            <p className={`${s.presentesLinha} script`}>O sabor que torna qualquer ocasião mais doce.</p>
            <h2>Brindes e presentes</h2>
            <p>
              Caixas com laço e cartão escrito à mão para aniversário, agradecimento ou datas
              especiais. Para empresas, montamos brindes corporativos para clientes, equipes e
              eventos, com etiqueta personalizada com a sua marca.
            </p>
            <Link to="/kits" className="btn btn-bege grande">Pedir orçamento</Link>
          </div>
        </div>
      </section>

      <Onda cor="var(--azul-fundo)" virada />

      {/* massa congelada: texto e botão à esquerda, foto à direita */}
      <section className={l.bloco}>
        <div className={`wrap ${s.massaGrid}`}>
          <div className={s.massaTexto}>
            <p className={`${s.massaLinha} script`}>Hoje a sua casa terá cheiro de cookie.</p>
            <h2>Faça em casa</h2>
            <p>
              Massa congelada para assar em casa: você corta, leva ao forno e em poucos minutos
              tem cookie quentinho, do jeito que sai na loja.
            </p>
            <ul className={s.massaTamanhos}>
              <li><b>750 g</b> rende 10 cookies</li>
              <li><b>1,5 kg</b> rende 20 cookies</li>
            </ul>
            <Link to="/faca-em-casa" className="btn btn-v grande">Quero a massa congelada</Link>
          </div>

          <Rev className={s.massaFoto}>
            <img src={massaCaixa} alt="Caixa The Cookie aberta com o rolo de massa congelada e pacotinhos de confeitos e gotas de chocolate" loading="lazy" />
          </Rev>
        </div>
      </section>

      {/* revenda: foto do display de balcão à esquerda, texto e botão à direita */}
      <section className={s.chamada}>
        <div className={`wrap ${s.chamadaGrid}`}>
          <Rev className={s.chamadaFoto}>
            <img
              src={vitrine}
              alt="Display de balcão da The Cookie com cookies embalados um a um"
              loading="lazy"
            />
          </Rev>
          <div>
            <p className={`${s.chamadaLinha} script`}>Seja revendedor</p>
            <h2>Cookie The Cookie no seu negócio</h2>
            <p className={s.chamadaTexto}>{REVENDA.texto}</p>
            <div className={s.chamadaBotoes}>
              <Link to="/revenda" className="btn btn-bege grande">Quero revender</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
