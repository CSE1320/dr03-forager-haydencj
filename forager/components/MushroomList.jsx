import MushroomCard from './MushroomCard';

export default function MushroomList({ 
  title, 
  mushrooms, 
  onMushroomClick,
  columns = 3,
  showMatchPercent = false,
  className = "",
  maxItems
}) {
  const displayMushrooms = maxItems ? mushrooms.slice(0, maxItems) : mushrooms;

  return (
    <div className={`flex flex-col ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-[#324053] mt-4 mb-4">{title}</h2>
      )}
      <div className="flex justify-center w-full pb-24"> {/* Center container */}
        <ul 
          className={`grid list-none p-0 ${
            columns === 2 ? 'grid-cols-2 gap-10' : // 100px * 2 + 12px gap
            columns === 3 ? 'grid-cols-3 gap-8' : // 100px * 3 + 24px gap
            `grid-cols-${columns}`
          }`}
        >
          {displayMushrooms.map((mushroom) => (
            <li 
              key={mushroom.name} 
              className="list-none cursor-pointer" 
              onClick={() => onMushroomClick?.(mushroom)}
            >
              <MushroomCard
                imageSrc={mushroom.image}
                name={mushroom.name}
                isToxic={mushroom.filterable?.is_toxic}
                matchPercent={showMatchPercent ? mushroom.match_percent : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}