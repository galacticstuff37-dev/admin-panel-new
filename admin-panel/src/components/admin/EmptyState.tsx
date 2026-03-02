import React from 'react';

function EmptyIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="20" y="30" width="80" height="60" rx="4" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
      <path d="M35 50H85M35 60H75M35 70H65" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="60" cy="85" r="8" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function EmptyState() {
  return (
    <div className="border border-contour border-solid flex flex-col gap-4 items-center justify-center min-h-[280px] p-10 rounded-basic w-full bg-white-3">
      <EmptyIllustration className="shrink-0 text-white-60" />
      <p className="font-sofia font-bold text-base text-white-80 uppercase text-center">
        NO TRANSACTIONS YET
      </p>
      <p className="font-sofia text-sm text-black-40 text-center max-w-sm">
        Wallet transactions will appear here when available.
      </p>
    </div>
  );
}
