import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  UserHeader,
  BalanceCards,
  NewsletterSubscription,
  UserInfoGrid,
  VerificationStatus,
} from './PlayerProfile';
import type { BalanceCard, UserInfoRow, VerificationItem } from '../../types/player';

const MOCK_PLAYER_DATA: Record<
  string,
  {
    email: string;
    balanceCards: BalanceCard[];
    leftColumn: UserInfoRow[];
    rightColumn: UserInfoRow[];
    verificationItems: VerificationItem[];
  }
> = {
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
  '4545322234': {
    email: 'alice@example.com',
    balanceCards: [
      { label: 'ACCOUNT BALANCE', value: '25 000' },
      { label: 'BONUS BALANCE', value: '250' },
      { label: 'BONUS BALANCE', value: '1%' },
    ],
    leftColumn: [
      { label: 'ID', value: '4545322234' },
      { label: 'CONTACT NUMBER', value: '+1 555 123 4567' },
      { label: 'EMAIL', value: 'alice@example.com' },
      { label: 'COUNTRY', value: 'USA' },
    ],
    rightColumn: [
      { label: 'NAME', value: 'ALICE' },
      { label: 'BIRTH DATE', value: '10/05/1995' },
      { label: 'SURNAME', value: 'SMITH' },
      { label: 'REGISTER DATE', value: '15/03/2022' },
    ],
    verificationItems: [
      { label: 'DOCUMENT VERIFICATION', status: 'YES', date: '15/03/2022' },
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

export function PlayerProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'summary' | 'transactions' | 'wallet-transaction'>('summary');
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);

  const playerId = id ?? '';
  const player = (playerId && MOCK_PLAYER_DATA[playerId]) ? MOCK_PLAYER_DATA[playerId] : { ...DEFAULT_PLAYER, leftColumn: [{ label: 'ID', value: playerId }, ...DEFAULT_PLAYER.leftColumn.slice(1)] };

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
        <UserHeader
          email={player.email}
          userId={playerId}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onBack={() => navigate('/players')}
        />

        {activeTab === 'summary' && (
          <>
            <BalanceCards cards={player.balanceCards} />
            <NewsletterSubscription enabled={newsletterEnabled} onToggle={setNewsletterEnabled} />
            <UserInfoGrid leftColumn={player.leftColumn} rightColumn={player.rightColumn} />
            <VerificationStatus kycStatus="VERIFIED" items={player.verificationItems} />
          </>
        )}
      </div>
    </>
  );
}
