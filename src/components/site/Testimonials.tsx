import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
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
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={96}
      height={96}
      className="size-12 rounded-full object-cover ring-2 ring-background shadow-soft"
    />
  );
}

export function Testimonials() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    testimonials.map(() => false),
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((node, idx) => {
      if (!node) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
      );
      obs.observe(node);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const revealClass = visible[i]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8";
            const baseTransition =
              "transition-all duration-700 ease-out will-change-transform";
            const delayStyle = { transitionDelay: `${i * 140}ms` };
            const setRef = (el: HTMLElement | null) => {
              cardRefs.current[i] = el;
            };

            return t.variant === "image" ? (
              <article
                key={t.name}
                ref={setRef}
                style={delayStyle}
                className={`group relative overflow-hidden rounded-2xl min-h-[340px] shadow-soft hover:shadow-elegant hover:-translate-y-1 ${baseTransition} ${revealClass}`}
              >
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
                  <Stars count={t.rating} />

                  <div>
                    <p className="text-base leading-relaxed">"{t.quote}"</p>
                    <div className="mt-5 flex items-center gap-3">
                      <Avatar src={t.avatar} alt={t.name} />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-concrete-fg/75">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article
                key={t.name}
                ref={setRef}
                style={delayStyle}
                className={`group rounded-2xl bg-secondary p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 flex flex-col ${baseTransition} ${revealClass}`}
              >
                <div className="flex items-center gap-3">
                  <Avatar src={t.avatar} alt={t.name} />
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
