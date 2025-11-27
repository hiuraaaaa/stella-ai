// src/components/history/HistoryList.tsx
import { useChatContext } from '@/context/ChatProvider';
import { Button } from '@/components/common/Button';
import { HistoryItem } from './HistoryItem';

export function HistoryList() {
  const { sessions, activeSession, newSession, switchSession } =
    useChatContext();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-[var(--text-soft)]">
          Riwayat
        </span>
        <Button variant="ghost" className="text-xs px-2 py-1" onClick={newSession}>
          + Baru
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        {sessions.length === 0 && (
          <p className="text-xs text-[var(--text-soft)]">
            Belum ada percakapan. Mulai obrolan baru.
          </p>
        )}

        {sessions.map(s => (
          <HistoryItem
            key={s.id}
            session={s}
            active={s.id === activeSession?.id}
            onClick={() => switchSession(s.id)}
          />
        ))}
      </div>
    </div>
  );
}
