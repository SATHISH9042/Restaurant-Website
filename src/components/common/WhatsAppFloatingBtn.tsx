import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/restaurant';

export const WhatsAppFloatingBtn: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-white text-[#141615] px-4 py-2.5 rounded-2xl shadow-warm-lg border border-[#D4A359]/30 text-xs font-medium animate-fade-in relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-700 absolute -top-2 -right-2 bg-white rounded-full p-0.5 border shadow-sm"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <div>
            <p className="font-bold text-[#163E2D]">Have questions or want to order?</p>
            <p className="text-gray-500 text-[11px]">Chat directly on WhatsApp with our team</p>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Saffron Leaf Restaurant on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-warm-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -inset-1 bg-[#25D366]/40 rounded-full animate-ping pointer-events-none opacity-60"></span>
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow-sm transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#D4A359] border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};
