import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackHeader({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center bg-primary text-white p-4 rounded-b-lg shadow-md">
      {/* Back Button */}
      <button onClick={() => router.back()} className="p-2">
        <ArrowLeft className="h-6 w-6" />
      </button>

      {/* Centered Title */}
      <h1 className="flex-grow text-center text-lg font-bold">{title}</h1>

      {/* Spacer to balance layout */}
      <div className="w-6"></div>
    </div>
  );
}
