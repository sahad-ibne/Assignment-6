export default function MyPlanPage() {
  return (
    <main className="min-h-screen bg-[#0d0e12] text-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-extrabold ">
            MY PLAN
          </h1>
          <p className="text-zinc-400 text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#13151b] border border-zinc-800/80 rounded-2xl p-6">
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Exercises</p>
            <h2 className="text-3xl font-black text-[#ccff00] mt-1">0</h2>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Minutes</p>
            <h2 className="text-3xl font-black text-white mt-1">0</h2>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Calories</p>
            <h2 className="text-3xl font-black text-white mt-1">0</h2>
          </div>
        </div>

      </div>
    </main>
  );
}