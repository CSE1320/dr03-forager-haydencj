export default function Pill({ children, className = "", variant = "primary", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-5 text-sm font-medium rounded-full transition-all";
  
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-300 text-gray-700",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
