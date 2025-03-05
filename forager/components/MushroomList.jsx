import MushroomCard from './MushroomCard';

export default function MushroomList({ title, mushrooms, onMushroomClick }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-4">{title}</h2>
      <ul className="grid grid-cols-3 gap-4 w-full max-w-[414px] list-none p-0">
        {mushrooms.map((mushroom) => (
          <li key={mushroom.name} className="list-none cursor-pointer" onClick={() => onMushroomClick(mushroom)}>
            <MushroomCard
              imageSrc={mushroom.image}
              name={mushroom.name}
              isToxic={mushroom.filterable.is_toxic}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
