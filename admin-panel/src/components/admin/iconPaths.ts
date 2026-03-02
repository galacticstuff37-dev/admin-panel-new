/** Base path for assets (respects PUBLIC_URL for GitHub Pages) */
const base = process.env.PUBLIC_URL || '';

/** Paths to menu icons from MC Admin Master (public/icons/) */
export const MENU_ICON_SRC: Record<string, string> = {
  revenue: `${base}/icons/revenue.svg`,
  players: `${base}/icons/Players.svg`,
  transactions: `${base}/icons/Transaction.svg`,
  'wallet-transaction': `${base}/icons/Wallet.svg`,
  manage: `${base}/icons/Manage.svg`,
  crm: `${base}/icons/CRM.svg`,
  team: `${base}/icons/Team.svg`,
  compliance: `${base}/icons/Complinece.svg`,
  support: `${base}/icons/Support.svg`,
};
