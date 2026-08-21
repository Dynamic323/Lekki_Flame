import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppFab() {
  return (
    <a 
      href="https://wa.me/2347017847124" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center z-50 shadow-lg hover:scale-110 transition-transform"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}
export default WhatsAppFab;