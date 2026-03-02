import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';

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

/** Derive active menu id from pathname for sidebar highlight */
function getActiveMenuId(pathname: string): string {
  const p = pathname.replace(/\/$/, '');
  if (p.endsWith('/wallet-transactions') || p === '/wallet-transactions') return 'wallet-transaction';
  if (p.startsWith('/players') || p === '/players') return 'players';
  return 'wallet-transaction';
}

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const activeMenuId = getActiveMenuId(location.pathname);

  return (
    <div className="bg-main-bg flex items-stretch relative min-h-screen w-full font-sofia">
      <MenuToggle onClick={() => setSidebarOpen(true)} />
      <div
        className={`fixed inset-0 z-10 bg-black/50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden
      />
      <div className={`lg:relative lg:block fixed inset-y-0 left-0 z-10 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} activeMenuId={activeMenuId} />
      </div>
      <div className="flex flex-1 flex-col min-h-0 min-w-0 w-full pt-14 lg:pt-0">
        <Outlet />
      </div>
    </div>
  );
}
