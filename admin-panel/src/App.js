import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './components/admin/AdminLayout';
import { WalletTransactionsPage } from './components/admin/WalletTransactionsPage';
import { PlayersList } from './components/admin/PlayersList';
import { PlayerProfilePage } from './components/admin/PlayerProfilePage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/wallet-transactions" replace />} />
          <Route path="wallet-transactions" element={<WalletTransactionsPage />} />
          <Route path="players" element={<PlayersList />} />
          <Route path="players/:id" element={<PlayerProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
