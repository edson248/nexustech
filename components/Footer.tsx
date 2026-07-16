import { Globe, MessageCircle, Send, Mail, MapPin, Clock, Zap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Produtos", href: "#produtos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { label: "Site e blog da NexusTech", icon: Globe, href: "https://nexustech.com.br" },
    { label: "Atendimento no WhatsApp", icon: MessageCircle, href: "https://wa.me/5511948302716" },
    { label: "Canal de novidades no Telegram", icon: Send, href: "https://t.me/nexustechbr" },
  ];

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15">
                <Zap className="h-4 w-4 text-violet-400" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-zinc-100">
                Nexus<span className="text-violet-400">Tech</span>
              </span>
            </a>
            <p className="max-w-[28ch] text-sm leading-relaxed text-zinc-400">
              Hardware de alta performance montado, testado e entregue pronto pra jogar. Garantia de 12 meses em todo o catálogo.
            </p>
            <p className="font-mono text-xs text-zinc-500">4,9 de 5 · 1.327 avaliações verificadas</p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center text-sm text-zinc-400 transition-colors duration-200 hover:text-violet-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#produtos"
                  className="inline-flex items-center text-sm text-zinc-400 transition-colors duration-200 hover:text-violet-400"
                >
                  Montagem sob medida
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm text-zinc-400 transition-colors duration-200 hover:text-violet-400"
                >
                  Suporte técnico
                </a>
              </li>
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                <span>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/5511948302716"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 transition-colors duration-200 hover:text-violet-400"
                  >
                    (11) 94830-2716
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                <a
                  href="mailto:vendas@nexustech.com.br"
                  className="text-zinc-300 transition-colors duration-200 hover:text-violet-400"
                >
                  vendas@nexustech.com.br
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                <span>Rua Coronel Oscar Porto, 412 — Paraíso, São Paulo — SP</span>
              </li>
            </ul>
          </div>

          {/* Horário + Social */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Atendimento</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden="true" />
                <div className="space-y-1">
                  <p>Segunda a sexta, das 9h às 19h</p>
                  <p>Sábado, das 10h às 15h</p>
                  <p className="text-zinc-500">Domingo e feriados: fechado</p>
                </div>
              </li>
            </ul>

            <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Redes</h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-200 hover:border-violet-500/40 hover:text-violet-400 active:scale-[0.98]"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-zinc-800/80 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-500">
            © {year} NexusTech Hardware Ltda. · CNPJ 47.281.930/0001-56 · Todos os direitos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            Parcelamento em até 12x · Envio para todo o Brasil com nota fiscal
          </p>
        </div>
      </div>
    </footer>
  );
}