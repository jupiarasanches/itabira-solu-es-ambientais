import { MapPin } from "lucide-react";

const regions = [
  "Rurópolis", "Itaituba", "Trairão", "Aveiro", "Santarém", "Belterra",
  "Novo Progresso", "Altamira", "Uruará", "Medicilândia", "Pacajá",
  "Tucumã", "Marabá", "Parauapebas", "Redenção", "Belém",
];

export function Coverage() {
  return (
    <section id="atuacao" className="bg-background py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative rounded-2xl bg-secondary/50 border border-border p-10 lg:p-14 overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-auto text-primary/30"
            aria-hidden="true"
          >
            {/* Estilização simplificada do estado do Pará */}
            <path
              d="M30,40 L80,25 L130,30 L170,55 L175,100 L160,140 L130,170 L90,175 L55,160 L25,130 L20,90 Z"
              fill="currentColor"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              className="opacity-60"
            />
            <circle cx="70" cy="100" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
            <circle cx="70" cy="100" r="10" fill="hsl(var(--accent))" className="opacity-30 animate-pulse" />
          </svg>
          <div className="absolute top-6 right-6 bg-card border border-border rounded-xl px-4 py-3 shadow-soft flex items-center gap-2">
            <MapPin className="size-4 text-accent" />
            <span className="text-sm font-semibold">Sede: Rurópolis-PA</span>
          </div>
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Área de atuação
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Atendemos <span className="text-primary">todo o estado do Pará</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Com base em Rurópolis, deslocamos nossa equipe para qualquer
            município paraense. Atuamos da Transamazônica ao sul do estado,
            cobrindo regiões estratégicas para a regularização rural na
            Amazônia.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {r}
              </span>
            ))}
            <span className="rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold">
              + todo o Pará
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
