import { ArrowRight, Eye, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-amazon.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] flex items-center justify-center overflow-hidden bg-concrete text-concrete-fg"
    >
      {/* Background image — full bleed, no heavy overlay */}
      <img
        src={hero}
        alt="Floresta amazônica vista do alto"
        className="absolute inset-0 -z-20 h-full w-full object-cover scale-105 animate-fade-in-slow"
        width={1920}
        height={1080}
      />
      {/* Light vignette to ensure text readability without darkening too much */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/60" />

      <div className="container relative pt-32 pb-32 text-center">
        {/* Centered badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-concrete bg-concrete-muted/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-concrete-fg/90 animate-fade-in">
          <span className="size-2 rounded-full bg-accent animate-pulse" />
          Desde 2017 — Rurópolis-PA
        </div>

        {/* Big centered headline */}
        <h1 className="mx-auto mt-6 max-w-5xl font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] animate-fade-in [animation-delay:120ms]">
          Regularização <span className="text-gradient">ambiental e fundiária</span> para o seu imóvel rural no Pará.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-concrete-fg/75 animate-fade-in [animation-delay:240ms]">
          Soluções técnicas completas em CAR, georreferenciamento, titulação,
          licenciamento e geoprocessamento — conduzidas por engenheiros
          florestais especialistas, com atuação em todo o estado.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in [animation-delay:360ms]">
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
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="size-10 rounded-full border border-concrete grid place-items-center">
          <div className="size-1.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
