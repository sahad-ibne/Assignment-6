import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-[#ccff00] mb-2">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
      <Link
        href="/"
        className="bg-[#ccff00] text-black font-bold text-xs px-6 py-3 rounded-full hover:bg-[#bce600] transition-colors"
      >
        Back to Workouts
      </Link>
    </div>
  );
}