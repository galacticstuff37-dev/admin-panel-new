import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { StatsCards } from './StatsCards';
import { FilterBar } from './FilterBar';
import { EmptyState } from './EmptyState';
import type { StatCard } from '../../types/admin';

const PERIOD_LABEL = '24 AUGUST 2025–24 AUGUST 2026';

const STATS_CARDS: StatCard[] = [
  { label: 'DEPOSITS', value: 0 },
  { label: 'WITHDRAW', value: 0 },
  { label: 'BONUSES', value: 0 },
];

function MenuToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="lg:hidden fixed top-4 left-4 z-20 bg-sidebar-bg border border-contour p-2 rounded-basic text-white"
      aria-label="Open menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
      </svg>
    </button>
  );
}

export function WalletTransactions() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-main-bg flex items-stretch relative min-h-screen w-full font-sofia">
      <MenuToggle onClick={() => setSidebarOpen(true)} />
      <div
        className={`fixed inset-0 z-10 bg-black/50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden
      />
      <div className={`lg:relative lg:block fixed inset-y-0 left-0 z-10 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} activeMenuId="wallet-transaction" />
      </div>

      <main className="flex flex-1 flex-col gap-12 h-full min-h-0 min-w-0 pb-16 w-full pt-14 lg:pt-0">
        <div className="border-contour border-b border-solid flex h-16 items-center justify-between px-6 py-3 shrink-0 w-full">
          <div className="flex flex-1 gap-0.5 items-center min-h-0 min-w-0">
            <span className="font-sofia font-bold text-base text-black-60 uppercase">ALL CASINOS</span>
            <span className="text-black-60 mx-1">/</span>
            <span className="font-sofia font-bold text-base text-black-60 uppercase">WALLET TRANSACTIONS</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-10 items-start min-h-0 min-w-0 px-4 sm:px-6 lg:px-10 w-full">
          <div className="flex flex-col gap-6 items-start shrink-0 w-full">
            <h1 className="font-sofia font-bold text-h2 text-white uppercase leading-none">
              WALLET TRANSACTIONS
            </h1>

            <div className="inline-flex items-center px-4 py-2 rounded-basic-4 bg-white-3 border border-contour shrink-0">
              <span className="font-sofia font-bold text-base text-white-80 uppercase whitespace-nowrap">
                {PERIOD_LABEL}
              </span>
            </div>

            <StatsCards cards={STATS_CARDS} />

            <FilterBar />
          </div>

          <div className="flex flex-1 flex-col min-h-0 w-full">
            <EmptyState />
          </div>
        </div>
      </main>
    </div>
  );
}
