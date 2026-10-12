import { useState } from "react";
import { Capa, Rev, Tick } from "../componentes/ui";
import { embalagem, caixaAberta } from "../assets";
import { REVENDA } from "../data/conteudo";
import { zap } from "../data/marca";

const VAZIO = { nome: "", negocio: "", cidade: "", telefone: "", mensagem: "" };

export default function Revenda() {
  const [form, setForm] = useState(VAZIO);
  const [erro, setErro] = useState("");

  const mudar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.negocio.trim() || !form.telefone.trim()) {
      setErro("Preencha pelo menos nome, negócio e telefone.");
      return;
    }
    setErro("");
    // O formulário não tem backend: abre o WhatsApp já preenchido.
    const texto = [
      "Olá! Tenho interesse em revender a The Cookie.",
      "",
      `Nome: ${form.nome}`,
      `Negócio: ${form.negocio}`,
      form.cidade.trim() && `Cidade: ${form.cidade}`,
      `Telefone: ${form.telefone}`,
      form.mensagem.trim() && `\n${form.mensagem}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(zap(texto), "_blank", "noopener");
  };

  return (
    <>
      <Capa titulo="Seja revendedor" texto={REVENDA.chamada} />

      <section className="bloco">
        <div className="wrap duas-colunas">
          <div>
            <h2>A gente congela, você assa</h2>
            <p>{REVENDA.texto}</p>
            <p className="revenda-margem">{REVENDA.margem}</p>
          </div>
          <Rev className="moldura">
            <img src={embalagem} alt="Embalagens da The Cookie para revenda" loading="lazy" />
          </Rev>
        </div>
      </section>

      <section className="bloco bloco-bege">
        <div className="wrap">
          <h2 className="titulo-simples">Como funciona</h2>
          <div className="grade-passos">
            {REVENDA.comoFunciona.map((p, i) => (
              <Rev tag="article" className="passo" key={p.titulo}>
                <span className="passo-num">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </Rev>
            ))}
          </div>
        </div>
      </section>

      <section className="bloco">
        <div className="wrap duas-colunas invertida">
          <div>
            <h2>O que você precisa ter</h2>
            <ul className="lista">
              {REVENDA.requisitos.map((r) => (
                <li key={r}><Tick />{r}</li>
              ))}
            </ul>
          </div>
          <Rev className="moldura">
            <img src={caixaAberta} alt="Cookies embalados individualmente" loading="lazy" />
          </Rev>
        </div>
      </section>

      <section className="revenda-form-bloco">
        <div className="wrap">
          <h2>Quero receber a tabela</h2>
          <p className="revenda-form-sub">
            Preencha e a gente te manda a tabela de atacado, o prazo de entrega na sua cidade e o
            passo a passo do forno.
          </p>

          <form className="revenda-form" onSubmit={enviar}>
            <div className="campo">
              <label htmlFor="r-nome">Seu nome *</label>
              <input id="r-nome" value={form.nome} onChange={mudar("nome")} autoComplete="name" />
            </div>
            <div className="campo">
              <label htmlFor="r-negocio">Nome do negócio *</label>
              <input id="r-negocio" value={form.negocio} onChange={mudar("negocio")} placeholder="Cafeteria, padaria, mercado..." />
            </div>
            <div className="campo">
              <label htmlFor="r-cidade">Cidade</label>
              <input id="r-cidade" value={form.cidade} onChange={mudar("cidade")} autoComplete="address-level2" />
            </div>
            <div className="campo">
              <label htmlFor="r-tel">WhatsApp *</label>
              <input id="r-tel" value={form.telefone} onChange={mudar("telefone")} inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" />
            </div>
            <div className="campo largo">
              <label htmlFor="r-msg">Conte um pouco do seu ponto</label>
              <textarea id="r-msg" rows="4" value={form.mensagem} onChange={mudar("mensagem")} placeholder="Tipo de forno, movimento por dia, se já vende algo parecido..." />
            </div>

            {erro && <p className="form-erro" role="alert">{erro}</p>}

            <button className="btn btn-v grande" type="submit">Enviar pelo WhatsApp</button>
            <p className="form-nota">
              Ao enviar, abre o WhatsApp com os dados já preenchidos. Nada fica salvo no site.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
