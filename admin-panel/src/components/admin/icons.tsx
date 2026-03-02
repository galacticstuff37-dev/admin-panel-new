import React from 'react';

const iconClass = 'shrink-0 w-5 h-5 text-current';
const vb = '0 0 20 20';

/** Revenue — bar chart */
function IconRevenue({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="currentColor" fillOpacity={0.8} aria-hidden>
      <path d="M2.5 1.75C2.91421 1.75 3.25 2.08579 3.25 2.5V15.833C3.25 16.0761 3.34665 16.3095 3.51855 16.4814C3.69046 16.6534 3.92388 16.75 4.16699 16.75H17.5C17.9142 16.75 18.25 17.0858 18.25 17.5C18.25 17.9142 17.9142 18.25 17.5 18.25H4.16699C3.52605 18.25 2.91122 17.9952 2.45801 17.542C2.00479 17.0888 1.75 16.4739 1.75 15.833V2.5C1.75 2.08579 2.08579 1.75 2.5 1.75ZM8.33301 5.91699C9.20735 5.91699 9.91584 6.6257 9.91602 7.5V13.334C9.91566 14.2081 9.20724 14.917 8.33301 14.917H6.66602C5.79208 14.9166 5.08336 14.2079 5.08301 13.334V7.5C5.08318 6.62592 5.79197 5.91734 6.66602 5.91699H8.33301ZM15 3.41699C15.8743 3.41699 16.5828 4.1257 16.583 5V13.334C16.5827 14.2081 15.8742 14.917 15 14.917H13.333C12.4589 14.9168 11.7504 14.208 11.75 13.334V5C11.7502 4.12581 12.4588 3.41717 13.333 3.41699H15Z" />
    </svg>
  );
}

/** Players — two silhouettes */
function IconPlayers({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7" cy="5.5" r="2.5" />
      <path d="M2 17c0-2.2 2.2-4 5-4s5 1.8 5 4" />
      <circle cx="13" cy="5.5" r="2.5" />
      <path d="M8 17c0-2.2 2.2-4 5-4s5 1.8 5 4" />
    </svg>
  );
}

/** Transactions — arrows in/out */
function IconTransactions({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 8l4-4 4 4M8 4v8" />
      <path d="M16 12l-4 4-4-4M12 16V8" />
    </svg>
  );
}

/** Wallet */
function IconWallet({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 9h16" />
      <path d="M14 13h2" />
    </svg>
  );
}

/** Manage — gear */
function IconManage({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2M10 16v2M18 10h-2M4 10H2M15.66 4.34l-1.42 1.42M5.76 14.24l-1.42 1.42M15.66 15.66l-1.42-1.42M5.76 5.76L4.34 4.34" />
    </svg>
  );
}

/** CRM — network nodes */
function IconCrm({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="5" r="2" />
      <circle cx="5" cy="14" r="2" />
      <circle cx="15" cy="14" r="2" />
      <path d="M10 7v2.5M7.5 12l2-2.5M12.5 12l-2-2.5" />
    </svg>
  );
}

/** Team — three people */
function IconTeam({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="5" r="2" />
      <path d="M2 16c0-2 1.8-3.5 4-3.5" />
      <circle cx="10" cy="5" r="2" />
      <path d="M6 16c0-2 1.8-3.5 4-3.5" />
      <circle cx="14" cy="5" r="2" />
      <path d="M10 16c0-2 1.8-3.5 4-3.5" />
    </svg>
  );
}

/** Compliance — document with check */
function IconCompliance({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 006 18h8a1.5 1.5 0 001.5-1.5V5.5L14 2z" />
      <path d="M14 2v3.5h3.5M8 11l2 2 4-4" />
    </svg>
  );
}

/** Support — question in circle */
function IconSupport({ className }: { className?: string }) {
  return (
    <svg className={className || iconClass} viewBox={vb} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="7.5" />
      <path d="M8 8.5a2 2 0 013.2 1.6c0 1.5-2 2-2 2M10 14h.01" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className || 'shrink-0 w-6 h-6 text-current'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
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

export { IconChevronDown, IconClose };
