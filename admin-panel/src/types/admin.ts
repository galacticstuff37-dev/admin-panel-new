export type SidebarMenuItem = {
  id: string;
  label: string;
  active?: boolean;
};

export type StatCard = {
  label: string;
  value: number | string;
};

export type FilterOption = {
  id: string;
  label: string;
  type: 'search' | 'dropdown' | 'button';
  options?: string[];
};

export type WalletTransaction = {
  id: string;
  [key: string]: unknown;
};
