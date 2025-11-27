// src/components/common/Card.tsx
import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-soft"
      style={{
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-soft)'
      }}
    >
      {children}
    </div>
  );
}
