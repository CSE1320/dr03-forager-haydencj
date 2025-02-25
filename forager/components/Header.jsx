export default function Header({ username = 'Chantelle' }) {
  return (
    <div className="w-full h-40 bg-primary">
      {/* Background SVG */}
      <img
        src="/header_bg.svg"
        alt="Cute light green mushroom"
        layout="fill"
        className="absolute inset-0"
      />

      {/* Greeting Text */}
      <div className="relative z-10 p-6">
        <h1 className="text-white text-2xl font-light">Hi,</h1>
        <h2 className="text-white text-4xl font-bold"> {username}!</h2>
      </div>

      {/* Profile Circle */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">C</span>
      </div>
    </div>
  );
}
