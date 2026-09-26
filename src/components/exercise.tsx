import React from 'react';
import { Workout } from '@/types/workout';
import ExerciseCard from './exerciseCard';

const getExercises = async (): Promise<Workout[]> => {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
};

const Exercise = async () => {
    const exercises = await getExercises();

    return (
        <section id="library" className="w-full bg-[#0d0e12] py-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-8">
                <div className="mb-8 space-y-1">
                    <h2 className="text-3xl font-black text-white">
                        THE LIBRARY
                    </h2>
                    <p className="text-zinc-400 text-sm font-medium">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exercises.map((item) => (
                        <ExerciseCard key={item.id} workout={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Exercise;