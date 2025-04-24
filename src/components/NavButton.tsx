import React from 'react';
export function NavButton({
  children
}) {
  return <button className="h-9 min-w-[64px] px-4 inline-grid items-center justify-center relative cursor-pointer select-none text-[#1F2426] font-semibold text-sm tracking-[1.25px] rounded transition-all duration-[0.28s] ease-[cubic-bezier(0.4,0,0.2,1)]">
      <span className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 ease-in-out pointer-events-none rounded"></span>
      <span className="absolute inset-0 pointer-events-none"></span>
      <span className="flex items-center justify-center whitespace-nowrap transition-all duration-200">
        {children}
      </span>
      <span className="absolute inset-0 border-2 border-transparent opacity-0 transition-opacity duration-200 pointer-events-none rounded"></span>
    </button>;
}