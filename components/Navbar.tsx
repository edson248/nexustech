import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Marca */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-zinc-100 transition-opacity hover:opacity-80"
          aria-label="NexusTech — voltar ao topo"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15">
            <Cpu className="h-4 w-4 text-violet-400" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Nexus<span className="text-violet-400">Tech</span>
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                goTo(link.href);
              }}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md px-1 py-1"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => goTo("#produtos")}
            className="bg-violet-600 text-white hover:bg-violet-500 active:scale-[0.98] transition-transform"
          >
            Comprar agora
          </Button>
        </div>

        {/* Hambúrguer mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 top-16 z-40 bg-zinc-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 border-b border-zinc-800 bg-zinc-950/95 px-6 pb-6 pt-2 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button
              onClick={() => goTo("#produtos")}
              className="mt-4 w-full bg-violet-600 text-white hover:bg-violet-500 active:scale-[0.98] transition-transform"
            >
              Comprar agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}