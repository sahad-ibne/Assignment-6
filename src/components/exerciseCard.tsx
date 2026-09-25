import React from 'react';
import Image from 'next/image';
import { FaRegClock, FaFire, FaRegStar } from 'react-icons/fa';
import { Workout } from '@/types/workout';

interface ExerciseCardProps {
    workout: Workout;
}

const ExerciseCard = ({ workout }: ExerciseCardProps) => {
    return (
        <div className="bg-[#13151b] rounded-2xl border border-zinc-800/60 overflow-hidden flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-200">
            <div className="relative w-full h-[300px] bg-zinc-900">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="bg-[#ccff00] text-black text-[11px] font-black px-3 py-1 rounded-full inline-block"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-white font-extrabold text-xl">
                            {workout.name}
                        </h3>
                        <p className="text-zinc-500 text-xs mt-1 font-normal">
                            {workout.equipment}
                        </p>
                    </div>
                </div>
                <div className="border-t border-zinc-800/80 pt-3 flex items-center gap-5 text-zinc-400 text-xs font-normal">

                    <div className="flex items-center gap-1.5">
                        <FaRegClock className="text-zinc-400 text-xs" />
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FaFire className="text-zinc-400 text-xs" />
                        <span>{workout.caloriesBurned} kcal</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <FaRegStar className="text-zinc-400 text-xs" />
                        <span>{workout.rating}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ExerciseCard;