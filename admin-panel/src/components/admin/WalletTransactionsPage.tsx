import React from 'react';
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

export function WalletTransactionsPage() {
  return (
    <>
      <div className="border-contour border-b border-solid flex h-16 items-center justify-between px-6 py-3 shrink-0 w-full">
        <div className="flex flex-1 gap-0.5 items-center min-h-0 min-w-0">
          <span className="font-sofia font-bold text-base text-black-60 uppercase">ALL CASINOS</span>
          <span className="text-black-60 mx-1">/</span>
          <span className="font-sofia font-bold text-base text-black-60 uppercase">WALLET TRANSACTIONS</span>
        </div>
      </div>

      <main className="flex flex-1 flex-col gap-12 h-full min-h-0 min-w-0 pb-16 w-full">
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
    </>
  );
}
