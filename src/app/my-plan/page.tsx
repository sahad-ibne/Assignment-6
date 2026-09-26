'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlanContext } from '@/context/PlanContext';
import { FaRegClock, FaFire, FaRegStar, FaCheck, FaTimes, FaChevronDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

  const context = useContext(PlanContext);

  if (!context) return null;

  const { todayPlan, savedPlan, removeFromTodayPlan, removeFromSavedPlan } = context;

  const currentList = activeTab === 'today' ? todayPlan : savedPlan;

  const sortedList = [...currentList].sort((a: any, b: any) => {
    if (sortBy === 'duration') {
      const durA = Number(a.duration || a.time || 0);
      const durB = Number(b.duration || b.time || 0);
      return durB - durA;
    }
    if (sortBy === 'calories') {
      const calA = Number(a.caloriesBurned ?? a.calories ?? a.kcal ?? 0);
      const calB = Number(b.caloriesBurned ?? b.calories ?? b.kcal ?? 0);
      return calB - calA;
    }
    if (sortBy === 'rating') {
      const rateA = Number(a.rating || a.rate || 0);
      const rateB = Number(b.rating || b.rate || 0);
      return rateB - rateA;
    }
    return 0;
  });

  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc: number, item: any) => acc + Number(item.duration || item.time || 0),
    0
  );
  const totalCalories = currentList.reduce(
    (acc: number, item: any) => acc + Number(item.caloriesBurned ?? item.calories ?? item.kcal ?? 0),
    0
  );

  const handleRemove = (id: number) => {
    if (activeTab === 'today') {
      removeFromTodayPlan(id);
      toast.success("Removed from today's plan");
    } else {
      removeFromSavedPlan(id);
      toast.success("Removed from saved");
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0e12] text-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            MY PLAN
          </h1>
          <p className="text-zinc-400 text-sm">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#13151b] border border-zinc-800/80 rounded-2xl p-6">
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Exercises</p>
            <h2 className="text-3xl font-black text-[#ccff00] mt-1">{totalExercises}</h2>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Minutes</p>
            <h2 className="text-3xl font-black text-white mt-1">{totalMinutes}</h2>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-semibold">Calories</p>
            <h2 className="text-3xl font-black text-white mt-1">{totalCalories}</h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div className="flex bg-[#13151b] p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('today')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'today'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Today's Plan ({todayPlan.length})
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'saved'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Saved ({savedPlan.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-400">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                className="appearance-none bg-[#13151b] border border-zinc-700/80 text-white text-xs font-semibold py-2 pl-4 pr-9 rounded-xl focus:outline-none focus:border-[#ccff00] cursor-pointer"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 text-[10px] pointer-events-none" />
            </div>
          </div>
        </div>
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-zinc-800/80 rounded-3xl p-16 text-center space-y-4 my-8">
            <h3 className="text-xl md:text-2xl font-black">
              NOTHING HERE YET
            </h3>
            <p className="text-zinc-400 text-xs max-w-sm mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#ccff00] hover:bg-[#bce600] text-black font-bold text-xs px-6 py-3 rounded-full transition-colors"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((item: any) => {
              const displayName = item.name || item.title || 'Exercise';
              const displayCategory = item.equipment || item.category || 'Exercise';
              const displayDuration = item.duration || item.time || 0;
              const displayCalories = item.caloriesBurned ?? item.calories ?? item.kcal ?? 0;
              const displayRating = item.rating || item.rate || 0;

              return (
                <div
                  key={item.id}
                  className="bg-[#13151b] border border-zinc-800/80 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                      <Image
                        src={item.image || '/placeholder.png'}
                        alt={displayName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-base">
                        {displayName}
                      </h4>
                      <p className="text-zinc-500 text-xs">{displayCategory}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex items-center gap-4 text-zinc-400 text-xs">
                      <span className="flex items-center gap-1">
                        <FaRegClock /> {displayDuration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <FaFire /> {displayCalories} kcal
                      </span>
                      {displayRating > 0 && (
                        <span className="flex items-center gap-1">
                          <FaRegStar /> {displayRating}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/DetailPage/${item.id}`}
                        className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-3 py-2 rounded-lg"
                      >
                        View Details
                      </Link>

                      {activeTab === 'today' && (
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="flex items-center gap-1 text-xs bg-[#ccff00] text-black font-bold px-3 py-2 rounded-lg hover:bg-[#bce600]"
                        >
                          <FaCheck className="text-[10px]" /> Mark as Done
                        </button>
                      )}

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}