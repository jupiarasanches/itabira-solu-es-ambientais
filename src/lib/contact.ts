// Centralized contact info — edit here to update the whole site
// Use full international format for WhatsApp (country code + DDD + number, no symbols)
export const WHATSAPP_NUMBER = "5593999999999"; // [EDITAR] ex.: 5593991234567
export const WHATSAPP_DISPLAY = "(93) 99999-9999"; // [EDITAR] formato visível

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da JEVA e gostaria de um diagnóstico para regularização do meu imóvel rural.";

export const whatsappLink = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
