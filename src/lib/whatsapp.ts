/** WhatsApp Business number (digits only, with country code, no +). */
export const WHATSAPP_NUMBER = "212699105831";

/** Build a wa.me deep link with an optional prefilled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
