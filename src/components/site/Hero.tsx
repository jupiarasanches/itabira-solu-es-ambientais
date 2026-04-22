import { ArrowRight, Leaf, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-amazon.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden bg-concrete text-concrete-fg"
    >
      <img
        src={hero}
        alt="Floresta amazônica vista do alto"
        className="absolute inset-0 -z-20 h-full w-full object-cover scale-105 animate-fade-in-slow"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 concrete-grain opacity-40" />

      <div className="container relative pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-concrete bg-concrete-muted/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-concrete-fg/90 animate-fade-in">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Desde 2017 — Rurópolis-PA
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] animate-fade-in [animation-delay:120ms]">
            Regularização <span className="text-gradient">ambiental e fundiária</span> para o seu imóvel rural no Pará.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-concrete-fg/75 animate-fade-in [animation-delay:240ms]">
            Soluções técnicas completas em CAR, georreferenciamento, titulação,
            licenciamento e geoprocessamento — conduzidas por engenheiros
            florestais especialistas, com atuação em todo o estado.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-in [animation-delay:360ms]">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow font-semibold"
            >
              <a href="#contato">
                Solicitar diagnóstico
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-concrete bg-concrete-muted/30 text-concrete-fg hover:bg-concrete-muted backdrop-blur"
            >
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-in [animation-delay:480ms]">
            {[
              { icon: ShieldCheck, label: "Engenharia Florestal" },
              { icon: MapPin, label: "Atendemos todo o Pará" },
              { icon: Leaf, label: "Foco em sustentabilidade" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-concrete bg-concrete-muted/30 backdrop-blur px-4 py-3"
              >
                <span className="grid place-items-center size-9 rounded-lg gradient-primary">
                  <Icon className="size-4 text-primary-foreground" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="size-10 rounded-full border border-concrete grid place-items-center">
          <div className="size-1.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
