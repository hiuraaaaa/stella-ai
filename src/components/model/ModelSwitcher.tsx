// src/components/model/ModelSwitcher.tsx
import { MODELS } from '@/config/models';
import { useChatContext } from '@/context/ChatProvider';

export function ModelSwitcher() {
  const { currentModelId, switchModel } = useChatContext();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-soft)] px-3 py-1 text-xs sm:text-sm">
      <span className="text-[var(--text-soft)] hidden sm:inline">Model</span>
      <select
        className="bg-transparent outline-none text-[var(--text-main)] text-xs sm:text-sm"
        value={currentModelId}
        onChange={e => switchModel(e.target.value)}
      >
        {MODELS.map(model => (
          <option key={model.id} value={model.id}>
            {model.label}
          </option>
        ))}
      </select>
    </div>
  );
}
