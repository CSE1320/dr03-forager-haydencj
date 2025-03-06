"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackHeader from "@/components/BackHeader";
import Message from "@/components/Message";
import Mushroom from "@/components/Mushroom";
import NavBar from "@/components/NavBar";
import ComparisonTable from "@/components/ComparisonTable";
import PageWrapper from "@/components/PageWrapper";
import { useMushroom } from "../lib/MushroomContext";

export default function MushroomComparisonPage() {
  const { selectedMushroom } = useMushroom();

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <BackHeader title="Compare" />

        {/* Warning Message */}
        {selectedMushroom?.filterable?.is_toxic === "true" && (
          <div className="p-4">
            <Message />
          </div>
        )}

        {/* Mushroom Comparison Section */}
        <div className="flex justify-evenly p-4 gap-4">
          {/* User's Mushroom */}
          <div className="w-1/2 text-center">
            <Mushroom
              name={selectedMushroom.name}
              imageSrc={`/images/userimage.png?timestamp=${Date.now()}`} // Add cache-busting query
              className="pt-6"
            />
            <h3 className="text-[#324053] text-2xl font-bold my-2">Your Photo</h3>

          </div>

          {/* Selected Mushroom */}
          <div className="w-1/2 text-center relative">
            <Mushroom
              name={selectedMushroom.name}
              isToxic={selectedMushroom.filterable?.is_toxic === "true"}
              confidenceMatch={selectedMushroom.match_percent}
              imageSrc={selectedMushroom.image}
            />
            <h3 className="text-[#324053] text-2xl font-bold my-2">{selectedMushroom.name}</h3>
          </div>
        </div>

        {/* Comparison Table */}
        <ComparisonTable mushroom={selectedMushroom} />

        {/* Bottom Navigation */}
        <NavBar />
      </div>
    </PageWrapper>
  );
}
