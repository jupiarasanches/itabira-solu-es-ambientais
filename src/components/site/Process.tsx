import { ClipboardCheck, FileSignature, MapPinned, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico",
    desc: "Análise documental da propriedade e identificação dos serviços necessários.",
  },
  {
    icon: MapPinned,
    title: "Levantamento em campo",
    desc: "Visita técnica, medições com GNSS, drone e coleta de dados ambientais.",
  },
  {
    icon: FileSignature,
    title: "Documentação técnica",
    desc: "Elaboração de mapas, memoriais, laudos e processos exigidos pelos órgãos.",
  },
  {
    icon: Send,
    title: "Entrega e protocolo",
    desc: "Submissão nos órgãos competentes e acompanhamento até a conclusão.",
  },
];

export function Process() {
  return (
    <section className="bg-concrete text-concrete-fg py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 concrete-grain opacity-30" />
      <div className="container relative">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Como trabalhamos
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
            Um <span className="text-gradient">processo claro</span>, do início ao fim
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative rounded-2xl border border-concrete bg-concrete-muted/30 backdrop-blur p-6 hover:border-accent/40 transition-colors"
            >
              <div className="absolute -top-4 left-6 font-display text-6xl font-bold text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative size-12 rounded-xl gradient-primary grid place-items-center mb-5">
                <Icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-concrete-fg/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
