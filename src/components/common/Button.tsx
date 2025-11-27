// src/components/common/Button.tsx
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: PropsWithChildren<BtnProps>) {
  const base =
    'inline-flex items-center justify-center rounded-full text-sm px-4 py-2 transition disabled:opacity-60 disabled:cursor-not-allowed';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--accent)] text-white hover:bg-indigo-600'
      : 'bg-transparent text-[var(--text-soft)] hover:bg-[var(--bg-soft)]';

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
