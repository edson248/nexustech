export interface Testimonial {
  id: string;
  name: string;
  context: string;
  text: string;
  rating: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "depoimento-1",
    name: "Rafael Monteiro",
    context: "Streamer, Curitiba — PR · cliente desde 2023",
    text:
      "Comprei o Titan X pra streamar e editar vídeo no mesmo PC. Chegou montado, com cable management impecável, e roda meus jogos no ultra com OBS aberto sem engasgar. O suporte ainda me ajudou a configurar o overclock de memória pelo WhatsApp. Nunca mais monto peça por peça.",
    rating: 5,
    featured: true,
  },
  {
    id: "depoimento-2",
    name: "Larissa Fontes",
    context: "Designer 3D, Belo Horizonte — MG",
    text:
      "A RTX que comprei renderiza minhas cenas no Blender em um terço do tempo da placa antiga. Veio lacrada, com nota fiscal e chegou em 2 dias úteis.",
    rating: 5,
  },
  {
    id: "depoimento-3",
    name: "Thiago Albuquerque",
    context: "Jogador competitivo de FPS, Recife — PE",
    text:
      "O Volt Pro mudou minha mira: 63 g faz diferença real em partida ranqueada. Só achei que o teclado podia vir com mais keycaps extras, mas a qualidade compensa.",
    rating: 4.5,
  },
];