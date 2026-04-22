import { MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fale conosco no WhatsApp ${WHATSAPP_DISPLAY}`}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-accent text-accent-foreground shadow-elegant hover:scale-105 transition-transform animate-float pl-3 pr-5 py-3"
    >
      <span className="relative grid size-9 place-items-center rounded-full bg-accent-foreground/15">
        <MessageCircle className="size-5" />
        <span className="absolute inset-0 rounded-full bg-accent/50 animate-ping -z-10" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
          WhatsApp
        </span>
        <span className="text-sm font-bold">{WHATSAPP_DISPLAY}</span>
      </span>
    </a>
  );
}
