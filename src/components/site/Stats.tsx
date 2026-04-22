import { useReveal } from "@/hooks/use-reveal";
import { useCounter } from "@/hooks/use-counter";

const stats = [
  { value: 8, suffix: "+", label: "Anos de atuação" },
  { value: 350, suffix: "+", label: "Imóveis regularizados" },
  { value: 120, suffix: "k", label: "Hectares mapeados" },
  { value: 40, suffix: "+", label: "Municípios atendidos" },
];

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const v = useCounter(value, 1600, start);
  return (
    <div className="text-center px-4">
      <div className="font-display text-5xl lg:text-6xl font-bold text-primary">
        {v}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-16 lg:py-20 border-y border-border">
      <div ref={ref} className="container grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} start={visible} />
        ))}
      </div>
    </section>
  );
}
