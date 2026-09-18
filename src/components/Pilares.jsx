import { PILARES } from "../data/conteudo";

const ICONES = [
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="15" cy="13" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="10.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
  </>,
  <path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" />,
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 14c1 1.3 2.1 2 3.5 2s2.5-.7 3.5-2" />
    <circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none" />
  </>,
];

export default function Pilares() {
  return (
    <section className="pilares">
      <div className="wrap pilares-grid">
        {PILARES.map((texto, i) => (
          <div className="pilar" key={texto}>
            <svg viewBox="0 0 24 24">{ICONES[i]}</svg>
            <p>{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
