// src/components/chat/MessageList.tsx
import { useEffect, useRef } from 'react';
import type { Message } from '@/types/chat';
import { MessageItem } from './MessageItem';

interface Props {
  messages: Message[];
}

export function MessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-center text-sm text-[var(--text-soft)] px-6">
        <p>
          Apa yang bisa saya bantu? Mulai dengan mengetik pertanyaanmu di bawah.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto px-2 sm:px-4 py-4">
      {messages.map(msg => (
        <MessageItem key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
