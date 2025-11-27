// src/components/history/HistoryItem.tsx
import type { ChatSession } from '@/types/chat';

interface HistoryItemProps {
  session: ChatSession;
  active: boolean;
  onClick: () => void;
}

export function HistoryItem({ session, active, onClick }: HistoryItemProps) {
  const lastMsg = session.messages[session.messages.length - 1];
  const preview =
    lastMsg?.content.slice(0, 40).replace(/\s+/g, ' ') ??
    'Mulai percakapan baru';

  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-xl mb-1 text-xs sm:text-sm ${
        active
          ? 'bg-[var(--bg-card)] shadow-soft'
          : 'hover:bg-[var(--bg-soft)]'
      }`}
    >
      <div className="font-semibold text-[var(--text-main)] truncate">
        {session.title || 'Obrolan'}
      </div>
      <div className="text-[10px] sm:text-xs text-[var(--text-soft)] truncate">
        {preview}
      </div>
    </button>
  );
}
