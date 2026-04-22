import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A JEVA cuidou de todo o CAR e georreferenciamento da nossa fazenda. Atendimento técnico, ágil e sem dor de cabeça.",
    author: "[Cliente Placeholder]",
    role: "Produtor rural — Rurópolis-PA",
  },
  {
    quote:
      "Conseguimos titular nossa área junto ao ITERPA com total transparência no processo. Recomendo de olhos fechados.",
    author: "[Cliente Placeholder]",
    role: "Pecuarista — Trairão-PA",
  },
  {
    quote:
      "O laudo técnico e os mapas entregues foram fundamentais para liberar o nosso financiamento agrícola.",
    author: "[Cliente Placeholder]",
    role: "Agricultor familiar — Uruará-PA",
  },
  {
    quote:
      "Profissionais sérios, com domínio total da legislação ambiental do Pará. Mudou nossa relação com a SEMAS.",
    author: "[Cliente Placeholder]",
    role: "Empresa do agro — Santarém-PA",
  },
];

export function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5500, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Quem confia na <span className="text-primary">JEVA</span>
          </h2>
        </div>

        <div className="overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 basis-[90%] md:basis-[60%] lg:basis-[42%] rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-shadow"
              >
                <Quote className="size-8 text-accent" />
                <p className="mt-4 text-lg text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
