import mushrooms from '../data/development';
import MushroomCard from './MushroomCard';

export default function MushroomList() {
  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-3 gap-4 w-full max-w-[414px] list-none p-0">
      {mushrooms.map((mushroom) => (
          <li key={mushroom.name} className="list-none cursor-pointer">
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
