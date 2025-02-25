export default function MushroomCard({ name, imageSrc, isToxic }) {
    return (
      <div className="flex flex-col w-[100px]">
        <div className="relative h-[120px] bg-white shadow-md flex justify-center items-start">
          {isToxic === "true" && (
            <img
              className="absolute top-2 left-2"
              src="/icons/icon_warning.svg"
              alt="Warning Symbol"
              width={16}
              height={16}
            />
          )}
          <img
            className="object-cover mt-1"
            src={imageSrc}
            alt={`Image of ${name}`}
            width={90}
            height={95}
          />
        </div>
        <h1 className="text-[#203b5f] text-sm font-semibold mt-2 text-center w-full">
          {name}
        </h1>
      </div>
    );
  }
  