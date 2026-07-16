import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { products } from "@/data/products";

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

export default function Products() {
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const handleAdd = (id: string) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <section id="produtos" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-violet-400">
              Catálogo
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl [text-wrap:balance]">
              Hardware selecionado, testado e pronto pra jogar
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            Todos os produtos com nota fiscal, garantia de 12 meses e envio em
            até 48 h para todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const isAdded = !!added[product.id];
            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors duration-200 hover:border-zinc-700"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-zinc-700/60 bg-zinc-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-300 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                    {product.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                    {product.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {product.specs.slice(0, 3).map((spec) => (
                      <li
                        key={spec}
                        className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1 text-[11px] text-zinc-400"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-zinc-800 pt-5">
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                        {index === 0 ? "12x sem juros" : "À vista no Pix"}
                      </p>
                      <p className="font-mono text-lg font-semibold tabular-nums text-zinc-100">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAdd(product.id)}
                      disabled={isAdded}
                      aria-label={
                        isAdded
                          ? `${product.name} adicionado ao carrinho`
                          : `Adicionar ${product.name} ao carrinho`
                      }
                      className={
                        isAdded
                          ? "inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-emerald-500/15 px-4 text-sm font-medium text-emerald-400 transition-colors duration-200"
                          : "inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 active:scale-[0.98]"
                      }
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4" />
                          Adicionado
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-4 w-4" />
                          Adicionar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Não achou o que procurava? Fale com a gente no WhatsApp e montamos uma
          configuração sob medida.
        </p>
      </div>
    </section>
  );
}