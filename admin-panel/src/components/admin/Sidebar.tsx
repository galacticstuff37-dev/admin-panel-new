import React from 'react';
import type { SidebarMenuItem } from '../../types/admin';

const MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'revenue', label: 'REVENUE' },
  { id: 'players', label: 'PLAYERS' },
  { id: 'transactions', label: 'TRANSACTIONS' },
  { id: 'wallet-transaction', label: 'WALLET TRANSACTION', active: true },
  { id: 'manage', label: 'MANAGE' },
  { id: 'crm', label: 'CRM' },
  { id: 'team', label: 'TEAM' },
  { id: 'compliance', label: 'COMPLIANCE' },
  { id: 'support', label: 'SUPPORT' },
];

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SidebarProps = {
  onClose?: () => void;
};

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside
      className="bg-sidebar-bg relative flex flex-col h-full overflow-hidden p-6 shrink-0 w-[280px] font-sofia font-bold"
      data-name="Menu"
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 text-white p-1 rounded"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      )}
      <div className="flex flex-col items-start pb-8 w-full shrink-0">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="bg-primary/80 h-[19px] rounded-sm w-3.5 shrink-0" />
          <div className="bg-primary-high h-[19px] rounded-sm w-3.5 shrink-0" />
          <p className="text-admin-label text-white-60 uppercase whitespace-nowrap">
            MAIN CARD / ADMIN PANEL
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-end w-full shrink-0 flex-1 min-h-0">
        <div className="bg-white-3 border border-white-3 flex gap-0.5 h-12 items-center px-3 rounded-basic w-full shrink-0">
          <span className="flex-1 font-sofia font-bold text-base text-white uppercase">ALL CASINOS</span>
          <ChevronDown className="shrink-0 w-6 h-6 text-white-80" />
        </div>

        <nav className="flex flex-col gap-0.5 items-start w-full shrink-0">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`flex gap-3 h-12 items-center px-3 py-2 rounded-basic w-full shrink-0 transition-colors ${
                item.active
                  ? 'bg-primary-20 border border-primary text-white'
                  : 'border border-transparent text-white-80 hover:bg-white-3'
              }`}
            >
              <MenuIcon className="shrink-0 w-5 h-5 text-current" />
              <span className="font-sofia font-bold text-base leading-normal uppercase whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
