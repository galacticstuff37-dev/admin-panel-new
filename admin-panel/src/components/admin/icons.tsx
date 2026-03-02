import React from 'react';

const iconClass = 'shrink-0 w-5 h-5 text-current';
const viewBox = '0 0 20 20';

/** Revenue — bar chart / trend */
export function IconRevenue({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 14v3M7 10v7M11 6v11M15 3v14M19 8v9" />
    </svg>
  );
}

/** Players — two user silhouettes */
export function IconPlayers({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7" cy="5.5" r="2.5" />
      <path d="M2 17c0-2.2 2.2-4 5-4s5 1.8 5 4" />
      <circle cx="13" cy="5.5" r="2.5" />
      <path d="M8 17c0-2.2 2.2-4 5-4s5 1.8 5 4" />
    </svg>
  );
}

/** Transactions — two arrows (in/out) */
export function IconTransactions({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 8l4-4 4 4M8 4v8" />
      <path d="M16 12l-4 4-4-4M12 16V8" />
    </svg>
  );
}

/** Wallet transaction — wallet / card */
export function IconWallet({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 9h16" />
      <path d="M14 13h2" />
    </svg>
  );
}

/** MANAGE — gear / settings */
export function IconManage({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2M10 16v2M18 10h-2M4 10H2M15.66 4.34l-1.42 1.42M5.76 14.24l-1.42 1.42M15.66 15.66l-1.42-1.42M5.76 5.76L4.34 4.34" />
    </svg>
  );
}

/** CRM — network / connected nodes */
export function IconCrm({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="5" r="2" />
      <circle cx="5" cy="14" r="2" />
      <circle cx="15" cy="14" r="2" />
      <path d="M10 7v2.5M7.5 12l2-2.5M12.5 12l-2-2.5" />
    </svg>
  );
}

/** TEAM — three people */
export function IconTeam({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="5" r="2" />
      <path d="M2 16c0-2 1.8-3.5 4-3.5" />
      <circle cx="10" cy="5" r="2" />
      <path d="M6 16c0-2 1.8-3.5 4-3.5" />
      <circle cx="14" cy="5" r="2" />
      <path d="M10 16c0-2 1.8-3.5 4-3.5" />
    </svg>
  );
}

/** Compliance — document with checkmark */
export function IconCompliance({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 006 18h8a1.5 1.5 0 001.5-1.5V5.5L14 2z" />
      <path d="M14 2v3.5h3.5M8 11l2 2 4-4" />
    </svg>
  );
}

/** SUPPORT — question in circle */
export function IconSupport({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M8 8.5a2 2 0 013.2 1.6c0 1.5-2 2-2 2M10 14h.01" />
    </svg>
  );
}

/** Chevron down — dropdown */
export function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className || 'shrink-0 w-6 h-6 text-current'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Close — mobile menu close */
export function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export const MENU_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  revenue: IconRevenue,
  players: IconPlayers,
  transactions: IconTransactions,
  'wallet-transaction': IconWallet,
  manage: IconManage,
  crm: IconCrm,
  team: IconTeam,
  compliance: IconCompliance,
  support: IconSupport,
};
