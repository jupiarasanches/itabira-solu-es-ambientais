import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import roberto from "@/assets/avatar-roberto.jpg";
import mariana from "@/assets/avatar-mariana.jpg";
import fazenda from "@/assets/avatar-fazenda.jpg";
import farmBg from "@/assets/testimonial-farm.jpg";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  variant?: "soft" | "image";
  bg?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Roberto Carvalho",
    role: "Produtor Rural · PA",
    avatar: roberto,
    rating: 5,
    quote:
      "Tentei resolver meu CAR por 2 anos sem sucesso. A JEVA resolveu em menos de 60 dias. Profissionalismo e agilidade que nunca vi antes. Recomendo sem hesitar.",
    variant: "soft",
  },
  {
    name: "Mariana Souza",
    role: "Advogada · Imóveis Rurais · PA",
    avatar: mariana,
    rating: 5,
    quote:
      "Parceria essencial para meus clientes no Pará. A equipe técnica da JEVA domina todos os processos de regularização fundiária e ambiental na Amazônia. Entregas sempre no prazo e documentação impecável.",
    variant: "soft",
  },
  {
    name: "Fazenda Nova Aurora",
    role: "Agronegócio · Pará",
    avatar: fazenda,
    rating: 5,
    quote:
      "Precisávamos do licenciamento ambiental com urgência para iniciar as obras. O time da JEVA foi incrivelmente eficiente e entregou dentro do prazo prometido.",
    variant: "image",
    bg: farmBg,
  },
  {
    name: "João Pereira",
    role: "Pecuarista · Trairão-PA",
    avatar: roberto,
    rating: 5,
    quote:
      "Conseguimos titular nossa área junto ao ITERPA com total transparência no processo. Atendimento próximo do começo ao fim — recomendo de olhos fechados.",
    variant: "soft",
  },
  {
    name: "Ana Lima",
    role: "Agricultora familiar · Uruará-PA",
    avatar: mariana,
    rating: 5,
    quote:
      "O laudo técnico e os mapas entregues foram fundamentais para liberar o nosso financiamento agrícola. Equipe muito competente.",
    variant: "soft",
  },
];

function Stars({ count, light = false }: { count: number; light?: boolean }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={
            light
              ? "size-4 fill-accent text-accent"
              : "size-4 fill-primary text-primary"
          }
        />
      ))}
    </div>
  );
}

function Avatar({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      width={96}
      height={96}
      className="size-12 rounded-full object-cover ring-2 ring-background shadow-soft"
    />
  );
}

export function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      duration: 26,
      containScroll: "trimSnaps",
    },
    [autoplay.current],
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-background py-24 lg:py-32">
      {/* Preload primary avatars to keep the carousel snappy */}
      <link rel="preload" as="image" href={roberto} />
      <link rel="preload" as="image" href={mariana} />
      <link rel="preload" as="image" href={fazenda} />

      <div className="container">
        <Reveal className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Quem confia na <span className="text-primary">JEVA</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex justify-end gap-2 mb-6">
            <Button
              size="icon"
              variant="outline"
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight />
            </Button>
          </div>

          <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
            <div className="flex gap-6 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform">
              {testimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="shrink-0 grow-0 basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] transition-transform duration-500"
                >
                  {t.variant === "image" ? (
                    <article className="group relative h-full overflow-hidden rounded-2xl min-h-[340px] shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                      <img
                        src={t.bg!}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        width={1280}
                        height={896}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-concrete via-concrete/60 to-concrete/20" />

                      <div className="relative h-full flex flex-col justify-between p-7 text-concrete-fg">
                        <Stars count={t.rating} light />
                        <div>
                          <p className="text-base leading-relaxed">"{t.quote}"</p>
                          <div className="mt-5 flex items-center gap-3">
                            <Avatar src={t.avatar} alt={t.name} eager={i < 3} />
                            <div>
                              <div className="font-semibold">{t.name}</div>
                              <div className="text-sm text-concrete-fg/75">
                                {t.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <article className="group h-full rounded-2xl bg-secondary p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col will-change-transform">
                      <div className="flex items-center gap-3">
                        <Avatar src={t.avatar} alt={t.name} eager={i < 3} />
                        <div>
                          <div className="font-semibold text-foreground">
                            {t.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {t.role}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <Stars count={t.rating} />
                      </div>

                      <Quote className="mt-5 size-7 text-primary/70 transition-transform duration-300 group-hover:scale-110" />
                      <p className="mt-3 text-foreground/85 leading-relaxed">
                        {t.quote}
                      </p>
                    </article>
                  )}
                </div>
              ))}
            </div>
          </div>

          {snaps.length > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir para o depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === i
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/25 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
