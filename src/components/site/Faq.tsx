import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Sou obrigado a fazer o CAR da minha propriedade?",
    a: "Sim. O Cadastro Ambiental Rural é obrigatório para todos os imóveis rurais no Brasil e é pré-requisito para acessar crédito rural, regularização e licenciamento ambiental.",
  },
  {
    q: "Quanto tempo leva o georreferenciamento de um imóvel?",
    a: "O prazo varia conforme o tamanho da propriedade, condições de acesso e demanda nos órgãos. Em geral, do levantamento à certificação no SIGEF, leva de 60 a 120 dias.",
  },
  {
    q: "Como funciona a titulação no ITERPA?",
    a: "É um processo administrativo de regularização da posse junto ao Instituto de Terras do Pará. A JEVA cuida de toda a documentação técnica, jurídica e do acompanhamento do protocolo.",
  },
  {
    q: "A JEVA atende fora de Rurópolis?",
    a: "Sim. Nossa sede é em Rurópolis-PA, mas atendemos clientes em todo o estado do Pará, da Transamazônica ao sul do estado.",
  },
  {
    q: "Vocês cuidam de licenciamento ambiental também?",
    a: "Sim. Atuamos em LP, LI e LO junto à SEMAS-PA, além de PRADA, outorga de uso da água e adesão ao PRA.",
  },
  {
    q: "Como solicitar um diagnóstico inicial?",
    a: "Basta entrar em contato pelo formulário do site ou pelo WhatsApp. Fazemos uma análise inicial gratuita do seu caso e indicamos os próximos passos.",
  },
];

export function Faq() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold text-foreground">
            Tire suas <span className="text-primary">dúvidas</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="font-display text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
