import React from 'react';
import Image from 'next/image';

interface NavBarProps {
  planCount?: number;
  savedCount?: number;
}

const NavBar = ({ planCount = 0, savedCount = 0 }: NavBarProps) => {
  return (
    <header className="w-full bg-[#0a0c10] border-b border-zinc-800/80 py-4">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-2 font-bold text-xl text-white whitespace-nowrap">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain shrink-0"
          />
          <span>FITLOG</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-sm rounded-full bg-[#1d2600] text-[#ccff00] border-none px-5">
            Workouts
          </button>
          <button className="btn btn-sm btn-ghost rounded-full text-zinc-400 hover:text-white px-5">
            My Plan
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-300 font-medium text-xs">Plan</span>
            <span className="bg-[#ccff00] text-black font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs">
              {planCount}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-300 font-medium text-xs">Saved</span>
            <span className="border border-zinc-600 text-white font-bold h-6 w-6 rounded-full flex items-center justify-center text-xs">
              {savedCount}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default NavBar;