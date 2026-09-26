'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlanContext } from '@/context/PlanContext';

const NavBar = () => {
  const pathname = usePathname();
  const context = useContext(PlanContext);

  const planCount = context?.todayPlan.length ?? 0;
  const savedCount = context?.savedPlan.length ?? 0;

  return (
    <header className="w-full bg-[#0a0c10] border-b border-zinc-800/80 py-3 px-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 font-bold text-lg text-white shrink-0">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={28} 
            height={28} 
            className="w-7 h-7 object-contain shrink-0"
          />
          <span className="hidden sm:inline">FITLOG</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`btn btn-xs sm:btn-sm rounded-full px-3 sm:px-5 flex items-center justify-center text-xs ${
              pathname === '/'
                ? 'bg-[#1d2600] text-[#ccff00] border-none'
                : 'btn-ghost text-zinc-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`btn btn-xs sm:btn-sm rounded-full px-3 sm:px-5 flex items-center justify-center text-xs whitespace-nowrap ${
              pathname === '/my-plan'
                ? 'bg-[#1d2600] text-[#ccff00] border-none'
                : 'btn-ghost text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="flex items-center gap-1 text-xs">
            <span className="text-zinc-300 font-medium text-[10px] sm:text-xs">Plan</span>
            <span className="bg-[#ccff00] text-black font-bold h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs">
              {planCount}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-zinc-300 font-medium text-[10px] sm:text-xs">Saved</span>
            <span className="border border-zinc-600 text-white font-bold h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs">
              {savedCount}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default NavBar;