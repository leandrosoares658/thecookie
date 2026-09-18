import { useState } from "react";
import { embalagem } from "../assets";
import { Rev } from "./ui";

const EMAIL_VALIDO = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [aviso, setAviso] = useState("");

  const assinar = () => {
    if (!EMAIL_VALIDO.test(email.trim())) {
      setAviso("Confira o e-mail: faltou o @ ou o domínio.");
      return;
    }
    // TODO: trocar pela chamada real (Mailchimp, Brevo, sua API...)
    setAviso("Pronto. O próximo sabor da estação chega no seu e-mail.");
    setEmail("");
  };

  return (
    <section className="news">
      <div className="wrap news-grid">
        <div className="texto">
          <h2>Fica sabendo primeiro</h2>
          <p>Novidades, sabores da estação e lançamentos do universo The Cookie.</p>

          <div className="news-form">
            <label className="oculto" htmlFor="tc-email">
              Seu e-mail
            </label>
            <input
              id="tc-email"
              type="email"
              placeholder="seu@email.com.br"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && assinar()}
            />
            <button className="btn btn-v" onClick={assinar}>
              Quero receber
            </button>
          </div>

          <p className="news-aviso" role="status">
            {aviso}
          </p>
        </div>

        <Rev className="moldura">
          <img src={embalagem} alt="Embalagens da The Cookie: sacola, caixa e saquinho" />
        </Rev>
      </div>
    </section>
  );
}
