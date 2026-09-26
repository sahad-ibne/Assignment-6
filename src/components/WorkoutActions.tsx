'use client';

import React, { useContext } from 'react';
import { Workout } from '@/types/workout';
import { PlanContext } from '@/context/PlanContext';
import { FaPlus, FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout }: WorkoutActionsProps) {
  const context = useContext(PlanContext);

  if (!context) return null;

  const { todayPlan, savedPlan, addToTodayPlan, addToSavedPlan } = context;

  const handleTodayPlanClick = () => {
    const isExist = todayPlan.some((item) => item.id === workout.id);
    if (isExist) {
      toast.info("Already in today's plan");
    } else {
      addToTodayPlan(workout);
      toast.success("Added to today's plan");
    }
  };

  const handleSavedPlanClick = () => {
    const isExist = savedPlan.some((item) => item.id === workout.id);
    if (isExist) {
      toast.info("Already saved");
    } else {
      addToSavedPlan(workout);
      toast.success("Saved for later");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-4">
      <button
        onClick={handleTodayPlanClick}
        className="flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#bce600] transition-colors text-black font-bold text-xs px-5 py-3 rounded-xl cursor-pointer"
      >
        <FaPlus className="text-xs" />
        <span>Add to today's plan</span>
      </button>

      <button
        onClick={handleSavedPlanClick}
        className="flex items-center justify-center gap-2 bg-[#1b1e26] hover:bg-[#252934] transition-colors text-zinc-300 font-bold text-xs px-5 py-3 rounded-xl border border-zinc-800 cursor-pointer"
      >
        <FaBookmark className="text-xs text-zinc-400" />
        <span>Save for later</span>
      </button>
    </div>
  );
}