import { Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import carlos from "@/assets/team-carlos.jpg";
import mariana from "@/assets/team-mariana.jpg";
import rafael from "@/assets/team-rafael.jpg";
import tiago from "@/assets/team-tiago.jpg";

type Member = {
  name: string;
  role: string;
  credential: string;
  photo: string;
  alt: string;
};

const members: Member[] = [
  {
    name: "Dr. Carlos Eduardo Jeva",
    role: "Fundador & CEO",
    credential: "Eng. Florestal · CREA-PA 12.345",
    photo: carlos,
    alt: "Retrato profissional de Carlos Eduardo Jeva, engenheiro florestal e CEO da JEVA",
  },
  {
    name: "Eng. Mariana Costa",
    role: "Diretora Técnica",
    credential: "Eng. Ambiental · CREA-PA 24.891",
    photo: mariana,
    alt: "Retrato profissional de Mariana Costa, engenheira ambiental e diretora técnica da JEVA",
  },
  {
    name: "Dr. Rafael Menezes",
    role: "Diretor Jurídico",
    credential: "Advogado · OAB-PA 45.230",
    photo: rafael,
    alt: "Retrato profissional de Rafael Menezes, advogado e diretor jurídico da JEVA",
  },
  {
    name: "Eng. Tiago Alves",
    role: "Coord. de Georreferenciamento",
    credential: "Eng. Agrimensor · CREA-PA 33.102",
    photo: tiago,
    alt: "Retrato em campo de Tiago Alves, engenheiro agrimensor e coordenador de georreferenciamento da JEVA",
  },
];

export function Team() {
  return (
    <section id="equipe" className="bg-background py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Time JEVA
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Especialistas certificados, com profundo conhecimento técnico do
            bioma amazônico e da legislação ambiental paraense.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group h-full rounded-2xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={m.photo}
                    alt={m.alt}
                    loading="lazy"
                    decoding="async"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-5 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {m.role}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground leading-snug">
                    {m.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Award className="size-4 text-accent shrink-0" />
                    <span>{m.credential}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
