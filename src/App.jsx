import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Faixa from "./components/Faixa";
import Pilares from "./components/Pilares";
import Sabores from "./components/Sabores";
import Momentos from "./components/Momentos";
import Loja from "./components/Loja";
import Galeria from "./components/Galeria";
import Eventos from "./components/Eventos";
import Depoimentos from "./components/Depoimentos";
import Duvidas from "./components/Duvidas";
import Newsletter from "./components/Newsletter";
import Rodape from "./components/Rodape";
import { Onda } from "./components/ui";

const AZUL = "#0F3B6D";
const VERMELHO = "#8B1E2D";

export default function App() {
  return (
    <div className="tc">
      <Nav />
      <Hero />
      <Faixa />
      <Sabores />

      <Onda cor={AZUL} />
      <Pilares />
      <Onda cor={AZUL} virada />

      <Momentos />

      <Onda cor={AZUL} />
      <Loja />
      <Onda cor={AZUL} virada />

      <Galeria />

      <Onda cor={VERMELHO} />
      <Eventos />
      <Onda cor={VERMELHO} virada />

      <Depoimentos />
      <Duvidas />
      <Newsletter />
      <Rodape />
    </div>
  );
}
