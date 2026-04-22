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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-concrete/85 backdrop-blur-xl border-b border-concrete shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="JEVA Engenharia Florestal"
            className="h-12 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-concrete-fg/80 hover:text-accent transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
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
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-display font-semibold text-concrete-fg hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
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
