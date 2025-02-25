export default function SearchBar({ placeholder }) {
  return (
    <div className="flex items-center gap-3 w-full max-w-md mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-sm px-4 py-2 w-full">
        <img
          src="/icons/search_icon.svg"
          alt="Search Icon"
          width={20}
          height={20}
          className="flex-shrink-0"
        />
        <input
          type="text"
          placeholder={placeholder || 'Search for a mushroom'}
          className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 ml-2"
        />
      </div>
      <button className="flex items-center justify-center p-2 rounded-full bg-transparent hover:bg-gray-100">
        <img
          src="/icons/filter_icon.svg"
          alt="Filter Icon"
          width={20}
          height={20}
          className="flex-shrink-0"
        />
      </button>
    </div>
  );
}
