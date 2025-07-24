"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+923176697001"; // Replace with your actual WhatsApp business number
    const message = encodeURIComponent(
      "Hi! I'm interested in your tile textures. Can you help me?",
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {isTooltipVisible && (
            <div className="absolute bottom-16 right-0 bg-dark-lighter border border-dark rounded-lg p-3 shadow-lg min-w-[200px] animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">
                    Need Help?
                  </h4>
                  <p className="text-xs text-gray-light">
                    Chat with us on WhatsApp for instant support!
                  </p>
                </div>
                <button
                  onClick={() => setIsTooltipVisible(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* Arrow */}
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-dark-lighter border-r border-b border-dark transform rotate-45"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

            {/* WhatsApp Icon */}
            <MessageCircle className="w-7 h-7 text-white relative z-10" />

            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </button>

          {/* Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
        </div>
      </div>
    </>
  );
}
