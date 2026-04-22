import { Compass, FileCheck, Leaf, Map } from "lucide-react";
import georef from "@/assets/service-georef.jpg";
import titulacao from "@/assets/service-titulacao.jpg";
import licenciamento from "@/assets/service-licenciamento.jpg";
import geo from "@/assets/service-geo.jpg";

const services = [
  {
    icon: Leaf,
    eyebrow: "LP, LI e LO",
    title: "Licenciamento Ambiental",
    image: licenciamento,
  },
  {
    icon: Map,
    eyebrow: "Certificação INCRA",
    title: "Georreferenciamento",
    image: geo,
  },
  {
    icon: FileCheck,
    eyebrow: "Titulação e Registro",
    title: "Regularização Fundiária",
    image: titulacao,
  },
  {
    icon: Compass,
    eyebrow: "PRAD e Reflorestamento",
    title: "Recuperação de APP",
    image: georef,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-background py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Soluções Completas em{" "}
              <span className="text-primary">Regularização</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed lg:pb-2">
            Cada serviço é conduzido por especialistas certificados, com
            metodologias ágeis e total transparência em cada etapa do processo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 min-h-[520px]"
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/10" />

                {/* Floating icon chip */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="size-12 rounded-2xl bg-primary/90 backdrop-blur-sm grid place-items-center shadow-glow ring-1 ring-primary-foreground/20">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-2 text-primary-foreground/85">
                    {s.eyebrow}
                  </div>
                  <h3 className="font-display text-xl xl:text-2xl font-bold leading-tight text-primary-foreground break-words">
                    {s.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
