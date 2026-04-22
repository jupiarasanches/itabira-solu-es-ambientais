import { Award, BookOpen, Compass, TreePine } from "lucide-react";
import ceo from "@/assets/ceo-itabira.jpg";

const expertise = [
  { icon: TreePine, label: "Engenharia Florestal" },
  { icon: Compass, label: "Geoprocessamento & Georreferenciamento" },
  { icon: BookOpen, label: "Regularização Ambiental & Fundiária" },
  { icon: Award, label: "Titulação de Imóveis Rurais" },
];

export function Ceo() {
  return (
    <section id="ceo" className="relative bg-concrete text-concrete-fg py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 concrete-grain opacity-30" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-2/3 bg-gradient-to-r from-primary/15 to-transparent blur-3xl" />

      <div className="container relative grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-6 rounded-3xl gradient-accent opacity-30 blur-3xl" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-concrete shadow-elegant">
            <img
              src={ceo}
              alt="Itabira Sanches, CEO da JEVA"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-concrete via-concrete/60 to-transparent">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">CEO & Fundador</div>
              <div className="mt-1 font-display text-2xl font-bold">Itabira Sanches</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Liderança
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
            Conheça <span className="text-gradient">Itabira Sanches</span>
          </h2>
          <p className="mt-5 text-concrete-fg/75 leading-relaxed">
            Engenheiro florestal e fundador da JEVA, Itabira Sanches reúne mais
            de uma década de experiência prática em regularização ambiental e
            fundiária na Amazônia. Especialista em geoprocessamento,
            georreferenciamento de imóveis rurais e titulação, atua diretamente
            nos processos junto ao ITERPA, INCRA, SEMAS-PA e demais órgãos
            competentes.
          </p>

          <p className="mt-4 text-concrete-fg/75 leading-relaxed">
            À frente da empresa, lidera uma equipe técnica multidisciplinar e
            mantém o compromisso de oferecer um atendimento próximo, técnico e
            estratégico para cada cliente.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {expertise.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-concrete bg-concrete-muted/40 backdrop-blur px-4 py-3 hover:border-accent/40 transition-colors"
              >
                <span className="size-9 rounded-lg gradient-primary grid place-items-center shrink-0">
                  <Icon className="size-4 text-primary-foreground" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
