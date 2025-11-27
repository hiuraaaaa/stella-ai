// src/layout/Sidebar.tsx
import { HistoryList } from '@/components/history/HistoryList';

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 border-r border-[var(--border-subtle)] bg-[var(--bg-main)] px-3 py-4">
      <HistoryList />
    </aside>
  );
}
