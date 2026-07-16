import { Star, Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Nota ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star className="absolute inset-0 h-4 w-4 text-zinc-700" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 fill-violet-400 text-violet-400" />
            </span>
          </span>
        );
      })}
      <span className="ml-1.5 font-mono text-xs text-zinc-500 tabular-nums">
        {rating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}
      </span>
    </div>
  );
}

function Avatar({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-violet-500/15 font-semibold text-violet-300 ${
        size === "lg" ? "h-14 w-14 text-lg" : "h-11 w-11 text-sm"
      }`}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}

function SmallTestimonial({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors duration-200 hover:border-zinc-700">
      <div>
        <Stars rating={t.rating} />
        <blockquote className="mt-4 text-sm leading-relaxed text-zinc-300">
          "{t.text}"
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-800 pt-5">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-100">{t.name}</p>
          <p className="truncate text-xs text-zinc-500">{t.context}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured) ?? testimonials[0];
  const others = testimonials.filter((t) => t.id !== featured.id).slice(0, 2);

  return (
    <section id="depoimentos" className="bg-zinc-900/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl [text-wrap:balance]">
            Quem joga com a NexusTech não volta atrás
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Avaliação média de <span className="font-mono text-zinc-200">4,9</span> de 5 em{" "}
            <span className="font-mono text-zinc-200">327</span> compras verificadas nos últimos 12 meses.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Depoimento em destaque */}
          <figure className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10 lg:col-span-7">
            <Quote
              className="absolute -top-3 right-6 h-24 w-24 text-violet-500/10"
              aria-hidden="true"
            />
            <div className="relative">
              <Stars rating={featured.rating} />
              <blockquote className="mt-6 max-w-[65ch] text-lg leading-relaxed text-zinc-200 sm:text-xl">
                "{featured.text}"
              </blockquote>
            </div>
            <figcaption className="relative mt-8 flex items-center gap-4 border-t border-zinc-800 pt-6">
              <Avatar name={featured.name} size="lg" />
              <div className="min-w-0">
                <p className="truncate font-semibold text-zinc-100">{featured.name}</p>
                <p className="truncate text-sm text-zinc-500">{featured.context}</p>
              </div>
            </figcaption>
          </figure>

          {/* Dois depoimentos menores */}
          <div className="grid gap-6 lg:col-span-5">
            {others.map((t) => (
              <SmallTestimonial key={t.id} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}