import React from 'react';
import Image from 'next/image';
import { Workout } from '@/types/workout';
import { FaPlus, FaBookmark } from 'react-icons/fa';

const getSingleWorkout = async (id: string) => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const data = await response.json();
  return data;
};

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const workout: Workout = await getSingleWorkout(id);

  return (
    <main className="min-h-screen bg-[#0d0e12] text-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <div className="w-full h-[450px] md:h-[550px] relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              {workout.name}
            </h1>
            <p className="text-zinc-400 text-sm">
              {workout.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black text-xs font-black px-3.5 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="bg-[#13151b] border border-zinc-800/80 rounded-2xl p-5 divide-y divide-zinc-800/60 text-xs">
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Equipment</span>
              <span className="text-zinc-200 font-medium">{workout.equipment}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Difficulty</span>
              <span className="text-zinc-200 font-medium">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Sets</span>
              <span className="text-zinc-200 font-medium">{workout.sets}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Reps</span>
              <span className="text-zinc-200 font-medium">{workout.reps}</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Duration</span>
              <span className="text-zinc-200 font-medium">{workout.duration} min</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Calories</span>
              <span className="text-zinc-200 font-medium">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-zinc-500 font-semibold">Rating</span>
              <span className="text-zinc-200 font-medium">{workout.rating}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-black text-white ">
              INSTRUCTIONS
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs text-zinc-400 font-medium">
              {workout.instructions?.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button className="flex items-center justify-center gap-2 bg-[#ccff00] text-black font-bold text-xs px-5 py-3 rounded-xl">
              <FaPlus className="text-xs" />
              <span>Add to today's plan</span>
            </button>

            <button className="flex items-center justify-center gap-2 bg-[#1b1e26] text-zinc-300 font-bold text-xs px-5 py-3 rounded-xl border border-zinc-800">
              <FaBookmark className="text-xs text-zinc-400" />
              <span>Save for later</span>
            </button>
          </div>

        </div>

      </div>
    </main>
  );
};

export default DetailPage;