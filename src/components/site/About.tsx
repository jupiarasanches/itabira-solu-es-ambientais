import { Compass, Sprout, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import office from "@/assets/about-office.jpg";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Resolver problemas ambientais e fundiários de produtores rurais com técnica, ética e agilidade.",
  },
  {
    icon: Compass,
    title: "Visão",
    text: "Ser referência em regularização rural na Amazônia, conciliando produção e preservação.",
  },
  {
    icon: Sprout,
    title: "Valores",
    text: "Compromisso técnico, transparência, sustentabilidade e relação de confiança com cada cliente.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <Reveal direction="right" className="relative group">
          <div className="absolute -inset-4 rounded-3xl gradient-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
          <img
            src={office}
            alt="Equipe JEVA analisando mapas no escritório"
            className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
            loading="lazy"
            decoding="async"
            width={1280}
            height={960}
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-xl px-5 py-4 shadow-soft">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Fundada em</div>
            <div className="font-display text-3xl font-bold text-primary">2017</div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={120}>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre a JEVA
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Engenharia florestal a serviço da{" "}
            <span className="text-primary">regularização rural</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sediada em Rurópolis-PA, a JEVA nasceu em 2017 com a missão de
            descomplicar a regularização ambiental e fundiária de imóveis rurais
            no Pará. Unimos conhecimento técnico em engenharia florestal,
            geoprocessamento e legislação aplicada para entregar soluções
            completas — do diagnóstico ao protocolo nos órgãos competentes.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                key={title}
                delay={200 + i * 120}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div className="size-10 rounded-lg gradient-primary grid place-items-center">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <h3 className="mt-3 font-display font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
