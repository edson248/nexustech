export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specs: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "produto-1",
    name: "Nexus Titan X — PC Gamer Completo",
    category: "Desktops",
    price: 8499.9,
    description:
      "Torre com vidro temperado e iluminação RGB endereçável, montada e testada para rodar tudo no ultra.",
    specs: ["Ryzen 7 7800X3D", "32 GB DDR5 6000 MHz", "SSD NVMe 2 TB", "RTX 4070 Super 12 GB"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140856-1-produto-1.jpg",
  },
  {
    id: "produto-2",
    name: "Nexus Volt Pro — Mouse Sem Fio",
    category: "Periféricos",
    price: 349.9,
    description:
      "Sensor óptico de 26.000 DPI com latência de 1 ms e até 90 horas de bateria. Leve como tem que ser.",
    specs: ["Sensor 26K DPI", "63 g de peso", "Wireless 2.4 GHz + Bluetooth", "Switches ópticos 100M cliques"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140591-2-produto-2.jpg",
  },
  {
    id: "produto-3",
    name: "Nexus Strike 75 — Teclado Mecânico",
    category: "Periféricos",
    price: 599.9,
    description:
      "Layout 75% hot-swappable com RGB por tecla e switches lineares lubrificados de fábrica.",
    specs: ["Switches Gateron Red", "Hot-swap 3/5 pinos", "Keycaps PBT double-shot", "Case em alumínio"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140887-3-produto-3.jpg",
  },
  {
    id: "produto-4",
    name: "Nexus Aura 7.1 — Headset Gamer",
    category: "Áudio",
    price: 449.9,
    description:
      "Som surround 7.1 com drivers de 50 mm e microfone com cancelamento de ruído destacável.",
    specs: ["Drivers 50 mm neodímio", "Surround 7.1 virtual", "Mic com cancelamento de ruído", "Espuma memory foam"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140727-4-produto-4.jpg",
  },
  {
    id: "produto-5",
    name: "Nexus Vision 34 — Monitor Ultrawide",
    category: "Monitores",
    price: 2799.9,
    description:
      "Painel curvo de 34 polegadas com 165 Hz e 1 ms: imersão total sem rasgo de tela nas ranqueadas.",
    specs: ["34\" UWQHD 3440x1440", "165 Hz / 1 ms", "Curvatura 1500R", "FreeSync Premium + HDR400"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234141312-5-produto-5.jpg",
  },
  {
    id: "produto-6",
    name: "Nexus Core RTX 4070 Ti — Placa de Vídeo",
    category: "Hardware",
    price: 5299.9,
    description:
      "GPU com refrigeração triple-fan e Ray Tracing de última geração para 1440p acima de 144 fps.",
    specs: ["12 GB GDDR6X", "Ray Tracing 3ª geração", "DLSS 3.5", "Refrigeração triple-fan 0 dB"],
    image:
      "https://lnrfqwznkoixhjqdikqa.supabase.co/storage/v1/object/public/app-uploads/projects/ff9617f5-8be8-4afd-9644-6018155804c1/genimg/1784234140730-6-produto-6.jpg",
  },
];

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}