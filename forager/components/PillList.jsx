"use client"

import { useState } from "react"
import Pill from "./Pill"

export default function PillList({ title, items = [], initialSelectedItem = "", onItemClick, className = "" }) {
  // Removed 'const' from the destructuring since useState values need to be reassignable
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem)

  const handlePillClick = (item) => {
    setSelectedItem(item)
    onItemClick?.(item)
  }

  return (
    <div className={`w-[321px] ${className}`}>
      {title && <h3 className="text-[16px] font-medium text-[#000000] mb-3">{title}</h3>}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Pill
            key={item}
            variant={item === selectedItem ? "primary" : "secondary"}
            onClick={() => handlePillClick(item)}
          >
            {item}
          </Pill>
        ))}
      </div>
    </div>
  )
}

