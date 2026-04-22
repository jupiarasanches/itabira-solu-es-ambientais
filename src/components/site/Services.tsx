import { FileCheck, Leaf, Map, Sprout, ArrowRight } from "lucide-react";
import georef from "@/assets/service-georef.jpg";
import titulacao from "@/assets/service-titulacao.jpg";
import licenciamento from "@/assets/service-licenciamento.jpg";
import geo from "@/assets/service-geo.jpg";

const services = [
  {
    icon: Sprout,
    eyebrow: "Cadastro Ambiental Rural",
    title: "CAR e SICAR",
    desc: "Realizamos o cadastro e manutenção do CAR junto ao SICAR, incluindo delimitação de Áreas de Preservação Permanente (APPs), Reserva Legal e uso consolidado, garantindo conformidade com o Código Florestal.",
    image: georef,
    featured: true,
  },
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

        {/* Cards grid: featured (2 cols) + 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            const isFeatured = s.featured;

            return (
              <article
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500 min-h-[520px] ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Background image */}
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 ${
                    isFeatured
                      ? "bg-gradient-to-t from-background via-background/85 to-background/10"
                      : "bg-gradient-to-t from-foreground/95 via-foreground/55 to-foreground/10"
                  }`}
                />

                {/* Floating icon chip */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="size-12 rounded-2xl bg-primary/90 backdrop-blur-sm grid place-items-center shadow-glow ring-1 ring-primary-foreground/20">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 z-10">
                  <div
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] mb-2 ${
                      isFeatured ? "text-primary" : "text-primary-foreground/85"
                    }`}
                  >
                    {s.eyebrow}
                  </div>
                  <h3
                    className={`font-display text-xl xl:text-2xl font-bold leading-tight break-words ${
                      isFeatured ? "text-foreground lg:text-3xl" : "text-primary-foreground"
                    }`}
                  >
                    {s.title}
                  </h3>

                  {isFeatured && s.desc && (
                    <>
                      <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
                        {s.desc}
                      </p>
                      <a
                        href="#contato"
                        className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                      >
                        Saiba mais
                        <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
