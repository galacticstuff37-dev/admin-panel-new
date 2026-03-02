import React from 'react';
import type { StatCard } from '../../types/admin';

type StatsCardsProps = {
  cards: StatCard[];
};

export function StatsCards({ cards }: StatsCardsProps) {
  return (
    <div className="flex flex-wrap gap-2 font-sofia font-bold uppercase w-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white-3 flex flex-1 min-w-[140px] flex-col gap-2 p-5 rounded-basic shadow-sm"
          data-name="Widget"
        >
          <p className="text-base text-white-60 shrink-0">{card.label}</p>
          <p className="text-h3 text-white shrink-0">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
