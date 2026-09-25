import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="w-full bg-[#0a0c10] py-6">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="bg-[#12141a] rounded-3xl p-8 md:p-12 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex-1 space-y-6 max-w-2xl">
                        <p className="text-[#ccff00] font-bold text-xs md:text-sm tracking-wide">
                            WORKOUT LIBRARY
                        </p>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-none">
                            TRAIN WITH INTENT. <br /> LOG EVERY SET.
                        </h1>

                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                        </p>

                        <div>
                            <a
                                href="#library"
                                className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold border-none rounded-lg px-6 text-sm tracking-wide inline-flex items-center gap-2"
                            >
                                BROWSE WORKOUTS
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end w-full max-w-md">
                        <div className="relative w-full h-[300px] md:h-[380px]">
                            <Image
                                src="/banner.png"
                                alt="Gym"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;