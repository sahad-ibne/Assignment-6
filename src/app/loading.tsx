export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-zinc-700 border-t-[#ccff00] rounded-full animate-spin"></div>
      <p className="text-zinc-400 text-xs font-semibold animate-pulse">
        Loading exercises...
      </p>
    </div>
  );
}