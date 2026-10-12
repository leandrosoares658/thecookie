import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { acharProduto } from "../data/produtos";

const CHAVE = "thecookie:carrinho";
const Contexto = createContext(null);

/** Lê o carrinho salvo. Nunca derruba a página se o storage falhar. */
function carregar() {
  try {
    const bruto = localStorage.getItem(CHAVE);
    const itens = bruto ? JSON.parse(bruto) : [];
    // descarta itens de produtos que não existem mais no catálogo
    return Array.isArray(itens) ? itens.filter((i) => acharProduto(i.slug)) : [];
  } catch {
    return [];
  }
}

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(carregar);
  const [observacao, setObservacao] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(itens));
    } catch {
      // modo anônimo ou storage cheio: o carrinho só não persiste
    }
  }, [itens]);

  const adicionar = (slug, quantidade = 1) =>
    setItens((atual) => {
      const existe = atual.find((i) => i.slug === slug);
      if (existe) {
        return atual.map((i) =>
          i.slug === slug ? { ...i, quantidade: i.quantidade + quantidade } : i
        );
      }
      return [...atual, { slug, quantidade }];
    });

  const mudarQuantidade = (slug, quantidade) =>
    setItens((atual) =>
      quantidade < 1
        ? atual.filter((i) => i.slug !== slug)
        : atual.map((i) => (i.slug === slug ? { ...i, quantidade } : i))
    );

  const remover = (slug) => setItens((atual) => atual.filter((i) => i.slug !== slug));

  const limpar = () => {
    setItens([]);
    setObservacao("");
  };

  /** Itens já resolvidos com os dados do produto e o subtotal de cada linha. */
  const linhas = useMemo(
    () =>
      itens
        .map((i) => {
          const produto = acharProduto(i.slug);
          return produto && { ...produto, quantidade: i.quantidade, subtotal: produto.preco * i.quantidade };
        })
        .filter(Boolean),
    [itens]
  );

  const total = useMemo(() => linhas.reduce((s, l) => s + l.subtotal, 0), [linhas]);
  const unidades = useMemo(() => linhas.reduce((s, l) => s + l.quantidade, 0), [linhas]);

  const valor = {
    linhas, total, unidades,
    observacao, setObservacao,
    adicionar, mudarQuantidade, remover, limpar,
  };

  return <Contexto.Provider value={valor}>{children}</Contexto.Provider>;
}

export function useCarrinho() {
  const ctx = useContext(Contexto);
  if (!ctx) throw new Error("useCarrinho precisa estar dentro de <CarrinhoProvider>");
  return ctx;
}
