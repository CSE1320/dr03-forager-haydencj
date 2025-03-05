"use client"

import { useState } from "react"
import Pill from "./Pill"

export default function PillList({ title, items = [], initialSelectedItem = "", onItemClick, className = "" }) {
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem)

  const handlePillClick = (item) => {
    setSelectedItem(item)
    onItemClick?.(item)
  }

  return (
    <div className={`w-[321px] ${className}`}>
      {title && <h3 className="text-xl font-bold text-black mb-3">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Pill
            key={item}
            isActive={initialSelectedItem === item} // Correctly toggles between active & inactive
            onClick={() => handlePillClick(item)}
          >
            {item}
          </Pill>
        ))}
      </div>
    </div>
  )
}

