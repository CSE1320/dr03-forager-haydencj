"use client";
import React, { useState, useEffect } from "react";
import { userCharacteristics } from "@/data/development"; // Import global user characteristics

export default function ComparisonTable({ mushroom }) {
    const [userInputs, setUserInputs] = useState({ ...userCharacteristics });

    useEffect(() => {
        // Sync local state with global `userCharacteristics` if needed
        setUserInputs({ ...userCharacteristics });
    }, []);

    const characteristics = [
        "cap_shape",
        "cap_color",
        "cap_texture",
        "gills_type",
        "gills_color",
        "stem_shape",
        "stem_color",
        "stem_ring",
        "habitat",
    ];

    // Handle input change
    const handleInputChange = (key, value) => {
        setUserInputs((prev) => {
            const updatedInputs = { ...prev, [key]: value };
            userCharacteristics[key] = value; // Keep global object updated
            return updatedInputs;
        });
    };

    // Clear input when "X" button is clicked
    const handleClearInput = (key) => {
        setUserInputs((prev) => {
            const updatedInputs = { ...prev, [key]: "" };
            userCharacteristics[key] = ""; // Clear globally
            return updatedInputs;
        });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-24 w-[90%] mx-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-left text-gray-700 p-2">Your Input</th>
                        <th className="text-center text-gray-700 p-2">Characteristic</th>
                        <th className="text-right text-gray-700 p-2">{mushroom.name}</th>
                    </tr>
                </thead>
                <tbody>
                    {characteristics.map((key) => (
                        <tr key={key} className="border-b">
                            {/* Left Column: User Input with "X" Button */}
                            <td className="text-left text-gray-600 p-2 flex items-center gap-2">
                                <button onClick={() => handleClearInput(key)} className="flex items-center justify-center">
                                    <img src="/icons/circle_x.svg" alt="Clear" className="w-4 h-4" />
                                </button>
                                <input
                                    type="text"
                                    value={userCharacteristics[key] || ""}
                                    onChange={(e) => handleInputChange(key, e.target.value)}
                                    className="text-gray-700 font-medium outline-none border-b border-gray-400 focus:border-gray-600 w-full bg-transparent"
                                />
                            </td>

                            {/* Middle Column: Characteristic Name */}
                            <td className="text-center text-gray-900 font-medium p-2 capitalize">
                                {key.replace("_", " ")}
                            </td>

                            {/* Right Column: Mushroom's Characteristics */}
                            <td className="text-right text-gray-600 p-2">
                                {mushroom.characteristics[key] || "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
