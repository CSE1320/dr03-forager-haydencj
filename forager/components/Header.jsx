export default function Header({ username = 'Chantelle' }) {
    return (
        <div className="relative w-full h-32 bg-primary overflow-hidden">
            {/* Background SVG */}
            <img
                src="/header_bg.svg"
                alt="Header background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Greeting Text */}
            <div className="relative z-10 p-4">
                <h1 className="text-white text-2xl font-light">Hi,</h1>
                <h2 className="text-white text-4xl font-bold">{username}!</h2>
            </div>

            {/* Profile Circle */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-[#5F464B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
            </div>
        </div>
    );
}
