import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import { TopoAoNavegar, VoltarAoTopo } from "./componentes/ui";

import { MARCA } from "./data/marca";

import Home from "./paginas/Home";
import Produto from "./paginas/Produto";
import Kits from "./paginas/Kits";
import Delivery from "./paginas/Delivery";
import Lojas from "./paginas/Lojas";
import Revenda from "./paginas/Revenda";
import Servicos from "./paginas/Servicos";
import Sobre from "./paginas/Sobre";
import Carrinho from "./paginas/Carrinho";
import NaoEncontrada from "./paginas/NaoEncontrada";

/** Manda quem abrir /produtos (link antigo, Google) para o cardápio no Anota AI. */
function IrParaCardapio() {
  useEffect(() => {
    window.location.replace(MARCA.cardapio);
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <TopoAoNavegar />
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* o cardápio agora é o do Anota AI: o endereço antigo leva para lá */}
          <Route path="/produtos" element={<IrParaCardapio />} />
          <Route path="/produtos/:slug" element={<Produto />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/revenda" element={<Revenda />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
      <VoltarAoTopo />
    </>
  );
}
