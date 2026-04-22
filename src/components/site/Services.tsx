import { ArrowUpRight, Compass, FileCheck, Leaf, Map } from "lucide-react";
import georef from "@/assets/service-georef.jpg";
import titulacao from "@/assets/service-titulacao.jpg";
import licenciamento from "@/assets/service-licenciamento.jpg";
import geo from "@/assets/service-geo.jpg";

const services = [
  {
    icon: Compass,
    title: "CAR + Georreferenciamento",
    desc: "Cadastro Ambiental Rural completo e georreferenciamento de imóveis rurais conforme normas do SIGEF/INCRA.",
    items: ["Inscrição e retificação de CAR", "Levantamento topográfico (GNSS)", "Memorial descritivo certificado", "Análise de sobreposições"],
    image: georef,
  },
  {
    icon: FileCheck,
    title: "Titulação + Regularização Fundiária",
    desc: "Titulação de posses junto ao ITERPA, INCRA e SPU. Regularização fundiária urbana e rural.",
    items: ["Processos junto ao ITERPA", "Regularização no Terra Legal", "Usucapião extrajudicial", "Desmembramento e remembramento"],
    image: titulacao,
  },
  {
    icon: Leaf,
    title: "Licenciamento Ambiental + PRA",
    desc: "Licenças ambientais junto à SEMAS-PA e adesão ao Programa de Regularização Ambiental (PRA).",
    items: ["LP, LI e LO", "PRADA — recuperação de APP/RL", "Outorga de uso da água", "Termo de Compromisso (PRA)"],
    image: licenciamento,
  },
  {
    icon: Map,
    title: "Geoprocessamento, Laudos e DAP/CAF",
    desc: "Mapas temáticos, laudos técnicos, perícias e emissão de DAP/CAF para acesso a políticas públicas.",
    items: ["Mapas temáticos e shapefiles", "Laudos técnicos e perícias", "Emissão de CAF (antiga DAP)", "Apoio ao Pronaf e crédito rural"],
    image: geo,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-concrete text-concrete-fg py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 concrete-grain opacity-30" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            O que fazemos
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
            Serviços técnicos <span className="text-gradient">de ponta a ponta</span>
          </h2>
          <p className="mt-5 text-concrete-fg/70">
            Atuamos em todas as etapas da regularização rural — do levantamento
            em campo à emissão dos documentos finais nos órgãos ambientais e
            fundiários.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc, items, image }) => (
            <article
              key={title}
              className="group relative isolate overflow-hidden rounded-2xl border border-concrete bg-concrete-muted/40 backdrop-blur p-7 lg:p-8 transition-all duration-500 hover:border-accent/50 hover:-translate-y-1 hover:shadow-elegant"
            >
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-concrete via-concrete to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-700" />

              <div className="flex items-start justify-between gap-4">
                <div className="size-14 rounded-xl gradient-primary grid place-items-center shadow-glow">
                  <Icon className="size-6 text-primary-foreground" />
                </div>
                <ArrowUpRight className="size-5 text-concrete-fg/50 group-hover:text-accent group-hover:rotate-12 transition-all" />
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-concrete-fg/70 text-sm leading-relaxed">{desc}</p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-concrete-fg/85">
                    <span className="mt-1.5 size-1.5 rounded-full bg-accent shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
