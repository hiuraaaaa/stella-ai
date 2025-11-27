// src/components/chat/MessageInput.tsx
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/common/Button';

interface Props {
  onSend: (value: string) => Promise<void> | void;
  disabled?: boolean;
}

export function MessageInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim() || disabled) return;

    const text = value;
    setValue('');
    await onSend(text);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 sm:px-4 py-3"
    >
      <div className="flex items-end gap-2">
        <textarea
          className="flex-1 resize-none rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent max-h-32"
          rows={1}
          placeholder="Tulis pesanmu..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type="submit" disabled={disabled || !value.trim()}>
          Kirim
        </Button>
      </div>
    </form>
  );
}
