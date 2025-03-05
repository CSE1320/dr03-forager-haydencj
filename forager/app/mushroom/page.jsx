"use client";
import { useState } from "react";
import BackHeader from "@/components/BackHeader";
import Message from "@/components/Message";
import MushroomCard from "@/components/MushroomCard";
import NavBar from "@/components/NavBar";
import { useMushroom } from "../context/MushroomContext";
import mushrooms from "@/data/development"; // Import full mushroom list

export default function MushroomPage() {
  const { selectedMushroom } = useMushroom();

  // Default to "Death Cap" if no mushroom was selected
  const mushroom = selectedMushroom || mushrooms.find((m) => m.name === "Death Cap") || {};

  // Ensure similarMatches exists (fallback to an empty array)
  const similarMatches = mushroom.similarMatches || [];

  const [showWarning, setShowWarning] = useState(mushroom.filterable?.is_toxic === "true");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <BackHeader title="Match Results" />

      {/* Content Section */}
      <div className="p-4 bg-[#F2F2F2] space-y-4">
        {/* Warning Message */}
        {showWarning && (
          <Message message="This is a toxic species, proceed with caution." />
        )}

        {/* Confidence Match Label */}
        <div className="flex justify-center">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            🔺 97% Match
          </span>
        </div>

        {/* Mushroom Image */}
        <MushroomCard
                      imageSrc={mushroom.image}
                      name={mushroom.name}
                      isToxic={mushroom.filterable.is_toxic}
                    />

        {/* Name & Scientific Name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">{mushroom.name || "Unknown Mushroom"}</h2>
          <p className="italic text-gray-500">{mushroom.scientific_name || "Unknown"}</p>
        </div>

        {/* Fast Facts */}
        {mushroom.characteristics && (
          <div className="bg-[#8E4A49] text-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Fast Facts</h3>
            <p>Cap Diameter: {mushroom.characteristics.diameter || "N/A"}</p>
            <p>Gill Color: {mushroom.characteristics.gills_color || "N/A"}</p>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-700">{mushroom.description || "No description available."}</p>

        {/* Similar Matches Section */}
        <h3 className="text-lg font-bold mt-4">Similar Matches</h3>
        <div className="grid grid-cols-2 gap-4">
          {similarMatches.length > 0 ? (
            similarMatches.map((match) => <MushroomCard key={match.name} {...match} />)
          ) : (
            <p className="text-gray-500 text-center">No similar matches found.</p>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
}
