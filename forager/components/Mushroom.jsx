export default function Mushroom({ name, isToxic, confidenceMatch, imageSrc }) {
    return (
      <div className="relative flex flex-col w-fit bg-white shadow-md px-3 pb-14 mx-auto">
        {/* ☠️ Toxic Icon + Confidence Match */}
        <div className="flex space-x-2 py-1">
          {isToxic && <img src="icons/skull.png"/>}
          <span className="bg-[#FF5050] text-white text-xs font-bold px-3 py-1 rounded-[10px]">
            {confidenceMatch}% Match
          </span>
        </div>
  
        {/* Mushroom Image */}
        <div className="max-w-xs">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="w-full"
            />
          ) : (
            <p className="text-center text-gray-500">No image available</p>
          )}
        </div>
      </div>
    );
  }
  