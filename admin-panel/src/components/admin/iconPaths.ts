/** Base path for assets in public (respects PUBLIC_URL for GitHub Pages) */
const base = process.env.PUBLIC_URL || '';

/** Menu icon filenames by sidebar item id (from MC Admin Master) */
export const MENU_ICON_SRC: Record<string, string> = {
  revenue: `${base}/icons/Revenue.svg`,
  players: `${base}/icons/Players.svg`,
  transactions: `${base}/icons/Transaction.svg`,
  'wallet-transaction': `${base}/icons/Wallet.svg`,
  manage: `${base}/icons/Manage.svg`,
  crm: `${base}/icons/CRM.svg`,
  team: `${base}/icons/Team.svg`,
  compliance: `${base}/icons/Complinece.svg`,
  support: `${base}/icons/Support.svg`,
};

export const LOGO_SRC = `${base}/icons/logoMC.svg`;
