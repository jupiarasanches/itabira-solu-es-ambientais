import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/assets/jeva-logo.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#ceo", label: "CEO" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{ transitionTimingFunction: "var(--transition-smooth)" }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow,border-color,transform] duration-700 ease-out will-change-[background-color,backdrop-filter] ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="JEVA Engenharia Florestal"
            className="h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            style={{ transitionTimingFunction: "var(--transition-smooth)" }}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                style={{ transitionTimingFunction: "var(--transition-smooth)" }}
                className={`text-sm font-medium transition-all duration-500 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-accent after:transition-all after:duration-500 hover:after:w-full ${
                  isActive ? "after:w-full" : "after:w-0"
                } ${
                  isActive
                    ? scrolled
                      ? "text-accent"
                      : "text-accent"
                    : scrolled
                    ? "text-foreground/80 hover:text-accent"
                    : "text-concrete-fg/85 hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
          >
            <a href="#contato">
              <Phone className="size-4" />
              Fale conosco
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-concrete-fg hover:bg-concrete-muted">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-concrete border-concrete">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((l) => {
                  const isActive = active === l.href;
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-lg font-display font-semibold transition-colors duration-500 flex items-center gap-3 ${
                        isActive ? "text-accent" : "text-concrete-fg hover:text-accent"
                      }`}
                      style={{ transitionTimingFunction: "var(--transition-smooth)" }}
                    >
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-500 ${
                          isActive ? "bg-accent scale-100" : "bg-concrete-muted scale-75"
                        }`}
                      />
                      {l.label}
                    </a>
                  );
                })}
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                  <a href="#contato" onClick={() => setOpen(false)}>
                    Fale conosco
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
