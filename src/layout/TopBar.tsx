// src/layout/TopBar.tsx
import { APP_NAME } from '@/config/app';
import { ModelSwitcher } from '@/components/model/ModelSwitcher';

export function TopBar() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
      <div className="flex items-center gap-2">
        <span className="text-base sm:text-lg font-semibold tracking-tight">
          ChatGpt
        </span>
        <span className="hidden sm:inline text-xs text-[var(--text-soft)]">
          {APP_NAME}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <ModelSwitcher />
      </div>
    </header>
  );
}
