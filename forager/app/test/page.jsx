"use client"
import { useState } from "react";
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import FilterSettings from "@/components/FilterSettings";
import Pill from "@/components/Pill";
import PillList from "@/components/PillList";

export default function TestPage() {
    return (
      <div className="flex min-h-screen flex-col items-start justify-start p-8 bg-gray-100">
        <div className="space-y-8">
          <PillList
            title="Regions"
            items={["Favorites", "North America"]}
            initialSelectedItem="Favorites"
            onItemClick={(item) => console.log(`Clicked: ${item}`)}
          />
  
          {/* Example with different items */}
          <PillList
            title="Categories"
            items={["All", "Dangerous", "Edible"]}
            initialSelectedItem="Dangerous"
            onItemClick={(item) => console.log(`Clicked: ${item}`)}
          />
        </div>
      </div>
    )
  }