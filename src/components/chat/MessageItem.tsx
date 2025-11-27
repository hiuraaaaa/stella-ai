// src/components/chat/MessageItem.tsx
import type { Message } from '@/types/chat';

interface Props {
  message: Message;
}

export function MessageItem({ message }: Props) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
          isUser
            ? 'bg-[var(--accent)] text-white rounded-br-sm'
            : 'bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-subtle)] rounded-bl-sm'
        }`}
        style={
          !isUser
            ? {
                boxShadow: 'var(--shadow-soft)'
              }
            : undefined
        }
      >
        {message.content}
      </div>
    </div>
  );
}
