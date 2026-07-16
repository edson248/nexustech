import { ArrowRight, Truck, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-zinc-950 pt-16">
      {/* brilho violet sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-violet-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-0 lg:px-0 lg:pl-12">
        {/* Texto — 7 colunas */}
        <div className="py-16 lg:col-span-7 lg:py-24 lg:pr-16">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-1.5 text-xs font-medium text-zinc-300">
            <Cpu className="h-3.5 w-3.5 text-violet-400" />
            Montado, testado e pronto pra jogar no dia que chega
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 [text-wrap:balance] sm:text-5xl lg:text-6xl">
            Rode tudo no ultra sem montar{" "}
            <span className="text-violet-400">uma peça sequer</span>
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-zinc-400">
            O Nexus Titan X chega com cable management impecável, RGB calibrado
            e stress test de 8 horas aprovado. É ligar na tomada e abrir o jogo
            — a gente cuida do resto pelo WhatsApp.
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-mono text-3xl font-bold tabular-nums text-zinc-50">
              R$ 8.499,90
            </span>
            <span className="text-sm text-zinc-500">
              em até 12x sem juros
            </span>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#produtos">
              <Button className="h-12 rounded-xl bg-violet-600 px-8 text-base font-semibold text-white transition-colors hover:bg-violet-500 active:scale-[0.98]">
                Montar meu setup
              </Button>
            </a>
            <a
              href="#produtos"
              className="group inline-flex h-12 items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-violet-400"
            >
              Ver todos os produtos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-zinc-800/80 pt-6 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-violet-400" />
              Entrega em até 5 dias úteis
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-violet-400" />
              3 anos de garantia na montagem
            </span>
            <span className="font-mono tabular-nums text-zinc-300">
              4,9/5 <span className="font-sans text-zinc-500">(1.327 avaliações)</span>
            </span>
          </div>
        </div>

        {/* Imagem — 5 colunas, sangrando até a borda */}
        <div className="relative lg:col-span-5 lg:h-full lg:self-stretch">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-800 lg:aspect-auto lg:h-full lg:min-h-[560px] lg:rounded-none lg:rounded-l-2xl">
            <img
              src="https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140821-0-hero.jpg"
              alt="Setup gamer Nexus Titan X com iluminação RGB, teclado mecânico e mouse em mesa escura"
              className="h-full w-full object-cover"
            />
            {/* fusão com o fundo escuro */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent"
            />
          </div>

          {/* card flutuante — quebra proposital */}
          <div className="absolute -bottom-5 left-6 hidden rounded-xl border border-zinc-800 bg-zinc-900/95 px-5 py-4 shadow-xl shadow-black/40 backdrop-blur lg:block">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Em estoque agora
            </p>
            <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-zinc-100">
              1.283 setups entregues em 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}