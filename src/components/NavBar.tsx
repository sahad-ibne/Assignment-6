import React from 'react';
import Image from 'next/image';

interface NavBarProps {
  planCount?: number;
  savedCount?: number;
}

const NavBar = ({ planCount = 0, savedCount = 0 }: NavBarProps) => {
  return (
    <div className="navbar text-base-content border-b px-4 bg-black">
      <div className="navbar-start">
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
          />
          <span>FITLOG</span>
        </div>
      </div>
      <div className="navbar-center flex gap-2">
        <button className="btn btn-sm rounded-full bg-[#1d2600] text-[#ccff00] border-none">
          Workouts
        </button>
        <button className="btn btn-sm btn-ghost rounded-full text-zinc-400">
          My Plan
        </button>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-300 font-medium">Plan</span>
          <span className="badge bg-[#ccff00] text-black font-bold border-none h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
            {planCount}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-zinc-300 font-medium">Saved</span>
          <span className="badge badge-outline text-white border-zinc-600 font-bold h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
            {savedCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;