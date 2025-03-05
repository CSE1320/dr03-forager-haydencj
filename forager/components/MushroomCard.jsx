export default function MushroomCard({ 
  name, 
  imageSrc, 
  isToxic, 
  matchPercent, 
  className = "" 
}) {
  // Function to determine match percentage color
  const getMatchPercentColor = (percent) => {
    const numPercent = Number(percent);
    if (numPercent >= 90) return 'bg-[#73D89F]'; // Green for 90-100%
    if (numPercent >= 70) return 'bg-[#FF6666]'; // Red for 70-90%
    return 'bg-[#A5A5A5]'; // Gray for <70%
  };

  return (
    <div className={`flex flex-col w-[100px] ${className}`}>
      <div className="relative h-[120px] bg-white shadow-md flex justify-center items-start">
        {/* Warning Icon */}
        {isToxic === "true" && (
          <img
            className="absolute top-2 left-2"
            src="/icons/ic_round-warning.png"
            alt="Warning Symbol"
            width={16}
            height={16}
          />
        )}
        
        {/* Match Percentage */}
        {matchPercent && (
          <div className={`absolute top-2 ${isToxic === "true" ? "right-2" : "left-2"} 
            px-1.5 py-0.5 rounded text-xs font-bold text-white
            ${getMatchPercentColor(matchPercent)}`}
          >
            {matchPercent}%
          </div>
        )}
        
        {/* Mushroom Image */}
        <img
          className="object-cover mt-1"
          src={imageSrc || "/placeholder.svg"}
          alt={`Image of ${name} mushroom`}
          width={90}
          height={95}
        />
      </div>
      
      {/* Mushroom Name */}
      <h1 className="text-[#203b5f] text-sm font-semibold mt-2 text-center w-full">
        {name}
      </h1>
    </div>
  );
}