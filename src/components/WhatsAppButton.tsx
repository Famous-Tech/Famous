import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/50944156629"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 transform"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="ml-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        Chat
      </span>
    </a>
  );
};

export default WhatsAppButton;