import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { BalanceCard, UserInfoRow, VerificationItem } from '../../types/player';

const MOCK: Record<string, { email: string; balanceCards: BalanceCard[]; leftColumn: UserInfoRow[]; rightColumn: UserInfoRow[]; verificationItems: VerificationItem[] }> = {
  '4545322232': {
    email: 'johndoe@gmail.com',
    balanceCards: [
      { label: 'ACCOUNT BALANCE', value: '100 000' },
      { label: 'BONUS BALANCE', value: '1 000' },
      { label: 'BONUS BALANCE', value: '3%' },
    ],
    leftColumn: [
      { label: 'ID', value: '4545322232' },
      { label: 'CONTACT NUMBER', value: '+7 984 344 23 32' },
      { label: 'EMAIL', value: 'pankich@gmail.com' },
      { label: 'COUNTRY', value: 'CANADA' },
    ],
    rightColumn: [
      { label: 'NAME', value: 'PAUL' },
      { label: 'BIRTH DATE', value: '04/02/2021' },
      { label: 'SURNAME', value: 'KLIMOV' },
      { label: 'REGISTER DATE', value: '04/02/2021' },
    ],
    verificationItems: [
      { label: 'DOCUMENT VERIFICATION', status: 'YES', date: '04/02/2021' },
      { label: 'SELFIE VERIFICATION', status: 'YES' },
    ],
  },
  '4545322233': {
    email: 'pankich@gmail.com',
    balanceCards: [
      { label: 'ACCOUNT BALANCE', value: '50 000' },
      { label: 'BONUS BALANCE', value: '500' },
      { label: 'BONUS BALANCE', value: '2%' },
    ],
    leftColumn: [
      { label: 'ID', value: '4545322233' },
      { label: 'CONTACT NUMBER', value: '+7 984 344 23 32' },
      { label: 'EMAIL', value: 'pankich@gmail.com' },
      { label: 'COUNTRY', value: 'CANADA' },
    ],
    rightColumn: [
      { label: 'NAME', value: 'PAUL' },
      { label: 'BIRTH DATE', value: '04/02/2021' },
      { label: 'SURNAME', value: 'KLIMOV' },
      { label: 'REGISTER DATE', value: '04/02/2021' },
    ],
    verificationItems: [
      { label: 'DOCUMENT VERIFICATION', status: 'YES', date: '04/02/2021' },
      { label: 'SELFIE VERIFICATION', status: 'YES' },
    ],
  },
};

const DEFAULT_PLAYER = {
  email: 'unknown@example.com',
  balanceCards: [
    { label: 'ACCOUNT BALANCE', value: '0' },
    { label: 'BONUS BALANCE', value: '0' },
    { label: 'BONUS BALANCE', value: '0%' },
  ],
  leftColumn: [
    { label: 'ID', value: '—' },
    { label: 'CONTACT NUMBER', value: '—' },
    { label: 'EMAIL', value: '—' },
    { label: 'COUNTRY', value: '—' },
  ],
  rightColumn: [
    { label: 'NAME', value: '—' },
    { label: 'BIRTH DATE', value: '—' },
    { label: 'SURNAME', value: '—' },
    { label: 'REGISTER DATE', value: '—' },
  ],
  verificationItems: [
    { label: 'DOCUMENT VERIFICATION', status: '—' },
    { label: 'SELFIE VERIFICATION', status: '—' },
  ],
};

type TabId = 'summary' | 'transactions' | 'wallet-transaction';

const TABS: { id: TabId; label: string }[] = [
  { id: 'summary', label: 'SUMMARY' },
  { id: 'transactions', label: 'TRANSACTIONS' },
  { id: 'wallet-transaction', label: 'WALLET TRANSACTION' },
];

export function PlayerProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('summary');
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);

  const playerId = id ?? '';
  const player = (playerId && MOCK[playerId]) ? MOCK[playerId] : { ...DEFAULT_PLAYER, leftColumn: [{ label: 'ID', value: playerId }, ...DEFAULT_PLAYER.leftColumn.slice(1)] };

  return (
    <>
      <div className="border-contour border-b border-solid flex h-16 items-center justify-between px-6 py-3 shrink-0 w-full">
        <div className="flex flex-1 gap-0.5 items-center min-h-0 min-w-0">
          <span className="font-sofia font-bold text-base text-black-60 uppercase">ALL CASINOS</span>
          <span className="text-black-60 mx-1">/</span>
          <span className="font-sofia font-bold text-base text-black-60 uppercase">PLAYERS</span>
          <span className="text-black-60 mx-1">/</span>
          <span className="font-sofia font-bold text-base text-black-60 uppercase">CURRENT PLAYER</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-10 items-start min-h-0 min-w-0 px-4 sm:px-6 lg:px-10 w-full overflow-auto pb-16">
        {/* Header: back + email + ID + refresh */}
        <div className="flex flex-wrap gap-4 h-15 items-center w-full">
          <button type="button" onClick={() => navigate('/players')} className="flex gap-2.5 items-center text-white hover:opacity-80 transition-opacity" aria-label="Back">
            <svg className="shrink-0 w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className="font-sofia font-bold text-h2 text-white uppercase leading-none flex-1 min-w-0 truncate">{player.email}</h1>
          </button>
          <span className="font-sofia font-bold text-base text-white-60 uppercase shrink-0">ID: {playerId}</span>
          <button type="button" className="bg-primary flex gap-1 h-10 items-center justify-center px-3 rounded-basic shrink-0 text-white" aria-label="Refresh">
            <svg className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
            </svg>
            <span className="font-sofia font-bold text-base uppercase">Refresh</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-contour border-b border-solid flex w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`font-sofia font-bold text-base uppercase h-10 px-2 shrink-0 transition-colors ${
                activeTab === tab.id ? 'text-white border-b-2 border-primary-high' : 'text-white-80 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'summary' && (
          <>
            <div className="flex flex-wrap gap-2 font-sofia w-full">
              {player.balanceCards.map((card) => (
                <div key={card.label} className="bg-white-3 flex flex-1 min-w-[140px] flex-col gap-2 p-5 rounded-basic border border-contour">
                  <p className="text-base text-white-60 font-bold uppercase shrink-0">{card.label}</p>
                  <p className="text-h3 text-white font-bold shrink-0">{card.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 items-center w-full">
              <button
                type="button"
                role="switch"
                aria-checked={newsletterEnabled}
                onClick={() => setNewsletterEnabled(!newsletterEnabled)}
                className={`relative h-[18px] w-8 shrink-0 rounded-full transition-colors ${newsletterEnabled ? 'bg-primary' : 'bg-black-40'}`}
              >
                <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${newsletterEnabled ? 'left-4 translate-x-[-2px]' : 'left-0.5'}`} />
              </button>
              <span className="font-sofia font-bold text-base text-black-40 uppercase">RECEIVING MARKETING NEWSLETTERS:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full font-sofia font-bold text-base uppercase">
              <div className="flex flex-1 min-w-0 flex-col">
                {player.leftColumn.map((row) => (
                  <div key={row.label} className="border-contour border-b border-solid flex items-start justify-between py-3">
                    <span className="font-sofia font-bold text-base text-black-40 uppercase shrink-0">{row.label}:</span>
                    <span className="font-sofia font-bold text-base text-white text-right break-all">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-1 min-w-0 flex-col">
                {player.rightColumn.map((row) => (
                  <div key={row.label} className="border-contour border-b border-solid flex items-start justify-between py-3">
                    <span className="font-sofia font-bold text-base text-black-40 uppercase shrink-0">{row.label}:</span>
                    <span className="font-sofia font-bold text-base text-white text-right break-all">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-3 items-center">
                <span className="font-sofia font-bold text-base text-white uppercase">KYC</span>
                <span className="bg-positive px-2 py-1 rounded-basic-4 font-sofia font-bold text-mini text-white uppercase">VERIFIED</span>
              </div>
              {player.verificationItems.map((item) => (
                <div key={item.label} className="border-contour border-b border-solid flex items-center justify-between py-3">
                  <span className="font-sofia font-bold text-base text-black-40 uppercase">{item.label}:</span>
                  <div className="flex gap-2 items-center">
                    <svg className="w-5 h-5 text-positive shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 5l-9 9-4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-sofia font-bold text-base text-positive uppercase">{item.status}</span>
                    {'date' in item && item.date && <span className="font-sofia font-bold text-base text-white">DATE: {item.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'transactions' && (
          <div className="border border-contour rounded-basic p-6 w-full bg-white-3 text-white-80 font-sofia">
            <p className="font-bold text-base uppercase">Transactions list will be here.</p>
          </div>
        )}

        {activeTab === 'wallet-transaction' && (
          <div className="border border-contour rounded-basic p-6 w-full bg-white-3 text-white-80 font-sofia">
            <p className="font-bold text-base uppercase">Wallet transactions for this player will be here.</p>
          </div>
        )}
      </div>
    </>
  );
}
