export default function Header({ username = 'Chantelle' }) {
    return (
        <div className="relative w-full bg-[#397367] overflow-hidden py-4 pb-8">
            {/* Background SVG - smaller size */}
            <div className="absolute top-0 right-0 flex justify-end">
                <img
                    src="/header_bg.svg"
                    alt="Header background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Greeting Text - moved down with mt-4 */}
            <div className="p-4 mt-4">
                <h1 className="text-white text-2xl font-light">Hi,</h1>
                <h2 className="text-white text-4xl font-bold">{username}!</h2>
            </div>

            {/* Profile Circle - positioned lower */}
            <div className="absolute right-10 bottom-12 w-10 h-10 bg-[#5F464B] rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold">C</span>
            </div>
        </div>
    );
}