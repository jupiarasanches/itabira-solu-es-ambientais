import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "[EDITAR] (93) 0000-0000" },
  { icon: Mail, label: "E-mail", value: "[EDITAR] contato@jeva.com.br" },
  { icon: MapPin, label: "Endereço", value: "[EDITAR] Rurópolis-PA, Brasil" },
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
        <div className="lg:col-span-2">
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
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="size-11 rounded-xl gradient-primary grid place-items-center shrink-0 shadow-glow">
                  <Icon className="size-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-concrete-fg/50 font-semibold">
                    {label}
                  </div>
                  <div className="text-base font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
    </section>
  );
}
