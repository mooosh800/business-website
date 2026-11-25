import { businessConfig } from '../config/business';

const rawNumber = businessConfig.contact.whatsappNumber;
const normalizedNumber = rawNumber.replace(/\D/g, '');

/**
 * When the placeholder is replaced with a real number, links become:
 * https://wa.me/<country-code-and-number>?text=<encoded-message>
 * Until then, wa.me opens with the prepared message only — no fake number is used.
 */
export const hasBusinessWhatsAppNumber = normalizedNumber.length >= 8;

export function buildWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return hasBusinessWhatsAppNumber
    ? `https://wa.me/${normalizedNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function buildGeneralWhatsAppUrl() {
  return buildWhatsAppUrl(`مرحبًا، أرغب بالتواصل مع ${businessConfig.name}.`);
}

export function buildServiceWhatsAppUrl(serviceName: string) {
  return buildWhatsAppUrl(`مرحبًا، أرغب بالاستفسار عن خدمة ${serviceName}.`);
}
