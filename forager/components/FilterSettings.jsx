"use client";
import { X } from "lucide-react";
import PillList from "./PillList";
import { useEffect, useState } from "react";

export default function FilterSettings({ isOpen, onClose, filters, setFilters }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle opening animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true); // Render modal
      setTimeout(() => setIsAnimating(true), 10); // Add delay to trigger animation
    } else {
      setIsAnimating(false);
      setTimeout(() => setShouldRender(false), 300); // Delay to allow smooth close animation
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleFilterToggle = (category, value) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, [category]: prevFilters[category] === value ? "" : value };
    });
  };

  const sections = {
    tags: {
      title: "Tags",
      items: ["Favorites"],
    },
    regions: {
      title: "Regions",
      items: ["Texas", "North America", "South America", "Asia", "Europe", "Africa", "Worldwide"],
    },
    category: {
      title: "Category",
      items: ["Poisonous", "Medicinal", "Edible"],
    },
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center transition-opacity duration-300">
      {/* Sliding modal */}
      <div
        className={`bg-white rounded-t-3xl w-full max-w-lg shadow-lg p-6 transform ${
          isAnimating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-300 fixed bottom-0 h-[90vh] overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-lg text-black font-bold text-center flex-grow">FILTER</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition">
            <X className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Filter Sections */}
        <div className="py-4 space-y-6">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key}>
              <PillList
                title={section.title}
                items={section.items}
                initialSelectedItem={filters[key]}
                onItemClick={(item) => handleFilterToggle(key, item)}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
