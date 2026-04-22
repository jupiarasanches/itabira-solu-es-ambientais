import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/Reveal";
import { toast } from "sonner";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: whatsappLink(),
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "[EDITAR] contato@jeva.com.br",
    href: "mailto:contato@jeva.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "[EDITAR] Rurópolis-PA, Brasil",
  },
  { icon: Clock, label: "Horário", value: "Seg a Sex, 8h às 18h" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada!", {
        description: "Em breve nossa equipe entrará em contato.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section
      id="contato"
      className="relative bg-concrete text-concrete-fg py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 concrete-grain opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/15 to-transparent blur-3xl" />

      <div className="container relative grid lg:grid-cols-5 gap-12">
        <Reveal direction="right" className="lg:col-span-2">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Fale com a JEVA
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
            Vamos <span className="text-gradient">resolver</span> a regularização do seu imóvel
          </h2>
          <p className="mt-5 text-concrete-fg/75">
            Solicite um diagnóstico gratuito e receba uma proposta técnica
            personalizada para o seu caso.
          </p>

          <div className="mt-10 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <div className="size-11 rounded-xl gradient-primary grid place-items-center shrink-0 shadow-glow">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-concrete-fg/50 font-semibold">
                      {label}
                    </div>
                    <div className="text-base font-medium">{value}</div>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group hover:text-accent transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-start gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-2xl border border-concrete bg-concrete-muted/40 backdrop-blur p-8 lg:p-10 shadow-elegant space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-concrete-fg">Nome completo</Label>
              <Input id="name" required placeholder="Seu nome" className="bg-concrete border-concrete text-concrete-fg placeholder:text-concrete-fg/40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-concrete-fg">Telefone / WhatsApp</Label>
              <Input id="phone" required placeholder="(00) 00000-0000" className="bg-concrete border-concrete text-concrete-fg placeholder:text-concrete-fg/40" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-concrete-fg">E-mail</Label>
              <Input id="email" type="email" required placeholder="voce@email.com" className="bg-concrete border-concrete text-concrete-fg placeholder:text-concrete-fg/40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-concrete-fg">Assunto</Label>
              <Input id="subject" placeholder="Ex.: CAR, titulação, georreferenciamento" className="bg-concrete border-concrete text-concrete-fg placeholder:text-concrete-fg/40" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-concrete-fg">Mensagem</Label>
            <Textarea id="message" rows={5} required placeholder="Descreva brevemente seu imóvel e o que você precisa..." className="bg-concrete border-concrete text-concrete-fg placeholder:text-concrete-fg/40" />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-glow"
          >
            {loading ? "Enviando..." : (<>Enviar mensagem <Send /></>)}
          </Button>
          <p className="text-xs text-concrete-fg/50 text-center">
            Ao enviar, você concorda em ser contatado pela equipe JEVA.
          </p>
        </form>
      </div>

      {/* Mapa Google Maps — Sede Rurópolis-PA */}
      <div className="container relative mt-16 lg:mt-20">
        <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Nossa sede
            </span>
            <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold">
              Rurópolis — Pará
            </h3>
          </div>
          <a
            href="https://www.google.com/maps/place/Rurópolis+-+PA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            <MapPin className="size-4" />
            Como chegar
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-concrete shadow-elegant group">
          {/* Overlay sutil para integrar ao tema escuro */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-accent/10 rounded-2xl z-10" />
          <div className="absolute top-4 left-4 z-10 bg-concrete/90 backdrop-blur border border-concrete-border rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-soft">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-semibold text-concrete-fg">
              JEVA Engenharia Florestal
            </span>
          </div>
          <iframe
            title="Localização da JEVA Engenharia Florestal em Rurópolis-PA"
            src="https://www.google.com/maps?q=Rur%C3%B3polis%2C+PA%2C+Brasil&hl=pt-BR&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] border-0 grayscale-[20%] contrast-110 transition-all duration-500 group-hover:grayscale-0"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-xs text-concrete-fg/50 text-center">
          [EDITAR] Atualize o endereço exato da sede quando disponível.
        </p>
      </div>
    </section>
  );
}
