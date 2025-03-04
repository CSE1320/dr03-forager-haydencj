"use client"
import { useState } from "react";
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import FilterSettings from "@/components/FilterSettings";

export default function DashboardPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    tags: "Favorites",
    regions: "Texas",
    category: "Poisonous",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Header username="Chantelle" />

      {/* Content Section */}
      <div className="p-4">
        {/* Search Bar (with built-in Filter Button) */}
        <SearchBar placeholder="Search for a mushroom" onFilterClick={() => setFilterOpen(true)} />

        {/* Mushroom Grid */}
        <MushroomList title="My Collection" />
      </div>

      {/* Bottom Navigation */}
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
