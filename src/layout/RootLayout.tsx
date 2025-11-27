// src/layout/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export function RootLayout() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[var(--bg-main)]"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <TopBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
