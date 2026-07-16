import { useState } from "react";
import { Mail, MessageCircle, Clock, MapPin, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function validate(data: FormData): FormErrors {
    const errs: FormErrors = {};
    if (data.name.trim().length < 2) {
      errs.name = "Informe seu nome completo.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = "Digite um e-mail válido, ex.: voce@email.com";
    }
    if (data.message.trim().length < 10) {
      errs.message = "Conte um pouco mais — pelo menos 10 caracteres.";
    }
    return errs;
  }

  function handleBlur(field: keyof FormData) {
    const errs = validate(form);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    // Simula envio local (sem backend)
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <section id="contato" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Coluna de informações */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-violet-400">Fale com a NexusTech</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight leading-[1.1] text-zinc-100 sm:text-4xl [text-wrap:balance]">
              Dúvida sobre peça, montagem ou compatibilidade? A gente resolve.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-400">
              Nossa equipe técnica responde em até 2 horas úteis. Manda sua dúvida que a gente
              indica exatamente o que faz sentido pro seu setup — sem empurrar upgrade desnecessário.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">WhatsApp</p>
                  <p className="mt-0.5 text-sm text-zinc-400">(11) 94002-8922 — atendimento humano, sem robô</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">E-mail</p>
                  <p className="mt-0.5 text-sm text-zinc-400">atendimento@nexustech.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">Horário de atendimento</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">
                    Segunda a sexta, das 9h às 19h
                    <br />
                    Sábado, das 10h às 14h
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-violet-400">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">Showroom</p>
                  <p className="mt-0.5 text-sm text-zinc-400">
                    Rua dos Pinheiros, 742 — Pinheiros, São Paulo/SP
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-100">
                    Mensagem enviada!
                  </h3>
                  <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-zinc-400">
                    Recebemos sua mensagem e vamos responder no seu e-mail em até 2 horas úteis.
                    Se preferir, chama a gente no WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors duration-200 hover:text-violet-300"
                  >
                    Enviar outra mensagem
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-medium text-zinc-300">
                      Nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={120}
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Como podemos te chamar?"
                      className={`h-11 w-full rounded-lg border bg-zinc-950 px-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors duration-200 focus:ring-2 focus:ring-violet-500/60 ${
                        errors.name ? "border-red-500" : "border-zinc-800 focus:border-violet-500"
                      }`}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-[13px] font-medium text-zinc-300">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={160}
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="voce@email.com"
                      className={`h-11 w-full rounded-lg border bg-zinc-950 px-3.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors duration-200 focus:ring-2 focus:ring-violet-500/60 ${
                        errors.email ? "border-red-500" : "border-zinc-800 focus:border-violet-500"
                      }`}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label htmlFor="contact-message" className="block text-[13px] font-medium text-zinc-300">
                        Mensagem
                      </label>
                      <span className="font-mono text-xs tabular-nums text-zinc-600">
                        {form.message.length}/2000
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      required
                      maxLength={2000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      placeholder="Ex.: quero montar um PC pra jogar em 1440p com orçamento de R$ 7.000, o que vocês recomendam?"
                      className={`w-full resize-y rounded-lg border bg-zinc-950 px-3.5 py-3 text-sm leading-relaxed text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors duration-200 focus:ring-2 focus:ring-violet-500/60 ${
                        errors.message ? "border-red-500" : "border-zinc-800 focus:border-violet-500"
                      }`}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>}
                    <p className="mt-1.5 text-xs text-zinc-500">
                      Quanto mais detalhes sobre uso e orçamento, mais certeira é a resposta.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={sending}
                    className="h-11 w-full bg-violet-600 text-white transition-all duration-200 hover:bg-violet-500 active:scale-[0.98] disabled:opacity-70 sm:w-auto sm:px-8"
                  >
                    {sending ? (
                      <span className="inline-flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}