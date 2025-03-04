"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import MushroomList from "@/components/MushroomList";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import FilterSettings from "@/components/FilterSettings";
import mushrooms from "@/data/development";
import Pill from "@/components/Pill";

export default function DashboardPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    tags: "",
    regions: "",
    category: "",
  });
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  // Filtering logic
  const filteredMushrooms = mushrooms.filter((mushroom) => {
    const matchesSearch = mushroom.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = !filters.regions || mushroom.region.includes(filters.regions);

    const matchesTag =
      filters.tags === "Favorites" ? mushroom.filterable.is_favorite === "true" :
      true;

    const matchesCategory =
      filters.category === "Poisonous" ? mushroom.filterable.is_toxic === "true" :
      filters.category === "Edible" ? mushroom.filterable.is_edible === "true" :
      filters.category === "Medicinal" ? mushroom.filterable.is_medicinal === "true" :
      true;

    return matchesSearch && matchesRegion && matchesTag && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header username="Chantelle" />

      <div className="p-4">
        <SearchBar 
          placeholder="Search for a mushroom"
          onFilterClick={() => setFilterOpen(true)}
          onSearch={setSearchQuery} // Update search state
        />

        {/* Show active filters as Green Pills */}
        {Object.values(filters).some((filter) => filter) && (
          <div className="mt-3 flex gap-2 flex-wrap">
            {Object.entries(filters)
              .filter(([_, value]) => value) // Show only active filters
              .map(([key, value]) => (
                <Pill key={key} isActive={true} onClick={() => setFilters((prev) => ({ ...prev, [key]: "" }))}>
                  {value}
                </Pill>
              ))}
          </div>
        )}

        {/* Pass filtered mushrooms */}
        <MushroomList title="My Collection" mushrooms={filteredMushrooms} />
      </div>

      <NavBar />

      {/* Filter Settings Modal */}
      <FilterSettings
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
