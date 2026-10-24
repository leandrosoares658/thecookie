import { useState } from "react";
import { Capa, Rev, Tick } from "../componentes/ui";
import { vitrine } from "../assets";
import { REVENDA } from "../data/conteudo";
import { MARCA, zap } from "../data/marca";
import s from "./Revenda.module.css";
import l from "../estilos/layout.module.css";

const VAZIO = { modelo: "", nome: "", negocio: "", cidade: "", telefone: "", mensagem: "" };

/** opções do formulário: os dois modelos e "ainda não sei" */
const OPCOES_MODELO = [
  ...REVENDA.modelos.map((m) => ({ id: m.id, rotulo: m.rotulo })),
  { id: "indeciso", rotulo: "Ainda não sei" },
];

export default function Revenda() {
  const [form, setForm] = useState(VAZIO);
  const [erro, setErro] = useState("");

  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });

  /* o botão de cada modelo já marca a opção no formulário e desce até ele */
  const escolher = (id) => () => setForm((f) => ({ ...f, modelo: id }));

  const enviar = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.negocio.trim() || !form.telefone.trim()) {
      setErro("Preencha pelo menos nome, negócio e telefone.");
      return;
    }
    setErro("");
    const modelo = OPCOES_MODELO.find((o) => o.id === form.modelo);
    // O formulário não tem backend: abre o WhatsApp já preenchido.
    const texto = [
      "Olá! Tenho interesse em revender a The Cookie.",
      "",
      modelo && `Modelo: ${modelo.rotulo}`,
      `Nome: ${form.nome}`,
      `Negócio: ${form.negocio}`,
      form.cidade.trim() && `Cidade: ${form.cidade}`,
      `Telefone: ${form.telefone}`,
      form.mensagem.trim() && `\n${form.mensagem}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(zap(texto, MARCA.whatsappComercial), "_blank", "noopener");
  };

  return (
    <>
      <Capa titulo="Leve The Cookie para o seu negócio" texto={REVENDA.chamada}>
        <p>{REVENDA.convite}</p>
      </Capa>

      {/* os dois modelos de revenda, lado a lado */}
      <section className={l.bloco}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>Escolha como revender</h2>
          <div className={s.modelos}>
            {REVENDA.modelos.map((m) => (
              <Rev tag="article" className={s.modelo} key={m.id}>
                <span className={s.modeloRotulo}>{m.rotulo}</span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
                <ul className={l.lista}>
                  {m.itens.map((item) => (
                    <li key={item}><Tick />{item}</li>
                  ))}
                  <li className={s.modeloDisplay}><Tick />Display de balcão incluso</li>
                </ul>
                <p className={s.modeloIdeal}>{m.ideal}</p>
                <a href="#quero-revender" className="btn btn-v" onClick={escolher(m.id)}>
                  Quero {m.rotulo.toLowerCase()}
                </a>
              </Rev>
            ))}
          </div>
          <p className={s.margem}>{REVENDA.margem}</p>
        </div>
      </section>

      {/* o display, fornecido nos dois modelos */}
      <section className={`${l.bloco} ${l.blocoBege}`}>
        <div className={`wrap ${l.duasColunas}`}>
          <Rev className={l.moldura}>
            <img
              className={s.displayFoto}
              src={vitrine}
              alt="Display de balcão da The Cookie com cookies embalados um a um"
              loading="lazy"
            />
          </Rev>
          <div>
            <p className={`${s.selo} script`}>Nos dois modelos</p>
            <h2>{REVENDA.display.titulo}</h2>
            <p>{REVENDA.display.texto}</p>
            <ul className={l.lista}>
              {REVENDA.display.itens.map((item) => (
                <li key={item}><Tick />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={l.bloco}>
        <div className="wrap">
          <h2 className={l.tituloSimples}>Como funciona</h2>
          <div className={s.gradePassos}>
            {REVENDA.comoFunciona.map((p, i) => (
              <Rev tag="article" className={s.passo} key={p.titulo}>
                <span className={s.passoNum}>{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className={s.formBloco} id="quero-revender">
        <div className="wrap">
          <h2>Quero receber a tabela</h2>
          <p className={s.formSub}>
            Preencha e a gente te manda a tabela de atacado do modelo escolhido, o prazo de entrega
            na sua cidade e como funciona o display.
          </p>

          <form className={s.form} onSubmit={enviar}>
            <fieldset className={`${s.campo} ${s.largo} ${s.opcoes}`}>
              <legend>Qual modelo te interessa?</legend>
              <div className={s.opcoesLista}>
                {OPCOES_MODELO.map((o) => (
                  <label key={o.id} className={s.opcao}>
                    <input
                      type="radio"
                      name="modelo"
                      value={o.id}
                      checked={form.modelo === o.id}
                      onChange={mudar("modelo")}
                    />
                    <span>{o.rotulo}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className={s.campo}>
              <label htmlFor="r-nome">Seu nome *</label>
              <input id="r-nome" value={form.nome} onChange={mudar("nome")} autoComplete="name" />
            </div>
            <div className={s.campo}>
              <label htmlFor="r-negocio">Nome do negócio *</label>
              <input id="r-negocio" value={form.negocio} onChange={mudar("negocio")} placeholder="Cafeteria, padaria, mercado..." />
            </div>
            <div className={s.campo}>
              <label htmlFor="r-cidade">Cidade</label>
              <input id="r-cidade" value={form.cidade} onChange={mudar("cidade")} autoComplete="address-level2" />
            </div>
            <div className={s.campo}>
              <label htmlFor="r-tel">WhatsApp *</label>
              <input id="r-tel" value={form.telefone} onChange={mudar("telefone")} inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" />
            </div>
            <div className={`${s.campo} ${s.largo}`}>
              <label htmlFor="r-msg">Conte um pouco do seu ponto</label>
              <textarea id="r-msg" rows="4" value={form.mensagem} onChange={mudar("mensagem")} placeholder="Tipo de negócio, movimento por dia, se tem forno e freezer..." />
            </div>

            {erro && <p className={s.erro} role="alert">{erro}</p>}

            <button className="btn btn-v grande" type="submit">Enviar pelo WhatsApp</button>
            <p className={s.nota}>
              Ao enviar, abre o WhatsApp com os dados já preenchidos. Nada fica salvo no site.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
