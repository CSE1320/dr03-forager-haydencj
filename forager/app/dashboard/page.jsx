import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import MushroomList from '../../components/MushroomList'; // Adjust the path as necessary

export default function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard Page</h1>
      <MushroomList />
      <NavBar />
    </div>
  );
}
