import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full grid place-items-center bg-accent text-accent-foreground shadow-elegant hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping -z-10" />
    </a>
  );
}
