import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import type { BalanceCard, UserInfoRow, VerificationItem } from '../../types/player';

// ----- UserHeader -----
type UserHeaderProps = {
  email: string;
  userId: string;
  activeTab: 'summary' | 'transactions' | 'wallet-transaction';
  onTabChange: (tab: 'summary' | 'transactions' | 'wallet-transaction') => void;
};

function IconArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}

export function UserHeader({ email, userId, activeTab, onTabChange }: UserHeaderProps) {
  const tabs = [
    { id: 'summary' as const, label: 'SUMMARY' },
    { id: 'transactions' as const, label: 'TRANSACTIONS' },
    { id: 'wallet-transaction' as const, label: 'WALLET TRANSACTION' },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-4 h-15 items-center w-full">
        <button type="button" className="flex gap-2.5 items-center text-white hover:opacity-80 transition-opacity" aria-label="Back">
          <IconArrowLeft className="shrink-0 w-6 h-6" />
          <h1 className="font-sofia font-bold text-h2 text-white uppercase leading-none flex-1 min-w-0 truncate">
            {email}
          </h1>
        </button>
        <span className="font-sofia font-bold text-base text-white-60 uppercase shrink-0">ID: {userId}</span>
        <button
          type="button"
          className="bg-primary flex gap-1 h-10 items-center justify-center px-3 rounded-basic shrink-0 text-white"
          aria-label="Refresh"
        >
          <IconRefresh className="w-6 h-6" />
          <span className="font-sofia font-bold text-base uppercase">Refresh</span>
        </button>
      </div>

      <div className="border-contour border-b border-solid flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`font-sofia font-bold text-base uppercase h-10 px-2 shrink-0 transition-colors ${
              activeTab === tab.id
                ? 'text-white border-b-2 border-primary-high'
                : 'text-white-80 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ----- BalanceCards -----
type BalanceCardsProps = {
  cards: BalanceCard[];
};

export function BalanceCards({ cards }: BalanceCardsProps) {
  return (
    <div className="flex flex-wrap gap-2 font-sofia w-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white-3 flex flex-1 min-w-[140px] flex-col gap-2 p-5 rounded-basic border border-contour"
        >
          <p className="text-base text-white-60 font-bold uppercase shrink-0">{card.label}</p>
          <p className="text-h3 text-white font-bold shrink-0">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

// ----- NewsletterSubscription -----
type NewsletterSubscriptionProps = {
  enabled: boolean;
  onToggle: (value: boolean) => void;
};

export function NewsletterSubscription({ enabled, onToggle }: NewsletterSubscriptionProps) {
  return (
    <div className="flex gap-3 items-center w-full">
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onToggle(!enabled)}
        className={`relative h-[18px] w-8 shrink-0 rounded-full transition-colors ${
          enabled ? 'bg-primary' : 'bg-black-40'
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            enabled ? 'left-4 translate-x-[-2px]' : 'left-0.5'
          }`}
        />
      </button>
      <span className="font-sofia font-bold text-base text-black-40 uppercase">
        RECEIVING MARKETING NEWSLETTERS:
      </span>
    </div>
  );
}

// ----- UserInfoGrid -----
type UserInfoGridProps = {
  leftColumn: UserInfoRow[];
  rightColumn: UserInfoRow[];
};

export function UserInfoGrid({ leftColumn, rightColumn }: UserInfoGridProps) {
  const renderColumn = (rows: UserInfoRow[]) => (
    <div className="flex flex-1 min-w-0 flex-col">
      {rows.map((row) => (
        <div
          key={row.label}
          className="border-contour border-b border-solid flex items-start justify-between py-3"
        >
          <span className="font-sofia font-bold text-base text-black-40 uppercase shrink-0">{row.label}:</span>
          <span className="font-sofia font-bold text-base text-white text-right break-all">{row.value}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full font-sofia font-bold text-base uppercase">
      {renderColumn(leftColumn)}
      {renderColumn(rightColumn)}
    </div>
  );
}

// ----- VerificationStatus -----
type VerificationStatusProps = {
  kycStatus: string;
  items: VerificationItem[];
};

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 5l-9 9-4-4" />
    </svg>
  );
}

export function VerificationStatus({ kycStatus, items }: VerificationStatusProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-3 items-center">
        <span className="font-sofia font-bold text-base text-white uppercase">KYC</span>
        <span className="bg-positive px-2 py-1 rounded-basic-4 font-sofia font-bold text-mini text-white uppercase">
          {kycStatus}
        </span>
      </div>
      <div className="flex flex-col gap-0 w-full">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-contour border-b border-solid flex items-center justify-between py-3"
          >
            <span className="font-sofia font-bold text-base text-black-40 uppercase">{item.label}:</span>
            <div className="flex gap-2 items-center">
              <IconCheck className="w-5 h-5 text-positive shrink-0" />
              <span className="font-sofia font-bold text-base text-positive uppercase">{item.status}</span>
              {item.date && (
                <span className="font-sofia font-bold text-base text-white">DATE: {item.date}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- PlayerProfile (main) -----
const BALANCE_CARDS: BalanceCard[] = [
  { label: 'ACCOUNT BALANCE', value: '100 000' },
  { label: 'BONUS BALANCE', value: '1 000' },
  { label: 'BONUS BALANCE', value: '3%' },
];

const LEFT_COLUMN: UserInfoRow[] = [
  { label: 'ID', value: '4545322232' },
  { label: 'CONTACT NUMBER', value: '+7 984 344 23 32' },
  { label: 'EMAIL', value: 'pankich@gmail.com' },
  { label: 'COUNTRY', value: 'CANADA' },
];

const RIGHT_COLUMN: UserInfoRow[] = [
  { label: 'NAME', value: 'PAUL' },
  { label: 'BIRTH DATE', value: '04/02/2021' },
  { label: 'SURNAME', value: 'KLIMOV' },
  { label: 'REGISTER DATE', value: '04/02/2021' },
];

const VERIFICATION_ITEMS: VerificationItem[] = [
  { label: 'DOCUMENT VERIFICATION', status: 'YES', date: '04/02/2021' },
  { label: 'SELFIE VERIFICATION', status: 'YES' },
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

export function PlayerProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'transactions' | 'wallet-transaction'>('summary');
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);

  return (
    <div className="bg-main-bg flex items-stretch relative min-h-screen w-full font-sofia">
      <MenuToggle onClick={() => setSidebarOpen(true)} />
      <div
        className={`fixed inset-0 z-10 bg-black/50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden
      />
      <div className={`lg:relative lg:block fixed inset-y-0 left-0 z-10 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} activeMenuId="players" />
      </div>

      <main className="flex flex-1 flex-col gap-12 h-full min-h-0 min-w-0 pb-16 w-full pt-14 lg:pt-0">
        <div className="border-contour border-b border-solid flex h-16 items-center justify-between px-6 py-3 shrink-0 w-full">
          <div className="flex flex-1 gap-0.5 items-center min-h-0 min-w-0">
            <span className="font-sofia font-bold text-base text-black-60 uppercase">ALL CASINOS</span>
            <span className="text-black-60 mx-1">/</span>
            <span className="font-sofia font-bold text-base text-black-60 uppercase">PLAYERS</span>
            <span className="text-black-60 mx-1">/</span>
            <span className="font-sofia font-bold text-base text-black-60 uppercase">CURRENT PLAYER</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-10 items-start min-h-0 min-w-0 px-4 sm:px-6 lg:px-10 w-full overflow-auto">
          <UserHeader
            email="johndoe@gmail.com"
            userId="4545322232"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {activeTab === 'summary' && (
            <>
              <BalanceCards cards={BALANCE_CARDS} />
              <NewsletterSubscription enabled={newsletterEnabled} onToggle={setNewsletterEnabled} />
              <UserInfoGrid leftColumn={LEFT_COLUMN} rightColumn={RIGHT_COLUMN} />
              <VerificationStatus kycStatus="VERIFIED" items={VERIFICATION_ITEMS} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
