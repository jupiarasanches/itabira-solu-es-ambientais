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
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/90 backdrop-blur px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow animate-fade-in">
          <Leaf className="size-4" />
          Regularização Ambiental
        </div>

        {/* Big centered headline */}
        <h1 className="mx-auto mt-8 max-w-5xl font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.02] text-primary-foreground drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] animate-fade-in [animation-delay:120ms]">
            Conformidade Ambiental com{" "}
            <span className="text-accent">Segurança Total</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-primary-foreground/90 drop-shadow-md animate-fade-in [animation-delay:240ms]">
          Regularizamos sua propriedade junto ao SICAR, IBAMA e órgãos
          estaduais, com agilidade e total conformidade legal.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:360ms]">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold px-8 h-14 text-base"
          >
            <a href="#contato">
              <ArrowRight />
              Solicitar Consulta Gratuita
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur font-semibold px-8 h-14 text-base"
          >
            <a href="#servicos">
              <Eye />
              Conhecer Serviços
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
        <div className="size-10 rounded-full border border-primary-foreground/40 grid place-items-center">
          <div className="size-1.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
