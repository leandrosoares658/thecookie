import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import { SeoDaPagina, TopoAoNavegar, VoltarAoTopo } from "./componentes/ui";

import { MARCA } from "./data/marca";

import Home from "./paginas/Home";
import Kits from "./paginas/Kits";
import Revenda from "./paginas/Revenda";
import Sobre from "./paginas/Sobre";
import FacaEmCasa from "./paginas/FacaEmCasa";
import NaoEncontrada from "./paginas/NaoEncontrada";

/** Manda quem abrir um endereço antigo de compra (cardápio, produto, carrinho,
 *  delivery — links antigos, Google) para o cardápio no Anota AI. */
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
      <SeoDaPagina />
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* o cardápio agora é o do Anota AI: os endereços antigos de compra levam para lá */}
          <Route path="/produtos" element={<IrParaCardapio />} />
          <Route path="/produtos/:slug" element={<IrParaCardapio />} />
          <Route path="/carrinho" element={<IrParaCardapio />} />
          <Route path="/delivery" element={<IrParaCardapio />} />
          <Route path="/kits" element={<Kits />} />
          <Route path="/revenda" element={<Revenda />} />
          {/* a página de serviços saiu: o endereço antigo leva para a Home */}
          <Route path="/servicos" element={<Navigate to="/" replace />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faca-em-casa" element={<FacaEmCasa />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Rodape />
      {/* sem a seta na Marca */}
      <VoltarAoTopo ocultarEm={["/sobre"]} />
    </>
  );
}
