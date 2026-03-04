export const WHATSAPP_NUMBER = '923017773557';

export const buildWhatsAppUrl = (message = '') => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};
