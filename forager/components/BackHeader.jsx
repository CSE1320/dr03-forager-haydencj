import { useRouter } from "next/navigation";

export default function BackHeader({ title }) {
  const router = useRouter();

  return (
    <div className="relative flex items-center bg-primary text-white pt-12 pb-4 px-6 rounded-b-[30px] shadow-md">
      {/* Back Button (Left-Aligned) */}
      <button onClick={() => router.back()} className="absolute left-4">
        <img width="30px" height="30px" src="icons/back.svg" alt="Back" />
      </button>

      {/* Centered Title */}
      <h1 className="text-3xl font-semibold pt-2 mx-auto">{title}</h1>
    </div>
  );
}
