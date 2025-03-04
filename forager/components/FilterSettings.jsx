import { useState } from "react";
import PillList from "./PillList";

export default function FilterSettings({ isOpen, onClose, filters, setFilters }) {
  if (!isOpen) return null;

  const handleFilterToggle = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? null : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-80 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">FILTER</h2>
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>

        <PillList
          title="Tags"
          pills={["Favorites", "Recent"]}
          activePill={filters.tags}
          onPillClick={(pill) => handleFilterToggle("tags", pill)}
        />

        <PillList
          title="Regions"
          pills={["Texas", "North America", "South America", "Asia", "Europe", "Africa"]}
          activePill={filters.regions}
          onPillClick={(pill) => handleFilterToggle("regions", pill)}
        />

        <PillList
          title="Category"
          pills={["Poisonous", "Medicinal", "Mythical", "Good for Broths"]}
          activePill={filters.category}
          onPillClick={(pill) => handleFilterToggle("category", pill)}
        />
      </div>
    </div>
  );
}
