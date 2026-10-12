import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProdutoCard from "../componentes/ProdutoCard";
import { Capa } from "../componentes/ui";
import { CATEGORIAS, PRODUTOS } from "../data/produtos";

const TODOS = { id: "todos", rotulo: "Tudo", descricao: "Cookies, caixas e massa congelada" };
const FILTROS = [TODOS, ...CATEGORIAS];

export default function Produtos() {
  const [params, setParams] = useSearchParams();
  const busca = params.get("busca") ?? "";
  const [categoria, setCategoria] = useState("todos");

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return PRODUTOS.filter((p) => {
      const naCategoria = categoria === "todos" || p.categoria === categoria;
      if (!naCategoria) return false;
      if (!termo) return true;
      return [p.nome, p.resumo, p.descricao, ...(p.notas ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(termo);
    });
  }, [busca, categoria]);

  const filtroAtivo = FILTROS.find((f) => f.id === categoria);

  return (
    <>
      <Capa
        titulo="Cardápio"
        texto="Cookies de 150 g assados no dia, caixas para presente e massa congelada para assar em casa."
      />

      <section className="bloco">
        <div className="wrap">
          <div className="filtros">
            {FILTROS.map((f) => (
              <button
                key={f.id}
                className={"filtro" + (f.id === categoria ? " ativo" : "")}
                aria-pressed={f.id === categoria}
                onClick={() => setCategoria(f.id)}
              >
                {f.rotulo}
              </button>
            ))}
          </div>

          <p className="filtros-nota">
            {filtroAtivo?.descricao}
            {busca && (
              <>
                {" · busca por "}
                <b>{busca}</b>{" "}
                <button className="limpar-busca" onClick={() => setParams({})}>
                  limpar
                </button>
              </>
            )}
          </p>

          {lista.length === 0 ? (
            <p className="vazio">
              Nada encontrado com esse filtro. Tente outra categoria ou limpe a busca.
            </p>
          ) : (
            <div className="grade-produtos">
              {lista.map((p) => (
                <ProdutoCard key={p.slug} produto={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
