import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList';
import NavBar from '@/components/NavBar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-primary text-white p-6 rounded-b-3xl">
        <h1 className="text-3xl font-bold">Hi, <span className="text-[#f3f3f3]">Chantelle!</span></h1>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Search Bar */}
        <SearchBar placeholder="Search for a mushroom" />

        {/* My Collection Title */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6">My Collection</h2>

        {/* Mushroom Grid */}
        <MushroomList />
      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
}
