import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/jeva-logo.png";

export function Footer() {
  return (
    <footer className="bg-concrete text-concrete-fg border-t border-concrete">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="JEVA Engenharia Florestal" className="h-14 w-auto" />
          <p className="mt-4 text-sm text-concrete-fg/70 max-w-sm">
            JEVA Engenharia Florestal — soluções em regularização ambiental e
            fundiária para imóveis rurais no Pará desde 2017.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="size-10 rounded-lg border border-concrete hover:border-accent hover:text-accent grid place-items-center transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-concrete-fg/70">
            {[
              { l: "Início", h: "#inicio" },
              { l: "Sobre", h: "#sobre" },
              { l: "Serviços", h: "#servicos" },
              { l: "CEO", h: "#ceo" },
              { l: "Contato", h: "#contato" },
            ].map((i) => (
              <li key={i.h}>
                <a href={i.h} className="hover:text-accent transition-colors">
                  {i.l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-concrete-fg/70">
            <li>[EDITAR] (93) 0000-0000</li>
            <li>[EDITAR] contato@jeva.com.br</li>
            <li>Rurópolis — Pará, Brasil</li>
            <li>Seg a Sex, 8h às 18h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-concrete">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-concrete-fg/50">
          <span>© {new Date().getFullYear()} JEVA Engenharia Florestal. Todos os direitos reservados.</span>
          <span>CNPJ [EDITAR]</span>
        </div>
      </div>
    </footer>
  );
}
