import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = "Hi LUMIÈRE CO. JEWELL, I'd like to place a jewelry order.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/923328232083?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
