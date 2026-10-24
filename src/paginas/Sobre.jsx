import { Rev } from "../componentes/ui";
import { HISTORIA, VALORES } from "../data/conteudo";
import { MARCA } from "../data/marca";
import s from "./Sobre.module.css";
import l from "../estilos/layout.module.css";

/* Foto da Keth: basta salvar src/assets/keth.jpg (ou .jpeg, .png, .webp) que
   ela entra sozinha. Enquanto o arquivo não existe, a capa fica só no azul. */
const FOTOS_KETH = import.meta.glob("../assets/keth.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const fotoKeth = Object.values(FOTOS_KETH)[0];

export default function Sobre() {
  return (
    <>
      {/* capa com a foto da Keth ao fundo e a história por cima */}
      <section className={fotoKeth ? s.historia : `${s.historia} ${s.semFoto}`}>
        {fotoKeth && (
          <img className={s.historiaFoto} src={fotoKeth} alt="Keth, idealizadora da The Cookie" />
        )}
        <div className={`wrap ${s.historiaIn}`}>
          <div className={s.historiaTexto}>
            <p className={`${s.historiaLinha} script`}>A marca</p>
            <h1>Da cozinha de casa para a sua história</h1>
            <p className={s.historiaDestaque}>
              A The Cookie nasceu na cozinha de casa, com cheiro de cookie no forno e vontade de
              compartilhar algo especial.
            </p>
            {HISTORIA.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className={`${s.assinatura} script`}>
              The Cookie. Feita para compartilhar bons momentos. ❤️
            </p>
          </div>
        </div>
      </section>

      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>O que a gente não abre mão</h2>
          <div className={s.gradeValores}>
            {VALORES.map((v) => (
              <Rev tag="article" className={s.valor} key={v.titulo}>
                <h3>{v.titulo}</h3>
                <p>{v.texto}</p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
