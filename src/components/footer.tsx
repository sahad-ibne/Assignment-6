import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0e12] border-t border-zinc-800/60 py-8 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={24} 
            height={24} 
            className="object-contain"
          />
          <span className="text-white font-extrabold">
            FITLOG
          </span>
        </div>
        <p className="text-zinc-500 text-xs text-center md:text-right">
          @ 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}