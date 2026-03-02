import React from 'react';
import { NavLink } from 'react-router-dom';
import type { SidebarMenuItem } from '../../types/admin';
import { MENU_ICONS, IconChevronDown, IconClose } from './icons';

const MENU_ITEMS: SidebarMenuItem[] = [
  { id: 'revenue', label: 'REVENUE' },
  { id: 'players', label: 'PLAYERS' },
  { id: 'transactions', label: 'TRANSACTIONS' },
  { id: 'wallet-transaction', label: 'WALLET TRANSACTION' },
  { id: 'manage', label: 'MANAGE' },
  { id: 'crm', label: 'CRM' },
  { id: 'team', label: 'TEAM' },
  { id: 'compliance', label: 'COMPLIANCE' },
  { id: 'support', label: 'SUPPORT' },
];

type SidebarProps = {
  onClose?: () => void;
  /** Id of the active menu item (e.g. 'players', 'wallet-transaction'). Default: wallet-transaction */
  activeMenuId?: string;
};

export function Sidebar({ onClose, activeMenuId = 'wallet-transaction' }: SidebarProps) {
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
          <IconClose />
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
          <IconChevronDown className="shrink-0 w-6 h-6 text-white-80" />
        </div>

        <nav className="flex flex-col gap-0.5 items-start w-full shrink-0">
          {MENU_ITEMS.map((item) => {
            const Icon = MENU_ICONS[item.id] ?? MENU_ICONS.revenue;
            const isActive = activeMenuId === item.id;
            const linkClass = `flex gap-3 h-12 items-center px-3 py-2 rounded-basic w-full shrink-0 transition-colors ${
              isActive ? 'bg-primary-20 border border-primary text-white' : 'border border-transparent text-white-80 hover:bg-white-3'
            }`;
            if (item.id === 'players') {
              return (
                <NavLink key={item.id} to="/players" className={linkClass}>
                  <Icon className="shrink-0 w-5 h-5 text-current" />
                  <span className="font-sofia font-bold text-base leading-normal uppercase whitespace-nowrap">{item.label}</span>
                </NavLink>
              );
            }
            if (item.id === 'wallet-transaction') {
              return (
                <NavLink key={item.id} to="/wallet-transactions" className={linkClass}>
                  <Icon className="shrink-0 w-5 h-5 text-current" />
                  <span className="font-sofia font-bold text-base leading-normal uppercase whitespace-nowrap">{item.label}</span>
                </NavLink>
              );
            }
            return (
              <button key={item.id} type="button" className={linkClass}>
                <Icon className="shrink-0 w-5 h-5 text-current" />
                <span className="font-sofia font-bold text-base leading-normal uppercase whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
