import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/whatsapp';

export const FloatingWhatsApp = () => (
  <a className="floating-whatsapp" href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <MessageCircle size={24} />
  </a>
);
