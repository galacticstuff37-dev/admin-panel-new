import React from 'react';

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function FilterBar() {
  return (
    <div className="flex flex-wrap gap-2 items-center w-full font-sofia font-bold text-base uppercase">
      <button
        type="button"
        className="bg-white-3 border border-contour flex gap-2 h-10 items-center px-4 py-2 rounded-basic shrink-0 text-white-80 hover:bg-white/5 hover:text-white transition-colors"
      >
        <SearchIcon className="w-[18px] h-[18px]" />
        <span>SEARCH</span>
      </button>

      <button
        type="button"
        className="bg-white-3 border border-contour flex gap-2 h-10 items-center px-4 py-2 rounded-basic shrink-0 text-white-80 hover:bg-white/5 hover:text-white transition-colors"
      >
        <span>BY NAME</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <button
        type="button"
        className="bg-white-3 border border-contour flex gap-2 h-10 items-center px-4 py-2 rounded-basic shrink-0 text-white-80 hover:bg-white/5 hover:text-white transition-colors"
      >
        <span>DEPOSIT + WITHDRAW</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <button
        type="button"
        className="bg-white-3 border border-contour flex gap-2 h-10 items-center px-4 py-2 rounded-basic shrink-0 text-white-80 hover:bg-white/5 hover:text-white transition-colors"
      >
        <span>FIAT+CRYPTO</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <button
        type="button"
        className="bg-white-3 border border-contour flex h-10 items-center px-4 py-2 rounded-basic shrink-0 text-white-80 hover:bg-white/5 hover:text-white transition-colors"
      >
        BONUSES
      </button>
    </div>
  );
}
