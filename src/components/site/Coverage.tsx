import { useMemo, useState } from "react";
import { MapPin, Search, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";

type Region =
  | "Sudoeste"
  | "Baixo Amazonas"
  | "Sudeste"
  | "Metropolitana"
  | "Nordeste"
  | "Marajó";

type City = {
  name: string;
  region: Region;
  /** Coordenadas aproximadas no viewBox 0 0 200 200 (mapa estilizado do Pará) */
  x: number;
  y: number;
  hq?: boolean;
};

const REGIONS: { id: Region | "Todos"; label: string }[] = [
  { id: "Todos", label: "Todos" },
  { id: "Sudoeste", label: "Sudoeste Paraense" },
  { id: "Baixo Amazonas", label: "Baixo Amazonas" },
  { id: "Sudeste", label: "Sudeste Paraense" },
  { id: "Metropolitana", label: "Metropolitana" },
  { id: "Nordeste", label: "Nordeste Paraense" },
  { id: "Marajó", label: "Marajó" },
];

const CITIES: City[] = [
  // Sudoeste (foco principal — sede em Rurópolis)
  { name: "Rurópolis", region: "Sudoeste", x: 78, y: 105, hq: true },
  { name: "Itaituba", region: "Sudoeste", x: 65, y: 110 },
  { name: "Trairão", region: "Sudoeste", x: 70, y: 118 },
  { name: "Novo Progresso", region: "Sudoeste", x: 78, y: 145 },
  { name: "Altamira", region: "Sudoeste", x: 95, y: 100 },
  { name: "Uruará", region: "Sudoeste", x: 92, y: 110 },
  { name: "Medicilândia", region: "Sudoeste", x: 88, y: 108 },
  { name: "Placas", region: "Sudoeste", x: 84, y: 102 },

  // Baixo Amazonas
  { name: "Santarém", region: "Baixo Amazonas", x: 82, y: 78 },
  { name: "Belterra", region: "Baixo Amazonas", x: 80, y: 86 },
  { name: "Aveiro", region: "Baixo Amazonas", x: 72, y: 92 },
  { name: "Óbidos", region: "Baixo Amazonas", x: 68, y: 70 },
  { name: "Oriximiná", region: "Baixo Amazonas", x: 60, y: 65 },
  { name: "Monte Alegre", region: "Baixo Amazonas", x: 92, y: 72 },

  // Sudeste
  { name: "Marabá", region: "Sudeste", x: 138, y: 122 },
  { name: "Parauapebas", region: "Sudeste", x: 132, y: 132 },
  { name: "Tucumã", region: "Sudeste", x: 122, y: 138 },
  { name: "Redenção", region: "Sudeste", x: 130, y: 150 },
  { name: "São Félix do Xingu", region: "Sudeste", x: 110, y: 140 },
  { name: "Pacajá", region: "Sudeste", x: 120, y: 110 },
  { name: "Tucuruí", region: "Sudeste", x: 145, y: 108 },

  // Metropolitana
  { name: "Belém", region: "Metropolitana", x: 162, y: 78 },
  { name: "Ananindeua", region: "Metropolitana", x: 160, y: 82 },
  { name: "Marituba", region: "Metropolitana", x: 158, y: 85 },
  { name: "Castanhal", region: "Metropolitana", x: 168, y: 82 },

  // Nordeste
  { name: "Capanema", region: "Nordeste", x: 175, y: 78 },
  { name: "Bragança", region: "Nordeste", x: 178, y: 72 },
  { name: "Paragominas", region: "Nordeste", x: 158, y: 100 },
  { name: "Tomé-Açu", region: "Nordeste", x: 155, y: 92 },

  // Marajó
  { name: "Soure", region: "Marajó", x: 148, y: 70 },
  { name: "Breves", region: "Marajó", x: 135, y: 82 },
  { name: "Salvaterra", region: "Marajó", x: 150, y: 74 },
];

export function Coverage() {
  const [activeRegion, setActiveRegion] = useState<Region | "Todos">("Todos");
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState<City | null>(null);

  const filteredCities = useMemo(() => {
    return CITIES.filter((c) => {
      const matchRegion = activeRegion === "Todos" || c.region === activeRegion;
      const matchQuery =
        query.trim() === "" ||
        c.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchRegion && matchQuery;
    });
  }, [activeRegion, query]);

  const isCityVisible = (c: City) => filteredCities.includes(c);

  return (
    <section id="atuacao" className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Área de atuação
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Atendemos <span className="text-primary">todo o estado do Pará</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Com base em Rurópolis, deslocamos nossa equipe para qualquer
            município paraense. Use o mapa interativo abaixo para explorar
            nossas regiões de atuação e principais municípios atendidos.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-start">
          {/* MAPA */}
          <div className="relative rounded-3xl bg-gradient-to-br from-secondary/60 to-background border border-border p-6 lg:p-8 shadow-soft">
            {/* Tooltip flutuante */}
            {hovered && (
              <div className="absolute top-6 left-6 z-10 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant flex items-center gap-3 animate-fade-in">
                <div className={`size-2.5 rounded-full ${hovered.hq ? "bg-accent" : "bg-primary"}`} />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {hovered.name}
                    {hovered.hq && (
                      <span className="ml-2 text-[10px] uppercase tracking-wider text-accent font-bold">
                        Sede
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{hovered.region}</div>
                </div>
              </div>
            )}

            {/* Legenda */}
            <div className="absolute bottom-6 left-6 z-10 bg-card/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-soft text-xs space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-accent ring-2 ring-accent/30" />
                <span className="text-foreground font-medium">Sede — Rurópolis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">Município atendido</span>
              </div>
            </div>

            <svg
              viewBox="0 0 200 200"
              className="w-full h-auto"
              aria-label="Mapa interativo do estado do Pará"
              role="img"
            >
              <defs>
                <linearGradient id="paFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary) / 0.18)" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.08)" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Silhueta estilizada do Pará */}
              <path
                d="M30,40 L80,25 L130,30 L170,55 L175,100 L160,140 L130,170 L90,175 L55,160 L25,130 L20,90 Z"
                fill="url(#paFill)"
                stroke="hsl(var(--primary))"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />

              {/* Linhas internas sugerindo rios principais */}
              <path
                d="M40,80 Q85,90 130,75 T175,70"
                fill="none"
                stroke="hsl(var(--primary) / 0.25)"
                strokeWidth="0.8"
                strokeDasharray="2 2"
              />
              <path
                d="M70,170 Q85,130 95,100 T100,40"
                fill="none"
                stroke="hsl(var(--primary) / 0.25)"
                strokeWidth="0.8"
                strokeDasharray="2 2"
              />

              {/* Marcadores de cidades */}
              {CITIES.map((c) => {
                const visible = isCityVisible(c);
                const isHovered = hovered?.name === c.name;
                return (
                  <g
                    key={c.name}
                    transform={`translate(${c.x}, ${c.y})`}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: visible ? 1 : 0.15 }}
                    onMouseEnter={() => setHovered(c)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {c.hq ? (
                      <>
                        <circle
                          r="6"
                          fill="hsl(var(--accent) / 0.25)"
                          className="animate-pulse"
                        />
                        <circle
                          r="3"
                          fill="hsl(var(--accent))"
                          stroke="hsl(var(--background))"
                          strokeWidth="0.8"
                          filter="url(#glow)"
                        />
                      </>
                    ) : (
                      <circle
                        r={isHovered ? 2.6 : 1.8}
                        fill="hsl(var(--primary))"
                        stroke="hsl(var(--background))"
                        strokeWidth="0.5"
                        className="transition-all"
                      />
                    )}
                    {(c.hq || isHovered) && (
                      <text
                        x="0"
                        y={c.hq ? -9 : -5}
                        textAnchor="middle"
                        fontSize={c.hq ? "5" : "4"}
                        fontWeight="700"
                        fill="hsl(var(--foreground))"
                        style={{ paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 2 }}
                      >
                        {c.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* FILTROS + LISTA */}
          <div className="space-y-6">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar município..."
                className="pl-11 h-12 rounded-xl"
              />
            </div>

            {/* Filtros por região */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Filtrar por região
              </div>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) => {
                  const active = activeRegion === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setActiveRegion(r.id)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-all ${
                        active
                          ? "bg-primary text-primary-foreground border-primary shadow-soft"
                          : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Resultados */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Building2 className="size-4 text-primary" />
                  Municípios atendidos
                </div>
                <span className="text-xs text-muted-foreground">
                  {filteredCities.length} resultado{filteredCities.length !== 1 ? "s" : ""}
                </span>
              </div>

              {filteredCities.length === 0 ? (
                <p className="text-sm text-muted-foreground py-6 text-center">
                  Nenhum município encontrado. Mesmo assim, atendemos toda a
                  região — fale com a gente.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto pr-1">
                  {filteredCities.map((c) => (
                    <button
                      key={c.name}
                      onMouseEnter={() => setHovered(c)}
                      onMouseLeave={() => setHovered(null)}
                      className={`rounded-full px-3.5 py-1.5 text-sm font-medium border transition-all ${
                        c.hq
                          ? "bg-accent/15 text-accent-foreground border-accent/40 font-semibold"
                          : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                      }`}
                    >
                      {c.hq && <MapPin className="inline size-3 mr-1 text-accent" />}
                      {c.name}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                + atendemos todos os 144 municípios do Pará sob demanda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
