import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import drone from "@/assets/gallery-drone.jpg";
import team from "@/assets/gallery-team.jpg";
import tablet from "@/assets/gallery-tablet.jpg";
import farm from "@/assets/gallery-farm.jpg";
import georef from "@/assets/service-georef.jpg";
import licenciamento from "@/assets/service-licenciamento.jpg";

const slides = [
  { src: drone, title: "Mapeamento aéreo", caption: "Drone para imageamento de propriedades" },
  { src: team, title: "Equipe em campo", caption: "Levantamentos com profissionais qualificados" },
  { src: tablet, title: "Geoprocessamento", caption: "Análise GIS de parcelas rurais" },
  { src: farm, title: "Propriedades atendidas", caption: "Regularização de imóveis em todo o Pará" },
  { src: georef, title: "Topografia GNSS", caption: "Georreferenciamento com alta precisão" },
  { src: licenciamento, title: "Recuperação ambiental", caption: "PRADA e adesão ao PRA" },
];

export function Gallery() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Galeria
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
              Trabalhos em <span className="text-primary">campo</span>
            </h2>
          </Reveal>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((s, i) => (
              <div
                key={i}
                className="relative shrink-0 basis-[85%] sm:basis-[55%] lg:basis-[38%] aspect-[4/5] rounded-2xl overflow-hidden group shadow-soft"
              >
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-concrete via-concrete/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-concrete-fg">
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {s.caption}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
