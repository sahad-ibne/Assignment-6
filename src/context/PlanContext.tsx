'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { Workout } from '@/types/workout';

interface PlanContextType {
  todayPlan: Workout[];
  savedPlan: Workout[];
  addToTodayPlan: (workout: Workout) => void;
  addToSavedPlan: (workout: Workout) => void;
  removeFromTodayPlan: (id: number) => void;
  removeFromSavedPlan: (id: number) => void;
}

export const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedPlan, setSavedPlan] = useState<Workout[]>([]);

  const addToTodayPlan = (workout: Workout) => {
    const isExist = todayPlan.some((item) => item.id === workout.id);
    if (!isExist) {
      setTodayPlan([...todayPlan, workout]);
    }
  };

  const addToSavedPlan = (workout: Workout) => {
    const isExist = savedPlan.some((item) => item.id === workout.id);
    if (!isExist) {
      setSavedPlan([...savedPlan, workout]);
    }
  };

  const removeFromTodayPlan = (id:number) => {
    setTodayPlan(todayPlan.filter((item) => item.id !== id));
  };

  const removeFromSavedPlan = (id:number) => {
    setSavedPlan(savedPlan.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedPlan,
        addToTodayPlan,
        addToSavedPlan,
        removeFromTodayPlan,
        removeFromSavedPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};