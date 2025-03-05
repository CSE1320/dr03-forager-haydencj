"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from 'lucide-react';
import BackHeader from "@/components/BackHeader";
import Message from "@/components/Message";
import MushroomList from "@/components/MushroomList";
import NavBar from "@/components/NavBar";
import Mushroom from "@/components/Mushroom";
import FavoriteButton from "@/components/FavoriteButton";
import PopupWarning from "@/components/PopupWarning";
import InfoPopup from "@/components/InfoPopup";
import { useMushroom } from "../context/MushroomContext";
import mushrooms from "@/data/development";
import { handleMushroomClick } from "../lib/utils";

export default function MushroomPage() {
  const { selectedMushroom, setSelectedMushroom } = useMushroom();
  const router = useRouter();

  // Default to "Death Cap" if no mushroom was selected
  const mushroom = selectedMushroom || mushrooms.find((m) => m.name === "Death Cap") || {};

  // States
  const [showWarning, setShowWarning] = useState(mushroom.filterable?.is_toxic === "true");
  const [showPopup, setShowPopup] = useState(true); // Control the popup visibility
  const [isFavorite, setIsFavorite] = useState(mushroom.filterable.is_favorite === "true");
  const [showInfoPopup, setShowInfoPopup] = useState(false); // Info Popup State

  // Sync state when the selected mushroom changes
  useEffect(() => {
    setIsFavorite(mushroom.filterable.is_favorite === "true");
  }, [mushroom]); // Runs when `mushroom` changes

  // Handle Favorite Toggle
  const toggleFavorite = () => {
    setIsFavorite((prev) => {
      const newFavoriteState = !prev;

      // 🔥 Update the actual mushroom data
      mushroom.filterable.is_favorite = newFavoriteState ? "true" : "false";

      return newFavoriteState;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Popup Overlay */}
      {showPopup && <PopupWarning onClose={() => setShowPopup(false)} />}

      {/* Header */}
      <BackHeader title="Match Results" />

      {/* Content Section */}
      <div className="p-3 bg-[#F2F2F2] space-y-2">
        {/* 🔴 Not what you expected? Report Error Section */}
        <div className="flex justify-evenly items-center ">
          <p className="text-gray-600 text-sm">Not what you expected?</p>
          <button className="flex items-center bg-[#FF5050] text-white py-2 px-2 rounded-[10px] font-medium">
            Report Error
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Warning Message */}
        {showWarning && (
          <Message />
        )}

        {/* 🆕 Compare Text (Moved Above Mushroom Component) */}
        <div className="flex justify-end text-gray-500 text-sm pr-2">
          Compare
          <ChevronRight className="w-3 h-3 ml-1 mt-1" />
        </div>

        {/* 🆕 Mushroom Component (Now Includes Name, Image, and Confidence Match) */}
        <Mushroom
          name={mushroom.name}
          isToxic={mushroom.filterable?.is_toxic === "true"}
          confidenceMatch={mushroom.match_percent}
          imageSrc={mushroom.image}
        />

        {/* Name, Scientific Name, and Favorite Button */}
        <div className="relative flex items-center pb-4 px-6">
          <div>
            <h2 className="text-2xl text-[#324053] font-bold">
              {mushroom.name || "Unknown Mushroom"}
            </h2>
            <p className="italic text-gray-500">
              {mushroom.scientific_name || "Unknown"}
            </p>
          </div>

          {/* Favorite Toggle Button */}
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={toggleFavorite}
            className="absolute right-4"
          />
        </div>

        {/* Fast Facts */}
        {mushroom.characteristics && (
          <div className="bg-[#8E4A49] w-[90%] text-white text-left px-10 py-4 rounded-[40px] mx-auto shadow-md">
            <h3 className="font-bold text-lg">Fast Facts</h3>
            <p>Cap Diameter: {mushroom.characteristics.diameter || "N/A"}</p>
            <p>Gill Color: {mushroom.characteristics.gills_color || "N/A"}</p>
          </div>
        )}
        {/* Description */}
        <p className="text-gray-700 p-6 pb-0">{mushroom.description || "No description available."}</p>



        {/* Similar Matches + Information Section */}
        {/* 2-column grid with match percentages */}
        <div className="relative">
          <button onClick={() => setShowInfoPopup(true)} className="absolute right-16 top-5 ">
            <img
              src="icons/info.svg"
              alt="Information Icon"
              className="w-6 h-6 object-contain"
            />
          </button>

          {/* 🆕 Info Popup (Appears Over Similar Matches) */}
          <InfoPopup
            isVisible={showInfoPopup}
            onClose={() => setShowInfoPopup(false)}
          />

          <MushroomList
            title="Similar Matches"
            mushrooms={mushrooms.filter((m) => m.name !== mushroom.name)} // Remove selected mushroom
            columns={2}
            showMatchPercent={true}
            onMushroomClick={(mushroom) => handleMushroomClick(mushroom, setSelectedMushroom, router)}
            className="text-center"
          />
        </div>


      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
}
