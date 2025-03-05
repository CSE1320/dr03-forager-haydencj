export default function Mushroom({isToxic, confidenceMatch, imageSrc, className = "" }) {
  return (
    <div className="flex flex-col items-center">
      {/* Image Container with Polaroid Effect */}
      <div className={`${className} relative bg-white shadow-md px-2 pb-12 w-fit`}>
        {/* Top row with warning and match percentage */}
        <div className="flex items-center gap-2 py-1">
          {isToxic && <img src="icons/skull.png" alt="Toxic Warning" className="" />}
          {confidenceMatch && (
            <span className="bg-[#FF5050] text-white text-xs font-bold px-2 py-1 rounded-[10px]">
              {confidenceMatch}% Match
            </span>
          )}
        </div>

        {/* Mushroom Image */}
        <div className="w-full max-w-[250px] aspect-square overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={`${imageSrc} mushroom`} className="w-full h-full object-cover" />
          ) : (
            <div className="bg-gray-100 aspect-square flex items-center justify-center">
              <p className="text-center text-gray-500">No image available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

