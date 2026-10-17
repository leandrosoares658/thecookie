import { useState } from "react";
import { embalagem } from "../assets";
import { Rev } from "./ui";
import s from "./Newsletter.module.css";

const EMAIL_VALIDO = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [aviso, setAviso] = useState("");

  const assinar = (e) => {
    e.preventDefault();
    if (!EMAIL_VALIDO.test(email.trim())) {
      setAviso("Confira o e-mail: faltou o @ ou o domínio.");
      return;
    }
    // TODO: ligar a um serviço real (Mailchimp, Brevo, sua API).
    // Hoje isso NÃO envia nada a lugar nenhum.
    setAviso("Pronto. O próximo sabor da estação chega no seu e-mail.");
    setEmail("");
  };

  return (
    <section className={s.news}>
      <div className={`wrap ${s.grid}`}>
        <div className={s.texto}>
          <h2>Fica sabendo primeiro</h2>
          <p>Sabores da estação, fornadas especiais e novidades da revenda.</p>

          <form className={s.form} onSubmit={assinar}>
            <label className="oculto" htmlFor="email-news">Seu e-mail</label>
            <input
              id="email-news"
              type="email"
              placeholder="seu@email.com.br"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-v" type="submit">Quero receber</button>
          </form>

          <p className={s.aviso} role="status">{aviso}</p>
        </div>

        <Rev className={s.foto}>
          <img src={embalagem} alt="Embalagens da The Cookie" loading="lazy" />
        </Rev>
      </div>
    </section>
  );
}
