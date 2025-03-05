export default function FavoriteButton({ isFavorite, onToggle, className = ""}) {
  return (
    <button
      onClick={onToggle}
      className={`transition-all duration-300 ease-in-out transform active:scale-90 ${className}`}
    >
      {isFavorite ? (
        <img
          src="/icons/remove.svg"  
          alt="Remove from favorites"
          className="w-10 h-10 opacity-100 transition-opacity duration-300"
        />
      ) : (
        <img
          src="/icons/add.svg"  
          alt="Add to favorites"
          className="w-10 h-10 opacity-100 transition-opacity duration-300"
        />
      )}
    </button>
  );
}
