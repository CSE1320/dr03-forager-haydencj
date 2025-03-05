"use client";
import { createContext, useState, useContext } from "react";
import mushrooms from "@/data/development"; // Import all mushrooms

const MushroomContext = createContext();

export function MushroomProvider({ children }) {
  const [selectedMushroom, setSelectedMushroom] = useState(mushrooms[0]); // Default: Death Cap

  return (
    <MushroomContext.Provider value={{ selectedMushroom, setSelectedMushroom }}>
      {children}
    </MushroomContext.Provider>
  );
}

export function useMushroom() {
  return useContext(MushroomContext);
}
