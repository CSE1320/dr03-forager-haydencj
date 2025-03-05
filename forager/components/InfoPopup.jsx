"use client";
import { X } from "lucide-react";

export default function InfoPopup({ isVisible, onClose }) {
  if (!isVisible) return null; // Do not render if not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-[#6BC591] text-white px-4 py-2 rounded-[20px] shadow-lg max-w-xs">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Popup Content */}
        <p className="text-sm">
          <span className="font-bold">Percentages</span> indicate the confidence level of the match.
        </p>
      </div>
    </div>
  );
}
