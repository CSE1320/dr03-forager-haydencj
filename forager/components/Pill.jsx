export default function Pill({ children, isActive, className = "", ...props }) {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 px-5 text-sm font-medium rounded-full transition-all cursor-pointer";
  
    const variantClasses = isActive
      ? "bg-primary text-white"
      : "bg-[#D9D9D9] text-[#7C7C7C]"; // Reverts to gray when unselected
  
    return (
      <div className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
        {children}
      </div>
    );
  }
  