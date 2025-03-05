"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PopupWarning({ onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup when the component mounts
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Callback to notify the parent when closed
  };

  if (!isVisible) return null; // Don't render if closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-[#FF5050] text-white p-6 rounded-lg max-w-sm mx-4 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold flex items-center gap-2">
          <img src="/icons/icon_warning.svg" alt="Warning" className="w-6 h-6" />
          ATTENTION!
        </h2>

        {/* Message */}
        <p className="text-sm mt-2">
          Our system can make mistakes! Remember to{" "}
          <span className="font-bold">verify</span> important information and use your{" "}
          own judgment to determine if any mushroom is safe. Be sure to use the 
          <span className="font-bold">“Report Error”</span> button if you suspect a mistake.
        </p>
      </div>
    </div>
  );
}
